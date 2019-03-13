const SHARED_BATTLE_STORAGE_ID = 'sharedBattles';

export default class SharedBattleStorage {
  static _getStorage() {
    const storageString = localStorage.getItem(SHARED_BATTLE_STORAGE_ID);

    try {
      return JSON.parse(storageString);
    } catch {
      return [];
    }
  }

  static get get() {
    return SharedBattleStorage._getStorage();
  }

  static add(battle) {
    if (battle) {
      SharedBattleStorage.update([...SharedBattleStorage.get, battle]);
    } else {
      console.error('Attempted to add malformed battle', battle);
    }
  }

  static removeById(id) {
    SharedBattleStorage.update(SharedBattleStorage.get.filter(battle => battle.id !== id));
  }

  static set set(battles = []) {
    SharedBattleStorage.update(battles);
  }

  static update(battles = []) {
    localStorage.setItem(SHARED_BATTLE_STORAGE_ID, JSON.stringify(battles));
  }
}
