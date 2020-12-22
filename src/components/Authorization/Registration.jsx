import React, { useState } from "react";
import Input from '../Utils/Input/Input';
import "../../less/style.scss";
import { registration } from './../../actions/user';
import { useHistory } from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const history = useHistory();

    function RegistrationHandler() {
        if (lastname && firstname && password && passwordAgain && email) {
            if (password === passwordAgain) {
                registration(email, password, firstname, lastname, patronymic);
                history.push("/");
            } else {
                alert("пароли не совпадают")
            };
        }
    }

    return (
        <div className="container__fill-space__center-center">
            <div className="container__form form-authorization">
                <div className="form-authorization__header">Регистрация</div>
                <Input type="text" placeholder="фамилия" className="form-authorization__input" value={lastname} setValue={setLastname} />
                <Input type="text" placeholder="имя" className="form-authorization__input" value={firstname} setValue={setFirstname} />
                <Input type="text" placeholder="отчество (при наличии)" className="form-authorization__input" value={patronymic} setValue={setPatronymic} />
                <Input type="text" placeholder="логин" className="form-authorization__input" value={email} setValue={setEmail} />
                <Input type="password" placeholder="пароль" className="form-authorization__input" value={password} setValue={setPassword} />
                <Input type="password" placeholder="пароль ещё раз" className="form-authorization__input" value={passwordAgain} setValue={setPasswordAgain} />
                <div className="form-authorization__button-wrapper">
                    <button className="form-authorization__button" onClick={() => RegistrationHandler()}>зарегестрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
