const resultado = document.querySelector('.resultado');


function apagarTudo() {
    resultado.innerHTML = '0';
}
function apagar() {
    if (resultado.innerHTML.length <= 1) {
        resultado.innerHTML = "0";
    } else {
        resultado.innerHTML = resultado.innerHTML.slice(0, -1);
    }
}


function resposta() {
    try {
        const expressao = resultado.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/,/g, '.');
        resultado.innerHTML = eval(expressao);
    } catch {
        resultado.innerHTML = "Erro";
    }
}


function inserirValor(botao) {
    const valor = botao.textContent;
    const atual = resultado.innerHTML;
    const ultimoChar = atual[atual.length - 1];
    const operadores = ["+", "-", "×", "÷"];

    if (operadores.includes(valor) && operadores.includes(ultimoChar)) return;

    if (atual === "0" && operadores.includes(valor)) return;

    if (valor === "," && ultimoChar === ",") return;

    if (valor === ",") {
        const partes = atual.split(/[\+\-\×\÷]/);
        const ultimoNumero = partes[partes.length - 1];
        if (ultimoNumero.includes(",")) return;
    }

    if (atual === "0" && !isNaN(valor)) {
        resultado.innerHTML = valor;
        return;
    }

    resultado.innerHTML += valor;
}




document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") resposta();
});

