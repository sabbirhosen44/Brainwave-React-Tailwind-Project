import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="#pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            className="relative z-1"
            src={smallSphere}
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
            <img
              className="w-full"
              width={950}
              height={400}
              src={stars}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          title="Pay once, use forever"
          tag="Get started with brainwave"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
