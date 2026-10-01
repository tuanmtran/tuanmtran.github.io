<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import FlipBook from '@gladesinger/flipbook-vue3'
import '@gladesinger/flipbook-vue3/dist/style.css'
import { getGallery } from '../data/galleries'

const route = useRoute()
const gallery = computed(() => getGallery(route.params.slug as string))

const flipbook = ref<InstanceType<typeof FlipBook> | null>(null)
const showHint = ref(true)
let hintTimer: ReturnType<typeof setTimeout> | undefined

function dismissHint() {
  showHint.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') flipbook.value?.flipLeft()
  else if (e.key === 'ArrowRight') flipbook.value?.flipRight()
}

onMounted(() => {
  hintTimer = setTimeout(dismissHint, 5000)
})

onBeforeUnmount(() => {
  clearTimeout(hintTimer)
})
</script>

<template>
  <main class="gallery-view">
    <RouterLink to="/" class="back-link">&larr; Back to galleries</RouterLink>

    <template v-if="gallery">
      <h2>{{ gallery.title }}</h2>
      <div class="flipbook-wrapper">
        <FlipBook
          ref="flipbook"
          :pages="gallery.pages"
          :zooms="[1]"
          :click-to-zoom="false"
          class="flipbook"
          :style="{ aspectRatio: gallery.aspectRatio }"
          tabindex="0"
          @keydown="
            onKeydown($event);
            dismissHint()
          "
          @click="dismissHint"
          @flip-left-start="dismissHint"
          @flip-right-start="dismissHint"
        />
        <Transition name="fade">
          <div v-if="showHint" class="flipbook-hint" aria-hidden="true">
            <span class="flipbook-hint__arrow">&larr;</span>
            <span>Click, swipe, or use arrow keys to flip</span>
            <span class="flipbook-hint__arrow">&rarr;</span>
          </div>
        </Transition>
      </div>
    </template>
    <p v-else>Gallery not found.</p>
  </main>
</template>

<style scoped>
.gallery-view {
  width: 100%;
  text-align: center;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.flipbook-wrapper {
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.flipbook {
  width: 100%;
  max-height: 92vh;
  margin: 0 auto;
  outline: none;
}

.flipbook-hint {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  border-radius: 999px;
  font-size: 0.85rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
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
