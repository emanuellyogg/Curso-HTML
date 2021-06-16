let tabuada = document.querySelector("#tabuada tbody");
let valorA = 5;

tabuada.innerHTML = ''; //limpar o conteudo da tabela antes de passar pelo FOR

for (let valorB = 0; valorB <= 10; valorB++) { //dentro do FOR posso declarar as minhas variáveis e as condições

  let resultado = valorA * valorB;

  let template = `
    <td>${valorA}</td>
    <td>x</td>
    <td>${valorB}</td>
    <td>=</td>
    <td>${resultado}</td>
  `;

  let tr = document.createElement('tr'); //comando para criar uma linha

  tr.innerHTML = template; //propriedade para visualizar string

  tabuada.append(tr); //propriedade para adicionar no final a variável tr

}