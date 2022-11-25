let arr = [1,2,3,2,4];

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    let symbol = "";

    if (arr[i] % 2 == 0) {
        symbol += "@";
    } else {
        symbol += "#";
    }

    console.log(symbol);
}

if (arr.includes(5)) {
    console.log("true");
}