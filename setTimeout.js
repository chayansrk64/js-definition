// async function main() {
//   console.log(1);
//   console.log(2);

//   async function getThree() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(3);
//         resolve(); // tell JS we're done
//       }, 3000);
//     });
//   }

//   await getThree(); // waits until resolve()
//   console.log(4);
//   console.log(5);
// }

// main();




console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 3000)
console.log(4);
console.log(5);