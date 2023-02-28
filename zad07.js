'use strict';
const person1 = {
    name: "Agata",
    age: 21,
};

const person2 = {
    name: "Tomasz",
    age: 25,
};

const person3 = {
    name: "Alicja",
    age: 31,
};

const person4 = {
    name: "Jan",
    age: 20,
};

let spis = []

spis.push(person1,person2,person3,person4)

console.log(spis)
let sum=0

for(let i=0;i<spis.length;i++){
   sum+=spis[i].age 
}
let avg=sum/spis.length
console.log(sum)
console.log(avg)
