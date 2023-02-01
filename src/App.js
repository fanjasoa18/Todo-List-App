import React, {useState, useEffect}  from 'react';
import Header from './components/Header';
import Form from "./components/Form";
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import './App.css';


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);
  const [done, setDone] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  })

  return (
    <div className='app'>
    <div className="container">
      <Header/>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <div className='app_wrapper'>
        <div className='todo_list'>
          <h3 className='todo_title'>Todo</h3>
          <div className='todo_card'>
            <TodoList 
              todos={todos} 
              setTodos={setTodos} 
              setEdit={setEdit}
              done={done}
              setDone={setDone}
            />
          </div>
        </div>
        <div className='todo_list'>
          <h3 className='done_title'>Done</h3>
          <div className='done_card'>
            <DoneList
              done={done}
            />
          </div>
        </div>    
      </div>
    </div>
  </div>
  );
}

export default App;
