import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from './../../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const NavbarMenu = (props) => {
    const dispatch = useDispatch();
    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";

    function logoutHandler() {
        dispatch(logout());
    }

    return (
        <div className="navbar__user-menu">
            <div className="navbar__avatar">
                <img src={props.avatarUrl} alt="" srcSet="" />
            </div>
            <div className="navbar__user-menu__name"> профиль </div>
            <div className="navbar__dropdown">
                <NavLink className="navbar__dropdown-item" to="/profile">Профиль</NavLink>
                {userRole === "USER" ? <></> : <NavLink className="navbar__dropdown-item" to="/control-panel">Панель управления</NavLink>}
                {userRole === "USER" ? <></> : <NavLink className="navbar__dropdown-item" to="/new-post">Новый пост</NavLink>}
                <div className="navbar__dropdown-item" onClick={() => logoutHandler()}>Выход</div>
            </div>
        </div>
    )
}

export default NavbarMenu;