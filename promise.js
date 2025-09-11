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





function loginUser(user, password){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(user === "manik" && password === "1234"){
                resolve({user: user, password: password})
            }else{
                reject({error: "User and Password didn't match"})
            }
        }, 2000)
    })
}


loginUser("manik", "1234")
    .then(msg => console.log(msg))
    .catch(err => console.log(err))