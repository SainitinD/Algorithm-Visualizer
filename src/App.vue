<template>
  <div id="app">
    <div id="board" v-if="this.board.length !== 0">
      <div class="row" v-for="(row, rowIdx) in board" :key="rowIdx">
        <CellItem
          v-for="cellInfo in row"
          :key="cellInfo.id"
          :cellInfo="cellInfo"
          @click="cellInfo.cellType = 4"
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
      for (let r = 0; r < BOARDROWS; r++) {
        let row = [];
        for (let c = 0; c < BOARDCOLS; c++) {
          row.push({
            id: this.cellKey,
            row: r,
            col: c,
            cellType: CellType.Free,
          });
        }
        this.board.push(row);
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
