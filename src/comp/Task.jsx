// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/todoSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask({ id: task.id, title: newTitle, description: newDescription }));
        }
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <div className={`task ${task.isDone ? 'completed' : ''}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Task title"
                    />
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Task description"
                    />
                </div>
            ) : (
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            )}
            <div>
                <button onClick={handleToggle}>
                    {task.isDone ? 'Undo' : 'Complete'}
                </button>
                <button onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;
