import Logo from '../../assets/logo.svg';
import profileImage from '../../assets/profile.jpeg';
import './style.css';

export default function Header() {
    return(
        <header>
            <img className='logo' src={Logo} alt='logo' />
            <div className='container-welcome'> 
                <img className='profile-img' src={profileImage} alt='profile' />
                <strong>Bem vindo, Pedro.</strong>
             
            </div>
        </header>
    )

}

