/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];


/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/



function greeting(name:String,gender:string, isSelf: boolean ) {

    // do stuff here ...

    if(isSelf)
       return  `${greetingWords[1]}, ${prefixes[0]} name is ${name}`; 
   else if (gender === "female")   
       return  `${greetingWords[0]}, ${prefixes[2]} name is ${name}`; 

    else if(gender === "nonbinary")
       return  `${greetingWords[2]}, ${prefixes[3]} name is ${name}`; 
   
    else if (gender === "male")   
       return  `${greetingWords[0]}, ${prefixes[1]} name is ${name}`; 
  }

  const message = greeting("Malak", "female", true);
  console.log(message);

  const message1 = greeting("Moon", "nonbinary", false);
  console.log(message1);

  const message2 = greeting("Sun", "female", false);
  console.log(message2);

  const message3 = greeting("Ahlam", "male", false);
  console.log(message3);