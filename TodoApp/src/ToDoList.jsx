import React, { useState } from 'react'
function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event) {
        // Helps write text in the input field
        setNewTask(event.target.value)
    }

    function addTask() {
        // Adds the new task to the list of tasks
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask])
            // Clears the input field
            setNewTask('')
        }

    }

    function deleteTask(index) {
        // Deletes the task at the given index
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            // Swaps the task at the given index with the task above it
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            // Swaps the task at the given index with the task below it
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input
                    type='text'
                    placeholder='Enter a new task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className='delete-button'
                            // If the arrow function is not made, the function will be called immediately
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList