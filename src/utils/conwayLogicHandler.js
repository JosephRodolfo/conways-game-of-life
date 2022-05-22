export const conwayLogicHandler = (alive, numAliveNeighbors) => {


if ((alive === 1) && (numAliveNeighbors === 3 || numAliveNeighbors === 2)) {

    return 1
} else if ((alive === 0) && (numAliveNeighbors === 3)) {

    return 1;

} 

    return 0;



}