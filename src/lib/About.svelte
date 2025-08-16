<script>
  import { Car, Utensils, Music, Store, Sparkles, Users, Calendar, MapPin } from 'lucide-svelte';
  import { Spring, prefersReducedMotion } from 'svelte/motion';
  import { onMount } from 'svelte';
  
  const features = [
    { 
      icon: Car, 
      title: 'Exposição de Carros', 
      desc: '200+ lowriders e veículos customizados em exposição',
      highlight: 'Mais de 200 carros únicos',
      color: 'var(--candy-red)'
    },
    { 
      icon: Utensils, 
      title: 'Praça de Alimentação', 
      desc: 'Food trucks e comidas típicas mexicanas',
      highlight: 'Sabores autênticos',
      color: 'var(--sun-yellow)'
    },
    { 
      icon: Music, 
      title: 'Shows ao Vivo', 
      desc: 'Hip-hop, rap e música chicana',
      highlight: 'Artistas renomados',
      color: 'var(--royal-blue)'
    },
    { 
      icon: Store, 
      title: 'Barracas de Exposição', 
      desc: 'Artesanato, roupas e acessórios automotivos',
      highlight: 'Arte e cultura',
      color: 'var(--deep-purple)'
    }
  ];
  
  // Springs for staggered animations
  const cardSprings = features.map(() => new Spring(0, {
    stiffness: 0.1,
    damping: 0.8
  }));
  
  const iconRotation = new Spring(0, {
    stiffness: 0.05,
    damping: 0.7
  });
  
  let visible = false;
  
  onMount(() => {
    // Staggered entrance animation
    setTimeout(() => {
      visible = true;
      cardSprings.forEach((spring, index) => {
        setTimeout(() => {
          spring.set(1);
        }, index * 150); // 150ms delay between each card
      });
    }, 200);
    
    // Continuous icon rotation
    const rotateIcons = () => {
      iconRotation.set(360);
      setTimeout(() => {
        iconRotation.set(0);
        setTimeout(rotateIcons, 3000);
      }, 2000);
    };
    
    setTimeout(rotateIcons, 1000);
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
    
    <!-- Cards de Features com Animações -->
    <div class="features-grid">
      {#each features as feature, index}
        <div 
          class="feature-card"
          style:transform="translateY({(1 - $cardSprings[index]) * 50}px) scale({$cardSprings[index]})"
          style:opacity={$cardSprings[index]}
          style:--feature-color={feature.color}
        >
          <div class="feature-icon">
            <svelte:component 
              this={feature.icon} 
              size={60} 
              strokeWidth={1.5}
              style="transform: rotate({$iconRotation * (index + 1) / features.length}deg)"
            />
            <div class="icon-glow"></div>
          </div>
          <h3>{feature.title}</h3>
          <p class="feature-highlight">{feature.highlight}</p>
          <p>{feature.desc}</p>
          
          <!-- Sparkle effect -->
          <div class="sparkle sparkle-1">
            <Sparkles size={16} />
          </div>
          <div class="sparkle sparkle-2">
            <Sparkles size={12} />
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stat-item">
        <Users size={40} />
        <span class="stat-number">5000+</span>
        <span class="stat-label">Visitantes</span>
      </div>
      <div class="stat-item">
        <Car size={40} />
        <span class="stat-number">200+</span>
        <span class="stat-label">Lowriders</span>
      </div>
      <div class="stat-item">
        <Calendar size={40} />
        <span class="stat-number">2</span>
        <span class="stat-label">Dias</span>
      </div>
      <div class="stat-item">
        <MapPin size={40} />
        <span class="stat-number">1</span>
        <span class="stat-label">Local Épico</span>
      </div>
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
    color: var(--feature-color, var(--primary));
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 50%;
    padding: 20px;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    border: 3px solid var(--feature-color, var(--primary));
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  .icon-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, var(--feature-color, var(--primary)) 0%, transparent 70%);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .feature-card:hover .feature-icon {
    background: rgba(255, 215, 0, 0.2);
    border-color: var(--gold-accent);
    transform: scale(1.15);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
  }
  
  .feature-card:hover .icon-glow {
    opacity: 0.3;
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
  
  /* Sparkle Effects */
  .sparkle {
    position: absolute;
    color: var(--gold-accent);
    opacity: 0;
    animation: sparkle 2s ease-in-out infinite;
  }
  
  .sparkle-1 {
    top: 15px;
    right: 15px;
    animation-delay: 0s;
  }
  
  .sparkle-2 {
    bottom: 15px;
    left: 15px;
    animation-delay: 1s;
  }
  
  .feature-card:hover .sparkle {
    opacity: 1;
  }
  
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0; 
      transform: scale(0) rotate(0deg); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1) rotate(180deg); 
    }
  }
  
  /* Stats Section */
  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    margin-top: 60px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 215, 0, 0.3);
  }
  
  .stat-item {
    text-align: center;
    color: white;
  }
  
  .stat-item :global(svg) {
    color: var(--gold-accent);
    margin-bottom: 15px;
  }
  
  .stat-number {
    display: block;
    font-family: var(--heading-font);
    font-size: 2.5em;
    font-weight: 700;
    color: var(--gold-accent);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    margin-bottom: 5px;
  }
  
  .stat-label {
    display: block;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.9;
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
    
    .stats-section {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 30px 20px;
    }
    
    .stat-number {
      font-size: 2em;
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
    
    .stats-section {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 20px 15px;
    }
    
    .stat-number {
      font-size: 1.8em;
    }
    
    .stat-label {
      font-size: 0.9em;
    }
  }
</style>