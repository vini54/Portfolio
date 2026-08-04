'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ScrollRevealOptions = {
  /** Onde o bloco começa a se revelar. */
  blockStart?: string;
  /** Onde termina — deve sobrar seção depois disso (o "gap"). */
  blockEnd?: string;
  /** Onde a cascata dos itens dispara. */
  itemsStart?: string;
};

/**
 * Revela uma seção em duas camadas, de propósito com naturezas diferentes:
 *
 * 1. `[data-reveal-block]` sobe e faz fade **grudado no scroll** (`scrub`). A
 *    animação termina em `top 30%`, bem antes do fim da seção — o intervalo
 *    morto que sobra é o que evita a sensação de que a seção se desfaz assim
 *    que termina de aparecer.
 * 2. `[data-reveal-item]` entra em cascata com **duração própria**, sem depender
 *    da velocidade do gesto. Reverte ao subir (`onLeaveBack`).
 *
 * São dois ScrollTriggers separados porque `scrub` e `toggleActions` no mesmo
 * trigger conflitam — o `scrub` venceria.
 *
 * O elemento devolvido é o **gatilho**, nunca o animado: mover o próprio gatilho
 * no eixo Y deslocaria as medições de `start`/`end` a cada `refresh()`.
 */
export function useScrollReveal<T extends HTMLElement>({
  blockStart = 'clamp(top 75%)',
  blockEnd = 'clamp(top 20%)',
  itemsStart = 'clamp(top 45%)'
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      // Sem o branch, nenhuma animação é criada e os elementos ficam no estado
      // natural — é o próprio fallback de `prefers-reduced-motion`.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const block = root.querySelector<HTMLElement>('[data-reveal-block]');
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal-item]', root);

        if (block) {
          gsap.fromTo(
            block,
            { y: 72, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'none',
              // clamp() prende o `end` aos limites da página: sem ele, um bloco
              // perto do fim do documento pediria um `end` além do scroll máximo
              // e nunca completaria. Atenção: clamp() **não** resgata um `start`
              // inalcançável — daí os overrides para o footer (ver Contact).
              scrollTrigger: { trigger: root, start: blockStart, end: blockEnd, scrub: true }
            }
          );
        }

        if (items.length) {
          gsap.fromTo(
            items,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out',
              stagger: 0.25,
              scrollTrigger: { trigger: root, start: itemsStart, toggleActions: 'play none none reverse' }
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return ref;
}
