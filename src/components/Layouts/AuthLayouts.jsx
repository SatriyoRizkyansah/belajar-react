import { Children } from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center text-white">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        {children}
        <p className="text-sm text-neutral-900 my-4">
          {type === "login" ? "Dont have an Account? " : "Already have an account? "}

          {type === "login" ? (
            <Link to="/register" className="text-blue-600 font-medium hover:underline">
              Login
            </Link>
          ) : (
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Register
            </Link>
          )}

          {/* {type === "login" && (
            <Link to="/register" className="text-blue-600 font-medium hover:underline">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </Link>
          )} */}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
