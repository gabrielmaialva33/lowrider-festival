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
    background: white;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }
  
  .team-member {
    text-align: center;
    padding: 30px;
    background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
    border-radius: 15px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(50px);
  }
  
  .team-member:nth-child(even) {
    transform: translateX(100px) translateY(50px);
  }
  
  .team-member:nth-child(odd) {
    transform: translateX(-100px) translateY(50px);
  }
  
  .team-member:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
  
  .team-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: var(--primary);
  }
  
  .team-name {
    font-size: 1.3em;
    font-weight: bold;
    color: var(--dark);
    margin-bottom: 5px;
  }
  
  .team-role {
    color: #666;
  }
</style>