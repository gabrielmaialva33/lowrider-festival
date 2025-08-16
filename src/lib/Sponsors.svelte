<script>
  import { onMount } from 'svelte';
  import { Spring } from 'svelte/motion';
  
  const sponsors = [
    {
      id: 1,
      name: 'Chrome Garage',
      logo: '/images/sponsors/chrome-garage.png',
      category: 'platinum',
      description: 'Especialistas em customização automotiva'
    },
    {
      id: 2,
      name: 'Lowrider Parts Co.',
      logo: '/images/sponsors/lowrider-parts.png',
      category: 'platinum',
      description: 'Peças exclusivas para lowriders'
    },
    {
      id: 3,
      name: 'Chicano Art Studio',
      logo: '/images/sponsors/chicano-art.png',
      category: 'gold',
      description: 'Arte chicana autêntica'
    },
    {
      id: 4,
      name: 'Hydraulic Systems',
      logo: '/images/sponsors/hydraulic-systems.png',
      category: 'gold',
      description: 'Sistemas hidráulicos profissionais'
    },
    {
      id: 5,
      name: 'Custom Wheels Brasil',
      logo: '/images/sponsors/custom-wheels.png',
      category: 'silver',
      description: 'Rodas exclusivas e personalizadas'
    },
    {
      id: 6,
      name: 'Paint Shop Pro',
      logo: '/images/sponsors/paint-shop.png',
      category: 'silver',
      description: 'Pintura automotiva premium'
    }
  ];
  
  const categoryTitles = {
    platinum: 'Patrocinadores Platinum',
    gold: 'Patrocinadores Gold', 
    silver: 'Patrocinadores Silver'
  };
  
  const categoryColors = {
    platinum: 'var(--chrome-silver)',
    gold: 'var(--gold-accent)',
    silver: '#A8A8A8'
  };
  
  // Springs for animations
  const sponsorSprings = sponsors.map(() => new Spring(0, {
    stiffness: 0.08,
    damping: 0.9
  }));
  
  let visible = false;
  
  onMount(() => {
    setTimeout(() => {
      visible = true;
      sponsorSprings.forEach((spring, index) => {
        setTimeout(() => {
          spring.set(1);
        }, index * 100);
      });
    }, 300);
  });
  
  // Group sponsors by category
  $: sponsorsByCategory = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.category]) acc[sponsor.category] = [];
    acc[sponsor.category].push(sponsor);
    return acc;
  }, {});
</script>

<section class="sponsors" id="sponsors">
  <div class="container">
    <h2 class="section-title chicano-title">Nossos Parceiros</h2>
    <p class="sponsors-subtitle">Empresas que apoiam a cultura lowrider</p>
    
    {#each Object.entries(sponsorsByCategory) as [category, categorySponsors]}
      <div class="sponsor-category">
        <h3 
          class="category-title"
          style:color={categoryColors[category]}
        >
          {categoryTitles[category]}
        </h3>
        
        <div 
          class="sponsors-grid"
          class:platinum={category === 'platinum'}
          class:gold={category === 'gold'}
          class:silver={category === 'silver'}
        >
          {#each categorySponsors as sponsor, index}
            {@const springIndex = sponsors.findIndex(s => s.id === sponsor.id)}
            <div 
              class="sponsor-card {category}"
              style:transform="translateY({(1 - sponsorSprings[springIndex].current) * 30}px) scale({sponsorSprings[springIndex].current})"
              style:opacity={sponsorSprings[springIndex].current}
              style:--category-color={categoryColors[category]}
            >
              <div class="sponsor-logo">
                <div class="logo-placeholder" style:background="linear-gradient(45deg, {categoryColors[category]}, white)">
                  <span class="logo-text">{sponsor.name.substring(0, 2)}</span>
                </div>
                <div class="logo-glow"></div>
              </div>
              <h4 class="sponsor-name">{sponsor.name}</h4>
              <p class="sponsor-description">{sponsor.description}</p>
              
              <!-- Efeito de brilho metálico -->
              <div class="sponsor-shine"></div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
    
    <!-- Call to Action para novos patrocinadores -->
    <div class="sponsor-cta">
      <h3>Seja um Patrocinador</h3>
      <p>Junte-se aos grandes nomes da cultura lowrider</p>
      <a href="#contact" class="btn btn-primary hydraulic-bounce">Entre em Contato</a>
    </div>
  </div>
</section>

<style>
  .sponsors {
    background: linear-gradient(135deg, 
      var(--dark) 0%, 
      var(--secondary) 50%, 
      var(--dark) 100%
    );
    color: white;
    padding: 100px 0;
    overflow: hidden;
  }
  
  .sponsors-subtitle {
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 60px;
    opacity: 0.9;
    color: var(--chrome-silver);
  }
  
  .sponsor-category {
    margin-bottom: 80px;
  }
  
  .category-title {
    font-family: var(--heading-font);
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    position: relative;
  }
  
  .category-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: currentColor;
    box-shadow: 0 0 15px currentColor;
  }
  
  .sponsors-grid {
    display: grid;
    gap: 30px;
    justify-items: center;
  }
  
  .sponsors-grid.platinum {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  
  .sponsors-grid.gold {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .sponsors-grid.silver {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .sponsor-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    border: 2px solid var(--category-color);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }
  
  .sponsor-card.platinum {
    padding: 40px;
    background: rgba(192, 192, 192, 0.1);
  }
  
  .sponsor-card.gold {
    padding: 35px;
    background: rgba(255, 215, 0, 0.1);
  }
  
  .sponsor-card.silver {
    padding: 30px;
    background: rgba(168, 168, 168, 0.1);
  }
  
  .sponsor-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    border-color: var(--gold-accent);
  }
  
  .sponsor-logo {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .logo-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--category-color);
    position: relative;
    overflow: hidden;
  }
  
  .sponsor-card.platinum .logo-placeholder {
    width: 140px;
    height: 140px;
  }
  
  .sponsor-card.gold .logo-placeholder {
    width: 130px;
    height: 130px;
  }
  
  .logo-text {
    font-family: var(--heading-font);
    font-size: 2em;
    font-weight: 700;
    color: var(--dark);
    text-shadow: 1px 1px 2px rgba(255,255,255,0.3);
  }
  
  .logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle, var(--category-color) 0%, transparent 70%);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .sponsor-card:hover .logo-glow {
    opacity: 0.2;
  }
  
  .sponsor-name {
    font-family: var(--heading-font);
    font-size: 1.5em;
    margin-bottom: 10px;
    color: var(--category-color);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .sponsor-card.platinum .sponsor-name {
    font-size: 1.8em;
  }
  
  .sponsor-card.gold .sponsor-name {
    font-size: 1.6em;
  }
  
  .sponsor-description {
    color: #ccc;
    line-height: 1.6;
    font-size: 1em;
    margin: 0;
  }
  
  .sponsor-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    transition: transform 0.6s ease;
  }
  
  .sponsor-card:hover .sponsor-shine {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
  
  /* CTA Section */
  .sponsor-cta {
    text-align: center;
    margin-top: 80px;
    padding: 50px;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 30px;
    border: 2px solid var(--primary);
    backdrop-filter: blur(10px);
  }
  
  .sponsor-cta h3 {
    font-family: var(--heading-font);
    font-size: 2.5em;
    margin-bottom: 15px;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .sponsor-cta p {
    font-size: 1.2em;
    margin-bottom: 30px;
    opacity: 0.9;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .sponsors-grid.platinum,
    .sponsors-grid.gold,
    .sponsors-grid.silver {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .sponsor-card {
      padding: 25px;
    }
    
    .sponsor-card.platinum,
    .sponsor-card.gold {
      padding: 30px;
    }
    
    .logo-placeholder {
      width: 100px !important;
      height: 100px !important;
    }
    
    .logo-text {
      font-size: 1.5em;
    }
    
    .sponsor-name {
      font-size: 1.3em !important;
    }
    
    .category-title {
      font-size: 1.8em;
    }
    
    .sponsor-cta {
      padding: 30px 20px;
    }
    
    .sponsor-cta h3 {
      font-size: 2em;
    }
  }
  
  @media (max-width: 480px) {
    .sponsors-grid.platinum,
    .sponsors-grid.gold,
    .sponsors-grid.silver {
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .sponsor-card {
      padding: 20px;
    }
    
    .logo-placeholder {
      width: 80px !important;
      height: 80px !important;
    }
    
    .logo-text {
      font-size: 1.2em;
    }
    
    .sponsor-name {
      font-size: 1.2em !important;
    }
    
    .category-title {
      font-size: 1.5em;
    }
    
    .sponsor-cta h3 {
      font-size: 1.8em;
    }
  }
</style>