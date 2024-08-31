import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="login">
      <FormLogin></FormLogin>
      <p className="text-sm text-neutral-900 my-4">
        Dont have an Account? Register{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          here
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
