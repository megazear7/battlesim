import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { add, remove } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { prettyTime } from '../utils/math-utils.js';
import { MOVE, REST } from './fight-view.js';
import Battle from '../models/battle.js';

class BattleView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _unitTemplates: { type: Object },
      _activeBattle: { type: Object },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
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
      `
    ];
  }

  render() {
    return html`
      ${this._activeBattle ? html`
        ${repeat(this._activeBattle.unitsByArmy, ({name, units}) => html`
          <section>
            <h2>${name}</h2>
            ${this._activeBattle.usesPoints ? html`
              <p>${units.map(unit => unit.unit.points).reduce((total, cost) => total + cost, 0)} points</p>
            ` : ''}
            ${repeat(units, unit => html`
              <div class="unit" data-index="${unit.id}">
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
          <h2>Add Unit</h2>
          <div>
            <select id="army" @change="${this._armyChanged}">
              <option value="0">
                ${this._activeBattle.army0.name}
              </option>
              <option value="1">
                ${this._activeBattle.army1.name}
              </option>
            </select>
            <select id="unit-template">
              <option value="">Select Unit To Add</option>
              ${repeat(this._unitTemplates, ({id, unit}) => html`
                <option value="${id}">
                  ${unit.name}
                  ${this._activeBattle.usesPoints ? html`(${unit.points} points)` : ''}
                </option>
              `)}
            </select>
            <input id="name" type="text" placeholder="Unit Name"></input>
            <button @click="${this._add}">Add</button>
            <battle-sim-alert warning id="warning-message">You must select a type of unit to add and provide the unit a unique name.</battle-sim-alert>
            <battle-sim-alert success id="added-message">Unit Added!</battle-sim-alert>
          </div>
        </section>
        <section>
          <h2>Battle Log</h2>
          <hr>
          ${repeat(this._activeBattle.actionLog, log => html`
            <p><small>${prettyTime(new Date(this._activeBattle.startTime + (log.time * 1000)))}</small></p>
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
      `:html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
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
    this._unitTemplates = this._activeBattle.unitTemplatesFor(this.army)
  }

  get nameElement() {
    return this.shadowRoot.getElementById('name')
  }

  get name() {
    return this.nameElement.value;
  }

  get statsValid() {
    return ! isNaN(this.unitTemplate) && this.nameElement.value != '';
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
      this.nameElement.value = '';
      this.unitTemplateElement.value = '';
      this.shadowRoot.getElementById('added-message').alert();
    } else {
      this.shadowRoot.getElementById('warning-message').alert();
    }
  }

  stateChanged(state) {
    this._activeBattle = state.battle.battles.length > state.battle.activeBattle
      ? new Battle(state.battle.battles[state.battle.activeBattle], state.battle.activeBattle)
      : undefined;
    this._unitTemplates = this._activeBattle ? this._activeBattle.unitTemplatesFor(0) : [ ];
  }
}

window.customElements.define('battle-view', BattleView);