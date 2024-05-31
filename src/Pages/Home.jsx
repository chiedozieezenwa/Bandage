import BestServices from "../components/BestServices/BestServices";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar"
import Products from "../components/Products/Products";
import Topnav from "../components/Topnav/Topnav"

const Home = () => {
    return (
        <div>
            <Topnav />
            <Navbar />
            <Hero />
            <Products />
            <BestServices />
        </div>
    )
}

export default Home;