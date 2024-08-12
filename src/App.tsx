import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([]);

  const addTodo = (event) => {
    const inputElement = event.target as HTMLInputElement;
    if (event.key === "Enter" && inputElement.value.trim()) {
      setTask([
        ...task,
        { id: Math.random(), title: inputElement.value, isDone: false },
      ]);
      inputElement.value = "";
    }
  };

  return (
    <>
      <input type="text" onKeyDown={addTodo} />
      <ul>
        {task.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
