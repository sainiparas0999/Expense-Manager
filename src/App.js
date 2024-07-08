import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Home from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import OpenRoute from "./Components/core/auth/OpenRoute";
import Signup from "./Pages/Signup";
import VerifyEmail from "./Pages/verifyEmail";
import Login from "./Pages/Login";
import ForgetPassword from "./Components/core/auth/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/core/auth/PrivateRoute";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import BillReminder from "./Components/core/Dashboard/BillReminder";
import TrackInvestment from "./Components/core/Dashboard/TrackInvestments.jsx";
import MoneyLendTracker from "./Components/core/Dashboard/MoneyLendTracker.jsx/index.jsx";
function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
        path="forgot-password"
        element={
          <OpenRoute>
            <ForgetPassword/>
          </OpenRoute>
        }
        />

        <Route
        path="login"
        element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
        }
        />

        <Route
        path="verify-email"
        element={
          <OpenRoute>
          <VerifyEmail />
        </OpenRoute>
        }
        />

<Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} /> 
      {/* <Route path="dashboard/Settings" element={<Settings />} /> */}
      <Route path="dashboard/BillReminder" element = {<BillReminder/>}/>
      <Route path="dashboard/Investments" element = {<TrackInvestment/>}/>
      <Route path="dashboard/MoneyLended" element=  {<MoneyLendTracker/>}/>

    </Route>

    </Routes>
   </div>
  );
}

export default App;
