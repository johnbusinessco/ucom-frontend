'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNavScroll } from '../../hooks/useNavScroll';
import { UCOM_LOGO } from '../../../lib/media';

const navUnderline = "relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-white after:transition-[width] after:duration-300 hover:after:w-[90%]";

const DROPDOWN_TABS = ['Products', 'Solutions', 'Resources'] as const;

export default function Header() {
  const { bg } = useNavScroll();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[9999] flex items-center justify-between px-[5%] py-8 transition-colors duration-500"
      style={{ background: bg }}
      onMouseLeave={() => setOpen(null)}
    >
      {/* ── Logo ── */}
      <Link href="/">
        <Image
          src={UCOM_LOGO}
          alt="UCOM"
          width={120}
          height={40}
          className="h-auto w-auto"
          priority
        />
      </Link>

      {/* ── Nav ── */}
      <nav className="flex items-center" style={{ gap: 63 }}>
        {DROPDOWN_TABS.map(tab => (
          <div key={tab} className="relative" onMouseEnter={() => setOpen(tab)}>
            <button className={`${navUnderline} text-white text-[18px] font-medium bg-transparent border-0 cursor-pointer`}>
              {tab}
            </button>

            {open === tab && (
              <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl z-[9999] min-h-[120px]" />
            )}
          </div>
        ))}

        {/* Pricing — no dropdown, not functional */}
        <span className={`${navUnderline} text-white text-[18px] font-medium cursor-default`}>
          Pricing
        </span>
      </nav>

      {/* ── Enquire Now ── */}
      <a href="/enquire" className="btn-outline btn-outline-header" style={{ width: 'auto', padding: '12px 38px' }}>
        Enquire Now
      </a>
    </header>
  );
}
