import { ContactInfoData } from "@/app/types/contact";
import Gps from "../icons/contact/Gps";
import Phone from "../icons/contact/Phone";
import Work from "../icons/contact/Work";
import Email from "../icons/contact/Email";

interface Props {
  data: ContactInfoData;
}

const ContactInfo = ({ data }: Props) => {
  return (
    <div className="mt-4 md:mt-0 space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold text-[#0F172A] text-center md:text:left">
          {data.title}
        </h2>
        <p className="text-[11px] lg:text-xs xl:text-base text-[#64748B]  max-w-[580px] mt-1 text-center md:text:left">
          {data.description}
        </p>
      </div>

      {/* Map + Address Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Map */}
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src={data.mapImage}
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Address Card */}
        <div className="w-full bg-white rounded-xl px-1 py-2 shadow-sm flex xl:gap-1">
          <div className="p-1 rounded-lg flex items-start ">
            {/* Your Custom Icon */}
            <Gps className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[38px] xl:h-[38px]" />
          </div>
          <div className="p-1">
            <p className="text-xs lg:text-sm xl:text-base font-medium text-[#0F172A] xl:whitespace-nowrap">
              Corporate Office Address
            </p>
            <p className="text-[9px] lg:text-[10px] xl:text-xs text-[#64748B] mt-1 leading-relaxed">
              {data.address}
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-2">
        {/* Phone */}
        <div className="bg-white rounded-xl p-2 lg:p-4 shadow-sm flex items-center gap-3">
          <div>
            <Phone className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[38px] xl:h-[38px]" />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-medium text-[#0F172A]">Phone</p>
            <p className="text-xs lg:text-sm text-[#64748B]">{data.phone}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-2 lg:p-4 shadow-sm flex items-center gap-3">
          <div>
            <Work className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[38px] xl:h-[38px]" />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-medium text-[#0F172A]">Work Hours</p>
            <p className="text-xs lg:text-sm text-[#64748B]">{data.hours}</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl p-2 lg:p-4 shadow-sm flex items-center gap-3">
          <div>
            {/* Custom Email Icon */}
            <Email className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[38px] xl:h-[38px]" />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-medium text-[#0F172A]">Email</p>
            <p className="text-xs lg:text-sm text-[#64748B]">{data.email}</p>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center gap-3">
        <p className="text-lg xl:text-xl font-medium text-[#0F172A]">Social Media:</p>

        <div className="flex gap-2">
          {data.socials.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-[25px] h-[25px] xl:w-[42px] xl:h-[42px] flex items-center justify-center rounded-md bg-[#2563EB]"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
