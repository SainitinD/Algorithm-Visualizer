<template>
  <header>
    <div class="title">Algo Vis</div>
    <div class="row">
      <div class="dropdown" @click="this.handleAlgoDropdown">
        <div
          class="select"
          :class="!this.algoDropDown.dropdownOpen ? '' : 'select-clicked'"
        >
          <span class="selected">{{
            this.algoDropDown.vals[this.algoDropDown.selectedVal]
          }}</span>
          <div
            :class="!this.algoDropDown.dropdownOpen ? 'caret' : 'caret-rotate'"
          ></div>
        </div>
        <ul
          class="menu"
          :class="!this.algoDropDown.dropdownOpen ? '' : 'menu-open'"
        >
          <li
            @click="this.algoDropDown.selectedVal = 0"
            :class="this.algoDropDown.selectedVal == 0 ? 'active' : ''"
          >
            DFS
          </li>
          <li
            @click="this.algoDropDown.selectedVal = 1"
            :class="this.algoDropDown.selectedVal == 1 ? 'active' : ''"
          >
            BFS
          </li>
          <li
            @click="this.algoDropDown.selectedVal = 2"
            :class="this.algoDropDown.selectedVal == 2 ? 'active' : ''"
          >
            Djikstra
          </li>
          <li
            @click="this.algoDropDown.selectedVal = 3"
            :class="this.algoDropDown.selectedVal == 3 ? 'active' : ''"
          >
            A*
          </li>
        </ul>
      </div>
      <div class="dropdown" @click="this.handleWallDropdown">
        <div
          class="select"
          :class="!this.wallDropDown.dropdownOpen ? '' : 'select-clicked'"
        >
          <span class="selected">{{
            this.wallDropDown.vals[this.wallDropDown.selectedVal]
          }}</span>
          <div
            :class="!this.wallDropDown.dropdownOpen ? 'caret' : 'caret-rotate'"
          ></div>
        </div>
        <ul
          class="menu"
          :class="!this.wallDropDown.dropdownOpen ? '' : 'menu-open'"
        >
          <li
            @click="this.wallDropDown.selectedVal = 0"
            :class="this.wallDropDown.selectedVal == 0 ? 'active' : ''"
          >
            Normal
          </li>
        </ul>
      </div>
      <div class="dropdown" @click="this.handleSpeedDropdown">
        <div
          class="select"
          :class="!this.speedDropDown.dropdownOpen ? '' : 'select-clicked'"
        >
          <span class="selected">{{
            this.speedDropDown.vals[this.speedDropDown.selectedVal]
          }}</span>
          <div
            :class="!this.speedDropDown.dropdownOpen ? 'caret' : 'caret-rotate'"
          ></div>
        </div>
        <ul
          class="menu"
          :class="!this.speedDropDown.dropdownOpen ? '' : 'menu-open'"
        >
          <li
            @click="this.speedDropDown.selectedVal = 0"
            :class="this.speedDropDown.selectedVal == 0 ? 'active' : ''"
          >
            Slow
          </li>
          <li
            @click="this.speedDropDown.selectedVal = 1"
            :class="this.speedDropDown.selectedVal == 1 ? 'active' : ''"
          >
            Normal
          </li>
          <li
            @click="this.speedDropDown.selectedVal = 2"
            :class="this.speedDropDown.selectedVal == 2 ? 'active' : ''"
          >
            Fast
          </li>
        </ul>
      </div>
      <button class="visualize-btn">Visualize</button>
      <button class="clear-walls-btn">Clear Walls</button>
      <button class="clear-path-btn">Clear Path</button>
    </div>
  </header>
</template>
<script>
// Algo Type, Wall Type, Speed Type, Visualize, Clear Walls, Clear Path

export default {
  name: "MainHeader",
  data() {
    return {
      algoDropDown: {
        dropdownOpen: false,
        vals: ["DFS", "BFS", "Dijkstra", "A*"],
        selectedVal: 0,
      },
      wallDropDown: {
        dropdownOpen: false,
        vals: ["Random Maze"],
        selectedVal: 0,
      },
      speedDropDown: {
        dropdownOpen: false,
        vals: ["Slow", "Normal", "Fast"],
        selectedVal: 0,
      },
    };
  },
  methods: {
    handleAlgoDropdown() {
      this.algoDropDown.dropdownOpen = !this.algoDropDown.dropdownOpen;
    },
    handleWallDropdown() {
      this.wallDropDown.dropdownOpen = !this.wallDropDown.dropdownOpen;
    },
    handleSpeedDropdown() {
      this.speedDropDown.dropdownOpen = !this.speedDropDown.dropdownOpen;
    },
  },
};
</script>
<style>
.row {
  display: flex;
  justify-content: center;
  font-family: Helvetica, sans-serif;
  align-items: center;
  flex-wrap: wrap;
}

.dropdown {
  min-width: 15em;
  position: relative;
  margin: 2em;
}

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  transition: all 0.3s;
}

.select-clicked {
  border: 2px #26489a solid;
  box-shadow: 0 0 0.8em #26489a;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #323741;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 4em;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hover {
  background: #2a2d35;
}

.active {
  background: #23242a;
}
.menu-open {
  display: block;
  opacity: 1;
}

button {
  width: 10vw;
}
</style>
