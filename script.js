// aqui define uma função assíncrona e o operador "await" é usado para esperar uma "promise"
async function buscaEndereco() {
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/')
    // convertendo o retorno do fetch em json
    var consultaCepCovertida = await consultaCep.json();
    
    console.log(consultaCepCovertida);
}

// chamando buscaEndereco
buscaEndereco();