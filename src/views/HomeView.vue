<script setup lang="ts">
import { galleries } from '../data/galleries'
</script>

<template>
  <main class="home">
    <header class="home__header">
      <div class="home__header-row">
        <h1>Digital photobooks</h1>
        <RouterLink to="/about" class="home__about-link">README.md</RouterLink>
      </div>
      <p>A collection of photobooks made by me, consist exclusively of my film photos. Now digitalized for free online viewing!</p>
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
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.home__header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fdfdfd;
  padding: 2rem 0 1.5rem;
  margin-bottom: 0.5rem;
}

.home__header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}

.home__header h1 {
  font-size: 1.75rem;
  margin: 0;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 480px) {
  .home__header h1 {
    font-size: 1.25rem;
  }
}

.home__header p {
  margin: 0.75rem 0 1.5rem;
  max-width: 640px;
}

.home__about-link {
  flex-shrink: 0;
  white-space: nowrap;
}

.gallery-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 160px));
  gap: 1.5rem;
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
  background: #b1b2b5;
  border-radius: 4px;
  transition: transform 0.2s ease;
}

.gallery-card h2 {
  font-size: 1rem;
  margin-top: 0.05rem 0 0;
}

.gallery-card p {
  font-size: 0.8rem;
  opacity: 0.8;
}

.gallery-card:hover .gallery-card__cover {
  transform: scale(1.02);
}
</style>
