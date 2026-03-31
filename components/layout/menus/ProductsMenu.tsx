import Image from 'next/image';
import MenuColumn from '@/components/layout/menus/MenuColumn';
import MenuEntry from '@/components/layout/menus/MenuEntry';

function SoftPhoneCard() {
  return (
    <div className="mt-auto rounded-2xl bg-gray-100 p-4 text-sm">
      <h5 className="text-gray-800 mb-3">Explore the UCOM SoftPhone App ›</h5>
      <div className="flex gap-2">
        <Image src="/images/softphone-video.png" alt="Video" width={40} height={40} className="rounded-xl" />
        <Image src="/images/softphone-chat.png" alt="Chat" width={40} height={40} className="rounded-xl" />
        <Image src="/images/softphone-phone.png" alt="Phone" width={40} height={40} className="rounded-xl" />
      </div>
    </div>
  );
}

export default function ProductsMenu() {
  return (
    <div className="flex bg-white rounded-2xl shadow-xl border border-gray-100 p-8 gap-0">

      <MenuColumn title="Phone Systems">
        <MenuEntry
          name="UCOM PBX"
          href="/products/ucom-pbx"
          description="Flexible. Feature Rich. Future Ready."
          plansHref="/products/ucom-pbx/plans"
        />
        <MenuEntry
          name="UCOM GO"
          href="/products/ucom-go"
          description="The Perfect Solution for Growing Teams"
          plansHref="/products/ucom-go/plans"
        />
        <MenuEntry
          name="SIP Trunks"
          href="/products/sip-trunks"
          description="Highly Scalable, Secure and Resilient SIP Trunks"
          plansHref="/products/sip-trunks/plans"
        />
      </MenuColumn>

      <MenuColumn title="Internet">
        <MenuEntry
          name="Business nbn"
          href="/products/business-nbn"
          description="Better Value business nbn® Plans"
          plansHref="/products/business-nbn/plans"
        />
        <MenuEntry
          name="Wireless nbn"
          href="/products/wireless-nbn"
          description="Now Even Faster Fixed Wireless Broadband"
          plansHref="/products/wireless-nbn/plans"
        />
        <MenuEntry
          name="Enterprise nbn"
          href="/products/enterprise-nbn"
          description="Symmetrical Speeds for Super-Fast Internet"
          plansHref="/products/enterprise-nbn/plans"
        />
      </MenuColumn>

      <MenuColumn title="Mobile">
        <MenuEntry
          name="UCOM Mobile"
          href="/products/ucom-mobile"
          description="Great Value SIM Only Mobile Plans"
          plansHref="/products/ucom-mobile/plans"
        />
        <MenuEntry
          name="IoT SIMS"
          href="/products/iot-sims"
          description="Reliable connectivity for IoT devices"
          plansHref="/products/iot-sims/plans"
        />
        <SoftPhoneCard />
      </MenuColumn>

    </div>
  );
}
