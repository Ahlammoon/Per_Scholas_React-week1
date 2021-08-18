var SUNNY_DAY_MESSAGE = "It is sunny out today!";
var isSunny = true;
var numberSunnyDays = 1;
/**
 * @param isSunny
 *        If *today* it is sunny or not.
 * @param numberSunnyDays
 *        How many days in a row it has been sunny for.
 * @returns
 *        Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */
function sunnyDayMessage(isSunny, numberSunnyDays) {
    if (isSunny && numberSunnyDays > 1) {
        return "Hi ! It, It is sunny Today. It has been sunny for " + numberSunnyDays + " days in a row";
    }
    else {
        return "Hope it will be sunny day  soon ";
    }
}
// TO DO:
// 1. Complete sunnyDayMessage so it works. Then pass it data and call the function!
// 2. Use console.log to print the string sunnyDayMessage returns
console.log(sunnyDayMessage(true, 0));
