import React, { useEffect } from 'react';
import '../../less/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Loader from './../Utils/Loader/Loader';
import UserList from './UserList/UserList';
import { getRoleList, getUniversityList, getUniversityPositions } from '../../actions/university';
import PositionList from './PositionList/PositionList';
import FacultyList from './FacultyList/FacultyList';
import SpecialityList from './SpecialityList/SpecialityList';
import SpecialityGroupList from './SpecialityGroupList/SpecialityGroupList';

const ControlPanel = (props) => {
    const dispatch = useDispatch();
    const roles = useSelector(state => state.user.roles);
    const userRole = roles.includes("ADMIN") ? "ADMIN" : roles.includes("MODER") ? "MODER" : "USER";
    useEffect(() => {
        dispatch(getUniversityPositions());
        dispatch(getRoleList());
        dispatch(getUniversityList());
    }, []);


    if (userRole === "USER") {
        return (
            <Redirect to="/" />
        );
    }
    return (
        <div className="main-wrapper">
            <div className="main control-panel">
                {/* <div className="control-panel__title">
                    Панель управления
                </div> */}

                <div className="control-panel__menu">
                    <NavLink to="/control-panel/users" className="control-panel__menu-item">Пользователи</NavLink>
                    <NavLink to="/control-panel/positions" className="control-panel__menu-item">Должности</NavLink>
                    <NavLink to="/control-panel/faculties" className="control-panel__menu-item">Факультеты</NavLink>
                    <NavLink to="/control-panel/specialities" className="control-panel__menu-item">Специальности</NavLink>
                    <NavLink to="/control-panel/speciality-groups" className="control-panel__menu-item">Группы</NavLink>
                </div>

                <div className="control-panel__field">
                    <Switch>
                        <Route path="/control-panel/loader" component={Loader}/>
                        <Route path="/control-panel/users" component={UserList}/>
                        <Route path="/control-panel/positions" component={PositionList}/>
                        <Route path="/control-panel/faculties" component={FacultyList}/>
                        <Route path="/control-panel/specialities" component={SpecialityList}/>
                        <Route path="/control-panel/speciality-groups" component={SpecialityGroupList}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;