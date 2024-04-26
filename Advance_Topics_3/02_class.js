// Creating Class User
class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    // Method
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsernameCase(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('alex', 'mehra@gmail.com', 'god41')

console.log(user1.encryptPassword());
console.log(user1.changeUsernameCase());



