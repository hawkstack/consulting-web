import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer-bg text-white w-full ">
      <div className=" px-[83px] py-[53px] ">
        {/* Top section */}
        <div className="flex justify-between ">
          <Image
            src="/images/hawkstack.logo.webp"
            alt="HawkStack"
            width={140}
            height={40}
            className="mb-8 bg-white rounded-[10px] "
          />
          <div className="flex gap-4 h-10  ">
            <Image
              src="/images/socialmedia/facebook-logo.webp"
              alt="HawkStack Footer Image"
              width={40}
              height={10}
              className="bg-white rounded-full p-2"
            />
            <Image
              src="/images/socialmedia/linkedin-logo.webp"
              alt="HawkStack Footer Image"
              width={40}
              height={10}
              className="bg-white rounded-full p-2"
            />
            <Image
              src="/images/socialmedia/twitter-logo.webp"
              alt="HawkStack Footer Image"
              width={40}
              height={10}
              className="bg-white rounded-full p-2"
            />
            <Image
              src="/images/socialmedia/instagram-logo.webp"
              alt="HawkStack Footer Image"
              width={40}
              height={10}
              className="bg-white rounded-full p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo + Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
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
          <div>
            <h4 className="mb-4 text-sm font-semibold">Solution</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>RedHat</li>
              <li>CNCF</li>
              <li>Mirantis</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Azure</li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Training</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Mirantis</li>
              <li>CNCF</li>
              <li>Redhat Solution</li>
              <li>The Linux Foundation</li>
              <li>Customised Training</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">About us</h4>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              HawkStack helps businesses accelerate digital transformation
              through cloud platforms, automation, and modern DevOps practices.
              From strategy to execution, we build systems that are resilient,
              scalable, and ready for the future.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-blue-400">
              <Link href="#">Blog</Link>
              <Link href="#">Career</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Partner</Link>
              <Link href="#">Events & Webinars</Link>
              <Link href="#">Trends & Insights</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* Bottom links */}
        <div className="flex flex-col items-center gap-6 text-sm text-gray-400 md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Code of Conduct</Link>
          </div>

          <p>© 2025 HawkStack. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
