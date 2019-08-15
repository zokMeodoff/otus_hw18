import React, { Component } from 'react'
import './Form.css'
import Form from './Form'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    }

    handleUsernameChanged = (event) => (
        this.props.onUsernameChanged(event.target.value)
    );

    handleFirstNameChanged = (event) => (
        this.props.onFirstNameChanged(event.target.value)
    );

    handleLastNameChanged = (event) => (
        this.props.onLastNameChanged(event.target.value)
    );

    handleEmailChanged = (event) => (
      this.props.onEmailChanged(event.target.value)
    );

    handlePasswordChanged = (event) => (
        this.props.onPasswordChanged(event.target.value)
    );

    handlePasswordConfirmedChanged = (event) => (
        this.props.onPasswordConfirmedChanged(event.target.value)
    );


    render() {
        return(
            <Form className="form">
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="id_username" className="form__label form__label_bold">Имя пользователя</label>
                        <input
                            type="text"
                            name="username"
                            maxLength="150"
                            autoFocus
                            required
                            value={this.props.user.username}
                            onChange={this.handleUsernameChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="first_name" className="form__label form__label_bold">Имя</label>
                        <input
                            type="text"
                            name="first_name"
                            maxLength="150"
                            id="id_first_name"
                            value={this.props.user.firstName}
                            onChange={this.handleFirstNameChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="last_name" className="form__label form__label_bold">Фамилия</label>
                        <input
                            type="text"
                            name="last_name"
                            maxLength="150"
                            id="id_last_name"
                            value={this.props.user.lastName}
                            onChange={this.handleLastNameChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="email" className="form__label form__label_bold">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            maxLength="150"
                            id="id_email"
                            value={this.props.user.email}
                            onChange={this.handleEmailChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="password1" className="form__label form__label_bold">Пароль</label>
                        <input
                            type="password"
                            name="password1"
                            maxLength="150"
                            required
                            id="id_password1"
                            value={this.props.user.password}
                            onChange={this.handlePasswordChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <div className="form__field">
                        <label htmlFor="password2" className="form__label form__label_bold">Подтверждение пароля</label>
                        <input
                            type="password"
                            name="password2"
                            maxLength="150"
                            required
                            id="id_password2"
                            value={this.props.user.passwordConfirmed}
                            onChange={this.handlePasswordConfirmedChanged}
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="row row_justify_center">
                    <input
                        type="submit"
                        value="Зарегистрироваться"
                        className="form__button"
                    />
                </div>
            </Form>
        )
    }
}

export default RegistrationForm;
