import { useState } from 'react'
import { NotificationBuilder } from '@loldot/lol.ui'
import { UiCard, UiTabs, UiTabPanel } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set())

  const toggleCard = (cardId: string) => {
    const newSelected = new Set(selectedCards)
    if (newSelected.has(cardId)) {
      newSelected.delete(cardId)
    } else {
      newSelected.add(cardId)
    }
    setSelectedCards(newSelected)
  }

  const sendNotification = () => {
    new NotificationBuilder('Hello from lol.ui!')
      .withBody('This notification was triggered from React!')
      .withIcon('success')
      .send()
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>🎨 lol.ui + React Example</h1>
        <p>Demonstrating web components integration with React</p>
      </header>

      {/* UI Cards Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>📇 UI Cards</h2>
        <p>Interactive cards with selection state</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          
          <UiCard 
            checked={selectedCards.has('card1')}
            onClick={() => toggleCard('card1')}
            style={{ cursor: 'pointer' }}
          >
            <span slot="icon">🎨</span>
            <h3 slot="header">Design System</h3>
            <p>Beautiful web components built with Lit</p>
          </UiCard>

          <UiCard 
            checked={selectedCards.has('card2')}
            onClick={() => toggleCard('card2')}
            style={{ cursor: 'pointer' }}
          >
            <span slot="icon">⚛️</span>
            <h3 slot="header">React Integration</h3>
            <p>Seamless integration with React applications</p>
          </UiCard>

          <UiCard 
            checked={selectedCards.has('card3')}
            onClick={() => toggleCard('card3')}
            style={{ cursor: 'pointer' }}
          >
            <span slot="icon">🚀</span>
            <h3 slot="header">TypeScript</h3>
            <p>Full TypeScript support with declarations</p>
          </UiCard>
        </div>
      </section>

      {/* UI Tabs Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>📑 UI Tabs</h2>
        <p>Tabbed content panels</p>
        <UiTabs style={{ marginTop: '1rem' }}>
          <UiTabPanel id="tab1" title="Getting Started">
            <div slot="content">
              <h3>Welcome to lol.ui</h3>
              <p>This is a web components library that works great with React!</p>
              <ul>
                <li>✅ TypeScript support</li>
                <li>✅ Framework agnostic</li>
                <li>✅ Modern styling</li>
              </ul>
            </div>
          </UiTabPanel>
          
          <UiTabPanel id="tab2" title="Installation">
            <div slot="content">
              <h3>Install lol.ui</h3>
              <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
{`npm install @loldot/lol.ui`}
              </pre>
              <p>Then import in your React app:</p>
              <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
{`import { UiCard, UiTabs, UiTabPanel } from './components';`}
              </pre>
            </div>
          </UiTabPanel>
          
          <UiTabPanel id="tab3" title="Usage">
            <div slot="content">
              <h3>Using Components</h3>
              <p>Use the React wrapper components in your JSX:</p>
              <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
{`<UiCard checked={isSelected}>
  <span slot="icon">🎨</span>
  <h3 slot="header">Title</h3>
  <p>Content goes here</p>
</UiCard>`}
              </pre>
            </div>
          </UiTabPanel>
        </UiTabs>
      </section>

      {/* Notifications Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>🔔 Notifications</h2>
        <p>Browser notifications with different styles</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={sendNotification}>
            Send Success Notification
          </button>
          <button onClick={() => new NotificationBuilder('Warning!')
            .withBody('This is a warning notification')
            .withIcon('warning')
            .send()}>
            Send Warning
          </button>
          <button onClick={() => new NotificationBuilder('Error!')
            .withBody('Something went wrong')
            .withIcon('error')
            .send()}>
            Send Error
          </button>
        </div>
      </section>

      {/* Counter Demo */}
      <section>
        <h2>🔢 React State Demo</h2>
        <p>Traditional React state management alongside web components</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={() => setCount(count + 1)}>
            React Counter: {count}
          </button>
          <span>Selected cards: {selectedCards.size}</span>
        </div>
      </section>
    </div>
  )
}

export default App
