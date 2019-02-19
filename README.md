# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Update civil war army size to be regiment level.
1. Mount / Unmount options while resting. isMounted, canUnmount, unmountedSpeed, mountedSpeed.
1. Make leaders configurable by scenario by army and provide a 0-100 rating.
1. Terrain configurable by scenario.
1. Terrain specific to attacker / defender.
1. Update civil war ruleset based on our practice games.
1. Event sourced data for step back in time or undoing actions.
1. Action log of every action (maybe do this along with the event sourced data)
1. Optional pace for movements (recovery pace, marching pace, charging pace)
1. Various equations for ranged weapon effectiveness.
1. Army actions (generals, supply wagons).
1. Make a way to add images to the rules.
1. Bull run setup instructions.
1. Make an 'ancients' ruleset and a ww1 era ruleset each with an example battle.
1. Allow units to have a point cost and add a "usesPoints" flag to battles. If this flag is true then the battle page will display the point cost of each unit and the aggregate point cost of the army.
1. Update the mobile nav to be a bottom based navigation instead of a drawer.
1. Update the app favicon.
1. Add a "obscured" option when creating a battle. If this option is left unchecked exact casualty counts and minutes are reported.

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
