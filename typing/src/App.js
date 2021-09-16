import React, { useState, useEffect } from "react";

import wordList from "./resources/words.json";

const MAX_TYPED_KEYS = 30; // valor max de caracteres que serão mostrados em tela

const getWord = () => {
  // função para pegar uma palavra aleatoria do arquivo words e mostrar em tela
  const index = Math.floor(Math.random() * wordList.length);

  const word = wordList[index];

  return word.toLowerCase();
};

const isValidKey = (key, word) => {
  if (!word) return false; // se word não existir retorne falso

  const result = word.split("").includes(key); // verificar os caracteres e ver se a tecla digitada esta incluida

  return result;
};

const Word = ({ word, validKeys }) => {
  if (!word) return null;

  const joinedKeys = validKeys.join("");

  const matched = word.slice(0, joinedKeys.length);

  const remainder = word.slice(joinedKeys.length);

  return (
    <>
      <span className="matched">{matched}</span>
      <span className="remainder">{remainder}</span>
    </>
  );
};

const App = () => {
  console.log("word", getWord());

  const [typedKeys, setTypedKeys] = useState([]);

  const [validKeys, setValidKeys] = useState([]);

  const [word, setWord] = useState("");

  useEffect(() => {
    setWord(getWord());
  }, []);

  const handleKeyDown = (e) => {
    // e representa o evento que irá ocorrer mas poderia ser qualquer coisa

    e.preventDefault();

    const { key } = e; // a forma mais moderna de se fazer isso => const key = e.key

    setTypedKeys((prevTypedKeys) => {
      // representa as teclas digitadas anteriormente

      return [...prevTypedKeys, key].slice(MAX_TYPED_KEYS * -1);
    });

    if (isValidKey(key, word)) {
      setValidKeys((prev) => {
        const isValidLength = prev.length <= word.length;

        const isNextChar = isValidLength && word[prev.length] === key;

        return isNextChar ? [...prev, key] : prev;
      });
    }
    console.log("key", key);
  };
  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <Word word={word} validKeys={validKeys} />
      </div>
      <div className="typed-keys">{typedKeys ? typedKeys.join(" ") : null}</div>
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
