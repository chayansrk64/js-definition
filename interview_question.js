/**
 *  =========== Interview Questions ==============
 * 
 *  1. Tell me something about JS engine v8 internal mechanism.
 *  2. What is event loop in JavaScript?
 *  3. If JavaScript is single threaded, how does it handle asynchronous call?
 *  4. Differences between setTimeout and Setinterval
 *  5. Can you explain the difference between an async function and regular function in JavaScript?
 *  6. What's the error handing stratey for promises that were rejected while awaiting?
 *  7. What are the states of a promise?
 *  8. Can you explain what the  .then() method does?
 *  
 *  
 * 
 * 
 * 
 */
 
//  do some task every 2 seconds and stop after 10 seconds.
function tellJokes () {
    console.log('different jokes are here.....');
}

const interValId = setInterval(()=> {
    tellJokes()
}, 2000)

setTimeout(()=> {
    clearInterval(interValId)
}, 10000)
 