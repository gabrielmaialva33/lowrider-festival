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
    <h2 class="section-title">Nossos Parceiros</h2>
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
    background: var(--light);
  }
  
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
  
  .partner-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  .partner-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
  
  .partner-card.special {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    grid-column: span 2;
  }
  
  .partner-name {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .partner-role {
    font-size: 0.9em;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    .partner-card.special {
      grid-column: span 1;
    }
  }
</style>