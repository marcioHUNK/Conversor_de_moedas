function converterMoedas() {
    // Obter valores
    var cobreInput = document.getElementById("cobreInput").value;
    var prataInput = document.getElementById("prataInput").value;
    var electroInput = document.getElementById("electroInput").value;
    var ouroInput = document.getElementById("ouroInput").value;

    // Verificação de entrada
    if (
        cobreInput.trim() !== "" &&
        prataInput.trim() !== "" &&
        electroInput.trim() !== "" &&
        ouroInput.trim() !== "" &&
        !isNaN(cobreInput) &&
        !isNaN(prataInput) &&
        !isNaN(electroInput) &&
        !isNaN(ouroInput)
    ) {
        // Verificar valor
        var cobre = parseInt(cobreInput);
        var prata = parseInt(prataInput);
        var electro = parseInt(electroInput);
        var ouro = parseInt(ouroInput);

        // Calculando
        var prataCalculado = Math.floor(cobre / 10); // Usar Math.floor para garantir que seja um número inteiro
        var electroCalculado = Math.floor(prata / 10);
        var ouroCalculado = Math.floor(electro / 10);
        var platinaCalculado = Math.floor(ouro / 10);

        // Verificação de erro
        console.log("Peças de Prata:", prataCalculado);
        console.log("Peças de Electro:", electroCalculado);
        console.log("Peças de Ouro:", ouroCalculado);
        console.log("Peças de Platina:", platinaCalculado);

        // Exibir no HTML
        document.getElementById("prataResult").innerHTML =
            "Peças de Prata: " + prataCalculado;
        document.getElementById("electroResult").innerHTML =
            "Peças de Electro: " + electroCalculado;
        document.getElementById("ouroResult").innerHTML =
            "Peças de Ouro: " + ouroCalculado;
        document.getElementById("platinaResult").innerHTML =
            "Peças de Platina: " + platinaCalculado;
    } else {
        //correção de but
        alert("Por favor, insira valores numéricos válidos em todos os campos.");
    }
}