<template>
  <div class="cell" :class="handleCellItemStyling()"></div>
  <!-- :style="getGridStyle" -->
</template>
<script>
import { CellType } from "@/helper/Enums";

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
    handleCellItemStyling() {
      if (this.cellInfo.cellType === CellType.START) {
        return "cell-start";
      } else if (this.cellInfo.cellType === CellType.END) {
        return "cell-end";
      } else if (this.cellInfo.cellType === CellType.FREE) {
        return "";
      } else if (this.cellInfo.cellType === CellType.FILLED) {
        return "cell-filled";
      } else if (this.cellInfo.cellType === CellType.WALL) {
        return "cell-wall";
      } else if (this.cellInfo.cellType === CellType.PATH) {
        return "cell-path";
      } else if (this.cellInfo.cellType === CellType.FILLEDNOANIM) {
        return "cell-filled-noAnim";
      }
    },
  },
};
</script>
<style>
.cell-filled-noAnim {
  background-color: rgba(0, 190, 218, 0.75);
}
.cell {
  width: 30px;
  height: 30px;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* margin: 5px; */
  border: 0.5px solid rgba(255, 255, 255, 0.65);
}

.cell:hover {
  /* box-shadow: 0 0 0.8em #26489a; */
  /* border-color: #3c3e49; */
  /* transform: scale(1.1); */
  background-color: rgba(128, 128, 128, 0.32);
  transition: 0.2s ease-in-out;
}

.cell-wall {
  background-color: black;
  animation-name: transformDownAndUp;
  animation-delay: 1ms;
  animation-duration: 0.31s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  border: 1px solid rgb(182, 255, 254);
}

.cell-filled {
  /* background-color: blue; */
  border: 1px solid rgb(175, 216, 248);
  animation-name: filledAnimation;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

.cell-path {
  background-color: yellow;
  animation-name: transformDownAndUp;
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
}

.cell-start {
  background-color: rgb(0, 255, 0);
  animation-name: transformDownAndUp;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
}

.cell-end {
  background-color: rgb(255, 0, 0);
  animation-name: transformDownAndUp;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
}

@keyframes filledAnimation {
  0% {
    transform: scale(0.3);
    background-color: rgba(0, 0, 66, 0.75);
    opacity: 30%;
  }

  50% {
    background-color: rgba(17, 104, 217, 0.75);
    opacity: 100%;
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

@keyframes transformDownAndUp {
  0% {
    transform: scale(0.7);
    border: 1px solid rgb(182, 255, 254);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
