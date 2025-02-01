import { LitElement, css, html } from "lit";

import { Reset } from '../styles/utils';
import { customElement, property, queryAll, queryAssignedElements } from "lit/decorators.js";

@customElement('ui-tab-panel')
export class TabPanel extends LitElement {
    static styles = [Reset, css`
   :host {
            background-color: var(--bg-slate-dark);
            display:none;
            border: 2px solid var(--bg-dark);
        }
        
        :host([aria-selected]) {
            display: block;
        }

        ::slotted(*) {
            margin: 1em;
        }
    `];
    @property({ type: String, attribute: 'id' })
    public id = "id";

    @property({ type: String, attribute: 'title' })
    public title = "Tab-Item";

    protected override render() {
        return html`
            <slot name="content"></slot>
            <pre>
                id: ${this.id}
                title: ${this.title}
            </pre>
        `
    }
}


@customElement('ui-tabs')
export class Tabs extends LitElement {
    @property({ type: Number })
    protected selectedIndex = 0;

    static styles = [Reset, css`
        :host {
            --border-sz: 2px;
            display: block;
        }
        
        .tab-button {
            display: inline-block;
            background-color: var(--bg-slate-dark);
            color: var(--text) ;
            padding: .5rem 1rem ;
            border: var(--border-sz) solid var(--bg-dark);
            position: relative;
            top: var(--border-sz);
        }
        .tab-button a {
            display: inline-block;
            color: var(--text) ;
            text-decoration:none;
            padding: .5rem;
            border-bottom: 2px solid transparent;
        }
        .tab-button[aria-selected] {
            border-bottom: var(--border-sz) solid transparent;
        }
        .tab-button[aria-selected] a {
            border-bottom: 2px solid var(--accent);
        }

        .tab-button:not([aria-selected]) a:hover {
            border-bottom: 2px solid var(--bg-dark);
        }
    `]

    protected selectTab(index: number) {
        const tabs = this.querySelectorAll('ui-tab-panel') as NodeListOf<TabPanel>;
        if (index >= tabs.length) return;

        tabs[this.selectedIndex].ariaSelected = null;
        this.selectedIndex = index;
        tabs[this.selectedIndex].ariaSelected = "true";
    }

    protected override render() {
        const tabs = this.querySelectorAll('ui-tab-panel') as NodeListOf<TabPanel>;
        tabs[this.selectedIndex].ariaSelected = "true";

        return html`
            <div class="tabbed">
                <ul role="tablist">
                    ${Array.from(tabs).map((tab, index) => html`
                        <li class="tab-button" 
                            ?aria-selected=${index === this.selectedIndex}
                            @click="${() => this.selectTab(index)}">
                            <a href="#${tab.id}" role="tab">${tab.title}</a>
                        </li>
                    `)}
                </ul>
                <slot>
                </slot>

            </div>`;
    }
}
