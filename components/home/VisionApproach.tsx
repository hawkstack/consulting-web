// "use client";
// import { useEffect, useState } from "react";
// import { cards } from "@/constants";

// const POSITIONS = [
//   {
//     wrapper: "z-10",
//     card: "w-[154px] h-[154px] md:w-[200px] md:h-[200px] xl:w-[261px] xl:h-[261px] bg-[#0B1F4A] text-white",
//     imgBox: "mb-2 md:mb-4 xl:mb-5 flex h-[70px] w-[90px] md:h-[90px] md:w-[110px] xl:h-[120px] xl:w-[145px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400",
//     img: "h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 filter brightness-0 invert",
//   },
//   {
//     wrapper: "absolute top-0 md:top-4 lg:top-20 xl:top-8 left-[-60px] md:left-[-110px] lg:left-[-60px] xl:left-[-120px]",
//     card: "w-[102px] h-[102px] md:w-[140px] md:h-[140px] xl:w-[172px] xl:h-[172px] bg-white",
//     imgBox: "w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:w-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
//     img: "w-full h-full",
//   },
//   {
//     wrapper: "absolute bottom-0 md:bottom-4 lg:bottom-20 xl:bottom-8 left-[-60px] md:left-[-110px] lg:left-[-60px] xl:left-[-120px]",
//     card: "w-[102px] h-[102px] md:w-[140px] md:h-[140px] xl:w-[172px] xl:h-[172px] bg-white",
//     imgBox: "w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:w-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
//     img: "w-full h-full",
//   },
// ];

// export default function VisionApproach() {
//   const [order, setOrder] = useState(() => [...cards]);
//   const [index, setIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const rotate = setInterval(() => {
//       setOrder((p) => [p[1], p[2], p[0]]);
//       setIndex(0);
//     }, 9000);
//     return () => clearInterval(rotate);
//   }, []);

//   useEffect(() => {
//     const wait = setTimeout(() => {
//       setAnimate(true);
//       const anim = setTimeout(() => {
//         setAnimate(false);
//         setIndex((i) => (i + 1) % (order[0]?.desc?.length || 1));
//       }, 900);
//       return () => clearTimeout(anim);
//     }, 2000);
//     return () => clearTimeout(wait);
//   }, [index, order]);

//   return (
//     <section className="w-full py-8 md:py-8 font-lexend overflow-hidden">
//       <div className="mx-auto max-w-[1411px] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 md:gap-0 lg:gap-2 xl:gap-0">
        
//         {/* VISUAL SECTION - Moved to left for Desktop/Tablet (order-1) */}
//         <div className="relative flex justify-center items-center flex-shrink-0 
//                         w-full md:w-1/2 lg:w-[500px] xl:w-[620px] 
//                         h-[250px] md:h-[400px] lg:h-[500px]
//                         translate-x-4 md:translate-x-0 lg:translate-x-0
//                         scale-[0.8] sm:scale-[0.9] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 
//                         transition-transform duration-500 order-2 md:order-1">
          
//           <div className="relative w-[280px] md:w-[320px] lg:w-[380px] h-full ml-20 flex items-center justify-center">
//             {order.slice(0, 3).map((card, i) => {
//               const p = POSITIONS[i];
//               return (
//                 <div key={card.title} className={`${p.wrapper} transition-all duration-700`}>
//                   <div className={`rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-3 md:p-4 xl:p-5 ${p.card}`}>
//                     <div className={p.imgBox}>
//                       <img
//                         src={card.image}
//                         alt=""
//                         className={`object-contain ${p.img} ${card.title === "Vision" && i !== 0 ? "invert brightness-90" : ""}`}
//                       />
//                     </div>
//                     {i === 0 && (
//                       <div className="text-center ">
//                         <h3 className="text-sm md:text-base xl:text-lg font-semibold mt-1 md:mt-2">{card.title}</h3>
//                         <div className="relative mt-1 md:mt-2 h-5 md:h-6 w-full overflow-hidden">
//                           <p className={`absolute top-0 w-full text-center text-[10px] md:text-xs xl:text-sm text-blue-200 ${animate ? "animate-[slideUpOut_0.9s_ease-out_forwards]" : ""}`}>
//                             {card.desc[index]}
//                           </p>
//                           <p className={`absolute top-0  w-full text-center text-[10px] md:text-xs xl:text-sm text-blue-200 ${animate ? "animate-[slideUpIn_0.9s_ease-out_forwards]" : "translate-y-full"}`}>
//                             {card.desc[(index + 1) % card.desc.length]}
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* TEXT SECTION */}
//         <div className="flex-1 text-center md:text-left md:pl-4 lg:pl-2 xl:pl-16 mb-4 md:mb-0 order-1 md:order-2">
//           <h2 className="text-[24px] md:text-[30px] lg:text-[30px] xl:text-[40px] font-semibold text-[#07122C] md:text-[#213174] lg:text-[#213174]leading-tight">
//             Our Vision & Approach
//           </h2>

//           {/* TABLET & DESKTOP TEXT */}
//           <p className="hidden md:block mt-4 text-[14px] lg:text-[14px] xl:text-[16px] max-w-[580px] text-[#212121] leading-relaxed">
//              HawkStack Technologies helps organizations design, modernize, and run secure, scalable cloud-native 
//              platforms. We empower teams with strong architecture, automation-first practices, and hands-on engineering 
//              expertise. By combining DevOps, cloud, automation, and security, we deliver production-ready Kubernetes and 
//              OpenShift platforms.
//           </p>

//           {/* MOBILE ONLY TEXT */}
//           <p className="block md:hidden mt-4 text-[14px] max-w-[580px] text-[#212121] leading-relaxed mx-auto">
//              HawkStack Technologies designs, modernizes, and operates secure, 
//              scalable cloud-native platforms with production-ready Kubernetes and 
//              OpenShift solutions.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { cards } from "@/constants";

const POSITIONS = [
  {
    wrapper: "z-10",
    card: "w-[154px] h-[154px] md:w-[200px] md:h-[200px] xl:w-[261px] xl:h-[261px] bg-[#0B1F4A] text-white",
    // Further reduced imgBox height on mobile (h-[55px]) and margins to free up vertical space
    imgBox: "mb-1 md:mb-4 xl:mb-5 flex h-[55px] w-[80px] md:h-[90px] md:w-[110px] xl:h-[120px] xl:w-[145px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400",
    img: "h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 filter brightness-0 invert",
  },
  {
    wrapper: "absolute top-0 md:top-4 lg:top-20 xl:top-8 left-[-60px] md:left-[-110px] lg:left-[-60px] xl:left-[-120px]",
    card: "w-[102px] h-[102px] md:w-[140px] md:h-[140px] xl:w-[172px] xl:h-[172px] bg-white",
    imgBox: "w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:w-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
    img: "w-full h-full",
  },
  {
    wrapper: "absolute bottom-0 md:bottom-4 lg:bottom-20 xl:bottom-8 left-[-60px] md:left-[-110px] lg:left-[-60px] xl:left-[-120px]",
    card: "w-[102px] h-[102px] md:w-[140px] md:h-[140px] xl:w-[172px] xl:h-[172px] bg-white",
    imgBox: "w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:w-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
    img: "w-full h-full",
  },
];

export default function VisionApproach() {
  const [order, setOrder] = useState(() => [...cards]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const rotate = setInterval(() => {
      setOrder((p) => [p[1], p[2], p[0]]);
      setIndex(0);
    }, 9000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    const wait = setTimeout(() => {
      setAnimate(true);
      const anim = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => (i + 1) % (order[0]?.desc?.length || 1));
      }, 900);
      return () => clearTimeout(anim);
    }, 2000);
    return () => clearTimeout(wait);
  }, [index, order]);

  return (
    <section className="w-full py-8 md:py-8 font-lexend overflow-hidden">
      <div className="mx-auto max-w-[1411px] flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 md:gap-0 lg:gap-2 xl:gap-0">
        
        {/* VISUAL SECTION */}
        <div className="relative flex justify-center items-center flex-shrink-0 
                        w-full md:w-1/2 lg:w-[500px] xl:w-[620px] 
                        h-[250px] md:h-[400px] lg:h-[500px]
                        translate-x-4 md:translate-x-0 lg:translate-x-0
                        scale-[0.8] sm:scale-[0.9] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 
                        transition-transform duration-500 order-2 md:order-1">
          
          <div className="relative w-[280px] md:w-[320px] lg:w-[380px] h-full ml-20 flex items-center justify-center">
            {order.slice(0, 3).map((card, i) => {
              const p = POSITIONS[i];
              return (
                <div key={card.title} className={`${p.wrapper} transition-all duration-700`}>
                  <div className={`rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-2 md:p-4 xl:p-5 ${p.card}`}>
                    <div className={p.imgBox}>
                      <img
                        src={card.image}
                        alt=""
                        className={`object-contain ${p.img} ${card.title === "Vision" && i !== 0 ? "invert brightness-90" : ""}`}
                      />
                    </div>
                    {i === 0 && (
                      <div className="text-center w-full">
                        <h3 className="text-sm md:text-base xl:text-lg font-semibold leading-none">
                          {card.title}
                        </h3>
                        <div className="relative mt-1 h-6 md:h-8 w-full overflow-hidden flex-shrink-0">
                          <p className={`absolute inset-0 flex items-center justify-center w-full text-[10px] md:text-xs xl:text-sm text-blue-200 leading-none ${animate ? "animate-[slideUpOut_0.9s_ease-out_forwards]" : ""}`}>
                            {card.desc[index]}
                          </p>
                          <p className={`absolute inset-0 flex items-center justify-center w-full text-[10px] md:text-xs xl:text-sm text-blue-200 leading-none ${animate ? "animate-[slideUpIn_0.9s_ease-out_forwards]" : "translate-y-full"}`}>
                            {card.desc[(index + 1) % card.desc.length]}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 text-center md:text-left md:pl-4 lg:pl-2 xl:pl-16 mb-4 md:mb-0 order-1 md:order-2">
          <h2 className="text-[24px] md:text-[30px] lg:text-[30px] xl:text-[40px] font-semibold text-[#07122C] md:text-[#213174] lg:text-[#213174] leading-tight">
            Our Vision & Approach
          </h2>

          <p className="hidden md:block mt-4 text-[14px] lg:text-[14px] xl:text-[16px] max-w-[580px] text-[#212121] leading-relaxed">
            HawkStack Technologies helps organizations design, modernize, and run secure, scalable cloud-native 
            platforms. We empower teams with strong architecture, automation-first practices, and hands-on engineering 
            expertise. By combining DevOps, cloud, automation, and security, we deliver production-ready Kubernetes and 
            OpenShift platforms.
          </p>

          <p className="block md:hidden mt-4 text-[14px] max-w-[580px] text-[#212121] leading-relaxed mx-auto">
            HawkStack Technologies designs, modernizes, and operates secure, 
            scalable cloud-native platforms with production-ready Kubernetes and 
            OpenShift solutions.
          </p>
        </div>

      </div>
    </section>
  );
}