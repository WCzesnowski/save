const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
let arr = [];
for(i=0;i<numbers.length;i++){
    let x=0
    for(j=0;j<numbers.length;j++){
        console.log(arr[j] + "j")
        if(arr[j]==numbers[i]){
            x++
        };
    };
    if(x==0){
        arr.push(arr[i])
    };
};

console.log(arr);