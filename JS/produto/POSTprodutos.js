const buttonSalvarProduto = document.getElementById("buttonSalvarProduto");

buttonSalvarProduto.addEventListener("click", (event) =>{
    event.preventDefault();

    const nome = document.getElementById("nome");
    const valueNome = nome.value;
    
    const custoUnitario = document.getElementById("custoUnitario").value;
    const certoCustoUnitario = custoUnitario.replace(",",".");
    const valueCustoUnitario = parseFloat(certoCustoUnitario);
    
    const insumos = document.getElementById("insumos").value;
    const certoInsumos = insumos.replace(",",".");
    const valueInsumos = parseFloat(certoInsumos);
    
    const outrosCustos = document.getElementById("outrosCustos").value;
    const certoOutrosCustos = outrosCustos.replace(",",".");
    const valueOutrosCustos = parseFloat(certoOutrosCustos);
    
    const precoVenda = document.getElementById("precoVenda").value;
    const certoPrecoVenda = precoVenda.replace(",",".");
    const valuePrecoVenda = parseFloat(certoPrecoVenda);
    
    fetch("http://localhost:8080/produto", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeProduto : valueNome,
            valorUnitario : valueCustoUnitario,
            valorInsumo : valueInsumos,
            valorFinal : valuePrecoVenda,
            outrosCustos : valueOutrosCustos 
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }else{
            window.location.replace("../../pages/produto/produtosSalvos.html");
            return response.text();
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});