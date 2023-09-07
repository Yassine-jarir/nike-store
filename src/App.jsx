import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Sales from "./component/Sales";
import { heroapi, popularsales, topratesales } from "./data/data";

function App() {
  return (
    <>
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
