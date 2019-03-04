import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';
import TERRAIN from '../game/terrain.js';
import { SLOPE_UP, SLOPE_DOWN, SLOPE_NONE } from '../models/terrain.js';
import { REST, MOVE, CHARGE, FIRE } from '../game.js';

export const TERRAIN_TYPE_MOVEMENT = 'movement-terrain';
export const TERRAIN_TYPE_DEFENDER = 'defender-terrain';
export const TERRAIN_TYPE_MELEE_COMBAT = 'melee-combat-terrain';
export const TERRAIN_TYPE_RANGED_DEFENDER = 'ranged-defender-terrain';
export const TERRAIN_TYPES = [ TERRAIN_TYPE_MOVEMENT, TERRAIN_TYPE_DEFENDER, TERRAIN_TYPE_MELEE_COMBAT, TERRAIN_TYPE_RANGED_DEFENDER ];

class FightSelectors extends LitElement {
  static get properties() {
    return {
      battle: { type: Object },
      action: { type: String },
      showPace: { type: Boolean },
      showTerrain: { type: Boolean },
      showHill: { type: Boolean },
      showLeader: { type: Boolean },
      showMount: { type: Boolean },
      showResupply: { type: Boolean },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
      `
    ];
  }

  render() {
    return html`
      <battle-sim-selector id="resupply" radio class="${classMap({hidden: ! this.showResupply})}">
        <battle-sim-option>Resupply</battle-sim-option>
      </battle-sim-selector>
      <battle-sim-selector radio id="unmount" class="${classMap({hidden: ! this.showMount || this._activeBattle.activeUnit.isCurrentlyMounted})}">
        <battle-sim-option>Unmount</battle-sim-option>
      </battle-sim-selector>
      <battle-sim-selector radio id="mount" class="${classMap({hidden: ! this.showMount || ! this._activeBattle.activeUnit.isCurrentlyMounted})}">
        <battle-sim-option>Mount</battle-sim-option>
      </battle-sim-selector>
      <div class="row">
        <div class="${classMap({hidden: ! this.showTerrain})}">
          ${repeat(this._typesOfTerrain, terrainType => html`
            <battle-sim-selector integer id="${terrainType.id}" class="${classMap({hidden: ! terrainType.show})}" title="${terrainType.name}">
              ${repeat(terrainType.terrain, ({terrain, index}) => html`
                <battle-sim-option value="${index}" details="${terrain.descripton}">${terrain.name}</battle-sim-option>
              `)}
            </battle-sim-selector>
          `)}
          <battle-sim-selector radio number id="pace" class="${classMap({hidden: ! this.showPace})}" title="Pace">
              <battle-sim-option value="1">Fast</battle-sim-option>
              <battle-sim-option value="0.75">March</battle-sim-option>
              <battle-sim-option value="0.5">Rest</battle-sim-option>
          </battle-sim-selector>
        </div>
        <div class="${classMap({hidden: ! this.showHill && ! this.showLeader})}">
          <battle-sim-selector radio id="hill" none="${SLOPE_NONE}" class="${classMap({hidden: ! this.showHill})}" title="Hill">
            <battle-sim-option value="${SLOPE_UP}">Uphill</battle-sim-option>
            <battle-sim-option value="${SLOPE_DOWN}">Downhill</battle-sim-option>
            <battle-sim-option value="${SLOPE_NONE}">Neither</battle-sim-option>
          </battle-sim-selector>
          <battle-sim-selector radio number id="attacker-leadership" class="${classMap({hidden: ! this.showLeader})}" title="Attacker Leaders">
            ${repeat(this.battle.activeUnit.army.leaders, (leader, index) => html`
              <battle-sim-option value="${leader.leadership}">${leader.shortname}</battle-sim-option>
            `)}
          </battle-sim-selector>
          ${this._targetUnit ? html`
            <battle-sim-selector radio number id="defender-leadership" class="${classMap({hidden: ! this.showLeader})}" title="Attacker Leaders">
              ${repeat(this._targetUnit.army.leaders, (leader, index) => html`
                <battle-sim-option value="${leader.leadership}">${leader.shortname}</battle-sim-option>
              `)}
            </battle-sim-selector>
          ` : ''}
        </div>
      </div>
    `;
  }

  get slope() {
    return this.shadowRoot.getElementById('hill').value;
  }

  get resupply() {
    return this.shadowRoot.getElementById('resupply').value
  }

  get mount() {
    return this.shadowRoot.getElementById('mount').value
  }

  get unmount() {
    return this.shadowRoot.getElementById('unmount').value
  }

  get pace() {
    if (this.action === REST) {
      return 0;
    } else {
      const pace = this.shadowRoot.getElementById('pace').value;
      return parseFloat(pace) ? pace && parseFloat(pace) : 1;
    }
  }

  hide() {
    this.showLeader = false;
    this.showPace = false;
    this.showTerrain = false;
    this.showHill = false;
    this.showMount = false;
    this.showResupply = false;
  }

  reset() {
    [...this.shadowRoot.querySelectorAll('battle-sim-option')].forEach(option => option.selected = false);
  }

  _selectedTerrain(typeId) {
    return this.shadowRoot.getElementById(typeId).value.map(index => TERRAIN[this.battle.terrain][index]);
  }

  get _defenderTerrain() {
    return this.action === CHARGE
      ? this._selectedTerrain(TERRAIN_TYPE_DEFENDER)
      : this._selectedTerrain(TERRAIN_TYPE_RANGED_DEFENDER);
  }

  get _typesOfTerrain() {
    return [
      {
        id: TERRAIN_TYPE_MOVEMENT,
        name: "Movement",
        description: "This is the terrain that applys to the movement or charge.",
        terrain: TERRAIN[this.battle.terrain].map((terrain, index) => ({ terrain, index })),
        show: this.showTerrain && (this.action === CHARGE || this.action === MOVE)
      },
      {
        id: TERRAIN_TYPE_DEFENDER,
        name: "Defender",
        description: "This is the terrain that the defender is defending.",
        terrain: TERRAIN[this.battle.terrain].map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.defendable),
        show: this.showTerrain && this.action === CHARGE
      },
      {
        id: TERRAIN_TYPE_MELEE_COMBAT,
        name: "Combat",
        description: "This is the terrain that the combat that is taking place.",
        terrain: TERRAIN[this.battle.terrain].map((terrain, index) => ({ terrain, index })).filter(({terrain}) => terrain.areaTerrain),
        show: this.showTerrain &&  this.action === CHARGE
      },
      {
        id: TERRAIN_TYPE_RANGED_DEFENDER,
        name: "Terrain",
        description: "This is the terrain that the defender recieves the benefit of.",
        terrain: TERRAIN[this.battle.terrain].map((terrain, index) => ({ terrain, index })),
        show: this.showTerrain && this.action === FIRE
      },
    ];
  }
}

window.customElements.define('fight-selectors', FightSelectors);
