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
        background: white;
    }

    .activities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
    }

    .activity-card {
        background: linear-gradient(135deg, var(--royal-blue) 0%, var(--deep-purple) 50%, var(--candy-red) 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 2px solid var(--chrome-silver);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
        opacity: 0;
        transform: translateY(50px);
        will-change: transform, opacity;
    }

    .activity-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        transform: rotate(45deg);
        transition: all 0.5s ease;
    }

    .activity-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .activity-card:hover::before {
        left: -30%;
        top: -30%;
    }

    .activity-icon {
        font-size: 3em;
        margin-bottom: 15px;
        position: relative;
        z-index: 1;
    }

    .activity-title {
        font-size: 1.3em;
        font-weight: bold;
        margin-bottom: 10px;
        position: relative;
        z-index: 1;
    }

    .activity-desc {
        font-size: 0.9em;
        opacity: 0.9;
        position: relative;
        z-index: 1;
    }
</style>