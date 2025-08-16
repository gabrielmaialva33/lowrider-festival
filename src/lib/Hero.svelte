<script>
  import {onMount} from 'svelte';
  import {animate} from 'motion';
  import {fadeInScale, fadeInUp} from './animations.js';

  let heroContent;
    let heroVideo;
    let visible = false;

    onMount(() => {
        visible = true;

        // Enhanced entrance animations
        if (heroContent) {
            // Animate title
            const title = heroContent.querySelector('h1');
            const subtitle = heroContent.querySelector('h2');
            const description = heroContent.querySelector('.hero-subtitle');
            const date = heroContent.querySelector('.hero-date');
            const buttons = heroContent.querySelector('.cta-buttons');

            setTimeout(() => {
                if (title) fadeInUp(title, 0);
                if (subtitle) fadeInUp(subtitle, 0.2);
                if (description) fadeInUp(description, 0.4);
                if (date) fadeInScale(date, 0.6);
                if (buttons) fadeInUp(buttons, 0.8);
            }, 100);
        }

        // Floating animation for the date
        const dateElement = heroContent?.querySelector('.hero-date');
        if (dateElement) {
            animate(
                dateElement,
                {y: [0, -10, 0]},
                {
                    duration: 3,
                    repeat: Infinity,
                    easing: 'ease-in-out'
                }
            );
        }
    });
</script>

<section class="hero" id="home">
    <!-- Video Background Fixo -->
    <div class="hero-video-container">
        <video
                autoplay
                bind:this={heroVideo}
                class="hero-video"
                loop
                muted
                playsinline
                poster="/images/gifs/lowrider-bounce.gif"
                preload="auto"
                src="/videos/lowrider-hero.mp4"
        ></video>

        <!-- Overlay escuro para legibilidade -->
        <div class="hero-overlay"></div>
    </div>

    <div bind:this={heroContent} class="hero-content" class:visible>
        <h1 class="chicano-title">Festival Lowrider</h1>
        <h2 class="script-accent">& Cultura Chicana</h2>
        <p class="hero-subtitle lowrider-text">O maior encontro de cultura automotiva e arte chicana do Brasil</p>
        <div class="hero-date chrome-border">🎵 28 e 29 de Junho de 2025 🎵</div>
        <div class="cta-buttons">
            <a class="btn btn-primary hydraulic-bounce candy-shine" href="#contact">Inscreva-se Agora</a>
            <a class="btn btn-secondary chrome-border" href="#about">Saiba Mais</a>
        </div>
    </div>
</section>

<style>
    .hero {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        position: relative;
        overflow: hidden;
    }

    .hero-video-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
    }

    .hero-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: brightness(0.7) contrast(1.1);
        transform: scale(1.02);
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,
        rgba(204, 0, 0, 0.8) 0%,
        rgba(74, 14, 78, 0.7) 50%,
        rgba(0, 71, 171, 0.8) 100%
        );
        z-index: 1;
    }

    .hero-overlay::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(45deg, transparent 35%, var(--gold-accent) 35%, var(--gold-accent) 36%, transparent 36%),
        linear-gradient(-45deg, transparent 35%, var(--turquoise) 35%, var(--turquoise) 36%, transparent 36%);
        background-size: 60px 60px;
        opacity: 0.05;
    }

    .hero-content {
        z-index: 2;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease;
    }

    .hero-content h1,
    .hero-content h2,
    .hero-content .hero-subtitle,
    .hero-content .hero-date,
    .hero-content .cta-buttons {
        opacity: 0;
        transform: translateY(30px);
    }

    .hero-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    h1 {
        font-size: 4.5em;
        margin-bottom: 10px;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
        animation: hydraulic-bounce 3s ease-in-out infinite;
    }

    h2 {
        font-size: 3em;
        margin-bottom: 30px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        animation: hydraulic-side-to-side 4s ease-in-out infinite;
    }

    .hero-subtitle {
        font-size: 1.5em;
        margin-bottom: 30px;
        opacity: 0.9;
    }

    .hero-date {
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 40px;
        padding: 15px 30px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        display: inline-block;
        backdrop-filter: blur(10px);
    }

    .cta-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5em;
        }

        .hero-subtitle {
            font-size: 1.2em;
        }

        .hero-date {
            font-size: 1.4em;
        }
    }
</style>