import { animate, stagger, inView } from 'motion';

/**
 * Animation presets for the Lowrider Festival website
 */

// Fade in from bottom animation
export const fadeInUp = (element, delay = 0) => {
  animate(
    element,
    { 
      opacity: [0, 1], 
      y: [30, 0] 
    },
    { 
      duration: 0.8,
      easing: 'ease-out',
      delay 
    }
  );
};

// Fade in with scale animation
export const fadeInScale = (element, delay = 0) => {
  animate(
    element,
    { 
      opacity: [0, 1], 
      scale: [0.9, 1] 
    },
    { 
      duration: 0.6,
      easing: 'ease-out',
      delay 
    }
  );
};

// Slide in from left
export const slideInLeft = (element, delay = 0) => {
  animate(
    element,
    { 
      opacity: [0, 1], 
      x: [-100, 0] 
    },
    { 
      duration: 0.8,
      easing: 'ease-out',
      delay 
    }
  );
};

// Slide in from right
export const slideInRight = (element, delay = 0) => {
  animate(
    element,
    { 
      opacity: [0, 1], 
      x: [100, 0] 
    },
    { 
      duration: 0.8,
      easing: 'ease-out',
      delay 
    }
  );
};

// Stagger animation for grid items
export const staggerGrid = (elements, delay = 0) => {
  animate(
    elements,
    { 
      opacity: [0, 1], 
      y: [50, 0] 
    },
    { 
      duration: 0.6,
      easing: 'ease-out',
      delay: stagger(0.1, { startDelay: delay })
    }
  );
};

// Counter animation
export const animateCounter = (element, from, to, duration = 2) => {
  animate(
    progress => {
      element.textContent = Math.round(from + (to - from) * progress);
    },
    { duration }
  );
};

// Magnetic button effect
export const magneticButton = (button) => {
  const handleMouseMove = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    animate(
      button,
      { 
        x: x * 0.3, 
        y: y * 0.3 
      },
      { 
        duration: 0.3,
        easing: 'ease-out' 
      }
    );
  };

  const handleMouseLeave = () => {
    animate(
      button,
      { 
        x: 0, 
        y: 0 
      },
      { 
        duration: 0.5,
        easing: 'ease-out' 
      }
    );
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Parallax scroll effect
export const parallaxScroll = (element, speed = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrolled;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Only animate when element is in viewport
    if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
      const yPos = -(scrolled - elementTop) * speed;
      animate(
        element,
        { y: yPos },
        { duration: 0 }
      );
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Scroll-triggered animations
export const setupScrollAnimations = () => {
  // Animate sections when they come into view
  inView('.hero-content', (info) => {
    fadeInUp(info.target, 0.2);
  });

  inView('.activity-card', (info) => {
    staggerGrid(document.querySelectorAll('.activity-card'));
  }, { margin: '-100px' });

  inView('.section-title', (info) => {
    fadeInUp(info.target);
  });

  inView('.team-member', (info) => {
    const cards = document.querySelectorAll('.team-member');
    cards.forEach((card, index) => {
      const isEven = index % 2 === 0;
      if (isEven) {
        slideInLeft(card, index * 0.1);
      } else {
        slideInRight(card, index * 0.1);
      }
    });
  });

  inView('.schedule-tab', (info) => {
    staggerGrid(document.querySelectorAll('.schedule-tab'), 0.1);
  });

  // Gallery items
  inView('.gallery-item', (info) => {
    fadeInScale(info.target);
  }, { margin: '-50px' });

  // Statistics counters
  inView('.stat-number', (info) => {
    const target = info.target;
    const value = parseInt(target.textContent);
    if (value && !target.classList.contains('animated')) {
      target.classList.add('animated');
      animateCounter(target, 0, value);
    }
  });
};

// Enhanced hover effects
export const setupHoverEffects = () => {
  // Activity cards with 3D tilt effect
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(
        card,
        { 
          scale: 1.05,
          rotateY: 5,
          rotateX: 2
        },
        { 
          duration: 0.3,
          easing: 'ease-out' 
        }
      );
    });

    card.addEventListener('mouseleave', () => {
      animate(
        card,
        { 
          scale: 1,
          rotateY: 0,
          rotateX: 0
        },
        { 
          duration: 0.3,
          easing: 'ease-out' 
        }
      );
    });
  });

  // Team member cards bounce effect
  document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
      animate(
        member,
        { 
          scale: 1.08,
          rotateZ: 2
        },
        { 
          duration: 0.4,
          easing: [0.25, 0.46, 0.45, 0.94]
        }
      );
    });

    member.addEventListener('mouseleave', () => {
      animate(
        member,
        { 
          scale: 1,
          rotateZ: 0
        },
        { 
          duration: 0.4,
          easing: [0.25, 0.46, 0.45, 0.94]
        }
      );
    });
  });

  // Gallery items zoom effect
  document.querySelectorAll('.gallery-item img').forEach(img => {
    const container = img.closest('.gallery-item');
    
    container.addEventListener('mouseenter', () => {
      animate(
        img,
        { scale: 1.1 },
        { 
          duration: 0.6,
          easing: 'ease-out' 
        }
      );
    });

    container.addEventListener('mouseleave', () => {
      animate(
        img,
        { scale: 1 },
        { 
          duration: 0.6,
          easing: 'ease-out' 
        }
      );
    });
  });

  // Enhanced button effects
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      animate(
        button,
        { 
          scale: 1.05,
          y: -2
        },
        { 
          duration: 0.2,
          easing: 'ease-out' 
        }
      );
    });

    button.addEventListener('mouseleave', () => {
      animate(
        button,
        { 
          scale: 1,
          y: 0
        },
        { 
          duration: 0.2,
          easing: 'ease-out' 
        }
      );
    });
  });

  // Magnetic effect for primary CTA buttons
  document.querySelectorAll('.btn-primary').forEach(magneticButton);
};

// Initialize all animations
export const initAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupScrollAnimations();
      setupHoverEffects();
    });
  } else {
    setupScrollAnimations();
    setupHoverEffects();
  }
};