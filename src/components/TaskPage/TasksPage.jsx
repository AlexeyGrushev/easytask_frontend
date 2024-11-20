import React from "react";
import "./style.css"

import tasksElement from "./taskComponent";
import createTaskElement from "./createTaskElementHot";

const testTask = {
  tasks: [
    {
      id: 1,
      task_name: "Задача 1",
      deadline: "2024-11-11T17:00:00Z",
      subtasks: [
        {
          id: 1,
          subtask_name: "Подзадача 1.1",
        },
        {
          id: 2,
          subtask_name: "Подзадача 1.2",
        },
        {
          id: 3,
          subtask_name: "Подзадача 1.2",
        },
      ],
    },
    {
      id: 2,
      task_name: "Задача 2",
      deadline: "2024-11-15T12:00:00Z",
      subtasks: [
        {
          id: 3,
          subtask_name: "Подзадача 2.1",
        },
      ],
    },
    {
      id: 3,
      task_name: "Сходить в магазин",
      deadline: "2024-11-20T09:00:00Z",
      subtasks: [],
    },
    {
      id: 4,
      task_name: "Задача 4",
      deadline: "2024-11-11T17:00:00Z",
      subtasks: [
        {
          id: 1,
          subtask_name: "Подзадача 1.1",
        },
        {
          id: 2,
          subtask_name: "Подзадача 1.2",
        },
      ],
    },
    {
      id: 5,
      task_name: "Задача без дедлайна",
      deadline: null,
      subtasks: [],
    },
  ],
};

class TasksPage extends React.Component {
  //  ------------------------------- Page Logic
  constructor(props) {
    super(props);
    this.state = {
      currentListId: 1,
    };
  }

  // ------------------------------- Page Markup

  sidebarElement() {
    return (
      <div className="block list-sidebar">
        <h1 className="block-header">Списки задач</h1>

        <div className="list-block">
          <ul className="list-ul">
            {this.listNameElement(1, "List1")}
            {this.listNameElement(2, "List2")}
            {this.listNameElement(3, "List3")}
          </ul>
        </div>
      </div>
    );
  }

  listNameElement(list_id, name) {
    return (
      <a id={list_id}>
        <li>
          <span>{name}</span>
        </li>
      </a>
    );
  }

  mainElement() {
    return (
      <div className="block main-block">
        <h1 className="block-header">Название списка</h1>
        <div className="list-block">
          {tasksElement(testTask)}
          {createTaskElement()}
        </div>
      </div>
    );
  }

  pageContent() {
    return (
      <div>
        <div className="content-block">
          {this.sidebarElement()}

          {this.mainElement()}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.pageContent()}</div>;
  }
}

export default TasksPage;
