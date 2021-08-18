const myObject ={
  a:"this is property a",
  mySecondObjectProperty :"second object property",
  "x" :"the x key on my object",
  "2" : "the key that is number 2",
  3:"key that is 3"

}
console.log("myObject", myObject);

const myInfo={
    "name" :"Malak",
    "birthday": 0707,
    "citiesLivedIn" :["Kentucky","NC"],
    "isHuman" : true,
     "planetsVisite" : null,
     "personalInfo" :{"favoriteFood":"Piza",}
};
console.log("my Info", myInfo)

function sayHi(name){
  return "my name is " +name;
}

console.log(sayHi("Malak"));