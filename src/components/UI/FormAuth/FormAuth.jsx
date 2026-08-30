import Button from "../Button/Button"
import Input from "../Input/Input"
import "./FormAuth.css"

const FormAuth = ({firstName , inputInfoFN , lastName , inputInfoLN, email , inputInfoEm , password, inputInfoPass , forgetPassword , btn1 , btn2}) => {
    return (
        <div className="O-A-containerForm">
            <form>
                <div className="O-A-boxFormInputs">
                    {firstName? <Input input={inputInfoFN} /> :""}
                    {lastName? <Input input={inputInfoLN} /> :""}
                    {email? <Input input={inputInfoEm} /> :""}
                    {password? <Input input={inputInfoPass} /> :""}
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
                        // onClick={() => setFilter("OnlineBanking")}
                    />
                    <Button 
                        className="O-A-styleButtonForm"
                        content = {btn2}
                        // onClick={() => setFilter("OnlineBanking")}
                    />
                </div>
                <div className="O-A-orContinueWith">
                    <p className="O-A-textContinue">Or Continue with</p>
                    <div className="O-A-lineMidlleText"></div>
                </div>
            </form>
            
        </div>
    )
}

export default FormAuth