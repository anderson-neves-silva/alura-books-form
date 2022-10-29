// // explicação sobre assíncrono e síncrono no js, aqui exemplificadndo um chat entre amigos, Obs. js é síncrono por padrão
// console.log("Mandando oi pro amigo!");

// function mandaMensagem() {
//     console.log("Tudo bem?");
//     console.log("Vou te mandar uma solicitação!");
//     console.log("Solicitação recebida!");
// }

// // mandaMensagem();

// // o "setTimeout" ele faz acontecer alguma coisa depois de um determinado tempo, nesse exemplo e esperado 5 segundos depois a função "mandaMensagem" é enviada como um parâmetro do "setTimeout" e isso é chamado de "callback" que são funções que são enviadas como parâmetro para outra função, elas acontece depois de um tempo ou com alguma interação do usuário na tela, e as mais usadas são como requisições.
// setTimeout(mandaMensagem, 5000);

// console.log("Tachau tchau!");

// fazendo uma requisição com "facth", no console ele  retorna uma promise ou promessa que algo vai acontecer, o método fatch ele é assíncrono e o único parâmetro obrigatório dele e uma "url", o método "then" é quando a promessa foi resolvida e o "catch" quando foi ela rejeitada, o finally sempre vai retornar essa frase "padrão", 
var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse cep não existe!')
    } else 
        console.log(r)   
    })
    .catch(erro => console.log(erro))
    .finally(messagem => console.log('Processamento concluído com sucesso!'));

console.log(consultaCep);