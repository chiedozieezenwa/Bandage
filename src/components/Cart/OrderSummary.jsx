/* eslint-disable react/prop-types */
import design from './OrderSummary.module.css';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import paystack from '../../assets/paystack.png';

const OrderSummary = (props) => {
    return (
        <div className={design.container}>
            <div className={design.order_detail}>
                <h4>Order Summary</h4>
                <p>{props.itemsLength}4 items</p>
            </div>
            <table className={design.order}>
                <tr className={design.order_table}>
                    <td className={design.delivery_text}>Delivery charges</td>
                    <td className={design.delivery_address}>Add your delivery <br /> address to checkout to <br /> see delivery charges</td>
                </tr>
                <tr className={design.order_table}>
                    <td className={design.subtotal_text}>Subtotal</td>
                    <td className={design.subtotal_figure}>123{props.subtotal}</td>
                </tr>
                <tr className={design.order_table}>
                    <td className={design.total_text}>Total</td>
                    <td className={design.total_figure}>234{props.total}</td>
                </tr>
            </table>
            <p className={design.disclaimer}>Excluding Delivery <br /> Charges</p>
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