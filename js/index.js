const loginValidation = ()=>{
    
}

const login = async (e)=> {
    e.preventDefault();
    let email = document.getElementById('inputEmail');
    let pass = document.getElementById('inputPassword');
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json();
    data.forEach(user => {
        if(user.email === email.value && user.pass === pass.value){
            let localS = JSON.stringify(user);
            localStorage.setItem('user', localS);
            window.location.assign(window.location.origin + "/main.html");
        }else{
            console.log("no valida")
        }
    });
}
