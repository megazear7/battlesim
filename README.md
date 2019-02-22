# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Reference scenario rules by index.
1. Make battles shareable.
1. Update the app favicon.
1. Refactor code to have the following classes Battle, War, Rules, and Army instead of referencing the json directly. Better utilize the Terrain class as well.
1. Fully review the results of each action, how environment details affect the outcome, and how unit stats affect the outcome.
1. Update civil war army size to be regiment level.
1. Update civil war ruleset based on our practice games.
1. Event sourced data for step back in time or undoing actions.

###### Thoughts on shareable battles
When the user clicks the share button the battle gets saved into firestore.
It is given a unique url such as /battles/a9dm4
When a user goes to this url they are asked which army they are joining.
From this view the active battle is the one specified in the url.
If the user clicks the "War" tab they are presented with a question asking if they want to exit the battle.
Whichever army you are playing you can take units actions for that army.
When the active unit is for the other army you can see what is going on but do not get the buttons displayed.
As one player clicks buttons the other players screen should update and they should see everything other than the buttons.
Firestore should take care of all of this for us...
When you visit a shared battle url the browser should save this battle ID to local storage.
On the war page any links shared in local storage should be displayed like normal battles.
These shared battles should get an indicator saying that they are shared and that they require an internet connection to play.

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
