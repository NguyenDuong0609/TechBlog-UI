'use client';

import React, { useState } from 'react';
import DevImg from './DevImg';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className="w-full bg-surface-container-low/50 py-16 lg:py-24 dark:bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Tag Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">About me</h2>
        </div>
        {/* Tab Switcher Navigation */}
        <div className="inline-flex p-1 rounded-full bg-surface-container-high/80 mb-12 shadow-inner dark:bg-surface-container-high/60">
          <button
            className={`px-6 py-2 rounded-full font-headline-sm text-sm transition-all duration-200 ${activeTab === 'personal' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-on-surface'}`}
            onClick={() => setActiveTab('personal')}
          >Personal Info</button>
          <button
            className={`px-6 py-2 rounded-full font-headline-sm text-sm transition-all duration-200 ${activeTab === 'quals' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-on-surface'}`}
            onClick={() => setActiveTab('quals')}
          >Qualifications</button>
          <button
            className={`px-6 py-2 rounded-full font-headline-sm text-sm transition-all duration-200 ${activeTab === 'skills' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-on-surface'}`}
            onClick={() => setActiveTab('skills')}
          >Skills</button>
        </div>
        {/* Split Layout: Profile Visual & Info Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Secondary Portrait Visual */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <DevImg
                containerStyles="relative w-full h-full mask-about bg-surface-container-lowest dark:bg-surface-container-low"
                imgSrc="/avatar.jpg"
              />
            </div>
            <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-label-code-sm text-label-code-sm text-on-surface">Available for Senior DevOps Roles</span>
            </div>
          </div>
          {/* Right: Tab Contents */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Personal Info Panel */}
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Engineering Resilient Systems &amp; Scalable Infrastructure
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  I specialize in architecting distributed backend services with high concurrency, reliable database
                  schemas, and automated zero-downtime CI/CD workflows. Operating on the belief that software
                  reliability is an intentional design choice, not an afterthought.
                </p>
                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
                    <span className="material-symbols-outlined text-primary text-[22px]">person</span>
                    <div>
                      <span className="block font-label-code-sm text-label-code-sm text-secondary">Full Name</span>
                      <span className="font-headline-sm text-sm text-on-surface">Dương Nguyễn</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
                    <span className="material-symbols-outlined text-primary text-[22px]">phone</span>
                    <div>
                      <span className="block font-label-code-sm text-label-code-sm text-secondary">Phone / Zalo</span>
                      <span className="font-headline-sm text-sm text-on-surface">+84 (0) 988 776 655</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
                    <span className="material-symbols-outlined text-primary text-[22px]">alternate_email</span>
                    <div>
                      <span className="block font-label-code-sm text-label-code-sm text-secondary">Email</span>
                      <span className="font-headline-sm text-sm text-on-surface">duong.nguyen@email.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
                    <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                    <div>
                      <span className="block font-label-code-sm text-label-code-sm text-secondary">Location</span>
                      <span className="font-headline-sm text-sm text-on-surface">Hanoi, Vietnam (On-site / Remote)</span>
                    </div>
                  </div>
                </div>
                {/* Core Toolchain Container */}
                <div className="mt-6 p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-5 dark:bg-surface-container-low dark:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-code-sm text-label-code-sm uppercase tracking-wider text-primary font-medium">Core Toolchain &amp; Tech Stack</span>
                    <span className="font-label-code-sm text-label-code-sm text-secondary">English (Proficient) • Vietnamese (Native)</span>
                  </div>
                  {/* Backend & API */}
                  <div className="space-y-2">
                    <span className="block font-headline-sm text-xs text-secondary uppercase tracking-wider">Backend &amp; API</span>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'NestJS', 'PHP / Laravel', 'RESTful API', 'gRPC', 'Microservices'].map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-label-code-sm font-label-code-sm hover:bg-surface-container transition-colors dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container-highest">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* DevOps & Cloud */}
                  <div className="space-y-2">
                    <span className="block font-headline-sm text-xs text-secondary uppercase tracking-wider">DevOps &amp; Cloud</span>
                    <div className="flex flex-wrap gap-2">
                      {['Docker', 'Kubernetes', 'Helm', 'GitLab CI', 'GitHub Actions', 'HAProxy', 'NGINX'].map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-label-code-sm font-label-code-sm hover:bg-surface-container transition-colors dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container-highest">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Databases & Observability */}
                  <div className="space-y-2">
                    <span className="block font-headline-sm text-xs text-secondary uppercase tracking-wider">Databases &amp; Observability</span>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prometheus', 'Grafana', 'ELK Stack'].map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-label-code-sm font-label-code-sm hover:bg-surface-container transition-colors dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container-highest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Qualifications Panel */}
            {activeTab === 'quals' && (
              <div className="space-y-6">
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Certifications &amp; Engineering Education
                </h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 dark:bg-surface-container-low dark:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-sm text-on-surface">Certified Kubernetes Administrator (CKA)</h4>
                      <p className="font-label-code-sm text-label-code-sm text-secondary">The Linux Foundation • 2023 - 2026</p>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">Cluster architecture, workload troubleshooting, networking security policies, persistent storage orchestration.</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 dark:bg-surface-container-low dark:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">school</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-sm text-on-surface">B.S. in Computer Science &amp; Information Systems</h4>
                      <p className="font-label-code-sm text-label-code-sm text-secondary">Hanoi University of Science and Technology (HUST)</p>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">Core specialization in Distributed Systems, Operating System Internals, and Computer Networks.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Panel */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Specialized Competency Matrix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Kubernetes & Container Orchestration', pct: '95%' },
                    { name: 'CI/CD & GitOps (GitLab/Actions/Argo)', pct: '92%' },
                    { name: 'Backend Architecture (Node, PHP, gRPC)', pct: '90%' },
                    { name: 'Observability & SLIs/SLOs (Prom/Grafana)', pct: '88%' },
                  ].map(s => (
                    <div key={s.name} className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm dark:bg-surface-container-low dark:shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-headline-sm text-sm text-on-surface">{s.name}</span>
                        <span className="font-label-code-sm text-label-code-sm text-primary">{s.pct}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: s.pct }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;