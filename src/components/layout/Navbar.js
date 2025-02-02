import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Logo from '../../assets/img/logo.png'
function NavBar(){

    return(
     <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
            <img src={Logo} alt="FInd a Board"/>
            <h2> Find a Board</h2>
        </div>
        <ul>
            <li>
                <Link to="/">Alugar</Link>
            </li>
            <li>
                <Link to="/login">Entrar</Link>
            </li>
            <li>
                <Link to="/register">Cadastrar</Link>
            </li>
        </ul>
     </nav>
    )
}

export default NavBar