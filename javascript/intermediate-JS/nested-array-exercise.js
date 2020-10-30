// 1 
const rotate = (arr, num) => {
    arrCopy = arr.slice();
    console.log(arrCopy)
    let cycle = num % arrCopy.length;
    for (let i = 0; i < cycle; i++) {
        arrCopy.unshift(arrCopy.pop());
    }
    return arrCopy;
}

// 2
function makeXOGrid(r, c) {
    let finalArr = [];
    for (let i = 0; i < r; i++) {
        let innerArr = []
        for (let j = 0; j < c; j++) {
            if (finalArr.length > 0 && innerArr.length === 0) {
                let lastArr = finalArr[finalArr.length-1];
                    if (lastArr[lastArr.length-1] === "O") {
                        innerArr.push("X")
                    }
                    else {
                        innerArr.push("O")
                    }
                         
            }
            else {
                if (innerArr[innerArr.length-1] == "X") {
                    innerArr.push("O");
                }
                else {
                    innerArr.push("X")
                }
            }
    }
        finalArr.push(innerArr);
    }
    return finalArr;
}
