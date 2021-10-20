import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [value, setValue] = useState('');
  const [myTodos, setMyTodos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3005/todo', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMyTodos(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
    className="App">
      <TodoList myTodos={myTodos}/>
      <TextField 
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={value}
        onChange={event => setValue(event.target.value)}
        />
        <Button variant="contained" onClick={() => {
          fetch('http://localhost:3005/todo', {
            method: 'POST',
            body: JSON.stringify({
                id: Date.now(),
                value: value,
                date: new Date().toDateString(),
                complete: false
              })
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setMyTodos(state => {
                return [
                  ...state,
                  data
                ]
              });
              setValue('');
            })
            .catch(err => console.log(err));
        }}>Add</Button>
    </div>
  );
}

export default App;
