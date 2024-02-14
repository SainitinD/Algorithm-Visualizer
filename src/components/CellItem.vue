<template>
  <div
    class="cell"
    :style="getGridStyle"
    :class="this.isCellFree() ? '' : 'cell-filled'"
  ></div>
</template>
<script>
import { CellType } from "@/helper/constants";

// const rowStart = row + 1;
// const rowEnd = row + 2;

export default {
  name: "CellItem",
  props: ["cellInfo"],
  data() {
    return {};
  },
  computed: {
    getGridStyle: function () {
      return {
        "grid-row-start": this.cellInfo.row,
        "grid-row-end": (this.cellInfo.row ?? 0) + 1,
        "grid-column-start": this.cellInfo.col,
        "grid-column-end": (this.cellInfo.col ?? 0) + 1,
      };
    },
  },
  methods: {
    isCellFree() {
      return this.cellInfo.cellType === CellType.Free;
    },
  },
};
</script>
<style>
.cell {
  width: 20px;
  height: 20px;
  border: 1px solid black;
}

.cell:hover {
  background-color: grey;
}

.cell-filled {
  background-color: blue;
}
</style>
