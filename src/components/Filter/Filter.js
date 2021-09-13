import React from 'react'
import { useHistory } from 'react-router-dom'
import './Filter.css';
import back from '../../assets/back.png';

function Filter() {

    let history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <>
            <div className="filters">
                <select name="" className="option-filter">
                    <option value="">Especie</option>
                    <option value="">Humano</option>
                    <option value="">Alien</option>
                    <option value="">Animal</option>
                </select>
                <select name="" className="option-filter">
                    <option value="">Estatus</option>
                    <option value="">Vivo</option>
                    <option value="">Muerto</option>
                    <option value="">Desconocido</option>
                </select>
                <select name="" className="option-filter">
                    <option value="">Tipo</option>
                </select>
                <select name="" className="option-filter">
                    <option value="">Género</option>
                    <option value="">Femenino</option>
                    <option value="">Masculino</option>
                    <option value="">Desconocido</option>
                </select>
                <br />
                <input className='btn-search-filter' type="submit" value="Buscar"/>
                <img onClick={handleClick} src={back} className="return" alt="return" />
            </div>
        </>
    );

}

export default Filter;