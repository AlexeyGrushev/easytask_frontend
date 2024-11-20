import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TiPencil } from "react-icons/ti";

const TasksElement = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* Контейнер для заголовка и даты */}
          <div className="task-buttons">
            <MdOutlineDoneOutline className="button"/>
            <TiPencil className="button"/>
          </div>
          <div className="task-header">
            <h2>{task.task_name}</h2>
            {task.deadline == null ? <p>Без дедлайна</p> :
            <p className="deadline">{new Date(task.deadline).toLocaleString()}</p>}
          </div>
          
          {/* Подзадачи */}
          {task.subtasks.length > 0 && (
            <ul>
              {task.subtasks.map((subtask) => (
                <li key={subtask.id}>{subtask.subtask_name}</li>
              ))}
            </ul>
          )}
          
          {/* Сообщение, если подзадач нет */}
          {/* {task.subtasks.length === 0 && <p>Нет подзадач</p>} */}
        </li>
      ))}
    </ul>
  );
};

export default TasksElement;
