import { CircleCheckBig } from "lucide-react";

const PricingFeatures = ({feature}) => {
 
  return <div>
    <p className="flex gap-1 mt-4"><CircleCheckBig /> {feature}</p>
  </div>;
};

export default PricingFeatures;
