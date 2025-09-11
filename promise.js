const getData = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*10);
    console.log(number);
    if(number > 5){
        resolve({number: number})
    }else{
        reject({error: "Number is less than 5"})
    }
})

getData
    .then(data => console.log("resolved data", data))
    .catch(error => console.log(error))