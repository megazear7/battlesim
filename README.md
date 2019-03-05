# Battle Sim

> Mass combat simulation for tabletop gaming.

### Setup

Requires Node.js version 11.0.0 or higher.

`npm install`

### Development

`npm start`

### Deployment

This will do a git commit of the docs folder and a push in order to deploy to github pages.

```
npm run deploy
```

### Technical Overview

1. LitElement for UI
1. Redux for state management
1. Firestore for remote state persistence
1. Local storage for local state persistence
1. Service worker for offline availability
1. Web manifest for for installability

###### TODO

1. Auto add shared battle to redux in the /shared url
1. /shared url is not working from github hosting
1. When no battle exists the "battle loading" message appears instead of the "no battle selected" message.
1. Somehow add redirects from /war to the index.html so absolute urls work from github hosting.
1. Fully review the results of each action, how environment details affect the outcome, and how unit stats affect the outcome.
