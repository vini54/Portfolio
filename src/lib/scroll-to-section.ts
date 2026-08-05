import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (target: string) => {
  if (!document.querySelector(target)) return;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, offsetY: 0 },
    ease: 'power2.inOut'
  });
};

export const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0 },
    ease: 'power2.inOut'
  });
};
