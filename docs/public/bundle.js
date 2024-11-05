import{LitElement as t,css as n,html as e}from"lit";class i extends t{static properties={count:{type:Number}};static styles=n`
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
  `;constructor(){super(),this.count=0}render(){return e`
      <div>
        <h2>Count: ${this.count}</h2>
        <button @click=${this._decrement}>-</button>
        <button @click=${this._increment}>+</button>
      </div>
    `}_increment(){this.count++}_decrement(){this.count--}}customElements.define("my-counter",i);export{i as MyCounter};
//# sourceMappingURL=bundle.js.map
