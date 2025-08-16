<script>
    import {onMount} from 'svelte';
    import Header from './lib/Header.svelte';
    import Hero from './lib/Hero.svelte';
    import About from './lib/About.svelte';
    import Activities from './lib/Activities.svelte';
    import Schedule from './lib/Schedule.svelte';
    import Location from './lib/Location.svelte';
    import Gallery from './lib/Gallery.svelte';
    import Sponsors from './lib/Sponsors.svelte';
    import Team from './lib/Team.svelte';
    import Contact from './lib/Contact.svelte';
    import Footer from './lib/Footer.svelte';
    import {initAnimations} from './lib/animations.js';

    onMount(() => {
        // Initialize all animations after components are mounted
        initAnimations();
    });
</script>

<Header/>
<Hero/>
<About/>
<Activities/>
<Gallery/>
<Schedule/>
<Location/>
<Sponsors/>
<Team/>
<Contact/>
<Footer/>