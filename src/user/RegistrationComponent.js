import React, { Component } from 'react'
import RegistrationForm from "./RegistrationForm";


class RegistrationComponent extends Component {
    render() {
        return (
            <div className="registration">
                <div className="container">
                    <h2 className="h h_center">Зарегистрируйте свой аккаунт</h2>
                    <div className="row row_justify_center">
                        <RegistrationForm
                            user={this.props.user}
                            onUsernameChanged={this.props.onUsernameChanged}
                            onFirstNameChanged={this.props.onFirstNameChanged}
                            onLastNameChanged={this.props.onLastNameChanged}
                            onEmailChanged={this.props.onEmailChanged}
                            onPasswordChanged={this.props.onPasswordChanged}
                            onPasswordConfirmedChanged={this.props.onPasswordConfirmedChanged}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationComponent;