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

// Imagens reais de festivais lowrider encontradas em pesquisa
export const galleryAssets = [
  {
    id: 1,
    category: 'cars',
    title: 'Ventura County Lowrider Show',
    description: 'Exposição de lowriders com paint jobs reluzentes',
    src: 'https://foothilldragonpress.org/wp-content/uploads/2024/02/JWxfKzIitf8iUvo0GehJxXRJf1ZPbdkrcgkl5vgA.jpg',
    placeholder: 'https://foothilldragonpress.org/wp-content/uploads/2024/02/JWxfKzIitf8iUvo0GehJxXRJf1ZPbdkrcgkl5vgA.jpg'
  },
  {
    id: 2,
    category: 'cars',
    title: 'Slow & Low Chicago Festival',
    description: 'Navy Pier - maior festival de lowriders de Chicago',
    src: 'https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2024/10/image1.jpeg',
    placeholder: 'https://i0.wp.com/bcc-newspack.s3.amazonaws.com/uploads/2024/10/image1.jpeg'
  },
  {
    id: 3,
    category: 'culture',
    title: 'Lincoln Park Day - El Paso',
    description: 'Celebração da cultura chicana no Texas',
    src: 'https://www.lonestarlive.com/resizer/v2/OG4EASQFWBBYTII4UNLLJBVRXI.jpg',
    placeholder: 'https://www.lonestarlive.com/resizer/v2/OG4EASQFWBBYTII4UNLLJBVRXI.jpg'
  },
  {
    id: 4,
    category: 'cars',
    title: 'Hispanic Heritage Festival',
    description: 'Aztec Legacy Car Club - Northridge Mall Salinas',
    src: 'https://www.thecalifornian.com/gcdn/authoring/authoring-images/2024/10/01/PSAS/75468777007-carshow-20.JPG',
    placeholder: 'https://www.thecalifornian.com/gcdn/authoring/authoring-images/2024/10/01/PSAS/75468777007-carshow-20.JPG'
  },
  {
    id: 5,
    category: 'art',
    title: 'Lowrider Day Española NM',
    description: 'Arte e cultura no Novo México',
    src: 'https://bloximages.chicago2.vip.townnews.com/riograndesun.com/content/tncms/assets/v3/editorial/e/3b/e3b2e45c-4f5b-11ef-be4c-e32c111b65d0/66aa697b3ea2b.image.jpg',
    placeholder: 'https://bloximages.chicago2.vip.townnews.com/riograndesun.com/content/tncms/assets/v3/editorial/e/3b/e3b2e45c-4f5b-11ef-be4c-e32c111b65d0/66aa697b3ea2b.image.jpg'
  },
  {
    id: 6,
    category: 'cars',
    title: 'Ranflas Y Rolas Car Show',
    description: 'Elevate Cannabis apresenta lowriders em Pasadena',
    src: 'https://lowridersyndicate.com/wp-content/uploads/2022/03/Eleveate-cannabis-lowrider.jpg',
    placeholder: 'https://lowridersyndicate.com/wp-content/uploads/2022/03/Eleveate-cannabis-lowrider.jpg'
  },
  {
    id: 7,
    category: 'culture',
    title: 'Lowrider MeatUp Houston',
    description: 'Churrasco, música e lowriders no Texas',
    src: 'https://www.columbian.com/wp-content/uploads/2024/10/Hispanic_Heritage_Lowriders_85349-e697c.jpg',
    placeholder: 'https://www.columbian.com/wp-content/uploads/2024/10/Hispanic_Heritage_Lowriders_85349-e697c.jpg'
  },
  {
    id: 8,
    category: 'cars',
    title: 'Classic Lowrider Show',
    description: 'Carros clássicos customizados com hydraulics',
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