import { combineReducers } from "redux";
import AppReducer from './App/reducerApp'
import EmpDetails from './EmployeeDetails/empReduce'
import HeaderApi from './HeaderRedux/reducerHeader'
import HomeApi from './HomeRedux/reduceHome'
import EmpFullDetails from '../Redux/EmployeeFullDetails/empReducer'

const rootReducer = combineReducers({
    AppReducer,
    EmpDetails,
    HeaderApi,
    HomeApi,
    EmpFullDetails
  })
  export type rootState=ReturnType<typeof rootReducer>
  export default rootReducer