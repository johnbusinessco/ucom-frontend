'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BTN_ARROW } from '../../../lib/media';

const BUSINESSES = [
  { label: 'Real Estate' },
  { label: 'Healthcare' },
  { label: 'Legal' },
  { label: 'Hospitality' },
  { label: 'Finance' },
  { label: 'Education' },
  { label: 'Retail' },
  { label: 'Construction' },
];

const N = BUSINESSES.length; // 8

// 8 evenly spaced slots — arc rotated 45° anticlockwise: -135° (upper-left) to +45° (lower-right)
const SLOT_ANGLES = Array.from({ length: N }, (_, j) => -135 + j * (180 / (N - 1)));

const ACTIVE_SLOT = 5; // 3rd from bottom

const RADIUS = 310;
const CENTER_X = 200;
const CENTER_Y = 290;

function sizeForSlot(slot: number) {
  const dist = Math.abs(slot - ACTIVE_SLOT);
  if (dist === 0) return 185;
  if (dist === 1) return 90;
  if (dist === 2) return 75;
  return 62;
}

export default function SuitAnyBusiness() {
  const [tick, setTick] = useState(0);
  const [wrapping, setWrapping] = useState<Set<number>>(new Set());

  useEffect(() => {
    const id = setInterval(() => {
      setTick(prev => {
        const next = prev + 1;
        // Find which businesses are about to land on slot 0 (wrapping from bottom to top)
        const wrappingSet = new Set<number>();
        BUSINESSES.forEach((_, i) => {
          if ((i + next) % N === 0) wrappingSet.add(i);
        });
        setWrapping(wrappingSet);
        // After one frame the element is in position — restore transition + opacity
        requestAnimationFrame(() => setWrapping(new Set()));
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 [@media(max-width:1200px)]:py-[60px] [@media(max-width:800px)]:py-12">
      <div className="fixed-width-container">
        <div className="flex items-center gap-12">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6 shrink-0" style={{ maxWidth: 420 }}>
            <h3 className="text-[#312c70]">
              Phone systems designed to{' '}
              <span className="text-[#E25AAB]">suit any business.</span>
            </h3>
            <h5 className="text-[#312c70] font-normal">
              Connect with your clients from anywhere.
            </h5>
            <a
              href="#"
              className="btn-outline w-auto py-3 px-7 gap-2.5 text-[#312c70] self-start active:scale-[0.95] transition-transform duration-100"
            >
              Learn more
              <Image src={BTN_ARROW} alt="" width={16} height={16} className="shrink-0" />
            </a>
          </div>

          {/* ── Right: half-circle carousel ── */}
          <div className="relative flex-1" style={{ height: 580 }}>
            {BUSINESSES.map((biz, bizIdx) => {
              const slot     = (bizIdx + tick) % N;
              const angle    = SLOT_ANGLES[slot];
              const angleRad = (angle * Math.PI) / 180;
              const size     = sizeForSlot(slot);
              const isActive = slot === ACTIVE_SLOT;
              const isWrap   = wrapping.has(bizIdx);

              const x = CENTER_X + RADIUS * Math.cos(angleRad);
              const y = CENTER_Y + RADIUS * Math.sin(angleRad);

              return (
                <div
                  key={bizIdx}
                  style={{
                    position: 'absolute',
                    left: x - size / 2,
                    top:  y - size / 2,
                    width:  size,
                    height: size,
                    opacity: isWrap ? 0 : 1,
                    zIndex: isActive ? 10 : 2,
                    transition: isWrap
                      ? 'none'
                      : 'left 0.7s cubic-bezier(0.4,0,0.2,1), top 0.7s cubic-bezier(0.4,0,0.2,1), width 0.5s ease, height 0.5s ease, opacity 0.4s ease',
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '100%',
                      overflow: 'hidden',
                      boxShadow: isActive
                        ? '0 12px 40px rgba(0,0,0,0.18)'
                        : '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'box-shadow 0.5s ease',
                    }}
                  >
                    <img
                      src={`/media/2026/04/business-circle-${bizIdx + 1}.png`}
                      alt={biz.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
