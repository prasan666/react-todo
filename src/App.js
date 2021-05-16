import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
import Backdrop from './components/Backdrop';
import AddTodo from './components/addTodo';

function App() {
  let Todos = [
    {
      id: 1,
      title: 'Angular'
    },
    {
      id: 2,
      title: 'React'
    },
    {
      id: 3,
      title: 'Vue'
    }
  ];
  // state = { todos: todos }
  const [todos, setTodos] = useState(Todos);


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openTodoHandler = () => {
    setModalIsOpen(true)
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }
  const addTodoHandler = () => {
    setModalIsOpen(false)
  }
  const addCallbackFunction = (childData) => {
    let data = todos.map((item, index) => { return { title: item.title, id: index } })
    data = data.concat({ title: childData, id: data.length })
    setTodos(data)
    localStorage.setItem('todos', JSON.stringify(data))
  }
  const deleteCallbackFunction = (id) => {
    let data = todos.filter((item) => id !== item.id)
    setTodos(data)
    localStorage.setItem('todos', JSON.stringify(data))
  }

  const searchHandler = (event) => {
    if (event.target.value.length > 0) {
      const searchData = todos.filter((item) => {
        return item.title.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setTodos(searchData)
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }

  return (
    <div>
      <div className="flex-between">
        <h1>My Todos</h1>
        <div>
          <input type="text" id="todoSearch" onChange={searchHandler} placeholder="Search Todo title" />
        </div>
        <button className="btn" onClick={openTodoHandler}>Add Todo</button>
      </div>
      {
        todos.map(todo => {
          return <Todo text={todo.title} id={todo.id} key={todo.id} onDelete={deleteCallbackFunction} />
        })
      }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      { modalIsOpen && <AddTodo parentCallback={addCallbackFunction} onCancel={closeModalHandler} onConfirm={addTodoHandler} />}
    </div>
  );
}

export default App;
