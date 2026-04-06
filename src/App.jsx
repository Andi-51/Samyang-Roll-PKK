import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProblemSolution from "./Components/ProblemSolution";
import Features from "./Components/Features";
import Gallery from "./Components/Gallery";
import Order from "./Components/Order";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="relative overflow-x-clip">
        <Hero />
        <ProblemSolution />
        <Features />
        <Gallery />
        <Order />
      </main>
      <Footer />
    </div>
  );
};

export default App;
