<script>
  let formData = {
    name: '',
    phone: '',
    email: '',
    category: '',
    message: ''
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
    // Reset form
    formData = {
      name: '',
      phone: '',
      email: '',
      category: '',
      message: ''
    };
  }
</script>

<section class="contact" id="contact">
  <div class="container">
    <h2 class="section-title">Inscrições e Contato</h2>
    <form class="contact-form" on:submit={handleSubmit}>
      <div class="form-grid">
        <div class="form-group half">
          <label for="name">Nome Completo</label>
          <input 
            type="text" 
            id="name" 
            bind:value={formData.name}
            required
          />
        </div>
        <div class="form-group half">
          <label for="phone">Telefone</label>
          <input 
            type="tel" 
            id="phone" 
            bind:value={formData.phone}
            required
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            bind:value={formData.email}
            required
          />
        </div>
        <div class="form-group">
          <label for="category">Categoria de Inscrição</label>
          <select 
            id="category" 
            bind:value={formData.category}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="expositor-carro">Expositor - Lowrider</option>
            <option value="expositor-bike">Expositor - Lowbike</option>
            <option value="competidor-roça">Competidor - Disputa In Roça</option>
            <option value="competidor-4x4">Competidor - Trilha 4x4</option>
            <option value="vendedor">Vendedor - Food Truck/Barraca</option>
            <option value="visitante">Visitante</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Mensagem (Opcional)</label>
          <textarea 
            id="message" 
            bind:value={formData.message}
            rows="4"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="submit-btn">Enviar Inscrição</button>
    </form>
  </div>
</section>

<style>
  .contact {
    background: linear-gradient(135deg, 
      var(--candy-red) 0%, 
      var(--deep-purple) 30%, 
      var(--royal-blue) 60%, 
      var(--dark) 100%
    );
    color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, transparent 35%, var(--gold-accent) 35%, var(--gold-accent) 36%, transparent 36%),
      linear-gradient(-45deg, transparent 35%, var(--turquoise) 35%, var(--turquoise) 36%, transparent 36%);
    background-size: 80px 80px;
    opacity: 0.03;
    pointer-events: none;
    animation: hydraulic-side-to-side 10s ease-in-out infinite;
  }
  
  /* Override para o título da seção */
  .contact :global(.section-title) {
    color: white !important;
    text-shadow: 
      3px 3px 6px rgba(0,0,0,0.8),
      0 0 20px rgba(255, 215, 0, 0.4),
      0 0 40px rgba(255, 215, 0, 0.2);
    font-weight: 800;
    letter-spacing: 3px;
  }
  
  .contact :global(.section-title::after) {
    background: var(--gold-accent) !important;
    box-shadow: 
      0 0 20px rgba(255, 215, 0, 0.6),
      0 4px 8px rgba(0,0,0,0.3);
    height: 6px !important;
    width: 120px !important;
  }
  
  .contact-form {
    max-width: 700px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(30px);
    padding: 50px;
    border-radius: 30px;
    border: 3px solid var(--gold-accent);
    box-shadow: 
      0 25px 80px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .contact-form::before {
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
    transition: left 1s ease;
  }
  
  .contact-form:hover::before {
    left: 100%;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 30px;
  }
  
  .form-group {
    grid-column: span 2;
    position: relative;
  }
  
  .form-group.half {
    grid-column: span 1;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: 700;
    font-family: var(--heading-font);
    color: var(--dark);
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid rgba(255, 107, 53, 0.3);
    border-radius: 15px;
    font-size: 1em;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    color: var(--dark);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: var(--body-font);
    font-weight: 500;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--gold-accent);
    box-shadow: 
      0 0 20px rgba(255, 215, 0, 0.3),
      0 5px 15px rgba(0,0,0,0.1);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
  }
  
  .form-group input::placeholder,
  .form-group select::placeholder,
  .form-group textarea::placeholder {
    color: #999;
    font-style: italic;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 130px;
    font-family: var(--body-font);
  }
  
  .form-group select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-right: 40px;
    appearance: none;
  }
  
  .submit-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, 
      var(--candy-red) 0%, 
      var(--gold-accent) 50%, 
      var(--royal-blue) 100%
    );
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.3em;
    font-family: var(--heading-font);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    position: relative;
    overflow: hidden;
  }
  
  .submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  .submit-btn:hover::before {
    left: 100%;
  }
  
  .submit-btn:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 
      0 15px 40px rgba(0,0,0,0.4),
      0 0 30px rgba(255, 215, 0, 0.3);
    filter: brightness(1.1);
  }
  
  .submit-btn:active {
    transform: translateY(-2px) scale(1.01);
  }
  
  /* Animação de sucesso */
  @keyframes success-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  /* Efeitos de glow nos inputs */
  .form-group input:focus + .glow-effect,
  .form-group select:focus + .glow-effect,
  .form-group textarea:focus + .glow-effect {
    opacity: 1;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .contact-form {
      padding: 40px 30px;
      margin: 0 20px;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .form-group.half {
      grid-column: span 1;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 12px 15px;
    }
    
    .submit-btn {
      padding: 15px;
      font-size: 1.1em;
    }
  }
  
  @media (max-width: 480px) {
    .contact-form {
      padding: 30px 20px;
      margin: 0 15px;
    }
    
    .form-grid {
      gap: 15px;
    }
    
    .form-group label {
      font-size: 1em;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 10px 12px;
      font-size: 0.95em;
    }
    
    .submit-btn {
      font-size: 1em;
      padding: 12px;
    }
  }
</style>