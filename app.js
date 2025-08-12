//Define uma lista de nomes sorteados
let amigosSelecionados = [];

//Função que permite ao botão Adicionar, incluir nomes a lista de sorteados 
function adicionarAmigo() {
     
    let adicionado = document.querySelector('input').value.trim(); //Seleciona a teg input e garante que seu valor inicial está vazio
    
    if (adicionado === ""){ //Exibe erro em caso de valor vazio

        return mensagemResposta('listaAmigos', 'Digite um nome!');

    }else if(amigosSelecionados.includes(adicionado)) { //Exibe erro caso o nome já tenha sido adicionado a lista, esvaziando o input novamente

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', 'Amigo já adicionado!');

    }else{
        adicionado = document.querySelector('input').value; //Adiciona novos nomes a lista

        amigosSelecionados.push(adicionado);

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', amigosSelecionados);
    }
};

//Adiciona a função de sorteio ao botão Sortear amigo
function sortearAmigo() {  

    let indiceAmigos = Math.floor(Math.random() * amigosSelecionados.length);
    let sorteado = amigosSelecionados[indiceAmigos];

    return mensagemResposta('resultado', sorteado);
};

//Retorna mensagens de erro
function mensagemResposta(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};