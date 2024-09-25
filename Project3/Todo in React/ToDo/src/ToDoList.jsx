import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: "Walk the dog", completed: false },
    { id: 2, text: "Walk the cat", completed: false },
    { id: 3, text: "Walk the fish", completed: true },
    { id: 4, text: "Walk the chickens", completed: false },
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    // Function to remove a todo
    const removeTodos = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id); // Use strict comparison
        });
    };

    // Function to toggle the completed status
    const handleToggle = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => handleToggle(todo.id)}
                    removeTodo={removeTodos} // Correct prop naming
                />
            ))}
        </List>
    );
}
