import React from 'react';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className="w-full pb-20 pt-8">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight mb-4">
          Prepared to turn your ideas into <br />
          reality? I&apos;m here to help
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-lg mb-8">
          Let&apos;s architect rock-solid backend services, container workflows, and automated cloud systems together.
        </p>
        <Link className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 dark:bg-primary-container dark:hover:bg-primary dark:text-on-primary dark:shadow-xl dark:hover:shadow-2xl" href="/contact">
          <span>Contact me</span>
          <span className="material-symbols-outlined text-[18px]">send</span>
        </Link>
      </div>
    </section>
  );
};

export default Cta;