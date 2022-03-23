import React, { useState } from 'react';

const Task = ({ task, id, handleOnChange, handleOnClick }) => {
    return (
        <div className='m-2'>
            <label>
                <input className='form-check-input'
                    type="checkbox"
                    checked={task.complete}
                    onChange={(e) => handleOnChange(e, id)} />
                <span className='mx-3'>{task.task}</span>
            </label>
            <button onClick={(e) => handleOnClick(e, id)} className='btn btn-danger'>Delete</button>
        </div>
    )
}
export default Task;