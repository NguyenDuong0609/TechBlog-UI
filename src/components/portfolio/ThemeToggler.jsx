'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors dark:bg-surface-container-high dark:text-on-surface-variant dark:hover:bg-surface-container-highest dark:hover:text-on-surface"
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="material-symbols-outlined text-[20px]">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggler;