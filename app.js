let amigosSelecionados = []; //Define uma lista de nomes sorteados
let contadorSorteios = 0; //Contabiliza o número de vezes que o botão Sortear amigo foi acionado

//Função que permite ao botão Adicionar, incluir nomes a lista de sorteados 
function adicionarAmigo() {
     
    let adicionado = document.querySelector('input').value.trim(); //Seleciona a tag input e garante que seu valor inicial está vazio
    
    if (adicionado === ""){ //Exibe erro em caso de valor vazio

        return mensagemResposta('listaAmigos', 'Digite um nome!');

    }else if(amigosSelecionados.includes(adicionado)) { //Exibe erro caso o nome já tenha sido adicionado a lista, esvaziando o input novamente

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', 'Amigo já adicionado!');

    }else{
        adicionado = document.querySelector('input').value; //Adiciona novos nomes a lista

        amigosSelecionados.push(adicionado);

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', amigosSelecionados.join(' - '));//inclui separador na lista de amigos
    }
};

//Adiciona a função de sorteio ao botão Sortear amigo
function sortearAmigo() {

    let indiceAmigos = Math.floor(Math.random() * amigosSelecionados.length);
    let sorteado = amigosSelecionados[indiceAmigos];

    if (amigosSelecionados.length === 0) { //Corrige bug que exibia a mensagem caso Sortear amigo fosse clicado sem nomes na lista
        return mensagemResposta('listaAmigos', 'Digite um nome!');
    }

    contadorSorteios++; //Atribui mais um a contagem, toda vezes que o botão Sortear amigo foi acionado
  
    return mensagemResposta('resultado', `O amigo secreto sorteado é: ${sorteado} (${contadorSorteios}º sorteio).`);
};

//Retorna mensagens de erro
function mensagemResposta(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};