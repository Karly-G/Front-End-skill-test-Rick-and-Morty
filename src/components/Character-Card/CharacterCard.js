import React from 'react';
import './CharacterCard.css';


function CharacterCard ({characters = []}){


    return(
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="characterCard">
                    <div>
                        <img src={item.image} alt="personaje" />
                    </div>
                    <div className="dataCard">
                        <ul>
                            <li type="square">Especie: {item.species}<svg height="448pt" viewBox="0 -21 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg"><path d="m224 406.902344c29.382812-16.214844 224-129.496094 224-282.902344 0-66.054688-54.199219-124-116-124-41.867188.0742188-80.460938 22.660156-101.03125 59.128906-1.539062 2.351563-4.160156 3.765625-6.96875 3.765625s-5.429688-1.414062-6.96875-3.765625c-20.570312-36.46875-59.164062-59.0546872-101.03125-59.128906-61.800781 0-116 57.945312-116 124 0 153.40625 194.617188 266.6875 224 282.902344zm0 0"/></svg></li>                               
                        </ul>
                        <h5>{item.name}</h5>
                        <p>Estatus: {item.status}</p>
                        <p>Tipo: {item.type}</p>
                        <p>Género: {item.gender}</p>
                    </div>    
                </div>
            ))}
        </div>
    );
}

export default CharacterCard;