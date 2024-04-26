// Creatig function to set userName
function setUserName (userkanam){
    this.userkanam = userkanam
}

// Now creatig User
function createUser(userkanam, email, password) {
    setUserName.call(this,userkanam)
    this.email = email
    this.password = password
}

const user1 = new createUser('Mathew', 'math@gmail.com', '123ab')
console.log(user1);
