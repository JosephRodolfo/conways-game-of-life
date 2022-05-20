
//checks each cells neigbhors and returns an updated array based on what cells are alive or dead based on their neighbors

export const checkNeighbors = (array, isAlive, conwayLogicHandler) => {
    let newArray = array;
    for (let c = 0; c < array.length; c++) {
        for (let i = 0; i < array.length; i++) {
          let numAlive =
            isAlive(c - 1, i - 1, array) +
            isAlive(c, i - 1, array) +
            isAlive(c + 1, i - 1, array) +
            isAlive(c - 1, i, array) +
            isAlive(c + 1, i, array) +
            isAlive(c - 1, i + 1, array) +
            isAlive(c, i + 1, array) +
            isAlive(c + 1, i + 1, array);
            newArray[c][i] = conwayLogicHandler(
                isAlive(c, i, array),
                numAlive
              );

        }
    }
    return newArray;
}