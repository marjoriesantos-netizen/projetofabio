/* ============================================
   data.js — single source of truth for the collection
   ============================================

   TO SWAP IN LEONARDO.AI ARTWORK
   1. Generate your images at https://app.leonardo.ai/
      (suggested preset: 700 x 600 px, square-ish, Alchemy/photo style)
   2. Save them into assets/images/
   3. Update the "image" and "avatar.avatar" paths below
   4. Update the "credits" field so the README stays accurate
   ============================================ */

/* Inline icons reused by every card (avoids shipping extra files) */
const ICONS = {
  ethereum: `
    <svg viewBox="0 0 256 417" aria-hidden="true">
      <path fill="currentColor" d="M127.9611 0l-2.795 9.5v275.667l2.795 2.79 127.962-75.638zM127.962 0L0 212.32l127.962 75.639V154.158z"/>
      <path fill="currentColor" opacity=".55" d="M127.9611 312.187l-1.575 1.92v98.199l1.575 4.601L256 236.587zM0 236.587l127.9611 180.32v-104.72z"/>
    </svg>`,
  diamond: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <path d="M12 2 3 7l9 15 9-15-9-5Z"/>
      <path d="M3 7h18M9 7l3 15 3-15"/>
    </svg>`,
  eye: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`,
};

/* ---------------- Collection ---------------- */
const NFT_COLLECTION = [
  {
    id: 321,
    title: "Doodle #321",
    collection: "Doodle",
    description:
      "A combination of air and water makes this a great logo for a sports team that needs to inspire fans to go out and play.",
    image: "assets/images/nft-doodle-321.svg",
    owner: { name: "Marjorie Santos", avatar: "assets/images/avatar-1.svg" },
    price: "0.59",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 7,
    title: "Cosmic Orb #07",
    collection: "Celestial",
    description:
      "A dormant planet captured at the exact moment its rings aligned with the local star. Sold to the highest collector in the galaxy.",
    image: "assets/images/nft-cosmic-orb-07.svg",
    owner: { name: "Vitor Hugo", avatar: "assets/images/avatar-2.svg" },
    price: "1.20",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 88,
    title: "Neon City #88",
    collection: "Skyline",
    description:
      "Rain-soaked streets, electric reflections and the hum of a city that never powers down. Frame it before the lights go out.",
    image: "assets/images/nft-neon-city-88.svg",
    owner: { name: "Larissa Reis", avatar: "assets/images/avatar-3.svg" },
    price: "0.85",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 512,
    title: "Crystal Dragon",
    collection: "Elemental",
    description:
      "Shards of green energy folded into a creature that refuses to stay still. Every angle hides a different tail.",
    image: "assets/images/nft-crystal-dragon.svg",
    owner: { name: "Rafael Nunes", avatar: "assets/images/avatar-4.svg" },
    price: "2.40",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 190,
    title: "Sunset Pulse",
    collection: "Aura",
    description:
      "The last six minutes of daylight over the desert, compressed into a single warm gradient that keeps moving.",
    image: "assets/images/nft-sunset-pulse.svg",
    owner: { name: "Sofia Alves", avatar: "assets/images/avatar-5.svg" },
    price: "0.72",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 404,
    title: "Void Arc",
    collection: "Minimal",
    description:
      "Almost nothing, and that is exactly the point. A thin arc of light suspended in an empty room with no gravity.",
    image: "assets/images/nft-void-arc.svg",
    owner: { name: "Thiago Lima", avatar: "assets/images/avatar-6.svg" },
    price: "0.35",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
  {
    id: 999,
    title: "Quantum Fox",
    collection: "Cyber",
    description:
      "A fox rendered from pure geometry and spite. The tail rewrites itself every time the block is refreshed.",
    image: "assets/images/nft-quantum-fox.svg",
    owner: { name: "Marina Prado", avatar: "assets/images/avatar-1.svg" },
    price: "1.75",
    currency: "ETH",
    credits: "Leonardo.ai",
  },
];