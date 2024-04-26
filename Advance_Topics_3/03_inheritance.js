class User {
    constructor (username){
        this.username = username
    }

    logMe() {
        console.log(`'Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const teacher = new Teacher('Max', 'teacher@info.com', 'abc1243')

teacher.addCourse()