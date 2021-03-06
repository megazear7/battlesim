import { makeid } from '../utils/math-utils.js';

const BATTLE_DEVICE_STORAGE_ID = 'battlesimDevice';

export default class BattleDeviceStorage {
  static get _empty() {
    return {
      id: makeid(10),
      displayName: ''
    }
  }

  static _getStorage() {
    const storageString = localStorage.getItem(BATTLE_DEVICE_STORAGE_ID);
    let battleDevice;

    try {
      let parsedStorage = JSON.parse(storageString);
      if (parsedStorage && parsedStorage.id && parsedStorage.displayName != undefined) {
        battleDevice = parsedStorage;
      } else {
        battleDevice = BattleDeviceStorage._empty;
        localStorage.setItem(BATTLE_DEVICE_STORAGE_ID, JSON.stringify(battleDevice));
      }
    } catch (e) {
      battleDevice = BattleDeviceStorage._empty;
      localStorage.setItem(BATTLE_DEVICE_STORAGE_ID, JSON.stringify(battleDevice));
    }

    return battleDevice;
  }

  static get displayName() {
    const displayName = BattleDeviceStorage._getStorage().displayName;
    return  displayName !== undefined ? displayName : "";
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

  static set set({displayName, id}) {
    BattleDeviceStorage.update(displayName, id);
  }

  static update(displayName = "", id) {
    if (id === undefined) id = BattleDeviceStorage.id;
    localStorage.setItem(BATTLE_DEVICE_STORAGE_ID, JSON.stringify({ displayName, id }));
  }
}
