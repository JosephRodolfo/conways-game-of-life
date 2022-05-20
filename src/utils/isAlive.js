//checks that cell is on board and alive, i.e. 1 instead of 0

export const isAlive = (x, y, array)=>
{
    if (x < 0 || x >= array.length || y < 0 || y >= array[0].length){
        return false;
    }

return array[x][y] !== 0 ? 1 : 0


  }
