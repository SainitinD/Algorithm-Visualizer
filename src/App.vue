<template>
  <div id="app">
    <div id="board">
      <CellItem
        v-for="(value, index) in getBoardValues"
        :row="value[0]"
        :col="value[1]"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import CellItem from "./components/CellItem.vue";

let windowWidth = ref(window.innerWidth);
let windowHeight = ref(window.innerHeight);
console.log(windowWidth.value, windowHeight.value);

const BOARDROWS = 30;
const BOARDCOLS = Math.round(windowWidth.value / 22);
console.log(BOARDROWS, BOARDCOLS);

export default {
  name: "App",
  data() {
    return {
      board: [],
    };
  },
  components: {
    CellItem,
  },
  computed: {
    getBoardValues: function () {
      const boardIndices = [];

      for (let r = 0; r < BOARDROWS; r++) {
        for (let c = 0; c < BOARDCOLS; c++) {
          boardIndices.push([r, c]);
        }
      }
      return boardIndices;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#board {
  display: grid;
  gap: 0px;
}
</style>
