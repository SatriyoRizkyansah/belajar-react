import React from "react";
import { renderToReadableStream } from "react-dom/server";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center bg-blue-200 min-h-screen items-center text-white">
      <div>Hello World</div>
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Logout</Button>
      <Button>Logout</Button>
    </div>
  );
}

export default App;
