import FormAuth from "../../UI/FormAuth/FormAuth"
import TitleDescription from "../../UI/TitleDescription/TitleDescription"
import "./LoginSignUpSection.css"

const LoginSignUpSection = ({login , signup}) => {
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
                        placeholderInput : "Enter your Email"
                    }}
                    password = "Enter your Password"
                    inputInfoPass ={{
                        classNameInput : "O-A-inputPassword",
                        typeInput : "password",
                        placeholderInput : "Enter your Password"
                    }}
                    forgetPassword = "Forgot Password?"
                    btn1 = "Login"
                    btn2 = "Sign Up"
                />
            :""
            }
            {signup?
                <FormAuth 
                    firstName = "Enter firstName"
                    inputInfoFN = {{
                        typeInput : "text",
                        placeholderInput : "Enter First Name"
                    }}
                    lastName = "Enter lastName"
                    inputInfoLN = {{
                        typeInput : "text",
                        placeholderInput : "Enter Last Name"
                    }}
                    email = "Enter your Email"
                    inputInfoEm = {{
                        typeInput : "email",
                        placeholderInput : "Enter your Email"
                    }}
                    password = "Enter your Password"
                    inputInfoPass ={{
                        classNameInput : "O-A-inputPassword",
                        typeInput : "password",
                        placeholderInput : "Enter your Password"
                    }}
                    forgetPassword = "Forgot Password?"
                    btn1 = "Sign Up"
                    btn2 = "Login"
                />
            :""
            }
        </>
    )
}

export default LoginSignUpSection