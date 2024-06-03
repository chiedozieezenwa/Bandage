import design from './ShoppingCart.module.css';
import { useGetProductsQuery } from '../../redux/Api';

const ShoppingCart = () => {
    const { data } = useGetProductsQuery();

    const products = data.products.slice(0, 3).map((item) => (
        <tr key={item.id} className={design.product}>
            <td className={design.product_detail}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={design.product_details}>
                    <h2 className={design.product_detail_title}>{item.title}</h2>
                    <h4 className={design.product_detail_stock}>{item.availabilityStatus}</h4>
                    <p className={design.product_detail_rating}>{item.rating}</p>
                </div>
            </td>
        </tr>
    ));

    return (
        <div className={design.container}>
            <h4 className={design.heading}>Shopping Cart</h4>
            <table className={design.table}>
                    <tr className={design.table_head}>
                        <th className={design.table_heading} style={{borderTopLeftRadius: "4px"}}>Item Details</th>
                        <th className={design.table_heading}>Quantity</th>
                        <th className={design.table_heading} style={{borderTopRightRadius: "4px"}}>Price</th>
                    </tr>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingCart