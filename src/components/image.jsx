import React from "react";
import ahorcado0 from "../assets/ahorcado_0.png";
import ahorcado1 from "../assets/ahorcado_1.png";
import ahorcado2 from "../assets/ahorcado_2.png";
import ahorcado3 from "../assets/ahorcado_3.png";
import ahorcado4 from "../assets/ahorcado_4.png";
import ahorcado5 from "../assets/ahorcado_5.png";
import ahorcado6 from "../assets/ahorcado_6.png";

// Importa las demás imágenes aquí...

export default function Image(props) {
  const { errs } = props;

  let imageUrl;
  switch (errs) {
    case 0:
      imageUrl = ahorcado0;
      break;
    case 1:
      imageUrl = ahorcado1;
      break;
    case 2:
      imageUrl = ahorcado2;
      break;
    case 3:
      imageUrl = ahorcado3;
      break;
    case 4:
      imageUrl = ahorcado4;
      break;
    case 5:
      imageUrl = ahorcado5;
      break;  
    case 6:
      imageUrl = ahorcado6;
      break;
    default:
      imageUrl = ahorcado6;
      break;
  }

  return (
    <img src={imageUrl} alt={`${errs} hanged`} />
  );
}