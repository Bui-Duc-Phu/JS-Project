
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