import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../../less/style.scss";
import { useDispatch } from 'react-redux';
import { logout } from './../../reducers/userReducer';
import NavbarMenu from './NavbarMenu';
import userIcon from "../../assets/svg/user.svg";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    const user = useSelector(state => state.user.currentUser);

    return (
        <div className="navbar-wrapper">
            <div className="flex-container flex-container__vertical-center navbar">
                <div className="flex-container__to-left">
                    <NavLink to="/" className="navbar__logo">Блог бирского филиала БашГУ</NavLink>
                </div>
                <div className="flex-container__to-right">
                    {isAuth && <>
                        <NavLink to="/about" className="navbar__about" >О нас</NavLink>
                        <NavbarMenu avatarUrl={user.avatarUrl === "-" || user.avatarUrl === "" ? userIcon : user.avatarUrl} />
                    </>}
                    {!isAuth && <>
                        <NavLink to="/about" className="navbar__about" >О нас</NavLink>
                        <NavLink to="/login" className="navbar__registration">войти</NavLink>
                        <NavLink to="/registration" className="navbar__login">регистрация</NavLink>
                    </>}
                </div>


            </div>
        </div>
    )
}

export default Navbar;