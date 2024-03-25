import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators';

import { OffWhite, SlateDark, SlateHighlight } from '../styles/colors';
import { Reset } from '../styles/utils';


@customElement('ui-card')
export class Card extends LitElement {
    static styles = [Reset, css`
    :host {
        display: block;
        
    }

    #container {
        color: ${OffWhite};
        background-color: ${SlateDark};

        padding: 1em;
        border-radius: 0.5em;
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 1em;

        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px
    }

    #container:hover {
        background-color: ${SlateHighlight}
    }

    header {
        margin-bottom: 1em;
    }
    `];

    protected override render() {
        return html`
            <div id="container">
                <slot name="icon"></slot>
                <div>
                    <header>
                        <slot name="header"></slot>
                    </header>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}