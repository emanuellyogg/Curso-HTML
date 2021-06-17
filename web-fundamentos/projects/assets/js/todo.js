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

function renderTodo() {

  document.querySelector('.todo').innerHTML = '';

  data.forEach(task => { //data. é a Array. FOREACH passa em cada elemento da Array e vai executando cada item da lista

    let li = document.createElement('li');

    // label foi adicionado para clicar no title e fazer o checkbox
    li.innerHTML = `
      <input type="checkbox" id="task-${task.id}">
      <label for="task-${task.id}">${task.title}</label> 
    `;

    //evento para quando o item for marcado, ele ficará riscado da lista
    li.querySelector('input').addEventListener("change", e => {

      //SE o checkbox for selecionado, adicionar a class riscar da lista. SE NÃO, remover a class riscar da lista
      if (e.target.checked) {
        li.classList.add('complete');
      } else {
        li.classList.remove('complete');
      }

    });

    document.querySelector('.todo').append(li);

  });
}

document.querySelector('#new-task').addEventListener('keyup', e => {

  if (e.key === 'Enter') {

    data.push({
      id: data.length + 1,
      title: e.target.value
    });

    e.target.value = "";

    renderTodo();

  }

});

renderTodo();