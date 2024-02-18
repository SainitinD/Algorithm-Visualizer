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
  name: "Board",
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
  },
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
        this.metaData.STARTINDEX = [cellInfo.row, cellInfo.col];

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
        this.metaData.ENDINDEX = [cellInfo.row, cellInfo.col];

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
