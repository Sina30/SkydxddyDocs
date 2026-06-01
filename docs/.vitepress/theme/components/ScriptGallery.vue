<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const scripts = [
  {
    title: 'Interaction System',
    description: 'The most optimized and immersive interaction system for RedM servers.',
    link: '/scripts/interaction/',
    icon: '⚡',
    tag: 'Popular'
  },
  {
    title: 'Case System',
    description: 'Premium CS2-style case opening and trading system with weighted loot.',
    link: '/scripts/cases/',
    icon: '📦',
    tag: 'Hot'
  },
  {
    title: 'Blackjack',
    description: 'Professional casino-grade blackjack with multi-player support.',
    link: '/scripts/blackjack/',
    icon: '🃏',
    tag: 'Casino'
  },
  {
    title: 'Roulette',
    description: 'Realistic roulette system with physics-based spins and accurate payouts.',
    link: '/scripts/roulette/',
    icon: '🎰',
    tag: 'Casino'
  },
  {
    title: 'Racing System',
    description: 'Complete racing management with tracks, timing, and leaderboards.',
    link: '/scripts/racing/',
    icon: '🏎️',
    tag: 'Pro'
  },
  {
    title: 'Emoji & Minigames',
    description: 'Floating emojis, tarot reading, and quick social minigames.',
    link: '/scripts/emoji/',
    icon: '😄',
    tag: 'Social'
  },
  {
    title: 'Grave Robbery',
    description: 'High-risk criminal activity with police alerts and NPC selling.',
    link: '/scripts/graverobbery/',
    icon: '⚰️',
    tag: 'Illegal'
  },
  {
    title: 'Character Details',
    description: 'Persistent physical details and conditions for deeper roleplay.',
    link: '/scripts/details/',
    icon: '📖',
    tag: 'RP'
  },
  {
    title: 'Phonograph',
    description: 'Portable music system with record making and 3D spatial audio.',
    link: '/scripts/phonograph/',
    icon: '🎵',
    tag: 'Music'
  },
  {
    title: 'Madd UI',
    description: 'The core UI framework providing notifications, minigames, and dialogue.',
    link: '/scripts/ui/',
    icon: '🛠️',
    tag: 'Core'
  }
]

const navigate = (link) => {
  router.go(link)
}
</script>

<template>
  <div class="script-gallery">
    <div v-for="script in scripts" :key="script.title" class="script-card" @click="navigate(script.link)">
      <div class="card-header">
        <span class="script-icon">{{ script.icon }}</span>
        <span v-if="script.tag" class="script-tag">{{ script.tag }}</span>
      </div>
      <h3 class="script-title">{{ script.title }}</h3>
      <p class="script-desc">{{ script.description }}</p>
      <div class="card-footer">
        <span class="read-more">View Documentation →</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.script-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.script-card {
  background: rgba(22, 30, 26, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.script-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(800px circle at var(--x, 0) var(--y, 0), rgba(16, 185, 129, 0.06), transparent 40%);
  opacity: 0;
  transition: opacity 0.3s;
}

.script-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(5, 150, 105, 0.1);
}

.script-card:hover .read-more {
  color: #10b981;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.script-icon {
  font-size: 32px;
  background: rgba(16, 185, 129, 0.1);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.script-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.script-title {
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.script-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  flex-grow: 1;
}

.card-footer {
  margin-top: 24px;
}

.read-more {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.2s;
}
</style>
