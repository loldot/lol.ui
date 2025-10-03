import React from 'react';
import { createComponent } from '@lit/react';

// Import the web components to register them
import { Card, Tabs, TabPanel } from '@loldot/lol.ui';

// Create React wrapper components
export const UiCard = createComponent({
  tagName: 'ui-card',
  elementClass: Card,
  react: React,
  events: {
    onCheckedChange: 'checked-change',
  },
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