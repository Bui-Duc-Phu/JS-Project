## BigInt


<pre><code class="language-ngôn_ngữ">
Number.MAX_SAFE_INTEGER === 9007199254740991  // ~ 9 triệu tỷ

console.log(9007199254740991 + 1); // 9007199254740992 ✅

console.log(9007199254740991 + 2); // 9007199254740992 ❌ (sai!)

console.log(9007199254740991n + 2n); // 9007199254740993n ✅
</code></pre>





| Lợi ích của `BigInt`          | Giải thích                               |
| ----------------------------- | ---------------------------------------- |
| Hỗ trợ số nguyên lớn          | Không bị giới hạn ở 2⁵³ - 1              |
| Không mất độ chính xác        | Tính toán số lớn vẫn chính xác tuyệt đối |
| Phù hợp cho ứng dụng đặc biệt | Blockchain, mã hóa, tài chính            |
| Có cú pháp đơn giản           | Thêm `n` vào cuối hoặc dùng `BigInt()`   |


=> vậy khi nào thì nên dụng Bigint
| Trường hợp                                       | Có cần dùng `BigInt`?         |
| ------------------------------------------------ | ----------------------------- |
| Số < 2^53                                        | ❌ Không cần                   |
| Số > 2^53                                        | ✅ Cần dùng `BigInt`           |
| Cần độ chính xác cao (tiền, mã hóa, dữ liệu lớn) | ✅ Rất nên dùng                |
| Làm việc với `Number` bình thường                | ❌ Không nên trộn với `BigInt` |


<br>
<br>


## Destructuring

=> Destructuring là cú pháp giúp tách giá trị từ mảng hoặc object ra thành các biến riêng biệt.

-> đối với Arr
<pre><code class="language-ngôn_ngữ">
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
</code></pre>



-> Đối với Object
<pre><code class="language-ngôn_ngữ">
const user = {
  name: "Alice",
  age: 25,
};

const { name, age } = user;

console.log(name); // Alice
console.log(age);  // 25
</code></pre>



| Tình huống                                                        | Tham chiếu chung? |
| ----------------------------------------------------------------- | ----------------- |
| Destructure **giá trị primitive** (`number`, `string`, `boolean`) | ❌ Không           |
| Destructure **object hoặc array**                                 | ✅ Có (tham chiếu) |


<pre><code class="language-ngôn_ngữ">
const person = {
  name: "Alice",          // string (primitive)
  age: 30,                // number (primitive)
  address: {
    city: "Hanoi"         // object (non-primitive)
  }
};

// Destructuring với let để có thể gán lại name, age
let { name, age, address } = person;

// Thay đổi các biến đã destructure
name = "Boss"; 
age = 50;
address.city = "Saigon";  // Thay đổi object (tham chiếu chung)

// Kiểm tra object gốc sau khi thay đổi
console.log("person.name:", person.name);           // 👉 "Alice" ❌ Không đổi
console.log("person.age:", person.age);             // 👉 30     ❌ Không đổi
console.log("person.address.city:", person.address.city); // 👉 "Saigon" ✅ Bị đổi
</code></pre>

