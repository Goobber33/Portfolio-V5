/**
 * Initialization utilities for the application
 * Handles theme setup and image error handling
 */

/**
 * Forces light mode by removing dark class and preventing it from being added
 */
export const forceLightMode = () => {
  // Always set dark mode to false regardless of localStorage or system preference
  document.documentElement.classList.toggle('dark', false);
};

/**
 * Adds a global error handler for broken images
 * Replaces broken images with a fallback SVG icon
 */
export const addBrokenImageHandler = () => {
  document.addEventListener(
    'error',
    function (e) {
      if (e.target instanceof HTMLImageElement) {
        const img = e.target;
        if (!img.dataset.fallbackApplied) {
          img.dataset.fallbackApplied = 'true';

          // Create a simple fallback SVG icon as data URL
          const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E`;

          img.src = fallbackSvg;
          img.classList.add('broken-image-fallback');

          if (!img.alt || img.alt.trim() === '') {
            img.alt = 'Image not available';
          }
        }
      }
    },
    true
  );
};

/**
 * Initializes the application with theme and image handlers
 * Should be called once during app startup
 */
export const initializeApp = () => {
  // Run immediately
  forceLightMode();
  addBrokenImageHandler();

  // Also run when the DOM is loaded to ensure it applies
  document.addEventListener('DOMContentLoaded', forceLightMode);

  // Override system preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', forceLightMode);
};

