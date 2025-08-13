let amigosSelecionados = []; //Define lista de nomes sorteados
let amigosSorteados = []; //Armazena os nomes já sorteados
let contadorSorteios = 0; //Contabiliza o número de vezes que o botão Sortear amigo foi acionado

//Inclui nomes a lista de sorteados 
function adicionarAmigo() {
     
    let adicionado = document.querySelector('input').value.trim();
    let nomePadronizado = adicionado.toLowerCase(); 

    if (adicionado === ""){ 

        return mensagemResposta('listaAmigos', 'Digite um nome!'); 

    }else if(amigosSelecionados.map(n => n.toLowerCase()).includes(nomePadronizado)) { 

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', 'Amigo já adicionado!'); 

    }else{
        adicionado = document.querySelector('input').value;

        amigosSelecionados.push(adicionado);

        document.querySelector('input').value = '';

        return mensagemResposta('listaAmigos', amigosSelecionados.join(' - '));
    }
};

//Adiciona a função de sorteio ao botão Sortear amigo
function sortearAmigo() {

    if (amigosSelecionados.length === 0) { 
        return mensagemResposta('listaAmigos', 'Digite um nome!');
    }

    if (amigosSorteados.length === amigosSelecionados.length){
        return mensagemResposta('resultado', 'Todos já foram sorteados!');
    };

    let sorteado;
    
    do{
        let indiceAmigos = Math.floor(Math.random() * amigosSelecionados.length);
        sorteado = amigosSelecionados[indiceAmigos];
    }while (amigosSorteados.includes(sorteado)); 

    amigosSorteados.push(sorteado);
    contadorSorteios++; 
  
    return mensagemResposta('resultado', `O amigo secreto sorteado é: ${sorteado} (${contadorSorteios}º sorteio).`);
};

//Retorna mensagens de erro
function mensagemResposta(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};