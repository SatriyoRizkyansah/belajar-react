import { renderToReadableStream } from "react-dom/server";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="Enter your email" name="email"></InputForm>

      <InputForm label="Password" type="password" placeholder="****" name="password"></InputForm>

      <Button classname="bg-blue-600">Log in</Button>
    </form>
  );
};

export default FormLogin;
