import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './Pages/Events/Events'
import Home from './Pages/Home'
import MyCampus from './Pages/Campus/MyCampus'
import ImageType from './Admin/ImageType'
import EventType from './Admin/EventType'
import Department from './Admin/Department'
import FinalImagePage from './Pages/FinalImagePage/FinalImagePage'
import Departments from './Pages/Departments/Deaprtment'

function App() {

  return (
    <div >
          <div>
      <Routes>
   { /*  <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/mycampus' element={<MyCampus/>}/>
      <Route path='/departments' element={<Departments/>}/>
     */ }
     <Route path='/finalImage' element={<FinalImagePage/>}/>
      </Routes>
    </div>
\    </div>

  )
}

export default App
