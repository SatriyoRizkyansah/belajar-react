import { renderToReadableStream } from "react-dom/server";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="username" type="text" placeholder="John Doe" name="username" ref={usernameRef}></InputForm>

      <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>

      <Button classname="bg-blue-600" type="submit">
        Log in
      </Button>

      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};
export default FormLogin;
