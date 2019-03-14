import { html, PageViewElement, SharedStyles, connect, store, setActiveBattle, addSharedBattle, SHARED_BATTLE, ARMY_BOTH, addDeviceToList, addDevice, $battleDeviceStorageDefault as BattleDeviceStorage, $sharedBattleStorageDefault as SharedBattleStorage } from '../components/battle-sim.js';

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
        let battle = doc.data().battle;
        let sharedBattleIds = SharedBattleStorage.get;

        if (sharedBattleIds.indexOf(doc.id) === -1) {
          SharedBattleStorage.add({
            playingArmy: ARMY_BOTH,
            id: doc.id
          });
        }

        addDevice(doc.id, BattleDeviceStorage.get);
        battle.connectedDevices = addDeviceToList(battle.connectedDevices, BattleDeviceStorage.get);
        store.dispatch(addSharedBattle(doc.id, battle));
        store.dispatch(setActiveBattle({
          type: SHARED_BATTLE,
          id: doc.id
        }));
        this._message = `You have been added to ${battle.name}`;
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