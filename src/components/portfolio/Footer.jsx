import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-2xl border-t border-outline-variant/50 shadow-[0_-2px_12px_rgba(0,0,0,0.05)] dark:bg-surface-container-low dark:border-outline-variant/70 dark:shadow-[0_-2px_16px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="font-label-code-sm text-label-code-sm text-secondary tracking-normal">Building resilient systems, one container at a time.</p>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Copyright © Dương Nguyễn. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-space-sm">
          <a aria-label="GitHub Profile" className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors dark:bg-surface-container-high dark:text-on-surface-variant dark:hover:bg-surface-container-highest dark:hover:text-on-surface" href="https://github.com" rel="noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a aria-label="LinkedIn Network" className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors dark:bg-surface-container-high dark:text-on-surface-variant dark:hover:bg-surface-container-highest dark:hover:text-on-surface" href="https://linkedin.com" rel="noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a aria-label="Contact Inquiries" className="w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors dark:bg-surface-container-high dark:text-on-surface-variant dark:hover:bg-surface-container-highest dark:hover:text-on-surface" href="/contact">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;