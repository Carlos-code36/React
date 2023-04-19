// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import { TodoCounter } from "../TodoCounter";
// import { TodoSearch } from "../TodoSearch";
// import { TodoList } from "../TodoList";
// import { CreateTodoButtom } from "../CreateTodoButtom";
// import { TodoItem } from "../TodoItem";
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext"
// const defaultTodos = [
//   {text:'Inicar con react', completed:false},
//   {text:'Tormar el curso de intro a react', completed:false},
//   {text:'Llorar con react', completed:true},
//   {text:'aprender con react', completed:true}
// ];



function App() {
  
  // console.log('render antes');
  // React.useEffect(()=>{
  //   console.log('user effect');
  // },[totalTodos])
  // console.log('render despues');
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    //   <React.Fragment>
    //     {<TodoCounter total={totalTodos} completed={completedTodos}/>}
    //     {/* <h2>completado 2 de 3 Todos </h2> */}
    //     <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue}/>
    //     {/* <input placeholder="cebolla"/> */}

    //  <TodoList>
    //   {searchedTodos.map(todo => (
    //     <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
    //      onComplete={()=>{completeTodo(todo.text)}} 
    //      onDelete={()=>{deleteTodo(todo.text)}} 
    //      /> 
    //   ))}
    //  </TodoList> 
    //  <CreateTodoButtom/>
    //  {/* <button>+</button> */}
    //   </React.Fragment>

  );
}

export default App;
