import "./styles.css";

import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div className="container">
      <h1 className="advice">{advice || "Click the button to get advice"}</h1>

      <div className="button-container">
        <button className="advice-button" onClick={getAdvice}>
          advice
        </button>
      </div>

      <div className="counter-container">
        <p>
          y have read <strong> {count} </strong>advices... u geting more wiser
        </p>
      </div>
    </div>
  );
}
