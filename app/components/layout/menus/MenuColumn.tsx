interface MenuColumnProps {
  title: string;
  children: React.ReactNode;
}

export default function MenuColumn({ title, children }: MenuColumnProps) {
  return (
    <div className="flex flex-col gap-6 px-8 first:pl-0 last:pr-0 border-r border-gray-100 last:border-r-0">
      <h5 className="font-normal text-gray-400 uppercase tracking-widest">{title}</h5>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
