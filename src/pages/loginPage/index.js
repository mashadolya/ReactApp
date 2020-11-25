import React, { useState } from "react";
import BlueButton from "../../components/blueButton";
import Input from "../../components/profile/components/editProfileModal/components/input";
import './index.css';
import TwitterLogo from "../../assets/images/svg/twitter.svg";
import ErrorHeader from "./components/errorHeader";

const LoginPage = (props) => {

    const { username, password, handleLogin, isShowErrorHeader } = props;

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const [isErrorHeaderPresents, setIsErrorHeaderPresents] = useState(false);

    const [isDesabled, setIsDesabled] = useState(false);

    const handleInputChange = (e) => {
        var value = e.target.value;
        const propName = e.target.name;
        var currentLoginData = { ...loginData };
        currentLoginData[propName] = value;
        setLoginData(currentLoginData);
        checkIsDesabled(currentLoginData);
    }


    const checkIsDesabled = (loginData) => {
        if ((loginData.password) && (loginData.username)) {
            setIsDesabled(true);
        }
        if (!(loginData.password) && !(loginData.username)) {
            setIsDesabled(false);
        }
    }


    const checkCredentials = () => {
        var inputUsername = loginData.username.toLowerCase();

        if ((inputUsername === username.toLowerCase()) && (loginData.password === password)) {
            return true;
        }
        else {
            return false;
        }
    }

    const isLogged = () => {
        let isCredentialsCorrect = checkCredentials();
        if (isCredentialsCorrect) {
            handleLogin(isCredentialsCorrect);
        } else {
            setIsErrorHeaderPresents(true);
        }
    }

    return (
        <div className="login-form-container">

            <div className="twitter-icon-container">
                <img src={TwitterLogo} alt="twiter-logo" />
            </div>

            <h1>Log in to Twitter</h1>


            {
                isErrorHeaderPresents ?
                    <ErrorHeader />
                    : null}

            <Input
                propName="username"
                title="Phone, email, or username"
                text={""}
                onChange={handleInputChange}
            />

            <Input
                propName="password"
                title="Password"
                text={""}
                onChange={handleInputChange}
            />

            <BlueButton
                btnText={"Log in"}
                onClick={isLogged}
                isDesabled={isDesabled}
            />

        </div>
    )
};


export default LoginPage;

