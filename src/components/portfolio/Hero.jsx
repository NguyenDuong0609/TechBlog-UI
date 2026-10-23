import React from 'react';
import Link from 'next/link';
import DevImg from '@/components/portfolio/DevImg';

const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      {/* Left Hero Column */}
      <div className="flex-1 flex flex-col items-start space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary text-label-code-sm font-label-code-sm uppercase tracking-wider dark:bg-primary-container dark:text-on-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          BACKEND &amp; DEVOPS ENGINEER
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-[1.1]">
          Hello, my name is <br className="hidden sm:inline" />
          <span className="text-primary tracking-tight">Dương Nguyễn</span>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-xl">
          Engineer specialized in designing high-concurrency backend microservices, resilient on-premise cloud
          infrastructure, and automated zero-downtime CI/CD workflows from A to Z.
        </p>
        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95" href="/contact">
            <span>Contact me</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </Link>
          <a className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all duration-200 font-headline-sm text-sm shadow-sm hover:shadow active:scale-95 dark:bg-surface-container-low dark:text-on-surface dark:hover:bg-surface-container-high" href="https://www.topcv.vn/xem-cv/AFQCAFZVXwEAAQBWA1IAU1ZYBVUCBFVWAwxbAQ3f93" target="_blank" rel="noreferrer">
            <span>View TopCV</span>
            <span className="material-symbols-outlined text-[18px] text-secondary">download</span>
          </a>
        </div>
        {/* Social Links Row */}
        <div className="flex items-center gap-3 pt-3 text-secondary">
          <a aria-label="GitHub" className="w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface transition-all duration-150 shadow-sm dark:bg-surface-container-low dark:text-on-surface dark:hover:bg-surface-container-high" href="https://github.com" rel="noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface transition-all duration-150 shadow-sm dark:bg-surface-container-low dark:text-on-surface dark:hover:bg-surface-container-high" href="https://linkedin.com" rel="noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a aria-label="Direct Email" className="w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface transition-all duration-150 shadow-sm dark:bg-surface-container-low dark:text-on-surface dark:hover:bg-surface-container-high" href="mailto:duong.nguyen@email.com">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
          <div className="h-4 w-px bg-surface-variant mx-1"></div>
          <span className="font-label-code-sm text-label-code-sm text-secondary">Hanoi, Vietnam (UTC+7)</span>
        </div>
      </div>
      {/* Right Hero Visual - Circular Photo with Float Badges */}
      <div className="relative w-full max-w-[480px] lg:w-[480px] flex justify-center items-center">
        {/* Decorative warm ambient blob */}
        <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-primary-fixed/40 blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-6 w-64 h-64 rounded-full bg-secondary-container/50 blur-3xl -z-10 pointer-events-none"></div>
        {/* Framed Engineer Photo with Mask */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <DevImg
            containerStyles="relative w-full h-full mask-hero bg-surface-container-highest dark:bg-surface-container-high"
            imgSrc="/avatar.jpg"
          />
        </div>
        {/* Floating Achievement Metric 1 */}
        <div className="absolute -top-2 left-0 sm:left-4 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce dark:bg-surface-container-low dark:shadow-xl" style={{ animationDuration: '4s' }}>
          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
          </div>
          <div>
            <div className="font-headline-sm text-headline-sm text-on-surface leading-tight">5+ Years</div>
            <div className="font-label-code-sm text-label-code-sm text-secondary">Experience</div>
          </div>
        </div>
        {/* Floating Achievement Metric 2 */}
        <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3 dark:bg-surface-container-low dark:shadow-xl">
          <div className="w-9 h-9 rounded-xl bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">dns</span>
          </div>
          <div>
            <div className="font-headline-sm text-headline-sm text-on-surface leading-tight">10+ Tech</div>
            <div className="font-label-code-sm text-label-code-sm text-secondary">Ecosystems</div>
          </div>
        </div>
        {/* Floating Achievement Metric 3 */}
        <div className="absolute -bottom-4 left-6 sm:left-12 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3 dark:bg-surface-container-low dark:shadow-xl">
          <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
          </div>
          <div>
            <div className="font-headline-sm text-headline-sm text-on-surface leading-tight">3+ Prod</div>
            <div className="font-label-code-sm text-label-code-sm text-secondary">Live Clusters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
