<script>
  import { onMount } from 'svelte';
  
  let selectedCategory = 'all';
  let lightboxOpen = false;
  let currentImage = null;
  let galleryContainer;
  
  const categories = [
    { id: 'all', name: 'Todos', icon: '🎯' },
    { id: 'cars', name: 'Lowriders', icon: '🚗' },
    { id: 'bikes', name: 'Lowbikes', icon: '🚲' },
    { id: 'art', name: 'Arte Chicana', icon: '🎨' },
    { id: 'culture', name: 'Cultura', icon: '🎭' }
  ];
  
  import { galleryAssets, optimizeImageUrl } from './AssetManager.svelte';
  
  // Imagens reais do festival lowrider
  const galleryItems = galleryAssets;
  
  $: filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);
  
  function openLightbox(item) {
    currentImage = item;
    lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightboxOpen = false;
    currentImage = null;
    document.body.style.overflow = 'auto';
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }
  
  onMount(() => {
    // Lazy loading observer
    const images = galleryContainer.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    return () => imageObserver.disconnect();
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="gallery" id="gallery">
  <div class="container">
    <h2 class="section-title chicano-title">Galeria Lowrider</h2>
    <p class="gallery-subtitle lowrider-text">Momentos épicos da cultura lowrider e chicana</p>
    
    <!-- Filtros de Categoria -->
    <div class="category-filters">
      {#each categories as category}
        <button 
          class="category-btn" 
          class:active={selectedCategory === category.id}
          on:click={() => selectedCategory = category.id}
        >
          <span class="category-icon">{category.icon}</span>
          {category.name}
        </button>
      {/each}
    </div>
    
    <!-- Grid de Imagens -->
    <div class="gallery-grid" bind:this={galleryContainer}>
      {#each filteredItems as item (item.id)}
        <button 
          class="gallery-item hydraulic-bounce" 
          on:click={() => openLightbox(item)}
          aria-label="Ver imagem {item.title} em tamanho completo"
        >
          <div class="image-container">
            <img 
              data-src={item.placeholder} 
              alt={item.title}
              class="gallery-image lazy"
              loading="lazy"
            />
            <div class="image-overlay">
              <h3 class="image-title">{item.title}</h3>
              <p class="image-description">{item.description}</p>
              <div class="zoom-icon">🔍</div>
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
{#if lightboxOpen && currentImage}
  <div 
    class="lightbox" 
    on:click={closeLightbox}
    role="dialog"
    aria-modal="true"
    aria-labelledby="lightbox-title"
  >
    <div 
      class="lightbox-content" 
      on:click|stopPropagation
      role="img"
      aria-labelledby="lightbox-title"
    >
      <button class="close-btn" on:click={closeLightbox}>&times;</button>
      <img src={currentImage.placeholder} alt={currentImage.title} class="lightbox-image" />
      <div class="lightbox-info">
        <h3 class="lightbox-title chrome-text">{currentImage.title}</h3>
        <p class="lightbox-description">{currentImage.description}</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .gallery {
    background: linear-gradient(135deg, var(--dark) 0%, var(--secondary) 100%);
    color: white;
    padding: 100px 0;
  }
  
  .gallery-subtitle {
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 50px;
    opacity: 0.9;
  }
  
  .category-filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  
  .category-btn {
    background: transparent;
    color: white;
    border: 2px solid var(--chrome-silver);
    padding: 12px 24px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--body-font);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .category-btn:hover,
  .category-btn.active {
    background: var(--candy-gradient);
    border-color: var(--gold-accent);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
  
  .category-icon {
    font-size: 1.2em;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .gallery-item {
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
  }
  
  .image-container {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
  }
  
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-image.lazy {
    background: linear-gradient(45deg, #333, #555);
    animation: pulse 1.5s infinite;
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.9));
    color: white;
    padding: 30px 20px 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover .image-overlay {
    transform: translateY(0);
  }
  
  .gallery-item:hover .gallery-image {
    transform: scale(1.1);
  }
  
  .image-title {
    font-family: var(--heading-font);
    font-size: 1.4em;
    margin-bottom: 8px;
    color: var(--gold-accent);
  }
  
  .image-description {
    font-size: 0.9em;
    opacity: 0.9;
    margin-bottom: 15px;
  }
  
  .zoom-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 215, 0, 0.2);
    padding: 8px;
    border-radius: 50%;
    font-size: 1.2em;
  }
  
  /* Lightbox Styles */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  }
  
  .lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: var(--dark);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  }
  
  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    z-index: 1001;
    transition: transform 0.2s ease;
  }
  
  .close-btn:hover {
    transform: scale(1.2);
    color: var(--gold-accent);
  }
  
  .lightbox-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
  }
  
  .lightbox-info {
    padding: 20px;
    text-align: center;
  }
  
  .lightbox-title {
    font-family: var(--heading-font);
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .lightbox-description {
    font-size: 1.1em;
    opacity: 0.9;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .category-filters {
      gap: 10px;
    }
    
    .category-btn {
      padding: 10px 16px;
      font-size: 0.9em;
    }
    
    .lightbox-content {
      max-width: 95vw;
      max-height: 95vh;
    }
  }
</style>