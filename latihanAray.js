//input

//proses
var siswa = ["andi", "budi", "chika"]

let v = siswa.push("ardi", "bobi", "robin");

console.log(v)

v = siswa.pop();

console.log(v);

v = siswa.shift();

console.log(v);

v = siswa.splice(2);

console.log(v);

siswa[0] = "rudi";

console.log(siswa);

var adaRudi = siswa.includes("rudi");
console.log(adaRudi);

//output