
document.addEventListener("DOMContentLoaded", function () {
    let table = new DataTable('#tableProdutos');

    fetch('http://localhost:8080/produto', {
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
            item.nomeProduto,
            "R$ " + item.valorUnitario.toFixed(2).replace(".", ","), 
            "R$ " + item.valorInsumos.toFixed(2).replace(".", ","),
            "R$ " + item.valorFinal.toFixed(2).replace(".", ","),
            "R$ " + item.outrosCustos.toFixed(2).replace(".", ","),
        ]);

        // limpa , adiciona as linhas 
        table.clear().rows.add(tableData).draw();
    })
    .catch(error => console.error('Erro:', error));
});