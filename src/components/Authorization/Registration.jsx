import React, { useState } from "react";
import Input from '../Utils/Input/Input';
import "../../less/style.scss";
import { registration } from './../../actions/user';
import { useHistory } from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const history = useHistory();

    function RegistrationHandler() {
        registration(email, password);
        history.push("/");
    }

    return (
        <div className="container__fill-space__center-center">
            <div className="container__form form-authorization">
                <div className="form-authorization__header">Регистрация</div>
                <Input type="email" placeholder="email" className="form-authorization__input" value={email} setValue={setEmail}/>
                <Input type="password" placeholder="пароль" className="form-authorization__input" value={password} setValue={setPassword}/>
                <Input type="password" placeholder="пароль ещё раз" className="form-authorization__input" value={passwordAgain} setValue={setPasswordAgain}/>
                <div className="form-authorization__button-wrapper">
                    <button className="form-authorization__button" onClick={() => {password === passwordAgain ? RegistrationHandler() : alert("пароли не совпадают")}}>зарегестрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
