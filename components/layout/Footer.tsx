import {
  socialIcons,
  servicesLinks,
  trainingLinks,
  solutionLinks,
  companyLinks,
  policyLinks,
} from "@/data/footer/footer";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { useTranslations } from "next-intl";

export const Footer = (): JSX.Element => {
  const tFooter = useTranslations("Footer");
  return (
    <footer className="font-lexend font-light bg-black relative overflow-hidden text-white w-full">
      {/* Blur */}
      <div className="absolute right-[-200px] bottom-[-200px] w-[649px] h-[649px] rounded-full bg-[#0E245AB2] blur-[200px] z-0" />

      <div className="relative z-10 px-6 md:px-10 lg:px-[83px] py-[53px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="inline-block">
            <Image
              src="/images/hawkstack-logo.webp"
              alt="HawkStack"
              width={120}
              height={40}
              className="bg-white rounded-[10px]"
            />
          </Link>

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
            <h4 className="mb-3 font-semibold text-[16px]">
              {tFooter("about")}
            </h4>
            <p className="text-sm leading-[150%] text-gray-300">
              {tFooter("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 font-semibold">{tFooter("services")}</h4>

              <ul className="space-y-2 text-sm text-gray-300">
                {servicesLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      {tFooter(`links.services.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:-ml-80">
              <h4 className="mb-3 font-semibold">{tFooter("training")}</h4>

              <ul className="space-y-2 text-sm text-gray-300">
                {trainingLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      {tFooter(`links.training.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 font-semibold">{tFooter("products")}</h4>

              <ul className="space-y-2 text-sm text-gray-300">
                {solutionLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      {tFooter(`links.products.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 text-blue-400 text-sm">
              {companyLinks.map((item) => (
                <Link key={item.id} href={item.href}>
                  {tFooter(`links.company.${item.id}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= IPAD / TABLET (md only) ================= */}
        <div className="hidden md:grid lg:hidden mt-12 grid-cols-[1fr_1fr_1fr_1.6fr] gap-x-6 text-[16px]">
          <div>
            <h4 className="mb-4 font-semibold">{tFooter("services")}</h4>

            <ul className="space-y-3 text-gray-300">
              {servicesLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {tFooter(`links.services.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 grid grid-cols-5 gap-x-35">
            <div>
              <h4 className="mb-4 font-semibold">{tFooter("products")}</h4>

              <ul className="space-y-3 text-gray-300">
                {solutionLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      {tFooter(`links.products.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{tFooter("training")}</h4>

              <ul className="space-y-3 text-gray-300">
                {trainingLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      {tFooter(`links.training.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{tFooter("about")}</h4>

            <p className="text-sm leading-[150%] text-gray-300 mb-6">
              {tFooter("description")}
            </p>

            <div className="grid grid-cols-2 gap-4 text-blue-400 text-sm">
              {companyLinks.map((item) => (
                <Link key={item.id} href={item.href}>
                  {tFooter(`links.company.${item.id}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP (lg+) ================= */}
        <div className="hidden lg:grid mt-2 grid-cols-4 gap-x-4 text-[16px]">
          <div>
            <h4 className="mb-4 font-semibold">{tFooter("services")}</h4>

            <ul className="space-y-3 text-gray-300">
              {servicesLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {tFooter(`links.services.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-10">
            <h4 className="mb-4 font-semibold">{tFooter("products")}</h4>

            <ul className="space-y-3 text-gray-300">
              {solutionLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {tFooter(`links.products.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="-ml-6">
            <h4 className="mb-4 font-semibold">{tFooter("training")}</h4>

            <ul className="space-y-3 text-gray-300">
              {trainingLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {tFooter(`links.training.${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="-ml-10">
            <h4 className="mb-4 font-semibold text-[16px]">
              {tFooter("about")}
            </h4>

            <p className="mb-6 text-sm leading-[150%] tracking-[-0.03em] text-gray-300 text-[16px]">
              {tFooter("description")}
            </p>

            <div className="grid grid-cols-2 gap-4 text-blue-400 text-[18px]">
              {companyLinks.map((item) => (
                <Link key={item.id} href={item.href}>
                  {tFooter(`links.company.${item.id}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-blue-400 text-[18px]">
          {policyLinks.map((item) =>
            item.href ? (
              <Link key={item.id} href={item.href} className="cursor-pointer">
                {tFooter(`links.policies.${item.id}`)}
              </Link>
            ) : (
              <span key={item.id}>{tFooter(`links.policies.${item.id}`)}</span>
            ),
          )}
        </div>

        <div className="text-center text-sm mt-12 text-gray-300">
          {tFooter("rights")}
        </div>
      </div>
    </footer>
  );
};
