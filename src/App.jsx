import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './Pages/Events'
import Home from './Pages/Home'
import MyCampus from './Pages/MyCampus'
import ImageType from './Admin/ImageType'
import EventType from './Admin/EventType'
import Department from './Admin/Department'
import FinalImagePage from './Pages/FinalImagePage'

function App() {

  return (
    <div >
          <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/mycampus' element={<MyCampus/>}/>
      </Routes>
    </div>
\    </div>

  )
}

export default App
