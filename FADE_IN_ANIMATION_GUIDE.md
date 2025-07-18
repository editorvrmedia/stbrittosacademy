# Animation System Guide

This guide explains how to use the comprehensive animation system that has been added to the project, including both fade-in and slide-in animations.

## Overview

The animation system provides smooth, performant animations for elements as they come into view (fade-in) or on page load (slide-in). It uses CSS transitions and animations for optimal performance.

## Animation Types

### Fade-in Animations (Triggered on scroll)
These animations are triggered when elements come into view using Intersection Observer.

### Slide-in Animations (Triggered on page load)
These animations are triggered immediately when the page loads.

## CSS Classes Available

### Fade-in Animation Classes
- `.fade-in` - Basic fade-in with slight upward movement
- `.fade-in-up` - Fade-in with upward movement
- `.fade-in-down` - Fade-in with downward movement
- `.fade-in-left` - Fade-in with leftward movement
- `.fade-in-right` - Fade-in with rightward movement
- `.fade-in-scale` - Fade-in with scale effect

### Slide-in Animation Classes
- `.slide-up` - Slide in from below
- `.slide-down` - Slide in from above
- `.slide-left` - Slide in from the right
- `.slide-right` - Slide in from the left

### Stagger Classes
- `.fade-in-stagger-1` through `.fade-in-stagger-10` - Adds delay to fade-in animations
- `.slide-up-stagger-1` through `.slide-up-stagger-10` - Adds delay to slide-up animations
- `.slide-down-stagger-1` through `.slide-down-stagger-10` - Adds delay to slide-down animations
- `.slide-left-stagger-1` through `.slide-left-stagger-10` - Adds delay to slide-left animations
- `.slide-right-stagger-1` through `.slide-right-stagger-10` - Adds delay to slide-right animations

## How to Use

### Method 1: Direct CSS Classes

#### Fade-in Animations (Scroll-triggered)
```jsx
<div className="fade-in">
  This will fade in when it comes into view
</div>

<h2 className="fade-in-up fade-in-stagger-2">
  This will fade in from below with a 0.2s delay
</h2>
```

#### Slide-in Animations (Page load-triggered)
```jsx
<div className="slide-up">
  This will slide up when the page loads
</div>

<h2 className="slide-down slide-down-stagger-2">
  This will slide down from above with a 0.2s delay
</h2>

<div className="slide-left slide-left-stagger-3">
  This will slide in from the right with a 0.3s delay
</div>
```

### Method 2: Using React Components

#### Fade-in Components
```jsx
import { FadeIn, FadeInContainer } from './components/animated';

<FadeIn type="fade-in-up" stagger={2}>
  <div>This content will fade in from below with stagger</div>
</FadeIn>

<FadeInContainer type="fade-in-up">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</FadeInContainer>
```

#### Slide-in Components
```jsx
import { SlideIn, SlideInContainer } from './components/animated';

<SlideIn type="slide-up" stagger={2}>
  <div>This content will slide up with stagger</div>
</SlideIn>

<SlideInContainer type="slide-left">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</SlideInContainer>
```

## Configuration

The fade-in animation system is automatically initialized in `App.tsx` with these default settings:

```javascript
initGlobalFadeInAnimation({
  delay: 150,           // Delay between staggered animations (ms)
  threshold: 0.1,       // Intersection Observer threshold
  rootMargin: '0px 0px -50px 0px'  // Trigger animation 50px before element is visible
});
```

## Animation Types and Use Cases

### Fade-in Animations
- **fade-in**: General content, paragraphs, images
- **fade-in-up**: Headers, titles, main content sections
- **fade-in-down**: Navigation elements, dropdowns
- **fade-in-left**: Sidebar content, left-aligned elements
- **fade-in-right**: Sidebar content, right-aligned elements
- **fade-in-scale**: Cards, buttons, interactive elements

### Slide-in Animations
- **slide-up**: Hero sections, main content, call-to-action buttons
- **slide-down**: Headers, navigation menus, announcements
- **slide-left**: Sidebar content, left-aligned sections
- **slide-right**: Sidebar content, right-aligned sections

## Staggering Animations

### Fade-in Staggering
```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="fade-in fade-in-stagger-1">Item 1</div>
  <div className="fade-in fade-in-stagger-2">Item 2</div>
  <div className="fade-in fade-in-stagger-3">Item 3</div>
</div>
```

### Slide-in Staggering
```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="slide-up slide-up-stagger-1">Item 1</div>
  <div className="slide-up slide-up-stagger-2">Item 2</div>
  <div className="slide-up slide-up-stagger-3">Item 3</div>
</div>
```

## Accessibility

The system automatically respects user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .fade-in, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale,
  .slide-up, .slide-down, .slide-left, .slide-right {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

## Performance Features

- **Intersection Observer**: Only animates fade-in elements when they come into view
- **CSS Animations**: Hardware-accelerated animations for slide-in effects
- **Automatic cleanup**: Observers are properly disposed of
- **Reduced motion support**: Respects user accessibility preferences

## Examples

### Hero Section with Slide-in
```jsx
<section className="hero-section">
  <h1 className="slide-down">Welcome to Our School</h1>
  <p className="slide-down slide-down-stagger-1">
    Discover excellence in education
  </p>
  <button className="slide-up slide-up-stagger-2">
    Get Started
  </button>
</section>
```

### Card Grid with Fade-in
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {cards.map((card, index) => (
    <div key={card.id} className={`fade-in-up fade-in-stagger-${index + 1}`}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  ))}
```

### Navigation Menu with Slide-in
```jsx
<nav className="slide-down">
  <ul>
    <li className="slide-right slide-right-stagger-1">Home</li>
    <li className="slide-right slide-right-stagger-2">About</li>
    <li className="slide-right slide-right-stagger-3">Contact</li>
  </ul>
</nav>
```

### Content Sections with Mixed Animations
```jsx
<div className="content-section">
  <h2 className="slide-left">Section Title</h2>
  <div className="content-grid">
    <div className="fade-in-up fade-in-stagger-1">Content 1</div>
    <div className="fade-in-up fade-in-stagger-2">Content 2</div>
    <div className="fade-in-up fade-in-stagger-3">Content 3</div>
  </div>
</div>
```

## Troubleshooting

### Animations not working?
1. Check that the element has the correct CSS class
2. For fade-in: Ensure the global animation system is initialized
3. For slide-in: Verify the element is visible on page load
4. Check browser console for any JavaScript errors

### Performance issues?
1. Avoid using too many staggered animations at once
2. Consider using simpler animations for better performance
3. Limit stagger delays to 10 or fewer

### Accessibility concerns?
1. The system automatically respects `prefers-reduced-motion`
2. Test with screen readers to ensure content is accessible
3. Consider adding `aria-live` attributes for dynamic content

## Migration from Existing Animations

If you have existing Framer Motion animations, you can replace them with the new system:

**Before (Framer Motion):**
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**After (CSS Classes):**
```jsx
<div className="fade-in-up">
  Content
</div>
```

**For page load animations:**
```jsx
<div className="slide-up">
  Content
</div>
```

This new system provides better performance and is easier to maintain while offering the same visual effects.

## Loading Screen System

The project also includes a comprehensive loading screen system that provides a professional loading experience while the page loads.

### Features

- **Spinning Logo**: School logo spins while loading
- **Real-time Progress**: Tracks actual resource loading (images, CSS, JS, fonts)
- **Progress Bar**: Visual progress indicator with percentage
- **Smooth Transitions**: Fades out smoothly when loading completes
- **Fallback Timing**: Handles slow connections gracefully
- **Accessibility**: Respects reduced motion preferences
- **Customizable**: Easy to customize colors, logo, and messages

### Usage

#### Basic Usage
```jsx
import LoadingScreen from './components/LoadingScreen';

// In your App component
<LoadingScreen onLoadingComplete={() => console.log('Loading complete!')} />
```

#### Customized Loading Screen
```jsx
<LoadingScreen 
  logo="/path/to/your/logo.png"
  backgroundColor="#f8fafc"
  spinnerColor="#3b82f6"
  onLoadingComplete={handleLoadingComplete}
/>
```

#### Manual Control
```jsx
const [showLoading, setShowLoading] = useState(true);

<LoadingScreen 
  onLoadingComplete={() => setShowLoading(false)}
/>

{showLoading && <LoadingScreen />}
```

### Loading Manager

The system includes a `LoadingManager` utility that tracks actual resource loading:

```jsx
import { getLoadingManager } from './utils/loadingManager';

const loadingManager = getLoadingManager();

// Subscribe to progress updates
loadingManager.addListener((progress) => {
  console.log(`Loading progress: ${progress}%`);
});
```

### Customization Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | string | School logo path | Path to the spinning logo |
| `backgroundColor` | string | '#ffffff' | Background color of loading screen |
| `spinnerColor` | string | '#0077b6' | Color of progress bar and dots |
| `onLoadingComplete` | function | undefined | Callback when loading finishes |

### CSS Classes

The loading screen uses these CSS classes for animations:

- `.loading-fade-in` - Initial fade-in animation
- `.loading-screen-fade-out` - Fade-out transition
- `.spinning-logo` - Logo rotation animation
- `.loading-bounce` - Bouncing text animation
- `.loading-pulse` - Pulsing dots animation
- `.loading-shimmer` - Shimmer effect for tips
- `.progress-bar-fill` - Progress bar animation

### Integration with Animation System

The loading screen works seamlessly with the fade-in and slide-in animation systems:

1. **Loading Screen**: Shows while page loads
2. **Fade-out**: Loading screen fades out smoothly
3. **Content Animations**: Fade-in and slide-in animations begin
4. **User Experience**: Smooth, professional loading experience

This creates a complete animation ecosystem that provides engaging user experiences from initial page load through content exploration. 