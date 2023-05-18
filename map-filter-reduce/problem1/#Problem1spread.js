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

// Write a function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)
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
const addLast = (users, temp) => {
  var newUsers = [...users, temp];
  console.log("addLast", newUsers);
};
addLast(users, temp);

// Write a  function to add a new record at the begining of array users using spread operator,
// functions : addFirst(users,temp)
var temp2 = {
  id: 1,
  name: "First Record",
  username: "first.record",
  email: "firstrecord@gmail.com",
  phone: "99998888",
  website: "google.com",
  password: "123",
  age: 65,
};
const addFirst = (users, temp2) => {
  var newUsers = [temp2, ...users];
  console.log("addFirst", newUsers);
};
addFirst(users, temp2);
