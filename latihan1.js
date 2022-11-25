// input 12324
let input = "12324";

// proses
for (let i = 0; i < input.length; i++){

    let symbol = "";

    for (let z = 0; z < input.charAt(i); z++){
        if (input.charAt(i) % 2 == 0){
            symbol = symbol + "@";
        }else {
            symbol = symbol + "#";
        }
    }

    let varA = parseInt(input.charAt(i - 1));
    let varB = parseInt(input.charAt(i));

    let sum = varA + varB;

    if (sum == 5){
        symbol = symbol + "$";
    }
    console.log(symbol);
}

// output
// #
// @@
// ###$
// @@$
// @@@@