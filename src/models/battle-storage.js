const BATTLE_STORAGE_ID = 'battles';

export default class BattleStorage {
  static _getStorage() {
    const storageString = localStorage.getItem(BATTLE_STORAGE_ID);

    try {
      return JSON.parse(storageString);
    } catch {
      return [];
    }
  }

  static get get() {
    return BattleStorage._getStorage();
  }

  static add(battle) {
    if (battle) {
      BattleStorage.update([...BattleStorage.get, battle]);
    } else {
      console.error('Attempted to add malformed battle', battle);
    }
  }

  static set set(battles = []) {
    BattleStorage.update(battles);
  }

  static update(battles = []) {
    localStorage.setItem(BATTLE_STORAGE_ID, JSON.stringify(battles));
  }
}
