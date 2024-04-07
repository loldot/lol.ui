import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators';
import {classMap} from 'lit-html/directives/class-map.js';

import { Reset } from '../styles/utils';


@customElement('ui-card')
export class Card extends LitElement {
    static styles = [Reset, css`
    :host {
        display: block;
    }

    #container {
        background-color: var(--bg-slate-dark);

        padding: 1em;
        border-radius: 0.5em;
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: var(--space-md);

        position:relative;
        overflow:hidden;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
    }
    #container.checked {
        border: 1px solid var(--accent);
    }

    #container:hover {
        background-color: var(--bg-slate-highlight);
    }
    #checkmark {
        position: absolute;
        top:0;
        right:0;

        padding: .5em .6em;
        border-radius: 0 0 0 .5em;
        background-color: var(--accent);
    }

    header {
        margin-bottom: var(--space-sm);
    }
    `];

    @property({type: Boolean, attribute: 'checked'})
    public checked = false;
    
    protected override render() {
        const classes = {
            checked: this.checked
        } 

        return html`
            <div id="container" class="${classMap(classes)}">
                <slot name="icon"></slot>
                <div>
                    <header>
                        <slot name="header"></slot>
                    </header>
                    <slot></slot>
                </div>
                ${this.checked
                    ? html`<span id="checkmark">&check;</span>`
                    : null
                }
            </div>
        `;
    }
}