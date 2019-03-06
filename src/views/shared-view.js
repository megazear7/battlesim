import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from '../styles/shared-styles.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { setActiveBattle, addSharedBattle } from '../actions/battle.js';
import { SHARED_BATTLE, ARMY_BOTH } from '../game.js';

class SharedView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _message: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles,
    ];
  }

  connectedCallback() {
    super.connectedCallback();

    firebase.firestore().collection('apps/battlesim/battles')
    .where('battle.uuid', '==', window.location.pathname.split('/')[2])
    .limit(1)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        let doc = querySnapshot.docs[0];
        let sharedBattleIds = JSON.parse(localStorage.getItem("sharedBattles")) || [];
        if (sharedBattleIds.indexOf(doc.id) === -1) {
          localStorage.setItem("sharedBattles", JSON.stringify([...sharedBattleIds, {
            playingArmy: ARMY_BOTH,
            id: doc.id
          } ]));
        }

        store.dispatch(addSharedBattle(doc.id, doc.data().battle));

        store.dispatch(setActiveBattle({
          type: SHARED_BATTLE,
          id: doc.id
        }));

        this._message = `You have been added to ${doc.data().battle.name}`
      } else {
        this._message = 'Could not join battle. That battle does not exist.';
      }
    });
  }

  render() {
    return html`
      <section>
        <p class="centered">${this._message}</p>
      </section>
    `;
  }
}

window.customElements.define('shared-view', SharedView);
