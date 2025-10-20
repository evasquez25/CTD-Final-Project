import styles from './Header.module.css'
import { NavLink } from 'react-router'

function Header() {
    return (
        <header>
            <img src="./Logo.png" alt="" />
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.inactive}>Dashboard</NavLink>
                <NavLink to="/Bills" className={({ isActive }) => isActive ? styles.active : styles.inactive}>Bills</NavLink>
                <NavLink to="Debts" className={({ isActive }) => isActive ? styles.active : styles.inactive}>Debts</NavLink>
                <NavLink to="Allocations" className={({ isActive }) => isActive ? styles.active : styles.inactive}>Allocations</NavLink>
            </nav>
        </header>
    )
}

export default Header