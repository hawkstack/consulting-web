import Image from "next/image";
import { JSX } from "react";
import classNames from "classnames";

type Solutions = {
  icon: string;
  title: string;
  subtitle: string;
};

type WhyWorkWithUsProps = {
  title: string;
  description: string;
  solutions: Solutions[];
};

const WhyWorkWithUs = ({
  title,
  description,
  solutions,
}: WhyWorkWithUsProps): JSX.Element => {
  return (
    <div className="w-full font-lexend p-12 bg-[linear-gradient(0deg,_#000C27,_#000C27),linear-gradient(180deg,_rgba(26,38,52,0)_0%,_rgba(26,38,52,0.4)_100%),linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_100%)] bg-[#000C27]">
      <div className="flex flex-col items-center justify-center mb-15">
        <h2 className="text-[40px] text-white font-medium leading-[125%] mb-2 ">
          {title}
        </h2>
        <p className="text-white text-xl md:text-[16px] font-normal leading-[125%]">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={classNames("px-10", {
              "border-r-2 border-white": solutions.length - 1 !== index,
            })}>
            <div className="bg-opacity-10 backdrop-blur-lg rounded-xl text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={85}
                  height={75}
                />
              </div>
              <h3 className="text-white text-md font-medium mb-2">
                {solution.title}
              </h3>
              <p className="w-[60%] mx-auto text-gray-100 text-sm opacity-75">
                {solution.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
