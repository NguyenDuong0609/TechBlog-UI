'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const projectData = [
  {
    image: '/work/project-1.jpg',
    category: 'LARAVEL & VUE',
    title: 'E-commerce Web Application',
    description: 'Fullstack web application with Laravel REST API, Vue.js reactive storefront, MySQL relational database, and Docker containerized production setup.',
    tags: ['Laravel', 'Vue.js', 'Docker', 'MySQL'],
    link: '/projects',
    badge: 'DEPLOYED'
  },
  {
    image: '/work/k8s-diagram.png',
    category: 'K8S & INFRA',
    title: 'Kubernetes Production Cluster',
    description: 'Self-hosted 3-node K8s environment with HAProxy high availability, Helm chart releases, and Prometheus/Grafana real-time metrics telemetry.',
    tags: ['Kubeadm', 'HAProxy', 'Helm', 'Prometheus'],
    link: '/projects',
    badge: '99.99% UPTIME'
  },
  {
    image: '/work/3.png',
    category: 'REACT & NODE',
    title: 'Real-time Chat Application',
    description: 'Scalable WebSocket-based chat system with React frontend and Node.js backend. Features typing indicators and read receipts.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '/projects',
    badge: 'SCALABLE'
  },
  {
    image: '/work/4.png',
    category: 'CI/CD & AUTOMATION',
    title: 'GitOps Pipeline Automation',
    description: 'End-to-end automated pipeline using GitLab CI, ArgoCD for Kubernetes deployments, and automated testing strategies.',
    tags: ['GitLab CI', 'ArgoCD', 'Bash', 'Docker'],
    link: '/projects',
    badge: 'AUTOMATED'
  }
];

const Work = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="w-full bg-surface-container-low/40 py-16 lg:py-24 dark:bg-surface-container-low/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title & CTA Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Latest Projects</h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-lg">
              Selected real-world architectures, cloud labs, and backend implementations engineered for maximum
              resilience and uptime.
            </p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-sm transition-all duration-200 shadow-md">
            <span>Xem tất cả dự án</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* Swiper Carousel */}
        <div className="relative w-full">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 32 }
            }}
            spaceBetween={24}
            className="w-full !pb-6"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveSlide(swiper.snapIndex);
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.snapIndex)}
            onBreakpoint={(swiper) => setActiveSlide(swiper.snapIndex)}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-3xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full dark:bg-surface-container-low dark:shadow-lg dark:hover:shadow-2xl">
                  <div className="relative w-full aspect-[1.79] overflow-hidden bg-inverse-surface">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image} />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-surface/85 backdrop-blur-md text-on-primary font-label-code-sm text-xs dark:bg-on-surface/90">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-surface/85 backdrop-blur-md text-on-primary font-label-code-sm text-xs dark:bg-on-surface/90">
                      <span className="material-symbols-outlined text-[14px] text-emerald-400">check_circle</span>
                      {project.badge}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary mb-6">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-surface-container-low text-secondary font-label-code-sm text-xs dark:bg-surface-container-high dark:text-on-surface-variant">{tag}</span>
                        ))}
                      </div>
                      <Link href={project.link} className="w-9 h-9 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary flex items-center justify-center text-on-surface transition-colors shrink-0 dark:bg-surface-container-high dark:text-on-surface dark:hover:bg-primary dark:hover:text-on-primary">
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-2 pt-3" aria-label="Project carousel pages">
            {[0, 1, 2].map((slide) => (
              <button
                key={slide}
                type="button"
                aria-label={`Go to project slide ${slide + 1}`}
                aria-current={activeSlide === slide ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === slide
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-secondary-fixed-dim hover:bg-secondary'
                }`}
                onClick={() => swiperRef.current?.slideTo(slide)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
