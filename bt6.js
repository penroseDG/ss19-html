let a = Number(prompt("nhap so a vao phuong trinh : "));
let b = Number(prompt("nhap so b vao phuong trinh : "));
let c = Number(prompt("nhap so c vao phuong trinh : "));

let delta = ((b * b) - 4 * (a * c));


let x1 = (((-b) + Math.sqrt(Math.abs(delta))) / (2 * a)).toFixed(2);
let x2 = (((-b) - Math.sqrt(Math.abs(delta))) / (2 * a)).toFixed(2);

if (delta > 0) {
    alert("phuong trinh co 2 nghiem phan biet : ");
    alert("x1 = " + x1);
    alert("x2 = " + x2);
} else if (delta === 0) {
    alert("phuong trinh co nghiem kep " + "x1 = x2 = " + x1);
} else if (delta < 0) {
    alert("phuong trinh vo nghiem ");
}