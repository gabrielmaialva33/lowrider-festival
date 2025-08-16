<script>
    import {MapPin, Car, Utensils, Info} from 'lucide-svelte';
    
    const locationDetails = [
        {icon: MapPin, text: 'Aeroporto Municipal - Cidade/Estado'},
        {icon: Car, text: 'Estacionamento com transporte shuttle gratuito'},
        {icon: Utensils, text: 'Praça de alimentação completa'},
        {icon: Info, text: 'Banheiros e infraestrutura completa'}
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
                            <span class="location-icon">
                                <svelte:component this={detail.icon} size={20} />
                            </span>
                            <span>{detail.text}</span>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="location-map">
                <MapPin size={48} />
                <span>Mapa Interativo</span>
            </div>
        </div>
    </div>
</section>

<style>
    .location {
        background: linear-gradient(135deg,
        var(--primary-purple) 0%,
        var(--violet) 30%,
        var(--ocean-blue) 70%,
        var(--teal) 100%
        );
        color: white;
        padding: 100px 0;
        position: relative;
        overflow: hidden;
    }

    .location::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(45deg, transparent 35%, var(--peach) 35%, var(--peach) 36%, transparent 36%),
        linear-gradient(-45deg, transparent 35%, var(--teal) 35%, var(--teal) 36%, transparent 36%);
        background-size: 40px 40px;
        opacity: 0.03;
        pointer-events: none;
    }

    .location-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
        position: relative;
        z-index: 1;
    }

    .location-info {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        padding: 40px;
        border-radius: 20px;
        border: 2px solid var(--peach);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        color: var(--dark);
        position: relative;
        overflow: hidden;
    }

    .location-info::before {
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
        transition: left 0.5s ease;
    }

    .location-info:hover::before {
        left: 100%;
    }

    .location-info:hover {
        transform: translateY(-5px);
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        border-color: var(--coral);
    }

    .location-info h3 {
        font-family: var(--heading-font);
        font-size: 2.2em;
        color: var(--coral);
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .location-info p {
        font-size: 1.1em;
        line-height: 1.8;
        margin-bottom: 30px;
        color: #555;
        font-weight: 500;
    }

    .location-map {
        height: 400px;
        background: linear-gradient(135deg,
        var(--coral) 0%,
        var(--violet) 50%,
        var(--blue) 100%
        );
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.8em;
        font-family: var(--heading-font);
        text-transform: uppercase;
        letter-spacing: 2px;
        border: 3px solid var(--peach);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
        transition: all 0.4s ease;
    }

    .location-map::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 15px,
                rgba(255, 215, 0, 0.1) 15px,
                rgba(255, 215, 0, 0.1) 30px
        );
    }

    .location-map:hover {
        transform: scale(1.02);
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        border-color: var(--light-purple);
    }

    .location-details {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .location-details li {
        padding: 15px 0;
        border-bottom: 2px solid rgba(255, 217, 174, 0.3);
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        font-weight: 600;
    }

    .location-details li:last-child {
        border-bottom: none;
    }

    .location-details li:hover {
        padding-left: 10px;
        color: var(--coral);
    }

    .location-icon {
        margin-right: 15px;
        font-size: 1.5em;
        background: var(--gold-accent);
        color: var(--dark);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(255, 215, 0, 0.3);
        transition: all 0.3s ease;
    }

    .location-details li:hover .location-icon {
        transform: scale(1.1) rotate(360deg);
        background: var(--candy-red);
        color: white;
    }

    /* Override para o título da seção */
    .location :global(.section-title) {
        color: white !important;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8),
        0 0 20px rgba(255, 215, 0, 0.4);
        font-weight: 800;
        letter-spacing: 3px;
    }

    .location :global(.section-title::after) {
        background: var(--gold-accent) !important;
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.6),
        0 4px 8px rgba(0, 0, 0, 0.3);
        height: 6px !important;
        width: 120px !important;
    }

    @media (max-width: 768px) {
        .location-content {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .location-info {
            padding: 30px;
        }

        .location-info h3 {
            font-size: 1.8em;
        }

        .location-map {
            height: 300px;
            font-size: 1.5em;
        }

        .location-icon {
            width: 35px;
            height: 35px;
            font-size: 1.3em;
        }
    }

    @media (max-width: 480px) {
        .location-content {
            gap: 20px;
        }

        .location-info {
            padding: 25px;
        }

        .location-info h3 {
            font-size: 1.6em;
        }

        .location-map {
            height: 250px;
            font-size: 1.3em;
        }

        .location-details li {
            padding: 12px 0;
        }

        .location-icon {
            width: 30px;
            height: 30px;
            font-size: 1.1em;
            margin-right: 12px;
        }
    }
</style>