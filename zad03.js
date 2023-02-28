const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 

for(let i=0;i<testArray.length;i++){
    if(typeof testArray[i]=="object" && testArray[i]!=null){ 
        let temp = testArray[i].length 
        let temp2= testArray[i]
        delete testArray[i]
        testArray.splice(i,0,...temp2)
        i+=temp
    }
}
console.log(testArray)