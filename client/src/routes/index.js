import CreateEmployee from "../pages/CreateEmployee"
import ListEmployee from "../pages/ListEmployee"
import UpdateEmployee from "../pages/UpdateEmployee"
import Login from "../pages/Login"
import ListTask from "../pages/ListTask"
import EmployeeInf from "../pages/Employee/EmployeeInf"

const routes = [
    {path: '/:account/employee',component:ListEmployee},
    {path: '/:account/createEmployee',component:CreateEmployee},
    {path: '/:account/updateEmployee/:id',component:UpdateEmployee},
    {path: '/:account/tasks',component:ListTask},
    {path: '/',component:Login},
    {path: '/infor',component:EmployeeInf},


]
export default routes