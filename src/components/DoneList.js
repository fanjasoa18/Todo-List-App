import React from "react";

function DoneList({done}) {
    
    return(
        <div className="card">
           {done.map((todo) => (
                <li className="list-item" key={todo.id}>
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