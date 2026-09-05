
import { MdDelete } from "react-icons/md";
import '../BtnDashboard.css'
import Button from '../../../../UI/Button/Button';

    const BtnDelete = ({Funct}) => {
    return (
        <div  className='DS_DivBtnDash' title="Delete">
            <Button 
                className="DS_BtnDash"
                content = {<MdDelete  className='DS_IconBtnDash' />}
                onClick={Funct}
                /> 
        </div>
    )
    }

export default BtnDelete
