import { LitElement, html, css } from 'lit';

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 200px;
      margin: 0 auto;
    }
    button {
      padding: 8px 16px;
      margin: 0 8px;
    }
  `;

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <h2>Count: ${this.count}</h2>
        <button @click=${this._decrement}>-</button>
        <button @click=${this._increment}>+</button>
      </div>
    `;
  }

  _increment() {
    this.count++;
  }

  _decrement() {
    this.count--;
  }
}

customElements.define('my-counter', MyCounter);