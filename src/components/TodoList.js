import React from "react";

function TodoList({todos, setTodos, setEdit, done, setDone}) {

    const moveToDone = ({id}) => {
        const item = todos.find((todo) => todo.id === id);
        setDone([item, ...done]);
        const filterarray = todos.filter((todo) => todo.id !== id);
        setTodos(filterarray);
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    };

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return(
        <div className="card">
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className="list" 
                        onChange={(event) => event.preventDefault()} 
                    />
                    <div className="button">
                        <button className="button-complete task-button" onClick={() => moveToDone(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>   
                    </div> 
                </li>
            ))
            }       
        </div>
    )
}

export default TodoList;