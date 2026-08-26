import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
