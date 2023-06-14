import React, { useState, useEffect } from "react";
import Image from "./image";
import Modal from "./modal";

export default function Game(props) {
  const { word, setWord } = props;
  console.log(word);

  const arr = new Array(word.length).fill("_ ");

  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [board, setBoard] = useState(arr);
  const [errs, setErrs] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    alldiscoveredwords(board);
  }, [board]);

  const searchLetter = (event) => {
    const letter = event.target.innerHTML;
    let newBoard = [...board];
    if (word.includes(letter)) {
      let idx = word.indexOf(letter);
      while (idx !== -1) {
        newBoard[idx] = `${letter} `;
        idx = word.indexOf(letter, idx + 1);
      }
    } else {
      setErrs(errs + 1);
    }
    setBoard(newBoard);
  };

  const returnInit = () => {
    setWord(null);
  };

  const alldiscoveredwords = (newBoard) => {
    if (!newBoard.includes("_ ") && errs < 6) {
      setWinner(true);
    } else if (newBoard.includes("_ ") && errs >= 6) {
      setWinner(false);
    } else {
      setWinner(null);
    }
  };

  return (
    <>
      <div>
        <Image errs={errs} />
        
        <div className="buttons">
        {abc.map((e) => (
          <button key={e} onClick={searchLetter}>
            {e}
          </button>
        ))}
        </div>
        {errs > 0 ? (
          <p>Tienes {errs} fallos </p>
        ) : (
          <><br /></>
        )}
        <p>{board}</p>
        <button onClick={returnInit}>Back</button>
        <Modal winner={winner} returnInit={returnInit} />
      </div>
    </>
  );
}
