import design from './Navbar.module.css'
import dropdown from '../../assets/dropdown.svg'
import person from '../../assets/person.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import heart from '../../assets/heart.svg'
import { useState } from 'react'
import classNames from 'classnames'
import searchicon from '../../assets/searchicon.svg'
import shopcart from '../../assets/shopcart.svg'
import toggle from '../../assets/toggle.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={design.container}>
            <section className={design.title}>
                <h3>Bandage</h3>
            </section>
            <section className={design['nav-links']}>
                <ul className={design['nav-list-item']}>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/cart'>
                        <li>Shop <img src={dropdown} alt="Add to Cart" /></li>
                    </Link>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <ul className={classNames(design.signup, design.list_items)}>
                    <li><img src={person} alt="person" /> Login / Register</li>
                    <li><img src={search} alt="search" /></li>
                    <Link to='/cart'>
                        <li><img src={cart} alt="View Cart" /></li>
                    </Link>
                    <li><img src={heart} alt="Reaction" /></li>
                </ul>
            </section>
            <section className={design['toggle-menu']}>
                <img src={searchicon} alt="Click to search" />
                <img src={shopcart} alt="Add to cart" />
                <img src={toggle} alt="toggle menu" onClick={toggleMenu}/>
            </section>
            <ul className={classNames(design.toggle_items, { [design['is-open']]: isOpen })}>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar