<template>
  <header>
    <div class="title">Algo Vis by Sai</div>
    <div class="row">
      <CustomDropDown :propVals="['DFS', 'BFS', 'Dijkstra', 'A*']" />
      <CustomDropDown :propVals="['Random Maze']" />
      <CustomDropDown :propVals="['Slow', 'Normal', 'Fast']" />
      <button>Visualize</button>
      <button class="clear-btn">Clear Walls</button>
      <button class="clear-btn">Clear Path</button>
    </div>
  </header>
</template>
<script>
import CustomDropDown from "./CustomDropDown.vue";

// Algo Type, Wall Type, Speed Type, Visualize, Clear Walls, Clear Path

export default {
  name: "MainHeader",
  data() {
    return {};
  },
  components: { CustomDropDown },
};
</script>
<style>
.title {
  font-size: 3.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.33em;
}

.row {
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
  padding: 1em;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
}

.clear-btn {
  background-color: rgb(198, 1, 1);
}

button:hover {
  background: #323741;
}

.clear-btn:hover {
  background-color: rgb(228, 1, 1);
}
</style>
