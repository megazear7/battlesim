import { html, PageViewElement, SharedStyles, connect, store, setActiveBattle, SHARED_BATTLE, ARMY_BOTH } from '../components/battle-sim.js';

class SharedView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _message: {
        type: String
      }
    };
  }

  static get styles() {
    return [SharedStyles];
  }

  connectedCallback() {
    super.connectedCallback();
    firebase.firestore().collection('apps/battlesim/battles').where('battle.uuid', '==', window.location.pathname.split('/')[2]).limit(1).get().then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        let doc = querySnapshot.docs[0];
        let sharedBattleIds = JSON.parse(localStorage.getItem("sharedBattles")) || [];

        if (sharedBattleIds.indexOf(doc.id) === -1) {
          localStorage.setItem("sharedBattles", JSON.stringify([...sharedBattleIds, {
            playingArmy: ARMY_BOTH,
            id: doc.id
          }]));
        }

        store.dispatch(setActiveBattle({
          type: SHARED_BATTLE,
          id: doc.id
        }));
        this._message = `You have been added to ${doc.data().battle.name}`;
      } else {
        this._message = 'Could not join battle. That battle does not exist.';
      }
    });
  }

  render() {
    return html`
      <section>
        <p>${this._message}</p>
      </section>
    `;
  }

}

window.customElements.define('shared-view', SharedView);