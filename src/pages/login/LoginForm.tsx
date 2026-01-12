import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const {
    showHidePassword,
    setShowHidePassword,
    email,
    emailStatus,
    password,
    passwordStatus,
    handlePasswordChange,
    handleEmailChange,
    handleSubmit,
    handleNameChange,
    name,
    nameStatus,
    confirmPassword,
    confirmPasswordStatus,
    handleConfirmPasswordChange,
    isLogin,
    setIsLogin,
  }: any = useContext(LoginContext);

  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <section className="flex flex-col gap-2">
      {/* heading */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-bold text-[#344767]">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <h2 className="text-sm text-[#7B809A]">
          {isLogin
            ? "Enter your email and password to Sign In"
            : "Enter your name, email and password to Sign Up"}
        </h2>
      </div>

      {/* name input */}
      {!isLogin && (
        <div className="mt-14.5 h-15">
          <label htmlFor="name">
            <input
              value={name}
              onChange={handleNameChange}
              name="name"
              id="name"
              type="text"
              autoComplete="on"
              placeholder="Name"
              className={`h-10.5 w-90.25 rounded-lg border-2 bg-white px-4 text-sm outline-none placeholder:text-[#7B809A] ${
                nameStatus.status === "error"
                  ? "border-red-500"
                  : nameStatus.status === "success"
                    ? "border-green-500"
                    : "border-[#C7CCD0]"
              }`}
            />
          </label>

          {nameStatus.status !== "idle" && (
            <p
              className={`text-sm ${
                nameStatus.status === "error"
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {nameStatus.message}
            </p>
          )}
        </div>
      )}

      {/* email input */}
      <div className={`${!isLogin ? "mt-0" : "mt-14.5"} h-15`}>
        <label htmlFor="email">
          <input
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Email"
            className={`h-10.5 w-90.25 rounded-lg border-2 bg-white px-4 text-sm outline-none placeholder:text-[#7B809A] ${
              emailStatus.status === "error"
                ? "border-red-500"
                : emailStatus.status === "success"
                  ? "border-green-500"
                  : "border-[#C7CCD0]"
            }`}
          />
        </label>

        {emailStatus.status !== "idle" && (
          <p
            className={`text-sm ${
              emailStatus.status === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {emailStatus.message}
          </p>
        )}
      </div>

      {/* password input */}
      <div className="relative h-15">
        <div>
          <label htmlFor="password">
            <input
              value={password}
              onChange={handlePasswordChange}
              placeholder={isLogin ? "Current password" : "Enter password"}
              className={`${passwordStatus.status === "error" ? "border-red-500" : passwordStatus.status === "weak" ? "border-amber-700" : passwordStatus.status === "medium" ? "border-orange-500" : passwordStatus.status === "strong" ? "border-green-500" : "border-[#C7CCD0]"} h-10.5 w-90.25 rounded-lg border-2 bg-white pr-10 pl-4 text-sm outline-none placeholder:text-[#7B809A]`}
              type={showHidePassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
            />
          </label>

          {password?.trim().length > 0 && (
            <div className="absolute top-3 right-3">
              {showHidePassword ? (
                <FaEye
                  color="#7B809A"
                  className="cursor-pointer"
                  size={20}
                  onClick={() => setShowHidePassword(false)}
                />
              ) : (
                <FaEyeSlash
                  color="#7B809A"
                  className="cursor-pointer"
                  size={20}
                  onClick={() => setShowHidePassword(true)}
                />
              )}
            </div>
          )}
        </div>

        {passwordStatus.status !== "idle" && (
          <p
            className={`text-sm ${
              passwordStatus.status === "error"
                ? "text-red-500"
                : passwordStatus.status === "weak"
                  ? "text-amber-700"
                  : passwordStatus.status === "medium"
                    ? "text-orange-500"
                    : passwordStatus.status === "strong"
                      ? "text-green-600"
                      : "text-black"
            }`}
          >
            {passwordStatus.message}
          </p>
        )}
      </div>

      {/* confirm password input */}
      {!isLogin && (
        <div className="relative h-15">
          <div>
            <label htmlFor="confirmPassword">
              <input
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm password"
                className={`${confirmPasswordStatus.status === "error" ? "border-red-500" : confirmPasswordStatus.status === "success" ? "border-green-500" : "border-[#C7CCD0]"} h-10.5 w-90.25 rounded-lg border-2 bg-white pr-10 pl-4 text-sm outline-none placeholder:text-[#7B809A]`}
                type={showHidePassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="on"
              />
            </label>

            {confirmPassword?.trim().length > 0 && (
              <div className="absolute top-3 right-3">
                {showHidePassword ? (
                  <FaEye
                    color="#7B809A"
                    className="cursor-pointer"
                    size={20}
                    onClick={() => setShowHidePassword(false)}
                  />
                ) : (
                  <FaEyeSlash
                    color="#7B809A"
                    className="cursor-pointer"
                    size={20}
                    onClick={() => setShowHidePassword(true)}
                  />
                )}
              </div>
            )}
          </div>

          {confirmPasswordStatus.status !== "idle" && (
            <p
              className={`text-sm ${
                confirmPasswordStatus.status === "error"
                  ? "text-red-500"
                  : confirmPasswordStatus.status === "success"
                    ? "text-green-600"
                    : "text-black"
              }`}
            >
              {confirmPasswordStatus.message}
            </p>
          )}
        </div>
      )}

      {/* remember me button */}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setToggleSwitch(!toggleSwitch)}
          className={`relative inline-flex h-4 w-9 cursor-pointer items-center rounded-full transition-colors duration-300 ${toggleSwitch ? "bg-[#DA1F63]" : "bg-gray-300"}`}
        >
          <span
            className={`absolute h-5 w-5 rounded-full border border-gray-400 bg-white shadow-xl/70 shadow-black transition-all duration-300 ${toggleSwitch ? "translate-x-5" : "translate-x-0"} -top-0.5`}
          />
        </button>
        <p className="text-sm text-[#7B809A]">Remember me</p>
      </div>

      {/* sign in button */}

      <button
        onClick={handleSubmit}
        className="mt-11 h-10 w-full cursor-pointer rounded-lg bg-linear-to-b from-[#E93B77] to-[#DA1F63] p-2 text-xs font-bold text-white"
      >
        {isLogin ? "SIGN IN" : "SIGN UP"}
      </button>

      {/* sign up button */}

      <div className="mx-auto mt-8 flex items-center gap-2 text-sm text-[#7B809A]">
        <p>
          {isLogin ? "Don't" : "Already"} have an account?{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer font-bold text-[#DA1F63]"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
