<script>
  const partners = [
    { name: 'Marcia', role: 'Parceiro Estratégico', special: false },
    { name: 'Osmar Borges', role: 'Parceiro Estratégico', special: false },
    { name: 'Bruno Disputa In Roça', role: 'Parceiro Especial - Competições', special: true },
    { name: 'Alexandre', role: 'Parceiro Estratégico', special: false },
    { name: 'Jaina', role: 'Parceiro Estratégico', special: false },
    { name: 'Luciana Brás', role: 'Parceiro Estratégico', special: false },
    { name: 'Anderson', role: 'Parceiro Estratégico', special: false }
  ];
</script>

<section class="partners" id="partners">
  <div class="container">
    <h2 class="section-title">Apoiadores</h2>
    <div class="partners-grid">
      {#each partners as partner}
        <div class="partner-card" class:special={partner.special}>
          <div class="partner-name">{partner.name}</div>
          <div class="partner-role">{partner.role}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .partners {
    background: linear-gradient(135deg, 
      var(--light) 0%, 
      rgba(248, 249, 250, 0.9) 50%, 
      var(--light) 100%
    );
    padding: 100px 0;
    position: relative;
  }
  
  .partners::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, transparent 35%, var(--primary) 35%, var(--primary) 36%, transparent 36%),
      linear-gradient(-45deg, transparent 35%, var(--secondary) 35%, var(--secondary) 36%, transparent 36%);
    background-size: 60px 60px;
    opacity: 0.02;
    pointer-events: none;
  }
  
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 1;
  }
  
  .partner-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 35px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 2px solid rgba(255, 107, 53, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  .partner-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 107, 53, 0.1), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  .partner-card:hover::before {
    left: 100%;
  }
  
  .partner-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    border-color: var(--primary);
  }
  
  .partner-card.special {
    background: linear-gradient(135deg, 
      var(--candy-red) 0%, 
      var(--deep-purple) 50%, 
      var(--royal-blue) 100%
    );
    color: white;
    grid-column: span 2;
    border: 2px solid var(--gold-accent);
    position: relative;
  }
  
  .partner-card.special::after {
    content: '⭐';
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.5em;
    color: var(--gold-accent);
    animation: pulse 2s infinite;
  }
  
  .partner-name {
    font-family: var(--heading-font);
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--dark);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .partner-card.special .partner-name {
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  .partner-role {
    font-size: 1em;
    opacity: 0.8;
    font-weight: 500;
    color: var(--primary);
  }
  
  .partner-card.special .partner-role {
    color: var(--gold-accent);
    font-weight: 600;
  }
  
  @keyframes pulse {
    0%, 100% { 
      transform: scale(1); 
      opacity: 1; 
    }
    50% { 
      transform: scale(1.1); 
      opacity: 0.8; 
    }
  }
  
  @media (max-width: 768px) {
    .partners-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .partner-card {
      padding: 25px;
    }
    
    .partner-card.special {
      grid-column: span 1;
    }
    
    .partner-name {
      font-size: 1.3em;
    }
  }
  
  @media (max-width: 480px) {
    .partners-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
    
    .partner-card {
      padding: 20px;
    }
    
    .partner-name {
      font-size: 1.2em;
    }
    
    .partner-role {
      font-size: 0.9em;
    }
  }
</style>