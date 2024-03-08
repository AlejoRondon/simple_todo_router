import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './TodoCard.scss';

const TodoCard = ({ todo, onDelete }) => {
  const navigate_to = useNavigate();
  const handleOnClick = () => {
    navigate_to(`/details/${todo.id}`);
  };

  return (
    <div className="todo-card" onClick={handleOnClick}>
      <div>
        <h3>{`${todo.title}: `}</h3>
        <span>{todo.description}</span>
      </div>
      <button onClick={(e) => onDelete(e, todo.id)} className="delete-btn">
        <i className="fas fa-trash-alt"></i> Delete
      </button>
    </div>
  );
};

export default TodoCard;
