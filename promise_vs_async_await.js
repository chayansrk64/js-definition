// // asynchronous behavior  ============
// function getApple(){
//     setTimeout(() => {
//         console.log('🍎🍎🍎');
//     }, 3000)
// }


// function getBanana (){
//     setTimeout(()=> {
//         console.log("🍌🍌🍌");
//     }, 1000)
// }

// getApple()
// getBanana()



// synchronous behavior ==============
function getApple () {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve('🍎🍎🍎');
        }, 3000)
    })
}

function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍌🍌🍌");
        }, 1000)
    })
}


async function fetchFruits (){
    const apple = await getApple()
    console.log(apple);
    const banana = await getBanana()
    console.log(banana);
}

fetchFruits()