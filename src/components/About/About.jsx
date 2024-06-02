import design from './About.module.css'
import user from '../../assets/about/user.png'
import stars from '../../assets/about/stars.png'
import about1 from '../../assets/about/about1.png'
import about2 from '../../assets/about/about2.png'
import about3 from '../../assets/about/about3.png'
import about4 from '../../assets/about/about4.png'
import about5 from '../../assets/about/about5.png'
import about6 from '../../assets/about/about6.png'
import about7 from '../../assets/about/about7.png'
import about8 from '../../assets/about/about8.png'
import about9 from '../../assets/about/about9.png'

const About = () => {
  return (
    <div className={design.container}>
        <div className={design.content}>
            <main>
                <section className={design['left-section']}>
                    <h3 className={design.left_title}>What they say about us</h3>
                    <img src={user} alt="User" />
                    <img src={stars} alt="Ratings" />
                    <p className={design.slate}>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                    <p className={design.testifier}>Regina Miles</p>
                    <p className={design.profession}>Designer</p>
                </section>
                <section className={design['right-section']}>
                    <img src={about1} alt="gallery" />
                    <img src={about2} alt="gallery" />
                    <img src={about3} alt="gallery" />
                    <img src={about4} alt="gallery" />
                    <img src={about5} alt="gallery" />
                    <img src={about6} alt="gallery" />
                    <img src={about7} alt="gallery" />
                    <img src={about8} alt="gallery" />
                    <img src={about9} alt="gallery" />
                </section>
            </main>
        </div>
    </div>
  )
}

export default About