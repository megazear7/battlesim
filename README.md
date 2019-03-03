# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Setup

Requires node version 11 or greater.

`npm install`

### Development

`npm start`

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

###### TODO

1. Make War view buttons similar to fight view
1. Auto start playing shared battle
1. Fix share API
1. Add auto copy url button for shared battles
1. Auto copy url after sharing battle
1. Don't display the protocol part of the url
1. Show loading battle message when the active battle is a shared battle and it is not yet available.
1. Allow players to choose an army for shared battles so that they can only take actions for that army.
1. Update the fight view to save data after each action so that all players can see the action results as it happens.
1. Fully review the results of each action, how environment details affect the outcome, and how unit stats affect the outcome.
1. Event sourced data for step back in time or undoing actions.


[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
