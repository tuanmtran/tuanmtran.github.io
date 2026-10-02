<script setup lang="ts"></script>

<template>
  <main class="about">
    <header class="about__header">
      <h1 class="about__title">README.md</h1>
      <RouterLink to="/" class="about__close" aria-label="Back to home">
        <svg viewBox="0 0 39 39" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L37 37" stroke="currentColor" stroke-width="2" />
          <path d="M37 2L2 37" stroke="currentColor" stroke-width="2" />
        </svg>
      </RouterLink>
    </header>

    <div class="about__body">
      <img src="/assets/Image.jpeg" alt="Photo of me" class="about__photo" />

      <div class="about__text">
        <p>
          I wouldn't even call myself a photographer. But since I started taking film photos, there
          have been a desire to share them in a more meaningful manner beside social medias. So all 
          photo books will be available for free viewing digitally on my website, or
          physically at my residence.
        </p>
        <p>
          P.S: I started film photography because I became obsessed with the brand CONTAX, so if
          anyone wanna sell theirs let me know!
        </p>
      </div>
    </div>

    <p class="about__caption">
      Shot with CONTAX T, CONTAX Tvs ii<br />
      Scanned with Sony a6500 w/ TTArtisan 40mm Macro
    </p>
  </main>
</template>

<style scoped>
.about {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.about__header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1.5rem;
  margin-bottom: 0.5rem;
}

.about__title {
  font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  margin: 0;
}

.about__close {
  display: flex;
  color: inherit;
  line-height: 0;
}

.about__close:hover {
  color: #646cff;
}

.about__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
}

.about__photo {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  aspect-ratio: 353 / 372;
  object-fit: cover;
  background: #b1b2b5;
  border-radius: 6px;
}

.about__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  font-size: clamp(0.9rem, 0.8rem + 0.4vw, 1.05rem);
}

.about__text p {
  margin: 0 0 1rem;
}

.about__caption {
  font-size: 0.85rem;
  text-align: right;
  margin: 1.5rem 0 0;
}

@media (min-width: 640px) {
  .about__body {
    flex-direction: row;
    gap: 2rem;
  }

  .about__photo {
    flex: 1 1 41.7%;
    width: auto;
  }

  .about__text {
    flex: 1 1 36.9%;
  }
}
</style>
