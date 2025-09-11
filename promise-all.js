const getData1 = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10)
    if(num > 1){
        resolve({num: num})
    }else{
        reject({error: "data is not found"})
    }
})
const getData2 = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10)
    if(num > 1){
        resolve({num: num})
    }else{
        reject({error: "data is not found"})
    }
})
const getData3 = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10)
    if(num > 1){
        resolve({num: num})
    }else{
        reject({error: "data is not found"})
    }
})




Promise.all([getData1, getData2, getData3])
    .then(data => console.log(data))
    .catch(err => console.log(err))


