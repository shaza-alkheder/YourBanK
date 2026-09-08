import "./TableDashboard.css"
import TitleDescription from "../../../../components/UI/TitleDescription/TitleDescription"
import BtnAdd from "../../UI/BtnDashboard/BtnAdd/BtnAdd"
// import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate"
// import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete"

const TableDashboard = ({title1 , title2 , children}) => {
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
                <BtnAdd />
            </div>
            <div className="O-A-boxTable">
                {children}
                {/* <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>imgurl</th>
                            <th>imgurl</th>
                            <th>imgurl</th>
                            <th>imgurl</th>
                            <th>imgurl</th>
                            <th>imgurl</th>
                            <th className="O-A-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>world</td>
                            <td>world</td>
                            <td>world</td>
                            <td>world</td>
                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum quia tempora?</td>
                            <td>Lorem ipsum dolor sit amet consectetur.</td>
                            <td>Lorem ipsum dolor sit amet consectetur.</td>
                            <td>/assets/img/CareersPage/WorkBag.webp</td>
                            <td className="O-A-tdBtn"><div className="O-A-flex"><BtnUpdate /> <BtnDelete /></div></td>
                        </tr>
                        <tr>
                            <td>world</td>
                            <td>world</td>
                            <td>world</td>
                            <td>world</td>
                            <td>Lorem ipsum dolor sit amet consectetur.</td>
                            <td>Lorem ipsum dolor sit amet consectetur.</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui odio a repellat dicta earum quos iste. Doloribus, accusamus perferendis.</td>
                            <td>/assets/img/CareersPage/WorkBag.webp</td>
                            <td className="O-A-tdBtn"><div className="O-A-flex"><BtnUpdate /> <BtnDelete /></div></td>
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
                            <td className="O-A-tdBtn"><div className="O-A-flex"><BtnUpdate /> <BtnDelete /></div></td>
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
                            <td className="O-A-tdBtn"><div className="O-A-flex"><BtnUpdate /> <BtnDelete /></div></td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </>
    )
}

export default TableDashboard