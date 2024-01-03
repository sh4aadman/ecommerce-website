import Hero from "../../components/Carousel/Hero";
import Section from "../../components/Section/Section";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <h2 className="text-5xl text-center py-10">Welcome!</h2>
            <p className="text-3xl text-center py-5">Browse Collections to shop your favorite dates!</p>
            <Section></Section>
        </div>
    );
};

export default Home;