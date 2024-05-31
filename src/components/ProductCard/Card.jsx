import design from './Card.module.css'

const Cards = (props) => {
  return (
    <div className={design.container}>
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