import React from 'react'
import Todo from './Todo'


const Table = ({ todos, toggleTodo }) => {
   return (
      <div style={{width: 800, display: "flex",flexWrap: "wrap", border: "1 solid black", backgroundColor: "white"}}>
            <div style={{ color: "black",width: 500 , wordWrap: "break-word"}} >
               <div style= {{ display: "inline-flex",  width: 600, boxSizing: "border-box"}}>
                   <div style= {{ width: 200, padding: 10, marginLeft : 60}}> # </div>
                   <div style= {{ width: 250, padding: 10, textAlign: "center", marginRight : 30}}>Task Name</div>
                   <div style= {{ width: 250, padding: 10, textAlign: "center", marginRight : 30}}>Status</div>
                   <div style= {{ width: 400, padding: 10, textAlign: "center",marginRight : 50}}>Actions</div>
               </div>
            </div>
          <div>
            {todos.map(todo => {
                  return (
                    <div  style={{display: "inline-flex",width: 700,boxSizing: "border-box" ,flexWrap: "wrap"}}>
                        <div  style={{ width: 100,padding: 10,textAlign: "center"}}>{todo.id}</div>
                        <div  style={{ width: 115,padding: 10,textAlign: "center"}}>{<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />}</div>
                        <div  style={{ width: 130,padding: 10,textAlign: "center"}}>{todo.completed ? 'Done': 'Undone'}</div>
                        <div  style={{ width: 200,padding: 10,textAlign: "center"}}>

                          <button disabled style={{marginRight:16}} onClick={() => {}} >
                            EDIT
                            </button>
                            {!todo.completed && <button  onClick={() => toggleTodo(todo.id)} >
                            DONE
                            </button>}
                        </div>
                 </div>
                 );
                })}
          </div>
      </div>
   );
};

export default Table;