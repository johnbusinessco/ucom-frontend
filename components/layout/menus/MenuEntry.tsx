import Link from 'next/link';

interface MenuEntryProps {
  name: string;
  href: string;
  description: string;
  plansHref: string;
}

export default function MenuEntry({ name, href, description, plansHref }: MenuEntryProps) {
  return (
    <div className="flex flex-col gap-1">
      <h4><Link href={href} className="text-brand-pink hover:opacity-75 transition-opacity flex items-center gap-1">{name} <span>›</span></Link></h4>
      <h6 className="text-gray-500 leading-snug">{description}</h6>
      <h6><Link href={plansHref} className="text-blue-500 hover:underline">Plans</Link></h6>
    </div>
  );
}
