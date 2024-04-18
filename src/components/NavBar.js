import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, ANSWERS_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import '../style/Header.css'

const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
  
    return (
        <header>
        <section className='header_container'>
        
        <Nav className='navbar'>
                <NavLink  to={HOME_ROUTE}>На главную</NavLink>
                <NavLink  to={ANSWERS_ROUTE}>Список ответов</NavLink>
        </Nav>

        {user.isAuth ?
                    <>
                    Здравствуйте: {user.user.firstname}
                    <Nav className='navbar'>
                        
                        <NavLink onClick={() => logOut()} > Выйти</NavLink>  
                    </Nav></>
                    :
                    <Nav className='navbar'>
                        <NavLink to={LOGIN_ROUTE}>Войти </NavLink>
                        <NavLink to={REGISTRATION_ROUTE}> Зарегистрироваться</NavLink>
                    </Nav>
                }
        </section>
        <hr/>
        </header>    
    );
});

export default NavBar;