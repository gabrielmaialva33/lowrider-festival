<script>
  const teamMembers = [
    { name: 'Josi', role: 'Coordenador Geral', avatar: '👤' },
    { name: 'Maia', role: 'Diretor de Produção', avatar: '👤' },
    { name: 'Jim', role: 'Coordenador Técnico', avatar: '👤' },
    { name: 'Bruno', role: 'Diretor de Marketing', avatar: '👤' }
  ];
</script>

<section class="team" id="team">
  <div class="container">
    <h2 class="section-title">Equipe Organizadora</h2>
    <div class="team-grid">
      {#each teamMembers as member}
        <div class="team-member">
          <div class="team-avatar">{member.avatar}</div>
          <div class="team-name">{member.name}</div>
          <div class="team-role">{member.role}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .team {
    background: linear-gradient(135deg, 
      var(--dark) 0%, 
      var(--secondary) 50%, 
      var(--dark) 100%
    );
    color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .team::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 20px,
        var(--gold-accent) 20px,
        var(--gold-accent) 22px,
        transparent 22px,
        transparent 42px
      );
    opacity: 0.05;
    pointer-events: none;
  }
  
  /* Override para o título da seção */
  .team :global(.section-title) {
    color: white !important;
    text-shadow: 
      3px 3px 6px rgba(0,0,0,0.8),
      0 0 20px rgba(255, 215, 0, 0.4);
    font-weight: 800;
    letter-spacing: 3px;
  }
  
  .team :global(.section-title::after) {
    background: var(--gold-accent) !important;
    box-shadow: 
      0 0 20px rgba(255, 215, 0, 0.6),
      0 4px 8px rgba(0,0,0,0.3);
    height: 6px !important;
    width: 120px !important;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    position: relative;
    z-index: 1;
  }
  
  .team-member {
    text-align: center;
    padding: 40px 30px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 3px solid var(--gold-accent);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
    color: var(--dark);
  }
  
  .team-member::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 215, 0, 0.15), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  .team-member:hover::before {
    left: 100%;
  }
  
  .team-member:nth-child(1) {
    background: linear-gradient(135deg, 
      rgba(204, 0, 0, 0.9) 0%, 
      rgba(255, 215, 0, 0.9) 100%
    );
    color: white;
  }
  
  .team-member:nth-child(2) {
    background: linear-gradient(135deg, 
      rgba(74, 14, 78, 0.9) 0%, 
      rgba(192, 192, 192, 0.9) 100%
    );
    color: white;
  }
  
  .team-member:nth-child(3) {
    background: linear-gradient(135deg, 
      rgba(0, 71, 171, 0.9) 0%, 
      rgba(64, 224, 208, 0.9) 100%
    );
    color: white;
  }
  
  .team-member:nth-child(4) {
    background: linear-gradient(135deg, 
      rgba(255, 107, 53, 0.9) 0%, 
      rgba(139, 69, 19, 0.9) 100%
    );
    color: white;
  }
  
  .team-member:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    border-color: var(--chrome-silver);
  }
  
  .team-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin: 0 auto 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    border: 4px solid var(--gold-accent);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  
  .team-avatar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle, var(--gold-accent) 0%, transparent 70%);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .team-member:hover .team-avatar {
    transform: scale(1.1) rotate(360deg);
    border-color: var(--chrome-silver);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
  }
  
  .team-member:hover .team-avatar::before {
    opacity: 0.3;
  }
  
  .team-name {
    font-family: var(--heading-font);
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  .team-role {
    font-size: 1.1em;
    font-weight: 600;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--gold-accent);
  }
  
  .team-member:nth-child(1) .team-role,
  .team-member:nth-child(2) .team-role,
  .team-member:nth-child(3) .team-role,
  .team-member:nth-child(4) .team-role {
    color: var(--chrome-silver);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
  
  /* Animação hydraulic para os cards */
  .team-member:nth-child(1) {
    animation: hydraulic-bounce 4s ease-in-out infinite;
    animation-delay: 0s;
  }
  
  .team-member:nth-child(2) {
    animation: hydraulic-side-to-side 5s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .team-member:nth-child(3) {
    animation: lowrider-hop 6s ease-in-out infinite;
    animation-delay: 2s;
  }
  
  .team-member:nth-child(4) {
    animation: hydraulic-bounce 4.5s ease-in-out infinite;
    animation-delay: 3s;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .team-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }
    
    .team-member {
      padding: 30px 25px;
    }
    
    .team-avatar {
      width: 100px;
      height: 100px;
      font-size: 2.5em;
    }
    
    .team-name {
      font-size: 1.5em;
    }
    
    .team-role {
      font-size: 1em;
    }
  }
  
  @media (max-width: 480px) {
    .team-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .team-member {
      padding: 25px 20px;
    }
    
    .team-avatar {
      width: 80px;
      height: 80px;
      font-size: 2em;
    }
    
    .team-name {
      font-size: 1.3em;
    }
    
    .team-role {
      font-size: 0.9em;
    }
  }
</style>