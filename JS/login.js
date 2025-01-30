const buttomEntrar = document.getElementById("entrar");
const username = document.getElementById("username");
const password = document.getElementById("password");
const buttomTeste = document.getElementById("teste");

buttomEntrar.addEventListener('click', (event) => {
    event.preventDefault();  // Previne o envio padrão do formulário

    const valueUsername = username.value;
    const valuePassword = password.value;

    console.log(valueUsername);
    console.log(valuePassword);

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
        }
        return response.text();
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});

buttomTeste.addEventListener('click', (event) => {
    event.preventDefault();


    fetch('http://localhost:8080/produto', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            
        }
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
    
})
