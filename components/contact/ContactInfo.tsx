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
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0F172A]">{data.title}</h2>
        <p className="text-base text-[#64748B] max-w-[580px] mt-1">
          {data.description}
        </p>
      </div>

      {/* Map + Address Row */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Map */}
        <div className="w-full md:w-[55%] rounded-xl overflow-hidden">
          <img
            src={data.mapImage}
            alt="map"
            className="w-full h-[160px] object-cover"
          />
        </div>

        {/* Address Card */}
        <div className="w-full md:w-[45%] bg-white rounded-xl px-1 py-2 shadow-sm flex gap-1">
          <div className="p-1 rounded-lg flex items-start ">
            {/* Your Custom Icon */}
            <Gps />
          </div>
          <div className="p-1">
            <p className="text-base font-medium text-[#0F172A] whitespace-nowrap">
              Corporate Office Address
            </p>
            <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
              {data.address}
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="space-y-2">
        {/* Phone */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div>
            <Phone />
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F172A]">Phone</p>
            <p className="text-sm text-[#64748B]">{data.phone}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div>
            <Work />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#0F172A]">Work Hours</p>
            <p className="text-[12px] text-[#64748B]">{data.hours}</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
          <div>
            {/* Custom Email Icon */}
            <Email />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#0F172A]">Email</p>
            <p className="text-[12px] text-[#64748B]">{data.email}</p>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center gap-3">
        <p className="text-xl font-medium text-[#0F172A]">Social Media:</p>

        <div className="flex gap-2">
          {data.socials.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-md bg-[#2563EB]"
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
