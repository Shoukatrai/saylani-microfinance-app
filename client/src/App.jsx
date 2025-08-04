import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages'
import AboutPage from './pages/client/about'
import ApplyNow from './pages/client/apply now'
import LoanCategories from './pages/client/loan categories'
import Navbar from './components/Navbar'
import SignupPage from './pages/auth/SignUp'
import LoginPage from './pages/auth/Login'

function App() {
  <Navbar />

  return (
    <>
      <Routes>
        <Route path='/create-account' element = {<SignupPage />}/>
        <Route path='/login' element = {<LoginPage />}/>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/categories' element={<LoanCategories />} />
        <Route path='/application' element={<ApplyNow />} />
      </Routes>
    </>
  )
}

export default App
