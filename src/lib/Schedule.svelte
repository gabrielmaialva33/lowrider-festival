<script>
  let activeDay = 1;
  
  const scheduleDay1 = [
    { time: '09:00', event: 'Abertura dos Portões' },
    { time: '10:00', event: 'Início da Exposição de Lowriders' },
    { time: '11:00', event: 'Grafite ao Vivo - Arte Chicana' },
    { time: '14:00', event: 'Hop Contest - Suspensão Hidráulica' },
    { time: '16:00', event: 'Competição de Som Automotivo' },
    { time: '19:00', event: 'Show Principal - Hip Hop & Rap' }
  ];
  
  const scheduleDay2 = [
    { time: '09:00', event: 'Abertura dos Portões' },
    { time: '10:00', event: 'Trilhas 4x4 - Aventura Off-Road' },
    { time: '13:00', event: 'Disputa In Roça - Corrida de Bikes' },
    { time: '15:00', event: 'Exposição de Lowbikes' },
    { time: '17:00', event: 'Premiação Geral' },
    { time: '19:00', event: 'Show de Encerramento' }
  ];
  
  $: currentSchedule = activeDay === 1 ? scheduleDay1 : scheduleDay2;
</script>

<section class="schedule" id="schedule">
  <div class="container">
    <h2 class="section-title">Programação</h2>
    <div class="schedule-tabs">
      <button 
        class="tab-btn" 
        class:active={activeDay === 1}
        on:click={() => activeDay = 1}
      >
        Sábado 28/06
      </button>
      <button 
        class="tab-btn" 
        class:active={activeDay === 2}
        on:click={() => activeDay = 2}
      >
        Domingo 29/06
      </button>
    </div>
    <div class="schedule-content">
      <div class="timeline">
        {#each currentSchedule as item}
          <div class="timeline-item">
            <div class="timeline-time">{item.time}</div>
            <div class="timeline-event">{item.event}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .schedule {
    background: linear-gradient(135deg, 
      var(--dark) 0%, 
      var(--deep-purple) 50%, 
      var(--royal-blue) 100%
    );
    color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .schedule::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, transparent 35%, var(--gold-accent) 35%, var(--gold-accent) 36%, transparent 36%),
      linear-gradient(-45deg, transparent 35%, var(--turquoise) 35%, var(--turquoise) 36%, transparent 36%);
    background-size: 50px 50px;
    opacity: 0.03;
    pointer-events: none;
  }
  
  /* Override para o título da seção */
  .schedule :global(.section-title) {
    color: white !important;
    text-shadow: 
      3px 3px 6px rgba(0,0,0,0.8),
      0 0 20px rgba(255, 215, 0, 0.4);
    font-weight: 800;
    letter-spacing: 3px;
  }
  
  .schedule :global(.section-title::after) {
    background: var(--gold-accent) !important;
    box-shadow: 
      0 0 20px rgba(255, 215, 0, 0.6),
      0 4px 8px rgba(0,0,0,0.3);
    height: 6px !important;
    width: 120px !important;
  }
  
  .schedule-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    position: relative;
    z-index: 1;
  }
  
  .tab-btn {
    padding: 15px 40px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid var(--gold-accent);
    color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 700;
    font-size: 1.1em;
    font-family: var(--heading-font);
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  
  .tab-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 215, 0, 0.2), 
      transparent
    );
    transition: left 0.5s ease;
  }
  
  .tab-btn:hover::before {
    left: 100%;
  }
  
  .tab-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
    border-color: var(--chrome-silver);
  }
  
  .tab-btn.active {
    background: var(--candy-gradient);
    color: white;
    border-color: var(--chrome-silver);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
  }
  
  .schedule-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    border: 2px solid var(--gold-accent);
    position: relative;
    overflow: hidden;
    max-width: 800px;
    margin: 0 auto;
    z-index: 1;
  }
  
  .schedule-content::before {
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
    transition: left 0.8s ease;
  }
  
  .schedule-content:hover::before {
    left: 100%;
  }
  
  .timeline {
    position: relative;
    padding-left: 40px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(180deg, 
      var(--candy-red) 0%, 
      var(--gold-accent) 50%, 
      var(--royal-blue) 100%
    );
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }
  
  .timeline-item {
    position: relative;
    padding-bottom: 35px;
    transition: all 0.3s ease;
  }
  
  .timeline-item:hover {
    transform: translateX(10px);
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -42px;
    top: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--gold-accent);
    border: 4px solid white;
    box-shadow: 
      0 0 0 3px var(--candy-red),
      0 0 15px rgba(255, 215, 0, 0.6);
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  .timeline-item:hover::before {
    transform: scale(1.2);
    background: var(--candy-red);
    box-shadow: 
      0 0 0 3px var(--gold-accent),
      0 0 25px rgba(204, 0, 0, 0.8);
  }
  
  .timeline-time {
    font-family: var(--heading-font);
    font-weight: 700;
    font-size: 1.3em;
    color: var(--candy-red);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }
  
  .timeline-event {
    font-size: 1.2em;
    color: var(--dark);
    font-weight: 600;
    line-height: 1.5;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
  }
  
  .timeline-item:nth-child(odd) .timeline-time {
    color: var(--royal-blue);
  }
  
  .timeline-item:nth-child(even) .timeline-time {
    color: var(--deep-purple);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .schedule-tabs {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
    
    .tab-btn {
      padding: 12px 30px;
      font-size: 1em;
      width: 200px;
    }
    
    .schedule-content {
      padding: 30px;
      margin: 0 20px;
    }
    
    .timeline {
      padding-left: 30px;
    }
    
    .timeline::before {
      width: 3px;
    }
    
    .timeline-item::before {
      left: -33px;
      width: 15px;
      height: 15px;
    }
    
    .timeline-time {
      font-size: 1.1em;
    }
    
    .timeline-event {
      font-size: 1em;
    }
  }
  
  @media (max-width: 480px) {
    .schedule-content {
      padding: 25px 20px;
      margin: 0 15px;
    }
    
    .timeline {
      padding-left: 25px;
    }
    
    .timeline-item::before {
      left: -28px;
      width: 12px;
      height: 12px;
      border: 3px solid white;
    }
    
    .timeline-time {
      font-size: 1em;
    }
    
    .timeline-event {
      font-size: 0.95em;
    }
  }
</style>