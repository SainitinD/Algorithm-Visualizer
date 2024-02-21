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
  /* margin: 5px; */
  border: 1px solid grey;
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
  /* animation-name: transformDownAndUp;
  animation-duration: 0.1ms;
  animation-timing-function: ease-out;
  animation-delay: 0;*/
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

.cell-path {
  background-color: yellow;
  animation-name: transformDownAndUp;
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
  animation-delay: 0;
}

.cell-start {
  background-color: rgb(0, 255, 0);
}

.cell-end {
  background-color: rgb(255, 0, 0);
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

@keyframes transformDownAndUp {
  0% {
    transform: scale(0.7);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
