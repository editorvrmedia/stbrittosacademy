# GSAP ScrollTrigger Parallax System Guide

This guide explains how to use the comprehensive parallax system implemented with GSAP ScrollTrigger for smooth, performant parallax effects.

## Overview

The parallax system provides multiple components for creating smooth parallax effects where background elements scroll slower than foreground elements, creating depth and visual interest.

## Components

### 1. ParallaxProvider
The main provider that manages all parallax effects and ScrollTrigger instances.

```tsx
import { ParallaxProvider } from './components/parallax';

// Wrap your app with ParallaxProvider
<ParallaxProvider>
  <YourApp />
</ParallaxProvider>
```

### 2. ParallaxElement
Simple parallax effect for individual elements.

```tsx
import { ParallaxElement } from './components/parallax';

<ParallaxElement 
  speed={0.5} 
  direction="up"
  className="my-element"
>
  <h2>This will move slower than the page</h2>
</ParallaxElement>
```

**Props:**
- `speed` (number, default: 0.5): How fast the element moves relative to scroll
- `direction` ('up' | 'down' | 'left' | 'right', default: 'up'): Movement direction
- `trigger` (string | HTMLElement): Element that triggers the effect
- `start` (string, default: 'top bottom'): When to start the effect
- `end` (string, default: 'bottom top'): When to end the effect
- `scrub` (boolean | number, default: true): Whether to scrub the animation
- `className` (string): Additional CSS classes
- `style` (object): Additional inline styles

### 3. ParallaxBackground
For background images and videos with parallax effects.

```tsx
import { ParallaxBackground } from './components/parallax';

<ParallaxBackground
  imageSrc="/path/to/image.jpg"
  videoSrc="/path/to/video.mp4"
  speed={0.3}
  direction="up"
  scale={true}
  overlay={true}
  overlayColor="rgba(0, 0, 0, 0.3)"
  overlayOpacity={0.3}
  className="hero-section"
>
  <h1>Content over parallax background</h1>
</ParallaxBackground>
```

**Props:**
- `imageSrc` (string): Background image URL
- `videoSrc` (string): Background video URL
- `speed` (number, default: 0.5): Parallax speed
- `direction` ('up' | 'down' | 'left' | 'right', default: 'up'): Movement direction
- `scale` (boolean, default: true): Whether to scale the background
- `overlay` (boolean, default: false): Whether to add an overlay
- `overlayColor` (string, default: 'rgba(0, 0, 0, 0.3)'): Overlay color
- `overlayOpacity` (number, default: 0.3): Overlay opacity

### 4. LayeredParallax
Creates depth with multiple elements moving at different speeds.

```tsx
import { LayeredParallax } from './components/parallax';

<LayeredParallax speeds={[0.2, 0.4, 0.6]} direction="up">
  <div className="layer-1">Background layer</div>
  <div className="layer-2">Middle layer</div>
  <div className="layer-3">Foreground layer</div>
</LayeredParallax>
```

**Props:**
- `speeds` (number[], default: [0.2, 0.4, 0.6, 0.8]): Speed for each child element
- `direction` ('up' | 'down' | 'left' | 'right', default: 'up'): Movement direction
- `trigger` (string | HTMLElement): Element that triggers the effect
- `start` (string, default: 'top bottom'): When to start the effect
- `end` (string, default: 'bottom top'): When to end the effect
- `scrub` (boolean | number, default: true): Whether to scrub the animation

## Usage Examples

### Hero Section with Video Background
```tsx
<ParallaxBackground
  videoSrc="/videointro.mp4"
  speed={0.3}
  direction="up"
  scale={true}
  overlay={true}
  overlayColor="rgba(0, 0, 0, 0.2)"
  overlayOpacity={0.2}
  className="hero-section"
  style={{ minHeight: '40vw', height: '40vw', maxHeight: '80vh' }}
>
  <h1>Welcome to Our School</h1>
  <p>Discover excellence in education</p>
</ParallaxBackground>
```

### Content Section with Layered Parallax
```tsx
<LayeredParallax speeds={[0.2, 0.4, 0.6]} direction="up">
  <div className="bg-image">
    <img src="/background.jpg" alt="Background" />
  </div>
  <div className="content">
    <h2>Our Mission</h2>
    <p>To provide excellent education...</p>
  </div>
  <div className="floating-elements">
    <div className="floating-icon">🎓</div>
    <div className="floating-icon">📚</div>
  </div>
</LayeredParallax>
```

### Text with Parallax Effect
```tsx
<ParallaxElement speed={0.4} direction="up">
  <h2 className="text-4xl font-bold text-center">
    Celebrating 28 Years of Excellence
  </h2>
</ParallaxElement>
```

## Performance Tips

1. **Use appropriate speeds**: Keep speeds between 0.1 and 1.0 for smooth effects
2. **Limit parallax elements**: Don't overuse parallax - it can impact performance
3. **Use transform**: The system uses CSS transforms for optimal performance
4. **Test on mobile**: Ensure effects work well on touch devices

## Browser Support

- Modern browsers with CSS transforms support
- GSAP ScrollTrigger compatibility
- Touch device support for mobile parallax

## Troubleshooting

### Parallax not working
1. Ensure ParallaxProvider is wrapping your app
2. Check that GSAP and ScrollTrigger are properly loaded
3. Verify element refs are properly set

### Performance issues
1. Reduce the number of parallax elements
2. Lower parallax speeds
3. Use `will-change: transform` CSS property for better performance

### Mobile issues
1. Test on actual mobile devices
2. Consider disabling parallax on mobile if performance is poor
3. Use smaller speeds for mobile devices

## Advanced Usage

### Custom ScrollTrigger Configuration
```tsx
import { useParallax } from './components/parallax';

const MyComponent = () => {
  const { createParallaxEffect } = useParallax();
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const trigger = createParallaxEffect(elementRef.current, {
        speed: 0.5,
        direction: 'up',
        trigger: '.container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      });

      return () => trigger.kill();
    }
  }, []);

  return <div ref={elementRef}>Custom parallax element</div>;
};
```

### Conditional Parallax
```tsx
const [enableParallax, setEnableParallax] = useState(true);

{enableParallax ? (
  <ParallaxElement speed={0.5}>
    <div>Parallax content</div>
  </ParallaxElement>
) : (
  <div>Static content</div>
)}
```

This parallax system provides smooth, performant effects that enhance the user experience while maintaining good performance across devices. 