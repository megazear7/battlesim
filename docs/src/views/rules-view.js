import { html, SharedStyles, $battleViewWrapperDefault as BattleViewWrapper, repeat } from '../components/battle-sim.js';

class RulesView extends BattleViewWrapper {
  static get styles() {
    return [SharedStyles];
  }

  battleViewRender() {
    return html`
      <section>
        <h3>Scenario Rules</h3>
        ${repeat(this._activeBattle.battleRules, ({
      heading,
      text,
      image
    }, index) => html`
          <h5>${index + 1} ${heading}</h5>
          <p>${text}</p>
          ${image ? html`<div><img src=${image}></img></div>` : ``}
        `)}
      </section>
      <section>
        <h3>${this._activeBattle.rulesetRules.name}</h3>
      </section>
      ${repeat(this._activeBattle.rulesetRules.sections, ({
      heading,
      text,
      subsections
    }, index) => html`
        <section>
          <h4>${index + 1} ${heading}</h4>
          <p>${text}</p>
          ${repeat(subsections, ({
      heading,
      text,
      image
    }, subIndex) => html`
            <h6>${index + 1}.${subIndex + 1} ${heading}</h6>
            <p>${text}</p>
            ${image ? html`<div><img src=${image}></img></div>` : ``}
          `)}
        </section>
      `)}
      <section>
        <h3>Gameplay overview</h3>

        <h4>1 Movement</h4>

        <h6>1.1 Fast movement</h6>
        <p>Moving at fast pace will cost energy.</p>

        <h6>1.2 March movement</h6>
        <p>Moving at marching pace will be slower but it will not cost energy.</p>

        <h6>1.3 Slow movement</h6>
        <p>Moving at slow pace will be even slower but it regain energy.</p>

        <h6>1.4 Movement time</h6>
        <p>The amount of time it takes to perform a move action depends on how far you attempt to move. If the movement box is left empty the unit will spend the full turn length moving and you will be notified how far they managed to move in that time.</p>

        <h6>1.5 Movement distance</h6>
        <p>If you enter a movement distance during your mvoe the unit will move no further than the indicated amount. If they cannot make the distance in a full turn length then they will go as far as they can get in a full turn length and then will be ready for a new activation after that time. If they reach the entered distance in less than a full turn length then they will be ready for a new activation at whatever point in time they reach the entered distance. So for example, if you enter in 2 inches and it takes them 4 minutes to get that distance, then the unit will be ready for activation after 4 minutes of game time have passed.</p>

        <h6>1.6 Movement terrain</h6>
        <p>Movement terrain are different variables that you might need to check based on the movement of the unit. The scenario rules should tell you when and why you would select the movement terrain checkboxes. Likely this would be because your unit moved through that terrain feature.</p>

        <h4>2 Charge</h4>

        <h6>2.1 Time in combat</h6>
        <p>When charging the unit performing the charge begins to move towards the enemey unit. How far that unit was from the target determines how long it took them to reach the target, which in tern determines how long they are engaged for. A short charge will likely be devestating where as a long charge will be less effective.</p>

        <h4>3 Fire</h4>

        <h6>3.1 Weapon profiles</h6>
        <p>Different units have different weapons. Some weapons might be effective at short range and gradually decrease in affectiveness whereas other weapons might remain effective at a long distance and then have a sudden drop off.</p>

        <h4>4 Unit </h4>

        <h6>4.1 Units</h6>
        <p>Units have various statistics that determine their ability to move, fight, and otherwise operate on the battlefield. Each unit is apart of an army and can take an action when their activation comes up. A unit's activation comes up when their next activation time is the soonest of all the units on the battlefield. When they take their action the game clock proceeds to the unit with the next closest activation time.<p>

        <h6>4.2 Unit status</h6>
        <p>Each unit has a few key stats that determine their status. These are strength, morale, energy, and leadership.</p>

        <h6>4.3 Unit strength</h6>
        <p>A unit's strength determines how many soldiers of that unit remain engaged in the battle. Loss to strength does not neccessarily represent deaths, but could also represent soldiers fleeing the battlefield, wounded to the point of no longer being effective in the fight, or otherwise no longer partaking in the battle.</p>

        <h6>4.4 Unit morale</h6>
        <p>A unit's morale determines how willing they are to take orders and partake in the fight. A low morale can make the unit more likely to flee from a charge or withdraw from ranged fire and less likely to accept orders. If morale reaches 0 that unit is eliminated from the battle and can no longer recieve orders.</p>

        <h6>4.5 Unit energy</h6>
        <p>A unit's energe determines how capable they are of performing difficult tasks and how effective they are in combat. A low energy will make them less effective in ranged fire and a lot less effective in melee combat. A low energy also makes units vulnerable to taking casualties. A unit with energy 0 can no longer recieve orders.</p>

        <h6>4.6 Unit leadership</h6>
        <p>A unit's leadership determines how capable they are of effectively recieving orders. A unit requires a certain amount of time to recieve and begin executing an order. A low leadership increases this time. So for example if a unit is ordered to move, some time is taken before that unit begins moving, making issueing lots of short orders less effective than issueing a single long order.</p>

        <h6>4.7 Unit equipment</h6>
        <p>Units are equiped with various things which effect their ability to move and fight. Weapons and armor can make the unit lose more energy during movement, more affective at various ranges on the battle field, better in some terrain types, or more capable of withstanding a charge. These factors should be described in the unit description and players should take this description into account in order to know how to effectively utilize that unit on the battlefield.</p>

        <h6>4.8 Unit experience</h6>
        <p>A unit has a certain experience rating which should be described in their unit description. A high experience rating means that they lose morale and energy less quickly, recieve orders quicker, and are more effective in combat.</p>
      </section>
    `;
  }

}

window.customElements.define('rules-view', RulesView);