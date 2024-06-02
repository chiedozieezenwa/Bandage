import About from "../../components/About/About";
import BestServices from "../../components/BestServices/BestServices";
import { Blog } from "../../components/Blog/Blog";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar"
import Topnav from "../../components/Topnav/Topnav"
import Products from "../featuredProduct/Products";
import design from './Home.module.css'

const Home = () => {
    return (
        <div className={design.container}>
            <Topnav />
            <Navbar />
            <Hero className={design.component} />
            <Products className={design.component} />
            <BestServices className={design.component} />
            <Blog className={design.component} />
            <About className={design.component} />
        </div>
    )
}

export default Home;