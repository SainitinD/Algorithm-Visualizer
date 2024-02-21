<template>
  <div id="app">
    <MainHeader
      @changeAlgoOptions="changeAlgoOptions"
      @changeWallOptions="changeWallOptions"
      @changeSpeedOptions="changeSpeedOptions"
      @toggleAlgoRun="this.didAlgoRun = !this.didAlgoRun"
      @toggleClearWalls="this.didClearWalls = !this.didClearWalls"
      @toggleClearPath="this.didClearPath = !this.didClearPath"
      :didAlgoRun="didAlgoRun"
      :isPossibleToClear="isPossibleToClear"
      @clearPath="didAlgoRun = false"
    />
    <BoardItem
      :options="this.options"
      :didAlgoRun="this.didAlgoRun"
      :didClearWalls="didClearWalls"
      :didClearPath="didClearPath"
      @startedClearing="isPossibleToClear = false"
      @endedClearing="isPossibleToClear = true"
    />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import BoardItem from "./components/BoardItem.vue";
import { AlgoType, SpeedType, WallType } from "./helper/Enums";

// path, visited, board,

export default {
  name: "App",
  components: {
    MainHeader,
    BoardItem,
  },
  data() {
    return {
      didAlgoRun: false,
      isPossibleToClear: true,
      didClearWalls: false,
      didClearPath: false,
      options: {
        algoType: AlgoType.DFS,
        wallType: WallType.NOMAZE,
        speed: SpeedType.FAST,
      },
    };
  },
  methods: {
    changeAlgoOptions: function (newVal) {
      console.log(
        `Changed algo type to ${this._getNameFromType("Algo", newVal)}`
      );
      this.options.algoType = newVal;
    },
    changeWallOptions: function (newVal) {
      console.log(
        `Changed wall type to ${this._getNameFromType("Wall", newVal)}`
      );
      this.options.wallType = newVal;
    },
    changeSpeedOptions: function (newVal) {
      console.log(
        `Changed speed type to ${this._getNameFromType("Speed", newVal)}`
      );
      this.options.speed = newVal;
    },
    _getNameFromType(type, val) {
      if (type === "Algo") {
        if (val == AlgoType.DFS) {
          return "DFS";
        } else if (val == AlgoType.BFS) {
          return "BFS";
        } else if (val == AlgoType.Djikstra) {
          return "Dijkstra";
        } else if (val == AlgoType.ASTAR) {
          return "A*";
        }
      } else if (type === "Wall") {
        if (val == WallType.NOMAZE) {
          return "No Maze";
        } else if (val == WallType.RANDOMMAZE) {
          return "Random Maze";
        }
      } else if (type === "Speed") {
        if (val == SpeedType.SLOW) {
          return "SLOW";
        } else if (val == SpeedType.NORMAL) {
          return "NORMAL";
        } else if (val == SpeedType.FAST) {
          return "FAST";
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: Helvetica, sans-serif;
}

body {
  background-color: #23242a;
}

#board {
  /* display: grid; */
  gap: 0px;
  cursor: default;
}
</style>
