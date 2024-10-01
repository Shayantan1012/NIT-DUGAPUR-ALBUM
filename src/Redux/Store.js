import { configureStore } from '@reduxjs/toolkit'
import CampusReducers from '../Redux/Slices/CampusSlice'
export const store = configureStore({
  reducer: {
    campus:CampusReducers,
  },
devTools:true,
}
)
export default {store};