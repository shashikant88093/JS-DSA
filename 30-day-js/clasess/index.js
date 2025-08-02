class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password

    }
    encrypt(){
        return this.password
    }
}

const op = new User("Shashikant","shashi94goswami@gmail.com","22334444")

console.log(op.encrypt())