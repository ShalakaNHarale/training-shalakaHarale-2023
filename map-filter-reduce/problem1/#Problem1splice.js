// Q10 Delete an object with specific array index.
// HINT : splice
// function : deleteRecord(users,1) // 1 means delete object with index 1 in array.
const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];
console.log("----------Q10----------");
const deleteRecord = (users, index) => {
  users.splice(1);
};
deleteRecord(users, 1);
console.log(users);
console.log(users.length);

// Q11. Insert an object at specific array index.
// HINT : splice
// function : InsertRecord(users,temp,1) // 1 means inset object at index 1 in array.
var temp = {
  id: 4,
  name: "Last Record",
  username: "last.record",
  email: "lastrecord@gmail.com",
  phone: "909 - 695 - 7556",
  website: "google.com",
  password: "123",
  age: 25,
};
console.log("----------Q11----------");
const InsertRecord = (users, temp, index) => {
  users.splice(index, 1, temp);
};
InsertRecord(users, temp, 1);
console.log(users);
