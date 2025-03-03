// 1. Phép nối chuỗi vì có một toán hạng là string
let result1 = "javascript" + 5; // "javascript5"

// 2. Phép trừ không thể thực hiện với string không phải số -> NaN
let result2 = "javascript" - 1; // NaN

// 3. Phép nối chuỗi vì có một toán hạng là string
let result3 = "3" + 2; // "32"

// 4. "5" có thể chuyển thành số, phép trừ được thực hiện
let result4 = "5" - 4; // 1

// 5. "123" có thể chuyển thành số -> không phải NaN -> false
let result5 = isNaN("123"); // false

// 6. "hello" không thể chuyển thành số -> là NaN -> true
let result6 = isNaN("hello"); // true
    
// 7. Number.isNaN không ép kiểu, "123" không phải NaN -> false
let result7 = Number.isNaN("123"); // false

// 8. NaN là NaN -> true
let result8 = Number.isNaN(NaN); // kiểm tra xem giá trị có phải NaN không. Vì NaN là NaN, nên kết quả là true.
