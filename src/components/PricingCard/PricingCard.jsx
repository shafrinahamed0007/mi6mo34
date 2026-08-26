import PricingFeatures from "./PricingFeatures";

const PricingCard = (pricing) => {
  // console.log(pricing);
  const {features} = pricing.pricing;
  return (
    <div className="mt-10 border bg-blue-400 rounded-2xl p-5">
      <h1 className="text-3xl font-semibold">
        Plan: {pricing?.pricing?.name || "Plan Not Found"}
      </h1>
      <h4 className="text-2xl font-semibold">
        {pricing.pricing?.description || "Plan description not found!"}
      </h4>
      <p>
        {pricing?.pricing?.price?.monthly}/month{" "}
        {pricing?.pricing?.price?.currency}
      </p>
      <p>
        {pricing?.pricing?.price?.annual}/year{" "}
        {pricing?.pricing?.price?.currency}
      </p>
      {
        features.map((feature,index) => <PricingFeatures key={index} feature={feature} />)
      }
     
    </div>
  );
};

export default PricingCard;
