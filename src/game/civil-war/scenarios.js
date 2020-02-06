export const CIVIL_WAR_DRANESVILLE_SCENARIO = 'CIVIL_WAR_DRANESVILLE_SCENARIO';
export const CIVIL_WAR_BULL_RUN_SCENARIO = 'CIVIL_WAR_BULL_RUN_SCENARIO';
export const CIVIL_WAR_GENERIC_SCENARIO = 'CIVIL_WAR_GENERIC_SCENARIO';

export default {
  [CIVIL_WAR_DRANESVILLE_SCENARIO]: [
    {
      heading: 'The battle begins.',
      text: 'The battle begins at 1:00 pm on the 20th of December, 1861'
    },
    {
      heading: 'Setup',
      text: 'Each edge of the board should have a lot of woods. A road should cross the table from left to right with one branch angled into the woods of the unions left flank. The union troops begin on their side of the road but facing the in the direction of the road, not in the direction of the confederate forces. The confederates begin in a defensive position along the hills and forest of their side of the board. Their artillery is in position. The union artillery is out of position at the rear of their column. The union cavalry is on the other side of the board in the far corner of the union side.',
      image: '/images/game/civil-war/dranesville.png'
    }
  ],
  [CIVIL_WAR_BULL_RUN_SCENARIO]: [
    {
      heading: 'The battle begins.',
      text: 'The game clock starts at 9:03 am on 11th of May, 1862 '
    },
    {
      heading: 'Setup',
      text: 'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like or try to base it off of the actual battle.',
      image: '/images/game/civil-war/bull-run-setup.jpg'
    },
    {
      heading: 'Night time actions',
      text: 'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'
    },
  ],
  [CIVIL_WAR_GENERIC_SCENARIO]: [
    {
      heading: 'The battle begins.',
      text: 'The game clock starts at 11:30 am on 11th of May, 1862 '
    },
    {
      heading: 'Setup',
      text: 'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like.'
    }
  ]
};
