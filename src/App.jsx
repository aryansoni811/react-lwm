import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(8);
  function handleClick() {
    setNum(num + 1);
  }
  return (
    <>
      <div className=" bg-slate-800 text-blue-300 h-screen w-full font-sans p-4">
        <div>the number is {num}</div>
        <button
          className="p-3 m-2 text-white border border-black bg-green-400"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default App;
