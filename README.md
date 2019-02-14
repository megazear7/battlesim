# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Make a way to do events. The main event that this would be used for is night time.
1. Make a way to add images to the rules.
1. Modify the casualty report to read like either "Both units recieved heavy casualties" or "<unit name> took heavy casualties while <other unit name> only took moderate casualties"
1. Come up with setup instructions using images for the Battle of bull run.
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
