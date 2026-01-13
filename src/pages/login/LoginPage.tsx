import login from "../../assets/login.png";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex h-dvh w-dvw">
      {/* Image section */}
      <div className="flex h-full w-full items-center justify-center lg:w-1/2">
        <img
          src={login}
          alt="login illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Login form section */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center lg:static lg:translate-0 w-70 sm:w-100 mx-auto lg:w-90 xl:w-1/2">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
