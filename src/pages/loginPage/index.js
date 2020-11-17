import React, { useState } from "react";
import BlueButton from "../../components/blueButton";
import Input from "../../components/profile/components/editProfileModal/components/input";
import './index.css';
import TwitterLogo from "../../assets/images/svg/twitter.svg";

const LoginPage = (props) => {

    const { username, password, handleLogin } = props;

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        var value = e.target.value;
        const propName = e.target.name;
        var currentLoginData = { ...loginData };
        currentLoginData[propName] = value;
        setLoginData(currentLoginData);
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
        handleLogin(isCredentialsCorrect);
    }

    return (
        <div className="login-form-container">

            <div className="twitter-icon-container">
                <img src={TwitterLogo} />
            </div>

            <h1>Log in to Twitter</h1>

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
            />

        </div>
    )
};

export default LoginPage;

