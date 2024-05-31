import design from './BestServices.module.css'
import book from '../../assets/bestservices/bookreader.png'
import pages from '../../assets/bestservices/bookpages.svg'
import arrow from '../../assets/bestservices/uparrow.png'

const BestServices = () => {
    return (
        <div className={design.container}>
            <main className={design.content}>
                <section className={design.title}>
                    <p className={design['featured-products']}>Featured Products</p>
                    <p className={design['best-services']}>THE BEST SERVICES</p>
                    <p className={design['problems']}>Problems trying to resolve the conflict between </p>
                </section>
                <section className={design.main}>
                    <div className={design.card}>
                        <img src={book} alt="Read" />
                        <p className={design['best-services']}>Easy Wins</p>
                        <p className={design.problems}>Get your best looking smile now!</p>
                    </div>
                    <div className={design.card}>
                        <img src={pages} alt="Open Book" />
                        <p className={design['best-services']}>Concrete</p>
                        <p className={design.problems}>Defalcate is most focused in<br /> helping you discover your most<br /> beautiful smile</p>
                    </div>
                    <div className={design.card}>
                        <img src={arrow} alt="Up Arrow" />
                        <p className={design['best-services']}>Hack Growth</p>
                        <p className={design.problems}>Overcame any hurdle or any<br /> other problem.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default BestServices;