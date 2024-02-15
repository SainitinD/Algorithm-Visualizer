<template>
  <div id="app">
    <MainHeader />
    <div id="board" v-if="this.board.length !== 0">
      <div class="row" v-for="(row, rowIdx) in board" :key="rowIdx">
        <CellItem
          v-for="cellInfo in row"
          :key="cellInfo.id"
          :cellInfo="cellInfo"
          @click="this.modifyCellTypeClick(cellInfo)"
          @mousedown="
            this.isMouseDown = true;
            console.log('Mouse Down');
          "
          @mouseup="
            this.isMouseDown = false;
            this.modifyCellTypeClick(cellInfo);
            console.log('Mouse Up');
          "
          @mouseleave="this.modifyCellType(cellInfo)"
        />
      </div>
      <!-- @mouseleave="
            this.isMouseDown
              ? (cellInfo.cellType = CellType.Wall)
              : console.log('whoa!')
          " -->
      <!-- @click="dfs(this.board[12][5])" -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CellItem from "./components/CellItem.vue";
import MainHeader from "./components/MainHeader.vue";
import { CellType, AlgoType } from "./helper/constants";

let windowWidth = ref(window.innerWidth);
let windowHeight = ref(window.innerHeight);
console.log(
  `Window width is ${windowWidth.value} and height is ${windowHeight.value}`
);

const BOARDROWS = 30;
const BOARDCOLS = Math.round(windowWidth.value / 22);
console.log(`No.of board rows are ${BOARDROWS}, and columns are ${BOARDCOLS}`);

// const START = [15, 15];
// const END = [15, 45];

export default {
  name: "App",
  components: {
    CellItem,
    MainHeader,
  },
  data() {
    return {
      board: [],
      cellKey: 0,
      path: [],
      isMouseDown: false,
      algoType: AlgoType.DFS,
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

      this.board[12][5].cellType = CellType.Start;
      this.board[12][33].cellType = CellType.End;

      // var [r, c] = START;
      // this.board[r][c].cellType = CellType.Start;
      // [r, c] = END;
      // this.board[r][c].cellType = CellType.End;
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
        // cellInfo.cellType = CellType.Filled;
        const adjValues = this.getAdjIndex(cellInfo.row, cellInfo.col);
        for (let adjValue of adjValues) {
          let [x, y] = adjValue;
          if (0 <= x && x < BOARDROWS && 0 <= y && y < BOARDCOLS) {
            // console.log(
            //   `The clicked index is ${adjValue.row},${adjValue.col} and the adjacent values are ${adjValue}`
            // );
            const adjCellInfo = this.board[x][y];

            if (adjCellInfo.cellType === CellType.End) {
              console.log(`Found the End Node!!`);
              console.log(this.path);
              return true;
            } else if (adjCellInfo.cellType === CellType.Free) {
              adjCellInfo.cellType = CellType.Filled;
              //console.log(adjCellInfo.row, adjCellInfo.col);
              this.path.push([adjCellInfo.row, adjCellInfo.col]);
              console.log(this.path);
              if (this.dfs(adjCellInfo)) return true;
              this.path.pop();
            }
          }
        }
      }, 25);
    },
    modifyCellType(cellInfo) {
      if (
        this.isMouseDown &&
        cellInfo.cellType != CellType.Start &&
        cellInfo.cellType != CellType.End
      ) {
        if (cellInfo.cellType == CellType.Wall) {
          cellInfo.cellType = CellType.Free;
        } else {
          cellInfo.cellType = CellType.Wall;
        }
      } else {
        console.log("Nothing Here!");
      }
    },
    modifyCellTypeClick(cellInfo) {
      if (cellInfo.cellType == CellType.Wall) {
        cellInfo.cellType = CellType.Free;
      } else {
        cellInfo.cellType = CellType.Wall;
      }
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
