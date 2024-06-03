import design from '../Experience/Experience.module.css'

const Experience = () => {
    return (
        <div className={design.container}>
            <section className={design.content}>
                <main className={design.main}>
                    <p className={design['main-caption']}>Designing Better Experience</p>
                    <h2 className={design.boldtxt}>Problems trying to resolve the conflict between</h2>
                    <p className={design.classictxt}>Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
                    <p className={design.price}>$16.48</p>
                    <button className={design['addtocart-btn']}>Add to Cart</button>
                </main>
            </section>
        </div>
    )
}

export default Experience;