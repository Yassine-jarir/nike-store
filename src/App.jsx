import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Sales from "./component/Sales";
import { heroapi, popularsales, topratesales } from "./data/data";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales endPoints={popularsales} />
        <Sales endPoints={topratesales} />
      </main>
      <Footer />
    </>
  );
}

export default App;
