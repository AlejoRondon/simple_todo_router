// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import TodoCard from '../../components/TodoCard/TodoCard';

const Home = ({ todos, onDelete, onClickCard }) => {
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
