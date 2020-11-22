"use strict";

let arry = [1,2,3,4];

const removeElement = function(a, index) {
    let newArray = [...a];
    newArray.splice(index, 1);
    return newArray;
};

let newArray = removeElement(arry,2);