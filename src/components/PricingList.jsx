import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] h-full px-6 bg-n-8  border border-n-6 rounded-[2rem]"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
