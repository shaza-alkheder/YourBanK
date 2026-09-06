import Sidebar from '../../components/Dashboard/Layout/Sidebar/Sidebar'
import TableDashboard from '../../components/Dashboard/Layout/TableDashboard/TableDashboard'
import ContaninerDashboard from '../../components/Dashboard/UI/ContaninerDashboard/ContaninerDashboard'
import './Dashboard.css'

const Dashboard  = () => {
  return (
    <>
      <Sidebar />
      <ContaninerDashboard >
        <TableDashboard 
          title1 = "our"
          title2 = "Feature"
        />
      </ContaninerDashboard>
    </>
  )
}

export default Dashboard
