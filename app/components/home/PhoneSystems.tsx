'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PHONE_SYSTEM_PHOTO, GO_CARD_PHOTO, BTN_ARROW } from '../../../lib/media';

const TABS = ['UCOM PBX', 'UCOM Go'] as const;
type Tab = typeof TABS[number];

interface PhoneCardProps {
  photo: string;
  eyebrow: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  bodyBottom?: string;
}

function PhoneCard({ photo, eyebrow, heading, body, bodyBottom = '22%' }: PhoneCardProps) {
  return (
    <div
      className="flex-shrink-0 h-[580px] rounded-[52px] [@media(max-width:1200px)]:h-[480px] [@media(max-width:1200px)]:rounded-[40px] [@media(max-width:800px)]:h-[420px] [@media(max-width:800px)]:rounded-[32px] [@media(max-width:600px)]:h-[340px] [@media(max-width:600px)]:rounded-[24px]"
      style={{ width: '50%', background: '#F0F1F5', overflow: 'hidden', padding: 20, display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      {/* ── Text overlay — top left ── */}
      <div style={{ position: 'absolute', top: 32, left: 36, zIndex: 10 }}>
        <h5 style={{ color: '#312c70', marginBottom: 8 }}>{eyebrow}</h5>
        <h3 style={{ color: '#312c70' }}>{heading}</h3>
      </div>

      {/* ── Learn more — bottom-right of text area, near image concave corner ── */}
      <a href="#" className="btn-outline absolute top-[25%] left-[33%] w-auto py-3 px-7 gap-2.5 z-10 bg-white text-[#312c70] active:scale-[0.95] transition-transform duration-100">
        Learn more
        <Image src={BTN_ARROW} alt="" width={16} height={16} style={{ flexShrink: 0 }} />
      </a>

      {/* ── Bottom text — over image, bottom-left ── */}
      <h4 className="absolute left-[5%] z-10 text-white font-normal" style={{ bottom: bodyBottom }}>{body}</h4>

      {/* ── Background image ── */}
      <div className="flex" style={{ flex: 1, gap: 20 }}>
        <div
          className="rounded-[36px] [@media(max-width:1200px)]:rounded-[28px] [@media(max-width:800px)]:rounded-[22px] [@media(max-width:600px)]:rounded-[16px]"
          style={{
            flex: 1,
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  );
}

export default function PhoneSystems() {
  const [active, setActive] = useState<Tab>('UCOM PBX');

  function handleTab(tab: Tab) {
    setActive(tab);
  }

  const translateX = active === 'UCOM PBX' ? '0%' : '-50%';

  return (
    <section className="py-20 [@media(max-width:1200px)]:py-[60px] [@media(max-width:800px)]:py-12 [@media(max-width:600px)]:py-10">
      <div className="fixed-width-container">

      {/* ── Heading ── */}
      <h3 style={{ color: '#312c70', marginBottom: 8 }}>
        Our Business <span style={{ color: '#E25AAB' }}>Phone Systems</span>
      </h3>
      <h5 style={{ color: '#312c70', fontWeight: 400, marginBottom: 40 }}>
        Discover how our PBX (Private Branch Exchange) or Go Phone systems work for you and your team.
      </h5>

      {/* ── Tabs ── */}
      <div className="flex" style={{ gap: 12, marginBottom: 32 }}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => handleTab(tab)}
            style={{
              padding: '8px 24px',
              borderRadius: 100,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Raleway',
              fontSize: 16,
              fontWeight: 500,
              background: active === tab ? '#E25AAB' : 'transparent',
              color: active === tab ? '#fff' : '#312c70',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Sliding cards ── */}
      <div className="overflow-hidden rounded-[52px] [@media(max-width:1200px)]:rounded-[40px] [@media(max-width:800px)]:rounded-[32px] [@media(max-width:600px)]:rounded-[24px]">
        <div
          style={{
            display: 'flex',
            width: '200%',
            transform: `translateX(${translateX})`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <PhoneCard
            photo={PHONE_SYSTEM_PHOTO}
            eyebrow="A Phone System for Teams needing"
            heading={<>The Ultimate in Flexibility and<br />Capability</>}
            body={<>Get all the lastest PBX features to<br />create an outstanding caller<br />experience and unite our team with an<br />all-in-one comunication system.</>}
          />
          <PhoneCard
            photo={GO_CARD_PHOTO}
            eyebrow="The Mobile PBX solution for"
            heading={<>Freelancers and ever<br />Growing Teams</>}
            body={<>Turn your smartphone into a fully<br />functioning phone system with all the<br />latest call features.</>}
            bodyBottom="26%"
          />
        </div>
      </div>

    </div></section>
  );
}
