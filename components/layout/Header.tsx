import Link from 'next/link';
import HeaderDropDown from '@/components/layout/HeaderDropDown';
import ProductsMenu from '@/components/layout/menus/ProductsMenu';
import SolutionsMenu from '@/components/layout/menus/SolutionsMenu';
import ResourcesMenu from '@/components/layout/menus/ResourcesMenu';

export default function Header() {
  return (
    <header className="relative flex justify-around items-center p-4 bg-brand-navy">
      <HeaderDropDown name="Products" content={<ProductsMenu />} />
      <HeaderDropDown name="Solutions" content={<SolutionsMenu />} />
      <h6><Link href="/pricing" className="text-white hover:text-white/50 transition-colors">Pricing</Link></h6>
      <HeaderDropDown name="Resources" content={<ResourcesMenu />} />
      <h6><Link href="/about" className="text-white hover:text-white/50 transition-colors">About Us</Link></h6>
      <h6><Link href="/contact" className="text-white px-4 py-2 rounded-lg bg-brand-pink font-medium">Get started</Link></h6>
    </header>
  );
}
