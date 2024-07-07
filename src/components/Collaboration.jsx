import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { check } from "../assets";
import Button from "./Button";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-4">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt={item.title} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{collabText}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:max-w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative rounded-full w-[22rem] border border-n-6">
            <div className=" rounded-full w-[10rem] m-auto border border-n-6">
              <div className=" rounded-full w-[6rem] m-auto border border-n-6"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
