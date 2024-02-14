<template>
  <div id="app">
    <div id="board" v-if="this.board.length !== 0">
      <CellItem
        v-for="(value, index) in getBoardValues"
        :row="value[0]"
        :col="value[1]"
        :key="index"
        :val="this.board[value[0]][value[1]]"
        @click="dfs(value[0], value[1])"
        :class="isCellFree(value[0], value[1]) ? '' : 'cell-filled'"
      />
      <!-- :class="isCellFree(value[0], value[1]) ? '' : 'cell-filled'" -->
      <!-- :class="this.board[value[0]][value[1]] == 0 ? '' : 'cell-filled'" -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CellItem from "./components/CellItem.vue";
import { CellFillType } from "./helper/constants";

let windowWidth = ref(window.innerWidth);
let windowHeight = ref(window.innerHeight);
console.log(
  `Window width is ${windowWidth.value} and height is ${windowHeight.value}`
);

const BOARDROWS = 30;
const BOARDCOLS = Math.round(windowWidth.value / 22);
console.log(`No.of board rows are ${BOARDROWS}, and columns are ${BOARDCOLS}`);

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
  mounted: function () {
    this.initializeBoard();
  },
  methods: {
    isCellFree(row, col) {
      // console.log(this.board);
      return this.board[row][col] == 0;
    },
    initializeBoard() {
      for (let r = 0; r < BOARDROWS; r++) {
        const row = [];
        for (let c = 0; c < BOARDCOLS; c++) {
          row.push(CellFillType.Free);
        }
        this.board.push(row);
      }
    },
    getAdjIndex(row, col) {
      return [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];
    },
    dfs(row, col, depth = 3) {
      const adjValues = this.getAdjIndex(row, col);
      // console.log(
      //   `The clicked index is ${row},${col} and the adjacent values are ${adjValues}`
      // );
      if (depth <= 0) return;
      for (let adjValue of adjValues) {
        let x, y;
        [x, y] = adjValue;
        if (
          0 <= x &&
          x < BOARDROWS &&
          0 <= y &&
          y < BOARDCOLS &&
          this.board[x][y] == CellFillType.Free
        ) {
          this.board[x][y] = CellFillType.Filled;
          this.dfs(x, y, depth - 1);
          setTimeout(10);
        }
      }

      // if (
      //   0 <= x &&
      //   x < BOARDROWS &&
      //   0 <= y &&
      //   y < BOARDCOLS &&
      //   this.board[x][y] == CellFillType.Free
      // ) {
      //   this.board[x][y] = CellFillType.Filled;
      //   // this.dfs(x, y);
      //   console.log("HERE");
      // }
      // }
      this.board[row][col] = CellFillType.Filled;
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
