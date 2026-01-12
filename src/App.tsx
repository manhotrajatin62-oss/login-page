import { Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <>
      <LoginContextProvider>
        <header></header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <footer></footer>
      </LoginContextProvider>
    </>
  );
};

export default App;
