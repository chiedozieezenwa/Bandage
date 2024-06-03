import design from './Topnav.module.css'
import telephone from '../../assets/telephone.svg'
import email from '../../assets/email.svg'
import insta from '../../assets/insta.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

const Topnav = () => {
    return (
        <header className={design.container}>
            <div className={design.content}>
                <section className={design.left_section}>
                    <p className={design.contact}><img src={telephone} alt="Call us on" /> (+234) 8060492441</p>
                    <p className={design.contact}><img src={email} alt="Mail us on" /> chiedozieezenwa@gmail.com</p>
                </section>
                <section className={design.middle_section}>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </section>
                <section className={design.right_section}>
                    <p>Follow Us :</p>
                    <img src={insta} alt="Follow on Instagram" />
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="Follow on Facebook" />
                    <img src={twitter} alt="Follow on X" />
                </section>
            </div>
        </header>
    )
}

export default Topnav