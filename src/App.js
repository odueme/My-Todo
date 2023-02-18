import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import ActiveTab from "./components/ActiveTab";
import Footer from "./components/Footer";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import { v4 as uuidv4 } from 'uuid';

const FILTER_MAP = {
  All: () => true,
  Active: (todoItem) => !todoItem.isCompleted,
  Completed: (todoItem) => todoItem.isCompleted
};

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App() {
  const [darkMode, setMode] = useState(true);
  const [todoItems, setItems] = useState([])
  const [filter, setFilter] = useState("All")


  const getCount = todoItems.filter(item => !item.isCompleted)
  
  let count = getCount.length
 




  // const filterList = FILTER_NAMES.map((name) =>{
  //   <ActiveTab key={name} name={name} />
  // })
 
    const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setItems([...todoItems, {id: uuidv4(), value: event.target.value, isCompleted: false}]);
     
     
    } 

  };

  function complete(id){
    const updatedTasks = todoItems.map((todoItem) => {
      console.log(todoItem)
      if (id === todoItem.id) {
        
        return {...todoItem, isCompleted: !todoItem.isCompleted}
      }
      return todoItem

})
setItems(updatedTasks)
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const result =  prevItems.filter((item) => {
        console.log(item)
        count = item.length
        return item.id !== id
        
      });
     
      console.log({result})
      return result
    });
    
     
    console.log({todoItems})
    if(todoItems.length === 0){
  
    }
  }

  function handleClick(){
    setMode(!darkMode)
  }


  function clearComplete(){
    const completedTask = todoItems.filter(item =>{
        return  !item.isCompleted 
    })
    
    setItems(completedTask)
  }



  return (
    
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "  hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)",
      }}
    >
      <header className="App-header">
        <img
          src={darkMode ? moon : sun}
          alt=""
          className="mode-button"
          onClick={handleClick}
        />
        <Header mode={darkMode} keyDown={handleKeyDown} />
      </header>
      <div className="container">
        { todoItems.filter(FILTER_MAP[filter]).map((todos) => (
          <Todolist
            key={todos.id}
            id={todos.id}
            mode={darkMode}
            todo={todos.value}
            delete={deleteItem}
            complete={complete}
            isCompleted={todos.isCompleted}
          />
        ))}

        { filter !== "Completed" && <div className="todo-item-end" 
        style={{backgroundColor: darkMode ? "white" : "hsl(235, 24%, 19%)",  
        display: todoItems.length === 0 ? "none" : "flex"}}>
   
   { count.length !== 1 ? <p>{count} Items left</p> : <p>{count} item left</p>}
   <p 
   onClick={clearComplete}
   style={{cursor: "pointer"}}
   >
   Clear Completed</p>
   
     </div>}
      </div>
      <div className="Active-pane" 
           style={{backgroundColor: darkMode ? "#fff" : "hsl(235, 24%, 19%)", 
           display: todoItems.length === 0 ? "none" : "flex"}}>
      {
        FILTER_NAMES.map((name, index) =>
      <ActiveTab
      id={index}
       mode={darkMode} 
       empty={todoItems.length === 0} 
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
       />
      ) }

    
      </div>
      <Footer mode={darkMode} empty={todoItems.length === 0} />
    </div>
  );
}

export default App;
