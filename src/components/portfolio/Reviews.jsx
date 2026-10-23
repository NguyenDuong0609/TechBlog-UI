import React from 'react';

const Reviews = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="flex items-center gap-2.5 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Engineering Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Highlight 1 */}
          <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 dark:bg-surface-container-low dark:shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">security</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-sm text-on-surface">Security First</h3>
                <p className="font-label-code-sm text-label-code-sm text-secondary">Zero-Trust Architecture</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              Zero hardcoded secrets, automated dynamic lease expirations through Vault, and strict mTLS inter-service
              authentication across every microservice pod.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 dark:bg-surface-container-low dark:shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">vital_signs</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-sm text-on-surface">Production Mindset</h3>
                <p className="font-label-code-sm text-label-code-sm text-secondary">Observability &amp; Latency</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              Targeting strict p99 response times under 20ms. Structured JSON logs, automated circuit breaking with
              fallback strategies, and synthetic alerting.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="p-7 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 dark:bg-surface-container-low dark:shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/60 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">automation</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-sm text-on-surface">Deterministic CI/CD</h3>
                <p className="font-label-code-sm text-label-code-sm text-secondary">GitOps Automation</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              Declarative infrastructure configurations, ephemeral pull-request environments, reproducible multi-stage
              Docker builds, and safe progressive rollouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;