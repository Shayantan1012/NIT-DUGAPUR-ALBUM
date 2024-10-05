import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './Pages/Events/Events'
import Home from './Pages/Home'
import MyCampus from './Pages/Campus/MyCampus'
import Departments from './Pages/Departments/Deaprtment'
import FinalImagePageLogic from './Pages/FinalImagePage/FinalImagePageLogic'
import OnlyImage from './Pages/FinalImagePage/OnlyImage'
import LoginLogic from './Admin/LoginLogic'
import ImageUpload from './Admin/ImageUpload'
import AboutUs from './Pages/About'
function App() {

  return (
    <div >
          <div>
      <Routes>
      <Route path='/nitdgp/admin/' element={<LoginLogic/>}/>
    <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/mycampus' element={<MyCampus/>}/>
      <Route path='/departments' element={<Departments/>}/>
      <Route path='/finalImage' element={<FinalImagePageLogic/>}/>
      <Route path='/onlyImage' element={<OnlyImage/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      ////////////////

      <Route path='/admin/imageUpload' element={<ImageUpload/>}/>

    </Routes>


    </div>
    </div>

  )
}

export default App
