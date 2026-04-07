import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const socialIcons = [
  {
    src: "/images/socialmedia/facebook.webp",
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61560462899701",
  },
  {
    src: "/images/socialmedia/linkedin.webp",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/hawkstack-technologies/?viewAsMember=true",
  },
  {
    src: "/images/socialmedia/twitter.webp",
    alt: "Twitter",
    href: "https://x.com/hawkstack_tech",
  },
  {
    src: "/images/socialmedia/instagram.webp",
    alt: "Instagram",
    href: "https://www.instagram.com/hawkstack_technologies?fbclid=IwY2xjawRBswFleHRuA2FlbQIxMABicmlkETF1NnRJMlJKZ04wQjA5Zm53c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmxSybTnC9oBeX64YhLA6SF-yFdo51O1ohTkZuAUJXZU04Y31a6qUTInJrQ3_aem_94dcfMKmjWHbuzbLsDZXSw",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="font-lexend font-light bg-black relative overflow-hidden text-white w-full">
      {/* Blur */}
      <div className="absolute right-[-200px] bottom-[-200px] w-[649px] h-[649px] rounded-full bg-[#0E245AB2] blur-[200px] z-0" />

      <div className="relative z-10 px-6 md:px-10 lg:px-[83px] py-[53px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Image
            src="/images/hawkstack-logo.webp"
            alt="HawkStack"
            width={120}
            height={40}
            className="bg-white rounded-[10px]"
          />

          <div className="flex gap-3">
            {socialIcons.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <Image src={icon.src} alt={icon.alt} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* ================= MOBILE (< md) ================= */}
        <div className="block md:hidden space-y-10">
          <div>
            <h4 className="mb-3 font-semibold text-[16px]">About us</h4>
            <p className="text-sm leading-[150%] text-gray-300">
              HawkStack helps businesses accelerate digital transformation
              through cloud platforms, automation, and modern DevOps practices.
              From strategy to execution, we build systems that are resilient,
              scalable, and ready for the future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>App Modernization</li>
                <li>KubeVirt</li>
                <li>Automation</li>
                <li>Cloud Platform Operation</li>
                <li>Consulting Services</li>
                <li>Training Services</li>
                <li>Kubernetes as a Service</li>
              </ul>
            </div>

            <div className="md:-ml-80">
              <h4 className="mb-3 font-semibold">Training</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Mirantis</li>
                <li>CNCF</li>
                <li>Redhat Solution</li>
                <li>The Linux Foundation</li>
                <li>Customised Training</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 font-semibold">Solution</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>RedHat</li>
                <li>CNCF</li>
                <li>Mirantis</li>
                <li>AWS</li>
                <li>GCP</li>
                <li>Azure</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 text-blue-400 text-sm">
              <Link href="#">Blog</Link>
              <Link href="#">Career</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Partner</Link>
              <Link href="#">Events & Webinars</Link>
              <Link href="#">Trends & Insights</Link>
            </div>
          </div>
        </div>

        {/* ================= IPAD / TABLET (md only) ================= */}
        <div className="hidden md:grid lg:hidden mt-12 grid-cols-[1fr_1fr_1fr_1.6fr] gap-x-6 text-[16px]">
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>App Modernization</li>
              <li>KubeVirt</li>
              <li>Automation</li>
              <li>Cloud Platform Operation</li>
              <li>Consulting Services</li>
              <li>Training Services</li>
              <li>Kubernetes as a Service</li>
            </ul>
          </div>

          <div className="col-span-2 grid grid-cols-5 gap-x-35">
            <div>
              <h4 className="mb-4 font-semibold">Solution</h4>
              <ul className="space-y-3 text-gray-300">
                <li>RedHat</li>
                <li>CNCF</li>
                <li>Mirantis</li>
                <li>AWS</li>
                <li>GCP</li>
                <li>Azure</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Training</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Mirantis</li>
                <li>CNCF</li>
                <li>Redhat Solution</li>
                <li>The Linux Foundation</li>
                <li>Customised Training</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">About us</h4>
            <p className="text-sm leading-[150%] text-gray-300 mb-6">
              HawkStack helps businesses accelerate digital transformation
              through cloud platforms, automation, and modern DevOps practices.
              From strategy to execution, we build systems that are resilient,
              scalable, and ready for the future.
            </p>

            <div className="grid grid-cols-2 gap-4 text-blue-400 text-sm">
              <Link href="#">Blog</Link>
              <Link href="#">Career</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Partner</Link>
              <Link href="#">Events & Webinars</Link>
              <Link href="#">Trends & Insights</Link>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP (lg+) ================= */}
        <div className="hidden lg:grid mt-2 grid-cols-4 gap-x-4 text-[16px]">
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>App Modernization</li>
              <li>KubeVirt</li>
              <li>Automation</li>
              <li>Cloud Platform Operation</li>
              <li>Consulting Services</li>
              <li>Training Services</li>
              <li>Kubernetes as a Service</li>
            </ul>
          </div>

          <div className="ml-10">
            <h4 className="mb-4 font-semibold">Solution</h4>
            <ul className="space-y-3 text-gray-300">
              <li>RedHat</li>
              <li>CNCF</li>
              <li>Mirantis</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Azure</li>
            </ul>
          </div>

          <div className="-ml-6">
            <h4 className="mb-4 font-semibold">Training</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Mirantis</li>
              <li>CNCF</li>
              <li>Redhat Solution</li>
              <li>The Linux Foundation</li>
              <li>Customised Training</li>
            </ul>
          </div>

          <div className="-ml-10">
            <h4 className="mb-4 font-semibold text-[16px]">About us</h4>
            <p className="mb-6 text-sm leading-[150%] tracking-[-0.03em] text-gray-300 text-[16px]">
              HawkStack helps businesses accelerate digital transformation
              through cloud platforms, automation, and modern DevOps practices.
              From strategy to execution, we build systems that are resilient,
              scalable, and ready for the future.
            </p>

            <div className="grid grid-cols-2 gap-4 text-blue-400 text-[18px]">
              <Link href="#">Blog</Link>
              <Link href="#">Career</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Partner</Link>
              <Link href="#">Events & Webinars</Link>
              <Link href="#">Trends & Insights</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-blue-400 text-[18px]">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Code of Conduct</Link>
        </div>

        <div className="text-center text-sm mt-12 text-gray-300">
          © 2026 HawkStack. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
