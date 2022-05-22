import { checkNeighbors } from "../src/utils/checkNeighbors";
import { isAlive } from "../src/utils/isAlive";
import { conwayLogicHandler } from "../src/utils/conwayLogicHandler";
const array = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],

  ];

  test("expect correct cells to be alive", () => {



    const newArray = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
      ];






    expect(checkNeighbors(array, isAlive, conwayLogicHandler)).toBe(newArray);
  });