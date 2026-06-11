import React from "react";
import Login from "./components/authentication/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home";
import Register from "./components/authentication/Register";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsOfService from "./components/components_lite/TermsOfService";
import Jobs from "./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";
import Companies from "./components/components_lite/admincomponent/Companies";
import CompanyCreate from "./components/components_lite/admincomponent/CompanyCreate";
import CompanySetup from "./components/components_lite/admincomponent/CompanySetup";
import AdminJobs from "./components/components_lite/admincomponent/AdminJobs";
import AdminPostJob from "./components/components_lite/admincomponent/AdminPostJob";
import AdminJobSetup from "./components/components_lite/admincomponent/AdminJobSetup";
import Applicants from "./components/components_lite/admincomponent/Applicants";
import ProtectedRoute from "./components/components_lite/admincomponent/ProtectedRoute";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/home", element: <Home /> },
  { path: "/browse", element: <Browse /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/profile", element: <Profile /> },
  { path: "/description/:id", element: <Description /> },
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <AdminPostJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id",
    element: (
      <ProtectedRoute>
        <AdminJobSetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
