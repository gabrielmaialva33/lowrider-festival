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
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
  }
  
  .contact :global(.section-title) {
    color: white;
  }
  
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .form-group {
    grid-column: span 2;
  }
  
  .form-group.half {
    grid-column: span 1;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    background: rgba(255,255,255,0.9);
    color: var(--dark);
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 15px;
    background: white;
    color: var(--primary);
    border: none;
    border-radius: 50px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .submit-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  
  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }
    
    .form-group.half {
      grid-column: span 1;
    }
  }
</style>