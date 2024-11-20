import React from "react";
import "./style.css";

class AuthForm extends React.Component {
  //  ------------------------------- Page Logic
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
      login: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value)
  };

  // ------------------------------- Page Markup
  authHeader() {
    return (
      <div
        className="auth-block"
        style={{ marginBottom: `10px`, marginTop: `0px`, width: `50%` }}
      >
        <h2
          className="logo-green"
          style={{ fontSize: `32px`, display: `inline` }}
        >
          easy
        </h2>
        <h2
          className="logo-black"
          style={{ fontSize: `32px`, display: `inline` }}
        >
          task
        </h2>
        <span> — инструмент отслеживания задач</span>
      </div>
    );
  }

  pageContent(FormContent) {
    return (
      <div>
        <div className="sidebar">
          {this.authHeader()}
          <br />
          {FormContent}
        </div>

        <div className="block-bg">
        </div>
      </div>
    );
  }

  auth() {
    return (
      <div className="auth-block block-form">
        <form className="form auth">
          <h3 className="isActive">Авторизация</h3>
          <h3>/</h3>
          <h3
            className="h3-button"
            onClick={() => this.setState({ isAuth: false })}
          >
            Регистрация
          </h3>
          <input name="login" placeholder="Логин или Email" onChange={this.handleInputChange}/> <br />
          <input name="password" placeholder="Пароль" type="password" onChange={this.handleInputChange}/> <br />
          <button type="button" style={{ alignSelf: `end` }}>
            Войти
          </button>
        </form>
      </div>
    );
  }

  register() {
    return (
      <div className="auth-block block-form">
        <form className="form auth">
          <h3 className="isActive">Регистрация</h3>
          <h3>/</h3>
          <h3
            className="h3-button"
            onClick={() => this.setState({ isAuth: true })}
          >
            Авторизация
          </h3>
          <input name="firstName" placeholder="Имя" onChange={this.handleInputChange}/> <br />
          <input name="lastName" placeholder="Фамилия" onChange={this.handleInputChange}/> <br />
          <input name="login" placeholder="Логин" onChange={this.handleInputChange}/> <br />
          <input name="email" placeholder="Email" onChange={this.handleInputChange}/> <br />
          <input name="password" placeholder="Пароль" type="password" onChange={this.handleInputChange}/> <br />
          <input name="confirmPassword" placeholder="Повторите пароль" type="password" onChange={this.handleInputChange}/> <br />
          <button type="button">Зарегистрироваться</button>
        </form>
      </div>
    );
  }

  render() {
    const FormContent = this.state.isAuth ? this.auth() : this.register();

    return <div>{this.pageContent(FormContent)}</div>;
  }
}

export default AuthForm;
