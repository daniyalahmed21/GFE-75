import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const divRef = useRef();
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const [list, setList] = useState([]);

  const handleClick = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return prev;
        }
        return prev + 1;
      });
    }, 50);
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.width = `${timer}%`;
    }
  }, [timer]);

  return (
    <div className="p-10">
      <button className="bg-gray-200 p-3 px-5" onClick={handleClick}>
        Add
      </button>
      <div className="bg-gray-100 h-5 w-full mt-10">
        <div ref={divRef} className="bg-green-400 h-full transition-all"></div>
      </div>
    </div>
  );
};

export default App;
