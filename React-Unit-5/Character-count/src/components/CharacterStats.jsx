
import { useState, useEffect } from "react";

function CharacterStats({ text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return (
    <div className="stats">
      <p>Character Count: {count}</p>

      {count > 100 && (
        <p className="warning">
          Warning: You have exceeded the 100 Character limit!!
        </p>
      )}
    </div>
  );
}

export default CharacterStats;