//그냥 볼때는 이해가 갔는데 막상 혼자서 만드려니까... 너무 많이 모르겠습니다...
//App.js 텍스트 만들고 값 저장
import React, { Component, useState } from 'react';
import './App.css';
import TodoList from './TodoList.js';
import TodoItem from './TodoItem';


const App = () => {
  const [todo, setTodo] = useState ([]);
  const [newTodo , setNewTodo] = useState();

  const changeInput = (e) => {
      setNewTodo(e.target.value);
  }

  const addTodo = (e) =>{
    e.preventDefault();
    setTodo([...todo, {'title':newTodo , 'id' : todo.length,'status' :'todos'}]);
  }

  const changeStatus = (id) =>{
    const updateTodos = todo.status ="todos";
    if(todo.status === "change") todo.status ="todos";
    else todo.status ="change";
  }
  
    <>
    <h1>todo list </h1>
    <form action=''>
      <input type ="text" name="" onChange={changeInput}/>
      <button onClick={addTodo}>추가</button>

    </form>
    <TodoList todo = {todo} changeStatus={changeStatus}/>
    
    </>
  
}

export default App;