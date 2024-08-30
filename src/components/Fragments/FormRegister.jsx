import { renderToReadableStream } from "react-dom/server";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="fullname" type="fullname" placeholder="Enter your name" name="fullname"></InputForm>

      <InputForm label="Email" type="email" placeholder="Enter your email" name="email"></InputForm>

      <InputForm label="Password" type="password" placeholder="Enter your password" name="password"></InputForm>

      <InputForm label="confirmPassword" type="confirmPassword" placeholder="Confirm Your Password" name="confirmPassword"></InputForm>

      <Button classname="bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
