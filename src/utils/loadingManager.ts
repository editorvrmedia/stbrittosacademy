// Loading Manager Utility
export class LoadingManager {
  private progress: number = 0;
  private listeners: ((progress: number) => void)[] = [];
  private resources: Set<string> = new Set();
  private loadedResources: Set<string> = new Set();
  private isComplete: boolean = false;

  constructor() {
    this.initializeResourceTracking();
  }

  private initializeResourceTracking() {
    // Track images
    this.trackImages();
    
    // Track CSS files
    this.trackCSSFiles();
    
    // Track JavaScript files
    this.trackJSFiles();
    
    // Track fonts
    this.trackFonts();
  }

  private trackImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.src;
      if (src && !this.resources.has(src)) {
        this.resources.add(src);
        
        if (img.complete) {
          this.loadedResources.add(src);
        } else {
          img.addEventListener('load', () => {
            this.loadedResources.add(src);
            this.updateProgress();
          });
          
          img.addEventListener('error', () => {
            this.loadedResources.add(src); // Count as loaded even if failed
            this.updateProgress();
          });
        }
      }
    });
  }

  private trackCSSFiles() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = (link as HTMLLinkElement).href;
      if (href && !this.resources.has(href)) {
        this.resources.add(href);
        this.loadedResources.add(href); // CSS is usually loaded by now
      }
    });
  }

  private trackJSFiles() {
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src && !this.resources.has(src)) {
        this.resources.add(src);
        this.loadedResources.add(src); // JS is usually loaded by now
      }
    });
  }

  private trackFonts() {
    // Track web fonts if they exist
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        this.loadedResources.add('fonts');
        this.updateProgress();
      });
    }
  }

  private updateProgress() {
    if (this.isComplete) return;

    const totalResources = this.resources.size;
    const loadedCount = this.loadedResources.size;
    
    if (totalResources === 0) {
      this.progress = 100;
    } else {
      this.progress = Math.min(95, (loadedCount / totalResources) * 100);
    }

    // Notify listeners
    this.listeners.forEach(listener => listener(this.progress));

    // Check if everything is loaded
    if (this.progress >= 95 && document.readyState === 'complete') {
      this.complete();
    }
  }

  private complete() {
    this.isComplete = true;
    this.progress = 100;
    this.listeners.forEach(listener => listener(100));
  }

  public addListener(callback: (progress: number) => void) {
    this.listeners.push(callback);
    // Immediately call with current progress
    callback(this.progress);
  }

  public removeListener(callback: (progress: number) => void) {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  public getProgress(): number {
    return this.progress;
  }

  public isFinished(): boolean {
    return this.isComplete;
  }

  public destroy() {
    this.listeners = [];
    this.resources.clear();
    this.loadedResources.clear();
  }
}

// Global loading manager instance
let globalLoadingManager: LoadingManager | null = null;

export const getLoadingManager = (): LoadingManager => {
  if (!globalLoadingManager) {
    globalLoadingManager = new LoadingManager();
  }
  return globalLoadingManager;
};

export const destroyLoadingManager = (): void => {
  if (globalLoadingManager) {
    globalLoadingManager.destroy();
    globalLoadingManager = null;
  }
}; 