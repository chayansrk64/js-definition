
/**
 * =============== setTimeOut() vs setInterval() =============
 *      # setTimeOut()
 *  A time event function used to cal another functin after certain time period but executes the functin only once
 * 
 *      # setInterval()
 *  Same as setTimeout() with a slice difference that the execution of the function occurs 
 *  continuously according to the specified time interval. Here, the time interval works like a gap between the executions.
 * 
 *  ============= clearing ===============
 *  For clearing the timeout function, clearTimeout() is used.
 *  For clearing the interval function, clearInterval() is used.
 * 
 * 
 */


console.log(1);
console.log(2);
let count = 0;
const intervalId = setInterval(() => {
    if(count === 7){
    clearInterval(intervalId)
}
    console.log(count++);
}, 2000)
console.log("intervalId =>",intervalId);

console.log(4);
console.log(5);










