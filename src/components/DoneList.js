import React from "react";

function DoneList({done}) {

    return(
        <div data-testid="done-test" className="card" >
           {done.map((todo) => (
                <li data-testid="done-list" className="list-item" key={todo.id}>
                    <input 
                        type="text" 
                        value={todo.title} 
                        className="list-done" 
                        onChange={(event) => event.preventDefault()} 
                    />
                </li>
           ))} 
        </div>
    )
}

export default DoneList;