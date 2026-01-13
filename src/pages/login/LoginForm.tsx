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
    <section className="flex w-full flex-col gap-2 rounded-xl bg-[#F0F2F5] p-4 xl:w-fit">
      {/* heading */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-dark-blue text-lg font-bold lg:text-xl">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <h2 className="text-grey text-center text-xs lg:text-sm">
          {isLogin
            ? "Enter your email and password to Sign In"
            : "Enter your name, email and password to Sign Up"}
        </h2>
      </div>

      {/* name input */}
      {!isLogin && (
        <div className="mx-auto h-12 lg:w-fit  w-full sm:mt-4 sm:w-80 lg:mt-10 lg:h-15 xl:mt-14.5">
          <label htmlFor="name">
            <input
              value={name}
              onChange={handleNameChange}
              name="name"
              id="name"
              type="text"
              autoComplete="on"
              placeholder="Name"
              className={`placeholder:text-grey h-8 w-full rounded-lg border-2 bg-white px-4 text-xs outline-none sm:w-80 lg:h-10.5 lg:text-sm xl:w-90.25 ${
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
              className={`text-xs lg:text-sm ${
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
      <div
        className={`${!isLogin ? "mt-0" : "mt-5 lg:mt-10 xl:mt-14.5"} lg:w-fit mx-auto h-12 w-full sm:w-80 lg:h-15`}
      >
        <label htmlFor="email">
          <input
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Email"
            className={`placeholder:text-grey h-8 w-full rounded-lg border-2 bg-white px-4 text-sm outline-none placeholder:text-xs lg:h-10.5 lg:placeholder:text-sm xl:w-90.25 ${
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
            className={`text-xs lg:text-sm ${
              emailStatus.status === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {emailStatus.message}
          </p>
        )}
      </div>

      {/* password input */}
      <div className="relative mx-auto h-14 w-full sm:h-12 sm:w-80 lg:h-15 lg:w-fit">
        <div>
          <label htmlFor="password">
            <input
              value={password}
              onChange={handlePasswordChange}
              placeholder={isLogin ? "Current password" : "Enter password"}
              className={`${passwordStatus.status === "error" ? "border-red-500" : passwordStatus.status === "weak" ? "border-amber-700" : passwordStatus.status === "medium" ? "border-orange-500" : passwordStatus.status === "strong" ? "border-green-500" : "border-[#C7CCD0]"} placeholder:text-grey h-8 w-full rounded-lg border-2 bg-white pr-10 pl-4 text-sm outline-none placeholder:text-xs lg:h-10.5 lg:placeholder:text-sm xl:w-90.25`}
              type={showHidePassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
            />
          </label>

          {password?.trim().length > 0 && (
            <div className="absolute top-2 right-2 lg:top-3 lg:right-3">
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
            className={`text-xs lg:text-sm ${
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
        <div className="relative mx-auto h-12 w-full lg:w-fit sm:w-80 lg:h-15">
          <div>
            <label htmlFor="confirmPassword">
              <input
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm password"
                className={`${confirmPasswordStatus.status === "error" ? "border-red-500" : confirmPasswordStatus.status === "success" ? "border-green-500" : "border-[#C7CCD0]"} placeholder:text-grey h-8 w-full rounded-lg border-2 bg-white pr-10 pl-4 text-xs outline-none lg:h-10.5 lg:text-sm xl:w-90.25`}
                type={showHidePassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="on"
              />
            </label>

            {confirmPassword?.trim().length > 0 && (
              <div className="absolute top-2 right-2 lg:top-3 lg:right-3">
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
              className={`text-xs lg:text-sm ${
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

      <div className="mt-2 flex items-center gap-2 sm:ml-5 lg:ml-0">
        <button
          onClick={() => setToggleSwitch(!toggleSwitch)}
          className={`relative inline-flex h-3 w-8 cursor-pointer items-center rounded-full transition-colors duration-300 lg:h-4 lg:w-9 ${toggleSwitch ? "bg-[#DA1F63]" : "bg-gray-300"}`}
        >
          <span
            className={`absolute h-4 w-4 rounded-full border border-gray-400 bg-white shadow-xl/70 shadow-black transition-all duration-300 lg:h-5 lg:w-5 ${toggleSwitch ? "translate-x-5" : "translate-x-0"} -top-0.5`}
          />
        </button>
        <p className="text-grey text-xs lg:text-sm">Remember me</p>
      </div>

      {/* sign in button */}

      <button
        onClick={handleSubmit}
        className="mt-4 h-10 w-full cursor-pointer rounded-lg bg-linear-to-b from-[#E93B77] to-[#DA1F63] p-2 text-xs font-bold text-white lg:mt-11"
      >
        {isLogin ? "SIGN IN" : "SIGN UP"}
      </button>

      {/* sign up button */}

      <div className="text-grey mx-auto mt-2 flex items-center gap-2 text-xs lg:mt-8 lg:text-sm">
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
