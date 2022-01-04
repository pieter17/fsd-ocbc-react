import './App.css';

import { useEffect, useState } from 'react';

import logo from './logo.svg';
import Card from './components/Card';

function App() {
  // * Sesi 21: Fetch data
  const [url] = useState('https://jsonplaceholder.typicode.com/todos');
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  // * Fetch Data
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setTodos(result));
  }, []);

  // * function untuk mendapatkan data spesifik
  function getTodo(id) {
    fetch(url + `/${id}`)
      .then((response) => response.json())
      .then((result) => setTodo(result));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        {
          // todo && (<div>...</div>)
          // * sama seperti ->> todo ? (<div>...</div>) : null
          // todo || (<div>...</div>)
          // * sama seperti ->> todo ? null : (<div>...</div>) --> ||
          // * -> true && true  -> true
          // * -> true && false -> false
          // ? -> true || true   -> true
          // ? -> true || false  -> true
          // ? -> false || true  -> true
          // ? -> false || false -> false
        }

        {todo && (
          <div>
            {todo.title} - {todo.userId} -{' '}
            {todo.completed ? 'Completed' : 'Pending'}
            <button onClick={() => setTodo()}>Go back</button>
          </div>
        )}

        {!todo &&
          todos.map((todo) => (
            <Card
              title={todo.title}
              userId={todo.userId}
              completed={todo.completed}
              key={todo.id}
            />
          ))}
      </header>
    </div>
  );
}

export default App;
