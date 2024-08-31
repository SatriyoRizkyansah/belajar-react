import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister></FormRegister>
      <p className="text-sm text-neutral-900 my-4">
        Already have an account? Login{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          here
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
