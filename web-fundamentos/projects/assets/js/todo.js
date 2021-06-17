let data = [{ //criando uma Array de json (objetos)
  id: 1,
  title: "Levantar as 07:00 horas"
}, {
  id: 2,
  title: "café da manhã saudável"
}, {
  id: 3,
  title: "treinar 15 min"
}, {
  id: 4,
  title: "Estudar"
}, {
  id: 5,
  title: "Organizar a casa"
}];

data.forEach(task => { //FOREACH passa em cada elemento da Array e vai executando cada item da lista

  let li = document.createElement('li');

  // label foi adicionado para clicar no title e fazer o checkbox
  li.innerHTML = `
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label> 
  `;

  document.querySelector('.todo').append(li);

});