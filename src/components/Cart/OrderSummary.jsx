import design from './OrderSummary.module.css';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import paystack from '../../assets/paystack.png';

const OrderSummary = () => {
    return (
        <div className={design.container}>
            <div className={design.order_detail}>
                <h4>Order Summary</h4>
                <p>4 items</p>
            </div>
            <table>
                <tr>
                    <td>Delivery charges</td>
                    <td>Add your delivery <br /> address to checkout to <br /> see delivery charges</td>
                </tr>
                <tr>
                    <td>Subtotal</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>234</td>
                </tr>
            </table>
            <p>Excluding Delivery <br /> Charges</p>
            <div className={design.checkout__container}>
                <button className={design.checkout_button}>Proceed to Checkout</button>
                <hr className={design.line_break}></hr>
                <div className={design.checkout_logos}>
                    <img className={design.logo} src={paystack} alt="Paystack logo" />
                    <img className={design.logo} src={mastercard} alt="Mastercard logo" />
                    <img className={design.logo} src={visa} alt="Visa logo" />
                </div>
            </div>
        </div>
    )
}

export default OrderSummary