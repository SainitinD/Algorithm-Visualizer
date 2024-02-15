<template>
  <header>
    <div class="title">Algo Vis</div>
    <button class="btn">Start</button>
  </header>
</template>
<script>
import { CellType } from "@/helper/constants";

export default {
  name: "MainHeader",
  data() {
    return {
      cellType: CellType.Filled,
    };
  },
};
</script>
<style>
header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
}

.title {
  font-size: 1.5rem;
  /* padding-left: 10px;
  padding-top: 5px; */
}

.btn {
  font-size: 1.5rem;
  background-color: blueviolet;
  color: white;
  /* padding: 5px 15px; */
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  /* padding-right: 10px; */
}

.btn:hover {
  border: 1px solid yellow;
}
</style>
