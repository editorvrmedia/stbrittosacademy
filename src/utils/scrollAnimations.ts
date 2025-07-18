import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(scroller: string | HTMLElement | null = null) {
  // Fade-in
  gsap.utils.toArray('.fade-in').forEach(el => {
    gsap.fromTo(
      el as HTMLElement,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el as HTMLElement,
          scroller,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // Slide-up
  gsap.utils.toArray('.slide-up').forEach(el => {
    gsap.fromTo(
      el as HTMLElement,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el as HTMLElement,
          scroller,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // Slide-left
  gsap.utils.toArray('.slide-left').forEach(el => {
    gsap.fromTo(
      el as HTMLElement,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el as HTMLElement,
          scroller,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // Zoom-in
  gsap.utils.toArray('.zoom-in').forEach(el => {
    gsap.fromTo(
      el as HTMLElement,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el as HTMLElement,
          scroller,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
} 