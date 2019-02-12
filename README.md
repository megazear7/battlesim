# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Implement the combat algorithm and results.
1. Make a way to do events. The main event that this would be used for is night time.
1. Make a way to add images to the rules.
1. Make the battle of bull run historically accurate and come up with the setup instructions using images. We could also do a different battle if there is a better one to start with.
1. Make an 'ancients' ruleset and add a an example ancient battle.
1. Allow units to have a point cost and add a "usesPoints" flag to battles. If this flag is true then the battle page will display the point cost of each unit and the aggregate point cost of the army.
1. Update the mobile nav to be a bottom based navigation instead of a drawer.
1. Update the app favicon.
1. Show a different quality of status depending on the leadership of the unit.
1. Add more variability to the various descriptions. Try to carve up each 0-100 scale into as many descriptive ranges as possible.

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
