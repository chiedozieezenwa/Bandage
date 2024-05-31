import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar"
import Topnav from "../components/Topnav/Topnav"

const Home = () => {
    return (
        <div>
            <Topnav />
            <Navbar />
            <Hero />
        </div>
    )
}

export default Home;