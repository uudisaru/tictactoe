export const BoardStatus = Object.freeze({
  Uninitialized: "uninitialized",
  InProgress: "in-progress",
  Lose: "lose",
  Tie: "tie",
  Win: "win",

  isFinished: status =>
    status === BoardStatus.Lose ||
    status === BoardStatus.Win
});

export const Turn = Object.freeze({
  Circle: 1,
  Cross: -1
});

export const CellState = Object.freeze({
  ...Turn,
  Empty: 0
});

export const INITIAL_BOARD = {
  board: [
    [CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty],
    [CellState.Empty, CellState.Empty, CellState.Empty]
  ],
  result: null,
  status: BoardStatus.Uninitialized,
  turn: Turn.Circle
};
