'use strict';

const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];
let x = 0
for(let i=0;i<array.length;i++){

    if(typeof array[i]=="string" && typeof array[x]!="string"){
        x=i
    }else if(typeof array[i]== "number" && typeof array[x]=="string"){
        let temp = array[x]
        array[x] = array[i] 
        array[i] = temp
        x++
        i=x
    };
};

console.log(array)