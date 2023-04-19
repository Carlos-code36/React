import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext"

function TodoSearch(){
    const { searchValue, setSearchValue}= React.useContext(TodoContext);
    const [] = React.useState(''); 
    const onSearchValueChange= (event)=>{
        setSearchValue(event.target.value);
    }
    return(
        <input className="TodoSearch" placeholder="Ingrese valor" value={searchValue}
        onChange={onSearchValueChange}/>
    );
}
export {TodoSearch};