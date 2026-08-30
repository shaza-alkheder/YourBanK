import FormAuth from "../../UI/FormAuth/FormAuth"
import TitleDescription from "../../UI/TitleDescription/TitleDescription"
import "./LoginSection.css"

const LoginSection = () => {
    return (
        <div className="O-A-continerLogIn">
            <TitleDescription 
                className ="O-A-titleLogin" 
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
            <FormAuth 
                email = "Enter your Email"
                inputInfoEm = {{
                    typeInput : "email",
                    placeholderInput : "Enter your Email"
                }}
                password = "Enter your Password"
                inputInfoPass ={{
                    typeInput : "password",
                    placeholderInput : "Enter your Password"
                }}
                forgetPassword = "Forgot Password?"
                btn1 = "Login"
                btn2 = "Sign Up"
            />
        </div>
    )
}

export default LoginSection