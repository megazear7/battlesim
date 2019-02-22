import { html, css, repeat, PageViewElement, add, remove, connect, store, SharedStyles, ButtonSharedStyles, $unitDefault as Unit, prettyTime } from './battle-sim.js';
import { MOVE, REST } from './fight-view.js';

class BattleView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _army0Units: {
        type: Object
      },
      _army1Units: {
        type: Object
      },
      _allUnitTemplates: {
        type: Object
      },
      _unitTemplates: {
        type: Object
      },
      _hasActiveBattle: {
        type: Boolean
      },
      _activeBattle: {
        type: Object
      }
    };
  }

  static get styles() {
    return [SharedStyles, ButtonSharedStyles, css`
        #added-message {
          opacity: 0;
          display: none;
          color: green;
          transition: opacity 300ms;
        }
        h4 {
          margin-bottom: 0.5rem;
        }
        .unit {
          border-bottom: 1px solid black;
          padding-bottom: 1rem;
        }
        .unit:last-child {
          border-bottom: 0;
        }
        .unit:hover h5 {
          color: var(--app-primary-color);
        }
        .point-cost {
          float: right;
        }
      `];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        ${repeat(this.armies, ({
      name,
      units
    }) => html`
          <section>
            <h3>${name}</h3>
            ${this._activeBattle.usesPoints ? html`
              <p>${units.map(unit => unit.unit.points).reduce((total, cost) => total + cost, 0)} points</p>
            ` : ''}
            ${repeat(units, ({
      index,
      unit
    }) => html`
              <div class="unit" data-index="${index}">
                <h4 class="unit-name">
                  ${unit.name}
                  ${this._activeBattle.usesPoints ? html`<small class="point-cost">${unit.points} points</small>` : ''}
                </h4>
                <button class="btn-link remove-unit" @click="${this._remove}">Remove</button>
                <p>${unit.detailedStatus}</p>
                <p>${unit.desc}</p>
              </div>
            `)}
          </section>
        `)}
        <section>
          <h3>Add Unit</h3>
          <div>
            <select id="army" @change="${this._armyChanged}">
              <option value="0">
                ${this._army0Name}
              </option>
              <option value="1">
                ${this._army1Name}
              </option>
            </select>
            <select id="unit-template">
              <option>Select Unit To Add (Required)</option>
              ${repeat(this._unitTemplates, ({
      id,
      unit
    }) => html`
                <option value="${id}">
                  ${unit.name}
                  ${this._activeBattle.usesPoints ? html`(${unit.points} points)` : ''}
                </option>
              `)}
            </select>
            <input id="name" type="text" placeholder="Optionally Change the Units Name"></input>
            <button @click="${this._add}">Add</button>
            <p class="error hidden">You must select a type of unit to add.</p>
            <p id="added-message">Unit Added!</p>
          </div>
        </section>
        <section>
          <h3>Battle Log</h3>
          <hr>
          ${repeat(this._activeBattle.actionLog, log => html`
            <p><small>${prettyTime(new Date(this._activeBattle.startTime + log.time * 1000))}</small></p>
            <p>
              ${log.environment.selectedAction ? html`The selected action was ${log.environment.selectedAction}. ` : ''}
              ${log.environment.resupply ? html`They were resupplying. ` : ''}
              ${log.environment.mount ? html`They were mounting. ` : ''}
              ${log.environment.unmount ? html`They were unmounting. ` : ''}
              ${log.environment.defenderArmyLeadership > 0 ? html`Defender army leadership was ${log.environment.defenderArmyLeadership}. ` : ''}
              ${log.environment.activeArmyLeadership > 0 ? html`Attacker army leadership was ${log.environment.activeArmyLeadership}. ` : ''}
              ${log.environment.pace > 0 && log.environment.selectedAction === MOVE ? html`Pace was ${Math.ceil(log.environment.pace * 100)}%. ` : ''}
              ${log.environment.slope > 0 ? html`Slope was ${log.environment.slope}. ` : ''}
              ${log.environment.engagedDefenders > 0 ? html`${log.environment.engagedDefenders} defending stands were engaged. ` : ''}
              ${log.environment.engagedAttackers > 0 ? html`${log.environment.engagedAttackers} defending stands were engaged. ` : ''}
              ${log.environment.separation > 0 ? html`Distance to defending stand was ${log.environment.separation}. ` : ''}
              ${log.environment.restTime && log.environment.selectedAction === REST > 0 ? html`${log.environment.restTime} minutes spent resting. ` : ''}
              ${log.environment.distance > 0 ? html`${log.environment.distance} inches was set as the distance. ` : ''}
              ${log.environment.defenderTerrain > 0 ? html`The defender recieved the benefit of the ${log.environment.defenderTerrain}. ` : ''}
              ${log.environment.attackerChargeTerrain > 0 ? html`The attacker had to charge through ${log.environment.attackerChargeTerrain}. ` : ''}
              ${log.environment.meleeCombatTerrain > 0 ? html`The combat was fought in ${log.environment.meleeCombatTerrain}. ` : ''}
            </p>
            <p>${log.message}</p>
            <hr>
          `)}
        </section>
      ` : html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

  get armies() {
    return [{
      name: this._army0Name,
      units: this._army0Units
    }, {
      name: this._army1Name,
      units: this._army1Units
    }];
  }

  get armyElement() {
    return this.shadowRoot.getElementById('army');
  }

  get army() {
    if (this.armyElement) {
      return parseInt(this.armyElement.value);
    } else {
      return 0;
    }
  }

  get unitTemplateElement() {
    return this.shadowRoot.getElementById('unit-template');
  }

  get unitTemplate() {
    return parseInt(this.unitTemplateElement.value);
  }

  _armyChanged() {
    this._unitTemplates = this._allUnitTemplates.filter(({
      unit
    }) => unit.army === this.army);
  }

  get name() {
    return this.shadowRoot.getElementById('name').value;
  }

  get statsValid() {
    return !isNaN(this.unitTemplate);
  }

  _remove(e) {
    let unit = e.target.closest('.unit');
    let name = unit.querySelector('.unit-name').innerText;

    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      store.dispatch(remove(unit.dataset.index));
    }
  }

  _add() {
    if (this.statsValid) {
      store.dispatch(add(this.unitTemplate, this.name));
      this.shadowRoot.getElementById('army').value = '0';
      this.shadowRoot.getElementById('name').value = '';
      let addedMessage = this.shadowRoot.getElementById('added-message');
      addedMessage.style.opacity = '1';
      addedMessage.style.display = 'block';
      setTimeout(() => {
        addedMessage.style.opacity = '0';
        addedMessage.style.display = 'none';
      }, 3000);
    } else {
      this.shadowRoot.querySelector('.error').classList.remove('hidden');
      setTimeout(() => {
        this.shadowRoot.querySelector('.error').classList.add('hidden');
      }, 3000);
    }
  }

  stateChanged(state) {
    if (state.battle.battles.length > state.battle.activeBattle) {
      var activeBattle = state.battle.battles[state.battle.activeBattle];
      let units = activeBattle.units.map((unit, index) => ({
        index,
        unit: new Unit(unit, index, activeBattle)
      }));
      this._army0Units = units.filter(({
        unit
      }) => unit.armyIndex === 0);
      this._army1Units = units.filter(({
        unit
      }) => unit.armyIndex === 1);
      this._army0Name = activeBattle.armies[0].name;
      this._army1Name = activeBattle.armies[1].name;
      this._allUnitTemplates = activeBattle.unitTemplates.map((unit, index) => ({
        id: index,
        unit
      }));
      this._unitTemplates = this._allUnitTemplates.filter(({
        unit
      }) => unit.army === this.army);
      this._activeBattle = activeBattle;
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }

}

window.customElements.define('battle-view', BattleView);