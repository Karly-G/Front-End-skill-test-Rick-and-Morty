import React from 'react'
import { useHistory } from 'react-router-dom'
import arrow from '../../assets/arrow.png';
import Rick from '../../assets/Rick_Sanchez.png';
import './OneCharacterCard.css';

function OneCharacterCard() {

    let history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <>
            <img onClick={handleClick} src={arrow} className="arrow" alt="return" />
            <div className="one-card">
                <div className="one-character-card">
                    <ul>
                        <li type="square">Especie: Human</li>                               
                    </ul>
                    <h1>Rick Sánchez</h1>
                    <p>Estatus: Alive</p>
                    <p>Tipo: </p>
                    <p>Género: Male</p>
                </div>  
                <div>
                    <img src={Rick} alt="personaje" className="img-one-character" />
                </div> 
            </div>
            <svg className="fav" height="448pt" viewBox="0 -21 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg"><path d="m224 406.902344c29.382812-16.214844 224-129.496094 224-282.902344 0-66.054688-54.199219-124-116-124-41.867188.0742188-80.460938 22.660156-101.03125 59.128906-1.539062 2.351563-4.160156 3.765625-6.96875 3.765625s-5.429688-1.414062-6.96875-3.765625c-20.570312-36.46875-59.164062-59.0546872-101.03125-59.128906-61.800781 0-116 57.945312-116 124 0 153.40625 194.617188 266.6875 224 282.902344zm0 0"/></svg> 
        </>
    );

}

export default OneCharacterCard;