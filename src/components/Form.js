import React , {useEffect} from "react";
import {v4 as uuisv4} from "uuid";

function Form({input, setInput, todos, setTodos, edit, setEdit}) {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEdit("");
    };

    useEffect(() => {
        if(edit) {
            setInput(edit.title);
        } else {
            setInput("");
        }
    }, [setInput, edit]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!edit) {
            setTodos([...todos, {id: uuisv4(), title: input, completed: false}]);
            setInput("");
        }else {
            updateTodo(input, edit.id,edit.completed)
        }

    };

    return(
       <form onSubmit={onFormSubmit} className="form-control">
            <input 
                type="text" 
                placeholder="Enter a Todo..." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button type="submit" className="btn-add">
                {edit ? "OK" : "Add"}
            </button>
       </form> 
    )
}

export default Form;