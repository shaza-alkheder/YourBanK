import "./TableDashboard.css"
import TitleDescription from "../../../../components/UI/TitleDescription/TitleDescription"
import BtnAdd from "../../UI/BtnDashboard/BtnAdd/BtnAdd"

const TableDashboard = ({title1 , title2 , children , addBtn}) => {
    return (
        <>
            <div className="O-A-headerDash">
                <TitleDescription 
                    className ="" 
                    titleParts={[    
                        {
                            text: title1,
                            className: "O-A-titleDashboard"
                        },
                        {
                            text: title2,
                            className: "DS_ColorLimeGreen O-A-titleDashboard"
                        }
                    ]}
                    description= ""
                />
               <BtnAdd Funct={addBtn} />
            </div>
            <div className="O-A-boxTable">
                {children}
            </div>
        </>
    )
}

export default TableDashboard