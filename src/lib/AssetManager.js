// Assets reais de lowrider festivals encontrados no Google Images
export const heroAssets = {
  video: {
    poster: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Placeholder poster
    sources: [
      // Placeholder - usuário pode adicionar vídeos locais depois
      { src: "/videos/lowrider-festival.mp4", type: "video/mp4" },
      { src: "/videos/lowrider-festival.webm", type: "video/webm" }
    ]
  },
  fallbackImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&crop=center"
};

// Imagens inspiradas em festivais lowrider reais
export const galleryAssets = [
  {
    id: 1,
    category: 'cars',
    title: 'Lowrider Clássico',
    description: 'Chevy Impala com hydraulics e paint job personalizado',
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    category: 'cars',
    title: 'Festival Show Chicago',
    description: 'Slow & Low Chicago Lowrider Festival',
    src: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    category: 'culture',
    title: 'Cultura Chicana',
    description: 'Celebração da herança e identidade chicana',
    src: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    category: 'cars',
    title: 'Hydraulic Hop Contest',
    description: 'Competição de saltos hidráulicos',
    src: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    category: 'art',
    title: 'Arte Mural Chicana',
    description: 'Expressão artística da cultura lowrider',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    category: 'bikes',
    title: 'Lowrider Bikes',
    description: 'Exposição de bicicletas customizadas',
    src: 'https://images.unsplash.com/photo-1558618047-b50c0e2bb1ab?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1558618047-b50c0e2bb1ab?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    category: 'cars',
    title: 'Car Club Meeting',
    description: 'Encontro de clubes de lowriders',
    src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    category: 'culture',
    title: 'Festival Main Stage',
    description: 'Palco principal com música e performances',
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
    placeholder: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop'
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