let todos = [];

function addTodo(todos, name, passid, urgency) {
  let newTodo = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    passid: passid,
    urgency: urgency
  };
  todos.push(newTodo);
}



