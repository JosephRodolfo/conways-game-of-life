import { conwayLogicHandler } from "../src/utils/conwayLogicHandler";

test("expect cell to be alive  or (1)", () => {
    expect(conwayLogicHandler(1, 3)).toBe(1);
  });
  test("expect cell to be dead  or (0)", () => {
    expect(conwayLogicHandler(1, 0)).toBe(0);
  });

  test("expect cell to be alive  or (1)", () => {
    expect(conwayLogicHandler(1, -2)).toBe(0);
  });

  test("expect cell to be alive  or (1)", () => {
    expect(conwayLogicHandler(0, 3)).toBe(1);
  });

  test("expect cell to be alive  or dead(1)", () => {
    expect(conwayLogicHandler(0, 2)).toBe(0);
  });

  test("expect cell to be alive  or dead (1)", () => {
    expect(conwayLogicHandler(-2, -2)).toBe(0);
  });

  test("expect cell to be alive  or dead (1)", () => {
    expect(conwayLogicHandler(1, 2)).toBe(1);
  });

  test("expect cell to be alive  or (1)", () => {
    expect(conwayLogicHandler(1, 1)).toBe(0);
  });

  test("expect cell to be alive  or (1)", () => {
    expect(conwayLogicHandler(1, 4)).toBe(0);
  });