import React from 'react';

const Services = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">My Services</h2>
        </div>
        <p className="font-body-md text-body-md text-secondary text-center max-w-xl mb-12">
          End-to-end engineering capabilities — from writing clean, testable backend code to deploying and monitoring
          it reliably in high-traffic production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Service Card 1 */}
          <div className="group p-8 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center dark:bg-surface-container-low dark:hover:bg-surface-container-high dark:shadow-lg dark:hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/60 group-hover:bg-primary text-primary group-hover:text-on-primary flex items-center justify-center mb-6 transition-colors duration-200">
              <span className="material-symbols-outlined text-[32px]">hub</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Backend Development</h3>
            <p className="font-body-md text-body-md text-secondary">
              Designing scalable REST &amp; gRPC APIs, modular service architecture, transactional databases, and
              resilient event-driven systems.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="group p-8 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center dark:bg-surface-container-low dark:hover:bg-surface-container-high dark:shadow-lg dark:hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/60 group-hover:bg-primary text-primary group-hover:text-on-primary flex items-center justify-center mb-6 transition-colors duration-200">
              <span className="material-symbols-outlined text-[32px]">deployed_code</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">DevOps &amp; Infrastructure</h3>
            <p className="font-body-md text-body-md text-secondary">
              Automating CI/CD pipelines, containerizing workloads with Docker, and orchestrating high-availability
              Kubernetes bare-metal or cloud clusters.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="group p-8 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center dark:bg-surface-container-low dark:hover:bg-surface-container-high dark:shadow-lg dark:hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary-fixed/60 group-hover:bg-primary text-primary group-hover:text-on-primary flex items-center justify-center mb-6 transition-colors duration-200">
              <span className="material-symbols-outlined text-[32px]">shield_lock</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Security &amp; Performance</h3>
            <p className="font-body-md text-body-md text-secondary">
              Zero-trust secret management, strict RBAC protocols, query optimizations, Redis multi-tier caching, and
              real-time observability telemetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;