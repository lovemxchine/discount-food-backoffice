import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserList/UserListPage";
import StoresPage from "./pages/Stores/StoresPage";
import ResponsiveDrawer from './components/SideBar';
import UserListDetail from "./pages/UserList/UserListDetail";
import Approval from "./pages/UserList/Approval";
function App() {
  return (
    <Router>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/users" element={<UserListPage />} />
          <Route path="/users/detail" element={<UserListDetail />} />
          <Route path="/users/approval" element={<Approval />} />
          <Route path="/stores" element={<StoresPage />} />
        </Routes>
      </ResponsiveDrawer>
    </Router>


  );
}

export default App;
