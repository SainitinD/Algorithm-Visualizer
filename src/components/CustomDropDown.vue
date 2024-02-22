<template>
  <div class="dropdown" @click="this.handleDropdown">
    <div class="select" :class="!this.dropdownOpen ? '' : 'select-clicked'">
      <span
        class="selected"
        :class="{
          'menu-disabled': this.didAlgoRun,
          'menu-enabled': !this.didAlgoRun,
        }"
        >{{ this.vals[this.selectedVal] }}</span
      >
      <div
        :class="{
          'caret-rotate': this.dropdownOpen,
          caret: !this.dropdownOpen,
          'menu-disabled': this.didAlgoRun,
        }"
      ></div>
    </div>
    <ul class="menu" :class="!this.dropdownOpen ? '' : 'menu-open'">
      <li
        v-for="(val, index) in this.propVals"
        @click="this.selectedVal = index"
        :key="index"
        :class="this.selectedVal == index ? 'active' : ''"
      >
        {{ val }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CustomDropDown",
  props: ["propVals", "didAlgoRun", "defaultIndex"],
  data() {
    return {
      dropdownOpen: false,
      vals: this.propVals,
      selectedVal: 0,
    };
  },
  mounted: function () {
    if (this.defaultIndex) {
      this.selectedVal = this.defaultIndex;
    }
  },
  methods: {
    handleDropdown() {
      if (!this.didAlgoRun) {
        this.dropdownOpen = !this.dropdownOpen;
      }
    },
  },
  watch: {
    selectedVal: function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.$emit("changeOptions", newVal);
      }
    },
    didAlgoRun: function (newVal) {
      if (newVal) {
        this.dropdownOpen = false;
      }
    },
  },
};
</script>
<style>
.dropdown {
  min-width: 11em;
  position: relative;
  /* margin: 2em; */
}

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  padding: 0.75em;
  cursor: pointer;
  transition: all 0.3s;
}

.select-clicked {
  border: 2px #26489a solid;
  box-shadow: 0 0 0.8em #26489a;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #323741;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 4em;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  padding: 0.75em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hover {
  background: #2a2d35;
}

.active {
  background: #23242a;
}

.menu-open {
  display: block;
  opacity: 1;
}

.menu-disabled {
  opacity: 30%;
  transition: 0.5s;
}

.menu-enabled {
  opacity: 100%;
  transition: 0.5s;
}
</style>
