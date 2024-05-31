import design from './Hero.module.css'

const Hero = () => {
    return (
        <div className={design.container}>
            <div className={design.cards}>
                <div className={design.card1}>
                    <p className={design.item}>5 items</p>
                    <h2>FURNITURE</h2>
                    <p className={design.readmore}>Read more</p>
                </div>

                <div className={design.card2}>
                    <p className={design.item}>5 items</p>
                    <h3>FURNITURE</h3>
                    <p className={design.readmore}>Read more</p>
                </div>

                <div className={design.card3}>
                    <p className={design.item}>5 items</p>
                    <h3>FURNITURE</h3>
                    <p className={design.readmore}>Read more</p>
                </div>

                <div className={design.card4}>
                    <p className={design.item}>5 items</p>
                    <h3>FURNITURE</h3>
                    <p className={design.readmore}>Read more</p>
                </div>
            </div>
        </div>
    )
}

export default Hero