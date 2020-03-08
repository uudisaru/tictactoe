import { boardStatus } from "./board";

test("rows board status", () => {
  let status = boardStatus([
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  expect(status).toStrictEqual({ status: "win", index: 0, type: "row" });
  status = boardStatus([
    [0, 0, 0],
    [0, 0, 0],
    [-1, -1, -1],
  ]);
  expect(status).toStrictEqual({ status: "lose", index: 2, type: "row" });
});

test("columns board status", () => {
  let status = boardStatus([
    [-1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ]);
  expect(status).toStrictEqual({ status: "win", index: 1, type: "col" });
  status = boardStatus([
    [0, 0, -1],
    [0, 0, -1],
    [1, 1, -1],
  ]);
  expect(status).toStrictEqual({ status: "lose", index: 2, type: "col" });
});

test("diags board status", () => {
  let status = boardStatus([
    [1, -1, 0],
    [0, 1, 0],
    [0, -1, 1],
  ]);
  expect(status).toStrictEqual({ status: "win", index: 0, type: "diag" });
  status = boardStatus([
    [0, 0, -1],
    [0, -1, 1],
    [-1, 0, 1],
  ]);
  expect(status).toStrictEqual({ status: "lose", index: 1, type: "diag" });
});

test("progress/draw board status", () => {
  let status = boardStatus([
    [1, -1, 0],
    [0, 0, -1],
    [0, -1, 1],
  ]);
  expect(status).toStrictEqual({ status: "in-progress" });
  status = boardStatus([
    [-1, 1, 1],
    [1, 1, -1],
    [-1, -1, 1],
  ]);
  expect(status).toStrictEqual({ status: "tie" });
});
