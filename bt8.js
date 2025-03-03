let months = Number(prompt("Nhap so thang ban muon kiem tra : "));

if (months >= 1 && months <= 3) {
    alert("Spring");
} else if (months >= 4 && months <= 6) {
    alert("Summer");
} else if (months >= 7 && months <= 9) {
    alert("Autumn");
} else if (months >= 10 && months <= 12) {
    alert("Winter");
} else {
    alert("Not correct ");
}