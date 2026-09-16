import Button from '../../../../UI/Button/Button'
import '../BtnDashboard.css'
import { TbEditFilled } from "react-icons/tb";

    const BtnUpdate = ({Funct}) => {
    return (
        <div  className='DS_DivBtnDash' title="Update" >
            <Button 
        className="DS_BtnDash"
        content = {<TbEditFilled  className='DS_IconBtnDash' />}
        onClick={Funct}
        /> 
</div>
    )
    }

    export default BtnUpdate
