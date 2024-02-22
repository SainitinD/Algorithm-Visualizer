<template>
  <header>
    <div class="title centered">Algorithm Visualizer</div>
    <div class="header-row">
      <CustomDropDown
        @changeOptions="changeAlgoOptions"
        :didAlgoRun="didAlgoRun"
        :propVals="ALGOVALUES"
      />
      <CustomDropDown
        @changeOptions="changeWallOptions"
        :didAlgoRun="didAlgoRun"
        :propVals="MAZEVALUES"
      />
      <CustomDropDown
        @changeOptions="changeSpeedOptions"
        :didAlgoRun="didAlgoRun"
        :propVals="SPEEDVALUES"
      />
      <button
        v-if="didAlgoRun == false"
        :class="this.isPossibleToClear == false ? 'disabled' : ''"
        @click="
          if (this.isPossibleToClear == true) this.$emit('toggleAlgoRun');
        "
      >
        Visualize
      </button>
      <button
        class="clear-btn"
        v-if="didAlgoRun == true"
        @click="this.$emit('clearPath')"
      >
        Clear
      </button>
      <button
        @click="if (this.didAlgoRun == false) this.$emit('toggleClearWalls');"
        :class="this.didAlgoRun == true ? 'disabled' : ''"
        class="clear-btn"
      >
        Clear Walls
      </button>
    </div>
  </header>
</template>
<script>
import CustomDropDown from "./CustomDropDown.vue";
import { ALGOVALUES, MAZEVALUES, SPEEDVALUES } from "@/helper/Constants";

export default {
  name: "MainHeader",
  components: { CustomDropDown },
  emits: [
    "changeAlgoOptions",
    "changeWallOptions",
    "changeSpeedOptions",
    "toggleAlgoRun",
    "toggleClearWalls",
    "clearPath",
    "toggleClearPath",
  ],
  props: ["didAlgoRun", "isPossibleToClear"],
  data() {
    return {
      ALGOVALUES: ALGOVALUES,
      MAZEVALUES: MAZEVALUES,
      SPEEDVALUES: SPEEDVALUES,
    };
  },
  methods: {
    changeAlgoOptions: function (newVal) {
      this.$emit("changeAlgoOptions", newVal);
    },
    changeWallOptions: function (newVal) {
      this.$emit("changeWallOptions", newVal);
    },
    changeSpeedOptions: function (newVal) {
      this.$emit("changeSpeedOptions", newVal);
    },
  },
};
</script>
<style>
.title {
  font-size: 3.25rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.33em;
}

.header-row {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  align-items: center;
  flex-wrap: wrap;
}

button {
  background: #2a2f3b;
  color: #fff;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 0.75em;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  min-width: 11em;
  text-align: center;
}

.clear-btn {
  background-color: rgb(198, 1, 1);
  border: 2px rgb(198, 1, 1) solid;
}

button:hover {
  background: #323741;
  border: 2px #323741 solid;
}

.clear-btn:hover {
  background-color: rgb(228, 1, 1);
  border: 2px rgb(228, 1, 1) solid;
}

.disabled {
  opacity: 30%;
  transition: 0.5s;
}
</style>
