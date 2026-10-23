import React from 'react';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.6)] border-b border-outline-variant/50 dark:border-outline-variant/70">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Image src="/logo.png" width={180} height={32} alt="Logo" className="h-8 w-auto object-contain" priority />
          <Link className="flex flex-col" href="/">
            <span className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">Dương Nguyễn</span>
            <span className="font-label-code-sm text-label-code-sm text-secondary tracking-normal">Backend &amp; DevOps</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center p-1 bg-surface-container-low/60 rounded-full dark:bg-surface-container-high/60">
          <Link className="px-space-md py-space-xs leading-[20px] transition-colors bg-surface-container text-primary font-medium rounded-full dark:bg-surface-container-high dark:text-primary" href="/">Home</Link>
          <Link className="px-space-md py-space-xs font-headline-sm text-[14px] leading-[20px] text-on-surface-variant hover:text-on-surface transition-colors rounded-full dark:text-on-surface-variant dark:hover:text-on-surface" href="/projects">My Projects</Link>
          <Link className="px-space-md py-space-xs font-headline-sm text-[14px] leading-[20px] text-on-surface-variant hover:text-on-surface transition-colors rounded-full dark:text-on-surface-variant dark:hover:text-on-surface" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-space-sm">
          <ThemeToggler />
          <Link aria-label="Connect via Email" className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container hidden sm:flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors dark:bg-surface-container-high dark:text-on-surface-variant dark:hover:bg-surface-container-highest dark:hover:text-on-surface" href="/contact">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;