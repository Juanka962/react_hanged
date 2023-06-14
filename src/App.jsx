import { useState } from 'react'
import Word from './components/Word';
import './App.css';

function App() {
  const [word, setWord] = useState(null)

  const handleClick = async() =>{
    const api = await fetch('https://clientes.api.greenborn.com.ar/public-random-word?');
    const wordApi = await api.json();
    //Clean the word before to set .
    setWord(wordApi[0].normalize('NFD')
     .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
     .normalize());
  }


  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1>¡hanged game!</h1>
        {word? (
          <Word word={word} setWord={setWord}/>
        ) : (
          <>
            <button onClick={handleClick} className="btn-search">Search word</button>
          </>
        )}

      </header>
    </div>
      
    </>
  )
}

export default App