import {getAssetPath} from './getAssetPath.js';

// Assets reais de lowrider festivals encontrados no Google Images
export const heroAssets = {
    video: {
        poster: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder poster
        sources: [
            // Placeholder - usuário pode adicionar vídeos locais depois
            {src: "/videos/lowrider-festival.mp4", type: "video/mp4"},
            {src: "/videos/lowrider-festival.webm", type: "video/webm"}
        ]
    },
    fallbackImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&crop=center"
};

// Galeria de imagens autênticas de festivais lowrider
export const galleryAssets = [
    {
        id: 1,
        category: 'cars',
        title: 'Cultura Lowrider Old School',
        description: 'Carros clássicos que deram origem à cultura lowrider',
        src: '/images/lowrider-gallery/motortrend-lowrider-culture.jpg',
        placeholder: '/images/lowrider-gallery/motortrend-lowrider-culture.jpg'
    },
    {
        id: 2,
        category: 'cars',
        title: 'Hispanic Heritage Festival',
        description: 'Exposição de lowriders no festival de herança hispânica',
        src: '/images/lowrider-gallery/hispanic-heritage-lowrider.jpg',
        placeholder: '/images/lowrider-gallery/hispanic-heritage-lowrider.jpg'
    },
    {
        id: 3,
        category: 'culture',
        title: 'Altar Dia de los Muertos',
        description: 'Altar do Dia dos Mortos ao lado de lowrider no festival',
        src: '/images/lowrider-gallery/day-of-dead-altar-lowrider.jpg',
        placeholder: '/images/lowrider-gallery/day-of-dead-altar-lowrider.jpg'
    },
    {
        id: 4,
        category: 'cars',
        title: 'Lowrider Laranja Festival',
        description: 'Impala laranja no Slow & Low Chicago Festival',
        src: '/images/lowrider-gallery/orange-lowrider-festival.jpg',
        placeholder: '/images/lowrider-gallery/orange-lowrider-festival.jpg'
    },
    {
        id: 5,
        category: 'bikes',
        title: 'Lowrider Bike da Juventude',
        description: 'Criança de 7 anos com bike lowrider customizada',
        src: '/images/lowrider-gallery/lowrider-bike-youth.jpg',
        placeholder: '/images/lowrider-gallery/lowrider-bike-youth.jpg'
    },
    {
        id: 6,
        category: 'cars',
        title: 'Chevys Vintage 1939-1949',
        description: 'Chevrolet clássicos dos anos 39 e 49 em exposição',
        src: '/images/lowrider-gallery/vintage-chevys-1939-1949.jpg',
        placeholder: '/images/lowrider-gallery/vintage-chevys-1939-1949.jpg'
    },
    {
        id: 7,
        category: 'culture',
        title: 'Família no Festival Lowrider',
        description: 'Família visitando exposição de carros vintage',
        src: '/images/lowrider-gallery/family-lowrider-exhibition.jpg',
        placeholder: '/images/lowrider-gallery/family-lowrider-exhibition.jpg'
    },
    {
        id: 8,
        category: 'culture',
        title: 'Cultura Pachuco - Zoot Suits',
        description: 'Trajes tradicionais da subcultura mexicano-americana',
        src: '/images/lowrider-gallery/zoot-suits-pachuco-culture.jpg',
        placeholder: '/images/lowrider-gallery/zoot-suits-pachuco-culture.jpg'
    },
    {
        id: 9,
        category: 'cars',
        title: 'Slow & Low Chicago Festival',
        description: 'Navy Pier - maior festival de lowriders de Chicago',
        src: '/images/lowrider-gallery/slow-low-chicago-festival.jpg',
        placeholder: '/images/lowrider-gallery/slow-low-chicago-festival.jpg'
    }
];

// Background images para seções
export const backgroundAssets = {
    about: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=1920&h=1080&fit=crop',
    schedule: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop',
    location: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop',
    team: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop'
};

// GIFs animados para efeitos especiais  
export const animatedAssets = {
    hydraulics: [
        'https://media.giphy.com/media/lowrider-hydraulics/giphy.gif', // Placeholder
        'https://media.giphy.com/media/car-bounce/giphy.gif' // Placeholder
    ],
    festival: [
        'https://media.giphy.com/media/festival-crowd/giphy.gif', // Placeholder
        'https://media.giphy.com/media/car-show/giphy.gif' // Placeholder
    ]
};

// Função para carregar imagem com fallback
export function loadImageWithFallback(src, fallback) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(fallback);
        img.src = src;
    });
}

// Função para otimizar URLs de imagem com parâmetros
export function optimizeImageUrl(url, width = 800, height = 600, quality = 80) {
    if (url.includes('unsplash.com')) {
        return `${url}&w=${width}&h=${height}&q=${quality}&auto=format`;
    }
    return url;
}