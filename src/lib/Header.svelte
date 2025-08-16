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
        gap: 35px;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    .nav-links a {
        color: var(--white);
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        font-size: 1.1em;
        position: relative;
        padding: 8px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .nav-links a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--peach);
        transition: width 0.3s ease;
    }

    .nav-links a:hover {
        color: var(--peach);
        transform: translateY(-2px);
    }

    .nav-links a:hover::after {
        width: 100%;
    }

    .menu-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 8px;
        transition: all 0.3s ease;
        color: var(--white);
        min-height: 44px;
        min-width: 44px;
    }

    .menu-toggle:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: var(--peach);
        color: var(--peach);
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .nav-container {
            padding: 0 15px;
        }

        .logo {
            font-size: 1.4em;
        }

        .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            flex-direction: column;
            background: linear-gradient(180deg, 
            var(--primary-purple) 0%, 
            var(--violet) 100%);
            backdrop-filter: blur(20px);
            padding: 100px 30px 30px;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
            gap: 20px;
            align-items: flex-start;
            overflow-y: auto;
        }

        .nav-links.active {
            display: flex;
            right: 0;
        }

        .nav-links a {
            font-size: 1.2em;
            padding: 15px 20px;
            width: 100%;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            text-align: left;
        }

        .nav-links a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(5px);
            color: var(--peach);
        }

        .nav-links a::after {
            display: none;
        }

        .menu-toggle {
            display: flex;
            z-index: 1001;
        }
    }

    @media (max-width: 480px) {
        .nav-links {
            width: 100%;
            right: -100%;
        }

        .nav-links.active {
            right: 0;
        }

        .logo {
            font-size: 1.2em;
        }

        .logo span {
            display: none;
        }
    }
</style>