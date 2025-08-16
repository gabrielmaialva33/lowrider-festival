<script>
  import {onMount} from 'svelte';
  import {animate} from 'motion';
  import {fadeInScale, fadeInUp} from './animations.js';
  import {getAssetPath} from './getAssetPath.js';

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
                poster={getAssetPath("images/gifs/lowrider-bounce.gif")}
                preload="auto"
                src={getAssetPath("videos/lowrider-hero.mp4")}
        ></video>

        <!-- Overlay escuro para legibilidade -->
        <div class="hero-overlay"></div>
    </div>

    <div bind:this={heroContent} class="hero-content" class:visible>
        <h1 class="chicano-title">Festival Lowrider</h1>
        <h2 class="script-accent">& Cultura Chicana</h2>
        <p class="hero-subtitle lowrider-text">O maior encontro de cultura automotiva e arte chicana do Brasil</p>
        <div class="hero-date chrome-border">28 e 29 de Junho de 2025</div>
        <div class="cta-buttons">
            <a class="btn btn-primary hydraulic-bounce candy-shine" href="#contact">Inscreva-se Agora</a>
            <a class="btn btn-secondary chrome-border" href="#about">Saiba Mais</a>
        </div>
    </div>
</section>

<style>
    .hero {
        height: 100vh;
        min-height: 600px;
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
        filter: brightness(0.6) contrast(1.2) saturate(1.1);
        transform: scale(1.02);
    }

    /* Optimize video for mobile */
    @media (max-width: 768px) {
        .hero-video {
            object-position: center;
            filter: brightness(0.5) contrast(1.3);
        }
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,
        rgba(83, 67, 127, 0.8) 0%,
        rgba(153, 104, 226, 0.7) 30%,
        rgba(44, 111, 153, 0.8) 70%,
        rgba(0, 188, 170, 0.9) 100%
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
        background-image: linear-gradient(45deg, transparent 35%, var(--peach) 35%, var(--peach) 36%, transparent 36%),
        linear-gradient(-45deg, transparent 35%, var(--teal) 35%, var(--teal) 36%, transparent 36%);
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
        .hero {
            min-height: 100vh;
            padding: 0 15px;
        }

        .hero-content {
            max-width: 90%;
            margin: 0 auto;
        }

        .hero-content h1 {
            font-size: 2.8em;
            line-height: 1.1;
            margin-bottom: 15px;
        }

        .hero-content h2 {
            font-size: 2.2em;
            margin-bottom: 20px;
        }

        .hero-subtitle {
            font-size: 1.3em;
            line-height: 1.4;
            margin-bottom: 25px;
            padding: 0 10px;
        }

        .hero-date {
            font-size: 1.2em;
            padding: 12px 20px;
            margin-bottom: 30px;
        }

        .cta-buttons {
            flex-direction: column;
            gap: 15px;
            align-items: center;
        }

        .cta-buttons .btn {
            width: 100%;
            max-width: 280px;
            padding: 15px 30px;
            font-size: 1.1em;
        }
    }

    @media (max-width: 480px) {
        .hero {
            min-height: 100vh;
            padding: 0 10px;
        }

        .hero-content {
            max-width: 95%;
        }

        .hero-content h1 {
            font-size: 2.2em;
            margin-bottom: 10px;
        }

        .hero-content h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .hero-subtitle {
            font-size: 1.1em;
            line-height: 1.3;
            margin-bottom: 20px;
            padding: 0 5px;
        }

        .hero-date {
            font-size: 1em;
            padding: 10px 15px;
            margin-bottom: 25px;
        }

        .cta-buttons .btn {
            padding: 12px 25px;
            font-size: 1em;
            max-width: 240px;
        }

        .hero-overlay::after {
            background-size: 40px 40px;
        }
    }

    /* Landscape mobile optimization */
    @media (max-width: 768px) and (orientation: landscape) {
        .hero {
            min-height: 100vh;
        }

        .hero-content {
            transform: scale(0.9);
        }

        .hero-content h1 {
            font-size: 2.2em;
        }

        .hero-content h2 {
            font-size: 1.8em;
        }

        .hero-subtitle {
            font-size: 1em;
        }

        .cta-buttons {
            flex-direction: row;
            gap: 10px;
        }

        .cta-buttons .btn {
            padding: 10px 20px;
            font-size: 0.9em;
            max-width: 160px;
        }
    }
</style>