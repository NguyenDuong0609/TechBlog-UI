'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Hide success message after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
      
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="w-full pt-20 bg-surface dark:bg-surface-dim">
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-xl lg:py-space-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Context, Channels, and Technical Schematic */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div>
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="w-6 h-0.5 bg-primary-container rounded-full inline-block"></span>
              <span className="font-label-code-sm text-label-code-sm text-primary font-semibold tracking-wider uppercase">
                SAY HELLO
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md">
              Let's Work Together<span className="text-primary-container">.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-xl">
              I am always open to discussing new projects, backend architecture, cloud infrastructure &amp; DevOps automation, or opportunities to be part of your engineering vision.
            </p>
          </div>

          {/* Contact Method Channels */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Item */}
              <a
                className="group flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 dark:bg-surface-container-low dark:shadow-md dark:hover:shadow-lg"
                href="mailto:duong.nguyen@email.com"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-code-sm text-label-code-sm text-secondary">Email</span>
                  <span className="font-headline-sm text-[15px] leading-snug font-medium text-on-surface truncate group-hover:text-primary transition-colors">
                    duong.nguyen@email.com
                  </span>
                </div>
              </a>
              {/* Phone Item */}
              <a
                className="group flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 dark:bg-surface-container-low dark:shadow-md dark:hover:shadow-lg"
                href="tel:+84988776655"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-code-sm text-label-code-sm text-secondary">Phone / Zalo</span>
                  <span className="font-headline-sm text-[15px] leading-snug font-medium text-on-surface truncate group-hover:text-primary transition-colors">
                    +84 (0) 988 776 655
                  </span>
                </div>
              </a>
            </div>
            {/* Location Item */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-code-sm text-label-code-sm text-secondary">Location</span>
                <p className="font-headline-sm text-[15px] leading-snug font-medium text-on-surface">
                  Hanoi, Vietnam <span className="font-body-sm text-body-sm text-secondary font-normal">(Remote &amp; Relocation Capable)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Isometric Visual Banner */}
          <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center relative overflow-hidden group dark:bg-surface-container-low dark:shadow-md">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-full flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-label-code-sm text-label-code-sm text-secondary uppercase tracking-wider">
                  Cluster State: Operational
                </span>
              </div>
              <span className="font-label-code-sm text-label-code-sm text-secondary">
                k8s-ap-southeast-1
              </span>
            </div>
            <Image
              src="/contact.jpg"
              alt="Isometric 3D cloud infrastructure and Kubernetes architecture diagram"
              width={450}
              height={450}
              className="w-full max-w-md h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-6">
          <div className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 shadow-lg relative dark:bg-surface-container-low dark:shadow-xl">
            <div className="mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Send a Message</h2>
              <p className="font-body-md text-body-md text-secondary">
                Fill out the details below and I will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6" id="contact-form" onSubmit={handleFormSubmit}>
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="font-label-code-sm text-label-code-sm text-on-surface-variant font-medium" htmlFor="name">
                    Your Name *
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full h-12 pl-4 pr-11 bg-surface-container-low rounded-xl text-on-surface font-body-md placeholder:text-secondary/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all dark:bg-surface-container-high dark:text-on-surface dark:placeholder:text-secondary/50 dark:focus:bg-surface-container-high dark:focus:ring-primary-container"
                      id="name"
                      name="name"
                      placeholder="Alex Morgan"
                      required
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute right-3.5 text-secondary text-[20px] pointer-events-none">
                      person
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label-code-sm text-label-code-sm text-on-surface-variant font-medium" htmlFor="email">
                    Your Email *
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full h-12 pl-4 pr-11 bg-surface-container-low rounded-xl text-on-surface font-body-md placeholder:text-secondary/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all dark:bg-surface-container-high dark:text-on-surface dark:placeholder:text-secondary/50 dark:focus:bg-surface-container-high dark:focus:ring-primary-container"
                      id="email"
                      name="email"
                      placeholder="alex@company.io"
                      required
                      type="email"
                    />
                    <span className="material-symbols-outlined absolute right-3.5 text-secondary text-[20px] pointer-events-none">
                      mail
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry Purpose Pills */}
              <div className="space-y-3">
                <label className="font-label-code-sm text-label-code-sm text-on-surface-variant font-medium block">
                  Inquiry Purpose
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup">
                  <label className="cursor-pointer">
                    <input defaultChecked className="peer sr-only" name="purpose" type="radio" value="Job Opportunity" />
                    <div className="h-11 flex items-center justify-center gap-2 px-3 rounded-full bg-surface-container-low text-secondary text-sm font-medium transition-all peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:shadow-sm dark:bg-surface-container-high dark:text-on-surface-variant dark:peer-checked:bg-primary-container dark:peer-checked:text-on-primary">
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      <span className="truncate">Job Opportunity</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="purpose" type="radio" value="Freelance Project" />
                    <div className="h-11 flex items-center justify-center gap-2 px-3 rounded-full bg-surface-container-low text-secondary text-sm font-medium transition-all peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:shadow-sm dark:bg-surface-container-high dark:text-on-surface-variant dark:peer-checked:bg-primary-container dark:peer-checked:text-on-primary">
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      <span className="truncate">Freelance Project</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="purpose" type="radio" value="Technical Chat" />
                    <div className="h-11 flex items-center justify-center gap-2 px-3 rounded-full bg-surface-container-low text-secondary text-sm font-medium transition-all peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:shadow-sm dark:bg-surface-container-high dark:text-on-surface-variant dark:peer-checked:bg-primary-container dark:peer-checked:text-on-primary">
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      <span className="truncate">Technical Chat</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message Area */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-code-sm text-label-code-sm text-on-surface-variant font-medium" htmlFor="message">
                    Message or Project Scope *
                  </label>
                  <span className="font-label-code-sm text-[11px] text-secondary">Markdown supported</span>
                </div>
                <div className="relative">
                  <textarea
                    className="w-full p-4 pr-10 bg-surface-container-low rounded-xl text-on-surface font-body-md placeholder:text-secondary/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-y min-h-[130px] dark:bg-surface-container-high dark:text-on-surface dark:placeholder:text-secondary/50 dark:focus:bg-surface-container-high dark:focus:ring-primary-container"
                    id="message"
                    name="message"
                    placeholder="Type your message or project requirements here..."
                    required
                    rows="5"
                  ></textarea>
                  <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-secondary text-[20px] pointer-events-none">
                    chat_bubble_outline
                  </span>
                </div>
              </div>

              {/* Feedback Notification Box */}
              {isSuccess && (
                <div className="p-4 rounded-xl bg-surface-container text-on-surface transition-all flex items-center gap-3 dark:bg-surface-container-high dark:text-on-surface" id="form-alert">
                  <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                  <p className="font-body-sm text-body-sm">Message sent successfully! I will reply shortly.</p>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  className={`inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-headline-sm text-[15px] font-medium shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto dark:bg-primary-container dark:hover:bg-primary dark:text-on-primary dark:shadow-xl dark:hover:shadow-2xl ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary'
                  }`}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin inline-block"></span>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Let's Talk</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Technical SLA Guarantee Footer */}
            <div className="mt-8 pt-6 border-t border-surface-variant flex flex-wrap items-center justify-between gap-4 text-secondary dark:border-surface-variant/50 dark:text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">verified_user</span>
                <span className="font-label-code-sm text-label-code-sm">PGP / Encrypted Mail Available</span>
              </div>
              <div className="flex items-center gap-2 font-label-code-sm text-label-code-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span>Avg Response: &lt; 4 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;