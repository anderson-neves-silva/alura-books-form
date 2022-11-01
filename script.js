async function buscaEndereco(cep) {  // aqui define uma função assíncrona e o operador "await" é usado para esperar uma "promise".
    var mensagemErro = document.getElementById('erro');  // criando uma variável e atribuindo o elemento erro acessando pelo "id".
    mensagemErro.innerHTML = "";  // iniciando a variável com uma mensagem vazia
    try {        
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepCovertida = await consultaCep.json();  // convertendo o retorno do fetch em json.
        
        if (consultaCepCovertida.erro) {
            throw Error('CEP não existente!');
        }
        
        var cidade = document.getElementById('cidade');  // acessando os elementos, cidade, endereço e estado pelo "id" deles.
        var rua = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCepCovertida.localidade; // colocando automaticamente os dados no form retornados da "api"
        rua.value = consultaCepCovertida.logradouro;
        estado.value = consultaCepCovertida.uf;
        bairro.value = consultaCepCovertida.bairro;

        console.log(consultaCepCovertida);
        return consultaCepCovertida;  // retornando a variável convertida para quem chama essa função esse valor.
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`  // monstrando um erro na tela
        console.log(erro);  
    }
}

var cep = document.getElementById('cep');  // crio uma variável que guarda o elemento cep digitado na tela pegando pelo "id" dele.
cep.addEventListener("focusout", () => buscaEndereco(cep.value));  // olocando um ouvinte de eventos em "cep" de focus que quando a pessoa digitar fora desse campo ativa ele "focusout" ou focus fora, aí quando ele acontece chama a função buscaEndereco e retorna o valor do cep.