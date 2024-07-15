const user={
    username:"Rahul",
    name:"babu",
    email:"rsrahul@gmail.com",
    age:"20",
    isAdmin:false,
    isLoggedIn:true,
    Tea:["green","peach","ginger"],
    address: {
        city:"araria",
        state:"bihar"
    }
}

console.log(user.age)
console.log(user['age'])

console.log(user.Tea[1])
console.log(user.address.state)
console.log(user["address"]["state"])

//update the email
user.email="hitesh@live"
console.log(user)