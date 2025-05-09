import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (!name) return;

    fetch('http://localhost:4000/add?name=' + name)
      .then(r => r.json())
      .then(d => {
        setTodos(d);
        setName('');
      });
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t, i) => <li key={i}>{t.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

