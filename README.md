# Battle Sim

> Mass combat simulation for tabletop gaming.

### TODO

1. Update icon at /images/swords.png to use the battlesim colors.
1. Make each size of this image and the ico image.
1. Update html to use this icon.

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
