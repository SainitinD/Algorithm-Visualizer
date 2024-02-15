<template>
  <div class="cell" :style="getGridStyle" :class="selectCellStyling()"></div>
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
    selectCellStyling() {
      if (this.cellInfo.cellType === CellType.Free) {
        return "";
      } else if (this.cellInfo.cellType === CellType.Start) {
        return "cell-start";
      } else if (this.cellInfo.cellType === CellType.End) {
        return "cell-end";
      } else if (this.cellInfo.cellType === CellType.Wall) {
        return "cell-wall";
      } else {
        return "cell-filled";
      }
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

.cell-wall {
  background-color: black;
}

.cell-filled {
  /* background-color: blue; */
  border: 1px solid rgb(175, 216, 248);
  animation-name: visitedAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.cell-start {
  background-color: green;
}

.cell-end {
  background-color: red;
}

@keyframes visitedAnimation {
  0% {
    transform: scale(0.3);
    background-color: rgba(0, 0, 66, 0.75);
    border-radius: 100%;
  }

  50% {
    background-color: rgba(17, 104, 217, 0.75);
  }

  75% {
    transform: scale(1.2);
    background-color: rgba(0, 217, 159, 0.75);
  }

  100% {
    transform: scale(1);
    background-color: rgba(0, 190, 218, 0.75);
  }
}
</style>
