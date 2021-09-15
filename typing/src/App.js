import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Gui</span>
        <span className="remainder">lherme</span>
      </div>
      <div className="typed-keys">abcgsGui</div>
      <div className="completed-words">
        <ol>
          <li>Pokemon</li>
          <li>Zoroark</li>
          <li>Infernape</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
