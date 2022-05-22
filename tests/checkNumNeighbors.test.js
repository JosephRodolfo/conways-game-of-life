import { checkNumNeighbors } from "../src/utils/checkNeighbors";
import { isAlive } from "../src/utils/isAlive";

const array = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

test("expect correct number of neighbors", () => {
  expect(checkNumNeighbors(2, 2, array, isAlive)).toBe(2);
});

test("expect correct number of neighbors", () => {
    expect(checkNumNeighbors(0, 0, array, isAlive)).toBe(0);
  });

  test("expect correct number of neighbors", () => {
    expect(checkNumNeighbors(3, 2, array, isAlive)).toBe(1);
  });

  test("expect correct number of neighbors", () => {
    expect(checkNumNeighbors(4, 2, array, isAlive)).toBe(1)});