import { DarkMode } from "../../context/DarkMode";
import { Children, useContext } from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center text-white ${isDarkMode ? "bg-slate-900" : "bg-slate-0"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
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
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
