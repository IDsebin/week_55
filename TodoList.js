import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todo,changeStatus}) =>{

    const list  = todo.map( todo => 
    <TodoItem key = {todo.id} tode ={todo} changeStatus={changeStatus}/>)

    return(
        <ul>
            {list}
        </ul>
    )
}

export default TodoList;