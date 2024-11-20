import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./style.css";

import { CgProfile } from "react-icons/cg";


class MainPage extends React.Component {
  //  ------------------------------- Page Logic
  constructor(props) {
    super(props);
    this.state = {
      currentListId: 1,
    };
  }

  // ------------------------------- Page Markup

  headerElement() {
    return (
      <header className="block header-block">
        <div>
          <h2
            className="logo-green"
            style={{ fontSize: `42px`, display: `inline` }}
          >
            easy
          </h2>
          <h2
            className="logo-black"
            style={{ fontSize: `42px`, display: `inline` }}
          >
            task
          </h2>
        </div>
        <div className="header-controls">
          <div className="header-buttons">
            <Link className="silent-link" to={"/tasks"}><h3 className="h3-button">Задачи</h3></Link>
            <Link className="silent-link" to={"/schedule"}><h3 className="h3-button">Расписание</h3></Link>
            <Link className="silent-link" to={"/timer"}><h3 className="h3-button">Тайм-трекер</h3></Link>
            <Link className="silent-link" to={"/calendar"}><h3 className="h3-button">Календарь</h3></Link>
          </div>
          <div className="header-profile">
            <Link className="silent-link" to={"/profile"}>
              <h3 className="h3-button">Иванов И.И.</h3>
            </Link>
              <CgProfile style={{  height: "1.3em", width: "1.3em"}}/>
          </div>

        </div>
      </header>
    );
  }

  pageContent() {
    return (
      <div style={{ marginLeft: "15px", marginRight: "15px" }}>
        {this.headerElement()}

        <Outlet/>
        
      </div>
    );
  }

  render() {
    return <div>{this.pageContent()}</div>;
  }
}

export default MainPage;
