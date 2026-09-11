import { useState } from "react"
import FormAuth from "../../UI/FormAuth/FormAuth"
import TitleDescription from "../../UI/TitleDescription/TitleDescription"
import "./LoginSignUpSection.css"

const LoginSignUpSection = ({login , signup , onclick1 , onclick2}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleFirstNameChange = (e) => setFirstName(e.target.value)
    const handleLastNameChange = (e) => setLastName(e.target.value)

    return (
        <>
            {login? 
                <TitleDescription 
                    className ="O-A-titleLoginSignUp" 
                    titleParts={[    
                        {
                            text: "",
                            className: ""
                        },
                        {
                            text: "Login",
                            className: "DS_ColorLimeGreen"
                        }
                    ]}
                    description= "Welcome back! Please log in to access your account."
                />
                :""
            }
            {signup?
                <TitleDescription 
                    className ="O-A-titleLoginSignUp" 
                    titleParts={[    
                        {
                            text: "",
                            className: ""
                        },
                        {
                            text: "Sign Up",
                            className: "DS_ColorLimeGreen"
                        }
                    ]}
                    description= "Join our community today! Create an account to unlock exclusive features and personalized experiences."
                />
                :""
            }
            {login? 
                <FormAuth 
                    email = "Enter your Email"
                    inputInfoEm = {{
                        typeInput : "email",
                        placeholderInput : "Enter your Email",
                        name : "email",
                        id : "emailInput",
                        value: email,
                        onChange: handleEmailChange
                    }}
                    password = "Enter your Password"
                    inputInfoPass ={{
                        classNameInput : "O-A-inputPassword",
                        typeInput : "password",
                        placeholderInput : "Enter your Password",
                        name : "password",
                        id : "passwordInput",
                        value: password,
                        onChange: handlePasswordChange
                    }}
                    forgetPassword = "Forgot Password?"
                    btn1 = "Login"
                    click1={onclick1}
                    btn2 = "Sign Up"
                />
            :""
            }
            {signup?
                <FormAuth 
                    firstName = "Enter firstName"
                    inputInfoFN = {{
                        typeInput : "text",
                        placeholderInput : "Enter First Name",
                        name : "firstName",
                        id : "firstNameInput",
                        value: firstName,
                        onChange: handleFirstNameChange
                    }}
                    lastName = "Enter lastName"
                    inputInfoLN = {{
                        typeInput : "text",
                        placeholderInput : "Enter Last Name",
                        name : "lastName",
                        id : "lastNameInput",
                        // value : "",
                        // onChange : onChangeInput
                        value: lastName,
                        onChange: handleLastNameChange
                    }}
                    email = "Enter your Email"
                    inputInfoEm = {{
                        typeInput : "email",
                        placeholderInput : "Enter your Email",
                        name : "email",
                        id : "emailInput",
                        value: email,
                        onChange: handleEmailChange
                    }}
                    password = "Enter your Password"
                    inputInfoPass ={{
                        classNameInput : "O-A-inputPassword",
                        typeInput : "password",
                        placeholderInput : "Enter your Password",
                        name : "password",
                        id : "passwordInput",
                        value: password,
                        onChange: handlePasswordChange
                    }}
                    forgetPassword = "Forgot Password?"
                    btn1 = "Sign Up"
                    click1={onclick1}
                    btn2 = "Login"
                    click2={onclick2}
                />
            :""
            }
        </>
    )
}

export default LoginSignUpSection