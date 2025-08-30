import React, { useState } from "react";

const App = () => {
  const [bars, setBars] = useState([]);

  const handleClick = () => {
    const id = Date.now(); 
    setBars((prev) => [...prev, { id, progress: 0 }]);

    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((bar) =>
          bar.id === id
            ? {
                ...bar,
                progress: bar.progress < 100 ? bar.progress + 1 : 100,
              }
            : bar
        )
      );
    }, 50);

    setTimeout(() => clearInterval(interval), 5000);
  };

  return (
    <div className="p-10 space-y-5">
      <button className="bg-gray-200 p-3 px-5" onClick={handleClick}>
        Add
      </button>

      {bars.map((bar) => (
        <div
          key={bar.id}
          className="bg-gray-100 h-5 w-full rounded overflow-hidden"
        >
          <div
            className="bg-green-400 h-full transition-all duration-50"
            style={{ width: `${bar.progress}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default App;
