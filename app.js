let amigosSelecionados = [];

function adicionarAmigo() {
    
    let adicionado = document.querySelector('input').value.trim();
    if (adicionado === ""){

        return mensagemResposta('listaAmigos', 'Digite um nome!');

    }else if(amigosSelecionados.includes(adicionado)) {

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', 'Nome já adicionado!');

    }else{
        adicionado = document.querySelector('input').value;

        amigosSelecionados.push(adicionado);

        document.querySelector('input').value = '';

        console.log(amigosSelecionados , amigosSelecionados.length);
    }

};

function sortearAmigo() {    
};

function mensagemResposta(id, texto) {
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = texto;
}

console.log(amigosSelecionados.length);