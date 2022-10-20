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

// function smaller(nums) {
//     for (var i = 0; i < nums.length ; i++){
//         var numerovez = nums[i]
//         var contador = 0
//         nums[i] = contador
//         console.log('NUMERO DA VEZ ' + numerovez)

//       for (var j = 1; i+j < nums.length ; j++) {
//        var numerodireita = nums[i+j]
//         console.log('NUMERO A DIREITA ' + numerodireita)

//        if (numerovez > numerodireita){
//          contador++
//          console.log('NUMERO CONTADOR ' + contador)
//          nums[i] = contador
//        }      
//       }
//     } return console.log(nums)
//   }

//   ===========================================

//EXERCÍCIO 5 CONTAGEM DE VOGAIS (7KYU)
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// const vogais = ['a','e','i','o','u']
// function getCount(str) {
//   var contadorVogais = 0
//   for(let i = 0 ; i < str.length ; i++){
//     if(vogais.some(str[i]) === 'true'){
//       contadorVogais++
//     }
//   }
// }

// //=============================================
// Exercício 6 MÁSCARA (6KYU)
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Escreva uma função que aceite um array de 10 inteiros (entre 0 e 9), 
// que retorne uma string desses números na forma de um número de telefone.
//EX: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function createPhoneNumber(numbers){
//   let um = numbers[0]
//   let dois = numbers[1]
//   let tres = numbers[2]
//   let quatro = numbers[3]
//   let cinco = numbers[4]
//   let seis = numbers[5]
//   let sete = numbers[6]
//   let oito = numbers[7]
//   let nove = numbers[8]
//   let dez = numbers[9]
  
//   return `(${um}${dois}${tres}) ${quatro}${cinco}${seis}-${sete}${oito}${nove}${dez}`
// }

// Melhor código para esse exercício 
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//     console.log(format)
//   }

//   return format;
// }


//=================================================
// //EXERCÍCIO (7) DE PROMISES - CURSO ONE BIT CODE

// // Temos 3 Naves a disposição, 
// //porém as naves não podem dar partida com a carga atual com menos de 30% da capacidade

// let sophia = {
//     capacidade: 10,
//     cargaAtual: 5,
//     porcentagemCargaAtual: (cargaAtual*100)/capacidade
// }

// let amsterda = {
//     capacidade: 14,
//     cargaAtual: 10,
//     porcentagemCargaAtual: (cargaAtual*100)/capacidade
// }

// let estrelaAna = {
//     capacidade: 20,
//     cargaAtual: 4,
//     porcentagemCargaAtual: (cargaAtual*100)/capacidade
// }

// //Temos que dar partida nas 3 e ver quais delas conseguiremos sair

// =====================================

// // EXERCICIO 8 - 
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Complete a solução para que ela divida a string em pares de dois caracteres.
// Se a string contiver um número ímpar de caracteres, ela deverá substituir
//  o segundo caractere ausente do par final por um sublinhado ('_').

// Exemplos:

// * 'abc' =>  ['ab', 'c_']
// // * 'abcdef' => ['ab', 'cd', 'ef']


// function solution(entrada){
    
//     let string = entrada
//     let respostaFinal = []
       
//     for (let i = 0; i < string.length; i+=2){
      
//       if(((string.length % 2) != 0) && i == string.length-1){
//         respostaFinal.push(string.slice(i,i+1) + "_")
//         console.log("IF "+respostaFinal)
//       }
//      else {
      
//       respostaFinal.push(string.slice(i,i+2))
//       console.log("ELSE "+respostaFinal)
//       console.log(i)
//     }
// }
//     return console.log(respostaFinal)
//  }

// -------------

// Melhor resposta do Code Wars
// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }
// asdfasdf
// ==================================================











