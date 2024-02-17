<template>
  <div id="app">
    <MainHeader @click="this.pathfind()" />
    <div id="board" v-if="this.board.length !== 0">
      <div class="row" v-for="(row, rowIdx) in board" :key="rowIdx">
        <CellItem
          v-for="cellInfo in row"
          :key="cellInfo.id"
          :cellInfo="cellInfo"
          @mousedown="this.handleMouseDown(cellInfo)"
          @mouseenter="this.handleMouseEnter(cellInfo)"
          @mouseup="this.handleMouseUp"
        />
      </div>
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

export default {
  name: "App",
  components: {
    CellItem,
    MainHeader,
  },
  data() {
    return {
      board: [],
      path: [],
      isMouseDown: false,
      cellTypeClicked: null,
      lastVisitedCell: null,
      algoType: AlgoType.DFS,
      didAlgoRun: false,
      STARTINDEX: [12, 5],
      ENDINDEX: [12, 33],
    };
  },
  mounted: function () {
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
      this.board[this.STARTINDEX[0]][this.STARTINDEX[1]].cellType =
        CellType.Start;
      this.board[this.ENDINDEX[0]][this.ENDINDEX[1]].cellType = CellType.End;

      // var [r, c] = START;
      // this.board[r][c].cellType = CellType.Start;
      // [r, c] = END;
      // this.board[r][c].cellType = CellType.End;
    },
    getAdjIndexes(row, col) {
      return [
        [row - 1, col],
        [row, col + 1],
        [row + 1, col],
        [row, col - 1],
      ];
    },
    clearBoard() {
      for (let r = 0; r < BOARDROWS; r++) {
        for (let c = 0; c < BOARDCOLS; c++) {
          if (
            this.board[r][c].cellType !== CellType.Start &&
            this.board[r][c] !== CellType.End
          ) {
            this.board[r][c].cellType = CellType.Free;
          }
        }
      }
    },
    async dfs(cellInfo) {
      // Error checking. Don't wanna run dfs if user didn't ask for it
      if (this.didAlgoRun == false) return false;

      // Find the adjacent indices of the current cell
      let adjIndexes = this.getAdjIndexes(cellInfo.row, cellInfo.col);

      // Go through each cell and dfs
      for (let [row, col] of adjIndexes) {
        // logging for debugging
        // console.log(
        //   `The current cell is at ${row},${col} and its adjacent cells are ${adjIndexes}`
        // );

        // edge case checks
        if (!(0 <= row && row < BOARDROWS && 0 <= col && col < BOARDCOLS))
          continue;

        // more edge case checks
        const adjCell = this.board[row][col];
        if (
          adjCell.cellType === CellType.Wall ||
          adjCell.cellType === CellType.Start ||
          adjCell.cellType === CellType.Filled
        )
          continue;

        // return if we find the end node
        if (adjCell.cellType === CellType.End) {
          console.log("DFS: Found the end node!");
          return true;
        }

        // Otherwise, label the cell as filled and wait for css to change
        adjCell.cellType = CellType.Filled;
        await this.sleep(1);

        // perform the dfs
        this.path.push([row, col]);
        if (await this.dfs(adjCell)) return true;
        this.path.pop();
      }
      return false;
    },
    async drawPath() {
      if (this.path.length == 0) return;
      for (let pathCell of this.path) {
        let [r, c] = pathCell;
        this.board[r][c].cellType = CellType.Path;
        await this.sleep(1);
      }
    },
    handleMouseDown(cellInfo) {
      this.isMouseDown = true;
      // record details on the cell clicked
      this.cellTypeClicked = cellInfo.cellType;
      this.lastVisitedCell = cellInfo;
      console.log("Mouse Down");
    },
    handleMouseEnter(cellInfo) {
      if (!this.isMouseDown) return;

      // functionality to draw the walls and move start and end nodes
      if (
        this.cellTypeClicked == CellType.Start &&
        cellInfo.cellType != CellType.End
      ) {
        cellInfo.cellType = CellType.Start;
        this.lastVisitedCell = cellInfo;
        this.STARTINDEX = [cellInfo.row, cellInfo.col];
        console.log(`Start Cell changed to ${cellInfo.row}, ${cellInfo.col}`);
      } else if (
        this.cellTypeClicked == CellType.End &&
        cellInfo.cellType != CellType.Start
      ) {
        cellInfo.cellType = CellType.End;
        this.lastVisitedCell = cellInfo;
        this.ENDINDEX = [cellInfo.row, cellInfo.col];
        console.log(`End Cell changed to ${cellInfo.row}, ${cellInfo.col}`);
      } else if (
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
    handleMouseUp() {
      this.isMouseDown = false;
      console.log("Mouse Up");
    },
    async pathfind() {
      // clear the board if previous pathfinding is displayed
      console.log("Starting the path finding!");
      if (this.didAlgoRun) {
        this.didAlgoRun = false;
        this.clearBoard();
        return;
      }

      // perform the path finding
      this.didAlgoRun = true;
      if (await this.dfs(this.board[this.STARTINDEX[0]][this.STARTINDEX[1]])) {
        console.log("Successfully returned");
        this.drawPath();
      } else {
        console.log("Path cannot be found!!");
      }
    },
    sleep(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
  },
  watch: {
    lastVisitedCell: function (newVal, oldVal) {
      if (oldVal == null) return;
      if (newVal.cellType != oldVal.cellType) return;
      oldVal.cellType = CellType.Free;
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
  cursor: default;
}

.row {
  display: grid;
}
</style>
