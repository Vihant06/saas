import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/TestimonialItem.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header/>
            <Hero/>
            <Features/>
            <Pricing/>
            <Faq/>
            <TestimonialItem/>
            <Download/>
            <Footer/>
        </main>
    );
};

export default App;