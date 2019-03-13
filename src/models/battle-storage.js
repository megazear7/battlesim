const BATTLES_STORAGE_ID = 'battles';

export default class BattleStorage {
  static _getStorage() {
    const storageString = localStorage.getItem(BATTLES_STORAGE_ID);

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
      BattleStorage.update([...battles, battle]);
    } else {
      console.error('Attempted to add malformed battle', battle);
    }
  }

  static set set(battles = []) {
    BattleStorage.update(battles);
  }

  static update(battles = []) {
    localStorage.setItem(BATTLES_STORAGE_ID, JSON.stringify(battles));
  }
}
