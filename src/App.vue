<template>
  <div id="app">
    <div id="board" v-if="this.board.length !== 0">
      <div class="row" v-for="(row, rowIdx) in board" :key="rowIdx">
        <CellItem
          v-for="cellInfo in row"
          :key="cellInfo.id"
          :cellInfo="cellInfo"
          @click="dfs(cellInfo)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CellItem from "./components/CellItem.vue";
import { CellType } from "./helper/constants";
// import { CellFillType } from "./helper/constants";

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
  components: {
    CellItem,
  },
  data() {
    return {
      board: [],
      cellKey: 0,
    };
  },
  mounted: function () {
    // createBoard();
    this.createBoard();
  },
  methods: {
    createBoard() {
      var _cellKey = 0;
      for (let r = 0; r < BOARDROWS; r++) {
        let row = [];
        for (let c = 0; c < BOARDCOLS; c++) {
          row.push({
            id: _cellKey,
            row: r,
            col: c,
            cellType: CellType.Free,
          });
          _cellKey += 1;
        }
        this.board.push(row);
      }
      this.cellKey = _cellKey;
    },
    getAdjIndex(row, col) {
      return [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];
    },
    dfs(cellInfo) {
      setTimeout(() => {
        cellInfo.cellType = CellType.Filled;
        const adjValues = this.getAdjIndex(cellInfo.row, cellInfo.col);
        for (let adjValue of adjValues) {
          let [x, y] = adjValue;
          if (0 <= x && x < BOARDROWS && 0 <= y && y < BOARDCOLS) {
            // console.log(
            //   `The clicked index is ${adjValue.row},${adjValue.col} and the adjacent values are ${adjValue}`
            // );
            const adjCellInfo = this.board[x][y];
            if (adjCellInfo.cellType === CellType.Free) {
              adjCellInfo.cellType = CellType.Filled;
              console.log(adjCellInfo.row, adjCellInfo.col);
              this.dfs(adjCellInfo);
            }
          }
        }
      }, 25);
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

.row {
  display: grid;
}
</style>
