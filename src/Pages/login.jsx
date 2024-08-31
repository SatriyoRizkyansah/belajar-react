import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="login" type="login">
      <FormLogin></FormLogin>
    </AuthLayouts>
  );
};

export default LoginPage;
