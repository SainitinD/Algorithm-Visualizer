<template>
  <header>
    <div class="title">Algo Vis by Sai</div>
    <div class="header-row">
      <CustomDropDown
        @changeOptions="changeAlgoOptions"
        :propVals="['DFS', 'BFS', 'Dijkstra', 'A*']"
      />
      <CustomDropDown
        @changeOptions="changeWallOptions"
        :propVals="['No Maze', 'Random Maze']"
      />
      <CustomDropDown
        @changeOptions="changeSpeedOptions"
        :propVals="['Slow', 'Normal', 'Fast']"
      />
      <button @click="this.$emit('toggleAlgoRun')">Visualize</button>
      <button @click="this.$emit('toggleClearWalls')" class="clear-btn">
        Clear Walls
      </button>
      <button @click="this.$emit('toggleClearPath')" class="clear-btn">
        Clear Path
      </button>
    </div>
  </header>
</template>
<script>
import CustomDropDown from "./CustomDropDown.vue";

// Algo Type, Wall Type, Speed Type, Visualize, Clear Walls, Clear Path

export default {
  name: "MainHeader",
  components: { CustomDropDown },
  data() {
    return {};
  },
  methods: {
    changeAlgoOptions: function (newVal) {
      this.$emit("changeAlgoOptions", newVal);
    },
    changeWallOptions: function (newVal) {
      this.$emit("changeWallOptions", newVal);
    },
    changeSpeedOptions: function (newVal) {
      this.$emit("changeSpeedOptions", newVal);
    },
  },
};
</script>
<style>
.title {
  font-size: 3.25rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.33em;
}

.header-row {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  align-items: center;
  flex-wrap: wrap;
}

button {
  background: #2a2f3b;
  color: #fff;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 0.75em;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  min-width: 11em;
  text-align: center;
}

.clear-btn {
  background-color: rgb(198, 1, 1);
  border: 2px rgb(198, 1, 1) solid;
}

button:hover {
  background: #323741;
  border: 2px #323741 solid;
}

.clear-btn:hover {
  background-color: rgb(228, 1, 1);
  border: 2px rgb(228, 1, 1) solid;
}
</style>
