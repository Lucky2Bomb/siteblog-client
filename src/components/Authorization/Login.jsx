import React, { useState } from "react";
import Input from '../Utils/Input/Input';
import "../../less/style.scss";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    function dispatchButtonHandler() {
        dispatch(login(email, password));
        history.push("/");
    }

    return (
        <div className="container__fill-space__center-center">
            <div className="container__form form-authorization">
                <div className="form-authorization__header">Вход</div>
                <Input type="email" placeholder="email" className="form-authorization__input" value={email} setValue={setEmail} />
                <Input type="password" placeholder="пароль" className="form-authorization__input" value={password} setValue={setPassword} />
                <div className="form-authorization__button-wrapper">
                    <button className="form-authorization__button" onClick={() => dispatchButtonHandler()}>войти</button>
            </div>
        </div>
        </div >
    );
}

export default Login;
