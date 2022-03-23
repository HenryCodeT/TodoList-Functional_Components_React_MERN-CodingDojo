import React, { useState } from 'react';

const AddToDoList = (props) => {

    const newTask = {
        task:'',
        complete:false
    }
    const [task, setTast] = useState(newTask);

    const handleOnChange = (e) => {
        setTast({
            ...task,
            [e.target.name]:e.target.value
        })
    }

    const createTask = (e) => {
        e.preventDefault();
        props.addNewTask(task);
        setTast(newTask);
    }

    return(
        <div className='col-4 mx-auto'>
            <form onSubmit={createTask}>
                <div className='form-group'>
                    <label className="form-label" htmlFor="task">Task:</label>
                    <input className="form-control border border-dark" onChange={handleOnChange} type="text" name="task" value={task.task}/>
                </div>    
            <button className='btn btn-success' type="submit">Create Task</button>
            </form>
        </div>
    );
}
export default AddToDoList;