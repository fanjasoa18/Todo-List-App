import React from "react";
import {v4 as uuisv4} from "uuid";

function Form({input, setInput, todos, setTodos}) {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuisv4(), title: input, completed: false}]);
        setInput("");
        
    };

    return(
       <form data-testid="form" onSubmit={onFormSubmit} className="form-control">
            <input 
                data-testid="form-input"
                type="text" 
                placeholder="Enter a Todo..." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            
       </form> 
    )
}

export default Form;

