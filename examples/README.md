# lol.ui Examples

This folder contains example applications demonstrating how to use lol.ui components with different frameworks.

## 📂 Examples

### React Example (`react-example/`)

A complete React + TypeScript application showcasing all lol.ui web components.

**Features Demonstrated:**
- 📇 **UI Cards** - Interactive cards with selection state
- 📑 **UI Tabs** - Tabbed content panels  
- 🔔 **Notifications** - Browser notifications with different styles
- ⚛️ **React Integration** - Proper TypeScript declarations and event handling

**Components Used:**
- `<ui-card>` - Cards with slots for icon, header, and content
- `<ui-tabs>` and `<ui-tab-panel>` - Tabbed interface
- `NotificationBuilder` - Programmatic notification API

## 🚀 Running Examples

### React Example

```bash
cd examples/react-example
npm install
npm run dev
```

Then open http://localhost:5173 (or the port shown in terminal).

### Using Published Package

The examples use the published `@loldot/lol.ui` package from npm:

1. **Run the example:**
   ```bash
   cd examples/react-example
   npm install
   npm run dev
   ```

The examples automatically install the latest published version from npm.

## 🔧 Integration Guide

### React + TypeScript Setup

1. **Install dependencies:**
   ```bash
   npm install @loldot/lol.ui @lit/react
   ```

2. **Create React wrapper components** (`src/components.tsx`):
   ```typescript
   import React from 'react';
   import { createComponent } from '@lit/react';
   import { Card, Tabs, TabPanel } from '@loldot/lol.ui';

   export const UiCard = createComponent({
     tagName: 'ui-card',
     elementClass: Card,
     react: React,
   });

   export const UiTabs = createComponent({
     tagName: 'ui-tabs',
     elementClass: Tabs,
     react: React,
   });

   export const UiTabPanel = createComponent({
     tagName: 'ui-tab-panel',
     elementClass: TabPanel,
     react: React,
   });
   ```

3. **Use React components:**
   ```jsx
   import { UiCard } from './components';
   import { NotificationBuilder } from '@loldot/lol.ui';

   function App() {
     return (
       <UiCard checked={true}>
         <span slot="icon">🎨</span>
         <h3 slot="header">Card Title</h3>
         <p>Card content goes here</p>
       </UiCard>
     );
   }
   ```

### Key Integration Notes

- **Web Components**: lol.ui uses native web components that work in any framework
- **Slots**: Use React's `slot` prop to target named slots in components  
- **Events**: Handle events using standard React event props (`onClick`, etc.)
- **Props**: Pass props as HTML attributes (React will handle the conversion)
- **TypeScript**: Custom type declarations provide full intellisense support

## 📋 Component Reference

### `<ui-card>`
Interactive card component with optional checkmark.

**Props:**
- `checked?: boolean` - Shows selection checkmark

**Slots:**
- `icon` - Icon content (top-left)
- `header` - Header content  
- Default slot - Main content

### `<ui-tabs>`
Container for tabbed interface.

### `<ui-tab-panel>`
Individual tab panel within ui-tabs.

**Props:**
- `id: string` - Unique identifier
- `title: string` - Tab button text

**Slots:**
- `content` - Panel content

### `NotificationBuilder`
Programmatic API for browser notifications.

**Methods:**
- `withBody(text: string)` - Set notification body
- `withIcon(type: 'success' | 'warning' | 'error')` - Set icon type  
- `send()` - Display the notification

**Example:**
```typescript
new NotificationBuilder('Title')
  .withBody('Notification message')
  .withIcon('success')
  .send();
```