import { renderToReadableStream } from "react-dom/server";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="Enter your email" name="email"></InputForm>

      <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>

      <Button classname="bg-blue-600" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default FormLogin;
