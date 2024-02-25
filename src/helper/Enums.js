const SpeedType = {
  SLOW: 0,
  NORMAL: 1,
  FAST: 2,
};

const WallType = {
  NOMAZE: 0,
  RANDOMMAZE: 1,
};

const AlgoType = {
  DFS: 0,
  BFS: 1,
  Djikstra: 2,
};

const CellType = {
  START: 0,
  END: 1,
  FREE: 2,
  FILLED: 3,
  WALL: 4,
  PATH: 5,
  FILLEDNOANIM: 6,
};

const SpeedValue = {
  SLOW: 100,
  NORMAL: 10,
  FAST: 1,
};

export { SpeedType, WallType, AlgoType, CellType, SpeedValue };
