import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserList/UserListPage";
import StoresPage from "./pages/Stores/StoresPage";
import ResponsiveDrawer from "./components/SideBar";
import StoresDetails from "./pages/Stores/StoresDetails";
import ReportPage from "./pages/Report/ReportPage";
import ReportDetails from "./pages/Report/ReportDetails";
import ActiveShops from "./pages/UserList/ActiveShops";
import ActiveApprove from "./pages/Approval/ActiveApproval";
import RegisApprove from "./pages/Approval/RegisApproval";
import RegisterShops from "./pages/UserList/RegistrationShops";
import UsersCustomer from "./pages/UserList/Users";
import LoginPage from "./pages/loginPage";
import SuspendedShops from "./pages/UserList/StoreSuspended";
import InactiveApprove from "./pages/Approval/InactiveAprroval";
function App() {
  return (
    // <LoginPage/>
    <Router>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/users/registrationshops" element={<RegisterShops />} />
          <Route path="/users/activeshops" element={<ActiveShops />} />
          <Route path="/users/systemusers" element={<UsersCustomer />} />
          <Route path="/users/suspendedshops" element={<SuspendedShops />} />
          <Route
            path="/users/approval/registrationshops/:id"
            element={<RegisApprove />}
          />
          <Route
            path="/users/approval/activeshops/:id"
            element={<ActiveApprove />}
          />
          <Route
            path="/users/approval/inactiveshops/:id"
            element={<InactiveApprove />}
          />
          <Route path="/users/stores_details/:id" element={<StoresDetails />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/reports/details" element={<ReportDetails />} />
        </Routes>
      </ResponsiveDrawer>
    </Router>
  );
}

export default App;
