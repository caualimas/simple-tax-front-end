document.getElementById("buttonExcluir").addEventListener("click", event => {
    event.preventDefault();

    let produtoSelecionado = document.getElementById("select-option");
    let id = produtoSelecionado.value;

    if (!id) {
        alert("Por favor, selecione um produto para excluir.");
        return;
    }
    fetch(`http://localhost:8080/produto/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            } else {
                window.location.replace("../Html's/produtosSalvos.html");
                alert("Produto removido com sucesso!");
            }
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });

});