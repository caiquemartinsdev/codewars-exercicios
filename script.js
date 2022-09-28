// Exercício 1

// Trolls estão atacando sua seção de comentários!
// Uma forma comum de lidar com essa situação é remover todas as vogais dos comentários dos trolls, neutralizando a ameaça.
// Sua tarefa é escrever uma função que receba uma string e retorne uma nova string com todas as vogais removidas.
// Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "Ths wbst s fr lsrs LL!".

// const entradaFrase = (callback) =>{
//     let frase = prompt('Digite uma frase:')
//     callback(frase)
// }

// const removerVogal = (frase) => alert(frase.replace(/[aeiou]/gi,''))

// entradaFrase(removerVogal)
// ====================================================

// EXERCÍCIO 2
// Neste kata, você criará uma função que recebe uma lista de inteiros e strings
//  não negativos e retorna uma nova lista com as strings filtradas.

// Exemplo 
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     return l.filter(item => typeof item === 'number');
//   }
// ===================================================

// EXERCICIO 3
// Você vai receber uma palavra. Seu trabalho é retornar o caractere do meio da palavra.
// Se o comprimento da palavra for ímpar, retorne o caractere do meio. 
// Se o comprimento da palavra for par, retorne os 2 caracteres do meio.

// function getMiddle(s){

//     let tamanhoPalavra = s.length
//     if(tamanhoPalavra % 2 == 0){
//         return s[ Math.floor(tamanhoPalavra / 2) - 1 ] + s[ Math.floor(tamanhoPalavra / 2) ];
//     } else {
//         return s[ Math.floor(tamanhoPalavra / 2)]
//     };
    
// }
//====================================================








