import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../../less/style.scss";
import { useDispatch } from 'react-redux';
import { logout } from './../../reducers/userReducer';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logout());
    }

    const user = useSelector(state => state.user.currentUser);
    console.log(user);

    return (
        <div className="navbar-wrapper">
            <div className="flex-container flex-container__vertical-center navbar">
                <div className="flex-container__to-left">
                    <NavLink to="/" className="navbar__logo">Блог бирского филиала БашГУ</NavLink>
                </div>
                <div className="flex-container__to-right">
                    {isAuth && <>
                        <NavLink to="/profile" className="navbar__user-menu">
                            <div className="navbar__avatar">
                                <img src={user.avatarUrl} alt="" srcSet=""/>
                            </div>
                            <div className="navbar__user-menu__name">
                                профиль
                            </div>
                            <div className="navbar__dropdown">
                                <a href="#">Профиль</a>
                                <a href="#">Админка</a>
                                <a href="#">Выход</a>
                            </div>
                        </NavLink>
                        <div onClick={() => logoutHandler()} className="navbar__registration">выход</div>
                    </>}
                    {!isAuth && <>
                        <NavLink to="/login" className="navbar__registration">войти</NavLink>
                        <NavLink to="/registration" className="navbar__login">регистрация</NavLink>
                    </>}
                </div>


            </div>
        </div>
    )
}

export default Navbar;