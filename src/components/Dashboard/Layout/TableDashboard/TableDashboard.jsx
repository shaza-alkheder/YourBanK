import "./TableDashboard.css"
import TitleDescription from "../../../../components/UI/TitleDescription/TitleDescription"
import BtnAdd from "../../UI/BtnDashboard/BtnAdd/BtnAdd"
// import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
// import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"

const TableDashboard = ({title1 , title2 , children}) => {
    return (
        <>
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
            <BtnAdd />
            <div className="O-A-boxTable">
                {children}
            {/* <table>
                <thead>
                    <tr>
                        {column1? <th>{column1}</th> :""}
                        {column2? <th>{column2}</th> :""}
                        {column3? <th>{column3}</th> :""}
                        {column4? <th>{column4}</th> :""}
                        {column5? <th>{column5}</th> :""}
                        {column6? <th>{column6}</th> :""}
                        {column7? <th>{column7}</th> :""}
                        {column8? <th>{column8}</th> :""}
                        {column9? <th>{column9}</th> :""}
                        {column10? <th>{column10}</th> :""}
                        {column11? <th>{column11}</th> :""}
                        <th className="O-A-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>/assets/img/CareersPage/WorkBag.webp</td>
                        <td className="O-A-tdBtn"><BtnUpdate /> <BtnDelete /></td>
                    </tr>
                    <tr>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>/assets/img/CareersPage/WorkBag.webp</td>
                        <td className="O-A-tdBtn"><BtnUpdate /> <BtnDelete /></td>
                    </tr>
                    <tr>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>/assets/img/CareersPage/WorkBag.webp</td>
                        <td className="O-A-tdBtn"><BtnUpdate /> <BtnDelete /></td>
                    </tr>
                    <tr>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>world</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>Lorem ipsum dolor sit amet consectetur.</td>
                        <td>/assets/img/CareersPage/WorkBag.webp</td>
                        <td className="O-A-tdBtn"><BtnUpdate /> <BtnDelete /></td>
                    </tr>
                </tbody>
            </table> */}
            </div>
        </>
    )
}

export default TableDashboard