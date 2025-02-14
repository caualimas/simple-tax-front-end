const buttomEntrar = document.getElementById("entrar");
const username = document.getElementById("username");
const password = document.getElementById("password");

buttomEntrar.addEventListener('click', (event) => {
    event.preventDefault();  // nao envia o formulario

    const valueUsername = username.value;
    const valuePassword = password.value;


    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmail: valueUsername, password: valuePassword })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }else{
            window.location.replace("../Html's/calcular.html");
            return response.text();
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});
