import React, { useEffect } from 'react';
import "../../less/style.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { formatYYYY_MM_DD } from './../Utils/dateFormat';
import { getUniversityList, getFacultyList, getSpecialityList, getSpecialityGroupList } from '../../actions/university';
import config from '../../config';
import { editValueInProfile } from '../../actions/user';
import userIcon from "../../assets/svg/user.svg";

const MyProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);
    const date = new Date(user.dateOfBirth);
    const [lastname, setLastname] = useState(user.lastname);
    const [firstname, setFirstname] = useState(user.firstname);
    const [patronymic, setPatronymic] = useState(user.patronymic);
    const [dateOfBirth, setDateOfBirth] = useState(`${formatYYYY_MM_DD(date.getFullYear(), date.getMonth(), date.getDate())}`);
    const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

    const universityList = useSelector(state => state.university.universityList);
    const facultyList = useSelector(state => state.university.facultyList);
    const specialityList = useSelector(state => state.university.specialityList);
    const specialityGroupList = useSelector(state => state.university.specialityGroupList);

    const [university, setUniversity] = useState("");
    const [faculty, setFaculty] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [specialityGroup, setSpecialityGroup] = useState("");

    let roles = "";

    for (let i = 0; i < user.roles.length; i++) {
        roles += ` ${config[user.roles[i]]},`;
    }
    roles = roles.substr(0, roles.length - 1);

    useEffect(() => {
        dispatch(getUniversityList());
    }, []);

    useEffect(() => {
        dispatch(getFacultyList(university));
    }, [university]);

    useEffect(() => {
        dispatch(getSpecialityList(faculty));
    }, [faculty]);

    useEffect(() => {
        dispatch(getSpecialityGroupList(speciality));
    }, [speciality]);

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
                        <div className="profile__input">
                            <span className="profile__name">Фамилия:</span>
                            <input className="profile__value" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="" id="" />
                            <button className="profile__button" onClick={() => { editValueInProfile("lastname", lastname) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Имя:</span>
                            <input className="profile__value" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="" id="" />
                            <button className="profile__button" onClick={() => { editValueInProfile("firstname", firstname) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Отчество:</span>
                            <input className="profile__value" type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} name="" id="" />
                            <button className="profile__button" onClick={() => { editValueInProfile("patronymic", patronymic) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Дата рождения:</span>
                            <input className="profile__value" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} name="" id="" />
                            <button className="profile__button" onClick={() => { editValueInProfile("dateOfBirth", dateOfBirth) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Ссылка на аватар:</span>
                            <input className="profile__value" type="text" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} name="" id="" />
                            <button className="profile__button" onClick={() => { editValueInProfile("avatarUrl", avatarUrl) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Университет</span>
                            <select className="profile__value" value={university} onChange={(e) => setUniversity(e.target.value)}>
                                <option value="">-</option>
                                {universityList.map(u => <option value={u.name} key={u.name}>{u.name}</option>)}
                            </select>
                        </div>

                        <div className="profile__input" style={{ display: university ? "grid" : "none" }}>
                            <span className="profile__name">Факультет</span>
                            <select className="profile__value" value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                                <option value="">-</option>
                                {facultyList.map(f => <option value={f.name} key={f.name}>{f.name}</option>)}
                            </select>
                        </div>

                        <div className="profile__input" style={{ display: faculty ? "grid" : "none" }}>
                            <span className="profile__name">Специальность</span>
                            <select className="profile__value" value={speciality} onChange={(e) => setSpeciality(e.target.value)}>
                                <option value="">-</option>
                                {specialityList.map(s => <option value={s.name} key={s.name}>{s.name}</option>)}
                            </select>
                        </div>

                        <div className="profile__input" style={{ display: speciality ? "grid" : "none" }}>
                            <span className="profile__name">Группа</span>
                            <select className="profile__value" value={specialityGroup} onChange={(e) => setSpecialityGroup(e.target.value)}>
                                <option value="">-</option>
                                {specialityGroupList.map(sg => <option value={sg.name} key={sg.name}>{sg.name}</option>)}
                            </select>
                            <button className="profile__button" onClick={() => { editValueInProfile("specialityGroup", specialityGroup) }}>Изменить</button>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Группа:</span>
                            <span className="profile__value">{user.specialityGroup || "-"}</span>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Роль:</span>
                            <span className="profile__value">{roles}</span>
                        </div>

                        <div className="profile__input">
                            <span className="profile__name">Должность:</span>
                            <span className="profile__value">{user.position}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;