class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
        
    }

    static createID() {
        return `123`;
    }
}

const harsh = new User('harsh05')

console.log(harsh.createID());




