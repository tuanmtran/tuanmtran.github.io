<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import FlipBook from '@gladesinger/flipbook-vue3'
import '@gladesinger/flipbook-vue3/dist/style.css'
import { getGallery } from '../data/galleries'

const route = useRoute()
const gallery = computed(() => getGallery(route.params.slug as string))

const flipbook = ref<InstanceType<typeof FlipBook> | null>(null)

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') flipbook.value?.flipLeft()
  else if (e.key === 'ArrowRight') flipbook.value?.flipRight()
}
</script>

<template>
  <main class="gallery-view">
    <RouterLink to="/" class="back-link">&larr; Back to galleries</RouterLink>

    <template v-if="gallery">
      <h1>{{ gallery.title }}</h1>
      <FlipBook
        ref="flipbook"
        :pages="gallery.pages"
        :zooms="[1]"
        :click-to-zoom="false"
        class="flipbook"
        :style="{ aspectRatio: gallery.aspectRatio }"
        tabindex="0"
        @keydown="onKeydown"
      />
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

.flipbook {
  width: 100%;
  max-width: 1600px;
  max-height: 92vh;
  margin: 0 auto;
  outline: none;
}
</style>
