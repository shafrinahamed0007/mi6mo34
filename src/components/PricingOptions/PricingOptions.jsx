import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div className="my-10">
      <h2 className="md:text-5xl text-2xl text-center">Get Out Member Ship</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 w-11/12 mx-auto">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
