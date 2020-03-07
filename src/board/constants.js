import { zeros } from 'mathjs';

export const GameStatus = Object.freeze({
  Uninitialized: "uninitialized",
  InProgress: "in-progress",
  Lose: "lose",
  Tie: "tie",
  Win: "win",

  isFinished: (status) =>
    status === GameStatus.Lose || status === GameStatus.Win,
});

export const Turn = Object.freeze({
  Circle: 1,
  Cross: -1,
});

export const CellState = Object.freeze({
  ...Turn,
  Empty: 0,
});

export const SolutionType = Object.freeze({
  Row: "row",
  Column: "col",
  Diagonal: "diag",
});

export const INITIAL_BOARD = {
  board: zeros(3, 3).toArray(),
  result: null,
  status: GameStatus.Uninitialized,
  turn: Turn.Circle,
};
