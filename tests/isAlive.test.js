import { isAlive } from "../src/utils/isAlive";

const array = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
];

test("expect coordinates to  not be alive", () => {
  expect(isAlive(0, 0, array)).toBe(0);
});

test("expect coordinates to  not be alive", () => {
    expect(isAlive(8, 8, array)).toBe(0);
  });

test("expect coordinates to  be  alive", () => {
  expect(isAlive(9, 9, array)).toBe(1);
});

test("expect coordinates to  be  alive", () => {
    expect(isAlive(3, 5, array)).toBe(1);
  });

test("expect coorditates off board to  not be false", () => {
  expect(isAlive(9, -9, array)).toBe(false);
});

test("expect coorditates off board to  not be false", () => {
  expect(isAlive(1100, 3, array)).toBe(false);
});
