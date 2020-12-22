import React, { useEffect } from 'react';
import "../../less/style.scss";
import { useSelector, useDispatch } from 'react-redux';
import { formatDD_MM_YYYY } from './../Utils/dateFormat';
import config from '../../config';
import userIcon from "../../assets/svg/user.svg";
import { useParams } from 'react-router-dom';
import { getSelectedUser } from './../../actions/user';
import Loader from './../Utils/Loader/Loader';
import ProfileInputItem from './ProfileInputItem';
import { getAllWaySpecialityGroup } from './../../actions/university';

const UserProfile = () => {
    let { email } = useParams();
    const loader = useSelector(state => state.app.loader);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSelectedUser(email));
    }, []);

    const user = useSelector(state => state.user.selectedUser);

    useEffect(() => {
        dispatch(getAllWaySpecialityGroup(user.specialityGroup));
    }, [user]);
    const date = new Date(user.dateOfBirth);
    const allPathUniversityToGroup = useSelector(state => state.university.universitySelectedUser);

    if (loader || Object.keys(user).length === 0) { //|| Object.keys(allPathUniversityToGroup).length === 0 
        return (
            <Loader />
        )
    }
    let roles = "";

    for (let i = 0; i < user.roles.length; i++) {
        roles += ` ${config[user.roles[i]]},`;
    }
    roles = roles.substr(0, roles.length - 1);

    const aun = typeof allPathUniversityToGroup.university === "undefined";
    const afn = typeof allPathUniversityToGroup.faculty === "undefined";
    const asn = typeof allPathUniversityToGroup.speciality === "undefined";
    const asgn = typeof allPathUniversityToGroup.specialityGroup === "undefined";

    const universityName = aun ? "" : allPathUniversityToGroup.university.name;
    const facultyName = afn ? "" : allPathUniversityToGroup.faculty.name;
    const specialityName = asn ? "" : allPathUniversityToGroup.speciality.name;
    const specialityGroupName = asgn ? "" : allPathUniversityToGroup.specialityGroup.name;


    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="profile__left">

                    <div className="profile__avatar">
                        <img src={user.avatarUrl === "" || user.avatarUrl === "-" ? userIcon : user.avatarUrl} alt="" srcSet="" />
                    </div>
                </div>

                <div className="profile__right">
                    <div className="profile__data">
                        <ProfileInputItem key={"lastname"} name="Отчество:" value={user.lastname} />
                        <ProfileInputItem key={"firstname"} name="Имя:" value={user.firstname} />
                        <ProfileInputItem key={"patronymic"} name="Фамилия:" value={user.patronymic} />
                        <ProfileInputItem key={"dateOfBirth"} name="Дата рождения:" value={formatDD_MM_YYYY(date.getFullYear(), date.getMonth(), date.getDate(), ".")} />
                        {(Object.keys(allPathUniversityToGroup).length !== 0) && <>
                            <ProfileInputItem key={"university"} name="Университет:" value={universityName} />
                            <ProfileInputItem key={"faculty"} name="Факультет:" value={facultyName} />
                            <ProfileInputItem key={"speciality"} name="Специальность:" value={specialityName} />
                            <ProfileInputItem key={"specialityGroup"} name="Группа:" value={specialityGroupName} />
                        </>}
                        <ProfileInputItem key={"role"} name="Роль:" value={roles} />
                        <ProfileInputItem key={"position"} name="Должность:" value={user.position}/>

                        {/* 
                        <div className="profile__input">
                            <span className="profile__name">Группа:</span>
                            <span className="profile__value">{user.specialityGroup}</span>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Роль:</span>
                            <span className="profile__value">{config[user.roles[0]]}</span>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Должность:</span>
                            <span className="profile__value">{user.position}</span>
                        </div> */}

                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserProfile;