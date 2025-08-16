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
    background: var(--light);
  }
  
  .schedule-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .tab-btn {
    padding: 12px 30px;
    background: white;
    border: 2px solid var(--primary);
    color: var(--primary);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: 1em;
  }
  
  .tab-btn.active {
    background: var(--primary);
    color: white;
  }
  
  .schedule-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: var(--primary);
  }
  
  .timeline-item {
    position: relative;
    padding-bottom: 30px;
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -34px;
    top: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--primary);
    border: 3px solid white;
    box-shadow: 0 0 0 3px var(--primary);
  }
  
  .timeline-time {
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 5px;
  }
  
  .timeline-event {
    font-size: 1.1em;
    color: var(--dark);
  }
</style>