<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import FlipBook from '@gladesinger/flipbook-vue3'
import '@gladesinger/flipbook-vue3/dist/style.css'
import { getGallery } from '../data/galleries'

const route = useRoute()
const gallery = computed(() => getGallery(route.params.slug as string))

// The flipbook renders a two-page spread on wide viewports, so the container
// needs double the single-page width to avoid being shrunk down with empty
// vertical margins.
const spreadAspectRatio = computed(() => {
  const ratio = gallery.value?.aspectRatio
  if (!ratio) return undefined
  const [w, h] = ratio.split('/').map((n) => parseFloat(n.trim()))
  return `${w * 2} / ${h}`
})

const spreadRatioNumber = computed(() => {
  const ratio = gallery.value?.aspectRatio
  if (!ratio) return 2
  const [w, h] = ratio.split('/').map((n) => parseFloat(n.trim()))
  return (w * 2) / h
})

const flipbook = ref<InstanceType<typeof FlipBook> | null>(null)
const showHint = ref(true)

function dismissHint() {
  showHint.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') flipbook.value?.flipLeft()
  else if (e.key === 'ArrowRight') flipbook.value?.flipRight()
}
</script>

<template>
  <main class="gallery-view">
    <header class="gallery-view__header">
      <h1 v-if="gallery">{{ gallery.title }}</h1>
      <RouterLink to="/" class="gallery-view__close" aria-label="Back to home">
        <svg viewBox="0 0 39 39" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L37 37" stroke="currentColor" stroke-width="2" />
          <path d="M37 2L2 37" stroke="currentColor" stroke-width="2" />
        </svg>
      </RouterLink>
    </header>

    <template v-if="gallery">
      <div class="flipbook-wrapper" :style="{ width: `min(100%, 92vh * ${spreadRatioNumber}, 1600px)` }">
        <FlipBook
          ref="flipbook"
          :pages="gallery.pages"
          :zooms="[1]"
          :click-to-zoom="false"
          class="flipbook"
          :style="{ aspectRatio: spreadAspectRatio }"
          tabindex="0"
          @keydown="
            onKeydown($event);
            dismissHint()
          "
          @click="dismissHint"
          @flip-left-start="dismissHint"
          @flip-right-start="dismissHint"
        />
      </div>
      <div class="flipbook-hint-slot">
        <Transition name="fade">
          <p v-if="showHint" class="flipbook-hint" aria-hidden="true">
            <span class="flipbook-hint__arrow">&larr;</span>
            <span>Click, swipe, or use arrow keys to flip</span>
            <span class="flipbook-hint__arrow">&rarr;</span>
          </p>
        </Transition>
      </div>
      <p class="gallery-view__caption">
        Shot with CONTAX T, CONTAX Tvs ii<br />
        Scanned with Sony a6500 w/ TTArtisan 40mm Macro
      </p>
    </template>
    <p v-else>Gallery not found.</p>
  </main>
</template>

<style scoped>
.gallery-view {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.gallery-view__header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #f4f4f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.gallery-view__header h1 {
  font-size: 1.75rem;
  margin: 0;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 480px) {
  .gallery-view__header h1 {
    font-size: 1.25rem;
  }
}

.gallery-view__close {
  display: flex;
  color: inherit;
  line-height: 0;
}

.gallery-view__close:hover {
  color: #646cff;
}

.flipbook-wrapper {
  position: relative;
  max-width: 1600px;
  margin: 2rem auto;
}

.flipbook {
  width: 100%;
  margin: 0 auto;
  outline: none;
}

.gallery-view__caption {
  font-size: clamp(0.75rem, 0.65rem + 0.3vmin, 0.9rem);
  text-align: right;
  max-width: 1600px;
  margin: 1rem auto 0;
  overflow-wrap: break-word;
}

.flipbook-hint-slot {
  display: flex;
  justify-content: center;
  height: 2.25rem;
}

.flipbook-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  border-radius: 999px;
  font-size: 0.85rem;
  white-space: nowrap;
  pointer-events: none;
}

.flipbook-hint__arrow {
  animation: flipbook-hint-bounce 1.4s ease-in-out infinite;
}

.flipbook-hint__arrow:last-child {
  animation-direction: reverse;
}

@keyframes flipbook-hint-bounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-4px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
