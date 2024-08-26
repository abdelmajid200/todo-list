// src/components/ListTask.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const [filter, setFilter] = useState('all');
    const tasks = useSelector((state) => state.todos);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <div>
            <div>
                <button className='choice' onClick={() => setFilter('all')}>All</button>
                <button className='choice' onClick={() => setFilter('done')}>Done</button>
                <button className='choice' onClick={() => setFilter('notDone')}>Not Done</button>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
