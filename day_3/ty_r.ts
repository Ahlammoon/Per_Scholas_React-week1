const SUNNY_DAY_MASSAGE: string ="It is sunny out today";
let isSunny= true;
let numberSunnDays: number  = 1;


/**
 * 
 * @param isSunny 
 *    if today it is sunny or not
 * @param numberSunnDays 
 * 
 * how many days in a row it has been sunny for
 * @returns 
 * 
 * 
 * 
 */

function  sunnyDaymessage(isSunny: boolean,numberSunnDays: number):string {

    return "";
}


 



function  hello(name:string, isSunny: boolean){
if(!isSunny){

    return "Hi, " +name;
}

return "hi, "+name + "it is sunny out today  !";
}

//console.log(SUNNY_DAY_MASSAGE);

console.log(hello("Alice",isSunny));
