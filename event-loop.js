function one () {
    two()
    console.log(1);
}
function two () {
    setTimeout(() => {
        console.log('inside two timeout', 4);
    }, 4000)
    three()
    console.log(2);
}
function three () {
    setTimeout(() => {
        console.log('inside three timeout', 0);
    }, 0)
    four()
    console.log(3);
}
function four () {
    five()
    console.log(4); 
}
function five () {
    console.log(5);
}

one()  