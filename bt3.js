let text = prompt(" nhap loai tien ban muon chuyen doi (USD --> VND) or (VND --> USD ) : ")
let input = Number(prompt("Nhap so tien ban muon chuyen doi vao day : "));
let ti_gia = 23000;
switch (text) {
    case "USD":
        alert("so tien doi ra la : " + (input / ti_gia).toLocaleString("en-US", { style: "currency", currency: "USD" }));
        break;
    case "VND":
        alert("so tien doi ra la : " + (input * ti_gia).toLocaleString("vi-VN", { style: "currency", currency: "VND" }));
        break;
    default:
        alert("khong the doi duoc do sai loai tien te !!!");
        break;
}