import React, { useEffect, useState } from 'react';
import { formatL_F_PATRONYMIC } from './../../Utils/usernameFormat';
import { NavLink } from 'react-router-dom';
import config from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { setUniversityPosition } from '../../../actions/university';
import { setUserRole } from './../../../actions/university';
import { deleteUser } from '../../../actions/users';
const User = ({ user }) => {
    const dispatch = useDispatch();
    const universityPositions = useSelector(state => state.users.universityPositions);
    const currentUser = useSelector(state => state.user.currentUser);
    const roleList = useSelector(state => state.users.roleList);
    const [positionState, setPositionState] = useState(user.position[0]);
    const [userRoleState, setUserRoleState] = useState(user.roles[0]);
    // let roles = "";

    // for (let i = 0; i < user.roles.length; i++) {
    //     roles += ` ${config[user.roles[i]]},`;
    // }
    // roles = roles.substr(0, roles.length - 1);

    function setNewPosition(pos) {
        setPositionState(pos);
        dispatch(setUniversityPosition(pos, user.email));
    }

    function setNewRole(role) {
        setUserRoleState(role);
        dispatch(setUserRole(role, user.email));
    }

    function buttonHandlerDeleteUser() {
        dispatch(deleteUser(user._id));
    }

    if (currentUser.email === user.email) {
        return (
            <div className="user-item">
                <NavLink to={`/profile/${user.email}`} className="user-item__initials">
                    {user.lastname && user.firstname && user.patronymic && formatL_F_PATRONYMIC(user.lastname, user.firstname, user.patronymic)}
                </NavLink>

                <NavLink to={`/profile/${user.email}`} className="user-item__email">
                    {user.email}
                </NavLink>

                <div className="user-item__position" >
                    <select onChange={(e) => setNewPosition(e.target.value)} value={positionState}>
                        {universityPositions.map((up) => <option value={up.value} key={up.value}>{up.value}</option>)}
                    </select>
                </div>



                <div className="user-item__roles">
                    {user.roles[0]}
                </div>

                <div className="user-item__delete header">
                    Это вы
            </div>
            </div>
        );
    }
    return (
        <div className="user-item">
            <NavLink to={`/profile/${user.email}`} className="user-item__initials">
                {user.lastname && user.firstname && user.patronymic && formatL_F_PATRONYMIC(user.lastname, user.firstname, user.patronymic)}
            </NavLink>

            <NavLink to={`/profile/${user.email}`} className="user-item__email">
                {user.email}
            </NavLink>

            <div className="user-item__position" >
                <select onChange={(e) => setNewPosition(e.target.value)} value={positionState}>
                    {universityPositions.map((up) => <option value={up.value} key={up.value}>{up.value}</option>)}
                </select>
            </div>

            <div className="user-item__roles">
                <select onChange={(e) => setNewRole(e.target.value)} value={userRoleState}>
                    {roleList.map((r) => <option value={r.value} key={r.value}>{r.value}</option>)}
                </select>
            </div>

            <button className="user-item__delete" onClick={() => buttonHandlerDeleteUser()}>
                Удалить
            </button>

        </div>
    )
}

export default User;