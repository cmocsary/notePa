class User {
    constructor(id, email, pass){
        this.id = id;
        this.email = email;
        this.pass = pass;
    }
}

let users = [
    new User(
        1,
        'carlos.mocsary@gmail.com',
        '1234'
    ),
    new User(
        2,
        'maflorencia.norry@gmail.com',
        '5612'
    )
]

if(!localStorage.getItem('users')){
    let localS = JSON.stringify(users);
    localStorage.setItem('users', localS);
}

const loginValidation = (e)=>{
    e.preventDefault()

    


    let localS = localStorage.getItem('users');
    let getLS = JSON.parse(localS)

    let email = document.getElementById('inputEmail');
    let pass = document.getElementById('inputPassword');
    pass.toString();

    getLS.forEach(user => {
        if(user.email === email.value && user.pass === pass.value){
            console.log("valido")
            window.location.assign(window.location.origin + "/main.html");
        }else{
            console.log("no valida")
        }
    });
}

