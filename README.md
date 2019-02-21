# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Action log of every action and provide an easy way to review the full action log of the active battle. Maybe this should be at a hidden url?
1. Review the usage of army leadership in resting, movement, and combat. Leadership is now configurable by scenario and army but I don't know how this influences actions.
1. Update the app favicon.
1. Update civil war army size to be regiment level.
1. Update civil war ruleset based on our practice games.
1. Make a way to add images to the rules.
1. Bull run setup instructions.
1. Allow units to have a point cost and add a "usesPoints" flag to battles. If this flag is true then the battle page will display the point cost of each unit and the aggregate point cost of the army.
1. Move terrain out of the reducer and just reference it by index so that we don't have to recreate battles when terrain get's modified.
1. Event sourced data for step back in time or undoing actions.
1. Make an 'ancients' ruleset and a ww1 era ruleset each with an example battle.

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
