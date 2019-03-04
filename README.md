# Battle Sim

> Mass combat simulation for tabletop gaming.

### Setup

Requires Node.js version 11.0.0 or higher.

`npm install`

### Development

This will do a git commit in order to deploy to github pages.

`npm deploy`

### Deployment

```
npm run build
git add docs
git commit -m "Updated build"
git push origin master
```

### Technical Overview

1. LitElement for UI
1. Redux for state management
1. Local storage for local state persistence
1. Firestore for remote state persistence
1. Service worker for offline availability
1. Web manifest for making it installable as an app

###### TODO

1. Show loading battle message when the active battle is a shared battle and it is not yet available.
1. Allow players to choose an army for shared battles so that they can only take actions for that army.
1. Update the fight view to save data after each action so that all players can see the action results as it happens.
1. Fully review the results of each action, how environment details affect the outcome, and how unit stats affect the outcome.
