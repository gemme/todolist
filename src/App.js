import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const todos = [
  {
    id: 1,
    value: 'Work',
    date: new Date().toDateString(),
    complete: false
  },
  {
    id: 2,
    value: 'Node',
    date: new Date().toDateString(),
    complete: false
  },
  {
    id: 3,
    value: 'Masters degree',
    date: new Date().toDateString(),
    complete: false
  },
  {
    id: 4,
    value: 'Homework',
    date: new Date().toDateString(),
    complete: false
  }
];

function App() {
  const [todo, setTodo] = useState('');
  const [myTodos, setMyTodos] = useState(todos);
  console.log(myTodos);
  console.log(todo);
  return (
    <div className="App">
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TodoList myTodos={myTodos}/>
      <TextField 
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={todo}
        onChange={event => setTodo(event.target.value)}
        onKeyDown={event => {
          if(event.key === 'Enter') {
          console.log('Enter');
          event.preventDefault();
            setMyTodos(state => {
              return [
                ...state,
                {
                  id: state.id + 1,
                  value: todo,
                  date: new Date().toDateString(),
                  complete: false
                }
              ]
            });
            setTodo('');
          }
          
        }}
        />
    </Box>
     
    </div>
  );
}

export default App;
