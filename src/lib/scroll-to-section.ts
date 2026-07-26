import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (target: string) => {
  if (!document.querySelector(target)) return;

  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, offsetY: headerHeight },
    ease: 'power2.inOut'
  });
};
