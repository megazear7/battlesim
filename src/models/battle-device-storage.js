const BATTLE_DEVICE_STORAGE_ID = 'battlesimDevice';

export default class BattleDeviceStorage {
  static _getStorage() {
    const storageString = localStorage.getItem(BATTLE_DEVICE_STORAGE_ID);

    try {
      return JSON.parse(storageString);
    } catch {
      return {};
    }
  }

  static get displayName() {
    const displayName = BattleDeviceStorage._getStorage().displayName;
    return  displayName !== undefined ? displayName : NO_BATTLE;
  }

  static get id() {
    return BattleDeviceStorage._getStorage().id;
  }

  static get get() {
    return BattleDeviceStorage._getStorage();
  }

  static set displayName(displayName) {
    BattleDeviceStorage.update(displayName, BattleDeviceStorage.id);
  }

  static set id(id) {
    BattleDeviceStorage.update(BattleDeviceStorage.displayName, id);
  }

  static set set({displayName = "", id = ""}) {
    BattleDeviceStorage.update(displayName, id);
  }

  static update(displayName = "", id = makeid(10)) {
    localStorage.setItem(BATTLE_DEVICE_STORAGE_ID, JSON.stringify({ displayName, id }));
  }
}
