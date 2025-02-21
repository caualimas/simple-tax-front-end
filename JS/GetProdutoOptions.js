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
