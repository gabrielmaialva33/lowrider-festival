<script>
  const features = [
    { icon: '🚗', title: '200+ Carros', desc: 'Exposição exclusiva' },
    { icon: '🎨', title: 'Arte ao Vivo', desc: 'Grafite e pintura' },
    { icon: '🏆', title: 'Competições', desc: 'Prêmios incríveis' },
    { icon: '🎵', title: 'Shows ao Vivo', desc: 'Hip-hop e mais' }
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
            <div class="feature-icon">{feature.icon}</div>
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
    background: var(--light);
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
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    font-size: 2em;
    margin-bottom: 10px;
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