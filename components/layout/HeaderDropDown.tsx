'use client';

import { useState } from 'react';

interface HeaderDropDownProps {
  name: string;
  content: React.ReactNode;
}

export default function HeaderDropDown({ name, content }: HeaderDropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <h6><button className="text-white hover:text-white/50 transition-colors">{name}</button></h6>

      {open && (
        <div className="absolute top-full left-0 w-full pt-2">
          {content}
        </div>
      )}
    </div>
  );
}
