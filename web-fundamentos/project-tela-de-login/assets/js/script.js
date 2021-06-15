let slogan = "Hello word!";

slogan = "Shannaro";

console.log("O slogan da Sakura é: " + slogan);
console.log(`O slogan da Sakura é: ${slogan}`); // usando crase + ${} outra forma de fazer concatenação// 

// e => chamar uma função "simples";
// addEventListener escutar a ação do usuário.
document.getElementById('btn-submit').addEventListener('click', e => {

  console.log('o botão foi clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

  console.log('o mouse está sobre o formulário');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

  console.log('o mouse está fora do formulário');

});

document.querySelector('#form-login').addEventListener('submit', e => {

  e.preventDefault(); //evento para cancelar comportamento pradão do navegador

  //console.log('Formulário enviado! Aqui vai o Ajax.')

  //recuperar os dados do formulário, somente após o event submit.
  let email = document.querySelector('#email').value;
  let passowrd = document.querySelector('#password').value;

  console.log(email, passowrd);

});