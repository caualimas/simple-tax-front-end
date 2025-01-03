const buttomEntrar = document.getElementById("entrar");
const username = document.getElementById("username");
const password = document.getElementById("password");

buttomEntrar.addEventListener('click', (event) => {
    event.preventDefault();  // Previne o envio padrão do formulário

    const valueUsername = username.value;
    const valuePassword = password.value;

    console.log(valueUsername);
    console.log(valuePassword);

    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: valueUsername, password: valuePassword })
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});
