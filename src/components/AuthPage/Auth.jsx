import React from "react";
import "./style.css"

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: true
    }
  }

  authHeader() {
    return (
      <div className="block" style={{marginBottom: `10px`, marginTop: `0px`, width: `50%`}}>
        <h2 className="logo-green" style={{fontSize: `32px`, display: `inline`}}>easy</h2><h2 className="logo-black" style={{fontSize: `32px`, display: `inline`}}>task</h2>
        <span> — инструмент отслеживания задач</span>
      </div>
    )
  }

  render() {
    if (this.state.isAuth) {
      return (
        <div>
          <div className="sidebar">
            <this.authHeader/>
            <br/>
            <div className="block block-form">
              <form className="form auth">
                <h3 className="isActive">Авторизация</h3>
                <h3>/</h3>
                <h3 className="h3-button" onClick={() => this.setState({isAuth: false})}>Регистрация</h3>
                <input placeholder="Логин или Email" /> <br/>
                <input placeholder="Пароль" type="password"/> <br/>
                <button type="button" style={{alignSelf: `end`}}>Войти</button>
              </form>
            </div>

          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="sidebar">
            <this.authHeader/>
            <br/>
            <div className="block block-form">
              <form className="form auth">
                <h3 className="isActive">Регистрация</h3>
                <h3>/</h3>
                <h3 className="h3-button" onClick={() => this.setState({isAuth: true})}>Авторизация</h3>
                <input placeholder="Имя" /> <br/>
                <input placeholder="Фамилия" /> <br/>
                <input placeholder="Логин" /> <br/>
                <input placeholder="Email" /> <br/>
                <input placeholder="Пароль" type="password"/> <br/>
                <input placeholder="Повторите пароль" type="password"/> <br/>
                <button type="button">Зарегистрироваться</button>
              </form>
            </div>

          </div>
        </div>
      )
    }
  }
}

export default AuthForm;
