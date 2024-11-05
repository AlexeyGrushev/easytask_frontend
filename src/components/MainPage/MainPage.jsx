import React from "react";
import "./style.css";


class MainPage extends React.Component {
  //  ------------------------------- Page Logic
  constructor (props) {
    super(props);
    this.state = {
      isDebil: true
    }
  }

  // ------------------------------- Page Markup

  headerElement () {
    return(
    <header className="block">
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
    </header>
    )
  }

  sidebarElement () {
    return (
      <div className="block list-sidebar">
        <h1 className="block-header">Списки задач</h1>
      </div>
    )
  }

  mainElement () {
    return (
      <div className="block main-block">
        <h1 className="block-header">Название списка</h1>
      </div>
    );
  }

  pageContent() {
    return (
    <div style={{marginLeft: "15px", marginRight: "15px"}}>
      {this.headerElement()}

      <div className="content-block">
        {this.sidebarElement()}

        {this.mainElement()}
      </div>
    </div>
    );
  }

  render() {
    return (
    <div>
      {this.pageContent()}
    </div>
    )
  }
};

export default MainPage;