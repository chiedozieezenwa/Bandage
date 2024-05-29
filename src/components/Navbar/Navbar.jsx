import design from './Navbar.module.css'
import dropdown from '../../assets/dropdown.svg'
import person from '../../assets/person.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'

const Navbar = () => {
    return (
        <nav className={design.container}>
            <section className={design.title}>
                <h3>Bandage</h3>
            </section>
            <section className={design['nav-links']}>
                <ul>
                    <li>Home</li>
                    <li>Shop <img src={dropdown} alt="Add to Cart" /></li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <ul className={design.signup}>
                    <li><img src={person} alt="person" /> Login / Register</li>
                    <li><img src={search} alt="search" /></li>
                    <li><img src={cart} alt="View Cart" /> 1</li>
                    <li><img src={heart} alt="Reaction" /> 1</li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar