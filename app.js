let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim().toUpperCase();
    const lista = document.getElementById("listaAmigos");

    if (!nome || /\d/.test(nome)) {
        alert("Digite um nome válido, sem números!");
        input.value = "";
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    amigos.push(nome);

    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes para realizar o sorteio!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = 
        `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

function limparLista() {
    
    if (amigos.length < 1) {
        alert("Adicione pelo menos um nome para realizar limpeza!");
        return;
    }else{
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("amigo").value = "";
    }

}
