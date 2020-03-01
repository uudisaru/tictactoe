import axios from "axios";

const TICTACTOE_API = "https://tictac.aktors.ee/api/board";
const API_CONFIG = {
  headers: { "Access-Control-Allow-Origin": window.origin }
};

export async function createBoard(mine) {
  const res = await axios.post(
    TICTACTOE_API + "?turn=" + (mine ? "mine" : "yours"),
    API_CONFIG
  );

  return res.data;
}

export async function takeTurn(id, x, y) {
  const res = await axios.put(
    TICTACTOE_API + `/${id}?x=${x}&y=${y}`,
    API_CONFIG
  );

  return res.data;
}
