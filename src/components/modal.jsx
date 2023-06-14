import React, { useState } from "react";
import '../modal.css'

export default function Modal(props) {
    const {winner,returnInit} = props;

    if(winner==null) return ;


    const winnerText = winner === false? 'Perdiste... 😓 ' : '¡Ganaste! 🥳'

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                <footer>
                    <button onClick={returnInit}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}