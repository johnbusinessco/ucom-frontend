import Image from 'next/image';
import { BTN_ARROW, SMS_PHONE_PHOTO, SMS_ARROW_1, SMS_ARROW_2, SMS_ARROW_3 } from '../../../lib/media';

export default function StayConnected() {
  return (
    <section className="py-10 md:py-[60px] lg:py-20">
      <div className="fixed-width-container">

        <h3 className="text-[#312c70] mb-12">
          Stay Connected with <span className="text-[#E25AAB]">UCOM SMS</span>
        </h3>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-y-8 md:h-[550px]">

          {/* Column 1 — arrow then text */}
          <div className="flex flex-col justify-end gap-5 order-3 md:order-none md:pr-8">
            <Image
              src={SMS_ARROW_1}
              alt=""
              width={120}
              height={140}
              className="hidden md:block self-end w-auto h-[140px]"
              unoptimized
            />
            <h5 className="text-[#312c70]">
              UCOM's <span className="text-[#E25AAB]">SoftPhone app</span> is one of the only
              solutions on the market that offer in-app SMS capabilities.
            </h5>
          </div>

          {/* Column 2 — phone image */}
          <div className="flex justify-center items-center order-1 md:order-none">
            <Image
              src={SMS_PHONE_PHOTO}
              alt="UCOM SMS on mobile"
              width={280}
              height={414}
              className="w-auto h-[414px]"
              unoptimized
            />
          </div>

          {/* Column 3 — text, arrow, then arrow + learn more on same row */}
          <div className="flex flex-col gap-5 order-2 md:order-none">
            <h5 className="text-[#312c70] text-right">
              Stay connected with your clients and keep your personal number private by texting
              them with your <span className="text-[#E25AAB]">business phone number.</span>
            </h5>
            <Image
              src={SMS_ARROW_2}
              alt=""
              width={120}
              height={120}
              className="hidden md:block self-start w-auto h-[150px] ml-[60px]"
              unoptimized
            />
            <div className="flex items-start justify-start gap-4 mt-auto mb-[70px]">
              <Image
                src={SMS_ARROW_3}
                alt=""
                width={108}
                height={108}
                className="hidden md:block w-auto h-[108px]"
                unoptimized
              />
              <a
                href="#"
                className="btn-outline w-auto py-3 px-7 gap-2.5 text-[#312c70] bg-white active:scale-[0.95] transition-transform duration-100"
              >
                Learn more
                <Image src={BTN_ARROW} alt="" width={16} height={16} className="shrink-0" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
