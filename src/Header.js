import React, { Component } from 'react'
import './Header.css'


class Header extends Component {
    render() {
        return (
            <header className="header page__header">
                <div className="container header__container">
                   	<a className="header__logo">OTUS</a>
					<a className="header__menu_item" id="courses_menu_item">Курсы</a>
					<a className="header__menu_item_left">Расписание занятий</a>
					<a className="header__menu_item_right">Вход</a>
					<a className="header__menu_item">Регистрация</a>
                </div>
            </header>
        );
    }
}

export default Header;
