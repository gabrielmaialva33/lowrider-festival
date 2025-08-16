<script>
    import {Facebook, Instagram, MessageCircle, Mail} from 'lucide-svelte';
    
    const socialLinks = [
        {name: 'Facebook', icon: Facebook, url: '#'},
        {name: 'Instagram', icon: Instagram, url: '#'},
        {name: 'WhatsApp', icon: MessageCircle, url: '#'},
        {name: 'Email', icon: Mail, url: '#'}
    ];
</script>

<footer>
    <div class="container">
        <div class="social-links">
            {#each socialLinks as link}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <svelte:component this={link.icon} size={20} />
                    <span>{link.name}</span>
                </a>
            {/each}
        </div>
        <p>&copy; 2025 Festival Lowrider & Cultura Chicana. Todos os direitos reservados.</p>
    </div>
</footer>

<style>
    footer {
        background: linear-gradient(135deg,
        var(--primary-purple) 0%,
        var(--violet) 25%,
        var(--ocean-blue) 50%,
        var(--teal) 75%,
        var(--primary-purple) 100%
        );
        color: white;
        padding: 60px 0 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 10px,
                var(--peach) 10px,
                var(--peach) 12px,
                transparent 12px,
                transparent 22px
        ),
        repeating-linear-gradient(
                90deg,
                transparent,
                transparent 15px,
                var(--light-purple) 15px,
                var(--light-purple) 17px,
                transparent 17px,
                transparent 32px
        );
        opacity: 0.03;
        pointer-events: none;
        animation: hydraulic-side-to-side 15s ease-in-out infinite;
    }

    footer::after {
        content: '🚗 🎨 🎵';
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2em;
        opacity: 0.1;
        animation: lowrider-hop 8s ease-in-out infinite;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 30px;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
    }

    .social-links a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
        font-family: var(--body-font);
        font-weight: 600;
        padding: 15px 25px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 2px solid var(--peach);
        border-radius: 50px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 48px;
    }

    .social-links a::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,
        transparent,
        rgba(255, 215, 0, 0.3),
        transparent
        );
        transition: left 0.5s ease;
    }

    .social-links a:hover::before {
        left: 100%;
    }

    .social-links a:hover {
        color: var(--primary-purple);
        background: var(--peach);
        border-color: var(--light-purple);
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(255, 217, 174, 0.5);
    }

    .social-links a:nth-child(1):hover {
        background: linear-gradient(135deg, var(--coral), var(--peach));
    }

    .social-links a:nth-child(2):hover {
        background: linear-gradient(135deg, var(--violet), var(--pink));
    }

    .social-links a:nth-child(3):hover {
        background: linear-gradient(135deg, var(--sky-blue), var(--teal));
    }

    .social-links a:nth-child(4):hover {
        background: linear-gradient(135deg, var(--orange), var(--peach));
    }

    footer p {
        margin: 0;
        font-size: 1.1em;
        font-weight: 500;
        opacity: 0.9;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 1;
        padding: 20px 0;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        margin: 20px auto;
        max-width: 600px;
        border: 1px solid rgba(255, 215, 0, 0.3);
    }

    footer p::before {
        content: '⚡';
        margin-right: 10px;
        color: var(--gold-accent);
        font-size: 1.2em;
    }

    footer p::after {
        content: '⚡';
        margin-left: 10px;
        color: var(--gold-accent);
        font-size: 1.2em;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .social-links {
            gap: 20px;
            flex-direction: column;
            align-items: center;
        }

        .social-links a {
            font-size: 1.1em;
            padding: 12px 20px;
            width: 200px;
        }

        footer p {
            font-size: 1em;
            margin: 15px 20px;
            padding: 15px;
        }
    }

    @media (max-width: 480px) {
        footer {
            padding: 40px 0 30px;
        }

        .social-links a {
            font-size: 1em;
            padding: 10px 15px;
            width: 180px;
        }

        footer p {
            font-size: 0.9em;
            margin: 10px 15px;
            padding: 12px;
        }

        footer::after {
            font-size: 1.5em;
        }
    }
</style>