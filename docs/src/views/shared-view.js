import { html, css, PageViewElement, SharedStyles, connect, store, setActiveBattle, SHARED_BATTLE } from '../components/battle-sim.js';

class SharedView extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _uuid: {
        type: String
      },
      _message: {
        type: String
      }
    };
  }

  static get styles() {
    return [SharedStyles, css`
      `];
  }

  constructor() {
    super();
    this.uuid = window.location.pathname.split('/')[2];
  }

  connectedCallback() {
    super.connectedCallback();
    firebase.firestore().collection('apps/battlesim/battles').where('battle.uuid', '==', this.uuid).limit(1).get().then(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        let doc = querySnapshot.docs[0];
        let sharedBattleIds = JSON.parse(localStorage.getItem("sharedBattles")) || [];

        if (sharedBattleIds.indexOf(doc.id) === -1) {
          localStorage.setItem("sharedBattles", JSON.stringify([...sharedBattleIds, doc.id]));
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

  stateChanged(state) {}

}

window.customElements.define('shared-view', SharedView);