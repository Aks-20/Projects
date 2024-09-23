import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const initialTodos = [
    { id: 1, text: "Walk the dog", completed: false },
    { id: 2, text: "Walk the cat", completed: false },
    { id: 3, text: "Walk the fish", completed: true },
    { id: 4, text: "Walk the chickens", completed: false },
];

export default function TodoList() {

    const [todos, setTodos] = useState(initialTodos);

    const handleToggle = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton
                            role={undefined}
                            onClick={() => handleToggle(todo.id)} 
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.text} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
