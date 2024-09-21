"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { HoveredLink, Menu,MenuItem,ProductItem } from './ui/navbar-menu';
import { cn } from '@/lib/utils';
import { HoverBorderGradient } from './ui/hover-border-gradient';



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Contact Us'>
        
        </MenuItem>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="   dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"

      >
        <Link href={"/login"}>Login</Link>
      </HoverBorderGradient>
        
      </Menu>
    </div>
  );
}

