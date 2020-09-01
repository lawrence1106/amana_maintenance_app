import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../WorkshopManager/Dashboard";
import Technicians from "../WorkshopManager/Technicians";

const AdminRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/technicians">
        <Technicians />
      </Route>
    </div>
  );
};

export default AdminRoutes;
