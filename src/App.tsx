import { Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  return (
    <>
      <LoginContextProvider>
        <header></header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute path={"/dashboard"}>
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
