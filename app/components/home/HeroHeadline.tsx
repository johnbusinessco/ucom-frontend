import Image from 'next/image';
import { HERO_DESKTOP_UI } from '../../../lib/media';

export default function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center pt-16 pb-10 px-5">
      <h1 className="text-white mb-4">
        Your Modern Business Telco.
      </h1>

      <h5 className="text-white mb-9" style={{ opacity: 0.9 }}>
        Communicate any way you want with UCOM
      </h5>

      <div className="flex flex-wrap justify-center mb-12" style={{ marginTop: 19, gap: 66 }}>
        <a href="/enquire" className="btn-primary">Enquire now</a>
        <a href="/sign-up" className="btn-outline" style={{ padding: '14px 36px' }}>Sign up</a>
      </div>

      <div style={{ width: '70vw' }}>
        <Image
          src={HERO_DESKTOP_UI}
          alt="UCOM platform"
          width={1276}
          height={712}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="mt-1" style={{ color: '#312c70' }}>
        Trusted by <span style={{ fontWeight: 600, textDecoration: 'underline' }}>thousands of</span> businesses Australia wide.
      </p>

      <a href="#what-we-do" className="btn-pill" style={{ marginTop: 70 }}>
        What we can do for you
      </a>
    </div>
  );
}
