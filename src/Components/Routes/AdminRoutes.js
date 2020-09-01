import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Report Imports
import FuelTransactionReports from "../Reports/FuelTransActionReports";
import MaintenancePartExpensesReports from "../Reports/MaintenancePartExpenses";
import MaintenanceJobReports from "../Reports/MaintenanceJobReports";
import ProductTransactionReports from "../Reports/ProductTransactionReports";

// User Imports
import FleetManagers from "../UserTypes/FleetManagers";
import WorkshopManagers from "../UserTypes/WorkshopManagers";
import StoreManagers from "../UserTypes/StoreManagers";
import Technicians from "../UserTypes/Technicians";

import AdminDashboard from "../Administrator/AdminDashboard";
import WorkShops from "../Administrator/WorkShops";

const AdminRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Helmet>
          <title>Amana - Admin Dashboard</title>
        </Helmet>
        <AdminDashboard />
      </Route>
      <Route path="/fuel-transaction-reports">
        <Helmet>
          <title>Amana - Fuel Reports</title>
        </Helmet>
        <FuelTransactionReports />
      </Route>
      <Route path="/maintenance-part-expenses-reports">
        <Helmet>
          <title>Amana - Expenses Reports</title>
        </Helmet>
        <MaintenancePartExpensesReports />
      </Route>
      <Route path="/maintenance-job-reports">
        <Helmet>
          <title>Amana - Job Reports</title>
        </Helmet>
        <MaintenanceJobReports />
      </Route>
      <Route path="/product-transaction-reports">
        <Helmet>
          <title>Amana - Transaction Reports</title>
        </Helmet>
        <ProductTransactionReports />
      </Route>
      <Route path="/workshops">
        <Helmet>
          <title>Amana - WorkShops</title>
        </Helmet>
        <WorkShops />
      </Route>
      <Route path="/fleet-managers">
        <Helmet>
          <title>Amana - Fleet Managers</title>
        </Helmet>
        <FleetManagers />
      </Route>
      <Route path="/workshop-managers">
        <Helmet>
          <title>Amana - Workshop Managers</title>
        </Helmet>
        <WorkshopManagers />
      </Route>
      <Route path="/store-managers">
        <Helmet>
          <title>Amana - Store Managers</title>
        </Helmet>
        <StoreManagers />
      </Route>
      <Route path="/technicians">
        <Helmet>
          <title>Amana - Technicians</title>
        </Helmet>
        <Technicians />
      </Route>
    </div>
  );
};

export default AdminRoutes;
