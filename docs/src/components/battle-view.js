define(["exports","./battle-sim.js"],function(_exports,_battleSim){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$battleDefault=_exports.ButtonSharedStyles=_exports.fire=_exports.charge=_exports.move=_exports.rest=_exports.FIRE=_exports.CHARGE=_exports.MOVE=_exports.REST=_exports.repeat=_exports.$battle$1=_exports.$buttonSharedStyles=_exports.$battle=_exports.$repeat=void 0;const createAndInsertPart=(containerPart,beforePart)=>{const container=containerPart.startNode.parentNode,beforeNode=beforePart===void 0?containerPart.endNode:beforePart.startNode,startNode=container.insertBefore((0,_battleSim.createMarker)(),beforeNode);container.insertBefore((0,_battleSim.createMarker)(),beforeNode);const newPart=new _battleSim.NodePart(containerPart.options);newPart.insertAfterNode(startNode);return newPart},updatePart=(part,value)=>{part.setValue(value);part.commit();return part},insertPartBefore=(containerPart,part,ref)=>{const container=containerPart.startNode.parentNode,beforeNode=ref?ref.startNode:containerPart.endNode,endNode=part.endNode.nextSibling;if(endNode!==beforeNode){(0,_battleSim.reparentNodes)(container,part.startNode,endNode,beforeNode)}},removePart=part=>{(0,_battleSim.removeNodes)(part.startNode.parentNode,part.startNode,part.endNode.nextSibling)},generateMap=(list,start,end)=>{const map=new Map;for(let i=start;i<=end;i++){map.set(list[i],i)}return map},partListCache=new WeakMap,keyListCache=new WeakMap,repeat=(0,_battleSim.directive)((items,keyFnOrTemplate,template)=>{let keyFn;if(template===void 0){template=keyFnOrTemplate}else if(keyFnOrTemplate!==void 0){keyFn=keyFnOrTemplate}return containerPart=>{if(!(containerPart instanceof _battleSim.NodePart)){throw new Error("repeat can only be used in text bindings")}const oldParts=partListCache.get(containerPart)||[],oldKeys=keyListCache.get(containerPart)||[],newParts=[],newValues=[],newKeys=[];let index=0;for(const item of items){newKeys[index]=keyFn?keyFn(item,index):index;newValues[index]=template(item,index);index++}let newKeyToIndexMap,oldKeyToIndexMap,oldHead=0,oldTail=oldParts.length-1,newHead=0,newTail=newValues.length-1;while(oldHead<=oldTail&&newHead<=newTail){if(null===oldParts[oldHead]){oldHead++}else if(null===oldParts[oldTail]){oldTail--}else if(oldKeys[oldHead]===newKeys[newHead]){newParts[newHead]=updatePart(oldParts[oldHead],newValues[newHead]);oldHead++;newHead++}else if(oldKeys[oldTail]===newKeys[newTail]){newParts[newTail]=updatePart(oldParts[oldTail],newValues[newTail]);oldTail--;newTail--}else if(oldKeys[oldHead]===newKeys[newTail]){newParts[newTail]=updatePart(oldParts[oldHead],newValues[newTail]);insertPartBefore(containerPart,oldParts[oldHead],newParts[newTail+1]);oldHead++;newTail--}else if(oldKeys[oldTail]===newKeys[newHead]){newParts[newHead]=updatePart(oldParts[oldTail],newValues[newHead]);insertPartBefore(containerPart,oldParts[oldTail],oldParts[oldHead]);oldTail--;newHead++}else{if(newKeyToIndexMap===void 0){newKeyToIndexMap=generateMap(newKeys,newHead,newTail);oldKeyToIndexMap=generateMap(oldKeys,oldHead,oldTail)}if(!newKeyToIndexMap.has(oldKeys[oldHead])){removePart(oldParts[oldHead]);oldHead++}else if(!newKeyToIndexMap.has(oldKeys[oldTail])){removePart(oldParts[oldTail]);oldTail--}else{const oldIndex=oldKeyToIndexMap.get(newKeys[newHead]),oldPart=oldIndex!==void 0?oldParts[oldIndex]:null;if(null===oldPart){const newPart=createAndInsertPart(containerPart,oldParts[oldHead]);updatePart(newPart,newValues[newHead]);newParts[newHead]=newPart}else{newParts[newHead]=updatePart(oldPart,newValues[newHead]);insertPartBefore(containerPart,oldPart,oldParts[oldHead]);oldParts[oldIndex]=null}newHead++}}}while(newHead<=newTail){const newPart=createAndInsertPart(containerPart,newParts[newTail+1]);updatePart(newPart,newValues[newHead]);newParts[newHead++]=newPart}while(oldHead<=oldTail){const oldPart=oldParts[oldHead++];if(null!==oldPart){removePart(oldPart)}}partListCache.set(containerPart,newParts);keyListCache.set(containerPart,newKeys)}});_exports.repeat=repeat;var repeat$1={repeat:repeat};_exports.$repeat=repeat$1;const REST="REST";_exports.REST=REST;const MOVE="MOVE";_exports.MOVE=MOVE;const CHARGE="CHARGE";_exports.CHARGE=CHARGE;const FIRE="FIRE";_exports.FIRE=FIRE;const rest=()=>{return{type:REST}};_exports.rest=rest;const move=situation=>{return{type:MOVE,situation}};_exports.move=move;const charge=situation=>{return{type:CHARGE,situation}};_exports.charge=charge;const fire=situation=>{return{type:FIRE,situation}};_exports.fire=fire;var battle={REST:REST,MOVE:MOVE,CHARGE:CHARGE,FIRE:FIRE,rest:rest,move:move,charge:charge,fire:fire};_exports.$battle=battle;const INITIAL_STATE={activeUnit:0,armies:[{name:"Brittish"},{name:"Americans"}],units:[{army:0,name:"15th Regiment (East Yorkshire)",hp:100,speed:50,energy:100},{army:0,name:"16th Cavalry (The Queen's Lancers)",hp:100,speed:70,energy:100},{army:0,name:"9th Regiment (Royal Norfolk)",hp:40,speed:50,energy:100},{army:1,name:"3rd Regiment of Militia",hp:30,speed:60,energy:100},{army:1,name:"Bradley's Regiment",hp:80,speed:40,energy:100},{army:1,name:"Waterbury's Regiment",hp:30,speed:60,energy:100}]},battle$1=(state=INITIAL_STATE,action)=>{if(action.type===REST){var oldActiveUnit=state.activeUnit,newActiveUnit=oldActiveUnit>=state.units.length-1?0:oldActiveUnit+1,newState=babelHelpers.objectSpread({},state,{activeUnit:newActiveUnit});newState.units[oldActiveUnit].energy+=10;return babelHelpers.objectSpread({},state,{activeUnit:newActiveUnit})}else if(action.type===MOVE){var oldActiveUnit=state.activeUnit,newActiveUnit=oldActiveUnit>=state.units.length-1?0:oldActiveUnit+1,newState=babelHelpers.objectSpread({},state,{activeUnit:newActiveUnit});newState.units[oldActiveUnit].energy-=action.situation.distance;return newState}else if(action.type===CHARGE){var oldActiveUnit=state.activeUnit,newActiveUnit=oldActiveUnit>=state.units.length-1?0:oldActiveUnit+1,newState=babelHelpers.objectSpread({},state,{activeUnit:newActiveUnit});newState.units[oldActiveUnit].energy-=2*action.situation.distance;return newState}else if(action.type===FIRE){var oldActiveUnit=state.activeUnit,newActiveUnit=oldActiveUnit>=state.units.length-1?0:oldActiveUnit+1,newState=babelHelpers.objectSpread({},state,{activeUnit:newActiveUnit});newState.units[oldActiveUnit].energy-=10;return newState}else{return state}};_exports.$battleDefault=battle$1;var battle$2={default:battle$1};_exports.$battle$1=battle$2;const ButtonSharedStyles=_battleSim.css`
  button {
    font-family: inherit;
    font-size: 1rem;
    background: var(--app-white-color);
    cursor: pointer;
    padding: 1rem 2rem;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    border: 3px solid var(--app-primary-color);
    color: var(--app-dark-text-color);
    overflow: hidden;
    margin-top: 1rem;
  }

  button:hover, button:active {
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
  }
`;_exports.ButtonSharedStyles=ButtonSharedStyles;var buttonSharedStyles={ButtonSharedStyles:ButtonSharedStyles};_exports.$buttonSharedStyles=buttonSharedStyles;_battleSim.store.addReducers({battle:battle$1});class BattleView extends(0,_battleSim.connect)(_battleSim.store)(_battleSim.PageViewElement){static get properties(){return{_targets:{type:Object},_army:{type:Object},_activeUnit:{type:Object}}}static get styles(){return[_battleSim.SharedStyles,ButtonSharedStyles,_battleSim.css`
        #unit {
          text-align: center;
          font-size: 2rem;
        }
        #army {
          text-align: center;
          color: var(--app-muted-text-color);
        }
        #situation {
          margin-top: 1rem;
        }
      `]}render(){return _battleSim.html`
      <section>
        <div>
          <div id="unit">${this._activeUnit.name}</div>
          <div id="army">Army: ${this._army.name}</div>
          <div>HP: ${this._activeUnit.hp}</div>
          <div>Speed: ${this._activeUnit.speed}</div>
          <div>Energy: ${this._activeUnit.energy}</div>
        </div>
        <div id="situation">
          Distance:
          <input id="distance" type="number" placeholder="Distance"></input>
          <br>
          Target:
          <select id="target">
            <option></option>
            ${repeat(this._targets,target=>_battleSim.html`
              <option value="${target.id}">${target.unit.name}</option>
            `)}
          </select>
          <br>
          <input id="uphill" type="checkbox">Uphill</input>
          <br>
          <input id="terrain" type="checkbox">Difficult Terrain</input>
        </div>
        <div>
          <button @click="${this._rest}">Rest</button>
          <button @click="${this._move}">Move</button>
          <button @click="${this._charge}">Charge</button>
          <button @click="${this._fire}">Fire</button>
        </div>
      </section>
    `}get distance(){return this.shadowRoot.getElementById("distance").value}get uphill(){return"on"===this.shadowRoot.getElementById("uphill").value}get terrain(){return"on"===this.shadowRoot.getElementById("terrain").value}get target(){return this.shadowRoot.getElementById("target").value}get situation(){return{distance:this.distance,uphill:this.uphill,terrain:this.terrain,target:this.target}}_move(){_battleSim.store.dispatch(move(this.situation))}_charge(){_battleSim.store.dispatch(charge(this.situation))}_rest(){_battleSim.store.dispatch(rest())}_fire(){_battleSim.store.dispatch(fire(this.situation))}stateChanged(state){let targets=state.battle.units.map((unit,index)=>({id:index,unit:unit}));this._targets=targets.slice(0,state.battle.activeUnit).concat(targets.slice(state.battle.activeUnit+1,targets.length));this._activeUnit=state.battle.units[state.battle.activeUnit];this._army=state.battle.armies[this._activeUnit.army]}}window.customElements.define("battle-view",BattleView)});