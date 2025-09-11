
// asynchronous behavior
function getData () {
    console.log("one")
    console.log("two")
    // async behavior
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data[0]))
    
    console.log("four")
    console.log("five")
   
}

// getData()





// synchronous behavior
async function getData2 () {
    console.log('1');
    console.log('2');
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data[0]);
    console.log('4');
    console.log('5')
}

// getData2()


const getData3 = async () => {
    console.log(1);
    console.log(2);
    try{
        const res = await fetch('https://jsonplaceholder.typcode.com/users')
        const data = await res.json();
        console.log("data got", data[0]);
    }catch(error){
        console.log("Error happend =>", error);
    }
    console.log(4);
    console.log(5);
}

getData3()
