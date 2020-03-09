import axios from "axios";
import { mmCreateBoard, mmTakeTurn } from "./minimax.solver";

const TICTACTOE_API = "https://tictac.aktors.ee/api/board";
const API_CONFIG = {
  headers: { "Access-Control-Allow-Origin": window.origin }
};

async function createBoard(mine) {
  const res = await axios.post(
    TICTACTOE_API + "?turn=" + (mine ? "mine" : "yours"),
    API_CONFIG
  );

  return res.data;
}

async function takeTurn(id, x, y) {
  const res = await axios.put(
    TICTACTOE_API + `/${id}?x=${x}&y=${y}`,
    API_CONFIG
  );

  return res.data;
}


export class MinimaxBackend {
  createBoard = async (mine) => {
    const id = this.id;
    this.id += 1;
    return mmCreateBoard(mine, id);
  }

  takeTurn = async (id, x, y) => {
    return mmTakeTurn(id, x, y);
  }
}

export class ServerBackend {
  createBoard = async (mine) => {
    return createBoard(mine);
  }

  takeTurn = async (id, x, y) => {
    return takeTurn(id, x, y);
  }
}
