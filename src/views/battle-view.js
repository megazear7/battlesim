import { html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import BattleViewWrapper from './battle-view-wrapper.js';
import { add, remove } from '../actions/battle.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import { prettyTime } from '../utils/math-utils.js';
import { REST, MOVE, CHARGE, FIRE, SHARED_BATTLE, LOCAL_BATTLE, ARMY_BOTH } from '../game.js';
import Battle from '../models/battle.js';

class BattleView extends BattleViewWrapper {
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
        .point-cost {
          float: right;
        }
      `
    ];
  }

  battleViewRender() {
    return html`
      ${this._activeBattle.connectedDevices && this._activeBattle.connectedDevices.length > 0 ? html`
        <section>
          <h2>Players</h2>
          <ul>
          ${repeat(this._activeBattle.connectedDevices, device => html`
            <li><h4>${device.displayName} ${device.army !== undefined && device.army !== ARMY_BOTH ? html`(${this._activeBattle.armies[device.army].name})` : '(Both armies)'}</h4></li>
          `)}
          </ul>
        </section>
      ` : ''}
      ${repeat(this._activeBattle.unitsByArmy, ({name, units}) => html`
        <section>
          <h2>${name}</h2>
          ${this._activeBattle.usesPoints ? html`
            <p>${units.map(unit => unit.points).reduce((total, cost) => total + cost, 0)} points</p>
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
          <button-tray>
            <button @click="${this._add}">Add</button>
          </button-tray>
          <battle-sim-alert warning id="warning-message">You must select a type of unit to add and provide the unit a unique name.</battle-sim-alert>
          <battle-sim-alert success id="added-message">Unit Added!</battle-sim-alert>
          <input id="unit-name-input" type="text" placeholder="Unit Name"></input>
        </div>
      </section>
      <section>
        <h2>Battle Log</h2>
        <hr>
        ${repeat(this._activeBattle.actionLog, log => html`
          <p><small>${prettyTime(new Date(this._activeBattle.startTime + (log.time * 1000)))}</small></p>
          <p>
            ${log.environment.selectedAction ? html`${this.logAction(log.units, log.environment.selectedAction)}. ` : ''}
            ${log.environment.resupply ? html`They were resupplying. ` : ''}
            ${log.environment.mount ? html`They were mounting. ` : ''}
            ${log.environment.unmount ? html`They were unmounting. ` : ''}
            ${log.environment.defenderArmyLeadership > 0 ? html`Defender army leadership was ${log.environment.defenderArmyLeadership}. ` : ''}
            ${log.environment.activeArmyLeadership > 0 ? html`Attacker army leadership was ${log.environment.activeArmyLeadership}. ` : ''}
            ${log.environment.pace > 0 && log.environment.selectedAction === MOVE ? html`Pace was ${Math.ceil(log.environment.pace * 100)}%. ` : ''}
            ${log.environment.slope > 0 ? html`Slope was ${log.environment.slope}. ` : ''}
            ${log.environment.engagedDefenders > 0 ? html`${log.environment.engagedDefenders} defending stands were engaged. ` : ''}
            ${log.environment.engagedAttackers > 0 ? html`${log.environment.engagedAttackers} attacking stands were engaged. ` : ''}
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
    `;
  }

  logAction(units, action) {
    const actingUnit = units[0].before;
    if (action === REST) {
      return `${actingUnit.name} rested`;
    } else if (action === MOVE) {
      return `${actingUnit.name} moved`;
    } else if (action === CHARGE) {
      const targetUnit = units[0].before;
      return `${actingUnit.name} charged ${targetUnit.name}`;
    } else if (action === FIRE) {
      const targetUnit = units[0].before;
      return `${actingUnit.name} fired upon ${targetUnit.name}`;
    }
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
    return this.shadowRoot.getElementById('unit-name-input')
  }

  get selectedUnit() {
    if (this.unitTemplate) {
      return this._activeBattle.allUnitTemplates[this.unitTemplate];
    } else {
      return undefined;
    }
  }

  get incrementedName() {
    return this._activeBattle.unitModels
    .filter(unit => unit.armyIndex === this.army)
    .map(unit => unit.name)
    .filter(name => this.newUnitBaseName && name.startsWith(this.newUnitBaseName))
    .map(name => name.match(/(.*?)(\d*)$/))
    .filter(match => match && match.length === 3)
    .sort((match1, match2) => parseInt(match1[2]) - parseInt(match2[2] || 0))
    .map(match => match[1] + (match[2] ? '' : ' ') + (parseInt(match[2] || 0) + 1))
    .pop()
  }

  get newUnitBaseName() {
    return this.nameElement.value || (this.selectedUnit ? this.selectedUnit.unit.name : '');
  }

  get name() {
    return this.incrementedName || this.newUnitBaseName;
  }

  get statsValid() {
    return ! isNaN(this.unitTemplate);
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
      this.armyElement.value = '0';
      this.nameElement.value = '';
      this.unitTemplateElement.value = '';
      this.shadowRoot.getElementById('added-message').alert();
    } else {
      this.shadowRoot.getElementById('warning-message').alert();
    }
  }
}

window.customElements.define('battle-view', BattleView);
