import React from "react";

const WhyHawkstackSvg: React.FC = () => {
  return (<div className="relative z-20 mt-10 ml-6.5 w-[443px] h-[443px] rounded-full overflow-hidden">
      {/* 2x2 grid */}
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        
        {/* Segment 1 – top-left */}
        <svg
          viewBox="0 0 217 221"
          className="w-full h-full scale-[1.03]"
          preserveAspectRatio="none"
        >
          <path
            d="M0.0273467 219.878C-0.43477 191.465 4.70392 163.24 15.15 136.813C25.5961 110.386 41.1451 86.2758 60.9091 65.8582C80.6731 45.4407 104.265 29.1159 130.338 17.8159C156.411 6.51593 184.455 0.462055 212.867 -5.837e-05L216.386 216.359L0.0273467 219.878Z"
            fill="url(#g1)"
          />
          <defs>
            <linearGradient id="g1" x1="203" y1="16" x2="40" y2="179">
              <stop stopColor="#040B10" />
              <stop offset="1" stopColor="#0B1C45" />
            </linearGradient>
          </defs>
        </svg>

        {/* Segment 2 – top-right */}
        <svg
          viewBox="0 0 219 221"
          className="w-full h-full scale-[1.03]"
          preserveAspectRatio="none"
        >
          <path
            d="M-0.00118755 0.0106292C28.4138 -0.271821 56.6062 5.04524 82.9663 15.6582C109.326 26.2712 133.338 41.9723 153.63 61.865C173.922 81.7578 190.098 105.453 201.233 131.596C212.367 157.74 218.244 185.822 218.526 214.237L2.14962 216.387L-0.00118755 0.0106292Z"
            fill="black"
          />
        </svg>

        {/* Segment 4 – bottom-left */}
        <svg
          viewBox="0 0 217 222"
          className=" w-full h-full scale-[1.03]"
          preserveAspectRatio="none"
        >
          <path
            d="M221.131 216.334C192.721 216.964 164.466 211.992 137.978 201.702C111.49 191.411 87.2887 176.005 66.755 156.362C46.2213 136.718 29.7577 113.223 18.3041 87.217C6.85063 61.211 0.63152 33.2038 0.00189737 4.79438L216.336 -0.000123503L221.131 216.334Z"
            fill="black"
          />
        </svg>

        {/* Segment 3 – bottom-right */}
        <svg
          viewBox="0 0 221 221"
          className="  w-full h-full scale-[1.03]"
          preserveAspectRatio="none"
        >
          <path
            d="M216.379 0.000192423C216.635 28.4154 211.292 56.6029 200.655 82.9533C190.018 109.304 174.295 133.301 154.383 153.575C134.472 173.849 110.763 190.002 84.6084 201.113C58.4542 212.224 30.3677 218.075 1.9525 218.331L0.000217099 1.95248L216.379 0.000192423Z"
            fill="url(#g2)"
          />
          <defs>
            <linearGradient id="g2" x1="11" y1="201" x2="175" y2="40">
              <stop stopColor="#040B10" />
              <stop offset="1" stopColor="#0B1C45" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  );
};

export default WhyHawkstackSvg;
