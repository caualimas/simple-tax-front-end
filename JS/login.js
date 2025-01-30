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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernameOrEmail: valueUsername, password: valuePassword }),
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.text(); // Usa .text() ao invés de .json()
    })
    .then(data => {
        try {
            const jsonData = JSON.parse(data); // Tenta converter em JSON
            console.log('Resposta JSON:', jsonData);
        } catch (error) {
            console.log('Resposta não é JSON:', data); // Se não for JSON, apenas printa
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});

buttomTeste.addEventListener('click', (event) => {
    event.preventDefault();


    fetch('http://localhost:8080/produto', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            
        },
        credentials: 'include' // Inclui cookies na requisição
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
    
})
