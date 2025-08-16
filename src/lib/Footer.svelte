<script>
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'WhatsApp', icon: '📱', url: '#' },
    { name: 'Email', icon: '📧', url: '#' }
  ];
</script>

<footer>
  <div class="container">
    <div class="social-links">
      {#each socialLinks as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.icon} {link.name}
        </a>
      {/each}
    </div>
    <p>&copy; 2025 Festival Lowrider & Cultura Chicana. Todos os direitos reservados.</p>
  </div>
</footer>

<style>
  footer {
    background: var(--dark);
    color: white;
    padding: 40px 0;
    text-align: center;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  .social-links a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: var(--primary);
  }
  
  footer p {
    margin: 0;
    opacity: 0.8;
  }
</style>