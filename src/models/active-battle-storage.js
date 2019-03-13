import { NO_BATTLE } from '../game.js';

const ACTIVE_BATTLE_STORAGE_ID = 'activeBattle';

export default class ActiveBattleStorage {
  static _getStorage() {
    const storageString = localStorage.getItem(ACTIVE_BATTLE_STORAGE_ID);

    try {
      return JSON.parse(storageString);
    } catch {
      return {};
    }
  }

  static get type() {
    const type = ActiveBattleStorage._getStorage().type;
    return  type !== undefined ? type : NO_BATTLE;
  }

  static get id() {
    return ActiveBattleStorage._getStorage().id;
  }

  static get get() {
    return ActiveBattleStorage._getStorage();
  }

  static set type(type) {
    ActiveBattleStorage.update(type, ActiveBattleStorage.id);
  }

  static set id(id) {
    ActiveBattleStorage.update(ActiveBattleStorage.type, id);
  }

  static set set({type = NO_BATTLE, id = ""}) {
    ActiveBattleStorage.update(type, id);
  }

  static update(type = NO_BATTLE, id = "") {
    localStorage.setItem(ACTIVE_BATTLE_STORAGE_ID, JSON.stringify({ type, id }));
  }
}
