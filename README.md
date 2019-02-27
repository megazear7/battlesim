# Battle Sim

> Computer managed historical combat for tabletop gaming.

### Development

`npm start`

###### TODO

1. Refactor code to have the following classes Battle, War, Rules, and Army instead of referencing the json directly. Better utilize the Terrain class as well.
1. Refactor models into /models
1. Refactor utils into /utils
1. Refactor game.js into /game
1. Get rid of anything that we are not using.
1. Make battles shareable.
1. Fully review the results of each action, how environment details affect the outcome, and how unit stats affect the outcome.
1. Event sourced data for step back in time or undoing actions.
1. Abstract out the game system from the interface. The game system would be a layer built underneath the rulesets. So the rulesets would be for a game system, a game system would implement the game itself. So for what we have done so far the game system would be something like "battlefield simulation", which does all of the yards, seconds, time tracking, etc... But we could have another game system which acts more like a game and less like a simulation. This would give us the flexibility to reuse the interface and the share battle functionality and such with other game systems.

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
On the battle page unshared battles will have the word "share" in grey text. Clicking it will bring up a confirmation dialog asking if they are sure that they want to share it. If they submit the dialog then we check if the Web Share API is available and if so we use it. Otherwise we will copy the battle url into the users clipboard and they will be notified that the shared battle url has been copied.
Shared battles on the war page will have blue shared text. Clicking this will again either open the Web Share API or copy the text to the clipboard, but this time with no confirmation dialog.

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
