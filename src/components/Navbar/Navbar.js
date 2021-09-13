import { useHistory } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar =({search, setSearch})=>{

    let history = useHistory();

    function handleClick() {
        history.push('/filter');
    }


    const handleInputChange = ({target}) =>{
        setSearch(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(search);
    }

    return(
        <form className='navbar' onSubmit={handleSubmit} >
            <input type="text"  placeholder="Personaje" className="search" name="searcher" value={search} onChange={handleInputChange} />
            <button onClick={handleClick} className='btn-filter' type="submit">Filtrar</button>
        </form>
    )
}

export default Navbar;