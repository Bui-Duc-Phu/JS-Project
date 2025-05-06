## BigInt

Number.MAX_SAFE_INTEGER === 9007199254740991  // ~ 9 triệu tỷ

console.log(9007199254740991 + 1); // 9007199254740992 ✅
console.log(9007199254740991 + 2); // 9007199254740992 ❌ (sai!)

console.log(9007199254740991n + 2n); // 9007199254740993n ✅




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


