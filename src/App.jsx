import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PropertyList from './pages/PropertyList'
import ErrorPage from './pages/ErrorPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/propertylist" element={<PropertyList/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
