<script>
  import { Car, Utensils, Music, Store, ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { onMount } from 'svelte';
  
  const features = [
    { 
      icon: Car, 
      title: 'Exposição de Carros', 
      desc: '200+ lowriders e veículos customizados em exposição',
      highlight: 'Mais de 200 carros únicos'
    },
    { 
      icon: Utensils, 
      title: 'Praça de Alimentação', 
      desc: 'Food trucks e comidas típicas mexicanas',
      highlight: 'Sabores autênticos'
    },
    { 
      icon: Music, 
      title: 'Shows ao Vivo', 
      desc: 'Hip-hop, rap e música chicana',
      highlight: 'Artistas renomados'
    },
    { 
      icon: Store, 
      title: 'Barracas de Exposição', 
      desc: 'Artesanato, roupas e acessórios automotivos',
      highlight: 'Arte e cultura'
    }
  ];
  
  let currentSlide = 0;
  let autoplayInterval;
  
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % features.length;
  };
  
  const prevSlide = () => {
    currentSlide = currentSlide === 0 ? features.length - 1 : currentSlide - 1;
  };
  
  const goToSlide = (index) => {
    currentSlide = index;
  };
  
  const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  };
  
  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };
  
  onMount(() => {
    startAutoplay();
    return () => stopAutoplay();
  });
</script>

<section class="about" id="about">
  <div class="container">
    <h2 class="section-title">Sobre o Evento</h2>
    <div class="about-intro">
      <p>
        Prepare-se para dois dias inesquecíveis de pura cultura lowrider, arte chicana e muita adrenalina! 
        O Festival Lowrider & Cultura Chicana traz o melhor da cena automotiva customizada, 
        com exposições, competições e shows que vão fazer história.
      </p>
    </div>
    
    <!-- Cards de Features -->
    <div class="features-grid">
      {#each features as feature}
        <div class="feature-card">
          <div class="feature-icon">
            <svelte:component this={feature.icon} size={60} strokeWidth={1.5} />
          </div>
          <h3>{feature.title}</h3>
          <p class="feature-highlight">{feature.highlight}</p>
          <p>{feature.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about {
    background: linear-gradient(135deg, 
      rgba(255, 107, 53, 0.9) 0%,  /* Aztec Orange */
      rgba(74, 14, 78, 0.9) 50%,   /* Deep Purple */
      rgba(0, 71, 171, 0.9) 100%   /* Royal Blue */
    );
    color: white;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  
  .about-intro {
    text-align: center;
    font-size: 1.2em;
    line-height: 1.8;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .about-intro p {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .feature-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    border: 2px solid rgba(255, 215, 0, 0.4);
    transition: all 0.4s ease;
    color: var(--dark);
    position: relative;
    overflow: hidden;
  }
  
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 215, 0, 0.1), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  .feature-card:hover::before {
    left: 100%;
  }
  
  .feature-card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    border-color: var(--gold-accent);
  }
  
  .feature-icon {
    color: var(--primary);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 15px;
    padding: 20px;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border: 2px solid var(--primary);
    transition: all 0.3s ease;
  }
  
  .feature-card:hover .feature-icon {
    background: rgba(255, 215, 0, 0.2);
    color: var(--gold-accent);
    border-color: var(--gold-accent);
    transform: scale(1.1) rotate(5deg);
  }
  
  .feature-card h3 {
    font-family: var(--heading-font);
    font-size: 1.5em;
    margin-bottom: 10px;
    color: var(--dark);
    font-weight: 700;
  }
  
  .feature-highlight {
    font-size: 1.1em;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .feature-card p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 0 20px;
    }
    
    .feature-card {
      padding: 20px;
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      padding: 15px;
    }
    
    .feature-card h3 {
      font-size: 1.3em;
    }
  }
  
  @media (max-width: 480px) {
    .about-intro {
      font-size: 1em;
      margin-bottom: 40px;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      margin: 0 10px;
    }
    
    .feature-card {
      padding: 25px 20px;
    }
    
    .feature-icon {
      width: 70px;
      height: 70px;
    }
    
    .feature-card h3 {
      font-size: 1.2em;
    }
  }
</style>