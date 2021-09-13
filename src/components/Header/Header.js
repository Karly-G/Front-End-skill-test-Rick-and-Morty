import './Header.css';
import logo from '../../assets/Rick&Morty.png'

const Header =()=>{

    return(
        <div className='header'>
            <img src={logo} className='app-logo' alt="logo" />    
        </div>
    )
}

export default Header;