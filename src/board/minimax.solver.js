import { GameStatus, TurnType } from "./constants";

export function minimaxOptimizer(board, marker, depth, alpha, beta) {
  let bestMove = [-1, -1];
  let bestScore = marker === TurnType.PlayerMarker ? GameStatus.Win : 1;

}