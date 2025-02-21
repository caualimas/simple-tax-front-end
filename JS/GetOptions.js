document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("http://localhost:8080/produto/options", {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) throw new Error("Erro ao buscar produtos");

        const produtos = await response.json();
        const select = document.getElementById("select-option");

        produtos.forEach(produto => {
            const option = document.createElement("option");
            option.value = produto.idProduto;
            option.textContent = produto.nome;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("http://localhost:8080/taxas/options", { // 🔹 Corrigido para HTTP
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) throw new Error("Erro ao buscar taxas");

        const taxas = await response.json();
        const div = document.getElementById("conjunto-tax");

        taxas.forEach(taxa => {
            // input
            const input = document.createElement("input");
            input.type = "checkbox";
            input.value = taxa.id;
            input.name = "conjunto"; 

            //cria label
            const label = document.createElement("label");
            label.appendChild(input); 
            label.appendChild(document.createTextNode(" " + taxa.nome));

            //adiciona
            div.appendChild(label);
           
        });

    } catch (error) {
        console.error("Erro ao carregar taxas:", error);
    }
});
