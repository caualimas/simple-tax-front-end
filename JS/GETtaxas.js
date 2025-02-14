document.addEventListener("DOMContentLoaded", function () {
    let table = new DataTable('#tableTaxas');

    fetch('http://localhost:8080/taxas', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        //transforma o array em colunas
        let tableData = data.map(item => [
            item.nomeTaxas,
            item.taxaPlataforma.toFixed(2).replace(".", ",") + "%",
            "R$ " + item.adicionalItem.toFixed(2).replace(".", ","),
            item.porcentagemAntecipacao.toFixed(2).replace(".", ",") + "%",
            item.taxaAntecipacao.toFixed(2).replace(".", ",") + "%",
            item.notaFiscal.toFixed(2).replace(".", ",") + "%",
            item.imposto.toFixed(2).replace(".",",") + "%",
        ]);

        // limpa , adiciona as linhas 
        table.clear().rows.add(tableData).draw();
    })
    .catch(error => console.error('Erro:', error));
});