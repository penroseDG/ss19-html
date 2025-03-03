let input = prompt("Nhập một ký tự:").trim();

if (input.length === 1 && /^[a-zA-Z]$/.test(input)) {
    document.writeln(input + " là chữ cái");
} else {
    document.writeln(input + " không phải chữ cái");
}
