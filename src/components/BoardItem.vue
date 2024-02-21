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
  <div id="stats">
    <!-- v-if="
        this.metaData.isMouseDown &&
        (this.metaData.cellTypeClicked == 0 ||
          this.metaData.cellTypeClicked == 1)
      " -->
    <p
      id="hint-text"
      v-if="
        this.metaData.isMouseDown &&
        (this.metaData.cellTypeClicked == 0 ||
          this.metaData.cellTypeClicked == 1)
      "
    >
      * Click somewhere on the board to place the
      <span
        :style="
          this.metaData.cellTypeClicked == 0
            ? { color: 'rgb(0, 255, 0)' }
            : { color: 'red' }
        "
        >{{ this.metaData.cellTypeClicked == 0 ? "start" : "end" }}</span
      >
      cell *
    </p>
    <p
      id="fyi-text"
      v-if="
        !(
          this.metaData.isMouseDown &&
          (this.metaData.cellTypeClicked == 0 ||
            this.metaData.cellTypeClicked == 1)
        )
      "
    >
      Made with ❤️ by SainitinD
    </p>
    <p id="stats-text">
      No.of visited cells: {{ this.visited.length }} &nbsp; No.of path cells:
      {{ this.path.length }}
    </p>
  </div>
</template>
<script>
import CellItem from "./CellItem.vue";
import { AlgoType, CellType, WallType } from "@/helper/Enums";

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
    // Setup
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
    "options.wallType": function (newVal, oldVal) {
      if (newVal == oldVal) return;
      if (newVal == WallType.NOMAZE) {
        this.clearWalls();
      } else if (newVal == WallType.RANDOMMAZE) {
        this.createRandomMaze();
      }
    },
    didClearWalls: function () {
      console.log("Cleared all the walls");
      this.clearWalls();
    },
    didAlgoRun: async function (newVal) {
      if (newVal == true) {
        var result = false;
        if (this.options.algoType == AlgoType.DFS) {
          result = await this.dfs();
          if (result) {
            await this.sleep(200);
            this.path.reverse();
          }
        } else if (this.options.algoType == AlgoType.BFS) {
          result = await this.bfs();
        } else if (this.options.algoType == AlgoType.Djikstra) {
          console.log("Djikstra Called but none implemented :(");
        } else if (this.options.algoType == AlgoType.ASTAR) {
          console.log("A* Called but none implemented :(");
        }

        if (result) {
          console.log("Tracing Shortest Path now!");
          await this.tracePath();
        } else {
          console.log("Path wasn't found :(");
          // alert("Path wasn't found :(");
        }
      } else {
        await this.clearVisitedCells();
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
            cellType: CellType.FREE,
          });
        }
        board.push(row);
      }
      return board;
    },
    async createRandomMaze() {
      for (let r = 0; r < this.metaData.BOARDROWS; r++) {
        for (let c = 0; c < this.metaData.BOARDCOLS; c++) {
          if (
            this.board[r][c].cellType != CellType.START &&
            this.board[r][c].cellType != CellType.END
          ) {
            if (Math.random() > 0.7) {
              this.board[r][c].cellType = CellType.WALL;
              await this.sleep(1);
            }
          }
        }
      }
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
    async clearVisitedCells() {
      this.$emit("startedClearing");
      for (const [r, c] of this.visited) {
        if (
          this.board[r][c].cellType == CellType.FILLED ||
          this.board[r][c].cellType == CellType.PATH
        ) {
          this.board[r][c].cellType = CellType.FREE;
          await this.sleep(0.0000000001);
        }
      }
      this.visited = [];
      this.path = [];
      this.$emit("endedClearing");
    },
    sleep(milliseconds) {
      /**
       * A helper function to make the program sleep for a specified milliseconds.
       * Used to allow for the animations to run while performing the path-finding searchs
       * @param {number} milliseconds milliseconds you want to wait for
       */
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    getAdjIndexes(row, col) {
      /**
       * Calculcates the valid adjacent cells and returns them.
       * A Valid adjacent cell is a cell that is in the board and isn't a start cell, wall cell or a filled cell.
       * @param {number} row indicates the row index of a cell
       * @param {number} col indicates the column index of a cell
       */
      const res = [];
      const offsets = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
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
    },
    async bfs() {
      /**
       * Perform the bfs from the start cell to the end cell
       */

      // setup
      this.visited = [];
      const bfsHistory = [];
      const queue = [[this.metaData.STARTCELL[0], this.metaData.STARTCELL[1]]];
      console.log(queue);

      // bf search
      while (queue.length > 0) {
        const [curRow, curCol] = queue.shift();
        for (const [adjRow, adjCol] of this.getAdjIndexes(curRow, curCol)) {
          if (!this.didAlgoRun) {
            // await this.clearVisitedCells();
            return false;
          }
          // when you find the end node
          if (this.board[adjRow][adjCol].cellType == CellType.END) {
            // calculcate shortest path
            bfsHistory.push([
              [adjRow, adjCol],
              [curRow, curCol],
            ]);
            this.traceBFSShortestPath(bfsHistory);
            return true;

            // Otherwise, continue the search
          } else if (this.board[adjRow][adjCol].cellType == CellType.FREE) {
            this.board[adjRow][adjCol].cellType = CellType.FILLED;

            // local variable tracking
            queue.push([adjRow, adjCol]);
            bfsHistory.push([
              [adjRow, adjCol],
              [curRow, curCol],
            ]);

            // data variable tracking
            this.visited.push([adjRow, adjCol]);
            await this.sleep(1);
          }
        }
      }
      return false;
    },
    traceBFSShortestPath(bfsHistory) {
      /**
       * Used to figure out the shortest path for bfs.
       * Updates the this.path variable with the calculated shortest path
       * @param {Array<Array, Array>} bfsHistory  Contains history of the bfs search. Each value contains the current cell and the adj cell from which it got visited
       */
      var curVal = null;
      bfsHistory.reverse();
      this.path = [];
      for (const [adjIdx, curIdx] of bfsHistory) {
        if (
          curVal == null &&
          adjIdx[0] == this.metaData.ENDCELL[0] &&
          adjIdx[1] == this.metaData.ENDCELL[1]
        ) {
          curVal = curIdx;
          this.path.push(curIdx);
          const [r, c] = curVal;
          // this.board[r][c].cellType = CellType.PATH;
          // await this.sleep(150);
          console.log(`Starting Path from end cell at [${r}, ${c}]`);
        } else if (curVal[0] == adjIdx[0] && curVal[1] == adjIdx[1]) {
          curVal = curIdx;
          const [r, c] = curVal;
          if (
            r == this.metaData.STARTCELL[0] &&
            c == this.metaData.STARTCELL[1]
          ) {
            console.log(`Found start cell at [${r}, ${c}]`);
            return;
          } else {
            // this.board[r][c].cellType = CellType.PATH;
            // await this.sleep(150);
            this.path.push(curIdx);
            console.log(
              `Going from [${adjIdx[0]}, ${adjIdx[1]}] to [${r}, ${c}]`
            );
          }
        }
      }
    },
    async dfs() {
      const dfsHelper = async (curRow, curCol) => {
        if (!this.didAlgoRun) {
          return false;
        }
        for (const [adjRow, adjCol] of this.getAdjIndexes(curRow, curCol)) {
          if (!this.didAlgoRun) {
            return false;
          }
          if (this.board[adjRow][adjCol].cellType == CellType.END) return true;
          else if (this.board[adjRow][adjCol].cellType == CellType.FREE) {
            this.board[adjRow][adjCol].cellType = CellType.FILLED;
            this.visited.push([adjRow, adjCol]);
            this.path.push([adjRow, adjCol]);
            await this.sleep(1);
            if ((await dfsHelper(adjRow, adjCol)) == true) return true;
            this.path.pop();
          }
        }
        return false;
      };
      return await dfsHelper(
        this.metaData.STARTCELL[0],
        this.metaData.STARTCELL[1]
      );
    },
    async tracePath() {
      /**
       * Traces the shortest path from the information in 'path' data variable.
       */
      if (this.path.length == 0) return;
      if (
        this.path.length == 1 &&
        this.path[0][0] == this.metaData.STARTCELL[0] &&
        this.path[0][1] == this.metaData.STARTCELL[1]
      )
        return;
      for (const [r, c] of this.path) {
        if (!this.didAlgoRun) {
          await this.clearPath();
          return;
        }
        this.board[r][c].cellType = CellType.PATH;
        await this.sleep(150);
      }
    },
    async clearPath() {
      for (const [r, c] of this.path) {
        if (
          this.board[r][c].cellType == CellType.FILLED ||
          this.board[r][c].cellType == CellType.PATH
        ) {
          this.board[r][c].cellType = CellType.FREE;
          await this.sleep(0.000001);
        }
      }
      this.path = [];
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
  margin: 1.5em 1.5em 0em 1.5em;
}

#stats {
  margin-top: 0.5em;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
}

#fyi-text {
  text-align: start;
  margin-left: 5em;
}
#stats-text {
  text-align: end;
  margin-right: 5em;
}

.row {
  /* display: grid; */
  display: flex;
}

#hint-text {
  text-align: start;
  margin-left: 5em;
  animation: shake 8.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  animation-iteration-count: infinite;
}

@keyframes shake {
  1%,
  9% {
    transform: translate3d(-1px, 0, 0);
  }

  2%,
  8% {
    transform: translate3d(2px, 0, 0);
  }

  3%,
  5%,
  7% {
    transform: translate3d(-4px, 0, 0);
  }

  4%,
  6% {
    transform: translate3d(4px, 0, 0);
  }
  10% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}
</style>
