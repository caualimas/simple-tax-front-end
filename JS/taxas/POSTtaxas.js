const buttonSalvarTaxas = document.getElementById("buttonSalvarTaxas");

buttonSalvarTaxas.addEventListener('click', (event) =>{
    event.preventDefault();

    const nome = document.getElementById("nome");
    const valueNome = nome.value;
    
    const taxaPlataforma = document.getElementById("taxaPlataforma").value;
    const certoTaxaPlataforma = taxaPlataforma.replace(",",".");
    const valueTaxaPlataforma = parseFloat(certoTaxaPlataforma);

    const adicionalItem = document.getElementById("adicionalItem").value;
    const certoAdicionalItem = adicionalItem.replace(",",".");
    const valueAdicionalItem = parseFloat(certoAdicionalItem);

    const porcentagemAntecipacao = document.getElementById("porcentagemAntecipacao").value;
    const certoPorcentagemAntecipacao = porcentagemAntecipacao.replace(",",".");
    const valuePorcentagemAntecipacao = parseFloat(certoPorcentagemAntecipacao);

    const taxaAntecipacao = document.getElementById("taxaAntecipacao").value;
    const certoTaxaAntecipacao = taxaAntecipacao.replace(",",".");
    const valueTaxaAntecipacao = parseFloat(certoTaxaAntecipacao);

    const notaFiscal = document.getElementById("notaFiscal").value;
    const certoNotaFiscal = notaFiscal.replace(",",".");
    const valueNotaFiscal = parseFloat(certoNotaFiscal);

    const imposto = document.getElementById("imposto").value;
    const certoImposto = imposto.replace(",",".");
    const valueImposto = parseFloat(certoImposto);

    fetch('http://localhost:8080/taxas', {
        method : 'POST',
        credentials : 'include',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            nomeTaxas : valueNome,
            taxaPlataforma : valueTaxaPlataforma,
            adicionalItem : valueAdicionalItem,
            porcentagemAntecipacao : valuePorcentagemAntecipacao,
            taxaAntecipacao : valueTaxaAntecipacao,
            notaFiscal : valueNotaFiscal,
            imposto : valueImposto
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }else{
            window.location.replace("../Html's/conjuntosSalvos.html");
            return response.text();
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });
});