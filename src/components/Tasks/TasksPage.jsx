import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/style.css"

// import {tasksElement} from "./components/taskComponent";
import createTaskElement from "./components/createTaskElementHot";
import listComponent from "./components/listComponent";
import { loadLists, loadTasks } from "./loader";

const lists = loadLists()
const tasks = loadTasks()

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
            {listComponent(lists)}
          </ul>
        </div>
      </div>
    );
  }

  mainElement() {
    return (
      <div className="block main-block">
        <h1 className="block-header">Название списка</h1>
        <div className="list-block">
          {/* {tasksElement(tasks)} */}
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

          <Outlet/>

          {/* {this.mainElement()} */}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.pageContent()}</div>;
  }
}

export default TasksPage;
