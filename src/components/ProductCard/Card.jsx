/* eslint-disable react/prop-types */
import design from './Card.module.css'

const Cards = (props) => {
  const saveProductID = () => {localStorage.setItem("id", JSON.stringify(props.id))};
  
  return (
    <div className={design.container} onClick={saveProductID}>
        <img src={props.imageUrl}/>     
        <div className={design.details}>
        <h5>{props.title}</h5>
        <p>{props.category}</p>
        <div className={design.price}>
            <h5>{props.price} 
              <span className={design.price2}>{props.discountPercentage}</span>
            </h5>
        </div>
        </div>
    </div>
  )
}

export default Cards