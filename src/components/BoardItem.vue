<template>
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
</template>
<script>
import CellItem from "./CellItem.vue";
import { CellType } from "@/helper/Enums";

export default {
  name: "BoardItem",
  props: ["options", "didAlgoRun", "didClearPath", "didClearWalls"],
  components: {
    CellItem,
  },
  data() {
    return {
      metaData: {
        STARTCELL: [12, 5],
        ENDCELL: [5, 5],
        BOARDCOLS: 42,
        BOARDROWS: 18,
        isMouseDown: false,
        cellTypeClicked: null,
        lastClickedCell: null,
      },
      path: [],
      visited: [],
      board: [],
    };
  },
  mounted: function () {
    this.board = this.createBoard();
    const [startRow, startCol] = this.metaData.STARTCELL;
    const [endRow, endCol] = this.metaData.ENDCELL;
    this.board[startRow][startCol].cellType = CellType.START;
    this.board[endRow][endCol].cellType = CellType.END;
  },
  watch: {
    "metaData.lastClickedCell": function (newVal, oldVal) {
      if (oldVal == null) return;
      if (newVal.cellType != oldVal.cellType) return;
      oldVal.cellType = CellType.FREE;
    },
    didClearWalls: function () {
      console.log("Cleared all the walls");
      this.clearWalls();
    },
    didAlgoRun: async function (newVal) {
      if (newVal == true) {
        const [row, col] = this.metaData.STARTCELL;
        await this.bfs(this.board[row][col]);
      }
    },
  },
  // mixins: [bfs],
  methods: {
    createBoard() {
      const board = [];
      for (let r = 0; r < this.metaData.BOARDROWS; r++) {
        let row = [];
        for (let c = 0; c < this.metaData.BOARDCOLS; c++) {
          row.push({
            row: r,
            col: c,
            cellType: CellType.Free,
          });
        }
        board.push(row);
      }
      return board;
    },
    handleMouseDown(cellInfo) {
      // record details on the cell clicked
      this.metaData.isMouseDown = true;
      this.metaData.cellTypeClicked = cellInfo.cellType;
      this.metaData.lastClickedCell = cellInfo;

      // debugging
      console.log("Mouse Down");
    },
    async handleMouseEnter(cellInfo) {
      if (!this.metaData.isMouseDown) return;

      if (
        this.metaData.cellTypeClicked == CellType.START &&
        cellInfo.cellType != CellType.END
      ) {
        // move the start node if its moved to a valid cell
        cellInfo.cellType = CellType.START;
        this.metaData.lastClickedCell = cellInfo;
        this.metaData.STARTCELL = [cellInfo.row, cellInfo.col];

        // debugging
        console.log(`Start Cell changed to ${cellInfo.row}, ${cellInfo.col}`);

        // if (this.didAlgoRun) {
        //   await this.clearBoard();
        //   this.dfsWithoutAnim();
        // }
      } else if (
        this.metaData.cellTypeClicked == CellType.END &&
        cellInfo.cellType != CellType.START
      ) {
        // move the end node if its moved to a valid cell
        cellInfo.cellType = CellType.END;
        this.metaData.lastClickedCell = cellInfo;
        this.metaData.ENDCELL = [cellInfo.row, cellInfo.col];

        // debugging
        console.log(`End Cell changed to ${cellInfo.row}, ${cellInfo.col}`);

        // if (this.didAlgoRun) {
        //   await this.clearBoard();
        //   this.dfsWithoutAnim();
        // }
      } else if (
        cellInfo.cellType != CellType.START &&
        cellInfo.cellType != CellType.END
      ) {
        // draw/remove wall if its requested on a valid cell
        if (cellInfo.cellType == CellType.WALL) {
          cellInfo.cellType = CellType.FREE;
        } else {
          cellInfo.cellType = CellType.WALL;
        }
      } else {
        // debugging
        console.log("Nothing Here!");
      }
    },
    handleMouseUp() {
      // record mouse has been up
      this.metaData.isMouseDown = false;

      // debugging
      console.log("Mouse Up");
    },
    clearWalls() {
      for (let r = 0; r < this.metaData.BOARDROWS; r++) {
        for (let c = 0; c < this.metaData.BOARDCOLS; c++) {
          if (this.board[r][c].cellType != CellType.WALL) continue;
          this.board[r][c].cellType = CellType.FREE;
          // this.sleep(0.01);
        }
      }
    },
    sleep(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    getAdjIndexes(row, col) {
      const offsets = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
      const res = [];
      for (const [dx, dy] of offsets) {
        if (
          0 <= row + dx &&
          row + dx < this.metaData.BOARDROWS &&
          0 <= col + dy &&
          col + dy < this.metaData.BOARDCOLS &&
          this.board[row + dx][col + dy].cellType != CellType.START &&
          this.board[row + dx][col + dy].cellType != CellType.WALL
        ) {
          res.push([row + dx, col + dy]);
        }
      }
      return res;
      // return [
      //   [row - 1, col],
      //   [row, col + 1],
      //   [row + 1, col],
      //   [row, col - 1],
      // ];
    },
    // async bfs(cellInfo) {
    //   if (!this.didAlgoRun) return false;
    //   const queue = [[cellInfo.row, cellInfo.col]];
    //   while (queue.length > 0) {
    //     // console.log(queue);
    //     let [row, col] = queue.shift();

    //     // return if we find the end node
    //     const adjCell = this.board[row][col];
    //     if (adjCell.cellType === CellType.END) {
    //       console.log("BFS: Found the end node!");
    //       return true;
    //     }
    //     adjCell.cellType = CellType.FILLED;
    //     await this.sleep(1);
    //     this.visited.push([row, col]);
    //     let adjIndexes = this.getAdjIndexes(cellInfo.row, cellInfo.col);
    //     for (let adjIndex of adjIndexes) {
    //       if (
    //         !(
    //           0 <= row &&
    //           row < this.metaData.BOARDROWS &&
    //           0 <= col &&
    //           col < this.metaData.BOARDCOLS
    //         )
    //       ) {
    //         continue;
    //       }
    //       const [adjRow, adjCol] = adjIndex;
    //       const adjCell = this.board[adjRow][adjCol];
    //       if (
    //         adjCell.cellType === CellType.WALL ||
    //         adjCell.cellType === CellType.START ||
    //         adjCell.cellType === CellType.FILLEDNOANIM
    //       )
    //         continue;
    //       this.path.push(adjIndex);
    //       queue.push(adjIndex);
    //     }
    //   }
    // },
    async bfs(cellInfo) {
      this.visited = [];
      const queue = [[cellInfo.row, cellInfo.col]];
      while (queue.length > 0) {
        const [curRow, curCol] = queue.shift();
        for (const [adjRow, adjCol] of this.getAdjIndexes(curRow, curCol)) {
          if (this.board[adjRow][adjCol].cellType == CellType.END) {
            return true;
          } else if (this.board[adjRow][adjCol].cellType != CellType.FILLED) {
            queue.push([adjRow, adjCol]);
            this.board[adjRow][adjCol].cellType = CellType.FILLED;
            this.visited.push([adjRow, adjCol]);
            await this.sleep(1);
          }
        }
      }
      return false;
    },
  },
};
</script>
<style>
#board {
  display: grid;
  /* display: flex; */
  justify-content: center;
  cursor: default;
  margin: 1.5em;
}

.row {
  /* display: grid; */
  display: flex;
}
</style>
