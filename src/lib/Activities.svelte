<script>
  import {onMount} from 'svelte';
  import {inView} from 'motion';
  import LowriderIcons from './LowriderIcons.svelte';
  import {staggerGrid} from './animations.js';

  const activities = [
        {
            icon: 'lowrider-car',
            title: 'Exposição Lowriders',
            desc: 'Os carros mais icônicos da cultura lowrider em exposição'
        },
        {icon: 'lowbike', title: 'Lowbikes Show', desc: 'Bikes customizadas com estilo único'},
        {icon: 'vinyl', title: 'Disputa In Roça', desc: 'Corrida de bikes radical com grandes prêmios'},
        {icon: 'offroad', title: 'Trilhas 4x4', desc: 'Aventura off-road para os amantes de jipes'},
        {icon: 'chicano-art', title: 'Arte Chicana', desc: 'Exposição e criação ao vivo de arte urbana'},
        {icon: 'hydraulics', title: 'Hop Contest', desc: 'Competição de suspensão hidráulica'}
    ];

    let activitiesSection;
    let hasAnimated = false;

    onMount(() => {
        // Set up scroll-triggered animations
        if (activitiesSection) {
            inView(activitiesSection, () => {
                if (!hasAnimated) {
                    hasAnimated = true;
                    const cards = activitiesSection.querySelectorAll('.activity-card');
                    staggerGrid(cards, 0.2);
                }
            }, {margin: '-100px'});
        }
    });
</script>

<section bind:this={activitiesSection} class="activities" id="activities">
    <div class="container">
        <h2 class="section-title">Principais Atrações</h2>
        <div class="activities-grid">
            {#each activities as activity}
                <div class="activity-card hydraulic-bounce">
                    <div class="activity-icon">
                        <LowriderIcons icon={activity.icon} size="64" color="white"/>
                    </div>
                    <div class="activity-title lowrider-text">{activity.title}</div>
                    <div class="activity-desc">{activity.desc}</div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .activities {
        background: linear-gradient(135deg,
        var(--white) 0%,
        rgba(190, 155, 255, 0.1) 30%,
        rgba(255, 217, 174, 0.15) 70%,
        var(--white) 100%
        );
        padding: 100px 0;
        position: relative;
        overflow: hidden;
    }

    .activities::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(45deg, transparent 35%, var(--peach) 35%, var(--peach) 36%, transparent 36%),
        linear-gradient(-45deg, transparent 35%, var(--light-violet) 35%, var(--light-violet) 36%, transparent 36%);
        background-size: 70px 70px;
        opacity: 0.02;
        pointer-events: none;
        animation: hydraulic-side-to-side 12s ease-in-out infinite;
    }

    .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
        position: relative;
        z-index: 1;
    }

    .activity-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        color: var(--dark);
        padding: 40px 30px;
        border-radius: 25px;
        text-align: center;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 3px solid var(--gold-accent);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
        opacity: 0;
        transform: translateY(50px);
        will-change: transform, opacity;
    }

    .activity-card::before {
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

    .activity-card:hover::before {
        left: 100%;
    }

    .activity-card:nth-child(1) {
        border-color: var(--coral);
        background: linear-gradient(135deg,
        var(--coral) 0%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:nth-child(2) {
        border-color: var(--violet);
        background: linear-gradient(135deg,
        var(--violet) 0%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:nth-child(3) {
        border-color: var(--blue);
        background: linear-gradient(135deg,
        var(--blue) 0%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:nth-child(4) {
        border-color: var(--teal);
        background: linear-gradient(135deg,
        var(--teal) 0%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:nth-child(5) {
        border-color: var(--orange);
        background: linear-gradient(135deg,
        var(--orange) 0%,
        var(--peach) 50%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:nth-child(6) {
        border-color: var(--light-purple);
        background: linear-gradient(135deg,
        var(--light-purple) 0%,
        rgba(255, 255, 255, 0.95) 100%
        );
    }

    .activity-card:hover {
        transform: translateY(-15px) scale(1.05);
        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(255, 217, 174, 0.4);
        border-color: var(--peach);
    }

    .activity-card:nth-child(odd):hover {
        animation: hydraulic-bounce 1s ease-in-out infinite;
    }

    .activity-card:nth-child(even):hover {
        animation: lowrider-hop 1.2s ease-in-out infinite;
    }

    .activity-icon {
        font-size: 4em;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
        padding: 20px;
        background: rgba(255, 217, 174, 0.1);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--peach);
        transition: all 0.4s ease;
    }

    .activity-card:hover .activity-icon {
        background: var(--peach);
        transform: scale(1.1) rotate(360deg);
        box-shadow: 0 0 30px rgba(255, 217, 174, 0.6);
    }

    .activity-title {
        font-family: var(--heading-font);
        font-size: 1.6em;
        font-weight: 700;
        margin-bottom: 15px;
        position: relative;
        z-index: 2;
        color: var(--dark);
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    .activity-card:nth-child(1) .activity-title {
        color: var(--coral);
    }

    .activity-card:nth-child(2) .activity-title {
        color: var(--violet);
    }

    .activity-card:nth-child(3) .activity-title {
        color: var(--blue);
    }

    .activity-card:nth-child(4) .activity-title {
        color: var(--teal);
    }

    .activity-card:nth-child(5) .activity-title {
        color: var(--orange);
    }

    .activity-card:nth-child(6) .activity-title {
        color: var(--light-purple);
    }

    .activity-desc {
        font-size: 1.1em;
        opacity: 0.85;
        position: relative;
        z-index: 2;
        color: var(--primary-purple);
        line-height: 1.6;
        font-weight: 500;
        text-align: center;
    }

    /* Enhanced hover effects for better UX */
    .activity-card:hover .activity-title {
        color: var(--primary-purple) !important;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .activity-card:hover .activity-desc {
        color: var(--dark-rose);
        opacity: 1;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .activities {
            padding: 60px 0;
        }

        .activities-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .activity-card {
            padding: 30px 25px;
        }

        .activity-icon {
            width: 100px;
            height: 100px;
            font-size: 3em;
        }

        .activity-title {
            font-size: 1.4em;
        }

        .activity-desc {
            font-size: 1em;
        }
    }

    @media (max-width: 480px) {
        .activities {
            padding: 40px 0;
        }

        .activities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .activity-card {
            padding: 25px 20px;
            min-height: 280px;
        }

        .activity-icon {
            width: 80px;
            height: 80px;
            font-size: 2.5em;
            margin-bottom: 15px;
        }

        .activity-title {
            font-size: 1.3em;
            margin-bottom: 10px;
        }

        .activity-desc {
            font-size: 0.95em;
            line-height: 1.5;
        }

        /* Reduce animation intensity on mobile */
        .activity-card:hover {
            transform: translateY(-5px) scale(1.02);
        }

        .activity-card:nth-child(odd):hover,
        .activity-card:nth-child(even):hover {
            animation: none;
        }
</style>