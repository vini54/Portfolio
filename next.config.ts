import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite acessar o dev server (assets /_next/* e HMR) por essas origens.
  // Sem isso, Next.js bloqueia (403) os bundles JS/CSS quando acessado por
  // IP da rede local ou por um túnel (ngrok) — a página carrega o HTML, mas
  // nenhum JS roda: cliques não funcionam, WebGL não inicializa, etc.
  allowedDevOrigins: [
    '192.168.1.120', // IP da rede local desta máquina — ajuste se a rede mudar
    '*.ngrok-free.app',
    '*.ngrok.app',
    '*.ngrok.io'
  ]
};

export default nextConfig;
