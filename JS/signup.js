const buttomCadastrar = document.getElementById("buttomCadastrar");
const nome = document.getElementById("nome");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpfcnpj = document.getElementById("cpf-cnpj");
const senha = document.getElementById("senha");

buttomCadastrar.addEventListener('click', (event) =>{
    event.preventDefault();

    const valueNome = nome.value;
    const valueUsername = username.value;
    const valueEmail = email.value;
    const valueCpfCnpj = cpfcnpj.value;
    const valueSenha = senha.value;

    fetch('http://localhost:8080/auth/register',{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: valueNome,
            username: valueUsername,
            cpfCnpj: valueCpfCnpj,
            email: valueEmail,
            password: valueSenha
        })
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