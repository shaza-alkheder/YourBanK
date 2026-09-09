import { IoMdEye } from "react-icons/io"
import Button from "../../../../UI/Button/Button"

const BtnView = ({Funct}) => {
  return (
        <div  className='DS_DivBtnDash' title="Update" >
            <Button 
        className="DS_BtnDash"
        content = {<IoMdEye  className='DS_IconBtnDash' />}
        onClick={Funct}
        /> 
</div>
  )
}

export default BtnView

