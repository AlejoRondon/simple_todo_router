import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateNew from './pages/CreateNew/CreateNew';
import TodoDetails from './pages/TodoDetails/TodoDetails';
import Navbar from './components/Navbar/Navbar';
import 'normalize.css';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (title, description) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      description: description,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (e, id) => {
    e.stopPropagation();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home todos={todos} onDelete={handleDeleteTodo} />}
          />
          <Route
            exact
            path="/create"
            element={<CreateNew onCreate={handleCreateTodo} />}
          />
          <Route
            exact
            path="/details/:id"
            element={<TodoDetails todos={todos} />}
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
