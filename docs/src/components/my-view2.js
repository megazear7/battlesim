define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$counterDefault=_exports.decrement=_exports.increment=_exports.DECREMENT=_exports.INCREMENT=_exports.$counter$1=_exports.$counter=void 0;const INCREMENT="INCREMENT";_exports.INCREMENT=INCREMENT;const DECREMENT="DECREMENT";_exports.DECREMENT=DECREMENT;const increment=()=>{return{type:INCREMENT}};_exports.increment=increment;const decrement=()=>{return{type:DECREMENT}};_exports.decrement=decrement;var counter={INCREMENT:INCREMENT,DECREMENT:DECREMENT,increment:increment,decrement:decrement};_exports.$counter=counter;class CounterElement extends _myApp.LitElement{static get properties(){return{clicks:{type:Number},value:{type:Number}}}static get styles(){return[_myApp.ButtonSharedStyles,_myApp.css`
        span {
          width: 20px;
          display: inline-block;
          text-align: center;
          font-weight: bold;
        }
      `]}render(){return _myApp.html`
      <div>
        <p>
          Clicked: <span>${this.clicks}</span> times.
          Value is <span>${this.value}</span>.
          <button @click="${this._onIncrement}" title="Add 1">${_myApp.plusIcon}</button>
          <button @click="${this._onDecrement}" title="Minus 1">${_myApp.minusIcon}</button>
        </p>
      </div>
    `}constructor(){super();this.clicks=0;this.value=0}_onIncrement(){this.value++;this.clicks++;this.dispatchEvent(new CustomEvent("counter-incremented"))}_onDecrement(){this.value--;this.clicks++;this.dispatchEvent(new CustomEvent("counter-decremented"))}}window.customElements.define("counter-element",CounterElement);const INITIAL_STATE={clicks:0,value:0},counter$1=(state=INITIAL_STATE,action)=>{switch(action.type){case INCREMENT:return{clicks:state.clicks+1,value:state.value+1};case DECREMENT:return{clicks:state.clicks+1,value:state.value-1};default:return state;}};_exports.$counterDefault=counter$1;var counter$2={default:counter$1};_exports.$counter$1=counter$2;_myApp.store.addReducers({counter:counter$1});class MyView2 extends(0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement){static get properties(){return{_clicks:{type:Number},_value:{type:Number}}}static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Redux example: simple counter</h2>
        <div class="circle">${this._value}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the current value of the counter reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          <counter-element
              value="${this._value}"
              clicks="${this._clicks}"
              @counter-incremented="${this._counterIncremented}"
              @counter-decremented="${this._counterDecremented}">
          </counter-element>
        </p>
      </section>
    `}_counterIncremented(){_myApp.store.dispatch(increment())}_counterDecremented(){_myApp.store.dispatch(decrement())}stateChanged(state){this._clicks=state.counter.clicks;this._value=state.counter.value}}window.customElements.define("my-view2",MyView2)});