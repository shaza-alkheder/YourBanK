import '../BtnDashboard.css'
import Button from '../../../../UI/Button/Button'
import { IoMdAddCircle } from "react-icons/io";

const BtnAdd = ({Funct}) => {
    return (
        <div className='DS_DivBtnDash' title="Add">
            <Button 
                className="DS_BtnDash  "
                content = {<div className="DS_BtnContent">
                                <span>Add</span>
                                <IoMdAddCircle className='DS_IconBtnDash' />
                            </div>}
                onClick={Funct}
                /> 
        </div>
    )
    }

export default BtnAdd
