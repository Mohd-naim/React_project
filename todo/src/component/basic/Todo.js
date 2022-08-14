import React from 'react';
import "./style.css"
const Todo = () => {
    return (
        <div className='cont'>
            <div className='todo_app'>
                <h1>Todo App</h1>
                <form action="" className='form'>
                    <Add />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                    <Mydiv />
                </form>
            </div>
        </div>
    )
}
const Mydiv = () => {
    return (
        <>
            <div className="task"><h3>Hello EveryOne</h3> <h2><span>➕</span><span>✅</span></h2></div>
        </>
    )
}

const Add = () => {
    return (
        <>
            <div className="add_task">
                <input type="text" name="" id="" />
                <button>Add Task</button>
            </div>
        </>
    )
}

export default Todo

