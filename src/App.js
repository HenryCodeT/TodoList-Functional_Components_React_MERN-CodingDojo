import './App.css';
import {useState} from 'react'
import AddToDoList from './components/AddToDoList';
import Task from './components/Task';

function App() {
  
  // //// FIELDS //////////////////////////////////
  const [toDoList, setToDoList] = useState([
    // {
    //   task: "Program To Do List.",
    //   complete: false 
    // },
    // {
    //   task: "Program e-comerce",
    //   complete: true 
    // }
  ])
  
  // //// CREATE ///////////////////////////////////
  const addNewTask = (newTask) => {
    setToDoList( (prevToDoList) => [...prevToDoList,newTask]);
  }

  // //// UPDATE ///////////////////////////////////
  const handleOnChange = (e,id) =>{
    const newToDoList = [...toDoList];
    newToDoList[id].complete = !newToDoList[id].complete;
    setToDoList(newToDoList);

  }
  // //// DELETE ////////////////////////////////////

  const handleOnClick = (e,id) => {
    let filteredToDoList = toDoList.filter((task,index) => index !== id );
    setToDoList(filteredToDoList);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddToDoList addNewTask={addNewTask}/>
      <h2>List of task</h2>
      {
        toDoList.map((item,index) => 
          <Task task = { item } handleOnChange={handleOnChange} key = { index } id={index} handleOnClick={handleOnClick} />
        )
      }
    </div>
  );
}

export default App;
