class User{
    constructor(name,lastName,userName,password,email){
        this._name=name;
        this._lastName=lastName;
        this._userName=userName;
        this._password=password;
        this._email=email;

    }


    set paswd(newPassword){
        this._password=newPassword;

    }

    get paswd(){
        return this._password;
    }


    Acceso(){

        console.log("Acceso del usuario");
    }

    ComprobarPwd(){
        console.log(`${this._userName} Esta comprobando password ${this._password}`);
    }
}

class Humano{
constructor(edad,peso,estatura){
    this.edad=edad;
    this.peso=peso;
    this.estatura=estatura;
}

    dormir(){
        console.log("Estoy durmiendo");
    }

    comer(){
        console.log("Estoy comiendo");
    }

    caminar(){
        console.log("Estoy caminando");
    }
}

class superUser extends User{
    constructor(name,lastName,userName,password,email,id){
        super(name,lastName,userName,password,email);
        this.id=id;
    }

    borrarTodo(){
        console.log("Estoy borrando todo");
    }
}

let user1=new User("Arturo","Toledo","AT","1234","arturo@gmail.com");
let user2=new Humano(18,70,1.70);
let user3=new superUser("Marcos","López","ML","12345","marcos@gmail.com");

user3.ComprobarPwd();

user1.userName="Arturo";
user1.paswd="Estoy cambiando el password";
console.log(user1.paswd);

/*
let user3={
    nombre:"Pedro",
    apellido:"López"
    permitirEntrada:()=>{
        console.log("Acceso del usuario 1 permitido al sistema");
    }
}*/