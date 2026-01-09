import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext: any = createContext({});

const LoginContextProvider = ({ children }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showHidePassword, setShowHidePassword] = useState(false);

  const [emailStatus, setEmailStatus] = useState({
    status: "idle",
    message: "",
    success: false,
  });

  const [passwordStatus, setPasswordStatus] = useState({
    status: "idle",
    message: "",
    success: false,
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const navigate = useNavigate()

  function handleEmailChange(e: any) {
    const emailRegex = /^[A-Za-z0-9.]+@[A-Za-z0-9-]+\.(com|gov\.in|in)$/;
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setEmailStatus({
        status: "error",
        message: "Email is required",
        success: false,
      });
      return;
    }

    if (!emailRegex.test(value)) {
      setEmailStatus({
        status: "error",
        message: "Email is incorrect",
        success: false,
      });
      return;
    }

    setEmailStatus({
      status: "success",
      message: "Email is good",
      success: true,
    });
    return;
  }

  function handlePasswordChange(e: any) {
    const password = e.target.value;
    setPassword(password);

    if (!password.trim()) {
      setPasswordStatus({
        status: "error",
        message: "Password is required",
        success: false,
      });
      return;
    }

    if (password.length < 4) {
      setPasswordStatus({
        status: "error",
        message: "Password too short",
        success: false,
      });
      return;
    }

    if (password.length >= 4 && password.length < 6) {
      setPasswordStatus({
        status: "weak",
        message: "Password is weak",
        success: true,
      });
      return;
    }

    if (password.length >= 6 && password.length < 8) {
      setPasswordStatus({
        status: "medium",
        message: "Password is medium",
        success: true,
      });
      return;
    }

    setPasswordStatus({
      status: "strong",
      message: "Password is strong",
      success: true,
    });

    return;
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFormSuccess(false);

    if (!email.trim() && !password.trim()) {
      setEmailStatus({
        status: "error",
        message: "Email is required",
        success: false,
      });

      setPasswordStatus({
        status: "error",
        message: "Password is required",
        success: false,
      });
      return;
    }

    const emailValid = emailStatus.success;
    const passwordValid = passwordStatus.success;

    if (!emailValid || !passwordValid) {
      return;
    }

    setFormSuccess(true);
    localStorage.setItem("user" , JSON.stringify({
        email,
        password
    }))
    navigate("/dashboard")
  }

  return (
    <LoginContext.Provider
      value={{
        showHidePassword,
        setShowHidePassword,
        email,
        setEmail,
        password,
        setPassword,
        formSuccess,
        setFormSuccess,
        emailStatus,
        setEmailStatus,
        handleEmailChange,
        passwordStatus,
        setPasswordStatus,
        handlePasswordChange,
        handleSubmit,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
