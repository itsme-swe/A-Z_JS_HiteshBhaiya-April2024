class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password() {
        return this._password.toUpperCase()
    }

    // setter never be returned
    set password(val){
        this._password = val
    }


}

// Creating Object
const user1 = new User('abc@gmail.com', 'dob212')
console.log(user1.password);



