'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: 1,
    category: 'backend',
    title: 'E-commerce Platform',
    description: 'E-commerce platform with modular service structure, transactional consistency, and containerized Docker workflow. Built with domain separation and optimized indexing.',
    terminalType: 'laravel://ecommerce-cluster',
    terminalTitle: 'Laravel API Core',
    terminalBadge: 'Dockerized',
    terminalLeftLabel: 'Frontend',
    terminalLeftValue: 'Vue.js SPA',
    terminalLeftSub: 'Reactive Store',
    terminalRightLabel: 'Database',
    terminalRightValue: 'MySQL InnoDB',
    terminalRightSub: 'ACID Transactions',
    badgeText: 'Backend',
    statusText: 'Production Ready',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    colors: {
      dot: 'bg-primary-container',
      badgeBg: 'bg-primary/20',
      badgeText: 'text-inverse-primary',
      mainBadgeBg: 'bg-primary-fixed',
      mainBadgeText: 'text-on-primary-fixed-variant'
    }
  },
  {
    id: 2,
    category: 'fullstack',
    title: 'Technical Engineering Blog',
    description: 'Developer publishing platform with server-rendered Next.js interface, Express API, MongoDB datastore, and Docker containerization.',
    terminalType: 'tech-blog://next-express-mongo',
    terminalTitle: 'SSR Publishing',
    terminalBadge: 'Next.js SSR',
    terminalLeftLabel: 'API Service',
    terminalLeftValue: 'Express.js REST',
    terminalLeftSub: 'JWT + RBAC',
    terminalRightLabel: 'Datastore',
    terminalRightValue: 'MongoDB Replica',
    terminalRightSub: 'Text Indexing',
    badgeText: 'Full Stack',
    statusText: 'Live',
    techStack: ['Express.js', 'Next.js', 'MongoDB', 'Docker'],
    colors: {
      dot: 'bg-[#3b82f6]',
      badgeBg: 'bg-[#3b82f6]/20',
      badgeText: 'text-[#93c5fd]',
      mainBadgeBg: 'bg-secondary-fixed',
      mainBadgeText: 'text-on-secondary-fixed-variant'
    }
  },
  {
    id: 3,
    category: 'devops',
    title: 'Production Kubernetes Cluster',
    description: 'High-availability bare-metal 3-node cluster with HAProxy LB, Rancher console, Helm automated deployments, NFS storage, and ELK stack.',
    terminalType: 'k8s://baremetal-ha-cluster',
    terminalTitle: 'Kubeadm (1M + 2W)',
    terminalBadge: 'HAProxy LB',
    terminalLeftLabel: 'Management',
    terminalLeftValue: 'Rancher + Helm',
    terminalLeftSub: 'Ingress NGINX',
    terminalRightLabel: 'Observability',
    terminalRightValue: 'Prom + Grafana',
    terminalRightSub: 'ELK Stack + NFS',
    badgeText: 'DevOps',
    statusText: 'High Availability',
    techStack: ['Kubeadm', 'HAProxy', 'Helm', 'NFS', 'Prometheus', 'Grafana', 'ELK'],
    colors: {
      dot: 'bg-[#10b981]',
      badgeBg: 'bg-[#10b981]/20',
      badgeText: 'text-[#6ee7b7]',
      mainBadgeBg: 'bg-primary-fixed',
      mainBadgeText: 'text-on-primary-fixed-variant'
    }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectData.filter(project => {
    return filter === 'all' || project.category === filter;
  });

  return (
    <div className="w-full pt-20 bg-surface dark:bg-surface-dim">
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl md:py-space-2xl w-full flex flex-col items-center min-h-screen">
      {/* Title & Subtitle Intro */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
        <div className="inline-flex items-center gap-2 mb-space-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">My Projects</h1>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Architectural blueprints, zero-trust infrastructure, and scalable backend distributed systems engineered by Dương Nguyễn.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-space-lg flex items-center p-1.5 bg-surface-container-low rounded-full shadow-sm gap-1 overflow-x-auto max-w-full dark:bg-surface-container-high dark:shadow-md">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full font-headline-sm text-[13px] leading-[18px] font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            type="button"
          >
            All Projects <span className="ml-1 opacity-80 font-label-code-sm text-[11px]">({projectData.length})</span>
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-5 py-2 rounded-full font-headline-sm text-[13px] leading-[18px] font-medium transition-all duration-200 ${
              filter === 'backend'
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            type="button"
          >
            Backend <span className="ml-1 opacity-70 font-label-code-sm text-[11px]">(1)</span>
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-5 py-2 rounded-full font-headline-sm text-[13px] leading-[18px] font-medium transition-all duration-200 ${
              filter === 'fullstack'
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            type="button"
          >
            Full Stack <span className="ml-1 opacity-70 font-label-code-sm text-[11px]">(1)</span>
          </button>
          <button
            onClick={() => setFilter('devops')}
            className={`px-5 py-2 rounded-full font-headline-sm text-[13px] leading-[18px] font-medium transition-all duration-200 ${
              filter === 'devops'
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            type="button"
          >
            DevOps &amp; Infrastructure <span className="ml-1 opacity-70 font-label-code-sm text-[11px]">(1)</span>
          </button>
        </div>
      </div>

      {/* Portfolio 3-Column Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group flex flex-col justify-between bg-surface-container-lowest rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-variant dark:bg-surface-container-low dark:border-surface-variant/50 dark:shadow-lg dark:hover:shadow-2xl"
            >
              <div>
                {/* Dark Mini Terminal Diagram */}
                <div className="bg-inverse-surface rounded-xl p-4 mb-6 shadow-inner text-inverse-on-surface dark:bg-inverse-surface dark:shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                    </div>
                    <span className="font-label-code-sm text-[11px] text-tertiary-fixed-dim">{project.terminalType}</span>
                  </div>
                  <div className="space-y-3 font-label-code-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${project.colors.dot}`}></span>
                        <span className="font-medium text-white text-[12px]">{project.terminalTitle}</span>
                      </div>
                      <span className={`${project.colors.badgeBg} ${project.colors.badgeText} px-2 py-0.5 rounded text-[10px] tracking-wide`}>
                        {project.terminalBadge}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="bg-white/5 p-2 rounded-lg">
                        <span className="text-tertiary-fixed-dim block text-[10px] uppercase">{project.terminalLeftLabel}</span>
                        <span className="text-white font-medium">{project.terminalLeftValue}</span>
                        <span className="text-white/40 block text-[9px]">{project.terminalLeftSub}</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg">
                        <span className="text-tertiary-fixed-dim block text-[10px] uppercase">{project.terminalRightLabel}</span>
                        <span className="text-white font-medium">{project.terminalRightValue}</span>
                        <span className="text-white/40 block text-[9px]">{project.terminalRightSub}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata Tags */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`${project.colors.mainBadgeBg} ${project.colors.mainBadgeText} px-2.5 py-1 rounded-full font-label-code-sm text-[11px] font-semibold tracking-wide uppercase`}>
                    {project.badgeText}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                    <span className="font-label-code-sm text-[11px] text-secondary font-medium">{project.statusText}</span>
                  </div>
                </div>

                {/* Title & Narrative */}
                <h2 className="font-headline-md text-headline-sm text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-surface-container-low text-on-surface px-2.5 py-1 rounded-full font-label-code-sm text-[11px] dark:bg-surface-container-high dark:text-on-surface">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="flex items-center gap-3 pt-4 mt-auto">
                <Link href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-primary-container text-on-primary font-headline-sm text-[13px] leading-tight font-medium hover:bg-primary transition-colors shadow-sm dark:bg-primary-container dark:hover:bg-primary dark:text-on-primary dark:shadow-md dark:hover:shadow-lg">
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>Case Study</span>
                </Link>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-surface-container-low text-on-surface font-headline-sm text-[13px] leading-tight font-medium hover:bg-surface-container transition-colors dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-surface-container-highest">
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  <span>GitHub</span>
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Infrastructure Open-Source Callout Ribbon */}
      <div className="w-full mt-space-xl bg-surface-container-lowest rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mb-12 dark:bg-surface-container-low dark:shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container shrink-0">
            <span className="material-symbols-outlined text-[24px]">terminal</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Looking for raw infrastructure code?
            </h3>
            <p className="font-body-md text-body-sm text-on-surface-variant">
              Check out open-source Terraform templates, Helm charts, and custom Kubernetes operators on GitHub.
            </p>
          </div>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-[14px] leading-tight font-medium hover:bg-primary transition-all duration-200 shadow-sm shrink-0 dark:bg-primary-container dark:hover:bg-primary dark:text-on-primary dark:shadow-md dark:hover:shadow-lg">
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>Browse GitHub Repos</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </section>
    </div>
  );
}

export default Projects;