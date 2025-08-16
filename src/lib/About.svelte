<script>
  import { Car, Utensils, Music, Store } from 'lucide-svelte';
  
  const features = [
    { 
      icon: Car, 
      title: 'Exposição de Carros', 
      desc: '200+ lowriders e veículos customizados em exposição' 
    },
    { 
      icon: Utensils, 
      title: 'Praça de Alimentação', 
      desc: 'Food trucks e comidas típicas mexicanas' 
    },
    { 
      icon: Music, 
      title: 'Shows ao Vivo', 
      desc: 'Hip-hop, rap e música chicana' 
    },
    { 
      icon: Store, 
      title: 'Barracas de Exposição', 
      desc: 'Artesanato, roupas e acessórios automotivos' 
    }
  ];
</script>

<section class="about" id="about">
  <div class="container">
    <h2 class="section-title">Sobre o Evento</h2>
    <div class="about-content">
      <div class="about-text">
        <p>
          Prepare-se para dois dias inesquecíveis de pura cultura lowrider, arte chicana e muita adrenalina! 
          O Festival Lowrider & Cultura Chicana traz o melhor da cena automotiva customizada, 
          com exposições, competições e shows que vão fazer história.
        </p>
        <p>
          Um evento único que celebra a arte, a música e o lifestyle que transformou carros 
          em obras de arte sobre rodas. Venha viver essa experiência única com a família!
        </p>
      </div>
      <div class="about-features">
        {#each features as feature}
          <div class="feature-card">
            <div class="feature-icon">
              <svelte:component this={feature.icon} size={48} strokeWidth={1.5} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    background: 
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url('https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1200&h=800&fit=crop&crop=center') center/cover;
    color: white;
  }
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
  }
  
  .about-text {
    font-size: 1.1em;
    line-height: 1.8;
  }
  
  .about-text p {
    margin-bottom: 20px;
  }
  
  .about-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .feature-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 
      0 8px 32px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.2);
    border: 1px solid var(--gold-accent);
    transition: all 0.3s ease;
    color: var(--dark);
  }
  
  .feature-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 15px 40px rgba(0,0,0,0.4),
      0 0 20px rgba(255,215,0,0.3);
  }
  
  .feature-icon {
    margin-bottom: 15px;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .feature-icon :global(svg) {
    transition: all 0.3s ease;
  }
  
  .feature-card:hover .feature-icon :global(svg) {
    transform: scale(1.1);
    color: var(--gold-accent);
  }
  
  .feature-card h3 {
    margin: 10px 0;
    color: var(--dark);
  }
  
  .feature-card p {
    color: #666;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }
  }
</style>