import React from 'react';
import { PlatformSectionData } from '@/types/home/home';
import Link from 'next/link';
import Image from 'next/image';
import { PLATFORM_ICONS } from '@/components/icons/Platform/PlatformIcons';

type PlatformProps = {
  data: PlatformSectionData;
}

export default function PlatformSection({ data } : PlatformProps) {
  return (
    <section className="bg-[#040B10] py-10 md:py-15 px-6 lg:px-10 xl:px-15 text-white font-lexend overflow-hidden relative">
    <div className="absolute inset-0 left-0 w-full z-10 pointer-events-none">
        <Image
          src={data.bgImage}
          alt="Background Decoration"
          fill
          className="object-contain object-top md:object-left opacity-50" 
          priority 
        />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-4 z-30">      
        <div className="w-full lg:w-[35%] text-center lg:text-left z-10 lg:px-0 px-8 md:mb-6">
          <h2 className="text-white text-[20px] md:text-[32px] lg:text-[30px] xl:text-[40px] font-bold tracking-tight mb-4">
            {data.title.map((line, index) => (
              <span key={index}>
                {line}
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span> 
              </span>
            ))}
          </h2>
          <p className="hidden md:block md:text-[14px] lg:text-[13px] xl:text-[16px] font-light leading-relaxed lg:max-w-[450px]">
            {data.description}
          </p>
        </div>

        <div className="w-full lg:w-[70%] md:w-[70%] grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-4 z-30">
          {data.features.map((feature) => (
            <div 
              key={feature.id}
              className="group py-3 px-2 md:p-4 xl:p-3 rounded-2xl border border-[#2B7FFF]/40 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 43, 0.5) 0%, rgba(29, 41, 61, 0.3) 100%)'
              }}
            >
              <div>
                <div className="mb-4">
                  {PLATFORM_ICONS[feature.icon as keyof typeof PLATFORM_ICONS]}
                </div>
                <h3 className="text-[12px] md:text-[16px] lg:text-[13px] xl:text-[18px] font-semibold mb-3">
                  {feature.title}
                </h3>
              </div>
              
              <div className="border border-[#90A1B9] flex items-center justify-between mb-3"/>

              <div className="flex items-center justify-between">
                <Link href={feature.link} className="text-[12px] text-white font-Regular ">
                  Know more
                </Link>
                <span>
                  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7729 2.14103C14.6312 2.02843 14.5174 1.89247 14.4382 1.74126C14.359 1.59006 14.3161 1.4267 14.312 1.26094C14.3079 1.09518 14.3427 0.930411 14.4144 0.776464C14.4861 0.622516 14.5931 0.482544 14.7291 0.364896C14.8652 0.247248 15.0274 0.154336 15.2061 0.0917025C15.3848 0.0290687 15.5764 -0.00200336 15.7695 0.000339237C15.9625 0.00268183 16.153 0.038391 16.3296 0.105337C16.5062 0.172284 16.6653 0.269095 16.7974 0.389997L24.4909 6.95142C24.7611 7.18209 24.9136 7.49543 24.9149 7.8226C24.9163 8.14977 24.7663 8.46402 24.4981 8.69632L16.8584 15.304C16.7273 15.4257 16.569 15.5235 16.3929 15.5915C16.2169 15.6595 16.0267 15.6963 15.8337 15.6998C15.6407 15.7033 15.4488 15.6734 15.2696 15.6119C15.0903 15.5503 14.9274 15.4584 14.7904 15.3416C14.6534 15.2247 14.5452 15.0854 14.4723 14.9319C14.3994 14.7784 14.3632 14.6138 14.3659 14.4481C14.3686 14.2823 14.4102 14.1187 14.4882 13.967C14.5661 13.8153 14.6788 13.6787 14.8196 13.5652L20.0146 9.072L1.44221 9.12802C1.06096 9.12917 0.694796 9.0002 0.424266 8.76948C0.153738 8.53876 0.00100508 8.22519 -0.000333959 7.89776C-0.001673 7.57032 0.148491 7.25584 0.417126 7.02349C0.685763 6.79115 1.05086 6.65997 1.43211 6.65882L20.0045 6.60279L14.7729 2.14103Z" fill="#2E85FF"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}