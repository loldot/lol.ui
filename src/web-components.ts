// Web Components registration entry point
// This file ensures all components are registered when imported

// Import components to trigger custom element registration
import './components/ui-card.js';
import './components/ui-tabs.js';
import './components/ui-notification.js';

// Export components and utilities for programmatic use
export { Card } from './components/ui-card.js';
export { Tabs, TabPanel } from './components/ui-tabs.js';
export { NotificationBuilder } from './components/ui-notification.js';
export { Reset } from './styles/utils.js';

// Re-export lit for convenience
export { html, css, LitElement } from 'lit';

// Define module for global usage
declare global {
  interface HTMLElementTagNameMap {
    'ui-card': import('./components/ui-card.js').Card;
    'ui-tabs': import('./components/ui-tabs.js').Tabs;
    'ui-tab-panel': import('./components/ui-tabs.js').TabPanel;
  }
}