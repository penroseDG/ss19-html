let thang = Number(prompt("Nhap thang (1 - 12):"));
let ket_qua;

if (thang < 1 || thang > 12) {
    ket_qua = "thang khong hop le";
} else if (thang === 2) {
    ket_qua = "thang 2 co 28 hoac 29 ngay nam nhuan";
} else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    ket_qua = "thang " + thang + " co 30 ngay";
} else {
    ket_qua = "thang " + thang + " co 31 ngay";
}
alert(ket_qua);
