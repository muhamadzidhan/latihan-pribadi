// input
let angka = 10;

// proses
for (let i = 2; i < angka; i++) {
    if (angka % i == 0) {
        console.log(false);
        return false;
    }
}

console.log(true);
return true;

// output
// true