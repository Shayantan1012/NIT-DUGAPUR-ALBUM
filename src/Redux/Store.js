import { configureStore } from '@reduxjs/toolkit'
import CampusReducers from '../Redux/Slices/CampusSlice'
import DeaprtmentReducers from'../Redux/Slices/DepertmentSlice'
import EventReducers from '../Redux/Slices/EventSlice'
import AuthReducers from '../Redux/Slices/AdminSlice'
export const store = configureStore({
  reducer: {
    campus:CampusReducers,
    department:DeaprtmentReducers,
    event:EventReducers,
    auth:AuthReducers
  },
devTools:true,
}
)
export default {store};