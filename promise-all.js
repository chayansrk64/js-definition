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





const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')


Promise.all([fetchUsers, fetchPosts, fetchComments])
    .then(responses => {
        // responses is an array of all the resolved promises
        return Promise.all(responses.map(res => res.json()))
    })
    .then(data => {
        const [users, posts, comments] = data;
        console.log('users', users);
        console.log('posts', posts);
        console.log('comments', comments);
    })
    // If any of the promises fail, this will catch the error
    .catch(error => console.error('Error fetching data', error))




