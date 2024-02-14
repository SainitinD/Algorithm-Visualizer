<template>
  <div class="cell" :style="getGridStyle"></div>
</template>
<script>
// const rowStart = row + 1;
// const rowEnd = row + 2;

export default {
  name: "CellItem",
  props: ["row", "col"],
  data() {
    return {};
  },
  computed: {
    getGridStyle: function () {
      return {
        "grid-row-start": this.row,
        "grid-row-end": (this.row ?? 0) + 1,
        "grid-column-start": this.col,
        "grid-column-end": (this.col ?? 0) + 1,
      };
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
</style>
