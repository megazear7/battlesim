define(["./battle-sim.js"],function(_battleSim){"use strict";class CreateView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get styles(){return[_battleSim.SharedStyles,_battleSim.ButtonSharedStyles,_battleSim.css`
        #added-message {
          opacity: 0;
          color: green;
          transition: opacity 300ms;
        }
        #error-message {
          opacity: 0;
          color: red;
          transition: opacity 300ms;
        }
      `]}render(){return _battleSim.html`
      <section>
        <h2>Add Unit</h2>
        <div>
          <select id="army">
            <option value="0">Brittish</option>
            <option value="1">Americans</option>
          </select>
          <br>
          <input id="name" type="text" placeholder="Name"></input>
          <br>
          <input id="hp" type="number" placeholder="HP"></input>
          <br>
          <input id="speed" type="number" placeholder="Speed"></input>
          <br>
          <input id="energy" type="number" placeholder="Energy"></input>
          <br>
          <button @click="${this._add}">Add</button>
          <br>
          <p id="added-message">Unit Added!</p>
          <p id="error-message">All fields need valid input.</p>
        </div>
      </section>
    `}get army(){return this.shadowRoot.getElementById("army").value}get name(){return this.shadowRoot.getElementById("name").value}get hp(){return this.shadowRoot.getElementById("hp").value}get speed(){return this.shadowRoot.getElementById("speed").value}get energy(){return this.shadowRoot.getElementById("energy").value}get stats(){return{army:this.army,name:this.name,hp:this.hp,speed:this.speed,energy:this.energy}}get statsValid(){let stats=this.stats;return"undefined"!==typeof stats.army&&0<stats.name.length&&0<stats.hp&&0<stats.speed&&0<stats.energy}_add(){if(this.statsValid){_battleSim.store.dispatch((0,_battleSim.add)(this.stats));this.shadowRoot.getElementById("army").value="0";this.shadowRoot.getElementById("name").value="";this.shadowRoot.getElementById("hp").value="";this.shadowRoot.getElementById("speed").value="";this.shadowRoot.getElementById("energy").value="";this.shadowRoot.getElementById("added-message").style.opacity="1";setTimeout(()=>this.shadowRoot.getElementById("added-message").style.opacity="0",3e3)}else{this.shadowRoot.getElementById("error-message").style.opacity="1";setTimeout(()=>this.shadowRoot.getElementById("error-message").style.opacity="0",3e3)}}}window.customElements.define("create-view",CreateView)});