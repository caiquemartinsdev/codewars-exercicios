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

//EXERCÍCIO 4 LOOP (7KYU)
// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
// Escreva uma função que dado, um array arr, retorna um array contendo em cada índice i 
// a quantidade de números que são menores que arr[i]a direita.

// Por exemplo:
// Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
    for (var i = 0; i < nums.length ; i++){
        var numerovez = nums[i]
        var contador = 0
        nums[i] = contador
        console.log('NUMERO DA VEZ ' + numerovez)

      for (var j = 1; i+j < nums.length ; j++) {
       var numerodireita = nums[i+j]
        console.log('NUMERO A DIREITA ' + numerodireita)

       if (numerovez > numerodireita){
         contador++
         console.log('NUMERO CONTADOR ' + contador)
         nums[i] = contador
       }      
      }
    } return console.log(nums)
  }

//   ===========================================








