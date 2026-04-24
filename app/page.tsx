import Image from 'next/image';
import HeroHeadline from './components/home/HeroHeadline';
import PhoneSystems from './components/home/PhoneSystems';
import StayConnected from './components/home/StayConnected';
import SuitAnyBusiness from './components/home/SuitAnyBusiness';
import { HERO_GRADIENT_BG } from '../lib/media';

export default async function Home() {
  return (
    <main>
      {/* Gradient background — spans the full hero area, components layer on top */}
      <div className="relative pt-28">
        <Image
          src={HERO_GRADIENT_BG}
          alt=""
          fill
          priority
          unoptimized
          className="object-contain object-top -z-10"
        />
        <HeroHeadline />
        <PhoneSystems />
        <StayConnected />
        <SuitAnyBusiness />
      </div>
    </main>
  );
}