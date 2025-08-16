<script>
    export let icon;
    export let size = "48";
    export let color = "currentColor";
</script>

{#if icon === "lowrider-car"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Corpo do carro lowrider -->
        <path d="M8 28L12 24H36L40 28V34H36V32H12V34H8V28Z" fill={color} stroke={color} stroke-width="1"/>
        <!-- Rodas baixas características -->
        <circle cx="14" cy="32" r="3" fill="none" stroke={color} stroke-width="2"/>
        <circle cx="34" cy="32" r="3" fill="none" stroke={color} stroke-width="2"/>
        <!-- Detalhes cromados -->
        <path d="M14 32L16 30M14 32L16 34M14 32L12 30M14 32L12 34" stroke="#C0C0C0" stroke-width="1"/>
        <path d="M34 32L36 30M34 32L36 34M34 32L32 30M34 32L32 34" stroke="#C0C0C0" stroke-width="1"/>
        <!-- Suspensão baixa -->
        <line x1="14" y1="35" x2="14" y2="37" stroke={color} stroke-width="2"/>
        <line x1="34" y1="35" x2="34" y2="37" stroke={color} stroke-width="2"/>
    </svg>

{:else if icon === "lowbike"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Quadro da bike -->
        <path d="M12 24L20 16L28 20L36 16L32 28" fill="none" stroke={color} stroke-width="2"/>
        <!-- Rodas -->
        <circle cx="12" cy="32" r="6" fill="none" stroke={color} stroke-width="2"/>
        <circle cx="36" cy="32" r="6" fill="none" stroke={color} stroke-width="2"/>
        <!-- Guidão customizado -->
        <path d="M18 18L20 16L22 18" fill="none" stroke={color} stroke-width="2"/>
        <!-- Pedal -->
        <circle cx="24" cy="28" r="2" fill="none" stroke={color} stroke-width="1"/>
    </svg>

{:else if icon === "hydraulics"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Sistema hidráulico -->
        <rect x="20" y="24" width="8" height="16" fill="none" stroke={color} stroke-width="2"/>
        <!-- Pistão -->
        <rect x="22" y="20" width="4" height="8" fill={color}/>
        <!-- Conexões -->
        <line x1="24" y1="16" x2="24" y2="20" stroke={color} stroke-width="2"/>
        <line x1="20" y1="40" x2="28" y2="40" stroke={color} stroke-width="2"/>
        <!-- Mangueiras -->
        <path d="M16 32Q12 30 10 26" fill="none" stroke={color} stroke-width="2"/>
        <path d="M32 32Q36 30 38 26" fill="none" stroke={color} stroke-width="2"/>
        <!-- Efeito de movimento -->
        <path d="M16 12L20 8M20 12L24 8M24 12L28 8" stroke="#FFD700" stroke-width="2"/>
    </svg>

{:else if icon === "offroad"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Jipe 4x4 -->
        <rect x="8" y="20" width="32" height="12" fill="none" stroke={color} stroke-width="2"/>
        <!-- Rodas grandes -->
        <circle cx="14" cy="36" r="5" fill="none" stroke={color} stroke-width="2"/>
        <circle cx="34" cy="36" r="5" fill="none" stroke={color} stroke-width="2"/>
        <!-- Para-brisa -->
        <path d="M12 20L12 14L28 14L28 20" fill="none" stroke={color} stroke-width="2"/>
        <!-- Trilha -->
        <path d="M2 40Q8 38 14 40Q20 42 26 40Q32 38 38 40Q44 42 46 40" fill="none" stroke={color} stroke-width="1"/>
    </svg>

{:else if icon === "chicano-art"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Pincel -->
        <path d="M12 36L16 20L20 24L16 40Z" fill={color}/>
        <!-- Tinta escorrendo -->
        <path d="M20 24Q24 26 28 24Q32 22 36 24" fill="none" stroke={color} stroke-width="2"/>
        <!-- Padrão asteca -->
        <path d="M28 12L32 8L36 12L32 16Z" fill="#FFD700"/>
        <path d="M32 16L36 12L40 16L36 20Z" fill="#40E0D0"/>
        <!-- Spray art -->
        <circle cx="32" cy="32" r="2" fill={color} opacity="0.6"/>
        <circle cx="36" cy="28" r="1.5" fill={color} opacity="0.4"/>
        <circle cx="30" cy="28" r="1" fill={color} opacity="0.3"/>
    </svg>

{:else if icon === "vinyl"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Disco de vinil -->
        <circle cx="24" cy="24" r="20" fill="#1a1a1a" stroke={color} stroke-width="1"/>
        <!-- Sulcos do vinil -->
        <circle cx="24" cy="24" r="16" fill="none" stroke={color} stroke-width="0.5"/>
        <circle cx="24" cy="24" r="12" fill="none" stroke={color} stroke-width="0.5"/>
        <circle cx="24" cy="24" r="8" fill="none" stroke={color} stroke-width="0.5"/>
        <!-- Centro -->
        <circle cx="24" cy="24" r="4" fill={color}/>
        <circle cx="24" cy="24" r="1" fill="#1a1a1a"/>
        <!-- Label -->
        <text x="24" y="18" text-anchor="middle" font-size="4" fill="#FFD700">OLDIES</text>
    </svg>

{:else if icon === "location"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Pin de localização -->
        <path d="M24 8C28.4 8 32 11.6 32 16C32 22 24 32 24 32S16 22 16 16C16 11.6 19.6 8 24 8Z" fill={color}/>
        <circle cx="24" cy="16" r="4" fill="white"/>
        <!-- Pista de aeroporto -->
        <rect x="8" y="36" width="32" height="4" fill="#666"/>
        <line x1="12" y1="38" x2="16" y2="38" stroke="white" stroke-width="1"/>
        <line x1="20" y1="38" x2="24" y2="38" stroke="white" stroke-width="1"/>
        <line x1="28" y1="38" x2="32" y2="38" stroke="white" stroke-width="1"/>
        <line x1="36" y1="38" x2="40" y2="38" stroke="white" stroke-width="1"/>
    </svg>

{:else if icon === "trophy"}
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Troféu -->
        <path d="M18 32V28C18 24 20 20 24 20C28 20 30 24 30 28V32" fill="none" stroke={color} stroke-width="2"/>
        <!-- Base -->
        <rect x="16" y="32" width="16" height="4" fill={color}/>
        <rect x="14" y="36" width="20" height="3" fill={color}/>
        <!-- Copa -->
        <path d="M18 28C18 24 20 20 24 20C28 20 30 24 30 28" fill="#FFD700"/>
        <!-- Alças -->
        <path d="M18 24Q12 24 12 28Q12 32 18 28" fill="none" stroke={color} stroke-width="2"/>
        <path d="M30 24Q36 24 36 28Q36 32 30 28" fill="none" stroke={color} stroke-width="2"/>
        <!-- Detalhes lowrider -->
        <circle cx="24" cy="26" r="1" fill="#CC0000"/>
    </svg>

{:else}
    <!-- Ícone padrão caso não encontre -->
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="none" stroke={color} stroke-width="2"/>
        <text x="24" y="28" text-anchor="middle" font-size="16" fill={color}>?</text>
    </svg>
{/if}

<style>
    svg {
        display: inline-block;
        vertical-align: middle;
    }
</style>