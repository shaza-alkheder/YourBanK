import Sidebar from '../../components/Dashboard/Layout/Sidebar/Sidebar'
import ContaninerDashboard from '../../components/Dashboard/UI/ContaninerDashboard/ContaninerDashboard'
import './Dashboard.css'
import { Outlet } from "react-router-dom";

const Dashboard  = () => {
  return (
    <>
      <Sidebar />

      <ContaninerDashboard>
        <Outlet />
      </ContaninerDashboard>
    </>
  )
}

export default Dashboard
