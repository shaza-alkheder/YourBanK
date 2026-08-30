import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa"
import Button from "../Button/Button"
import Input from "../Input/Input"
import "./FormAuth.css"
import { IoEye } from "react-icons/io5"

const FormAuth = ({firstName , inputInfoFN , lastName , inputInfoLN, email , inputInfoEm , password, inputInfoPass , forgetPassword , btn1 , btn2}) => {
    return (
        <div className="O-A-containerForm">
            <form>
                <div className="O-A-boxFormInputs">
                    {firstName? <Input input={inputInfoFN} /> :""}
                    {lastName? <Input input={inputInfoLN} /> :""}
                    {email? <Input input={inputInfoEm} /> :""}
                    {password? <div className="O-A-boxPassInput"><Input input={inputInfoPass} /> <IoEye className="O-A-iconPass"/> </div> :""}
                    {/* {firstName? <input type="text" className="O-A-inputStyle" placeholder={firstName} /> :""}
                    {lastName? <input type="text" className="O-A-inputStyle" placeholder={lastName} /> :""}
                    {email? <input type="email" className="O-A-inputStyle" placeholder={email} /> :""}
                    {password? <input type="password" className="O-A-inputStyle" placeholder={password} /> :""} */}
                </div>
                {forgetPassword? <p className="O-A-forgetPassword">{forgetPassword}</p> :""}
                <div className="O-A-boxBtnForm">
                    <Button 
                        className="O-A-styleButtonForm"
                        content = {btn1}
                    />
                    <Button 
                        className="O-A-styleButtonForm"
                        content = {btn2}
                    />
                    <div className="O-A-orContinueWith">
                        <p className="O-A-textContinue">Or Continue with</p>
                        <div className="O-A-lineMidlleText"></div>
                    </div>
                    <div className="O-A-boxIconForm">
                        <div className="O-A-borderIconForm">
                            <div className="O-A-circleIconForm">
                                <FaGoogle />
                            </div>
                        </div>
                        <div className="O-A-borderIconForm">
                            <div className="O-A-circleIconForm">
                                <FaFacebook />
                            </div>
                        </div>
                        <div className="O-A-borderIconForm">
                            <div className="O-A-circleIconForm">
                                <FaApple />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default FormAuth