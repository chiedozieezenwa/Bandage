import { useGetProductsQuery } from '../../redux/Api';
import Navbar from "../../components/Navbar/Navbar"
import Topnav from "../../components/Topnav/Topnav"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Cart';
import design from './SelectedProduct.module.css';
import rightIcon from '../../assets/right-icon.svg'
import classNames from 'classnames';
import like from '../../assets/like.svg';
import basket from '../../assets/basket.svg';
import more from '../../assets/more.svg';
import { Link } from 'react-router-dom';
import BestsellerProduct from '../../components/BestSeller/BestsellerProducts';
import Footer from '../../components/Footer/Footer'
import holi from '../../assets/bestservices/holi1.png'
import lyft from '../../assets/bestservices/lyft2.png'
import leaf from '../../assets/bestservices/leaf3.png'
import stripe from '../../assets/bestservices/stripe4.png'
import aws from '../../assets/bestservices/aws5.png'
import last from '../../assets/bestservices/last6.png'

const SelectedProduct = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error fetching data</div>;
      }

    const product = data.products.find(product => product.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return (
        <div>
            <Topnav />
            <Navbar />
            <div className={design.navigation}>
                <a href='/' className={design.home_text}>Home</a>
                <img src={rightIcon} alt="Right icon" />
                <h6 className={design.shop_text}>Shop</h6>
            </div>
            <div className={design.product__container}>
              <div className={design.product__container_gallery}>
                <div className={design.thumbnail}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                
                <div className={design.other_images}>
                  <img src={product.images[0]} alt={product.title} />
                </div>
              </div>
              <div className={design.product__container_details}>
                <h4 className={design.product__container_title}>{product.title}</h4>
                <h3 className={design.product__container_price}>{product.price}</h3>
                <h6 className={design.product__container_stock}>Availability: <span>{product.availabilityStatus}</span></h6>
                <hr className={design.line_break}></hr>
                <div className={design.product__container_colorBox}>
                  <div className={classNames(design.color, design.Blue)}></div>
                  <div className={classNames(design.color, design.Green)}></div>
                  <div className={classNames(design.color, design.Brown)}></div>
                  <div className={classNames(design.color, design.DarkGrey)}></div>
                </div>
                <div className={design.product_actions}>
                  <button className={design.buy_button}>Select Options</button>
                  <div className={design.optionBox}>
                    <img src={like} className={design.like}></img>
                  </div>
                  <div className={design.optionBox} onClick={handleAddToCart}>
                    <Link to='/cart'>
                      <img src={basket} className={design.basket}></img>
                    </Link>
                  </div>
                  <div className={design.optionBox}>
                    <img src={more} className={design.more}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className={design.description__container}>
              <div className={design.options}>
                <a href="" className={design.option_link}>Description</a>
                <a href="" className={design.option_link}>Additional Information</a>
                <a href="" className={design.option_link}>Reviews ({product.reviews.length})</a>
              </div>
              <div className={design.description}>
                <h3>the quick fox jumps over</h3>
                <p>{product.description}</p>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            </div>
            
            <div className={design['best-seller']}>
            <BestsellerProduct />
            </div>          
            <div className={design['image-array']}>
              <section>
                <img src={holi} alt="#" />
                <img src={lyft} alt="#" />
                <img src={leaf} alt="#" />
                <img src={stripe} alt="#" />
                <img src={aws} alt="#" />
                <img src={last} alt="#" />
              </section>
            </div>
            <Footer />
        </div>
    )
}

export default SelectedProduct;