import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages'
import AboutPage from './pages/client/about'
import ApplyNow from './pages/client/apply now'
import LoanCategories from './pages/client/loan categories'
import Navbar from './components/Navbar'
import SignupPage from './pages/auth/SignUp'
import LoginPage from './pages/auth/Login'
import { Bounce, ToastContainer } from 'react-toastify'
import PasswordChange from './pages/auth/PasswordChange'
import Profile from './pages/client/profile'
import Logout from './pages/client/logout'
import LoanRequestPage from './pages/client/Loan'

function App() {
  <Navbar />

  return (
    <>
      <Routes>
        <Route path='/create-account' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/categories' element={<LoanCategories />} />
        <Route path='/application' element={<ApplyNow />} />
        <Route path='/update-password' element={<PasswordChange />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<PasswordChange />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/loan' element={<LoanRequestPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
