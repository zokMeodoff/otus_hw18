import React, { Component } from 'react'
import './Form.css'
import Form from './Form'

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleUsernameChanged = (event) => (
        this.props.onUsernameChanged(event.target.value)
    );

    handlePasswordChanged = (event) => (
        this.props.onPasswordChanged(event.target.value)
    );

    render() {
        return(
            <Form className="form">
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="id_username">Имя пользователя</label>
                        <input
                            type="text"
                            name="username"
                            maxLength="150"
                            autoFocus
                            required
                            id="id_username"
                            value={this.props.user.username}
                            onChange={this.handleUsernameChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="id_password">Пароль</label>
                        <input
                            type="password"
                            name="password"
                            required
                            id="id_password"
                            value={this.props.user.password}
                            onChange={this.handlePasswordChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <input
                        type="submit"
                        value="Войти"
                        className="form__button"
                    />
                </div>
            </Form>
        )
    }
}

export default LoginForm;
