import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Courses from './courses/Courses';
import LoginComponent from './user/LoginComponent';
import RegistrationComponent from './user/RegistrationComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirmed: '',
            }
        };
    }

    handleUsernameChanged = (username) => {
        let user = this.state.user;
        user.username = username;
        this.setState({
            user: user
        });
    };

    handleFirstNameChanged = (firstName) => {
        let user = this.state.user;
        user.firstName = firstName;
        this.setState({
            user: user
        });
    };

    handleLastNameChanged = (lastName) => {
        let user = this.state.user;
        user.lastName = lastName;
        this.setState({
            user: user
        });
    };

    handleEmailChanged = (email) => {
        let user = this.state.user;
        user.email = email;
        this.setState({
            user: user
        });
    };

    handlePasswordChanged = (password) => {
        let user = this.state.user;
        user.password = password;
        this.setState({
            user: user
        });
    };

    handlePasswordConfirmedChanged = (passwordConfirmed) => {
        let user = this.state.user;
        user.passwordConfirmed = passwordConfirmed;
        this.setState({
            user: user
        });
    };

	render() {
        return (
            <React.Fragment>
			<body>
				<Header/>
				<main>
					<RegistrationComponent
						user={this.state.user}
						onUsernameChanged={this.handleUsernameChanged}
						onEmailChanged={this.handleEmailChanged}
						onFirstNameChanged={this.handleFirstNameChanged}
						onLastNameChanged={this.handleLastNameChanged}
						onPasswordChanged={this.handlePasswordChanged}
						onPasswordConfirmedChanged={this.handlePasswordConfirmedChanged}
					/>
				</main>
				<Footer/>
			</body>
            </React.Fragment>
        )
    }
};

export default App;


