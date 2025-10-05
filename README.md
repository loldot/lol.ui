# @loldot/lol.ui - Web Components Library

A collection of framework-agnostic web components built with Lit, designed to work seamlessly in React, Vue, Angular, and vanilla JavaScript projects.

## Installation

```bash
npm install @loldot/lol.ui
```

## Usage

### 1. Framework-Agnostic Web Components (Direct HTML)

For direct usage in HTML or vanilla JavaScript:

```html
<!-- Load the UMD bundle -->
<script src="node_modules/@loldot/lol.ui/dist/web-components.umd.js"></script>

<!-- Use components directly in HTML -->
<ui-card>
  <span slot="icon">🎯</span>
  <span slot="header">My Card</span>
  Card content goes here
</ui-card>
```

### 2. ES Modules (Modern Bundlers)

```javascript
// Import the complete library
import '@loldot/lol.ui/web-components';

// Or import specific components
import '@loldot/lol.ui/components/ui-card';
import '@loldot/lol.ui/components/ui-tabs';

// Use programmatically
import { NotificationBuilder } from '@loldot/lol.ui';

const notification = new NotificationBuilder("Hello")
  .withBody("This is a notification")
  .withIcon("warning");
notification.send();
```

### 3. React Integration

```jsx
import '@loldot/lol.ui/web-components';

function MyComponent() {
  return (
    <div>
      <ui-card>
        <span slot="icon">📱</span>
        <span slot="header">React Card</span>
        This card works in React!
      </ui-card>
    </div>
  );
}
```

### 4. Vue Integration

```vue
<template>
  <div>
    <ui-card>
      <span slot="icon">🔥</span>
      <span slot="header">Vue Card</span>
      This card works in Vue!
    </ui-card>
  </div>
</template>

<script>
import '@loldot/lol.ui/web-components';

export default {
  name: 'MyComponent'
};
</script>
```

## Available Components

### UI Card (`<ui-card>`)

A flexible card component with icon, header, and content slots.

**Attributes:**
- `checked` (boolean) - Shows the card in a checked state

**Slots:**
- `icon` - Icon content
- `header` - Header content  
- Default slot - Main content

```html
<ui-card checked>
  <span slot="icon">✅</span>
  <span slot="header">Completed Task</span>
  Task description here
</ui-card>
```

### UI Tabs (`<ui-tabs>`) and Tab Panel (`<ui-tab-panel>`)

Tab navigation component with multiple panels.

```html
<ui-tabs>
  <ui-tab-panel>
    <h3>Tab 1</h3>
    <p>Content for tab 1</p>
  </ui-tab-panel>
  <ui-tab-panel>
    <h3>Tab 2</h3>
    <p>Content for tab 2</p>
  </ui-tab-panel>
</ui-tabs>
```

### Notification Builder

Programmatic notification API with browser notification support.

```javascript
import { NotificationBuilder } from '@loldot/lol.ui';

const notification = new NotificationBuilder("Title")
  .withBody("Notification message")
  .withIcon("error")  // "error" or "warning"
  .send();
```

## CSS Styling

### Option 1: Use the provided CSS file

The package includes a complete CSS design system:

```html
<!-- Import the CSS file -->
<link rel="stylesheet" href="node_modules/@loldot/lol.ui/main.css">
```

Or in your bundler:

```javascript
import '@loldot/lol.ui/main.css';
```

### Option 2: Custom CSS Properties

The components use CSS custom properties for theming:

```css
:root {
  --bg-slate-dark: #2d3748;
  --bg-slate-highlight: #4a5568;
  --bg-dark: #1a202c;
  --accent: #3182ce;
  --space-md: 1rem;
  --space-sm: 0.5rem;
}
```

## Build Outputs

This package provides multiple build formats:

- **`dist/index.js`** - ES module with all components
- **`dist/index.cjs`** - CommonJS with all components  
- **`dist/index.umd.js`** - UMD bundle with all components
- **`dist/web-components.js`** - ES module optimized for web components
- **`dist/web-components.umd.js`** - UMD bundle for direct browser usage
- **`dist/components/*.js`** - Individual component files
- **`dist/styles/*.js`** - Utility styles

## TypeScript Support

Full TypeScript definitions are included:

```typescript
import { Card, Tabs, TabPanel, NotificationBuilder } from '@loldot/lol.ui';

// Components are automatically registered as custom elements
// TypeScript will recognize them in JSX/template contexts
```

## Browser Compatibility

- Modern browsers supporting Web Components (Custom Elements v1)
- ES2020+ features
- For older browser support, include appropriate polyfills

## License

ISC