//converts the string ids from grid gameboard to arrays to store them in component's state, i.e. property

export function coordParseReverse(string) {

    if (string === undefined){
        return;
;    }

    let x = string.slice(1, string.indexOf("y"));

    let y = string.slice(string.indexOf("y") + 1)

    let z = [parseInt(x), parseInt(y)];
    return z;
    }