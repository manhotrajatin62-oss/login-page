import login from "../../assets/login.png";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex h-dvh w-dvw">
      {/* Image section */}
      <div className="flex h-full w-1/2 items-center justify-center">
        <img
          src={login}
          alt="login illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Login form section */}
      <div className="flex w-1/2 items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
