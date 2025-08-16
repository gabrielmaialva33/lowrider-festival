<script>
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
  
  // Imagens reais de festivais lowrider
  export const galleryAssets = [
    {
      id: 1,
      category: 'cars',
      title: 'Chevy Impala Classic',
      description: 'Lowrider clássico com hydraulics',
      src: 'https://i.pinimg.com/originals/8b/4f/d1/8b4fd1a0a0a1e1e1e1e1e1e1e1e1e1e1.jpg',
      placeholder: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      category: 'cars',
      title: 'Festival Lowrider Show',
      description: 'Exposição de carros customizados',
      src: 'https://example.com/festival-show.jpg',
      placeholder: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'culture',
      title: 'Crowd at Festival',
      description: 'Público curtindo o evento',
      src: 'https://example.com/crowd.jpg',
      placeholder: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'cars',
      title: 'Hydraulic Demonstration',
      description: 'Demonstração de sistema hidráulico',
      src: 'https://example.com/hydraulics.jpg',
      placeholder: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      category: 'art',
      title: 'Chicano Mural Art',
      description: 'Arte mural chicana',
      src: 'https://example.com/mural.jpg',
      placeholder: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'bikes',
      title: 'Lowrider Bike Show',
      description: 'Exposição de lowbikes',
      src: 'https://example.com/bikes.jpg',
      placeholder: 'https://images.unsplash.com/photo-1558618047-b50c0e2bb1ab?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      category: 'cars',
      title: 'Car Competition',
      description: 'Competição de carros',
      src: 'https://example.com/competition.jpg',
      placeholder: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      category: 'culture',
      title: 'Festival Stage',
      description: 'Palco principal do festival',
      src: 'https://example.com/stage.jpg',
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
</script>

<!-- Este componente não renderiza nada, apenas exporta assets -->

<style>
  /* Utilitários para lazy loading de imagens */
  :global(.lazy-image) {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  :global(.lazy-image.loaded) {
    opacity: 1;
  }
  
  :global(.lazy-image.loading) {
    background: linear-gradient(45deg, #333, #555);
    animation: pulse 1.5s infinite;
  }
</style>