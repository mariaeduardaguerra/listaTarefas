import React, {useState} from "react"
import './App.css';
import AddTask from './components/Tarefa/Tarefa.jsx';
import List from './components/Lista/Lista.jsx';
// import './components/Tarefa/Tarefa.module.css';
// import './components/Lista/Lista.module.css';

function App() {

  const [todos, setTodos] = useState([])

  const onAddTask = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        name: value,
        checked: false
      }
    ])
  }

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => obj.id === todo.id ? {...obj, checked: !todo.checked } : obj)
    )
  }

  const onRemove = (todo) => {
    let notRemove = []
    for(var i = 0; i < todos.length; i++) {
      if(todo.id !== todos[i].id){
        notRemove.push(todos[i])
      }
    }
    setTodos(notRemove)
  }

  return (
    <section id="app" className='container'>
      <header>
        <h1 className='title'>Lista de Tarefas</h1>
      </header>
      <div className='main'>
        <AddTask onAddTask={onAddTask} />
        <List todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </section>
  );
}

export default App;