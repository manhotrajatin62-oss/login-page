import { Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <LoginContextProvider>
        <header></header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
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
