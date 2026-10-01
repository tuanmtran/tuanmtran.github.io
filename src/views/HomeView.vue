<script setup lang="ts">
import { galleries } from '../data/galleries'
</script>

<template>
  <main class="home">
    <header class="home__header">
      <h1>Tony Portfolio</h1>
      <p>A collection of flipbook-style photo galleries made by me, consist exclusively of my film photos.</p>
    </header>

    <ul class="gallery-grid">
      <li v-for="gallery in galleries" :key="gallery.slug" class="gallery-card">
        <RouterLink :to="{ name: 'gallery', params: { slug: gallery.slug } }">
          <img
            :src="gallery.cover"
            :alt="gallery.title"
            class="gallery-card__cover"
            :style="{ aspectRatio: gallery.aspectRatio }"
          />
          <h2>{{ gallery.title }}</h2>
          <p v-if="gallery.description">{{ gallery.description }}</p>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
  text-align: center;
}

.home__header {
  margin-bottom: 2.5rem;
}

.gallery-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 160px));
  justify-content: center;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.gallery-card a {
  display: block;
  color: inherit;
  text-decoration: none;
}

.gallery-card__cover {
  width: 100%;
  object-fit: contain;
  background: #111;
  border-radius: 6px;
  transition: transform 0.2s ease;
}

.gallery-card h2 {
  font-size: 1rem;
  margin: 0.5rem 0 0.25rem;
}

.gallery-card p {
  font-size: 0.8rem;
  opacity: 0.8;
}

.gallery-card:hover .gallery-card__cover {
  transform: scale(1.02);
}
</style>
