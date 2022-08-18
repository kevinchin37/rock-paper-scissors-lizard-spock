import logo from '../../assets/logo-bonus.svg';
import Score from '../Score/Score';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} />
            <Score />
        </header>
    );
}

export default Header;