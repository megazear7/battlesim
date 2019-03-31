export default {
  name: "Civil War Rules",
  sections: [
    {
      heading: 'Setup',
      text: 'Setup will be based upon the scenario that you are playing.',
      subsections: [
        {
          heading: 'Terrain',
          text: 'Follow the terrain setup as explained in the current scenario.'
        },
        {
          heading: 'Unit Placement',
          text: 'Follow the unit placement as explained in the current scenario.'
        }
      ]
    },
    {
      heading: 'Army composition',
      text: 'Each army consists of the units specified in the scenario. Each unit consists of a number of stands specified on the battle page.',
      subsections: [
        {
          heading: 'Taking casualties',
          text: 'As units take casualties you will not pick up stands. Rather you will be able to know the status of the unit based upon the status that the units leaders provide to you. While the number of stands will remain consistant as they take casualties, you will need to keep in mind that there might be less soldiers in the unit.'
        }
      ]
    },
    {
      heading: 'Taking Actions',
      text: 'Select an action for the current unit on the fight page. Do not actually perform any action until you have submitted the action. ',
      subsections: [
        {
          heading: 'Applying the result',
          text: 'After submitting the action apply the results as explained.'
        },
        {
          heading: 'Turns',
          text: 'Each army will take actions for about one hour of game time. Then the active army will switch and the other army will take actions. Depending on how long a units previous action took that unit might not get to go in a turn as they would be still completing their previous action. If a units action does not take very long they may be able to go twice in the same turn. Watch the game clock at the top of the fight page to know what time it is and to predict when you might get to go again.'
        },
        {
          heading: 'Environmental factors',
          text: 'Make sure to enter in any environmental factors that apply to the engagement. Terrain can greatly affect the results of the fight and how much energy was spent by each unit.'
        },
        {
          heading: 'Combat',
          text: 'You might notice that you can only ever engage a single unit in combat with a single other unit. This might make you feel difficult to swarm a single enemy unit with multiple of your own units. While this is intentional, keep in mind that you can engage an enemy stand with multiple units as your units turns come up. The combat effectiveness of the enemy unit will dramatically worsen as it has to repeatedly engage in combat after combat. On the battlefield these sequential combats might in reality have been a single enagement where you sent multiple units into combat with a single unit, but on the tabletop you will see this type of event play out as separate and sequential combats. Keep the game clock in mind. You might notice that both your attacks happened within a few minutes of game time. This obviouslly means that while you took individual turns for each unit, both engagements actually happened simultaneouslly.'
        },
        {
          heading: 'Army actions',
          text: 'You will be notified to take army actions. This will allow you to move generals, commanders, and supply wagons. If a general or commander is touching a friendly unit while that unit performs a move the general or commander may move with the unit.'
        },
      ]
    },
    {
      heading: 'Rest',
      text: 'Units can rest to recover energy and morale.',
      subsections: [
        {
          heading: 'Resupply',
          text: 'While taking army actions you can move your supply wagons. If one of these supply wagons is touching a unit while that unit is taking actions you can choose to resupply that unit while resting. This will recover their ammunition. When you do this you pick up the supply wagon from the game.',
        },
      ]
    },
    {
      heading: 'Movement',
      text: 'When performing a normal movement you can either enter in a distance or leave the distance blank which will cause the unti to spend a full 30 minutes moving.',
      subsections: [
        {
          heading: 'Close Order Infantry Movement',
          text: 'A movement constists of either a single wheel where one corner remains stationary, a single forward movement, or a single retreate move where the unit turns around and then moves.',
        },
        {
          heading: 'Open Order Infantry Movement',
          text: 'Open order infantry can wheel, turn in place, and move forward without limitations.',
        },
        {
          heading: 'Mounted Movement',
          text: 'Mounted units can wheel, turn in place, and move forward without limitations.',
        },
        {
          heading: 'Entering a distance',
          text: 'If you enter a distance the game will tell you if you were able to make the distance and how long it took.',
        },
        {
          heading: 'Moving as far as possible',
          text: 'If you move as far as possible you will spend a full 30 minutes moving. This reduced the complexity of the movement by limiting the number of commands that are issued. However it also exposes the unit for a full 30 minutes of time where they will not be able to react.',
        },
        {
          heading: 'Limbering',
          text: 'Artillary must make a movement of 1 inch without moving before they can move as normal. This means they are limbered. Turn the cannons around as an indication. At the end of any movement they can deploy and turn arround. Then they cannot move or rotate again unit they are limbered.'
        },
        {
          heading: 'March column',
          text: 'Infantry can spend a movement of 1 inch to enter or exit the march column. Move all stands behind a singal designated lead stand to enter march column or move all non lead stands adjacent to the lead stand to exit march column. When in march column double the movement distances reported by the game.'
        }
      ]
    },
    {
      heading: 'Ranged combat',
      text: 'Units can take the fire action to attack an enemy unit.',
      subsections: [
        {
          heading: 'Measurement',
          text: 'Measure from the center of stand of each unit.'
        },
        {
          heading: 'Inderect Line of Sight',
          text: 'Cannons can fire indirectly without line of sight as long as the blocking unit or terrain piece is closer to the cannon than to the target unit.'
        },
        {
          heading: 'Engaged stands',
          text: 'Each unit will have a certain number of engaged stands. This is determined by the number of stands in each unit that has line of sight on the other unit. Enter the number of engaged stands for each unit into the fight page so that the game knows how many soldiers are engaged in the conflict.'
        },
        {
          heading: 'Combat outcomes',
          text: 'The outcome of ranged combat will likely include a status update for both units as they trade fire. See the combat outcomes section for more details.'
        },
        {
          heading: 'Cannon fire',
          text: 'Elevated cannon fire can shoot beyond friendly troops a number of inches equal to the distance between the cannons and the furthest friendly troops in the direction of the target.'
        }
      ]
    },
    {
      heading: 'Melee combat',
      text: 'Units can take the charge action to attack an enemy unit in melee. This also represents close distance ranged weapons such as pistols.',
      subsections: [
        {
          heading: 'Selecting a target',
          text: 'When selecting the charge action you will be asked to enter the distance towards the enemy unit. This should the distance between the closest stand of the charging unit to the closest stand of the defending unit.'
        },
        {
          heading: 'Performing the charge',
          text: 'After entering in the distance and other information about the attack such as terrain, you will be told whether or not your unit reached the defender, how far you can move your stands, how far the defender can move his stands in response. If the actions results tell you to do so finish the movement. Take the closest stand and line it up with the closest unengaged enemy stand. Continue to do this until every stand from the charging unit is engaged.',
        },
        {
          heading: 'Extra charging stands',
          text: 'If the charging unit has more stands than the enemy unit place the extra charging stands either behind the other stands from the charging unit or to the side of an engaged charging stand. These stands also count as being in combat.'
        },
        {
          heading: 'Extra defending stands',
          text: 'If the defending unit has more stands than the attacking unit the extra stands can move the previously specified distance in order to attempt to engage in the melee. Place these stands either behind the engaged stands of the defending unit or to the sides of a defending stand. These stands also count as being in combat.'
        },
        {
          heading: 'Unengaged stands',
          text: 'Any stand that could not make it into combat is not counted in the melee, reducing the overall effectiveness of the unit. You will be asked to enter this information.'
        },
        {
          heading: 'Making the attack',
          text: 'Determine how many engaged stands there are in each unit and enter this information. Then click the do combat button to see what the results of the combat are. There might be follow up actions such as a fall back or persuit.'
        },
      ]
    },
    {
      heading: 'Flanks',
      text: 'Depending on the angle of the attack the defender might not get to defend with all of their stands.',
      subsections: [
        {
          heading: 'Flank attack',
          text: 'When the the entire attacking unit is to the flank of the defending unit the defending unit only fights with 1 stand.'
        },
        {
          heading: 'Rear attack',
          text: 'When the entire attacking unit is behind the defending unit the defending unit fights with 0 stands.'
        }
      ]
    },
    {
      heading: 'Leadership',
      text: 'Each unit has its own leadership quality. However there is also army commanders that act as individual units upon the battlefield and can greatly encourage and enspure the units that they are with.',
      subsections: [
        {
          heading: 'Unit leadership',
          text: 'Unit leadership determines how detailed of information you recieve about that unit during the course of play. If leaders are killed in combat you will recieve a report and the quality of that units leadership will be greatly diminished. This will reduce the quality of reports you recieve about the units current status and action outcomes and will also make the unit less effective.'
        },
        {
          heading: 'Army leadership',
          text: 'Each army will have a number of commands that can move independantly upon the battlefield. If this commanders base is touching the base of a unit upon the battlefield then make sure to make this selection when this unit takes actions. This can speed up maneuver time, inspire them in combat, and make them more effective in carrying our your orders.'
        }
      ]
    },
    {
      heading: 'Combat outcomes',
      text: 'These are the various combat outcomes that might happen to a unit after melee or ranged combat. Either of the units engaged in the battle might fall back, evade, or flee.',
      subsections: [
        {
          heading: 'Fall back',
          text: 'Maintain unit orientation but move the unit directly away from the attacking unit the number of inches specified.'
        },
        {
          heading: 'Flee',
          text: 'Remove the unit from the battlefield.'
        }
      ]
    }
  ]
};
