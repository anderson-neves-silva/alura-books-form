async function buscaEndereco(cep) {
    try {        
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepCovertida = await consultaCep.json();
        if (consultaCepCovertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCepCovertida);
        return consultaCepCovertida;
    } catch (erro) {
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// linha 1, aqui define uma função assíncrona e o operador "await" é usado para esperar uma "promise".
// linha 4, convertendo o retorno do fetch em json.
// linha 9, retornando a variável convertida para quem chama essa função esse valor.
// linha 15 e 16, crio uma variável que guarda o elemento cep digitado na tela pegando pelo "id" dele, e coloco um ouvinte de eventos nele de focus que quando a pessoa digitar fora desse campo ativa ele "focusout" ou focus fora, aí quando ele acontece chama a função buscaEndereco e manda o valor do cep.