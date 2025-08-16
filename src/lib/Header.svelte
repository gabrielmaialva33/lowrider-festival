<script>
    import {onMount} from 'svelte';
    import {Car, Menu, X} from 'lucide-svelte';

    let scrolled = false;
    let mobileMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class:scrolled>
    <div class="nav-container">
        <a class="logo" href="#home">
            <Car size={32} />
            <span>LOWRIDER FEST</span>
        </a>

        <ul class="nav-links" class:active={mobileMenuOpen}>
            <li><a href="#home" on:click={closeMobileMenu}>Início</a></li>
            <li><a href="#about" on:click={closeMobileMenu}>Sobre</a></li>
            <li><a href="#activities" on:click={closeMobileMenu}>Atrações</a></li>
            <li><a href="#gallery" on:click={closeMobileMenu}>Galeria</a></li>
            <li><a href="#schedule" on:click={closeMobileMenu}>Programação</a></li>
            <li><a href="#location" on:click={closeMobileMenu}>Local</a></li>
            <li><a href="#partners" on:click={closeMobileMenu}>Parceiros</a></li>
            <li><a href="#contact" on:click={closeMobileMenu}>Inscrições</a></li>
        </ul>

        <button aria-label="Menu" class="menu-toggle" on:click={toggleMobileMenu}>
            {#if mobileMenuOpen}
                <X size={24} />
            {:else}
                <Menu size={24} />
            {/if}
        </button>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        width: 100%;
        background: linear-gradient(135deg, 
        rgba(83, 67, 127, 0.95) 0%, 
        rgba(168, 159, 204, 0.95) 100%);
        backdrop-filter: blur(15px);
        z-index: 1000;
        padding: 15px 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav.scrolled {
        padding: 10px 0;
        box-shadow: 0 8px 32px rgba(83, 67, 127, 0.3);
        background: linear-gradient(135deg, 
        rgba(83, 67, 127, 0.98) 0%, 
        rgba(168, 159, 204, 0.98) 100%);
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-family: var(--heading-font);
        font-size: 1.6em;
        font-weight: 700;
        color: var(--white);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .logo:hover {
        color: var(--peach);
        transform: scale(1.05);
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 30px;
        margin: 0;
        padding: 0;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
        font-weight: 500;
    }

    .nav-links a:hover {
        color: var(--primary);
    }

    .menu-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
    }

    .menu-toggle span {
        width: 25px;
        height: 3px;
        background: white;
        margin: 3px 0;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            right: 20px;
            flex-direction: column;
            background: rgba(26, 26, 26, 0.95);
            padding: 20px;
            border-radius: 10px;
        }

        .nav-links.active {
            display: flex;
        }

        .menu-toggle {
            display: flex;
        }
    }
</style>