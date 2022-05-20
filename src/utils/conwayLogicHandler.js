export const conwayLogicHandler = (alive, numAliveNeighbors) => {


if ((alive || alive === 1) && numAliveNeighbors <= 3 && numAliveNeighbors >=2) {

    return 1
} else if ((!alive || alive === 0) && numAliveNeighbors >= 3) {

    return 1;

} else {

    return 0;
}


}