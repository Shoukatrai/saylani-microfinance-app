import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import AboutPage from "./pages/client/about";
import LoanCategories from "./pages/client/loan categories";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/auth/SignUp";
import LoginPage from "./pages/auth/Login";
import { Bounce, ToastContainer } from "react-toastify";
import PasswordChange from "./pages/auth/PasswordChange";
import Profile from "./pages/client/profile";
import Logout from "./pages/client/logout";
import LoanApplication from "./pages/client/Loan/LoanApplication";
import LaonCategory from "./pages/Admin/Loan Category";
import AdminDasboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/users";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import ClientRoutes from "./routes/ClientRoutes";
import UserLoanApplications from "./pages/client/UserLoanApplications";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  <Navbar />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/update-password" element={<PasswordChange />} />
          {/* AUTH ROUTES */}
          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<SignupPage />} />
          </Route>

          {/* CLIENT ROUTES  */}
          <Route element={<ClientRoutes />}>
            <Route path="/loan-apply-now" element={<LoanApplication />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/apply-now" element={<LoanCategories />} />
            <Route
              path="/loan-applications"
              element={<UserLoanApplications />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<PasswordChange />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          {/* ADMIN ROUTES  */}
          <Route element={<AdminRoutes />}>
            <Route path="/admin-dashboard" element={<AdminDasboard />} />
            <Route path="/admin-loans" element={<LaonCategory />} />
            <Route path="/admin-users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
  );
}

export default App;
