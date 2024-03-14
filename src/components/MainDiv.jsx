import React, { useState, useEffect } from 'react';

const MainDiv = () => {
    const [getTask, setGetTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("taskList"));
        if (savedTasks) {
            setTaskList(savedTasks);
        }
    });

    const handleGetTask = (e) => {
        setGetTask(e.target.value);
    };

    const handleTaskList = () => {
        if (getTask.trim() !== '') {
            const newTaskList = [...taskList, getTask];
            setTaskList(newTaskList);
            localStorage.setItem("taskList", JSON.stringify(newTaskList));
            setGetTask("");
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    };

    return (
        <>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 min-h-80 min-w-96 mt-12 rounded-xl">
                <ul className="mt-2 ml-2 mr-2">
                    {taskList.map((item, index) => (
                        <li key={index} className="bg-white w-full rounded-sm mt-1 flex justify-between p-2">
                        {item} 
                        <div className='flex'>
                            <img className='mr-2 cursor-pointer' onClick={() => handleRemoveTask(index)} src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" width={20} height={18} alt="" />
                            <input type="text" className='hidden' />
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-12 w-1/4 flex flex-col 2xl:flex-row items-center mt-4">
                <button onClick={handleTaskList} className="text-xl mb-4 2xl:mb-0 w-full 2xl:w-48 mr-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded border">Add Task</button>
                <input value={getTask} onChange={handleGetTask} className="border border-black flex-grow w-full 2xl:w-48" type="text" placeholder="Enter Task" />
            </div>
        </>
    );
};

export default MainDiv;
