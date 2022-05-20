// 입력된 리스트 삭제
import React from "react";
import './TodoItem.css '

const Item =({todos,changeStatus})=> {
    const toggleItem = (e) =>{
        const id = e.target.id;
        changeStatus(id);
    }
    const itemClassName = todos.changeStatus ==='change'? 'change':'';
    return(
       
            <li data-id ={todos.id }onclick = {toggleItem} className={itemClassName}> {todos.title}</li>
        
    )
}

export default TodoItem;