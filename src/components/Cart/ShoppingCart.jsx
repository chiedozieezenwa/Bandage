import { useState } from 'react';
import design from './ShoppingCart.module.css';
import { useSelector } from 'react-redux';
import add from '../../assets/add.svg'
import minus from '../../assets/minus.svg'
import BestSellerProducts from '../BestSeller/BestsellerProducts';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);

    const initialQuantities = cartItems.reduce((acc, item) => {
        acc[item.id] = 1;
        return acc;
      }, {});
    
      const [quantities, setQuantities] = useState(initialQuantities);

      const handleIncrement = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: prevQuantities[id] + 1,
        }));
      };
    
      const handleDecrement = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: Math.max(1, prevQuantities[id] - 1), // Ensure quantity doesn't go below 1
        }));
      };

    const products = cartItems.map((item) => (
        <tr key={item.id} className={design.product}>
            <td className={design.product_detail}>
                <div className={design.product_detaill}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className={design.product_details}>
                        <h2 className={design.product_detail_title}>{item.title}</h2>
                        <h4 className={design.product_detail_stock}>{item.availabilityStatus}</h4>
                        <p className={design.product_detail_rating}>{item.reviews.length} reviews</p>
                    </div>
                </div>
                <div className={design.remove_button}>Remove</div>
            </td>
            <td className={design.product_quantity}>
                <div className={design.product_quantity_div}>
                <div className={design.minusButton} onClick={() => handleDecrement(item.id)}>
                    <img src={minus} alt="minus button" />
                </div>
                <input className={design.quantity} type="text" value={quantities[item.id]} />
                <div className={design.addButton} onClick={() => handleIncrement(item.id)}>
                    <img src={add} alt="add button" />
                </div>
                </div>
            </td>
            <td className={design.product_price}>
                <div className={design.product_price_div}>
                    <h4 className={design.product_mainprice}>{item.price * quantities[item.id]}</h4>
                    <h2 className={design.product_pricecalc}>{item.price} * {quantities[item.id]} items</h2>
                </div>
            </td>
        </tr>
      ));

    //const products = data.products.slice(0, 3).map((item) => (
    
    //));

    return (
        <div>
            <div className={design.container}>
            <h4 className={design.heading}>Shopping Cart</h4>
            <table className={design.table}>
                    <tr className={design.table_head}>
                        <th className={design.table_heading} style={{borderTopLeftRadius: "4px"}}>Item Details</th>
                        <th className={design.table_heading}>Quantity</th>
                        <th className={design.table_heading} style={{borderTopRightRadius: "4px"}}>Price</th>
                    </tr>
                    {products}
            </table>
            </div>
            <BestSellerProducts />
        </div>
    )
}

export default ShoppingCart