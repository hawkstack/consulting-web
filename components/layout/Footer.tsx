import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const socialIcons = [
  { src: "/images/socialmedia/facebook.webp", alt: "Facebook" },
  { src: "/images/socialmedia/linkedin.webp", alt: "LinkedIn" },
  { src: "/images/socialmedia/twitter.webp", alt: "Twitter" },
  { src: "/images/socialmedia/instagram.webp", alt: "Instagram" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className=" font-lexend font-light  footer-bg relative overflow-hidden text-[18px] text-white w-full ">
      {/* Blur gradient layer */}
      <div className="absolute right-[-200px] bottom-[-200px] w-[649px] h-[649px] rounded-full bg-[#0E245AB2] blur-[200px] z-0" />
      {/* Content layer */}
      <div className=" relative z-10 px-[83px] py-[53px] ">
        <div className="flex justify-between ">
          <Image
            src="/images/hawkstack.logo.webp"
            alt="HawkStack"
            width={140}
            height={40}
            className="mb-8 bg-white rounded-[10px] "
          />
          {/* Social Icons */}
          <div className="flex gap-4 ">
            {socialIcons.map((icon) => (
              <div
                key={icon.alt}
                className="w-8 h-8  bg-white rounded-full flex items-center justify-center">
                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

        <div className=" mt-2 grid grid-cols-1  md:grid-cols-4 gap-x-4">
          {/* Logo + Services */}
          <div>
            <h4 className="mb-4  font-semibold">Services</h4>
            <ul className="space-y-3  text-gray-300">
              <li>App Modernization</li>
              <li>KubeVirt</li>
              <li>Automation</li>
              <li>Cloud Platform Operation</li>
              <li>Consulting Services</li>
              <li>Training Services</li>
              <li>Kubernetes as a Service</li>
            </ul>
          </div>

          {/* Solution */}
          <div className=" ml-10">
            <h4 className="mb-4 font-semibold ">Solution</h4>
            <ul className="space-y-3  text-gray-300">
              <li>RedHat</li>
              <li>CNCF</li>
              <li>Mirantis</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Azure</li>
            </ul>
          </div>

          {/* Training */}
          <div className="-ml-6">
            <h4 className="mb-4  font-semibold">Training</h4>
            <ul className="space-y-3  text-gray-300">
              <li>Mirantis</li>
              <li>CNCF</li>
              <li>Redhat Solution</li>
              <li>The Linux Foundation</li>
              <li>Customised Training</li>
            </ul>
          </div>

          {/* About */}
          <div className="-ml-10">
            <h4 className="mb-4 text-[16px] font-semibold ">About us</h4>
            <p className="mb-6 text-sm leading-relaxed text-gray-300 leading-[150%] tracking-[-0.03em] ">
              HawkStack helps businesses accelerate digital transformation
              through cloud platforms, automation, and modern DevOps practices.
              From strategy to execution, we build systems that are resilient,
              scalable, and ready for the future.
            </p>

            <div className="grid grid-cols-2 gap-x-1 gap-4  text-blue-400">
              <Link href="#">Blog</Link>
              <Link href="#">Career</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Partner</Link>
              <Link href="#">Events & Webinars</Link>
              <Link href="#">Trends & Insights</Link>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className=" flex justify-center   px-[208px] pt-20 mt-5  text-blue-400 md:flex-row gap-x-9 ">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Code of Conduct</Link>
        </div>

        <div className="text-center text-sm mt-[72px]  text-gray-300">
          <p>© 2025 HawkStack. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
