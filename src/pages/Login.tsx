import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    showHidePassword,
    setShowHidePassword,
    email,
    emailStatus,
    password,
    passwordStatus,
    handlePasswordChange,
    handleEmailChange,
    formSuccess,
    handleSubmit,
  }: any = useContext(LoginContext);

  return (
    <section className="flex flex-col gap-2">
      <h1>Login</h1>
      <div>
        <label htmlFor="email">
          <input
            value={email}
            onChange={handleEmailChange}
            className={`border p-2 outline-none ${
              emailStatus.status === "error"
                ? "border-red-500"
                : emailStatus.status === "success"
                  ? "border-green-500"
                  : "border-black"
            }`}
          />
        </label>

        {emailStatus.status !== "idle" && (
          <p
            className={`text-sm ${
              emailStatus.status === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {emailStatus.message}
          </p>
        )}
      </div>

      <div>
        <div>
          <label htmlFor="password">
            <input
              value={password}
              onChange={handlePasswordChange}
              className={`${passwordStatus.status === "error" ? "border-red-500" : passwordStatus.status === "weak" ? "border-amber-700" : passwordStatus.status === "medium" ? "border-orange-400" : passwordStatus.status === "strong" ? "border-green-500" : "border-black"} border outline-0`}
              type={showHidePassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
            />
          </label>

          {showHidePassword ? (
            <FaEye size={20} onClick={() => setShowHidePassword(false)} />
          ) : (
            <FaEyeSlash size={20} onClick={() => setShowHidePassword(true)} />
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
                    ? "text-orange-400"
                    : passwordStatus.status === "strong"
                      ? "text-green-500"
                      : "text-black"
            }`}
          >
            {passwordStatus.message}
          </p>
        )}
      </div>

      <button onClick={handleSubmit} className="w-fit border border-black p-2">
        Submit
      </button>

      {formSuccess && (
        <p className="font-semibold text-green-600">Login successfully</p>
      )}
    </section>
  );
};

export default Login;
