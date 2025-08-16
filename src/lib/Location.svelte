<script>
  const locationDetails = [
    { icon: '📍', text: 'Aeroporto Municipal - Cidade/Estado' },
    { icon: '🚗', text: 'Estacionamento com transporte shuttle gratuito' },
    { icon: '🍔', text: 'Praça de alimentação completa' },
    { icon: '🚻', text: 'Banheiros e infraestrutura completa' }
  ];
</script>

<section class="location" id="location">
  <div class="container">
    <h2 class="section-title">Local do Evento</h2>
    <div class="location-content">
      <div class="location-info">
        <h3>Aeroporto Municipal</h3>
        <p>
          Espaço amplo de 1.075x20m preparado especialmente para receber o maior festival 
          de cultura lowrider do país.
        </p>
        <ul class="location-details">
          {#each locationDetails as detail}
            <li>
              <span class="location-icon">{detail.icon}</span>
              <span>{detail.text}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div class="location-map">
        <span>🗺️ Mapa Interativo</span>
      </div>
    </div>
  </div>
</section>

<style>
  .location {
    background: white;
  }
  
  .location-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
  }
  
  .location-info {
    background: var(--light);
    padding: 40px;
    border-radius: 15px;
  }
  
  .location-info h3 {
    font-size: 1.8em;
    color: var(--dark);
    margin-bottom: 20px;
  }
  
  .location-info p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #666;
  }
  
  .location-map {
    height: 400px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
  }
  
  .location-details {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .location-details li {
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
  }
  
  .location-details li:last-child {
    border-bottom: none;
  }
  
  .location-icon {
    margin-right: 15px;
    font-size: 1.2em;
  }
  
  @media (max-width: 768px) {
    .location-content {
      grid-template-columns: 1fr;
    }
  }
</style>