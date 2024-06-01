import BestServices from "../components/BestServices/BestServices";
import { Blog } from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar"
import Topnav from "../components/Topnav/Topnav"
import Products from "./featuredProduct/Products";

const Home = () => {
    return (
        <div>
            <Topnav />
            <Navbar />
            <Hero />
            <Products />
            <BestServices />
            <Blog />
        </div>
    )
}

export default Home;