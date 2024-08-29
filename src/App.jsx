import React from "react";
import { renderToReadableStream } from "react-dom/server";

const Button = (props) => {
  const { children = "...", variant = "black" } = props;
  return (
    <button type="button" className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
      {props.children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-200 min-h-screen items-center text-white">
      div
      <div>Hello World</div>
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Logout</Button>
      <Button>Logout</Button>
    </div>
  );
}

export default App;
