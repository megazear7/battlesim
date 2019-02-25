import { html, css, PageViewElement, SharedStyles, repeat, connect, store } from './battle-sim.js';
var CIVIL_WAR_RULES = {
  name: "Civil War Rules",
  sections: [{
    heading: 'Setup',
    text: 'Setup will be based upon the scenario that you are playing.',
    subsections: [{
      heading: 'Terrain',
      text: 'Follow the terrain setup as explained in the current scenario.'
    }, {
      heading: 'Unit Placement',
      text: 'Follow the unit placement as explained in the current scenario.'
    }]
  }, {
    heading: 'Army composition',
    text: 'Each army consists of the units specified in the scenario. Each unit consists of a number of stands specified on the battle page.',
    subsections: [{
      heading: 'Taking casualties',
      text: 'As units take casualties you will not pick up stands. Rather you will be able to know the status of the unit based upon the status that the units leaders provide to you. While the number of stands will remain consistant as they take casualties, you will need to keep in mind that there might be less soldiers in the unit.'
    }, {
      heading: 'Unit Formation',
      text: 'Stands in closed order units must be in contact with another stand from the unit at all times. Stands in open order units must remain within 3 inches of another stand from its own unit at all times.'
    }]
  }, {
    heading: 'Taking Actions',
    text: 'Select an action for the current unit on the fight page. Do not actually perform any action until you have submitted the action. ',
    subsections: [{
      heading: 'Applying the result',
      text: 'After submitting the action apply the results as explained.'
    }, {
      heading: 'Turns',
      text: 'Each army will take actions for about one hour of game time. Then the active army will switch and the other army will take actions. Depending on how long a units previous action took that unit might not get to go in a turn as they would be still completing their previous action. If a units action does not take very long they may be able to go twice in the same turn. Watch the game clock at the top of the fight page to know what time it is and to predict when you might get to go again.'
    }, {
      heading: 'Environmental factors',
      text: 'Make sure to enter in any environmental factors that apply to the engagement. Terrain can greatly affect the results of the fight and how much energy was spent by each unit.'
    }, {
      heading: 'Combat',
      text: 'You might notice that you can only ever engage a single unit in combat with a single other unit. This might make you feel difficult to swarm a single enemy unit with multiple of your own units. While this is intentional, keep in mind that you can engage an enemy stand with multiple units as your units turns come up. The combat effectiveness of the enemy unit will dramatically worsen as it has to repeatedly engage in combat after combat. On the battlefield these sequential combats might in reality have been a single enagement where you sent multiple units into combat with a single unit, but on the tabletop you will see this type of event play out as separate and sequential combats. Keep the game clock in mind. You might notice that both your attacks happened within a few minutes of game time. This obviouslly means that while you took individual turns for each unit, both engagements actually happened simultaneouslly.'
    }, {
      heading: 'Army actions',
      text: 'You will be notified to take army actions. This will allow you to move generals, commanders, and supply wagons. If a general or commander is touching a friendly unit while that unit performs a move the general or commander may move with the unit.'
    }]
  }, {
    heading: 'Rest',
    text: 'Units can rest to recover energy and morale.',
    subsections: [{
      heading: 'Resupply',
      text: 'While taking army actions you can move your supply wagons. If one of these supply wagons is touching a unit while that unit is taking actions you can choose to resupply that unit while resting. This will recover their ammunition. When you do this you pick up the supply wagon from the game.'
    }]
  }, {
    heading: 'Movement',
    text: 'There are four types of movements: Column, March, Maneuver, Reform',
    subsections: [{
      heading: 'Column',
      text: 'This consists of any movement where every stand is lined up behind each other. This movement can include a single wheel where the lead unit can turn up to 45 degrees at some point during the movement. This is the fastest type of movement.'
    }, {
      heading: 'March',
      text: 'A march is of any movement where every stand in the unit is facing the same direction, and the movement is entirely forward. This is the standard type of movement to perform on the battlefield.'
    }, {
      heading: 'Maneuver',
      text: 'A maneuver is of any movement where the movement includes wheeling, or any movement that is entirely forward but where the stands are not facing the same directon. This movement is slower than a march but faster than a reform.'
    }, {
      heading: 'Reform',
      text: 'A reform movement allows each stand to move entirely independantly. This allows you to change formation or perform complex movements. This movement takes the longest amount of time.'
    }, {
      heading: 'Open and closed order',
      text: 'Open order units may pass through friendly units of any type. Closed order units may never pass through any other unit.'
    }]
  }, {
    heading: 'Ranged combat',
    text: 'Units can take the fire action to attack an enemy unit. The enemy unit will attempt to return fire if it is able.',
    subsections: [{
      heading: 'Engaged stands',
      text: 'Each unit will have a certain number of engaged stands. This is determined by the number of stands in each unit that has line of sight on the other unit. Enter the number of engaged stands for each unit into the fight page so that the game knows how many soldiers are engaged in the conflict.'
    }, {
      heading: 'Combat outcomes',
      text: 'The outcome of ranged combat will likely include a status update for both units as they trade fire. See the combat outcomes section for more details.'
    }]
  }, {
    heading: 'Melee combat',
    text: 'Units can take the charge action to attack an enemy unit in melee. This also represents close distance ranged weapons such as pistols.',
    subsections: [{
      heading: 'Selecting a target',
      text: 'When selecting the charge action you will be asked to enter the distance towards the enemy unit. This should the distance between the closest stand of the charging unit to the closest stand of the defending unit.'
    }, {
      heading: 'Performing the charge',
      text: 'After entering in the distance and other information about the attack such as terrain, you will be told whether or not your unit reached the defender, how far you can move your stands, how far the defender can move his stands in response. If the actions results tell you to do so finish the movement. Take the closest stand and line it up with the closest unengaged enemy stand. Continue to do this until every stand from the charging unit is engaged.'
    }, {
      heading: 'Extra charging stands',
      text: 'If the charging unit has more stands than the enemy unit place the extra charging stands either behind the other stands from the charging unit or to the side of an engaged charging stand. These stands also count as being in combat.'
    }, {
      heading: 'Extra defending stands',
      text: 'If the defending unit has more stands than the attacking unit the extra stands can move the previously specified distance in order to attempt to engage in the melee. Place these stands either behind the engaged stands of the defending unit or to the sides of a defending stand. These stands also count as being in combat.'
    }, {
      heading: 'Unengaged stands',
      text: 'Any stand that could not make it into combat is not counted in the melee, reducing the overall effectiveness of the unit. You will be asked to enter this information.'
    }, {
      heading: 'Making the attack',
      text: 'Determine how many engaged stands there are in each unit and enter this information. Then click the do combat button to see what the results of the combat are. There might be follow up actions such as a fall back or persuit.'
    }]
  }, {
    heading: 'Leadership',
    text: 'Each unit has its own leadership quality. However there is also army commanders that act as individual units upon the battlefield and can greatly encourage and enspure the units that they are with.',
    subsections: [{
      heading: 'Unit leadership',
      text: 'Unit leadership determines how detailed of information you recieve about that unit during the course of play. If leaders are killed in combat you will recieve a report and the quality of that units leadership will be greatly diminished. This will reduce the quality of reports you recieve about the units current status and action outcomes and will also make the unit less effective.'
    }, {
      heading: 'Army leadership',
      text: 'Each army will have a number of commands that can move independantly upon the battlefield. If this commanders base is touching the base of a unit upon the battlefield then make sure to make this selection when this unit takes actions. This can speed up maneuver time, inspire them in combat, and make them more effective in carrying our your orders.'
    }]
  }, {
    heading: 'Combat outcomes',
    text: 'These are the various combat outcomes that might happen to a unit after melee or ranged combat. Either of the units engaged in the battle might fall back, evade, or flee.',
    subsections: [{
      heading: 'Fall back',
      text: 'Maintain unit orientation but move the unit directly away from the attacking unit the number of inches specified.'
    }, {
      heading: 'Evade',
      text: 'Move the unit in any direction up to the number of inches specified. You must end at least two inches away from the enemy unit.'
    }, {
      heading: 'Flee',
      text: 'Move the unit directly towards your armies table edge the number of inches specified. If you pass through any enemy unit while perform this move your unit is destroyed.'
    }]
  }, {
    heading: 'Battle outcomes',
    text: 'The game will never declare a winner on the battlefield. Play continues until all players agree to be done. Each general can determine for themselves who won the battle.',
    subsections: [{
      heading: 'Night time',
      text: 'When the game clock becomes night time that usually means that the day of fighting is over. The game will alert you that the sun has set and each general will recieve an overview of the condition of their army. By this time it might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. If you do this then the scenario will have "night time actions" that each unit of each army will need to take.'
    }]
  }]
};
var rules = {
  default: CIVIL_WAR_RULES
};
var ANCIENTS_RULES = {
  name: "Ancients Rules",
  sections: [{
    heading: 'To do',
    text: 'I copied this from the civil war rules. These rules need created.',
    subsections: []
  }, {
    heading: 'Setup',
    text: 'Setup will be based upon the scenario that you are playing.',
    subsections: [{
      heading: 'Terrain',
      text: 'Follow the terrain setup as explained in the current scenario.'
    }, {
      heading: 'Unit Placement',
      text: 'Follow the unit placement as explained in the current scenario.'
    }]
  }, {
    heading: 'Army composition',
    text: 'Each army consists of the units specified in the scenario. Each unit consists of a number of stands specified on the battle page.',
    subsections: [{
      heading: 'Taking casualties',
      text: 'As units take casualties you will not pick up stands. Rather you will be able to know the status of the unit based upon the status that the units leaders provide to you. While the number of stands will remain consistant as they take casualties, you will need to keep in mind that there might be less soldiers in the unit.'
    }, {
      heading: 'Unit Formation',
      text: 'Stands in closed order units must be in contact with another stand from the unit at all times. Stands in open order units must remain within 3 inches of another stand from its own unit at all times.'
    }]
  }, {
    heading: 'Taking Actions',
    text: 'Select an action for the current unit on the fight page. Do not actually perform any action until you have submitted the action. ',
    subsections: [{
      heading: 'Applying the result',
      text: 'After submitting the action apply the results as explained.'
    }, {
      heading: 'Turns',
      text: 'Each army will take actions for about one hour of game time. Then the active army will switch and the other army will take actions. Depending on how long a units previous action took that unit might not get to go in a turn as they would be still completing their previous action. If a units action does not take very long they may be able to go twice in the same turn. Watch the game clock at the top of the fight page to know what time it is and to predict when you might get to go again.'
    }, {
      heading: 'Environmental factors',
      text: 'Make sure to enter in any environmental factors that apply to the engagement. Terrain can greatly affect the results of the fight and how much energy was spent by each unit.'
    }, {
      heading: 'Combat',
      text: 'You might notice that you can only ever engage a single unit in combat with a single other unit. This might make you feel difficult to swarm a single enemy unit with multiple of your own units. While this is intentional, keep in mind that you can engage an enemy stand with multiple units as your units turns come up. The combat effectiveness of the enemy unit will dramatically worsen as it has to repeatedly engage in combat after combat. On the battlefield these sequential combats might in reality have been a single enagement where you sent multiple units into combat with a single unit, but on the tabletop you will see this type of event play out as separate and sequential combats. Keep the game clock in mind. You might notice that both your attacks happened within a few minutes of game time. This obviouslly means that while you took individual turns for each unit, both engagements actually happened simultaneouslly.'
    }, {
      heading: 'Army actions',
      text: 'You will be notified to take army actions. This will allow you to move generals, commanders, and supply wagons. If a general or commander is touching a friendly unit while that unit performs a move the general or commander may move with the unit.'
    }]
  }, {
    heading: 'Rest',
    text: 'Units can rest to recover energy and morale.',
    subsections: [{
      heading: 'Resupply',
      text: 'While taking army actions you can move your supply wagons. If one of these supply wagons is touching a unit while that unit is taking actions you can choose to resupply that unit while resting. This will recover their ammunition. When you do this you pick up the supply wagon from the game.'
    }]
  }, {
    heading: 'Movement',
    text: 'There are four types of movements: Column, March, Maneuver, Reform',
    subsections: [{
      heading: 'Column',
      text: 'This consists of any movement where every stand is lined up behind each other. This movement can include a single wheel where the lead unit can turn up to 45 degrees at some point during the movement. This is the fastest type of movement.'
    }, {
      heading: 'March',
      text: 'A march is of any movement where every stand in the unit is facing the same direction, and the movement is entirely forward. This is the standard type of movement to perform on the battlefield.'
    }, {
      heading: 'Maneuver',
      text: 'A maneuver is of any movement where the movement includes wheeling, or any movement that is entirely forward but where the stands are not facing the same directon. This movement is slower than a march but faster than a reform.'
    }, {
      heading: 'Reform',
      text: 'A reform movement allows each stand to move entirely independantly. This allows you to change formation or perform complex movements. This movement takes the longest amount of time.'
    }, {
      heading: 'Open and closed order',
      text: 'Open order units may pass through friendly units of any type. Closed order units may never pass through any other unit.'
    }]
  }, {
    heading: 'Ranged combat',
    text: 'Units can take the fire action to attack an enemy unit. The enemy unit will attempt to return fire if it is able.',
    subsections: [{
      heading: 'Engaged stands',
      text: 'Each unit will have a certain number of engaged stands. This is determined by the number of stands in each unit that has line of sight on the other unit. Enter the number of engaged stands for each unit into the fight page so that the game knows how many soldiers are engaged in the conflict.'
    }, {
      heading: 'Combat outcomes',
      text: 'The outcome of ranged combat will likely include a status update for both units as they trade fire. See the combat outcomes section for more details.'
    }]
  }, {
    heading: 'Melee combat',
    text: 'Units can take the charge action to attack an enemy unit in melee. This also represents close distance ranged weapons such as pistols.',
    subsections: [{
      heading: 'Selecting a target',
      text: 'When selecting the charge action you will be asked to enter the distance towards the enemy unit. This should the distance between the closest stand of the charging unit to the closest stand of the defending unit.'
    }, {
      heading: 'Performing the charge',
      text: 'After entering in the distance and other information about the attack such as terrain, you will be told whether or not your unit reached the defender, how far you can move your stands, how far the defender can move his stands in response. If the actions results tell you to do so finish the movement. Take the closest stand and line it up with the closest unengaged enemy stand. Continue to do this until every stand from the charging unit is engaged.'
    }, {
      heading: 'Extra charging stands',
      text: 'If the charging unit has more stands than the enemy unit place the extra charging stands either behind the other stands from the charging unit or to the side of an engaged charging stand. These stands also count as being in combat.'
    }, {
      heading: 'Extra defending stands',
      text: 'If the defending unit has more stands than the attacking unit the extra stands can move the previously specified distance in order to attempt to engage in the melee. Place these stands either behind the engaged stands of the defending unit or to the sides of a defending stand. These stands also count as being in combat.'
    }, {
      heading: 'Unengaged stands',
      text: 'Any stand that could not make it into combat is not counted in the melee, reducing the overall effectiveness of the unit. You will be asked to enter this information.'
    }, {
      heading: 'Making the attack',
      text: 'Determine how many engaged stands there are in each unit and enter this information. Then click the do combat button to see what the results of the combat are. There might be follow up actions such as a fall back or persuit.'
    }]
  }, {
    heading: 'Leadership',
    text: 'Each unit has its own leadership quality. However there is also army commanders that act as individual units upon the battlefield and can greatly encourage and enspure the units that they are with.',
    subsections: [{
      heading: 'Unit leadership',
      text: 'Unit leadership determines how detailed of information you recieve about that unit during the course of play. If leaders are killed in combat you will recieve a report and the quality of that units leadership will be greatly diminished. This will reduce the quality of reports you recieve about the units current status and action outcomes and will also make the unit less effective.'
    }, {
      heading: 'Army leadership',
      text: 'Each army will have a number of commands that can move independantly upon the battlefield. If this commanders base is touching the base of a unit upon the battlefield then make sure to make this selection when this unit takes actions. This can speed up maneuver time, inspire them in combat, and make them more effective in carrying our your orders.'
    }]
  }, {
    heading: 'Combat outcomes',
    text: 'These are the various combat outcomes that might happen to a unit after melee or ranged combat. Either of the units engaged in the battle might fall back, evade, or flee.',
    subsections: [{
      heading: 'Fall back',
      text: 'Maintain unit orientation but move the unit directly away from the attacking unit the number of inches specified.'
    }, {
      heading: 'Evade',
      text: 'Move the unit in any direction up to the number of inches specified. You must end at least two inches away from the enemy unit.'
    }, {
      heading: 'Flee',
      text: 'Move the unit directly towards your armies table edge the number of inches specified. If you pass through any enemy unit while perform this move your unit is destroyed.'
    }]
  }, {
    heading: 'Battle outcomes',
    text: 'The game will never declare a winner on the battlefield. Play continues until all players agree to be done. Each general can determine for themselves who won the battle.',
    subsections: [{
      heading: 'Night time',
      text: 'When the game clock becomes night time that usually means that the day of fighting is over. The game will alert you that the sun has set and each general will recieve an overview of the condition of their army. By this time it might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. If you do this then the scenario will have "night time actions" that each unit of each army will need to take.'
    }]
  }]
};
var rules$1 = {
  default: ANCIENTS_RULES
};
const RULES = [CIVIL_WAR_RULES, ANCIENTS_RULES];
var rules$2 = {
  default: RULES
};

class RulesView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _ruleset: {
        type: Object
      },
      _battleRules: {
        type: Object
      },
      _hasActiveBattle: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [SharedStyles, css`
        img {
          max-width: 100%;
        }
      `];
  }

  render() {
    return html`
      ${this._hasActiveBattle ? html`
        <section>
          <h3>Scenario Rules</h3>
          ${repeat(this._battleRules, ({
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
          <h3>${this._ruleset.name}</h3>
        </section>
        ${repeat(this._ruleset.sections, ({
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
      ` : html`
        <section>
          <p>No active battle. Go to the war tab and either select a battle or create a new battle.</p>
        </section>
      `}
    `;
  }

  stateChanged(state) {
    if (state.battle.battles.length > state.battle.activeBattle) {
      let activeBattle = state.battle.battles[state.battle.activeBattle];
      this._battleRules = activeBattle.rules;
      this._ruleset = RULES[activeBattle.ruleset];
      this._hasActiveBattle = true;
    } else {
      this._hasActiveBattle = false;
    }
  }

}

window.customElements.define('rules-view', RulesView);
export { rules$1 as $rules, rules as $rules$1, rules$2 as $rules$2, ANCIENTS_RULES as $rulesDefault, CIVIL_WAR_RULES as $rulesDefault$1, RULES as $rulesDefault$2 };