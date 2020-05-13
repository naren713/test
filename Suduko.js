function sudoku(initialInput) {
    var initObj = {},
        tempObj,
        iter = 81;
    while (iter > 0) {
        iter = 0;
        for (var v = 0; v < initialInput.length; v++) {
            for (var h = 0; h < initialInput.length; h++) {
                initObj = {};
                // console.log(initialInput[v][h]);
                if (initialInput[v][h] === 0) {
                    for (var i = 0; i < 9; i++) {
                        if (initialInput[v][i] > 0) {
                            initObj[initialInput[v][i]] = true;
                        }
                        if (initialInput[i][h] > 0) {
                            initObj[initialInput[i][h]] = true;
                        }
                    }
                    for (
                        var vBox = Math.floor(v / 3) * 3; vBox < Math.floor(v / 3) * 3 + 3; vBox++
                    ) {
                        for (
                            var hBox = Math.floor(h / 3) * 3; hBox < Math.floor(h / 3) * 3 + 3; hBox++
                        ) {
                            if (initialInput[vBox][hBox]) {
                                initObj[initialInput[vBox][hBox]] = true;
                            }
                        }
                    }
                    // console.log( initObj );
                    tempObj = Object.keys(initObj);
                    // console.log(typeof(tempObj));
                    if (tempObj.length === 8) {
                        for (var j = 0; j < 10; j++) {
                            // console.log(tempObj.indexOf(j.toString()) < 0);
                            if (tempObj.indexOf(j.toString()) < 0) {
                                // console.log(v,h);
                                initialInput[v][h] = j;
                            }
                        }
                    } else {
                        iter++;
                    }
                }
            }
        }
    }
    return initialInput;
}

var initialInput = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

let result = sudoku(initialInput);

let res = [];

for (var k = 0; k < initialInput.length; k++) {
    for (var l = 0; l < initialInput.length; l++) {
        res.length = 9;
        res.push(result[k][l]);
    }
}

console.log(res.length);