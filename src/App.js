import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Auth/login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/reset-password";
import Dashboard from "./DashBoard/Dashboard";
import Room from "./RoomReservation/Room";
import Bookings from "./RoomReservation/Bookings";
import Payments from "./RoomReservation/Payments";
import MenuManagementPage from "./Restaurant/Menus";
import OrdersPage from "./Restaurant/Orders";
import OrderProcessingPage from "./Restaurant/OrderProcessingTracking";
import SupplierManagementPage from "./Department/Supplier";
import StockManagementPage from "./Department/Stock";
import DepartmentManagementPage from "./Department/Department";
import EmployeeManagementPage from "./Employee/Employee";
import AttendanceManagementPage from "./Employee/Attendance";
import PayrollPage from "./Employee/Payroll";
import LeaveTrackingPage from "./Employee/LeaveTracking";
import EventManagementPage from "./Events/Events";
import EventRequestManagementPage from "./Events/EventRequest";
import VehicleManagementPage from "./Transport/Vehicle";
import DriverManagementPage from "./Transport/Driver";
import TrackDelivery from "./Transport/TrackDelivery";
import TravelRequestsManagementPage from "./Transport/TravelRequests";
import AdditionalServiceRequestManagementPage from "./AdditionalService/AdditionalServiceRequest";
import AdditionalServiceManagementPage from "./AdditionalService/AdditionalService";
import EventLocationManagementPage from "./Events/EventLocations";

function App() {
  const storedAuthToken = localStorage.getItem("authToken");
  const storedUserType = localStorage.getItem("loggedInUserType");

  const isAdminAuthenticated = () => {
    return true;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* room reservation */}
        <Route
          path="/rooms"
          element={isAdminAuthenticated() ? <Room /> : <Navigate to="/" />}
        />
        <Route
          path="/bookings"
          element={isAdminAuthenticated() ? <Bookings /> : <Navigate to="/" />}
        />
        <Route
          path="/payments"
          element={isAdminAuthenticated() ? <Payments /> : <Navigate to="/" />}
        />

        {/* menu management */}
        <Route
          path="/menus"
          element={
            isAdminAuthenticated() ? (
              <MenuManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/orders"
          element={
            isAdminAuthenticated() ? <OrdersPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/orderTracking"
          element={
            isAdminAuthenticated() ? (
              <OrderProcessingPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* inventory management */}
        <Route
          path="/departments"
          element={
            isAdminAuthenticated() ? (
              <DepartmentManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/stocks"
          element={
            isAdminAuthenticated() ? (
              <StockManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/suppliers"
          element={
            isAdminAuthenticated() ? (
              <SupplierManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* employee management */}
        <Route
          path="/employee"
          element={
            isAdminAuthenticated() ? (
              <EmployeeManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/attendance" element={<AttendanceManagementPage />} />
        <Route
          path="/payroll"
          element={
            isAdminAuthenticated() ? <PayrollPage /> : <Navigate to="/" />
          }
        />
        <Route path="/leaveTracking" element={<LeaveTrackingPage />} />

        {/* events management */}
        <Route
          path="/events"
          element={
            isAdminAuthenticated() ? (
              <EventManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/event-requests"
          element={
            isAdminAuthenticated() ? (
              <EventRequestManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/event-locations"
          element={
            isAdminAuthenticated() ? (
              <EventLocationManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* transport management */}
        <Route
          path="/drivers"
          element={
            isAdminAuthenticated() ? (
              <DriverManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/vehicles"
          element={
            isAdminAuthenticated() ? (
              <VehicleManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/transports"
          element={
            isAdminAuthenticated() ? (
              <TravelRequestsManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/travel-tracking"
          element={
            isAdminAuthenticated() ? <TrackDelivery /> : <Navigate to="/" />
          }
        />

        {/* additional service management */}
        <Route
          path="/additional-services"
          element={
            isAdminAuthenticated() ? (
              <AdditionalServiceManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/additional-service-requests"
          element={
            isAdminAuthenticated() ? (
              <AdditionalServiceRequestManagementPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
