// import Link from "next/link";
// import { CloudSectionData } from "@/types/home/home";

// type CloudProps = {
//   data: CloudSectionData;
// }

// export default function CloudInnovation({ data }: CloudProps) {
//   return (
//     <section className="relative w-full bg-white pb-16 md:py-24 overflow-hidden font-lexend">
//       {/* Video and Masks Layer */}
//       <div className="absolute top-0 right-0 w-full md:w-[70%] h-[400px] md:h-full z-0 pointer-events-none overflow-hidden">
//         {/* Mobile Rotated Video Container */}
//         <div className="md:hidden block w-full h-full -rotate-90 scale-[1.8]">
//              <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-contain" 
//             >
//             <source src={data.video} type="video/mp4" />
//           </video>
//         </div>

//         {/* Desktop Standard Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="hidden md:block w-full h-full object-cover object-center md:object-right"
//         >
//           <source src={data.video} type="video/mp4" />
//         </video>
//         {/* Left-to-Right Side Mask */}
//         <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/40 to-transparent" />
        
//         <div className="md:hidden absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
//         {/* Bottom-to-Top White Gradient (Figma Detail) */}
//         <div className="hidden md:block absolute bottom-0 left-0 w-full h-18 bg-gradient-to-t from-white via-white/30 to-transparent" />
//       </div>

//       {/* Content Layer */}
//       <div className="container mx-auto px-2 md:px-12 lg:px-20 relative z-20 felx flex-col items-center md:items-start text-center md:text-left">
//         <div className="h-[390px] md:hidden" />
//         <div className="max-w-[650px] mt-6 md:mt-0">
//           <h2 className="text-[20px] md:text-[33px] xl:text-[60px] font-semibold text-black mb-3">
//             {data.title.main} <span className="bg-clip-text text-transparent inline-block"
//               style={{
//                 background: "radial-gradient(50% 50% at 50% 50%, #25B3FF 0%, #0780C0 90.38%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent"
//               }}>{data.title.highlight}</span> <br className="hidden md:block"/>
//             {data.title.suffix}
//           </h2>

//           <p className="text-[#3D3D3D] text-[12px] md:text-[12px] xl:text-[14px] leading-relaxed mb-5 mx-auto md:mx-0 max-w-[340px] md:max-w-[330px] xl:max-w-[470px]">
//             {data.desc}
//           </p>

//           {/* Buttons moved inside the container flow to prevent cutting */}
//           <div className="flex flex-row items-center justify-center md:justify-start gap-3 w-full">
//             <Link href="/careers">
//               <button className="px-5 py-2 md:py-1 xl:px-6 xl:py-2 bg-[#21A3E8] text-white rounded-full font-medium text-[12px] xl:text-[14px] whitespace-nowrap">
//                 Explore Open Roles
//               </button>
//             </Link>
                  
//             <Link href="/about">
//               <button className="px-5 py-2 md:py-1 xl:px-6 xl:py-2 border border-[#21A3E8] text-[#21A3E8] rounded-full font-medium text-[12px] xl:text-[14px] whitespace-nowrap">
//                 See Life at HawkStack
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { CloudSectionData } from "@/types/home/home";

type CloudProps = {
  data: CloudSectionData;
}

export default function CloudInnovation({ data }: CloudProps) {
  return (
    <section className="relative w-full bg-white pb-16 md:py-24 overflow-hidden font-lexend">
      {/* Video and Masks Layer */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Mobile Rotated Video Container */}
        <div className="md:hidden block z-0 ">
             <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain" 
            >
            <source src={data.videoMobile} type="video/mp4" />
          </video>
        </div>

        {/* Desktop Standard Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-full h-full object-contain object-right"
        >
          <source src={data.videoDesktop} type="video/mp4" />
        </video>

        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/40 to-transparent z-10" />
               
       <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        <div className="hidden md:block absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-3 md:px-8 lg:px-10 relative z-20 felx flex-col items-center md:items-start text-center md:text-left">
        <div className="h-[600px] md:hidden" />
        <div className="max-w-[650px] md:mt-0">
          <h2 className="text-[20px] md:text-[33px] xl:text-[60px] font-semibold text-black mb-3">
            {data.title.main} <span className="bg-clip-text text-transparent inline-block"
              style={{
                background: "radial-gradient(50% 50% at 50% 50%, #25B3FF 0%, #0780C0 90.38%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>{data.title.highlight}</span> <br className="hidden md:block"/>
            {data.title.suffix}
          </h2>

          <p className="text-[#3D3D3D] text-[12px] md:text-[12px] xl:text-[14px] leading-relaxed mb-5 mx-auto md:mx-0 max-w-[340px] md:max-w-[330px] xl:max-w-[470px]">
            {data.desc}
          </p>

          {/* Buttons moved inside the container flow to prevent cutting */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-3 w-full">
            <Link href="/">
              <button className="px-5 py-2 md:py-1 xl:px-6 xl:py-2 bg-[#21A3E8] text-white rounded-full font-medium text-[12px] xl:text-[14px] whitespace-nowrap">
                Explore Open Roles
              </button>
            </Link>
                  
            <Link href="/">
              <button className="px-5 py-2 md:py-1 xl:px-6 xl:py-2 border border-[#21A3E8] text-[#21A3E8] rounded-full font-medium text-[12px] xl:text-[14px] whitespace-nowrap">
                See Life at HawkStack
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}