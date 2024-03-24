import { LitElement, css, html } from "lit";
import { customElement } from 'lit/decorators';
import { TWStyles } from '../tw.js';

@customElement('ui-card')
export class Card extends LitElement {
    static styles = [css``, TWStyles]
    override  render() {
        return html`
        <div class="p-4 max-w-sm rounded overflow-hidden bg-slate-800 shadow-lg hover:bg-slate-600 cursor-pointer">
            <h2 class="text-lg font-bold text-gray-100">Internal App</h2>
            <p>An app intended for internal audiences</p>
        </div>
        `;
    }
}