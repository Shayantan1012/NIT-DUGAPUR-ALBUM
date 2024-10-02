import { configureStore } from '@reduxjs/toolkit'
import CampusReducers from '../Redux/Slices/CampusSlice'
import DeaprtmentReducers from'../Redux/Slices/DepertmentSlice'
import EventReducers from '../Redux/Slices/EventSlice'
export const store = configureStore({
  reducer: {
    campus:CampusReducers,
    department:DeaprtmentReducers,
    event:EventReducers,

  },
devTools:true,
}
)
export default {store};