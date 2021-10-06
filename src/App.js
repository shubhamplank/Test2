import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';
function App() {
  //delete function 
  const onDelete = (todo) => {
    
    console.log ("i am deleted", todo);
    setTodos(todos.filter((e)=>{return e!==todo;}))
  }
  const [todos, setTodos] = useState( [
    { sno: 1, title: "complete react", descp: "to be finished in 2 days" },
    { sno: 2, title: "complete sql", descp: "to be finished in a day" },
    { sno: 3, title: "complete DSA", descp: "to be finished in 5 days" },
  ]);
  return (
    <div>
      <Header title="My To-Do List" searchBar={false} />
      <Todos todos = {todos} onDelete = {onDelete} />
      <Footer />
    </div>
  );
}

export default App;
