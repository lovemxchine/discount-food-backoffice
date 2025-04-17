import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserList/UserListPage";
import StoresPage from "./pages/Stores/StoresPage";
import ResponsiveDrawer from './components/SideBar';
import UserListDetail from "./pages/UserList/UserListDetail";
import Approval from "./pages/UserList/Approval";
import StoresDetails from './pages/Stores/StoresDetails';
import ReportPage from "./pages/Report/ReportPage";
import ReportDetails from "./pages/Report/ReportDetails";
function App() {
  return (
    <Router>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/users" element={<UserListPage />} />
          <Route path="/users/detail" element={<UserListDetail />} />
          <Route path="/users/approval" element={<Approval />} />
          <Route path="/users/stores_details" element={<StoresDetails />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/reports/details" element={<ReportDetails />} />
        </Routes>
      </ResponsiveDrawer>
    </Router>


  );
}

export default App;
