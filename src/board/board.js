import { diag, transpose } from "mathjs";
import { CellState, GameStatus, SolutionType } from "./constants";

function getRowStatus(rows, type) {
  const status = {
    status: GameStatus.Tie,
  };
  for (const [index, row] of rows.entries()) {
    const markers = new Set(row);
    const hasEmpty = markers.has(CellState.Empty);
    if (hasEmpty) {
      status.status = GameStatus.InProgress;
    } else {
      if (markers.size === 1) {
        let unique = markers.values().next();
        const result = {
          index,
          type,
        };
        result.status =
          unique === CellState.Circle ? GameStatus.Win : GameStatus.Lose;

        return result;
      }
    }
  }

  return status;
}

export function move(board, row, col, turn) {
  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row].splice(col, 1, turn);

  return { newBoard };
}



export function boardStatus(board) {
  const rowStatus = getRowStatus(board, SolutionType.Row);
  if (GameStatus.isFinished(rowStatus.status)) {
    return rowStatus;
  }
  const columns = transpose(board);
  let status = getRowStatus(columns, SolutionType.Column);
  if (GameStatus.isFinished(status.status)) {
    return status;
  }
  const diags = [diag(board), diag(board, -1)];
  status = getRowStatus(diags, SolutionType.Diagonal);
  if (GameStatus.isFinished(status.status)) {
    return status;
  }

  // Tie or in progress
  return rowStatus;
}
