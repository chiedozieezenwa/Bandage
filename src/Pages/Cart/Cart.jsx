import Navbar from "../../components/Navbar/Navbar";
import Topnav from "../../components/Topnav/Topnav";
import design from './Cart.module.css';
import rightIcon from '../../assets/right-icon.svg'
import ShoppingCart from '../../components/Cart/ShoppingCart';
import OrderSummary from '../../components/Cart/OrderSummary';

const Card = () => {
    //const id = localStorage.getItem("id");

    return (
        <div>
            <Topnav />
            <Navbar />
            <div className={design.navigation}>
                <a href='/' className={design.home_text}>Home</a>
                <img src={rightIcon} alt="Right icon" />
                {/*<a href={`/product/${id}`} className={design.shop_text}>Shop</a>*/}
                <a href='/' className={design.shop_text}>Shop</a>
                <img src={rightIcon} alt="Right icon" />
                <h6 className={design.cart_text}>Cart</h6>
            </div>
            <div className={design.cart__container}>
                <ShoppingCart />
                <OrderSummary />
            </div>
        </div>
    )
}

export default Card;