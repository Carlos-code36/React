import React from "react";
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
   const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal,
      setOpenModal, } = React.useContext(TodoContext)

   return (
      <React.Fragment>
         {<TodoCounter />}
         {/* <h2>completado 2 de 3 Todos </h2> */}
         <TodoSearch />
         {/* <input placeholder="cebolla"/> */}
         <TodoList>
            {error && <p>Error, verifica que pasa...</p>}
            {loading && <p>Cargando.....</p>}
            {(!loading && !searchedTodos.length) && <p>Crea un nuevo TODO</p>}
            {searchedTodos.map(todo => (
               <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                  onComplete={() => { completeTodo(todo.text) }}
                  onDelete={() => { deleteTodo(todo.text) }}
               />
            ))}
         </TodoList>
         {openModal && (
            <Modal>
               <TodoForm></TodoForm>
            </Modal>
         )}

         <CreateTodoButtom
         setOpenModal={setOpenModal}
          />
         {/* <button>+</button> */}
      </React.Fragment>
   );
}

export { AppUI }