import React from 'react';
import { useParams } from 'react-router-dom';
import './TodoDetails.scss';

const TodoDetails = ({ todos }) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <div className="todo-details-container">
      {todo ? (
        <div className="todo-details">
          <h3 className="todo-id">{todo.id}</h3>
          <h3 className="todo-title">{todo.title}</h3>
          <p className="todo-description">{todo.description}</p>
        </div>
      ) : (
        <p className="todo-not-found">{`I wasn't possible to find a todo with id: ${id}`}</p>
      )}
    </div>
  );
};

export default TodoDetails;
