<script>
  import {onMount} from 'svelte';
  import {galleryAssets, loadImageWithFallback, optimizeImageUrl} from './AssetManager.js';

  let selectedCategory = 'all';
    let lightboxOpen = false;
    let currentImage = null;
    let galleryContainer;

    const categories = [
        {id: 'all', name: 'Todos', icon: '🎯'},
        {id: 'cars', name: 'Lowriders', icon: '🚗'},
        {id: 'bikes', name: 'Lowbikes', icon: '🚲'},
        {id: 'art', name: 'Arte Chicana', icon: '🎨'},
        {id: 'culture', name: 'Cultura', icon: '🎭'}
    ];

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
        // Otimized lazy loading observer conforme documentação Svelte
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Carregar imagem com fallback
                    loadImageWithFallback(img.dataset.src, img.dataset.fallback || img.dataset.src)
                        .then(resolvedSrc => {
                            img.src = resolvedSrc;
                            img.classList.remove('lazy');
                            img.classList.add('loaded');
                        })
                        .catch(() => {
                            // Fallback para imagem de erro
                            img.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&q=60';
                            img.classList.remove('lazy');
                            img.classList.add('error');
                        });

                    observer.unobserve(img);
                }
            });
        }, {
            // Configurações otimizadas para performance
            rootMargin: '50px 0px',
            threshold: 0.1
        });

        // Observar todas as imagens lazy
        const observeImages = () => {
            const images = galleryContainer.querySelectorAll('img[data-src]:not(.loaded):not(.error)');
            images.forEach(img => imageObserver.observe(img));
        };

        observeImages();

        // Re-observar quando filtros mudarem
        const filterButtons = document.querySelectorAll('.category-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(observeImages, 100);
            });
        });

        return () => imageObserver.disconnect();
    });
</script>

<svelte:window on:keydown={handleKeydown}/>

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
        <div bind:this={galleryContainer} class="gallery-grid">
            {#each filteredItems as item (item.id)}
                <button
                        class="gallery-item hydraulic-bounce"
                        on:click={() => openLightbox(item)}
                        aria-label="Ver imagem {item.title} em tamanho completo"
                >
                    <div class="image-container">
                        <img
                                data-src={optimizeImageUrl(item.src, 600, 400, 80)}
                                data-fallback={item.placeholder}
                                alt={item.title}
                                class="gallery-image lazy"
                                loading="lazy"
                                width="600"
                                height="400"
                                decoding="async"
                                fetchpriority={item.id <= 2 ? "high" : "auto"}
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
            on:click={(e) => e.target === e.currentTarget && closeLightbox()}
            on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            tabindex="-1"
    >
        <div
                class="lightbox-content"
                aria-labelledby="lightbox-title"
        >
            <button class="close-btn" on:click={closeLightbox}>&times;</button>
            <img
                    src={optimizeImageUrl(currentImage.src, 1200, 900, 90)}
                    alt={currentImage.title}
                    class="lightbox-image"
                    width="1200"
                    height="900"
                    decoding="async"
                    fetchpriority="high"
                    on:error={(e) => {
          e.target.src = currentImage.placeholder || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80';
        }}
            />
            <div class="lightbox-info">
                <h3 class="lightbox-title chrome-text">{currentImage.title}</h3>
                <p class="lightbox-description">{currentImage.description}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    .gallery {
        background: linear-gradient(135deg,
        var(--dark) 0%,
        var(--deep-purple) 25%,
        var(--royal-blue) 50%,
        var(--secondary) 75%,
        var(--dark) 100%
        );
        color: white;
        padding: 100px 0;
        position: relative;
        overflow: hidden;
    }

    .gallery::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 25px,
                var(--gold-accent) 25px,
                var(--gold-accent) 27px,
                transparent 27px,
                transparent 52px
        ),
        repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 30px,
                var(--chrome-silver) 30px,
                var(--chrome-silver) 32px,
                transparent 32px,
                transparent 62px
        );
        opacity: 0.03;
        pointer-events: none;
        animation: hydraulic-side-to-side 20s ease-in-out infinite;
    }

    .gallery::after {
        content: '🚗 🎨 🎵 🚲';
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2.5em;
        opacity: 0.08;
        animation: lowrider-hop 10s ease-in-out infinite;
        z-index: 0;
    }

    /* Override para o título da seção */
    .gallery :global(.section-title) {
        color: white !important;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8),
        0 0 25px rgba(255, 215, 0, 0.5);
        font-weight: 900;
        letter-spacing: 4px;
        position: relative;
        z-index: 1;
    }

    .gallery :global(.section-title::after) {
        background: linear-gradient(90deg, 
        var(--candy-red), 
        var(--gold-accent), 
        var(--turquoise)) !important;
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.7),
        0 6px 12px rgba(0, 0, 0, 0.4);
        height: 8px !important;
        width: 150px !important;
    }

    .gallery-subtitle {
        text-align: center;
        font-size: 1.4em;
        margin-bottom: 50px;
        opacity: 0.9;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        font-weight: 600;
        letter-spacing: 1px;
        position: relative;
        z-index: 1;
        background: rgba(255, 215, 0, 0.1);
        backdrop-filter: blur(10px);
        padding: 15px 30px;
        border-radius: 25px;
        border: 2px solid rgba(255, 215, 0, 0.3);
        max-width: 600px;
        margin: 0 auto 50px;
    }

    .category-filters {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 60px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
    }

    .category-btn {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        color: white;
        border: 3px solid var(--chrome-silver);
        padding: 15px 30px;
        border-radius: 40px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: var(--body-font);
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        overflow: hidden;
        font-size: 1.1em;
    }

    .category-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,
        transparent,
        rgba(255, 215, 0, 0.3),
        transparent
        );
        transition: left 0.6s ease;
    }

    .category-btn:hover::before,
    .category-btn.active::before {
        left: 100%;
    }

    .category-btn:hover,
    .category-btn.active {
        background: linear-gradient(135deg, 
        var(--candy-red), 
        var(--gold-accent)
        );
        border-color: var(--gold-accent);
        color: var(--dark);
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4),
        0 0 20px rgba(204, 0, 0, 0.3);
    }

    .category-btn:nth-child(1):hover,
    .category-btn:nth-child(1).active {
        background: linear-gradient(135deg, var(--gold-accent), var(--sun-yellow));
    }

    .category-btn:nth-child(2):hover,
    .category-btn:nth-child(2).active {
        background: linear-gradient(135deg, var(--candy-red), var(--gold-accent));
    }

    .category-btn:nth-child(3):hover,
    .category-btn:nth-child(3).active {
        background: linear-gradient(135deg, var(--deep-purple), var(--turquoise));
    }

    .category-btn:nth-child(4):hover,
    .category-btn:nth-child(4).active {
        background: linear-gradient(135deg, var(--royal-blue), var(--chrome-silver));
    }

    .category-btn:nth-child(5):hover,
    .category-btn:nth-child(5).active {
        background: linear-gradient(135deg, var(--turquoise), var(--sun-yellow));
    }

    .category-icon {
        font-size: 1.4em;
        filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 35px;
        position: relative;
        z-index: 1;
    }

    .gallery-item {
        cursor: pointer;
        border-radius: 20px;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border: 3px solid var(--gold-accent);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        position: relative;
    }

    .gallery-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg,
        rgba(255, 215, 0, 0.1) 0%,
        transparent 50%,
        rgba(204, 0, 0, 0.1) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
        pointer-events: none;
    }

    .gallery-item:hover::before {
        opacity: 1;
    }

    .gallery-item:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(255, 215, 0, 0.4);
        border-color: var(--candy-red);
    }

    .gallery-item:nth-child(odd):hover {
        animation: hydraulic-bounce 1.2s ease-in-out infinite;
    }

    .gallery-item:nth-child(even):hover {
        animation: lowrider-hop 1.5s ease-in-out infinite;
    }

    .image-container {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
        background: linear-gradient(45deg, var(--dark), var(--secondary));
    }

    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 15px 15px 0 0;
    }

    .gallery-image.lazy {
        background: linear-gradient(45deg, 
        var(--dark), 
        var(--secondary), 
        var(--candy-red)
        );
        animation: pulse 1.5s infinite, hydraulic-side-to-side 3s ease-in-out infinite;
    }

    .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, 
        rgba(26, 26, 26, 0.95)
        );
        color: white;
        padding: 40px 25px 25px;
        transform: translateY(100%);
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        z-index: 2;
    }

    .gallery-item:hover .image-overlay {
        transform: translateY(0);
    }

    .gallery-item:hover .gallery-image {
        transform: scale(1.15) rotate(1deg);
        filter: brightness(1.1) contrast(1.1);
    }

    .image-title {
        font-family: var(--heading-font);
        font-size: 1.6em;
        margin-bottom: 10px;
        color: var(--gold-accent);
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        font-weight: 700;
    }

    .image-description {
        font-size: 1em;
        opacity: 0.9;
        margin-bottom: 15px;
        line-height: 1.5;
        color: var(--chrome-silver);
        font-weight: 500;
    }

    .zoom-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, 
        var(--gold-accent), 
        var(--sun-yellow)
        );
        color: var(--dark);
        padding: 12px;
        border-radius: 50%;
        font-size: 1.4em;
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.5);
        transition: all 0.3s ease;
        z-index: 3;
        border: 2px solid white;
    }

    .gallery-item:hover .zoom-icon {
        transform: scale(1.2) rotate(360deg);
        box-shadow: 0 8px 25px rgba(255, 215, 0, 0.8);
    }

    /* Lightbox Styles */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
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
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
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
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
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