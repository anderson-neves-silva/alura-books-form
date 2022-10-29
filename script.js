// aqui define uma função assíncrona e o operador "await" é usado para esperar uma "promise"
async function buscaEndereco() {
    try {        
        var consultaCep = await fetch('https://viacep.com.br/ws/01001250/json/')
        // convertendo o retorno do fetch em json
        var consultaCepCovertida = await consultaCep.json();
        if (consultaCepCovertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCepCovertida);
    } catch (erro) {
        console.log(erro);
    }
}

// chamando buscaEndereco
buscaEndereco();