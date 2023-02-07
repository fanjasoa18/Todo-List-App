import React from "react";

function TodoList({setTodos, setDone, done = [], todos = []}) {

    const moveToDone = ({id}) => {
        const item = todos.find((todo) => todo.id === id);
        setDone([item, ...done]);

        const filterarray = todos.filter((todo) => todo.id !== id);
        setTodos(filterarray);
    }

    return(
        <div data-testid="todo-test" className="card">
            {todos.map((todo) => (
                <li data-testid="todo-list" className="list-item" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className="list" 
                        onChange={(event) => event.preventDefault()} 
                    />
                    <div className="button">
                        <input type="checkbox" onChange={() => moveToDone(todo)} />   
                    </div>
                </li>
            ))
            }       
        </div>
    )
}

export default TodoList;