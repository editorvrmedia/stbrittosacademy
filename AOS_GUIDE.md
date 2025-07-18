# AOS (Animate On Scroll) System Guide

This guide explains how to use the AOS (Animate On Scroll) library for scroll-triggered reveal animations in your React project.

## Overview

The AOS system provides smooth, scroll-triggered animations that reveal elements as they come into view. Elements can fade in, slide in from different directions, zoom in, or flip as they enter the viewport.

## Components

### 1. AOSProvider
The main provider that initializes AOS and manages global settings.

```tsx
import { AOSProvider } from './components/aos';

// Wrap your app with AOSProvider
<AOSProvider config={{
  offset: 120,
  delay: 0,
  duration: 800,
  easing: 'ease-in-out',
  once: true
}}>
  <YourApp />
</AOSProvider>
```

**Config Options:**
- `offset` (number, default: 120): Offset from trigger point
- `delay` (number, default: 0): Animation delay in ms
- `duration` (number, default: 800): Animation duration in ms
- `easing` (string, default: 'ease-in-out'): Animation easing
- `once` (boolean, default: true): Whether animation happens only once
- `mirror` (boolean, default: false): Whether elements animate out when scrolling past
- `anchorPlacement` (string, default: 'top-bottom'): Trigger position

### 2. AOSElement
Simple AOS animation for individual elements.

```tsx
import { AOSElement } from './components/aos';

<AOSElement 
  animation="fade-up" 
  delay={100}
  duration={800}
  className="my-element"
>
  <h2>This will animate when scrolled into view</h2>
</AOSElement>
```

**Props:**
- `animation` (string): Animation type (see list below)
- `delay` (number, default: 0): Animation delay in ms
- `duration` (number, default: 800): Animation duration in ms
- `offset` (number, default: 120): Offset from trigger point
- `easing` (string, default: 'ease-in-out'): Animation easing
- `once` (boolean, default: true): Whether animation happens only once
- `mirror` (boolean, default: false): Whether element animates out
- `anchorPlacement` (string): Trigger position
- `className` (string): Additional CSS classes
- `style` (object): Additional inline styles
- `as` (string): HTML element type (default: 'div')

### 3. StaggeredAOS
Applies animations to multiple children with increasing delays.

```tsx
import { StaggeredAOS } from './components/aos';

<StaggeredAOS 
  animation="fade-up" 
  staggerDelay={100}
  baseDelay={0}
  className="grid grid-cols-3 gap-4"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggeredAOS>
```

**Props:**
- `animation` (string): Animation type for all children
- `staggerDelay` (number, default: 100): Delay between each child
- `baseDelay` (number, default: 0): Base delay before first child
- `duration` (number, default: 800): Animation duration
- `offset` (number, default: 120): Offset from trigger point
- `easing` (string, default: 'ease-in-out'): Animation easing
- `once` (boolean, default: true): Whether animations happen only once
- `mirror` (boolean, default: false): Whether elements animate out
- `anchorPlacement` (string): Trigger position

## Available Animations

### Fade Animations
- `fade-up` - Fade in from bottom
- `fade-down` - Fade in from top
- `fade-left` - Fade in from right
- `fade-right` - Fade in from left
- `fade-up-right` - Fade in from bottom-right
- `fade-up-left` - Fade in from bottom-left
- `fade-down-right` - Fade in from top-right
- `fade-down-left` - Fade in from top-left

### Zoom Animations
- `zoom-in` - Zoom in from center
- `zoom-in-up` - Zoom in from bottom
- `zoom-in-down` - Zoom in from top
- `zoom-in-left` - Zoom in from right
- `zoom-in-right` - Zoom in from left
- `zoom-out` - Zoom out from center
- `zoom-out-up` - Zoom out to top
- `zoom-out-down` - Zoom out to bottom
- `zoom-out-left` - Zoom out to left
- `zoom-out-right` - Zoom out to right

### Slide Animations
- `slide-up` - Slide up from bottom
- `slide-down` - Slide down from top
- `slide-right` - Slide in from right
- `slide-left` - Slide in from left

### Flip Animations
- `flip-left` - Flip from left
- `flip-right` - Flip from right
- `flip-up` - Flip from bottom
- `flip-down` - Flip from top

## Usage Examples

### Basic Fade Animation
```tsx
<AOSElement animation="fade-up" delay={100}>
  <h2>Welcome to Our School</h2>
</AOSElement>
```

### Staggered Grid Animation
```tsx
<StaggeredAOS 
  animation="zoom-in" 
  staggerDelay={150}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
>
  <div className="bg-blue-100 p-4 rounded">Card 1</div>
  <div className="bg-green-100 p-4 rounded">Card 2</div>
  <div className="bg-yellow-100 p-4 rounded">Card 3</div>
  <div className="bg-red-100 p-4 rounded">Card 4</div>
</StaggeredAOS>
```

### Hero Section with Multiple Animations
```tsx
<div className="hero-section">
  <AOSElement animation="fade-down" delay={0}>
    <h1>Welcome to Excellence</h1>
  </AOSElement>
  <AOSElement animation="fade-up" delay={200}>
    <p>Discover the difference that quality education makes</p>
  </AOSElement>
  <AOSElement animation="zoom-in" delay={400}>
    <button className="cta-button">Get Started</button>
  </AOSElement>
</div>
```

### Content Section with Side-by-Side Animation
```tsx
<div className="flex flex-col lg:flex-row gap-8">
  <AOSElement animation="fade-right" delay={0} className="flex-1">
    <div className="content">
      <h2>Our Mission</h2>
      <p>To provide excellent education...</p>
    </div>
  </AOSElement>
  <AOSElement animation="fade-left" delay={200} className="flex-1">
    <img src="/mission-image.jpg" alt="Our Mission" />
  </AOSElement>
</div>
```

## Performance Tips

1. **Use appropriate delays**: Keep delays between 0-500ms for smooth flow
2. **Limit animations**: Don't overuse animations - they can impact performance
3. **Use once: true**: Prevents re-animation on scroll up/down
4. **Disable on mobile**: AOS is automatically disabled on mobile for better performance
5. **Optimize duration**: Keep durations between 400-1000ms for smooth animations

## Browser Support

- Modern browsers with CSS transforms support
- Mobile browsers (with performance optimizations)
- Touch device support

## Troubleshooting

### Animations not working
1. Ensure AOSProvider is wrapping your app
2. Check that AOS is properly initialized
3. Verify animation names are correct
4. Check browser console for errors

### Performance issues
1. Reduce the number of animated elements
2. Use shorter animation durations
3. Increase stagger delays
4. Consider disabling on mobile

### Mobile issues
1. AOS is automatically disabled on mobile for performance
2. Test on actual mobile devices
3. Consider using simpler animations for mobile

## Advanced Usage

### Custom AOS Configuration
```tsx
<AOSProvider config={{
  offset: 100,
  delay: 50,
  duration: 600,
  easing: 'ease-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-center'
}}>
  <YourApp />
</AOSProvider>
```

### Conditional Animations
```tsx
const [enableAnimations, setEnableAnimations] = useState(true);

{enableAnimations ? (
  <AOSElement animation="fade-up">
    <div>Animated content</div>
  </AOSElement>
) : (
  <div>Static content</div>
)}
```

### Custom Element Types
```tsx
<AOSElement 
  animation="fade-up" 
  as="section"
  className="my-section"
>
  <h2>Section with animation</h2>
</AOSElement>
```

This AOS system provides smooth, performant scroll-triggered animations that enhance the user experience while maintaining good performance across devices. 