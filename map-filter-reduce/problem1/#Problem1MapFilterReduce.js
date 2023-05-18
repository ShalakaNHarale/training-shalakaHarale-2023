// Q3. Write a  function to display all records only 3 fields id,name,username.
// functions : display(users)
// HINT : map
console.log("-------------Q3------------");
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

const display = (users) => {
  console.log("id", users.id);
  console.log("name", users.name);
  console.log("username", users.username);
};
users.map(display);

console.log("-------------Q7------------");

// Q7. Write a  function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// HINT : Use map.
const display2 = (users) => {
  console.log("name", users.name);
  console.log("age", users.ages);
};
users.map(display2);

console.log("-------------Q4------------");

// Q4. Write a  function which will display all records  with name ==='demon'
// function Name ---> findNameEquals(users)
// HINT : Use filter.
const findNameEquals = (users) => {
  return users.name === "Dean John";
};
var result = users.filter(findNameEquals);
console.log(result);

console.log("-------------Q5------------");

// Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(users,'B')
// HINT : Use filter and string functions.
const findSpecificStartChar = (users) => {
  return users.name.charAt(0) === charact;
};
var charact = "D";
var result = users.filter(findSpecificStartChar);
console.log(result);

console.log("-------------Q6------------");
// Q6. Write a function which will display sum of all ages.
// function Name ---> findSumAges(users) .
// HINT : Use reduce functions.
const findSumAges = (total, users) => {
  return total + users.ages;
};
var result = users.reduce(findSumAges, 0);
console.log(result);

console.log("-------------Q8------------");

// Q8. Write a function to display sum of all ages of records having name starting with 'J'
const findSpecificStartCharAge = (users) => {
  return users.name.charAt(0) === charact;
};
var charact = "J";
var result = users.filter(findSpecificStartCharAge);
const findSumAges2 = (total, result) => {
  return total + result.ages;
};
var finalResult = result.reduce(findSumAges2, 0);
console.log(finalResult);

console.log("-------------Q9------------");

// Q9. Write a function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING
const sorting = (a, b) => {
  if (order == "ASC") {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  } else if (order == "DESC") {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
  }
  return 0;
};
var order = "DESC";
users.sort(sorting);
console.log(users);
