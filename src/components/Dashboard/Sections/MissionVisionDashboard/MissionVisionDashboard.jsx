import { useEffect, useState } from "react";
import MissionVisionData from "../../../../data/MissionVisionData.json";

import TableDashboard from "../../Layout/TableDashboard/TableDashboard";
import BtnDelete from "../../UI/BtnDashboard/BtnDelete/BtnDelete";
import BtnUpdate from "../../UI/BtnDashboard/BtnUpdate/BtnUpdate";

const MissionVisionDashboard = () => {
  const [missionVision, setMissionVision] = useState(() => {
    const storedData = localStorage.getItem("MissionVisionData");

    if (storedData) {
      return JSON.parse(storedData);
    }

    localStorage.setItem(
      "MissionVisionData",
      JSON.stringify(MissionVisionData)
    );

    return MissionVisionData;
  });

  useEffect(() => {
    localStorage.setItem(
      "MissionVisionData",
      JSON.stringify(missionVision)
    );
  }, [missionVision]);

  const deleteMissionVision = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    setMissionVision((currentData) =>
      currentData.filter((item) => item.id !== id)
    );
  };

  return (
    <TableDashboard title1="Mission & " title2="Vision">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Background Image</th>
            <th className="O-A-action">Action</th>
          </tr>
        </thead>

        <tbody>
          {missionVision.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.image}</td>
              <td>{item.img}</td>

              <td className="O-A-tdBtn">
                <div className="O-A-flex">
                  <BtnUpdate
                    Funct={() => console.log("Update:", item.id)}
                  />
                  <BtnDelete
                    Funct={() => deleteMissionVision(item.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableDashboard>
  );
};

export default MissionVisionDashboard;