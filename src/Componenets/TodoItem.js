import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ task, toggleComplete, deleteTodo, editTodo, index }) {
  const dragItem = useRef();
  const dragOverItem = useRef()
  const onDragStart = (e,index) => {
    console.log('dragstart',index)
  }
  const onDragEnter = (e,index) => {
    console.log('dragenter',index)
  }
  const onDragEnd = (e,index) => {
    console.log('dragend',index)
  }
  return (
    <div 
    draggable
    onDragStart={(e)=>onDragStart(e,index)}
    onDragEnter={(e)=>onDragEnter(e,index)}
    onDragEnd={(e)=>onDragEnd(e,index)}
    className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default TodoItem;
