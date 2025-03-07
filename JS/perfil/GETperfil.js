document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:8080/perfil' ,{
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        return response.json();
    })
    .then(data =>{
        document.getElementById("h1Nome").innerText = data.nome;
        document.getElementById("email").innerText = data.email;

        document.getElementById("userNome").innerText = data.nome;
        document.getElementById("userEmail").innerText = data.email;
        document.getElementById("userCpf").innerHTML = data.cpfCnpj;
        document.getElementById("userUsername").innerHTML = data.username;
        document.getElementById("userStatus").innerHTML = data.status;
        document.getElementById("userPremium").innerHTML = data.premium;
    })
    
});