import React, { useState } from 'react';
import './Minuteur.css';

const Minuteur = () => {

    const [counter, setCounter] = useState(0);
    const [interval, setStateInterval] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const clickDisabledStart = (bool) => {
        setDisabled(bool)
    }

    function Counter() {

            setStateInterval(setInterval(() => {
                setCounter(count => (parseFloat(count) + 0.01).toFixed(2));
            }, 10))
            clickDisabledStart(true)
            console.log(counter);
            console.log(interval);
    }

    function resetCounter() {
        clearInterval(interval);
        setCounter(0);
        clickDisabledStart(false)
    }


    function pauseCounter() {
        clearInterval(interval);
        clickDisabledStart(false)
    // changer le texte du btn démarrer en Rédemarrer le minuteur
        }

        return (
            <div className="container">
                <div>
                    <h2 className="timer">
    
                        Compteur : {counter}
                    </h2>
    
                </div>
                <button id ="demarre" className='btn btn-primary' disabled={disabled} onClick={Counter}>Démarrer le minuteur</button>
    
                <button id ="reset" className='btn btn-danger' onClick={resetCounter}>Reset le minuteur</button>
                <button id ="pause" className='btn btn-warning' onClick={pauseCounter}>Pause le minuteur</button>
            </div >
        );
    };
    
    export default Minuteur;