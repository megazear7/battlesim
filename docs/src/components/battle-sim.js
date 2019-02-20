define(["exports","meta","require"],function(_exports,meta,_require){/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';Object.defineProperty(_exports,"__esModule",{value:true});_exports.mixinBehaviors=mixinBehaviors;_exports.register=register;_exports.dumpRegistrations=dumpRegistrations;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register$1=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=_prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=_get;_exports.set=_set;_exports.flush$2=flush;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.resolveUrl=_resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.templatize=_templatize;_exports.modelForElement=_modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=_getComputedStyleValue;_exports.detectMixin=_detectMixin;_exports.parse=parse;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.findMatchingParen=findMatchingParen;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.splitSelectorList=splitSelectorList;_exports.getCssBuild=getCssBuild;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.getBuildComment=getBuildComment;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.property$1=_exports.property=property;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.createStore=createStore;_exports.combineReducers=combineReducers;_exports.bindActionCreators=bindActionCreators;_exports.applyMiddleware=applyMiddleware;_exports.compose=compose;_exports.$ponyfillDefault=symbolObservablePonyfill;_exports.combat=combat;_exports.statModFor=statModFor;_exports.weightedRandom=weightedRandom;_exports.modVolume=modVolume;_exports.weightedAverage=weightedAverage;_exports.randomMinutesBetween=randomMinutesBetween;_exports.weightedRandomTowards=weightedRandomTowards;_exports.randomBellMod=randomBellMod;_exports.getRandomInt=getRandomInt;_exports.numberWithCommas=numberWithCommas;_exports.nearest100=nearest100;_exports.msSinceMidnight=msSinceMidnight;_exports.prettyDateTime=prettyDateTime;_exports.upperCaseFirst=upperCaseFirst;_exports.$battle$1=_exports.$app$1=_exports.$mathUtils=_exports.$game=_exports.$encounter=_exports.$sharedStyles=_exports.$pageViewElement=_exports.$myIcons=_exports.$buttonSharedStyles=_exports.$combatant=_exports.$civilWarUnits=_exports.$battleUtils=_exports.$battleTemplates=_exports.$armor=_exports.$battle=_exports.$app=_exports.$actingUnit=_exports.$ponyfill=_exports.$index$1=_exports.$redux=_exports.$index=_exports.$router=_exports.$network=_exports.$metadata=_exports.$mediaQuery=_exports.$lazyReducerEnhancer=_exports.$connectMixin=_exports.$litHtml=_exports.$template=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$modifyTemplate=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$repeat=_exports.$classMap=_exports.$litElement=_exports.$updatingElement=_exports.$decorators=_exports.$cssTag=_exports.$unscopedStyleHandler=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$templatize=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$helpers=_exports.$appScrollEffectsBehavior=_exports.$appLayoutBehavior=void 0;_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.Base=_exports.PolymerElement=_exports.TemplateInstanceBase=_exports.setAllowTemplateFromDomModule=_exports.allowTemplateFromDomModule=_exports.setStrictTemplatePolicy=_exports.strictTemplatePolicy=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$3=_exports.html$2=_exports.html$1=_exports.remove$1=_exports.add$1=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.registrations=_exports.instanceCount=_exports.ElementMixin=_exports.version$1=_exports.version=_exports.DirMixin=_exports.Templatizer=_exports.dom=_exports.EventApi=_exports.DomApi=_exports.matchesSelector=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.flush$1=_exports.flush=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.scroll=_exports.queryAllRoot=_exports.registerEffect=_exports.scrollTimingFunction=_exports._scrollTimer=_exports._scrollEffects=_exports.AppScrollEffectsBehavior=_exports.AppLayoutBehavior=_exports.$weapons=_exports.$units=_exports.$unit=_exports.$terrain=_exports.$stringUtils=_exports.$store=void 0;_exports.connect=_exports.lastAttributeNameRegex=_exports.createMarker$1=_exports.createMarker=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.Template$1=_exports.Template=_exports.boundAttributeSuffix=_exports.markerRegex=_exports.nodeMarker=_exports.marker=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.templateCaches$1=_exports.templateCaches=_exports.render$1=_exports.render$2=_exports.render=_exports.parts$1=_exports.parts=_exports.EventPart$1=_exports.EventPart=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.NodePart$1=_exports.NodePart=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.isPrimitive$1=_exports.isPrimitive=_exports.nothing$1=_exports.nothing=_exports.noChange$1=_exports.noChange=_exports.removeNodes$1=_exports.removeNodes=_exports.reparentNodes$1=_exports.reparentNodes=_exports.isCEPolyfill=_exports.isDirective$1=_exports.isDirective=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.repeat=_exports.classMap=_exports.LitElement=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.html$5=_exports.html$4=_exports.html=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.notEqual$1=_exports.notEqual=_exports.defaultConverter$1=_exports.defaultConverter=_exports.eventOptions$1=_exports.eventOptions=_exports.queryAll$1=_exports.queryAll=_exports.query$1=_exports.query=_exports.customElement$1=_exports.customElement=_exports.css=_exports.css$1=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.CSSResult$1=_exports.CSSResult=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.scopingAttribute=_exports.$templateMapDefault=_exports.wrap=_exports.nativeCssVariables=_exports.disableRuntime=_exports.cssBuild=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=void 0;_exports.MELEE_WEAPON=_exports.ARTILLERY_TROOP=_exports.CAVALRY_TROOP=_exports.FOOT_TROOP=_exports.$unitDefault=_exports.CIVIL_WAR_TERRAIN=_exports.Terrain=_exports.MAX_TERRAIN=_exports.SLOPE_NONE=_exports.SLOPE_DOWN=_exports.SLOPE_UP=_exports.store=_exports.$battleDefault=_exports.$appDefault=_exports.SECONDS_IN_AN_HOUR=_exports.SECONDS_IN_AN_MINUTE=_exports.YARDS_TO_FIGHT=_exports.MAX_EQUIPMENT_WEIGHT=_exports.DEADLYNESS=_exports.MAX_STAT=_exports.YARDS_PER_INCH=_exports.SECONDS_PER_ROUND=_exports.SECONDS_PER_PLAYER_TURN=_exports.MINUTES_PER_TURN=_exports.SECONDS_PER_TURN=_exports.$encounterDefault=_exports.RANGED=_exports.MELEE=_exports.SharedStyles=_exports.PageViewElement=_exports.plusIcon=_exports.minusIcon=_exports.removeFromCartIcon=_exports.addToCartIcon=_exports.menuIcon=_exports.ButtonSharedStyles=_exports.$combatantDefault=_exports.CIVIL_WAR_UNITS=_exports.FRESH_CONFEDERATE_ARTILLERY=_exports.FRESH_CONFEDERATE_CAVALRY_REGIMENT=_exports.FRESH_CONFEDERATE_BRIGADE=_exports.FRESH_UNION_ARTILLERY=_exports.FRESH_UNION_CAVALRY_REGIMENT=_exports.FRESH_UNION_BRIGADE=_exports.$battleTemplatesDefault=_exports.ARMOR=_exports.STEEL_COMPLETE_PLATEMAIL=_exports.STEEL_PARTIAL_PLATEMAIL=_exports.STEEL_COMPLETE_CHAINMAIL=_exports.STEEL_PARTIAL_CHAINMAIL=_exports.STEEL_COMPLETE_SCALEMAIL=_exports.STEEL_PARTIAL_SCALEMAIL=_exports.IRON_COMPLETE_PLATEMAIL=_exports.IRON_PARTIAL_PLATEMAIL=_exports.IRON_COMPLETE_CHAINMAIL=_exports.IRON_PARTIAL_CHAINMAIL=_exports.IRON_COMPLETE_SCALEMAIL=_exports.IRON_PARTIAL_SCALEMAIL=_exports.BRONZE_COMPLETE_PLATEMAIL=_exports.BRONZE_PARTIAL_PLATEMAIL=_exports.BRONZE_COMPLETE_CHAINMAIL=_exports.BRONZE_PARTIAL_CHAINMAIL=_exports.BRONZE_COMPLETE_SCALEMAIL=_exports.BRONZE_PARTIAL_SCALEMAIL=_exports.THICK_GAMBESON=_exports.STANDARD_GAMBESON=_exports.THIN_GAMBESON=_exports.NO_ARMOR=_exports.removeBattle=_exports.setActiveBattle=_exports.createNewBattle=_exports.remove=_exports.add=_exports.takeAction=_exports.REMOVE_BATTLE=_exports.SET_ACTIVE_BATTLE=_exports.CREATE_NEW_BATTLE=_exports.REMOVE=_exports.ADD=_exports.TAKE_ACTION=_exports.updateDrawerState=_exports.updateOffline=_exports.showSnackbar=_exports.navigate=_exports.CLOSE_SNACKBAR=_exports.OPEN_SNACKBAR=_exports.UPDATE_DRAWER_STATE=_exports.UPDATE_OFFLINE=_exports.UPDATE_PAGE=_exports.ActingUnit=_exports.MORALE_FAILURE=_exports.MORALE_SUCCESS=_exports.$indexDefault$1=_exports.__DO_NOT_USE__ActionTypes=_exports.$indexDefault=_exports.installRouter=_exports.installOfflineWatcher=_exports.updateMetadata=_exports.installMediaQueryWatcher=_exports.lazyReducerEnhancer=void 0;_exports.WEAPONS=_exports.POWER_VS_MOUNTED=_exports.POWER_VS_FOOT=_exports.LEE_ENFIELD_303=_exports.CANNON_24_POUNDER_CIVIL_WAR=_exports.CANNON_12_POUNDER_CIVIL_WAR=_exports.CANNON_6_POUNDER_CIVIL_WAR=_exports.SPRINGFIELD_RIFLED_MUSKET=_exports.CONFEDERATE_SMOOTH_BORE=_exports.BROWN_BESS_SMOOTH_BORE=_exports.BAYONETE=_exports.LONGBOW=_exports.PIKE=_exports.SPEAR=_exports.SWORD=_exports.NO_WEAPON=_exports.RANGED_WEAPON=void 0;meta=babelHelpers.interopRequireWildcard(meta);_require=babelHelpers.interopRequireWildcard(_require);var _NO_WEAPON,_SWORD,_SPEAR,_PIKE,_LONGBOW,_BAYONETE,_BROWN_BESS_SMOOTH_BO,_CONFEDERATE_SMOOTH_B,_SPRINGFIELD_RIFLED_M,_CANNON_6_POUNDER_CIV,_CANNON_12_POUNDER_CI,_CANNON_24_POUNDER_CI,_LEE_ENFIELD_,_WEAPONS,_ARMOR,_FRESH_UNION_BRIGADE,_FRESH_UNION_CAVALRY_,_FRESH_UNION_ARTILLER,_FRESH_CONFEDERATE_BR,_FRESH_CONFEDERATE_CA,_FRESH_CONFEDERATE_AR;function _templateObject15_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 600px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 2rem;\n    font-weight: 500;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  h3 {\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n\n  h4 {\n    font-size: 1.25rem;\n    font-weight: 400;\n  }\n\n  h5 {\n    font-size: 1.125rem;\n    font-weight: 400;\n    margin: 1rem 0 0.5rem 0;\n  }\n\n  h6 {\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: grey;\n    margin: 1rem 0 0.5rem 0;\n  }\n\n  p {\n    font-size: 1rem;\n    line-height: 1.75rem;\n  }\n\n  small {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n\n  hr {\n    border: 0.5px solid var(--app-secondary-color);\n  }\n\n  .error {\n    color: orange;\n    font-weight: 600;\n  }\n\n  input[type=\"text\"], input[type=\"number\"] {\n    padding: 1rem;\n    border: none;\n    width: 100%;\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n\n  select {\n    -webkit-appearance: none;\n    background: white;\n    width: 100%;\n    border-radius: 0;\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ccc;\n    padding: 1rem;\n  }\n\n  input[type=\"checkbox\"] {\n    margin-bottom: 1rem;\n  }\n\n  radiogroup {\n  }\n\n  radio {\n    -webkit-appearance: radio;\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n\n  .hidden {\n    display: none !important;\n  }\n\n  .muted {\n    color: var(--app-muted-text-color);\n  }\n\n  .centered {\n    text-align: center;\n  }\n"]);_templateObject15_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject15_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject14_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n  button {\n    font-family: inherit;\n    font-size: 1rem;\n    background: var(--app-white-color);\n    cursor: pointer;\n    padding: 1rem 2rem;\n    display: inline-block;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    outline: none;\n    position: relative;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n    border: 3px solid var(--app-primary-color);\n    color: var(--app-dark-text-color);\n    overflow: hidden;\n    margin: 1rem 0;\n  }\n\n  .selected, button:hover {\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n  }\n\n  .btn-link {\n    border: 0;\n    margin-top: 0;\n    padding: 0;\n    font-weight: 400;\n  }\n\n  .btn-link:hover {\n    background: none;\n    border: 0;\n    color: var(--app-primary-color);\n  }\n\n  button:disabled {\n    cursor: unset;\n    border-color: grey;\n    color: grey;\n    background: none;\n  }\n\n  button:disabled:hover {\n    background: none;\n    border-color: grey;\n    color: grey;\n  }\n"]);_templateObject14_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject14_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject13_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          display: block;\n\n          --app-drawer-width: 256px;\n\n          --app-primary-color: #E91E63;\n          --app-secondary-color: #293237;\n          --app-grey-color: #c1c1c1;\n          --app-grey-color: #fff;\n          --app-dark-text-color: var(--app-secondary-color);\n          --app-muted-text-color: #919191;\n          --app-light-text-color: white;\n          --app-section-even-color: #f7f7f7;\n          --app-section-odd-color: white;\n\n          --app-header-background-color: white;\n          --app-header-text-color: var(--app-dark-text-color);\n          --app-header-selected-color: var(--app-primary-color);\n\n          --app-drawer-background-color: var(--app-secondary-color);\n          --app-drawer-text-color: var(--app-light-text-color);\n          --app-drawer-selected-color: #78909C;\n        }\n\n        app-header {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          text-align: center;\n          background-color: var(--app-header-background-color);\n          color: var(--app-header-text-color);\n          border-bottom: 1px solid #eee;\n          z-index: 1;\n        }\n\n        app-drawer {\n          z-index: 1;\n        }\n\n        .toolbar-top {\n          background-color: var(--app-header-background-color);\n        }\n\n        [main-title] {\n          /*font-family: 'Pacifico';\n          text-transform: lowercase;*/\n          font-size: 2rem;\n          /* In the narrow layout, the toolbar is offset by the width of the\n          drawer button, and the text looks not centered. Add a padding to\n          match that button */\n          padding-right: 44px;\n          text-overflow: wrap;\n          white-space: nowrap;\n        }\n\n        h1 {\n          font-size: 1.25rem;\n        }\n\n        .toolbar-list {\n          display: none;\n        }\n\n        .toolbar-list > a {\n          display: inline-block;\n          color: var(--app-header-text-color);\n          text-decoration: none;\n          line-height: 30px;\n          padding: 4px 24px;\n        }\n\n        .toolbar-list > a[selected] {\n          color: var(--app-header-selected-color);\n          border-bottom: 4px solid var(--app-header-selected-color);\n        }\n\n        .menu-btn {\n          background: none;\n          border: none;\n          fill: var(--app-header-text-color);\n          cursor: pointer;\n          height: 44px;\n          width: 44px;\n        }\n\n        .drawer-list {\n          box-sizing: border-box;\n          width: 100%;\n          height: 100%;\n          padding: 24px;\n          background: var(--app-drawer-background-color);\n          position: relative;\n        }\n\n        .drawer-list > a {\n          display: block;\n          text-decoration: none;\n          color: var(--app-drawer-text-color);\n          line-height: 40px;\n          padding: 0 24px;\n        }\n\n        .drawer-list > a[selected] {\n          color: var(--app-drawer-selected-color);\n        }\n\n        /* Workaround for IE11 displaying <main> as inline */\n        main {\n          display: block;\n        }\n\n        .main-content {\n          padding-top: 64px;\n          min-height: 100vh;\n        }\n\n        .page {\n          display: none;\n        }\n\n        .page[active] {\n          display: block;\n        }\n\n        footer {\n          padding: 24px;\n          background: var(--app-drawer-background-color);\n          color: var(--app-drawer-text-color);\n          text-align: center;\n        }\n\n        /* Wide layout: when the viewport width is bigger than 460px, layout\n        changes to a wide layout */\n        @media (min-width: 460px) {\n          .toolbar-list {\n            display: block;\n          }\n\n          .menu-btn {\n            display: none;\n          }\n\n          .main-content {\n            padding-top: 107px;\n          }\n\n          /* The drawer button isn't shown in the wide layout, so we don't\n          need to offset the title */\n          [main-title] {\n            padding-right: 0px;\n          }\n        }\n      "]);_templateObject13_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject13_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject12_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <app-header condenses reveals effects=\"waterfall\">\n        <app-toolbar class=\"toolbar-top\">\n          <button class=\"menu-btn\" title=\"Menu\" @click=\"","\">","</button>\n          <div main-title>","</div>\n        </app-toolbar>\n\n        <nav class=\"toolbar-list\">\n          <a ?selected=\"","\" href=\"/war\">War</a>\n          <a ?selected=\"","\" href=\"/battle\">Battle</a>\n          <a ?selected=\"","\" href=\"/fight\">Fight</a>\n          <a ?selected=\"","\" href=\"/rules\">Rules</a>\n        </nav>\n      </app-header>\n\n      <app-drawer\n          .opened=\"","\"\n          @opened-changed=\"","\">\n        <nav class=\"drawer-list\">\n          <a ?selected=\"","\" href=\"/war\">War</a>\n          <a ?selected=\"","\" href=\"/battle\">Battle</a>\n          <a ?selected=\"","\" href=\"/fight\">Fight</a>\n          <a ?selected=\"","\" href=\"/rules\">Rules</a>\n        </nav>\n      </app-drawer>\n\n      <main role=\"main\" class=\"main-content\">\n        <war-view class=\"page\" ?active=\"","\"></war-view>\n        <battle-view class=\"page\" ?active=\"","\"></battle-view>\n        <fight-view class=\"page\" ?active=\"","\"></fight-view>\n        <rules-view class=\"page\" ?active=\"","\"></rules-view>\n        <view-404 class=\"page\" ?active=\"","\"></view-404>\n      </main>\n\n      <footer>\n        <h1>","</h1>\n        <p>Computer managed historical combat for tabletop gaming.</p>\n      </footer>\n\n      <snack-bar ?active=\"","\">\n        You are now ",".\n      </snack-bar>\n    "]);_templateObject12_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject12_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject11_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          display: block;\n          position: fixed;\n          top: 100%;\n          left: 0;\n          right: 0;\n          padding: 12px;\n          background-color: var(--app-secondary-color);\n          color: white;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n          text-align: center;\n          will-change: transform;\n          transform: translate3d(0, 0, 0);\n          transition-property: visibility, transform;\n          transition-duration: 0.2s;\n          visibility: hidden;\n        }\n\n        :host([active]) {\n          visibility: visible;\n          transform: translate3d(0, -100%, 0);\n        }\n\n        @media (min-width: 460px) {\n          :host {\n            width: 320px;\n            margin: auto;\n          }\n        }\n      "]);_templateObject11_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject11_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject10_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <slot></slot>\n    "]);_templateObject10_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject10_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject9_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/></svg>"]);_templateObject9_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject9_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject8_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/></svg>"]);_templateObject8_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject8_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject7_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>"]);_templateObject7_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject7_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject6_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0zm18.31 6l-2.76 5z\" fill=\"none\"/><path id=\"cart-path\" d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"/></svg>"]);_templateObject6_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject6_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject5_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></svg>"]);_templateObject5_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject5_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject4_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject4_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject4_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject3_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: \"\";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id=\"contentContainer\">\n      <slot id=\"slot\"></slot>\n    </div>\n"]);_templateObject3_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject3_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject2_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);_templateObject2_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject2_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}function _templateObject_b2bf582034ff11e98da2ddcf125ddb9c(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>"]);_templateObject_b2bf582034ff11e98da2ddcf125ddb9c=function _templateObject_b2bf582034ff11e98da2ddcf125ddb9c(){return data;};return data;}var nativeShadow=!(window['ShadyDOM']&&window['ShadyDOM']['inUse']);_exports.nativeShadow=nativeShadow;var nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings['shimcssproperties']){nativeCssVariables_=false;}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports('box-shadow','0 0 0 var(--foo)'));}}/** @type {string | undefined} */var cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==undefined){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild;}/** @type {boolean} */var disableRuntime=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==undefined){nativeCssVariables_=window.ShadyCSS.nativeCss;}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=undefined;}else{calcCssVariables(window['WebComponents']&&window['WebComponents']['flags']);}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild;},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;'use strict';/** @unrestricted */var StyleNode=function StyleNode(){babelHelpers.classCallCheck(this,StyleNode);/** @type {number} */this['start']=0;/** @type {number} */this['end']=0;/** @type {StyleNode} */this['previous']=null;/** @type {StyleNode} */this['parent']=null;/** @type {Array<StyleNode>} */this['rules']=null;/** @type {string} */this['parsedCssText']='';/** @type {string} */this['cssText']='';/** @type {boolean} */this['atRule']=false;/** @type {number} */this['type']=0;/** @type {string} */this['keyframesName']='';/** @type {string} */this['selector']='';/** @type {string} */this['parsedSelector']='';};/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text);}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,'').replace(RX.port,'');}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */function lex(text){var root=new StyleNode();root['start']=0;root['end']=text.length;var n=root;for(var i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n['rules']){n['rules']=[];}var _p=n;var previous=_p['rules'][_p['rules'].length-1]||null;n=new StyleNode();n['start']=i+1;n['parent']=_p;n['previous']=previous;_p['rules'].push(n);}else if(text[i]===CLOSE_BRACE){n['end']=i+1;n=n['parent']||root;}}return root;}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */function parseCss(node,text){var t=text.substring(node['start'],node['end']-1);node['parsedCssText']=node['cssText']=t.trim();if(node['parent']){var ss=node['previous']?node['previous']['end']:node['parent']['start'];t=text.substring(ss,node['start']-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces,' ');// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(';')+1);var s=node['parsedSelector']=node['selector']=t.trim();node['atRule']=s.indexOf(AT_START)===0;// note, support a subset of rule types...
if(node['atRule']){if(s.indexOf(MEDIA_START)===0){node['type']=types.MEDIA_RULE;}else if(s.match(RX.keyframesRule)){node['type']=types.KEYFRAMES_RULE;node['keyframesName']=node['selector'].split(RX.multipleSpaces).pop();}}else{if(s.indexOf(VAR_START)===0){node['type']=types.MIXIN_RULE;}else{node['type']=types.STYLE_RULE;}}}var r$=node['rules'];if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text);}}return node;}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code='0'+code;}return'\\'+code;});}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';// calc rule cssText
var cssText='';if(node['cssText']||node['rules']){var r$=node['rules'];if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText);}}else{cssText=preserveProperties?node['cssText']:removeCustomProps(node['cssText']);cssText=cssText.trim();if(cssText){cssText='  '+cssText+'\n';}}}// emit rule if there is cssText
if(cssText){if(node['selector']){text+=node['selector']+' '+OPEN_BRACE+'\n';}text+=cssText;if(node['selector']){text+=CLOSE_BRACE+'\n\n';}}return text;}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return Boolean(r)&&Boolean(r['selector'])&&r['selector'].indexOf(VAR_START)===0;}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText);}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,'').replace(RX.mixinProp,'');}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,'').replace(RX.varApply,'');}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1000};_exports.types=types;var OPEN_BRACE='{';var CLOSE_BRACE='}';// helper regexp's
var RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g};var VAR_START='--';var MEDIA_START='@media';var AT_START='@';var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$cssParse=cssParse;var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;var VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;var ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;var MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;var IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;var BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;var HOST_PREFIX='(?:^|[^.#[:])';_exports.HOST_PREFIX=HOST_PREFIX;var HOST_SUFFIX='($|[.:[\\s>+~])';_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;'use strict';/** @type {!Set<string>} */var styleTextSet=new Set();var scopingAttribute='shady-unscoped';/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=style.cloneNode(true);document.head.appendChild(newStyle);}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute);}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;'use strict';function toCssText(rules,callback){if(!rules){return'';}if(typeof rules==='string'){rules=parse(rules);}if(callback){forEachRule(rules,callback);}return stringify(rules,nativeCssVariables);}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style['__cssRules']&&style.textContent){style['__cssRules']=parse(style.textContent);}return style['__cssRules']||null;}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return Boolean(rule['parent'])&&rule['parent']['type']===types.KEYFRAMES_RULE;}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return;}var skipRules=false;var type=node['type'];if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node['selector'].match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=true;}}}}if(type===types.STYLE_RULE){styleRuleCallback(node);}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node);}else if(type===types.MIXIN_RULE){skipRules=true;}var r$=node['rules'];if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules);}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){var style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style;}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){var style=/** @type {HTMLStyleElement} */document.createElement('style');if(moniker){style.setAttribute('scope',moniker);}style.textContent=cssText;return style;}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */var lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){var placeHolder=document.createComment(' Shady DOM styles for '+moniker+' ');var after=lastHeadApplyNode?lastHeadApplyNode['nextSibling']:null;var scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder;}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;var after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style;}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
var position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style;}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?buildType==='shadow':buildType==='shady';}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){var level=0;for(var i=start,l=text.length;i<l;i++){if(text[i]==='('){level++;}else if(text[i]===')'){if(--level===0){return i;}}}return-1;}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf('var(');if(start===-1){// no var?, everything is prefix
return callback(str,'','','');}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3);var inner=str.substring(start+4,end);var prefix=str.substring(0,start);// suffix may have other variables
var suffix=processVariableAndFallback(str.substring(end+1),callback);var comma=inner.indexOf(',');// value and fallback args should be trimmed to match in property lookup
if(comma===-1){// variable, no fallback
return callback(prefix,inner.trim(),'',suffix);}// var(${value},${fallback})
var value=inner.substring(0,comma).trim();var fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix);}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute('class',value);}else{window['ShadyDOM']['nativeMethods']['setAttribute'].call(element,'class',value);}}/**
   * @type {function(*):*}
   */var wrap=window['ShadyDOM']&&window['ShadyDOM']['wrap']||function(node){return node;};/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap=wrap;function getIsExtends(element){var localName=element['localName'];var is='',typeExtension='';/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(localName.indexOf('-')>-1){is=localName;}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute('is')||'';}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends;}return{is:is,typeExtension:typeExtension};}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */var styleTextParts=[];var styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll('style');for(var i=0;i<styles.length;i++){var _style=styles[i];if(isUnscopedStyle(_style)){if(!nativeShadow){processUnscopedStyle(_style);_style.parentNode.removeChild(_style);}}else{styleTextParts.push(_style.textContent);_style.parentNode.removeChild(_style);}}return styleTextParts.join('').trim();}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){var parts=[];var part='';for(var i=0;i>=0&&i<selector.length;i++){// A selector with parentheses will be one complete part
if(selector[i]==='('){// find the matching paren
var end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end;}else if(selector[i]===','){parts.push(part);part='';}else{part+=selector[i];}}// catch any pieces after the last comma
if(part){parts.push(part);}return parts;}var CSS_BUILD_ATTR='css-build';/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==undefined){return(/** @type {string} */cssBuild);}if(element.__cssBuild===undefined){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue;}else{var buildComment=getBuildComment(element);if(buildComment!==''){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element);}element.__cssBuild=buildComment;}}return element.__cssBuild||'';}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return getCssBuild(element)!=='';}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment=element.localName==='template'?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(babelHelpers.instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(':');if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1];}}return'';}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(){var cssBuild$$1=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';// CSS custom property shim always requires work
if(cssBuild$$1===''||!nativeCssVariables){return false;}return nativeShadow?cssBuild$$1==='shadow':cssBuild$$1==='shady';}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment=element.localName==='template'?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment);}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;'use strict';function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(_p2===null){element.style.removeProperty(_p2);}else{element.style.setProperty(_p2,properties[_p2]);}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
   * @const {string}
   */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return'';}else{return value.trim();}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has;}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:_getComputedStyleValue,detectMixin:_detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;'use strict';var APPLY_NAME_CLEAN=/;\s*/m;var INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/;var IMPORTANT=/\s*!important/;// separator used between mixin-name and mixin-property-name when producing properties
// NOTE: plain '-' may cause collisions in user styles
var MIXIN_VAR_SEP='_-_';/**
                              * @typedef {!Object<string, string>}
                              */var PropertyEntry;// eslint-disable-line no-unused-vars
/**
 * @typedef {!Object<string, boolean>}
 */var DependantsEntry;// eslint-disable-line no-unused-vars
/** @typedef {{
 *    properties: PropertyEntry,
 *    dependants: DependantsEntry
 * }}
 */var MixinMapEntry;// eslint-disable-line no-unused-vars
// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
var MixinMap=/*#__PURE__*/function(){function MixinMap(){babelHelpers.classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={};}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */babelHelpers.createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}};}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null;}}]);return MixinMap;}();/**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */var invalidCallback=null;/** @unrestricted */var ApplyShim=/*#__PURE__*/function(){function ApplyShim(){babelHelpers.classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap();}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */babelHelpers.createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText);}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var _style2=/** @type {!HTMLStyleElement} */document.createElement('style');_style2.textContent=styleText;template.content.insertBefore(_style2,template.content.firstChild);return _style2;}return null;}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===undefined){template._gatheredStyle=this.gatherStyles(template);}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null;}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast;}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this;var ast=rulesForStyle(style);forEachRule(ast,function(rule){if(rule['selector']===':root'){rule['selector']='html';}_this.transformRule(rule);});style.textContent=toCssText(ast);return ast;}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r);});this._currentElement=null;}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule['cssText']=this.transformCssText(rule['parsedCssText'],rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(rule['selector']===':root'){rule['selector']=':host > *';}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule);});// consume mixins
return this._consumeCssProperties(cssText,rule);}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement('meta');this._measureElement.setAttribute('apply-shim-measure','');this._measureElement.style.all='initial';document.head.appendChild(this._measureElement);}return window.getComputedStyle(this._measureElement).getPropertyValue(property);}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this;// find the "top" rule
var topRule=startRule;while(topRule['parent']){topRule=topRule['parent'];}var fallbacks={};var seenStartRule=false;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return;}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r['selector']===startRule['selector']){Object.assign(fallbacks,_this4._cssTextToMap(r['parsedCssText']));}});return fallbacks;}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0];var mixinName=m[1];var idx=m.index;// collect properties before apply to be "defaults" if mixin might override them
// match includes a "prefix", so find the start and end positions of @apply
var applyPos=idx+matchText.indexOf('@apply');var afterApplyPos=idx+matchText.length;// find props defined before this @apply
var textBeforeApply=text.slice(0,applyPos);var textAfterApply=text.slice(afterApplyPos);var defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length;}return text;}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,'');var vars=[];var mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName);}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=true;}var _p3,_parts,f;var properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];_parts=[_p3,': var(',mixinName,MIXIN_VAR_SEP,_p3];if(f){_parts.push(',',f.replace(IMPORTANT,''));}_parts.push(')');if(IMPORTANT.test(properties[_p3])){_parts.push(' !important');}vars.push(_parts.join(''));}}return vars.join('; ');}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property);}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value='apply-shim-inherit';}}return value;}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){var replaceInitialOrInherit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var props=text.split(';');var property,value;var out={};for(var i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(':');// ignore lines that aren't definitions like @media
if(sp.length>1){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(':');if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value);}out[property]=value;}}}return out;}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return;}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName);}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";");}});}if(!valueMixin){return matchText;}var mixinAsProperties=this._consumeCssProperties(''+valueMixin,rule);var prefix=matchText.slice(0,matchText.indexOf('--'));// `initial` and `inherit` as properties in a map should be replaced because
// these keywords are eagerly evaluated when the mixin becomes CSS Custom Properties,
// and would set the variable value, rather than carry the keyword to the `var()` usage.
var mixinValues=this._cssTextToMap(mixinAsProperties,true);var combinedProps=mixinValues;var mixinEntry=this._map.get(propertyName);var oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues);}else{this._map.set(propertyName,combinedProps);}var out=[];var p,v;// set variables defined by current mixin
var needToInvalidate=false;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===undefined){v='initial';}if(oldProps&&!(p in oldProps)){needToInvalidate=true;}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v));}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry);}if(mixinEntry){mixinEntry.properties=combinedProps;}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix);}return"".concat(prefix).concat(out.join('; '),";");}}]);return ApplyShim;}();/* exports */ /* eslint-disable no-self-assign */_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype['detectMixin']=ApplyShim.prototype.detectMixin;ApplyShim.prototype['transformStyle']=ApplyShim.prototype.transformStyle;ApplyShim.prototype['transformCustomStyle']=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype['transformRules']=ApplyShim.prototype.transformRules;ApplyShim.prototype['transformRule']=ApplyShim.prototype.transformRule;ApplyShim.prototype['transformTemplate']=ApplyShim.prototype.transformTemplate;ApplyShim.prototype['_separator']=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,'invalidCallback',{/** @return {?function(string)} */get:function get(){return invalidCallback;},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb;}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;'use strict';/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */var templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;'use strict';/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */var CURRENT_VERSION='_applyShimCurrentVersion';/** @const {string} */var NEXT_VERSION='_applyShimNextVersion';/** @const {string} */var VALIDATING_VERSION='_applyShimValidatingVersion';/**
                                                           * @const {Promise<void>}
                                                           */var promise=Promise.resolve();/**
                                    * @param {string} elementName
                                    */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template);}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1;}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){var template=templateMap[elementName];if(template){return templateIsValid(template);}return true;}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION];}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){var template=templateMap[elementName];if(template){return templateIsValidating(template);}return false;}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION];}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){var template=templateMap[elementName];startValidatingTemplate(template);}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=true;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=false;});}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(var elementName in templateMap){var _template=templateMap[elementName];if(!templateIsValid(_template)){return true;}}return false;}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;'use strict';/** @type {Promise<void>} */var readyPromise=null;/** @type {?function(?function())} */var whenReady=window['HTMLImports']&&window['HTMLImports']['whenReady']||null;/** @type {function()} */var resolveFn;/**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback);}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve;});if(document.readyState==='complete'){resolveFn();}else{document.addEventListener('readystatechange',function(){if(document.readyState==='complete'){resolveFn();}});}}readyPromise.then(function(){callback&&callback();});}});}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;'use strict';var CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;var SEEN_MARKER='__seenByShadyCSS';var CACHED_STYLE='__shadyCSSCachedStyle';/** @type {?function(!HTMLStyleElement)} */var transformFn=null;/** @type {?function()} */var validateFn=null;/**
                       This interface is provided to add document-level <style> elements to ShadyCSS for processing.
                       These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
                       In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties
                       
                       To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`
                       
                       In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
                       This function will be called when calculating styles.
                       
                       An example usage of the document-level styling api can be found in `examples/document-style-lib.js`
                       
                       @unrestricted
                       */var CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){babelHelpers.classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this['customStyles']=[];this['enqueued']=false;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window['ShadyCSS']['flushCustomStyles']){window['ShadyCSS']['flushCustomStyles']();}});}/**
     * Queue a validation for new custom styles to batch style recalculations
     */babelHelpers.createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this['enqueued']||!validateFn){return;}this['enqueued']=true;documentWait(validateFn);}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=true;this['customStyles'].push(style);this.enqueueDocumentValidation();}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE];}var style;if(customStyle['getStyle']){style=customStyle['getStyle']();}else{style=customStyle;}return style;}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){var cs=this['customStyles'];for(var i=0;i<cs.length;i++){var _customStyle=cs[i];if(_customStyle[CACHED_STYLE]){continue;}var _style3=this.getStyleForCustomStyle(_customStyle);if(_style3){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */_style3['__appliedElement']||_style3;if(transformFn){transformFn(styleToTransform);}_customStyle[CACHED_STYLE]=styleToTransform;}}return cs;}}]);return CustomStyleInterface;}();/* eslint-disable no-self-assign */_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype['addCustomStyle']=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype['getStyleForCustomStyle']=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype['processStyles']=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{'transformCallback':{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn;},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn;}},'validateCallback':{/** @return {?function()} */get:function get(){return validateFn;},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set:function set(fn){var needsEnqueue=false;if(!validateFn){needsEnqueue=true;}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation();}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */var CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;'use strict';var applyShim$1=new ApplyShim();var ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){babelHelpers.classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1['invalidCallback']=invalidate;}babelHelpers.createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return;}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface['transformCallback']=function(style){applyShim$1.transformCustomStyle(style);};this.customStyleInterface['validateCallback']=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface['enqueued']){_this6.flushCustomStyles();}});};}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return;}templateMap[elementName]=template;var ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template['_styleAst']=ast;}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return;}var styles=this.customStyleInterface['processStyles']();if(!this.customStyleInterface['enqueued']){return;}for(var i=0;i<styles.length;i++){var cs=styles[i];var _style4=this.customStyleInterface['getStyleForCustomStyle'](cs);if(_style4){applyShim$1.transformCustomStyle(_style4);}}this.customStyleInterface['enqueued']=false;}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties);}if(element.shadowRoot){this.styleElement(element);var shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes;for(var i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i]);}}else{var children=element.children||element.childNodes;for(var _i2=0;_i2<children.length;_i2++){this.styleSubtree(/** @type {HTMLElement} */children[_i2]);}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is;var template=templateMap[is];if(template&&elementHasBuiltCss(template)){return;}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template);}// update this element instance
var _root=element.shadowRoot;if(_root){var _style5=/** @type {HTMLStyleElement} */_root.querySelector('style');if(_style5){// reuse the template's style ast, it has all the original css text
_style5['__cssRules']=template['_styleAst'];_style5.textContent=toCssText(template['_styleAst']);}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties);}}]);return ApplyShimInterface;}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface();var CustomStyleInterface$$1=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName);},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends);},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties);},/**
     * @param {!HTMLElement} element
     */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element);},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties);},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles();},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface$$1){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface$$1;}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {string} prop Property name
                                                                                 * @param {?Object} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop;};/* eslint-enable */var CSS_URL_RX=/(url\()([^)]*)(\))/g;var ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/;var workingURL;var resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url;}// Lazy feature detection.
if(workingURL===undefined){workingURL=false;try{var u=new URL('b','http://a');u.pathname='c%20d';workingURL=u.href==='http://a/c%20d';}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href;}if(workingURL){return new URL(url,baseURI).href;}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument('temp');resolveDoc.base=resolveDoc.createElement('base');resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement('a');resolveDoc.body.appendChild(resolveDoc.anchor);}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url;}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+'\''+_resolveUrl(url.replace(/["']/g,''),baseURI)+'\''+post;});}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf('/')+1);}var resolveUrl$1={resolveUrl:_resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;var useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;var useNativeCSSProperties=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;/**
                                                                                          * Globally settable property that is automatically assigned to
                                                                                          * `ElementMixin` instances, useful for binding in templates to
                                                                                          * make URL's relative to an application's root.  Defaults to the main
                                                                                          * document URL, but can be overridden by users.  It may be useful to set
                                                                                          * `rootPath` to provide a stable application mount path when
                                                                                          * using client side routing.
                                                                                          */_exports.useNativeCustomElements=useNativeCustomElements;var rootPath=undefined||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                           * available via `rootPath`.
                                                                                           *
                                                                                           * @param {string} path The new root path
                                                                                           * @return {void}
                                                                                           */_exports.rootPath=rootPath;var setRootPath=function setRootPath(path){_exports.rootPath=rootPath=path;};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,Node):*)|undefined}
    */_exports.setRootPath=setRootPath;var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||undefined;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;var setSanitizeDOMValue=function setSanitizeDOMValue(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue;};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;var passiveTouchGestures=false;/**
                                          * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                          *
                                          * @param {boolean} usePassive enable or disable passive touch gestures globally
                                          * @return {void}
                                          */_exports.passiveTouchGestures=passiveTouchGestures;var setPassiveTouchGestures=function setPassiveTouchGestures(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive;};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;var strictTemplatePolicy=false;/**
                                          * Sets `strictTemplatePolicy` globally for all elements
                                          *
                                          * @param {boolean} useStrictPolicy enable or disable strict template policy
                                          *   globally
                                          * @return {void}
                                          */_exports.strictTemplatePolicy=strictTemplatePolicy;var setStrictTemplatePolicy=function setStrictTemplatePolicy(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy;};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;var allowTemplateFromDomModule=false;/**
                                                * Sets `lookupTemplateFromDomModule` globally for all elements
                                                *
                                                * @param {boolean} allowDomModule enable or disable template lookup 
                                                *   globally
                                                * @return {void}
                                                */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;var setAllowTemplateFromDomModule=function setAllowTemplateFromDomModule(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule;};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath;},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue;},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures;},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy;},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule;},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule};_exports.$settings=settings;var dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap();/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications;}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base;}var map=mixinApplications;var extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);}// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=true;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet;return extended;}return dedupingMixin;};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;var modules={};var lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module;}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()];}function styleOutsideTemplateCheck(inst){if(inst.querySelector('style')){console.warn('dom-module %s has style outside template',inst.id);}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(DomModule,_HTMLElement);function DomModule(){babelHelpers.classCallCheck(this,DomModule);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomModule).apply(this,arguments));}babelHelpers.createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register();}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==undefined){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"));}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this);}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;var url=_resolveUrl(this.getAttribute('assetpath')||'',owner.baseURI);this.__assetpath=pathFromUrl(url);}return this.__assetpath;}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector);}return m;}return null;}},{key:"observedAttributes",get:function get(){return['id'];}}]);return DomModule;}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.DomModule=DomModule;DomModule.prototype['modules']=modules;customElements.define('dom-module',DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;var MODULE_STYLE_LINK_SELECTOR='link[rel=import][type~=css]';var INCLUDE_ATTR='include';var SHADY_UNSCOPED_ATTR='shady-unscoped';/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId));}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc;var importCss=resolveCss(container.textContent,importDoc.baseURI);var style=document.createElement('style');style.textContent=importCss;return style;}/** @typedef {{assetpath: string}} */var templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var styles=[];for(var i=0;i<modules.length;i++){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModule(modules[i])));}return styles;}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn('Could not find style data in module named',moduleId);return[];}if(m._styles===undefined){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,babelHelpers.toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var _template2=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(_template2){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromTemplate(_template2,/** @type {templateWithAssetPath} */m.assetpath)));}m._styles=styles;}return m._styles;}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){var styles=[];// if element is a template, get content from its .content
var e$=template.content.querySelectorAll('style');for(var i=0;i<e$.length;i++){var e=e$[i];// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
var include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index;})));}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI);}styles.push(e);}template._styles=styles;}return template._styles;}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[];}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){var styles=[];var p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(var i=0;i<p$.length;i++){var _p5=p$[i];if(_p5.import){var importDoc=_p5.import;var unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var _style6=styleForImport(importDoc);_style6.setAttribute(SHADY_UNSCOPED_ATTR,'');importDoc._unscopedStyle=_style6;}else if(!importDoc._style){importDoc._style=styleForImport(importDoc);}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style);}}return styles;}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){var modules=moduleIds.trim().split(/\s+/);var cssText='';for(var i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i]);}return cssText;}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===undefined){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m);// include css from the first template in the module
var t=/** @type {?HTMLTemplateElement} */m.querySelector('template');if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath);}m._cssText=cssText||null;}if(!m){console.warn('Could not find style data in module named',moduleId);}return m&&m._cssText||'';}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){var cssText='';var e$=stylesFromTemplate(template,baseURI);// if element is a template, get content from its .content
for(var i=0;i<e$.length;i++){var e=e$[i];if(e.parentNode){e.parentNode.removeChild(e);}cssText+=e.textContent;}return cssText;}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){var m=importModule(moduleId);return m?_cssFromModuleImports(m):'';}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){var cssText='';var styles=_stylesFromModuleImports(module);for(var i=0;i<styles.length;i++){cssText+=styles[i].textContent;}return cssText;}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;function isPath(path){return path.indexOf('.')>=0;}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf('.');if(dotIndex===-1){return path;}return path.slice(0,dotIndex);}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return base.indexOf(path+'.')===0;}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return path.indexOf(base+'.')===0;}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length);}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path);}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){var _parts2=[];for(var i=0;i<path.length;i++){var args=path[i].toString().split('.');for(var j=0;j<args.length;j++){_parts2.push(args[j]);}}return _parts2.join('.');}else{return path;}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split('.');}return path.toString().split('.');}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get(root,path,info){var prop=root;var parts=split(path);// Loop over path parts[0..n-1] and dereference
for(var i=0;i<parts.length;i++){if(!prop){return;}var _part=parts[i];prop=prop[_part];}if(info){info.path=parts.join('.');}return prop;}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root;var parts=split(path);var last=parts[parts.length-1];if(parts.length>1){// Loop over path parts[0..n-2] and dereference
for(var i=0;i<parts.length-1;i++){var _part2=parts[i];prop=prop[_part2];if(!prop){return;}}// Set value to object at end of path
prop[last]=value;}else{// Simple property set
prop[path]=value;}return parts.join('.');}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */var isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:_get,set:_set,isDeep:isDeep};_exports.$path=path;var caseMap={};var DASH_TO_CAMEL=/-[a-z]/g;var CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=dash.indexOf('-')<0?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase();}));}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,'-$1').toLowerCase());}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;var microtaskCurrHandle=0;var microtaskLastHandle=0;var microtaskCallbacks=[];var microtaskNodeContent=0;var microtaskNode=document.createTextNode('');new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:true});function microtaskFlush(){var len=microtaskCallbacks.length;for(var i=0;i<len;i++){var cb=microtaskCallbacks[i];if(cb){try{cb();}catch(e){setTimeout(function(){throw e;});}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len;}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay);},cancel:function cancel(handle){window.clearTimeout(handle);}};},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:function run(fn,delay){return window.setTimeout(fn,delay);},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.clearTimeout(handle);}};_exports.timeOut=timeOut;var animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestAnimationFrame(fn);},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelAnimationFrame(handle);}};_exports.animationFrame=animationFrame;var idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16);},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle);}};_exports.idlePeriod=idlePeriod;var microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++;},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(idx>=0){if(!microtaskCallbacks[idx]){throw new Error('invalid async handle: '+handle);}microtaskCallbacks[idx]=null;}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;var microtask=microTask;/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              */var PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */var PropertiesChanged=/*#__PURE__*/function(_superClass){babelHelpers.inherits(PropertiesChanged,_superClass);babelHelpers.createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty('__dataHasAccessor')){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor);}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=true;this._definePropertyAccessor(property,readOnly);}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty('__dataAttributes')){this.__dataAttributes=Object.assign({},this.__dataAttributes);}if(!this.__dataAttributes[property]){var _attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[_attr]=property;}}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){return this._getProperty(property);},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){this._setProperty(property,value);}/* eslint-enable */});}}],[{key:"createProperties",/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop);}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase();}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;babelHelpers.classCallCheck(this,PropertiesChanged);_this7=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesChanged).call(this));_this7.__dataEnabled=false;_this7.__dataReady=false;_this7.__dataInvalid=false;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;_this7.__serializing=false;_this7._initializeProperties();return _this7;}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */babelHelpers.createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=true;this._flushProperties();}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6];}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props);}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties();}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property];}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property];var changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old;}this.__data[property]=value;this.__dataPending[property]=value;}return changed;}/* eslint-enable */ /**
                           * Marks the properties as invalid, and enqueues an async
                           * `_propertiesChanged` callback.
                           *
                           * @return {void}
                           * @protected
                           * @override
                           */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=true;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=false;_this8._flushProperties();}});}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=true;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null;}this.ready();}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){var props=this.__data;var changedProps=this.__dataPending;var old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old);}}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return Boolean(changedProps);}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value));}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value);}if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes;var _property=map&&map[attribute]||attribute;this[_property]=this._deserializeValue(value,type||this.constructor.typeForProperty(_property));}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=true;value=arguments.length<3?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=false;}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if(str===undefined){node.removeAttribute(attribute);}else{node.setAttribute(attribute,str);}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(babelHelpers.typeof(value)){case'boolean':return value?'':undefined;default:return value!=null?value.toString():undefined;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return value!==null;case Number:return Number(value);default:return value;}}}]);return PropertiesChanged;}(superClass);return PropertiesChanged;});_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;var nativeProperties={};var proto=HTMLElement.prototype;while(proto){var props=Object.getOwnPropertyNames(proto);for(var i=0;i<props.length;i++){nativeProperties[props[i]]=true;}proto=Object.getPrototypeOf(proto);}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==undefined){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value);}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={};}else if(!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto',model))){model.__dataProto=Object.create(model.__dataProto);}model.__dataProto[property]=value;}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */var PropertyAccessors=/*#__PURE__*/function(_base){babelHelpers.inherits(PropertyAccessors,_base);function PropertyAccessors(){babelHelpers.classCallCheck(this,PropertyAccessors);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyAccessors).apply(this,arguments));}babelHelpers.createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null;}babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this);}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7]);}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute);}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(babelHelpers.typeof(value)){case'object':if(babelHelpers.instanceof(value,Date)){return value.toString();}else if(value){try{return JSON.stringify(value);}catch(x){return'';}}default:return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
       * @type {*}
       */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value;}break;case Array:try{outValue=JSON.parse(/** @type {string} */value);}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value));}break;case Date:outValue=isNaN(value)?String(value):Number(value);outValue=new Date(outValue);break;default:outValue=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue;}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly);}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property];}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return Boolean(this.__dataPending&&prop in this.__dataPending);}}],[{key:"createPropertiesForAttributes",/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     */value:function createPropertiesForAttributes(){var a$=this.observedAttributes;for(var _i3=0;_i3<a$.length;_i3++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i3]));}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return camelToDashCase(property);}}]);return PropertyAccessors;}(base);return PropertyAccessors;});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;var templateExtensions={'dom-if':true,'dom-repeat':true};function wrapTemplateExtension(node){var is=node.getAttribute('is');if(is&&templateExtensions[is]){var t=node;t.removeAttribute('is');node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name);}}return node;}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,_i4=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===_i4++){return n;}}}else{return root;}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node;}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst);}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo;}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail);}else{console.warn('listener method `'+methodName+'` not defined');}};return handler;}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */var TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */var TemplateStamp=/*#__PURE__*/function(_superClass2){babelHelpers.inherits(TemplateStamp,_superClass2);function TemplateStamp(){babelHelpers.classCallCheck(this,TemplateStamp);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateStamp).apply(this,arguments));}babelHelpers.createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       */value:function _stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template);}var templateInfo=this.constructor._parseTemplate(template);var nodeInfo=templateInfo.nodeInfoList;var content=templateInfo.content||template.content;var dom=/** @type {DocumentFragment} */document.importNode(content,true);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=new Array(nodeInfo.length);dom.$={};for(var _i5=0,l=nodeInfo.length,info;_i5<l&&(info=nodeInfo[_i5]);_i5++){var node=nodes[_i5]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info);}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom;}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler;}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler);}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler);}}],[{key:"_parseTemplate",/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){var templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute('strip-whitespace');this._parseTemplateContent(template,templateInfo,{parent:null});}return template._templateInfo;}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo);}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted;var element=/** @type {Element} */node;if(element.localName=='template'&&!element.hasAttribute('preserve-content')){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted;}else if(element.localName==='slot'){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=true;}if(element.firstChild){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted;}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted;}return noted;}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){if(root.localName==='script'||root.localName==='style'){return;}for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if(node.localName=='template'){node=wrapTemplateExtension(node);}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next;}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue;}}var childInfo={parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(/** @type {!NodeInfo} */childInfo)-1;}// Increment if not removed
if(node.parentNode){parentIndex++;}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){var templateInfo=this._parseTemplate(node,outerTemplateInfo);var content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return true;}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
var noted=false;var attrs=Array.from(node.attributes);for(var _i6=attrs.length-1,a;a=attrs[_i6];_i6--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted;}return noted;}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if(name.slice(0,3)==='on-'){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return true;}// static id
else if(name==='id'){nodeInfo.id=value;return true;}return false;}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content;}}]);return TemplateStamp;}(superClass);return TemplateStamp;});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;var dedupeId$1=0;/**
                    * Property effect types; effects are stored on the prototype using these keys
                    * @enum {string}
                    */var TYPES={COMPUTE:'__computeEffects',REFLECT:'__reflectEffects',NOTIFY:'__notifyEffects',PROPAGATE:'__propagateEffects',OBSERVE:'__observeEffects',READ_ONLY:'__readOnly'};/** @const {RegExp} */var capitalAttributeRegex=/[A-Z]/;/**
                                        * @typedef {{
                                        * name: (string | undefined),
                                        * structured: (boolean | undefined),
                                        * wildcard: (boolean | undefined)
                                        * }}
                                        */var DataTrigger;//eslint-disable-line no-unused-vars
/**
 * @typedef {{
 * info: ?,
 * trigger: (!DataTrigger | undefined),
 * fn: (!Function | undefined)
 * }}
 */var DataEffect;//eslint-disable-line no-unused-vars
var PropertyEffectsType;//eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type){var effects=model[type];if(!effects){effects=model[type]={};}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(var _p8 in effects){var protoFx=effects[_p8];var instFx=effects[_p8]=Array(protoFx.length);for(var _i7=0;_i7<protoFx.length;_i7++){instFx[_i7]=protoFx[_i7];}}}return effects;}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!PropertyEffectsType} inst The instance with effects to run
 * @param {Object} effects Object map of property-to-Array of effects
 * @param {Object} props Bag of current property changes
 * @param {Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=false;var id=dedupeId$1++;for(var prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=true;}}return ran;}return false;}/**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=false;var rootProperty=hasPaths?root(prop):prop;var fxs=effects[rootProperty];if(fxs){for(var _i8=0,l=fxs.length,fx;_i8<l&&(fx=fxs[_i8]);_i8++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId;}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=true;}}}return ran;}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=trigger.name;return triggerPath==path||trigger.structured&&isAncestor(triggerPath,path)||trigger.wildcard&&isDescendant(triggerPath,path);}else{return true;}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn=typeof info.method==="string"?inst[info.method]:info.method;var changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp]);}else if(!info.dynamicFn){console.warn('observer method `'+info.method+'` not defined');}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst[TYPES.NOTIFY];var notified;var id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=true;}else if(hasPaths&&notifyPath(inst,prop,props)){notified=true;}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties();}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=root(path);if(rootProperty!==path){var eventName=camelToDashCase(rootProperty)+'-changed';dispatchNotifyEvent(inst,eventName,props[path],path);return true;}return false;}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:true};if(path){detail.path=path;}/** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName,{detail:detail}));}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?root(property):property;var path=rootProperty!=property?property:null;var value=path?_get(inst,path):inst.__data[property];if(path&&value===undefined){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path);}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value;var detail=/** @type {Object} */event.detail;var fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value;}else{value=event.currentTarget[fromProp];}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,true,Boolean(fromPath))&&(!detail||!detail.queueProperty)){inst._invalidateProperties();}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,'attribute',/** @type {Node} */inst);}inst._propertyToAttribute(property,info.attrName,value);}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst[TYPES.COMPUTE];if(computeEffects){var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null;}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){var result=runMethodEffect(inst,property,props,oldProps,info);var computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,true);}else{inst[computedProp]=result;}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link;for(var a in links){var b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,true,true);}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,true,true);}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var/** Binding */binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:parts.length!==1};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||camelToDashCase(target)+'-changed';binding.listenerNegate=negate;}// Add "propagate" property effects to templateInfo
var index=templateInfo.nodeInfoList.length;for(var _i9=0;_i9<binding.parts.length;_i9++){var _part3=binding.parts[_i9];_part3.compoundIndex=_i9;addEffectForBindingPart(constructor,templateInfo,binding,_part3,index);}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if(binding.kind==='attribute'&&binding.target[0]==='-'){console.warn('Cannot set attribute '+binding.target+' because "-" is not a valid attribute starting character');}else{var dependencies=part.dependencies;var info={index:index,binding:binding,part:part,evaluator:constructor};for(var j=0;j<dependencies.length;j++){var trigger=dependencies[j];if(typeof trigger=='string'){trigger=parseArg(trigger);trigger.wildcard=true;}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger});}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index];var binding=info.binding;var part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&binding.kind=='property'&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,false,true)){inst._enqueueClient(node);}}else{var _value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,_value);}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node);}if(binding.kind=='attribute'){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target);}else{// Property binding
var prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node);}}}else{inst._setUnmanagedPropertyToNode(node,prop,value);}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join('');}if(binding.kind!=='attribute'){// Some browsers serialize `undefined` to `"undefined"`
if(binding.target==='textContent'||binding.target==='value'&&(node.localName==='input'||node.localName==='textarea')){value=value==undefined?'':value;}}return value;}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return Boolean(binding.target)&&binding.kind!='attribute'&&binding.kind!='text'&&!binding.isCompound&&binding.parts[0].mode==='{';}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var _i10=0;_i10<nodeInfoList.length;_i10++){var info=nodeInfoList[_i10];var node=nodeList[_i10];var bindings=info.bindings;if(bindings){for(var _i11=0;_i11<bindings.length;_i11++){var binding=bindings[_i11];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding);}}node.__dataHost=inst;}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={});var _parts3=binding.parts;// Copy literals from parts into storage for this binding
var literals=new Array(_parts3.length);for(var j=0;j<_parts3.length;j++){literals[j]=_parts3[j].literal;}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&binding.kind=='property'){node[target]=binding.literal;}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var _part4=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,_part4.source,_part4.negate);});}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {void}
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&(babelHelpers.typeof(dynamicFn)!=='object'||dynamicFn[sig.methodName]);var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn};for(var _i12=0,arg;_i12<sig.args.length&&(arg=sig.args[_i12]);_i12++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg});}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info});}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst;var fn=context[info.methodName];if(fn){var args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args);}else if(!info.dynamicFn){console.warn('method `'+info.methodName+'` not defined');}}var emptyArray=[];// Regular expressions used for binding
var IDENT='(?:'+'[a-zA-Z_$][\\w.:$\\-*]*'+')';var NUMBER='(?:'+'[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?'+')';var SQUOTE_STRING='(?:'+'\'(?:[^\'\\\\]|\\\\.)*\''+')';var DQUOTE_STRING='(?:'+'"(?:[^"\\\\]|\\\\.)*"'+')';var STRING='(?:'+SQUOTE_STRING+'|'+DQUOTE_STRING+')';var ARGUMENT='(?:('+IDENT+'|'+NUMBER+'|'+STRING+')\\s*'+')';var ARGUMENTS='(?:'+ARGUMENT+'(?:,\\s*'+ARGUMENT+')*'+')';var ARGUMENT_LIST='(?:'+'\\(\\s*'+'(?:'+ARGUMENTS+'?'+')'+'\\)\\s*'+')';var BINDING='('+IDENT+'\\s*'+ARGUMENT_LIST+'?'+')';// Group 3
var OPEN_BRACKET='(\\[\\[|{{)'+'\\s*';var CLOSE_BRACKET='(?:]]|}})';var NEGATE='(?:(!)\\s*)?';// Group 2
var EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET;var bindingRegex=new RegExp(EXPRESSION,"g");/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){var s='';for(var _i13=0;_i13<parts.length;_i13++){var literal=parts[_i13].literal;s+=literal||'';}return s;}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1];var sig={methodName:methodName,static:true,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,'&comma;').split(',');return parseArgs(args,sig);}else{return sig;}}return null;}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=false;}return arg;},this);return sig;}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,',')// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,'\$1');// basic argument descriptor
var a={name:arg,value:'',literal:false};// detect literal value (must be String or Number)
var fc=arg[0];if(fc==='-'){fc=arg[1];}if(fc>='0'&&fc<='9'){fc='#';}switch(fc){case"'":case'"':a.value=arg.slice(1,-1);a.literal=true;break;case'#':a.value=Number(arg);a.literal=true;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=arg.slice(-2)=='.*';if(a.wildcard){a.name=arg.slice(0,-2);}}}return a;}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!PropertyEffectsType} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function _notifySplices(inst,array,path,splices){var splicesPath=path+'.splices';inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+'.length',array.length);// Null here to allow potentially large splice records to be GC'ed.
inst.__data[splicesPath]={indexSplices:null};}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:'splice'}]);}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1);}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */var PropertyEffects=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */var propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */var PropertyEffects=/*#__PURE__*/function(_propertyEffectsBase){babelHelpers.inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){var _this9;babelHelpers.classCallCheck(this,PropertyEffects);_this9=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyEffects).call(this));/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
_this9.__isPropertyEffectsClient=true;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
// path changes dirty check against `__dataTemp` only during one "turn"
// and are cleared when `__dataCounter` returns to 0.
_this9.__dataCounter=0;/** @type {boolean} */_this9.__dataClientsReady;/** @type {Array} */_this9.__dataPendingClients;/** @type {Object} */_this9.__dataToNotify;/** @type {Object} */_this9.__dataLinkedPaths;/** @type {boolean} */_this9.__dataHasPaths;/** @type {Object} */_this9.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */_this9.__dataHost;/** @type {!Object} */_this9.__dataTemp;/** @type {boolean} */_this9.__dataClientsInitialized;/** @type {!Object} */_this9.__data;/** @type {!Object} */_this9.__dataPending;/** @type {!Object} */_this9.__dataOld;/** @type {Object} */_this9.__computeEffects;/** @type {Object} */_this9.__reflectEffects;/** @type {Object} */_this9.__notifyEffects;/** @type {Object} */_this9.__propagateEffects;/** @type {Object} */_this9.__observeEffects;/** @type {Object} */_this9.__readOnly;/** @type {!TemplateInfo} */_this9.__templateInfo;return _this9;}babelHelpers.createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * @return {void}
       */value:function _initializeProperties(){babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);hostStack.registerHost(this);this.__dataClientsReady=false;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=false;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=false;}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={};}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this[TYPES.READ_ONLY];for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop];}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[];}effects.push(effect);}/**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type)[property];var idx=effects.indexOf(effect);if(idx>=0){effects.splice(idx,1);}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return Boolean(effects&&effects[property]);}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY);}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY);}/**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT);}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE);}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=_get(this,path);path=/** @type {string} */_set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return false;}}this.__dataHasPaths=true;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,path,value);return true;}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify);}else{this[path]=value;}}return false;}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||babelHelpers.typeof(value)=='object'){node[prop]=value;}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var propIsPath=this.__dataHasPaths&&isPath(property);var prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={};}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property];}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value;}else{this.__data[property]=value;}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify;}return true;}return false;}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,true)){this._invalidateProperties();}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataReady){this._flushProperties();}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client);}}/**
       * Overrides superclass implementation.
       *
       * @return {void}
       * @protected
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_flushProperties",this).call(this);this.__dataCounter--;}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @return {void}
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=true;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=true;}else{this.__enableOrFlushClients();}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
},{key:"__enableOrFlushClients",value:function __enableOrFlushClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var _i14=0;_i14<clients.length;_i14++){var client=clients[_i14];if(!client.__dataEnabled){client._enableProperties();}else if(client.__dataPending){client._flushProperties();}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @return {void}
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){this.__enableOrFlushClients();}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var _path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][_path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(_path,props[_path],true);}}this._invalidateProperties();}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients();}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties();}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=false;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
var notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths);}// Clear temporary cache at end of turn
if(this.__dataCounter==1){this.__dataTemp={};}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths);}var templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo;}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from;}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path];}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @return {void}
       * @public
      */},{key:"notifySplices",value:function notifySplices(path,splices){var info={path:''};var array=/** @type {Array} */_get(this,path,info);_notifySplices(this,array,info.path,splices);}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root$$1){return _get(root$$1||this,path);}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
      */},{key:"set",value:function set(path,value,root$$1){if(root$$1){_set(root$$1,path,value);}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,true)){this._invalidateProperties();}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){var info={path:''};var array=/** @type {Array}*/_get(this,path,info);var len=array.length;for(var _len2=arguments.length,items=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){items[_key2-1]=arguments[_key2];}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[]);}return ret;}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);var hadLength=Boolean(array.length);var ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret]);}return ret;}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){for(var _len3=arguments.length,items=new Array(_len3>3?_len3-3:0),_key3=3;_key3<_len3;_key3++){items[_key3-3]=arguments[_key3];}var info={path:''};var array=/** @type {Array} */_get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(start<0){start=array.length-Math.floor(-start);}else if(start){start=Math.floor(start);}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
var ret;// Omit any additional arguments if they were not passed in
if(arguments.length===2){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice.apply(array,[start,deleteCount].concat(items));}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret);}return ret;}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);var hadLength=Boolean(array.length);var ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret]);}return ret;}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){var info={path:''};var array=/** @type {Array} */_get(this,path,info);for(var _len4=arguments.length,items=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){items[_key4-1]=arguments[_key4];}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[]);}return ret;}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
      */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath;if(arguments.length==1){// Get value if not supplied
var info={path:''};value=_get(this,path,info);propPath=info.path;}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path);}else{propPath=/** @type{string} */path;}if(this._setPendingPropertyOrPath(propPath,value,true,true)){this._invalidateProperties();}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this['_set'+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value);};}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,method,dynamicFn){var info={property:property,method:method,dynamicFn:Boolean(dynamicFn)};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:method}});}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn);}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+'-changed',property:property}});}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=this.constructor.attributeNameForProperty(property);if(attr[0]==='-'){console.warn('Property '+property+' cannot be reflected to attribute '+attr+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}});}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'");}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {Array<*>} Array of argument values
       * @private
       */},{key:"_marshalArgs",value:function _marshalArgs(args,path,props){var data=this.__data;var values=[];for(var _i15=0,l=args.length;_i15<l;_i15++){var arg=args[_i15];var name=arg.name;var v=void 0;if(arg.literal){v=arg.value;}else{if(arg.structured){v=_get(data,name);// when data is not stored e.g. `splices`
if(v===undefined){v=props[name];}}else{v=data[name];}}if(arg.wildcard){// Only send the actual path changed info if the change that
// caused the observer to run matched the wildcard
var baseChanged=name.indexOf(path+'.')===0;var matches$$1=path.indexOf(name)===0&&!baseChanged;values[_i15]={path:matches$$1?path:name,value:matches$$1?props[path]:v,base:v};}else{values[_i15]=v;}}return values;}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/**
     * Equivalent to static `bindTemplate` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @param {boolean=} instanceBinding When false (default), performs
     *   "prototypical" binding of the template and overwrites any previously
     *   bound template for the class. When true (as passed from
     *   `_stampTemplate`), the template info is instanced and linked into
     *   the list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     *   this is an instance of the prototypical template info
     * @protected
     */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template);var wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop);}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){var last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo;}}return this.__templateInfo=templateInfo;}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */value:function _stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);var dom=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template);hostStack.endHosting(this);var templateInfo=/** @type {!TemplateInfo} */this._bindTemplate(template,true);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){var nodes=templateInfo.childNodes=[];for(var n=dom.firstChild;n;n=n.nextSibling){nodes.push(n);}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,false,templateInfo.nodeList);}return dom;}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info
var templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo;}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo;}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo;}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
var nodes=templateInfo.childNodes;for(var _i16=0;_i16<nodes.length;_i16++){var node=nodes[_i16];node.parentNode.removeChild(node);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES;}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect);}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn);}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn);}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property);}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter);}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property);}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn);}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template);}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=true;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{};var propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect);}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNode",this).call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var _parts4=this._parseBindings(node.textContent,templateInfo);if(_parts4){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(_parts4)||' ';addBinding(this,templateInfo,nodeInfo,'text','textContent',_parts4);noted=true;}}return noted;}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name;var kind='property';// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind='attribute';}else if(name[name.length-1]=='$'){name=name.slice(0,-1);kind='attribute';}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&kind=='attribute'){node.setAttribute(name,literal);}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if(node.localName==='input'&&origName==='value'){node.setAttribute(origName,'');}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if(kind==='property'){name=dashToCamelCase(name);}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return true;}else{return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNodeAttribute",this).call(this,node,templateInfo,nodeInfo,name,value);}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){var noted=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects),"_parseTemplateNestedTemplate",this).call(this,node,templateInfo,nodeInfo);// Merge host props into outer template and add bindings
var hostProps=nodeInfo.templateInfo.hostProps;var mode='{';for(var source in hostProps){var _parts5=[{mode:mode,source:source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,'property','_host_'+source,_parts5);}return noted;}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[];var lastIndex=0;var m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while((m=bindingRegex.exec(text))!==null){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)});}// Add binding part
var mode=m[1][0];var negate=Boolean(m[2]);var source=m[3].trim();var customEvent=false,notifyEvent='',colon=-1;if(mode=='{'&&(colon=source.indexOf('::'))>0){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=true;}var signature=parseMethod(source);var dependencies=[];if(signature){// Inline computed function
var args=signature.args,methodName=signature.methodName;for(var _i17=0;_i17<args.length;_i17++){var arg=args[_i17];if(!arg.literal){dependencies.push(arg);}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=true;}}else{// Property or path
dependencies.push(source);}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex;}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal});}}if(parts.length){return parts;}else{return null;}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {this} inst Element that should be used as scope for
       *   binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature);}else if(path!=part.source){value=_get(inst,part.source);}else{if(hasPaths&&isPath(path)){value=_get(inst,path);}else{value=inst.__data[path];}}if(part.negate){value=!value;}return value;}}]);return PropertyEffects;}(propertyEffectsBase);// make a typing for closure :P
PropertyEffectsType=PropertyEffects;return PropertyEffects;});/**
     * Helper api for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;var HostStack=/*#__PURE__*/function(){function HostStack(){babelHelpers.classCallCheck(this,HostStack);this.stack=[];}/**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */babelHelpers.createClass(HostStack,[{key:"registerHost",value:function registerHost(inst){if(this.stack.length){var host=this.stack[this.stack.length-1];host._enqueueClient(inst);}}/**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     */},{key:"beginHosting",value:function beginHosting(inst){this.stack.push(inst);}/**
     * @param {*} inst Instance to end hosting
     * @return {void}
     */},{key:"endHosting",value:function endHosting(inst){var stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop();}}}]);return HostStack;}();var hostStack=new HostStack();var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;function normalizeProperties(props){var output={};for(var _p9 in props){var o=props[_p9];output[_p9]=typeof o==='function'?{type:o}:o;}return output;}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */var PropertiesMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){var superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return babelHelpers.instanceof(superCtor.prototype,PropertiesMixin)?/** @type {!PropertiesMixinConstructor} */superCtor:null;}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties',constructor))){var _props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty('properties',constructor))){var properties=constructor.properties;if(properties){_props=normalizeProperties(properties);}}constructor.__ownProperties=_props;}return constructor.__ownProperties;}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */var PropertiesMixin=/*#__PURE__*/function(_base2){babelHelpers.inherits(PropertiesMixin,_base2);function PropertiesMixin(){babelHelpers.classCallCheck(this,PropertiesMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesMixin).apply(this,arguments));}babelHelpers.createClass(PropertiesMixin,[{key:"_initializeProperties",/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */value:function _initializeProperties(){this.constructor.finalize();babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"_initializeProperties",this).call(this);}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this).call(this);}this._enableProperties();}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this).call(this);}}}],[{key:"finalize",/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       */value:function finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__finalized',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize();}this.__finalized=true;this._finalizeClass();}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       */},{key:"_finalizeClass",value:function _finalizeClass(){var props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){this.createProperties(props);}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       */},{key:"typeForProperty",/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       */value:function typeForProperty(name){var info=this._properties[name];return info&&info.type;}},{key:"observedAttributes",/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */get:function get(){var _this10=this;var props=this._properties;return props?Object.keys(props).map(function(p){return _this10.attributeNameForProperty(p);}):[];}},{key:"_properties",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__properties',this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this));}return this.__properties;}}]);return PropertiesMixin;}(base);return PropertiesMixin;});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;var bundledImportMeta=babelHelpers.objectSpread({},meta,{url:new URL('../../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js',meta.url).href});var version='3.0.5';/**
                                 * Element class mixin that provides the core API for Polymer's meta-programming
                                 * features including template stamping, data-binding, attribute deserialization,
                                 * and property change observation.
                                 *
                                 * Subclassers may provide the following static getters to return metadata
                                 * used to configure Polymer's features for the class:
                                 *
                                 * - `static get is()`: When the template is provided via a `dom-module`,
                                 *   users should return the `dom-module` id from a static `is` getter.  If
                                 *   no template is needed or the template is provided directly via the
                                 *   `template` getter, there is no need to define `is` for the element.
                                 *
                                 * - `static get template()`: Users may provide the template directly (as
                                 *   opposed to via `dom-module`) by implementing a static `template` getter.
                                 *   The getter must return an `HTMLTemplateElement`.
                                 *
                                 * - `static get properties()`: Should return an object describing
                                 *   property-related metadata used by Polymer features (key: property name
                                 *   value: object containing property metadata). Valid keys in per-property
                                 *   metadata include:
                                 *   - `type` (String|Number|Object|Array|...): Used by
                                 *     `attributeChangedCallback` to determine how string-based attributes
                                 *     are deserialized to JavaScript property values.
                                 *   - `notify` (boolean): Causes a change in the property to fire a
                                 *     non-bubbling event called `<property>-changed`. Elements that have
                                 *     enabled two-way binding to the property use this event to observe changes.
                                 *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                 *     To set a read-only property, use the private setter method
                                 *     `_setProperty(property, value)`.
                                 *   - `observer` (string): Observer method name that will be called when
                                 *     the property changes. The arguments of the method are
                                 *     `(value, previousValue)`.
                                 *   - `computed` (string): String describing method and dependent properties
                                 *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                 *     Computed properties are read-only by default and can only be changed
                                 *     via the return value of the computing method.
                                 *
                                 * - `static get observers()`: Array of strings describing multi-property
                                 *   observer methods and their dependent properties (e.g.
                                 *   `'observeABC(a, b, c)'`).
                                 *
                                 * The base class provides default implementations for the following standard
                                 * custom element lifecycle callbacks; users may override these, but should
                                 * call the super method to ensure
                                 * - `constructor`: Run when the element is created or upgraded
                                 * - `connectedCallback`: Run each time the element is connected to the
                                 *   document
                                 * - `disconnectedCallback`: Run each time the element is disconnected from
                                 *   the document
                                 * - `attributeChangedCallback`: Run each time an attribute in
                                 *   `observedAttributes` is set or removed (note: this element's default
                                 *   `observedAttributes` implementation will automatically return an array
                                 *   of dash-cased attributes based on `properties`)
                                 *
                                 * @mixinFunction
                                 * @polymer
                                 * @appliesMixin PropertyEffects
                                 * @appliesMixin PropertiesMixin
                                 * @property rootPath {string} Set to the value of `rootPath`,
                                 *   which defaults to the main document path
                                 * @property importPath {string} Set to the value of the class's static
                                 *   `importPath` property, which defaults to the path of this element's
                                 *   `dom-module` (when `is` is used), but can be overridden for other
                                 *   import strategies.
                                 * @summary Element class mixin that provides the core API for Polymer's
                                 * meta-programming features.
                                 */_exports.version$1=_exports.version=version;var ElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @private
   */var polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults',constructor))){constructor.__propertyDefaults=null;var _props2=constructor._properties;for(var _p10 in _props2){var info=_props2[_p10];if('value'in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[_p10]=info;}}}return constructor.__propertyDefaults;}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers',constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty('observers',constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null;}return constructor.__ownObservers;}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=true;}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps);}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed);}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name);}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name);}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer]);}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name);}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){var templateStyles=template.content.querySelectorAll('style');var stylesWithImports=stylesFromTemplate(template);// insert styles from <link rel="import" type="css"> at the top of the template
var linkedStyles=stylesFromModuleImports(is);var firstTemplateChild=template.content.firstElementChild;for(var idx=0;idx<linkedStyles.length;idx++){var s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild);}// keep track of the last "concrete" style in the template we have encountered
var templateStyleIndex=0;// ensure all gathered styles are actually in this template.
for(var _i18=0;_i18<stylesWithImports.length;_i18++){var _s=stylesWithImports[_i18];var templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==_s){_s=_s.cloneNode(true);templateStyle.parentNode.insertBefore(_s,templateStyle);}else{templateStyleIndex++;}_s.textContent=klass._processStyleText(_s.textContent,baseURI);}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is);}}/**
     * Look up template from dom-module for element
     *
     * @param {!string} is Element name to look up
     * @return {!HTMLTemplateElement} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){var template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,'template');// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is));}}return template;}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */var PolymerElement=/*#__PURE__*/function(_polymerElementBase){babelHelpers.inherits(PolymerElement,_polymerElementBase);babelHelpers.createClass(PolymerElement,null,[{key:"_finalizeClass",/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */value:function _finalizeClass(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement),"_finalizeClass",this).call(this);if(this.hasOwnProperty(JSCompiler_renameProperty('is',this))&&this.is){register(this.prototype);}var observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties);}// note: create "working" template that is finalized at instance time
var template=/** @type {PolymerElementConstructor} */this.template;if(template){if(typeof template==='string'){console.error('template getter must return HTMLTemplateElement');template=null;}else{template=template.cloneNode(true);}}this.prototype._template=template;}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @return {void}
       * @protected
       * @override
       */},{key:"createProperties",value:function createProperties(props){for(var _p11 in props){createPropertyFromConfig(this.prototype,_p11,props[_p11],props);}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       */},{key:"createObservers",value:function createObservers(observers,dynamicFns){var proto=this.prototype;for(var _i19=0;_i19<observers.length;_i19++){proto._createMethodObserver(observers[_i19],dynamicFns);}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       */},{key:"polymerElementVersion",/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     */get:function get(){return version;}},{key:"template",get:function get(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty('_template',this))){this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first
this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template',this.prototype))?this.prototype._template:// Look in dom-module associated with this element's is
getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template;}return this._template;}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       */,set:function set(value){this._template=value;}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_importPath',this))){var meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url);}else{var _module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=_module&&_module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath;}}return this._importPath;}}]);function PolymerElement(){var _this11;babelHelpers.classCallCheck(this,PolymerElement);_this11=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerElement).call(this));/** @type {HTMLTemplateElement} */_this11._template;/** @type {string} */_this11._importPath;/** @type {string} */_this11.rootPath;/** @type {string} */_this11.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */_this11.root;/** @type {!Object<string, !Element>} */_this11.$;return _this11;}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */babelHelpers.createClass(PolymerElement,[{key:"_initializeProperties",value:function _initializeProperties(){_exports.instanceCount=instanceCount=instanceCount+1;this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
var p$=propertyDefaults(this.constructor);if(!p$){return;}for(var _p12 in p$){var info=p$[_p12];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(_p12)){var value=typeof info.value=='function'?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(_p12)){this._setPendingProperty(_p12,value,true);}else{this[_p12]=value;}}}}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       */},{key:"connectedCallback",/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
       * @return {void}
       */value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this);}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"connectedCallback",this).call(this);}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$;}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"ready",this).call(this);}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root);}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this);}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:'open'});}this.shadowRoot.appendChild(dom);return this.shadowRoot;}return null;}else{throw new Error('ShadowDOM not available. '+// TODO(sorvell): move to compile-time conditional when supported
'PolymerElement can create dom as children instead of in '+'ShadowDOM by setting `this.root = this;\` before \`ready\`.');}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties);}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=_resolveUrl(this.importPath);}return _resolveUrl(url,base);}/**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */}],[{key:"_processStyleText",value:function _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI);}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      */},{key:"_finalizeTemplate",value:function _finalizeTemplate(is){/** @const {HTMLTemplateElement} */var template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=true;var importPath=this.importPath;var baseURI=importPath?_resolveUrl(importPath):'';// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template);}}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement),"_parseTemplateContent",this).call(this,template,templateInfo,nodeInfo);}}]);return PolymerElement;}(polymerElementBase);return PolymerElement;});/**
     * Total number of Polymer element instances created.
     * @type {number}
     */_exports.ElementMixin=ElementMixin;var instanceCount=0;/**
                               * Array of Polymer element classes that have been finalized.
                               * @type {Array<PolymerElement>}
                               */_exports.instanceCount=instanceCount;var registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @this {this}
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log('['+prototype.is+']: registered');}/**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */function register(prototype){registrations.push(prototype);}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   * @this {this}
   */function dumpRegistrations(){registrations.forEach(_regLog);}/**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */var updateStyles=function updateStyles(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props);}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,get instanceCount(){return instanceCount;},registrations:registrations,register:register,dumpRegistrations:dumpRegistrations,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;var Debouncer=/*#__PURE__*/function(){function Debouncer(){babelHelpers.classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null;}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */babelHelpers.createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this12=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this12._timer=null;_this12._callback();});}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null;}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback();}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return this._timer!=null;}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(babelHelpers.instanceof(debouncer,Debouncer)){debouncer.cancel();}else{debouncer=new Debouncer();}debouncer.setConfig(asyncModule,callback);return debouncer;}}]);return Debouncer;}();_exports.Debouncer=Debouncer;var debounce={Debouncer:Debouncer};_exports.$debounce=debounce;var HAS_NATIVE_TA=typeof document.head.style.touchAction==='string';var GESTURE_KEY='__polymerGestures';var HANDLED_OBJ='__polymerGesturesHandled';var TOUCH_ACTION='__polymerGesturesTouchAction';// radius for tap and track
var TAP_DISTANCE=25;var TRACK_DISTANCE=5;// number of last N track positions to keep
var TRACK_LENGTH=2;// Disabling "mouse" handlers for 2500ms is enough
var MOUSE_TIMEOUT=2500;var MOUSE_EVENTS=['mousedown','mousemove','mouseup','click'];// an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
var MOUSE_WHICH_TO_BUTTONS=[0,1,4,2];var MOUSE_HAS_BUTTONS=function(){try{return new MouseEvent('test',{buttons:1}).buttons===1;}catch(e){return false;}}();/**
      * @param {string} name Possible mouse event name
      * @return {boolean} true if mouse event, false if not
      */function isMouseEvent(name){return MOUSE_EVENTS.indexOf(name)>-1;}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
var SUPPORTS_PASSIVE=false;(function(){try{var opts=Object.defineProperty({},'passive',{get:function get(){SUPPORTS_PASSIVE=true;}});window.addEventListener('test',null,opts);window.removeEventListener('test',null,opts);}catch(e){}})();/**
       * Generate settings for event listeners, dependant on `passiveTouchGestures`
       *
       * @param {string} eventName Event name to determine if `{passive}` option is
       *   needed
       * @return {{passive: boolean} | undefined} Options to use for addEventListener
       *   and removeEventListener
       */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||eventName==='touchend'){return;}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:true};}else{return;}}// Check for touch-only devices
var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */var clickedLabels=[];/** @type {!Object<boolean>} */var labellable={'button':true,'input':true,'keygen':true,'meter':true,'output':true,'textarea':true,'progress':true,'select':true};// Defined at https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
/** @type {!Object<boolean>} */var canBeDisabled={'button':true,'command':true,'fieldset':true,'input':true,'keygen':true,'optgroup':true,'option':true,'select':true,'textarea':true};/**
    * @param {HTMLElement} el Element to check labelling status
    * @return {boolean} element can have labels
    */function canBeLabelled(el){return labellable[el.localName]||false;}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){var labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];var _root2=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){var matching=_root2.querySelectorAll("label[for = ".concat(el.id,"]"));for(var _i20=0;_i20<matching.length;_i20++){labels.push(/** @type {!HTMLLabelElement} */matching[_i20]);}}}return labels;}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller=function mouseCanceller(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
var sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return;}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:true};// disable "ghost clicks"
if(mouseEvent.type==='click'){var clickFromLabel=false;var _path2=mouseEvent.composedPath&&mouseEvent.composedPath();if(_path2){for(var _i21=0;_i21<_path2.length;_i21++){if(_path2[_i21].nodeType===Node.ELEMENT_NODE){if(_path2[_i21].localName==='label'){clickedLabels.push(_path2[_i21]);}else if(canBeLabelled(_path2[_i21])){var ownerLabels=matchingLabels(_path2[_i21]);// check if one of the clicked labels is labelling this element
for(var j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||clickedLabels.indexOf(ownerLabels[j])>-1;}}}if(_path2[_i21]===POINTERSTATE.mouse.target){return;}}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return;}mouseEvent.preventDefault();mouseEvent.stopPropagation();}};/**
    * @param {boolean=} setup True to add, false to remove.
    * @return {void}
    */function setupTeardownMouseCanceller(setup){var events=IS_TOUCH_ONLY?['click']:MOUSE_EVENTS;for(var _i22=0,en;_i22<events.length;_i22++){en=events[_i22];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,true);}else{document.removeEventListener(en,mouseCanceller,true);}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(true);}var unset=function unset(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null;};POINTERSTATE.mouse.target=e.composedPath()[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset);}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){var type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return false;}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if(type==='mousemove'){// allow undefined for testing events
var buttons=ev.buttons===undefined?1:ev.buttons;if(babelHelpers.instanceof(ev,window.MouseEvent)&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0;}// buttons is a bitmask, check that the left button bit is set (1)
return Boolean(buttons&1);}else{// allow undefined for testing events
var button=ev.button===undefined?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return button===0;}}function isSyntheticClick(ev){if(ev.type==='click'){// ev.detail is 0 for HTMLElement.click in most browsers
if(ev.detail===0){return true;}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
var t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return true;}var bcr=/** @type {Element} */t.getBoundingClientRect();// use page x/y to account for scrolling
var x=ev.pageX,y=ev.pageY;// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom);}return false;}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:false}};function firstTouchAction(ev){var ta='auto';var path=ev.composedPath&&ev.composedPath();if(path){for(var _i23=0,n;_i23<path.length;_i23++){n=path[_i23];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break;}}}return ta;}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener('mousemove',movefn);document.addEventListener('mouseup',upfn);}function untrackDocument(stateObj){document.removeEventListener('mousemove',stateObj.movefn);document.removeEventListener('mouseup',stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null;}// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener('touchend',ignoreMouse,SUPPORTS_PASSIVE?{passive:true}:false);/** @type {!Object<string, !GestureRecognizer>} */var gestures={};/** @type {!Array<!GestureRecognizer>} */_exports.gestures=gestures;var recognizers=[];/**
                                * Finds the element rendered on the screen at the provided coordinates.
                                *
                                * Similar to `document.elementFromPoint`, but pierces through
                                * shadow roots.
                                *
                                * @param {number} x Horizontal pixel coordinate
                                * @param {number} y Vertical pixel coordinate
                                * @return {Element} Returns the deepest shadowRoot inclusive element
                                * found at the screen position given.
                                */_exports.recognizers=recognizers;function deepTargetFind(x,y){var node=document.elementFromPoint(x,y);var next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
var oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break;}if(next){node=next;}}return node;}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){// shadowdom
if(ev.composedPath){var targets=/** @type {!Array<!EventTarget>} */ev.composedPath();// It shouldn't be, but sometimes targets is empty (window on Safari).
return targets.length>0?targets[0]:ev.target;}// shadydom
return ev.target;}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){var handled;var type=ev.type;var node=ev.currentTarget;var gobj=node[GESTURE_KEY];if(!gobj){return;}var gs=gobj[type];if(!gs){return;}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if(type.slice(0,5)==='touch'){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
var t=ev.changedTouches[0];if(type==='touchstart'){// only handle the first finger
if(ev.touches.length===1){POINTERSTATE.touch.id=t.identifier;}}if(POINTERSTATE.touch.id!==t.identifier){return;}if(!HAS_NATIVE_TA){if(type==='touchstart'||type==='touchmove'){_handleTouchAction(ev);}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return;}// reset recognizer state
for(var _i24=0,r;_i24<recognizers.length;_i24++){r=recognizers[_i24];if(gs[r.name]&&!handled[r.name]){if(r.flow&&r.flow.start.indexOf(ev.type)>-1&&r.reset){r.reset();}}}// enforce gesture recognizer order
for(var _i25=0,_r;_i25<recognizers.length;_i25++){_r=recognizers[_i25];if(gs[_r.name]&&!handled[_r.name]){handled[_r.name]=true;_r[type](ev);}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){var t=ev.changedTouches[0];var type=ev.type;if(type==='touchstart'){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=false;}else if(type==='touchmove'){if(POINTERSTATE.touch.scrollDecided){return;}POINTERSTATE.touch.scrollDecided=true;var ta=firstTouchAction(ev);var shouldPrevent=false;var dx=Math.abs(POINTERSTATE.touch.x-t.clientX);var dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){// scrolling is happening
}else if(ta==='none'){shouldPrevent=true;}else if(ta==='pan-x'){shouldPrevent=dy>dx;}else if(ta==='pan-y'){shouldPrevent=dx>dy;}if(shouldPrevent){ev.preventDefault();}else{_prevent('track');}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return true;}return false;}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return true;}return false;}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={};}for(var _i26=0,dep,gd;_i26<deps.length;_i26++){dep=deps[_i26];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&dep!=='click'){continue;}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0};}if(gd._count===0){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1;}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction);}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){var recognizer=gestures[evType];var deps=recognizer.deps;var name=recognizer.name;var gobj=node[GESTURE_KEY];if(gobj){for(var _i27=0,dep,gd;_i27<deps.length;_i27++){dep=deps[_i27];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(gd._count===0){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep));}}}}node.removeEventListener(evType,handler);}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(var _i28=0;_i28<recog.emits.length;_i28++){gestures[recog.emits[_i28]]=recog;}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(var _i29=0,r;_i29<recognizers.length;_i29++){r=recognizers[_i29];for(var j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r;}}}return null;}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&babelHelpers.instanceof(node,HTMLElement)){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(function(){node.style.touchAction=value;});}node[TOUCH_ACTION]=value;}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){var ev=new Event(type,{bubbles:true,cancelable:true,composed:true});ev.detail=detail;target.dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault();}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function _prevent(evName){var recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=true;}}/**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush();}}/* eslint-disable valid-jsdoc */register$1({name:'downup',deps:['mousedown','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['down','up'],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){untrackDocument(this.info);},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire('up',t,e);untrackDocument(self.info);}};var upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire('up',t,e);}untrackDocument(self.info);};trackDocument(this.info,movefn,upfn);downupFire('down',t,e);},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){downupFire('down',_findOriginalTarget(e),e.changedTouches[0],e);},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){downupFire('up',_findOriginalTarget(e),e.changedTouches[0],e);}});/**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */function downupFire(type,target,event,preventer){if(!target){return;}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function prevent(e){return _prevent(e);}});}register$1({name:'track',touchAction:'none',deps:['mousedown','touchstart','touchmove','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['track'],info:{x:0,y:0,state:'start',started:false,moves:[],/** @this {GestureInfo} */addMove:function addMove(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift();}this.moves.push(move);},movefn:null,upfn:null,prevent:false},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.state='start';this.info.started=false;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=false;untrackDocument(this.info);},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return;}var t=_findOriginalTarget(e);var self=this;var movefn=function movefn(e){var x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?e.type==='mouseup'?'end':'track':'start';if(self.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state='end';untrackDocument(self.info);}if(t){trackFire(self.info,t,e);}self.info.started=true;}};var upfn=function upfn(e){if(self.info.started){movefn(e);}// remove the temporary listeners
untrackDocument(self.info);};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function touchmove(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];var x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if(this.info.state==='start'){// if and only if tracking, always prevent tap
_prevent('tap');}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state='track';this.info.started=true;}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){var t=_findOriginalTarget(e);var ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state='end';this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct);}}});/**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */function trackHasMovedEnough(info,x,y){if(info.prevent){return false;}if(info.started){return true;}var dx=Math.abs(info.x-x);var dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE;}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return;}var secondlast=info.moves[info.moves.length-2];var lastmove=info.moves[info.moves.length-1];var dx=lastmove.x-info.x;var dy=lastmove.y-info.y;var ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y;}_fire(target,'track',{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function hover(){return deepTargetFind(touch.clientX,touch.clientY);}});}register$1({name:'tap',deps:['mousedown','click','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['click','touchend']},emits:['tap'],info:{x:NaN,y:NaN,prevent:false},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=false;},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY;}},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function click(e){if(hasLeftMouseButton(e)){trackForward(this.info,e);}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY;},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e);}});/**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x);var dy=Math.abs(e.clientY-info.y);// find original target from `preventer` for TouchEvents, or `e` for MouseEvents
var t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute('disabled')){return;}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,'tap',{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer});}}}/* eslint-enable valid-jsdoc */ /** @deprecated */var findOriginalTarget=_findOriginalTarget;/** @deprecated */_exports.findOriginalTarget=findOriginalTarget;var add=addListener;/** @deprecated */_exports.add$1=add;var remove=removeListener;_exports.remove$1=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:_prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;var GestureEventListeners=dedupingMixin(/**
                                                     * @template T
                                                     * @param {function(new:T)} superClass Class to apply mixin to.
                                                     * @return {function(new:T)} superClass with mixin applied.
                                                     */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */var GestureEventListeners=/*#__PURE__*/function(_superClass3){babelHelpers.inherits(GestureEventListeners,_superClass3);function GestureEventListeners(){babelHelpers.classCallCheck(this,GestureEventListeners);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GestureEventListeners).apply(this,arguments));}babelHelpers.createClass(GestureEventListeners,[{key:"_addEventListenerToNode",/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */value:function _addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_addEventListenerToNode",this).call(this,node,eventName,handler);}}/**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_removeEventListenerFromNode",this).call(this,node,eventName,handler);}}}]);return GestureEventListeners;}(superClass);return GestureEventListeners;});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;var HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g;var HOST_DIR_REPLACMENT=':host([dir="$1"])';var EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;var EL_DIR_REPLACMENT=':host([dir="$2"]) $1';/**
                                                   * @type {!Array<!Polymer_DirMixin>}
                                                   */var DIR_INSTANCES=[];/** @type {MutationObserver} */var observer=null;var DOCUMENT_DIR='';function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute('dir');}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){var el=/** @type {!HTMLElement} */instance;el.setAttribute('dir',DOCUMENT_DIR);}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute('dir');for(var _i30=0;_i30<DIR_INSTANCES.length;_i30++){setRTL(DIR_INSTANCES[_i30]);}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection();}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */var DirMixin=dedupingMixin(function(base){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});}/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     * @private
     */var elementBase=PropertyAccessors(base);/**
                                                * @polymer
                                                * @mixinClass
                                                * @implements {Polymer_DirMixin}
                                                */var Dir=/*#__PURE__*/function(_elementBase){babelHelpers.inherits(Dir,_elementBase);babelHelpers.createClass(Dir,null,[{key:"_processStyleText",/**
     * @override
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */value:function _processStyleText(cssText,baseURI){cssText=babelHelpers.get(babelHelpers.getPrototypeOf(Dir),"_processStyleText",this).call(this,cssText,baseURI);cssText=this._replaceDirInCssText(cssText);return cssText;}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       */},{key:"_replaceDirInCssText",value:function _replaceDirInCssText(text){var replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);if(text!==replacedText){this.__activateDir=true;}return replacedText;}}]);function Dir(){var _this13;babelHelpers.classCallCheck(this,Dir);_this13=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Dir).call(this));/** @type {boolean} */_this13.__autoDirOptOut=false;return _this13;}/**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */babelHelpers.createClass(Dir,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"ready",this).call(this);this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute('dir');}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"connectedCallback",value:function connectedCallback(){if(elementBase.prototype.connectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"connectedCallback",this).call(this);}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this);}}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"disconnectedCallback",this).call(this);}if(this.constructor.__activateDir){var idx=DIR_INSTANCES.indexOf(this);if(idx>-1){DIR_INSTANCES.splice(idx,1);}}}}]);return Dir;}(elementBase);Dir.__activateDir=false;return Dir;});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;var scheduled=false;var beforeRenderQueue=[];var afterRenderQueue=[];function schedule(){scheduled=true;// before next render
requestAnimationFrame(function(){scheduled=false;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue);});});}function flushQueue(queue){while(queue.length){callMethod(queue.shift());}}function runQueue(queue){for(var _i31=0,l=queue.length;_i31<l;_i31++){callMethod(queue.shift());}}function callMethod(info){var context=info[0];var callback=info[1];var args=info[2];try{callback.apply(context,args);}catch(e){setTimeout(function(){throw e;});}}/**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue);}scheduled=false;}/**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function beforeNextRender(context,callback,args){if(!scheduled){schedule();}beforeRenderQueue.push([context,callback,args]);}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule();}afterRenderQueue.push([context,callback,args]);}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute('unresolved');}if(document.readyState==='interactive'||document.readyState==='complete'){resolve();}else{window.addEventListener('DOMContentLoaded',resolve);}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount};}var EDIT_LEAVE=0;var EDIT_UPDATE=1;var EDIT_ADD=2;var EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
var rowCount=oldEnd-oldStart+1;var columnCount=currentEnd-currentStart+1;var distances=new Array(rowCount);// "Addition" rows. Initialize null column.
for(var _i32=0;_i32<rowCount;_i32++){distances[_i32]=new Array(columnCount);distances[_i32][0]=_i32;}// Initialize null row
for(var j=0;j<columnCount;j++){distances[0][j]=j;}for(var _i33=1;_i33<rowCount;_i33++){for(var _j=1;_j<columnCount;_j++){if(equals(current[currentStart+_j-1],old[oldStart+_i33-1]))distances[_i33][_j]=distances[_i33-1][_j-1];else{var north=distances[_i33-1][_j]+1;var west=distances[_i33][_j-1]+1;distances[_i33][_j]=north<west?north:west;}}}return distances;}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){var i=distances.length-1;var j=distances[0].length-1;var current=distances[i][j];var edits=[];while(i>0||j>0){if(i==0){edits.push(EDIT_ADD);j--;continue;}if(j==0){edits.push(EDIT_DELETE);i--;continue;}var northWest=distances[i-1][j-1];var west=distances[i-1][j];var north=distances[i][j-1];var min=void 0;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE);}else{edits.push(EDIT_UPDATE);current=northWest;}i--;j--;}else if(min==west){edits.push(EDIT_DELETE);i--;current=west;}else{edits.push(EDIT_ADD);j--;current=north;}}edits.reverse();return edits;}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       *
       * @param {!Array} current The current "changed" array for which to
       * calculate splices.
       * @param {number} currentStart Starting index in the `current` array for
       * which splices are calculated.
       * @param {number} currentEnd Ending index in the `current` array for
       * which splices are calculated.
       * @param {!Array} old The original "unchanged" array to compare `current`
       * against to determine splices.
       * @param {number} oldStart Starting index in the `old` array for
       * which splices are calculated.
       * @param {number} oldEnd Ending index in the `old` array for
       * which splices are calculated.
       * @return {!Array} Returns an array of splice record objects. Each of these
       * contains: `index` the location where the splice occurred; `removed`
       * the array of removed items from this location; `addedCount` the number
       * of items added at this location.
       */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){var prefixCount=0;var suffixCount=0;var splice;var minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(currentStart==0&&oldStart==0)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(currentEnd-currentStart==0&&oldEnd-oldStart==0)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd){splice.removed.push(old[oldStart++]);}return[splice];}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];var ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=undefined;var splices=[];var index=currentStart;var oldIndex=oldStart;for(var _i34=0;_i34<ops.length;_i34++){switch(ops[_i34]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=undefined;}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice);}return splices;}function sharedPrefix(current,old,searchLength){for(var _i35=0;_i35<searchLength;_i35++){if(!equals(current[_i35],old[_i35]))return _i35;}return searchLength;}function sharedSuffix(current,old,searchLength){var index1=current.length;var index2=old.length;var count=0;while(count<searchLength&&equals(current[--index1],old[--index2])){count++;}return count;}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length);}function equals(currentValue,previousValue){return currentValue===previousValue;}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return node.localName==='slot';}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */var FlattenedNodesObserver=/*#__PURE__*/function(){babelHelpers.createClass(FlattenedNodesObserver,null,[{key:"getFlattenedNodes",/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */value:function getFlattenedNodes(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return Array.from(node.childNodes).map(function(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:true});}else{return[node];}}).reduce(function(a,b){return a.concat(b);},[]);}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */}]);function FlattenedNodesObserver(target,callback){var _this14=this;babelHelpers.classCallCheck(this,FlattenedNodesObserver);/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null;/**
                                            * @type {MutationObserver}
                                            * @private
                                            */this._nativeChildrenObserver=null;this._connected=false;/**
                              * @type {!HTMLElement}
                              * @private
                              */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=false;/**
                              * @type {function()}
                              * @private
                              */this._boundSchedule=function(){_this14._schedule();};this.connect();this._schedule();}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */babelHelpers.createClass(FlattenedNodesObserver,[{key:"connect",value:function connect(){var _this15=this;if(isSlot(this._target)){this._listenSlots([this._target]);}else if(this._target.children){this._listenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,function(mutations){_this15._processMutations(mutations);});}else{this._nativeChildrenObserver=new MutationObserver(function(mutations){_this15._processMutations(mutations);});this._nativeChildrenObserver.observe(this._target,{childList:true});}}this._connected=true;}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     */},{key:"disconnect",value:function disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target]);}else if(this._target.children){this._unlistenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null;}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null;}}this._connected=false;}/**
     * @return {void}
     * @private
     */},{key:"_schedule",value:function _schedule(){var _this16=this;if(!this._scheduled){this._scheduled=true;microTask.run(function(){return _this16.flush();});}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processMutations",value:function _processMutations(mutations){this._processSlotMutations(mutations);this.flush();}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processSlotMutations",value:function _processSlotMutations(mutations){if(mutations){for(var _i36=0;_i36<mutations.length;_i36++){var mutation=mutations[_i36];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes);}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes);}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */},{key:"flush",value:function flush(){if(!this._connected){return false;}if(window.ShadyDOM){ShadyDOM.flush();}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords());}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords());}this._scheduled=false;var info={target:this._target,addedNodes:[],removedNodes:[]};var newNodes=this.constructor.getFlattenedNodes(this._target);var splices=calculateSplices(newNodes,this._effectiveNodes);// process removals
for(var _i37=0,s;_i37<splices.length&&(s=splices[_i37]);_i37++){for(var j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n);}}// process adds
for(var _i38=0,_s2;_i38<splices.length&&(_s2=splices[_i38]);_i38++){for(var _j2=_s2.index;_j2<_s2.index+_s2.addedCount;_j2++){info.addedNodes.push(newNodes[_j2]);}}// update cache
this._effectiveNodes=newNodes;var didFlush=false;if(info.addedNodes.length||info.removedNodes.length){didFlush=true;this.callback.call(this._target,info);}return didFlush;}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_listenSlots",value:function _listenSlots(nodeList){for(var _i39=0;_i39<nodeList.length;_i39++){var n=nodeList[_i39];if(isSlot(n)){n.addEventListener('slotchange',this._boundSchedule);}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_unlistenSlots",value:function _unlistenSlots(nodeList){for(var _i40=0;_i40<nodeList.length;_i40++){var n=nodeList[_i40];if(isSlot(n)){n.removeEventListener('slotchange',this._boundSchedule);}}}}]);return FlattenedNodesObserver;}();_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};/* eslint-enable no-unused-vars */_exports.$flattenedNodesObserver=flattenedNodesObserver;var debouncerQueue=[];/**
                          * Adds a `Debouncer` to a list of globally flushable tasks.
                          *
                          * @param {!Debouncer} debouncer Debouncer to enqueue
                          * @return {void}
                          */var enqueueDebouncer=function enqueueDebouncer(debouncer){debouncerQueue.push(debouncer);};_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;function flushDebouncers(){var didFlush=Boolean(debouncerQueue.length);while(debouncerQueue.length){try{debouncerQueue.shift().flush();}catch(e){setTimeout(function(){throw e;});}}return didFlush;}/**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */var flush$1=function flush$1(){var shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush();}debouncers=flushDebouncers();}while(shadyDOM||debouncers);};_exports.flush$1=_exports.flush=flush$1;var flush$2={enqueueDebouncer:enqueueDebouncer,flush:flush$1};/* eslint-enable no-unused-vars */_exports.$flush=flush$2;var p=Element.prototype;/**
                              * @const {function(this:Node, string): boolean}
                              */var normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector;/**
                                                                                                                                                                   * Cross-platform `element.matches` shim.
                                                                                                                                                                   *
                                                                                                                                                                   * @function matchesSelector
                                                                                                                                                                   * @param {!Node} node Node to check selector against
                                                                                                                                                                   * @param {string} selector Selector to match
                                                                                                                                                                   * @return {boolean} True if node matched selector
                                                                                                                                                                   */var matchesSelector=function matchesSelector(node,selector){return normalizedMatchesSelector.call(node,selector);};/**
    * Node API wrapper class returned from `Polymer.dom.(target)` when
    * `target` is a `Node`.
    *
    */_exports.matchesSelector=matchesSelector;var DomApi=/*#__PURE__*/function(){/**
   * @param {Node} node Node for which to create a Polymer.dom helper object.
   */function DomApi(node){babelHelpers.classCallCheck(this,DomApi);this.node=node;}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!FlattenedNodesObserver} Observer instance
     */babelHelpers.createClass(DomApi,[{key:"observeNodes",value:function observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback);}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!FlattenedNodesObserver} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     */},{key:"unobserveNodes",value:function unobserveNodes(observerHandle){observerHandle.disconnect();}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */},{key:"notifyObserver",value:function notifyObserver(){}/**
                       * Returns true if the provided node is contained with this element's
                       * light-DOM children or shadow root, including any nested shadow roots
                       * of children therein.
                       *
                       * @param {Node} node Node to test
                       * @return {boolean} Returns true if the given `node` is contained within
                       *   this element's light or shadow DOM.
                       */},{key:"deepContains",value:function deepContains(node){if(this.node.contains(node)){return true;}var n=node;var doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=n.parentNode||n.host;}return n===this.node;}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */},{key:"getOwnerRoot",value:function getOwnerRoot(){return this.node.getRootNode();}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     */},{key:"getDistributedNodes",value:function getDistributedNodes(){return this.node.localName==='slot'?this.node.assignedNodes({flatten:true}):[];}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     */},{key:"getDestinationInsertionPoints",value:function getDestinationInsertionPoints(){var ip$=[];var n=this.node.assignedSlot;while(n){ip$.push(n);n=n.assignedSlot;}return ip$;}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */},{key:"importNode",value:function importNode(node,deep){var doc=babelHelpers.instanceof(this.node,Document)?this.node:this.node.ownerDocument;return doc.importNode(node,deep);}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node);}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var c$=this.getEffectiveChildNodes();var list=[];for(var _i41=0,l=c$.length,c;_i41<l&&(c=c$[_i41]);_i41++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c);}}return list;}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * @return {Node|undefined} Currently focused element
     */},{key:"activeElement",get:function get(){var node=this.node;return node._activeElement!==undefined?node._activeElement:node.activeElement;}}]);return DomApi;}();_exports.DomApi=DomApi;function forwardMethods(proto,methods){var _loop=function _loop(_i42){var method=methods[_i42];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApi} */function(){return this.node[method].apply(this.node,arguments);};/* eslint-enable */};for(var _i42=0;_i42<methods.length;_i42++){_loop(_i42);}}function forwardReadOnlyProperties(proto,properties){var _loop2=function _loop2(_i43){var name=properties[_i43];Object.defineProperty(proto,name,{get:function get(){var domApi=/** @type {DomApi} */this;return domApi.node[name];},configurable:true});};for(var _i43=0;_i43<properties.length;_i43++){_loop2(_i43);}}function forwardProperties(proto,properties){var _loop3=function _loop3(_i44){var name=properties[_i44];Object.defineProperty(proto,name,{/**
       * @this {DomApi}
       * @return {*} .
       */get:function get(){return this.node[name];},/**
       * @this {DomApi}
       * @param {*} value .
       */set:function set(value){this.node[name]=value;},configurable:true});};for(var _i44=0;_i44<properties.length;_i44++){_loop3(_i44);}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */var EventApi=/*#__PURE__*/function(){function EventApi(event){babelHelpers.classCallCheck(this,EventApi);this.event=event;}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */babelHelpers.createClass(EventApi,[{key:"rootTarget",get:function get(){return this.event.composedPath()[0];}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */},{key:"localTarget",get:function get(){return this.event.target;}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */},{key:"path",get:function get(){return this.event.composedPath();}}]);return EventApi;}();/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */_exports.EventApi=EventApi;DomApi.prototype.cloneNode;/**
                             * @function
                             * @param {!Node} node
                             * @return {!Node}
                             */DomApi.prototype.appendChild;/**
                               * @function
                               * @param {!Node} newChild
                               * @param {Node} refChild
                               * @return {!Node}
                               */DomApi.prototype.insertBefore;/**
                                * @function
                                * @param {!Node} node
                                * @return {!Node}
                                */DomApi.prototype.removeChild;/**
                               * @function
                               * @param {!Node} oldChild
                               * @param {!Node} newChild
                               * @return {!Node}
                               */DomApi.prototype.replaceChild;/**
                                * @function
                                * @param {string} name
                                * @param {string} value
                                * @return {void}
                                */DomApi.prototype.setAttribute;/**
                                * @function
                                * @param {string} name
                                * @return {void}
                                */DomApi.prototype.removeAttribute;/**
                                   * @function
                                   * @param {string} selector
                                   * @return {?Element}
                                   */DomApi.prototype.querySelector;/**
                                 * @function
                                 * @param {string} selector
                                 * @return {!NodeList<!Element>}
                                 */DomApi.prototype.querySelectorAll;/** @type {?Node} */DomApi.prototype.parentNode;/** @type {?Node} */DomApi.prototype.firstChild;/** @type {?Node} */DomApi.prototype.lastChild;/** @type {?Node} */DomApi.prototype.nextSibling;/** @type {?Node} */DomApi.prototype.previousSibling;/** @type {?HTMLElement} */DomApi.prototype.firstElementChild;/** @type {?HTMLElement} */DomApi.prototype.lastElementChild;/** @type {?HTMLElement} */DomApi.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApi.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApi.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApi.prototype.children;/** @type {?DOMTokenList} */DomApi.prototype.classList;/** @type {string} */DomApi.prototype.textContent;/** @type {string} */DomApi.prototype.innerHTML;forwardMethods(DomApi.prototype,['cloneNode','appendChild','insertBefore','removeChild','replaceChild','setAttribute','removeAttribute','querySelector','querySelectorAll']);forwardReadOnlyProperties(DomApi.prototype,['parentNode','firstChild','lastChild','nextSibling','previousSibling','firstElementChild','lastElementChild','nextElementSibling','previousElementSibling','childNodes','children','classList']);forwardProperties(DomApi.prototype,['textContent','innerHTML']);/**
                                                                    * Legacy DOM and Event manipulation API wrapper factory used to abstract
                                                                    * differences between native Shadow DOM and "Shady DOM" when polyfilling on
                                                                    * older browsers.
                                                                    *
                                                                    * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
                                                                    * in the majority of cases simply facades directly to the standard native
                                                                    * API.
                                                                    *
                                                                    * @summary Legacy DOM and Event manipulation API wrapper factory used to
                                                                    * abstract differences between native Shadow DOM and "Shady DOM."
                                                                    * @param {(Node|Event)=} obj Node or event to operate on
                                                                    * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
                                                                    */var dom=function dom(obj){obj=obj||document;if(!obj.__domApi){var helper;if(babelHelpers.instanceof(obj,Event)){helper=new EventApi(obj);}else{helper=new DomApi(obj);}obj.__domApi=helper;}return obj.__domApi;};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,DomApi:DomApi,EventApi:EventApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;var bundledImportMeta$1=babelHelpers.objectSpread({},meta,{url:new URL('../../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js',meta.url).href});var styleInterface=window.ShadyCSS;/**
                                       * Element class mixin that provides Polymer's "legacy" API intended to be
                                       * backward-compatible to the greatest extent possible with the API
                                       * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
                                       * defined using the `Polymer({...})` function.
                                       *
                                       * @mixinFunction
                                       * @polymer
                                       * @appliesMixin ElementMixin
                                       * @appliesMixin GestureEventListeners
                                       * @property isAttached {boolean} Set to `true` in this element's
                                       *   `connectedCallback` and `false` in `disconnectedCallback`
                                       * @summary Element class mixin that provides Polymer's "legacy" API
                                       */var LegacyElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @private
   */var legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base)));/**
                                                                                     * Map of simple names to touch action names
                                                                                     * @dict
                                                                                     */var DIRECTION_MAP={'x':'pan-x','y':'pan-y','none':'none','all':'auto'};/**
      * @polymer
      * @mixinClass
      * @extends {legacyElementBase}
      * @implements {Polymer_LegacyElementMixin}
      * @unrestricted
      */var LegacyElement=/*#__PURE__*/function(_legacyElementBase){babelHelpers.inherits(LegacyElement,_legacyElementBase);function LegacyElement(){var _this17;babelHelpers.classCallCheck(this,LegacyElement);_this17=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LegacyElement).call(this));/** @type {boolean} */_this17.isAttached;/** @type {WeakMap<!Element, !Object<string, !Function>>} */_this17.__boundListeners;/** @type {Object<string, Function>} */_this17._debouncers;// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
_this17._applyListeners();return _this17;}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */babelHelpers.createClass(LegacyElement,[{key:"created",/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @return {void}
       */value:function created(){}/**
                  * Provides an implementation of `connectedCallback`
                  * which adds Polymer legacy API's `attached` method.
                  * @return {void}
                  * @override
                  */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"connectedCallback",this).call(this);this.isAttached=true;this.attached();}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"attached",value:function attached(){}/**
                   * Provides an implementation of `disconnectedCallback`
                   * which adds Polymer legacy API's `detached` method.
                   * @return {void}
                   * @override
                   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"disconnectedCallback",this).call(this);this.isAttached=false;this.detached();}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @return {void}
       */},{key:"detached",value:function detached(){}/**
                   * Provides an override implementation of `attributeChangedCallback`
                   * which adds the Polymer legacy API's `attributeChanged` method.
                   * @param {string} name Name of attribute.
                   * @param {?string} old Old value of attribute.
                   * @param {?string} value Current value of attribute.
                   * @param {?string} namespace Attribute namespace.
                   * @return {void}
                   * @override
                   */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);this.attributeChanged(name,old,value);}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */},{key:"_initializeProperties",value:function _initializeProperties(){var proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty('__hasRegisterFinished')){proto.__hasRegisterFinished=true;this._registered();}babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_initializeProperties",this).call(this);this.root=/** @type {HTMLElement} */this;this.created();}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       */},{key:"_registered",value:function _registered(){}/**
                      * Overrides the default `Polymer.PropertyEffects` implementation to
                      * add support for installing `hostAttributes` and `listeners`.
                      *
                      * @return {void}
                      * @override
                      */},{key:"ready",value:function ready(){this._ensureAttributes();babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"ready",this).call(this);}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){}/**
                            * Adds element event listeners. Called when the element
                            * is being readied via `ready`. Users should override to
                            * add any required element event listeners.
                            * In performance critical elements, the work done here should be kept
                            * to a minimum since it is done before the element is rendered. In
                            * these elements, consider adding listeners asynchronously so as not to
                            * block render.
                            * @protected
                            * @return {void}
                            */},{key:"_applyListeners",value:function _applyListeners(){}/**
                          * Converts a typed JavaScript value to a string.
                          *
                          * Note this method is provided as backward-compatible legacy API
                          * only.  It is not directly called by any Polymer features. To customize
                          * how properties are serialized to attributes for attribute bindings and
                          * `reflectToAttribute: true` properties as well as this method, override
                          * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
                          *
                          * @param {*} value Value to deserialize
                          * @return {string | undefined} Serialized value
                          */},{key:"serialize",value:function serialize(value){return this._serializeValue(value);}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       */},{key:"deserialize",value:function deserialize(value,type){return this._deserializeValue(value,type);}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       */},{key:"reflectPropertyToAttribute",value:function reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value);}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       */},{key:"serializeValueToAttribute",value:function serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute);}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       */},{key:"extend",value:function extend(prototype,api){if(!(prototype&&api)){return prototype||api;}var n$=Object.getOwnPropertyNames(api);for(var _i45=0,n;_i45<n$.length&&(n=n$[_i45]);_i45++){var pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd);}}return prototype;}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       */},{key:"mixin",value:function mixin(target,source){for(var _i46 in source){target[_i46]=source[_i46];}return target;}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       */},{key:"chainObject",value:function chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype;}return object;}/* **** Begin Template **** */ /**
                                      * Calls `importNode` on the `content` of the `template` specified and
                                      * returns a document fragment containing the imported content.
                                      *
                                      * @param {HTMLTemplateElement} template HTML template element to instance.
                                      * @return {!DocumentFragment} Document fragment containing the imported
                                      *   template content.
                                     */},{key:"instanceTemplate",value:function instanceTemplate(template){var content=this.constructor._contentForTemplate(template);var dom$$1=/** @type {!DocumentFragment} */document.importNode(content,true);return dom$$1;}/* **** Begin Events **** */ /**
                                    * Dispatches a custom event with an optional detail value.
                                    *
                                    * @param {string} type Name of event type.
                                    * @param {*=} detail Detail value containing event-specific
                                    *   payload.
                                    * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
                                    *  options Object specifying options.  These may include:
                                    *  `bubbles` (boolean, defaults to `true`),
                                    *  `cancelable` (boolean, defaults to false), and
                                    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
                                    * @return {!Event} The new event that was fired.
                                    */},{key:"fire",value:function fire(type,detail,options){options=options||{};detail=detail===null||detail===undefined?{}:detail;var event=new Event(type,{bubbles:options.bubbles===undefined?true:options.bubbles,cancelable:Boolean(options.cancelable),composed:options.composed===undefined?true:options.composed});event.detail=detail;var node=options.node||this;node.dispatchEvent(event);return event;}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       */},{key:"listen",value:function listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var hbl=this.__boundListeners||(this.__boundListeners=new WeakMap());var bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl);}var key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this);}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       */},{key:"unlisten",value:function unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var bl=this.__boundListeners&&this.__boundListeners.get(node);var key=eventName+methodName;var handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null;}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       */},{key:"setScrollDirection",value:function setScrollDirection(direction,node){setTouchAction(/** @type {Element} */node||this,DIRECTION_MAP[direction]||'auto');}/* **** End Events **** */ /**
                                  * Convenience method to run `querySelector` on this local DOM scope.
                                  *
                                  * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
                                  *
                                  * @param {string} slctr Selector to run on this local DOM scope
                                  * @return {Element} Element found by the selector, or null if not found.
                                  */},{key:"$$",value:function $$(slctr){return this.root.querySelector(slctr);}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       */},{key:"distributeContent",/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       */value:function distributeContent(){if(window.ShadyDOM&&this.shadowRoot){ShadyDOM.flush();}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.getEffectiveChildNodes();}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var thisEl=/** @type {Element} */this;var domApi=/** @type {DomApi} */dom(thisEl);return domApi.queryDistributedElements(selector);}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       */},{key:"getEffectiveChildren",value:function getEffectiveChildren(){var list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE;});}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       */},{key:"getEffectiveTextContent",value:function getEffectiveTextContent(){var cn=this.getEffectiveChildNodes();var tc=[];for(var _i47=0,c;c=cn[_i47];_i47++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent);}}return tc.join('');}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       */},{key:"queryEffectiveChildren",value:function queryEffectiveChildren(selector){var e$=this.queryDistributedElements(selector);return e$&&e$[0];}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match selector.
       */},{key:"queryAllEffectiveChildren",value:function queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector);}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       */},{key:"getContentChildNodes",value:function getContentChildNodes(slctr){var content=this.root.querySelector(slctr||'slot');return content?/** @type {DomApi} */dom(content).getDistributedNodes():[];}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       */},{key:"getContentChildren",value:function getContentChildren(slctr){var children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE;});return children;}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */},{key:"isLightDescendant",value:function isLightDescendant(node){var thisNode=/** @type {Node} */this;return thisNode!==node&&thisNode.contains(node)&&thisNode.getRootNode()===node.getRootNode();}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       */},{key:"isLocalDescendant",value:function isLocalDescendant(node){return this.root===node.getRootNode();}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {*} container Unused
       * @param  {*} shouldObserve Unused
       * @return {void}
       */},{key:"scopeSubtree",value:function scopeSubtree(container,shouldObserve){}// eslint-disable-line no-unused-vars
/**
     * Returns the computed style value for the given property.
     * @param {string} property The css property name.
     * @return {string} Returns the computed css property value for the given
     * `property`.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
     */},{key:"getComputedStyleValue",value:function getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property);}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     */},{key:"debounce",value:function debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],wait>0?timeOut.after(wait):microTask,callback.bind(this));}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       */},{key:"isDebouncerActive",value:function isDebouncerActive(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive());}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"flushDebouncer",value:function flushDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush();}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */},{key:"cancelDebouncer",value:function cancelDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel();}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       */},{key:"async",value:function async(callback,waitTime){return waitTime>0?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this));}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       */},{key:"cancelAsync",value:function cancelAsync(handle){handle<0?microTask.cancel(~handle):timeOut.cancel(handle);}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     */},{key:"create",value:function create(tag,props){var elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props);}else{for(var n in props){elt[n]=props[n];}}}return elt;}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       */},{key:"elementMatches",value:function elementMatches(selector,node){return matchesSelector(node||this,selector);}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       */},{key:"toggleAttribute",value:function toggleAttribute(name,bool){var node=/** @type {Element} */this;if(arguments.length===3){node=/** @type {Element} */arguments[2];}if(arguments.length==1){bool=!node.hasAttribute(name);}if(bool){node.setAttribute(name,'');return true;}else{node.removeAttribute(name);return false;}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */},{key:"toggleClass",value:function toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(arguments.length==1){bool=!node.classList.contains(name);}if(bool){node.classList.add(name);}else{node.classList.remove(name);}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       */},{key:"transform",value:function transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText;}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number} x X offset.
       * @param {number} y Y offset.
       * @param {number} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       */},{key:"translate3d",value:function translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform('translate3d('+x+','+y+','+z+')',node);}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       */},{key:"arrayDelete",value:function arrayDelete(arrayOrPath,item){var index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(index>=0){return arrayOrPath.splice(index,1);}}else{var arr=_get(this,arrayOrPath);index=arr.indexOf(item);if(index>=0){return this.splice(arrayOrPath,index,1);}}return null;}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     */},{key:"_logger",value:function _logger(level,args){var _console;// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&args.length===1&&Array.isArray(args[0])){args=args[0];}switch(level){case'log':case'warn':case'error':(_console=console)[level].apply(_console,babelHelpers.toConsumableArray(args));}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_log",value:function _log(){for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}this._logger('log',args);}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_warn",value:function _warn(){for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}this._logger('warn',args);}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */},{key:"_error",value:function _error(){for(var _len7=arguments.length,args=new Array(_len7),_key7=0;_key7<_len7;_key7++){args[_key7]=arguments[_key7];}this._logger('error',args);}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       */},{key:"_logf",value:function _logf(methodName){for(var _len8=arguments.length,args=new Array(_len8>1?_len8-1:0),_key8=1;_key8<_len8;_key8++){args[_key8-1]=arguments[_key8];}return['[%s::%s]',this.is,methodName].concat(args);}},{key:"domHost",get:function get(){var root$$1=this.getRootNode();return babelHelpers.instanceof(root$$1,DocumentFragment)?/** @type {ShadowRoot} */root$$1.host:root$$1;}}],[{key:"importMeta",get:function get(){return this.prototype.importMeta;}}]);return LegacyElement;}(legacyElementBase);LegacyElement.prototype.is='';return LegacyElement;});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;var metaProps={attached:true,detached:true,ready:true,created:true,beforeRegister:true,registered:true,attributeChanged:true,// meta objects
behaviors:true};/**
    * Applies a "legacy" behavior or array of behaviors to the provided class.
    *
    * Note: this method will automatically also apply the `LegacyElementMixin`
    * to ensure that any legacy behaviors can rely on legacy Polymer API on
    * the underlying element.
    *
    * @function
    * @template T
    * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
    * @param {function(new:T)} klass Element class.
    * @return {?} Returns a new Element class extended by the
    * passed in `behaviors` and also by `LegacyElementMixin`.
    * @suppress {invalidCasts, checkTypes}
    */function mixinBehaviors(behaviors,klass){if(!behaviors){klass=/** @type {HTMLElement} */klass;// eslint-disable-line no-self-assign
return klass;}// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
klass=LegacyElementMixin(klass);if(!Array.isArray(behaviors)){behaviors=[behaviors];}var superBehaviors=klass.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviors=flattenBehaviors(behaviors,null,superBehaviors);// mixin new behaviors
klass=_mixinBehaviors(behaviors,klass);if(superBehaviors){behaviors=superBehaviors.concat(behaviors);}// Set behaviors on prototype for BC...
klass.prototype.behaviors=behaviors;return klass;}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function _mixinBehaviors(behaviors,klass){for(var _i48=0;_i48<behaviors.length;_i48++){var b=behaviors[_i48];if(b){klass=Array.isArray(b)?_mixinBehaviors(b,klass):GenerateClassFromInfo(b,klass);}}return klass;}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(var _i49=behaviors.length-1;_i49>=0;_i49--){var b=behaviors[_i49];if(b){if(Array.isArray(b)){flattenBehaviors(b,list);}else{// dedup
if(list.indexOf(b)<0&&(!exclude||exclude.indexOf(b)<0)){list.unshift(b);}}}else{console.warn('behavior is null, check for missing or 404 import');}}return list;}/**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */function GenerateClassFromInfo(info,Base){/** @private */var PolymerGenerated=/*#__PURE__*/function(_Base){babelHelpers.inherits(PolymerGenerated,_Base);function PolymerGenerated(){babelHelpers.classCallCheck(this,PolymerGenerated);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerGenerated).apply(this,arguments));}babelHelpers.createClass(PolymerGenerated,[{key:"created",/**
       * @return {void}
       */value:function created(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"created",this).call(this);if(info.created){info.created.call(this);}}/**
       * @return {void}
       */},{key:"_registered",value:function _registered(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_registered",this).call(this);/* NOTE: `beforeRegister` is called here for bc, but the behavior
                            is different than in 1.x. In 1.0, the method was called *after*
                            mixing prototypes together but *before* processing of meta-objects.
                            However, dynamic effects can still be set here and can be done either
                            in `beforeRegister` or `registered`. It is no longer possible to set
                            `is` in `beforeRegister` as you could in 1.x.
                           */if(info.beforeRegister){info.beforeRegister.call(Object.getPrototypeOf(this));}if(info.registered){info.registered.call(Object.getPrototypeOf(this));}}/**
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_applyListeners",this).call(this);if(info.listeners){for(var l in info.listeners){this._addMethodEventListenerToNode(this,l,info.listeners[l]);}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */},{key:"_ensureAttributes",value:function _ensureAttributes(){if(info.hostAttributes){for(var a in info.hostAttributes){this._ensureAttribute(a,info.hostAttributes[a]);}}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_ensureAttributes",this).call(this);}/**
       * @return {void}
       */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"ready",this).call(this);if(info.ready){info.ready.call(this);}}/**
       * @return {void}
       */},{key:"attached",value:function attached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attached",this).call(this);if(info.attached){info.attached.call(this);}}/**
       * @return {void}
       */},{key:"detached",value:function detached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"detached",this).call(this);if(info.detached){info.detached.call(this);}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attributeChanged",this).call(this,name,old,value);if(info.attributeChanged){info.attributeChanged.call(this,name,old,value);}}}],[{key:"properties",get:function get(){return info.properties;}},{key:"observers",get:function get(){return info.observers;}}]);return PolymerGenerated;}(Base);PolymerGenerated.generatedFrom=info;for(var _p13 in info){// NOTE: cannot copy `metaProps` methods onto prototype at least because
// `super.ready` must be called and is not included in the user fn.
if(!(_p13 in metaProps)){var pd=Object.getOwnPropertyDescriptor(info,_p13);if(pd){Object.defineProperty(PolymerGenerated.prototype,_p13,pd);}}}return PolymerGenerated;}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */var Class=function Class(info,mixin){if(!info){console.warn("Polymer's Class function requires `info` argument");}var baseWithBehaviors=info.behaviors?// note: mixinBehaviors ensures `LegacyElementMixin`.
mixinBehaviors(info.behaviors,HTMLElement):LegacyElementMixin(HTMLElement);var baseWithMixin=mixin?mixin(baseWithBehaviors):baseWithBehaviors;var klass=GenerateClassFromInfo(info,baseWithMixin);// decorate klass with registration info
klass.is=info.is;return klass;};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;var Polymer=function Polymer(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
var klass;if(typeof info==='function'){klass=info;}else{klass=Polymer.Class(info);}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass;};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){var isObject;if(mutableData){isObject=babelHelpers.typeof(value)==='object'&&value!==null;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property];}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value;}return shouldChange;}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */var MutableData=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */var MutableData=/*#__PURE__*/function(_superClass4){babelHelpers.inherits(MutableData,_superClass4);function MutableData(){babelHelpers.classCallCheck(this,MutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MutableData).apply(this,arguments));}babelHelpers.createClass(MutableData,[{key:"_shouldPropertyChange",/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,true);}}]);return MutableData;}(superClass);return MutableData;});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;var OptionalMutableData=dedupingMixin(function(superClass){/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */var OptionalMutableData=/*#__PURE__*/function(_superClass5){babelHelpers.inherits(OptionalMutableData,_superClass5);function OptionalMutableData(){babelHelpers.classCallCheck(this,OptionalMutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OptionalMutableData).apply(this,arguments));}babelHelpers.createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData);}}],[{key:"properties",get:function get(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean};}}]);return OptionalMutableData;}(superClass);return OptionalMutableData;});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;var newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance;}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:true}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */var DataTemplate=PropertyEffects(HTMLTemplateElementExtension);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */var MutableDataTemplate=MutableData(DataTemplate);// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor();newInstance=null;}/**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */var base=PropertyEffects(/*#__PURE__*/function(){function _class2(){babelHelpers.classCallCheck(this,_class2);}return _class2;}());/**
                                         * @polymer
                                         * @customElement
                                         * @appliesMixin PropertyEffects
                                         * @unrestricted
                                         */var TemplateInstanceBase=/*#__PURE__*/function(_base3){babelHelpers.inherits(TemplateInstanceBase,_base3);function TemplateInstanceBase(props){var _this18;babelHelpers.classCallCheck(this,TemplateInstanceBase);_this18=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstanceBase).call(this));_this18._configureProperties(props);_this18.root=_this18._stampTemplate(_this18.__dataHost);// Save list of stamped children
var children=_this18.children=[];for(var n=_this18.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this18));}if(_this18.__templatizeOwner&&_this18.__templatizeOwner.__hideTemplateChildren__){_this18._showHideChildren(true);}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this18.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this18._enableProperties();}return _this18;}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */babelHelpers.createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(options.forwardHostProp){for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost['_host_'+hprop]);}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(var iprop in props){this._setPendingProperty(iprop,props[iprop]);}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,false,true)){this.__dataHost._enqueueClient(this);}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this19=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this19;handler(e);});}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler);}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hide){var c=this.children;for(var _i50=0;_i50<c.length;_i50++){var n=c[_i50];// Ignore non-changes
if(Boolean(hide)!=Boolean(n.__hideTemplateChildren__)){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent='';}else{n.textContent=n.__polymerTextContent__;}// remove and replace slot
}else if(n.localName==='slot'){if(hide){n.__polymerReplaced__=document.createComment('hidden-slot');n.parentNode.replaceChild(n.__polymerReplaced__,n);}else{var replace=n.__polymerReplaced__;if(replace){replace.parentNode.replaceChild(n,replace);}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display='none';}else{n.style.display=n.__polymerDisplay__;}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide);}}}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&prop=='textContent'){node.__polymerTextContent__=value;}else{babelHelpers.get(babelHelpers.getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value);}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */},{key:"dispatchEvent",/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     */value:function dispatchEvent(event){// eslint-disable-line no-unused-vars
return true;}},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost;}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model;}return model;}}]);return TemplateInstanceBase;}(base);/** @type {!DataTemplate} */_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */var MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost;}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){// Anonymous class created by the templatize
var base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;/**
                                                                                        * @constructor
                                                                                        * @extends {base}
                                                                                        * @private
                                                                                        */var klass=/*#__PURE__*/function(_base4){babelHelpers.inherits(klass,_base4);function klass(){babelHelpers.classCallCheck(this,klass);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(klass).apply(this,arguments));}return klass;}(base);klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass;}/**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(template,templateInfo,options){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){// Provide data API and property effects on memoized template class
var klass=templateInfo.templatizeTemplateClass;if(!klass){var _base5=options.mutableData?MutableDataTemplate:DataTemplate;/** @private */klass=templateInfo.templatizeTemplateClass=/*#__PURE__*/function(_base6){babelHelpers.inherits(TemplatizedTemplate,_base6);function TemplatizedTemplate(){babelHelpers.classCallCheck(this,TemplatizedTemplate);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplatizedTemplate).apply(this,arguments));}return TemplatizedTemplate;}(_base5);// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect('_host_'+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty('_host_'+prop);}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto);}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties();}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring('_host_'.length),props[prop]);};}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)});}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()});}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop]);};}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath('_host_'+prop,props[prop],true,true);};}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */function _templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error('strictTemplatePolicy: template owner not trusted');}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error('A <template> can only be templatized once');}template.__templatizeOwner=owner;var ctor=owner?owner.constructor:TemplateInstanceBase;var templateInfo=ctor._parseTemplate(template);// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
var baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass;}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
/** @private */var klass=/*#__PURE__*/function(_baseClass){babelHelpers.inherits(TemplateInstance,_baseClass);function TemplateInstance(){babelHelpers.classCallCheck(this,TemplateInstance);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstance).apply(this,arguments));}return TemplateInstance;}(baseClass);klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass;}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function _modelForElement(template,node){var model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost;}else{return model;}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=node.parentNode;}}return null;}var templatize$1={templatize:_templatize,modelForElement:_modelForElement,TemplateInstanceBase:TemplateInstanceBase};/**
    * @typedef {{
    *   _templatizerTemplate: HTMLTemplateElement,
    *   _parentModel: boolean,
    *   _instanceProps: Object,
    *   _forwardHostPropV2: Function,
    *   _notifyInstancePropV2: Function,
    *   ctor: TemplateInstanceBase
    * }}
    */_exports.$templatize=templatize$1;var TemplatizerUser;// eslint-disable-line
/**
 * The `Templatizer` behavior adds methods to generate instances of
 * templates that are each managed by an anonymous `PropertyEffects`
 * instance where data-bindings in the stamped template content are bound to
 * accessors on itself.
 *
 * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
 * only.  For non-hybrid usage, the `Templatize` library
 * should be used instead.
 *
 * Example:
 *
 *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     this.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = this.stamp({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. light DOM
 *     dom(this).appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * Users of `Templatizer` may need to implement the following abstract
 * API's to determine how properties and paths from the host should be
 * forwarded into to instances:
 *
 *     _forwardHostPropV2: function(prop, value)
 *
 * Likewise, users may implement these additional abstract API's to determine
 * how instance-specific properties that change on the instance should be
 * forwarded out to the host, if necessary.
 *
 *     _notifyInstancePropV2: function(inst, prop, value)
 *
 * In order to determine which properties are instance-specific and require
 * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
 * object containing keys for each instance prop, for example:
 *
 *     _instanceProps: {
 *       item: true,
 *       index: true
 *     }
 *
 * Any properties used in the template that are not defined in _instanceProp
 * will be forwarded out to the Templatize `owner` automatically.
 *
 * Users may also implement the following abstract function to show or
 * hide any DOM generated using `stamp`:
 *
 *     _showHideChildren: function(shouldHide)
 *
 * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
 * as the implementations will need to differ from the callbacks required
 * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
 * between versions 1.x and 2.x.
 *
 * @polymerBehavior
 */var Templatizer={/**
   * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
   * for the provided template.  This method should be called once per
   * template to prepare an element for stamping the template, followed
   * by `stamp` to create new instances of the template.
   *
   * @param {!HTMLTemplateElement} template Template to prepare
   * @param {boolean=} mutableData When `true`, the generated class will skip
   *   strict dirty-checking for objects and arrays (always consider them to
   *   be "dirty"). Defaults to false.
   * @return {void}
   * @this {TemplatizerUser}
   */templatize:function templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=_templatize(template,this,{mutableData:Boolean(mutableData),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2});},/**
   * Creates an instance of the template prepared by `templatize`.  The object
   * returned is an instance of the anonymous class generated by `templatize`
   * whose `root` property is a document fragment containing newly cloned
   * template content, and which has property accessors corresponding to
   * properties referenced in template bindings.
   *
   * @param {Object=} model Object containing initial property values to
   *   populate into the template bindings.
   * @return {TemplateInstanceBase} Returns the created instance of
   * the template prepared by `templatize`.
   * @this {TemplatizerUser}
   */stamp:function stamp(model){return new this.ctor(model);},/**
   * Returns the template "model" (`TemplateInstance`) associated with
   * a given element, which serves as the binding scope for the template
   * instance the element is contained in.  A template model should be used
   * to manipulate data associated with this template instance.
   *
   * @param {HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   * @this {TemplatizerUser}
   */modelForElement:function modelForElement(el){return _modelForElement(this._templatizerTemplate,el);}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;var domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));/**
                                                                                               * Custom element to allow using Polymer's template features (data binding,
                                                                                               * declarative event listeners, etc.) in the main document without defining
                                                                                               * a new custom element.
                                                                                               *
                                                                                               * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
                                                                                               * element, which will immediately stamp the wrapped template into the main
                                                                                               * document and bind elements to the `dom-bind` element itself as the
                                                                                               * binding scope.
                                                                                               *
                                                                                               * @polymer
                                                                                               * @customElement
                                                                                               * @appliesMixin PropertyEffects
                                                                                               * @appliesMixin OptionalMutableData
                                                                                               * @appliesMixin GestureEventListeners
                                                                                               * @extends {domBindBase}
                                                                                               * @summary Custom element to allow using Polymer's template features (data
                                                                                               *   binding, declarative event listeners, etc.) in the main document.
                                                                                               */var DomBind=/*#__PURE__*/function(_domBindBase){babelHelpers.inherits(DomBind,_domBindBase);babelHelpers.createClass(DomBind,null,[{key:"observedAttributes",get:function get(){return['mutable-data'];}}]);function DomBind(){var _this20;babelHelpers.classCallCheck(this,DomBind);_this20=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomBind).call(this));if(strictTemplatePolicy){throw new Error("strictTemplatePolicy: dom-bind not allowed");}_this20.root=null;_this20.$=null;_this20.__children=null;return _this20;}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomBind,[{key:"attributeChangedCallback",value:function attributeChangedCallback(){// assumes only one observed attribute
this.mutableData=true;}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){this.style.display='none';this.render();}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.__removeChildren();}},{key:"__insertChildren",value:function __insertChildren(){this.parentNode.insertBefore(this.root,this);}},{key:"__removeChildren",value:function __removeChildren(){if(this.__children){for(var _i51=0;_i51<this.__children.length;_i51++){this.root.appendChild(this.__children[_i51]);}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */},{key:"render",value:function render(){var _this21=this;var template;if(!this.__children){template=/** @type {HTMLTemplateElement} */template||this.querySelector('template');if(!template){// Wait until childList changes and template should be there by then
var _observer=new MutationObserver(function(){template=/** @type {HTMLTemplateElement} */_this21.querySelector('template');if(template){_observer.disconnect();_this21.render();}else{throw new Error('dom-bind requires a <template> child');}});_observer.observe(this,{childList:true});return;}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n;}this._enableProperties();}this.__insertChildren();this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));}}]);return DomBind;}(domBindBase);_exports.DomBind=DomBind;customElements.define('dom-bind',DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;var LiteralString=/*#__PURE__*/function(){function LiteralString(string){babelHelpers.classCallCheck(this,LiteralString);/** @type {string} */this.value=string.toString();}/**
     * @return {string} LiteralString string value
     * @override
     */babelHelpers.createClass(LiteralString,[{key:"toString",value:function toString(){return this.value;}}]);return LiteralString;}();/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(babelHelpers.instanceof(value,LiteralString)){return(/** @type {!LiteralString} */value.value);}else{throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(babelHelpers.instanceof(value,HTMLTemplateElement)){return(/** @type {!HTMLTemplateElement } */value.innerHTML);}else if(babelHelpers.instanceof(value,LiteralString)){return literalValue(value);}else{throw new Error("non-template value passed to Polymer's html function: ".concat(value));}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */var html=function html(strings){var template=/** @type {!HTMLTemplateElement} */document.createElement('template');for(var _len9=arguments.length,values=new Array(_len9>1?_len9-1:0),_key9=1;_key9<_len9;_key9++){values[_key9-1]=arguments[_key9];}template.innerHTML=values.reduce(function(acc,v,idx){return acc+htmlValue(v)+strings[idx+1];},strings[0]);return template;};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$3=_exports.html$2=_exports.html$1=html;var htmlLiteral=function htmlLiteral(strings){for(var _len10=arguments.length,values=new Array(_len10>1?_len10-1:0),_key10=1;_key10<_len10;_key10++){values[_key10-1]=arguments[_key10];}return new LiteralString(values.reduce(function(acc,v,idx){return acc+literalValue(v)+strings[idx+1];},strings[0]));};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;var PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;var domRepeatBase=OptionalMutableData(PolymerElement);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */var DomRepeat=/*#__PURE__*/function(_domRepeatBase){babelHelpers.inherits(DomRepeat,_domRepeatBase);babelHelpers.createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-repeat';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:'item'},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:'index'},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:'itemsIndex'},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:'__sortChanged'},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:'__filterChanged'},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:'__observeChanged'},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:true,readOnly:true},/**
       * Defines an initial count of template instances to render after setting
       * the `items` array, before the next paint, and puts the `dom-repeat`
       * into "chunking mode".  The remaining items will be created and rendered
       * incrementally at each animation frame therof until all instances have
       * been rendered.
       */initialCount:{type:Number,observer:'__initializeChunking'},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:'__computeFrameTime(targetFramerate)'}};}},{key:"observers",get:function get(){return['__itemsChanged(items.*)'];}}]);function DomRepeat(){var _this22;babelHelpers.classCallCheck(this,DomRepeat);_this22=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomRepeat).call(this));_this22.__instances=[];_this22.__limit=Infinity;_this22.__pool=[];_this22.__renderDebouncer=null;_this22.__itemsIdxToInstIdx={};_this22.__chunkCount=null;_this22.__lastChunkTime=null;_this22.__sortFn=null;_this22.__filterFn=null;_this22.__observePaths=null;/** @type {?function(new:Polymer.TemplateInstanceBase, *)} */_this22.__ctor=null;_this22.__isDetached=true;_this22.template=null;return _this22;}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=true;for(var _i52=0;_i52<this.__instances.length;_i52++){this.__detachInstance(_i52);}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);this.style.display='none';// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=false;var parent=this.parentNode;for(var _i53=0;_i53<this.__instances.length;_i53++){this.__attachInstance(_i53,parent);}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this23=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){var _template3=this.template=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template3){// // Wait until childList changes and template should be there by then
var _observer2=new MutationObserver(function(){if(_this23.querySelector('template')){_observer2.disconnect();_this23.__render();}else{throw new Error('dom-repeat requires a <template> child');}});_observer2.observe(this,{childList:true});return false;}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.itemsIndexAs]=true;this.__ctor=_templatize(_template3,this,{mutableData:this.mutableData,parentModel:true,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function forwardHostProp(prop,value){var i$=this.__instances;for(var _i54=0,inst;_i54<i$.length&&(inst=i$[_i54]);_i54++){inst.forwardHostProp(prop,value);}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value;}var _path3=translate(this.as,'items.'+idx,prop);this.notifyPath(_path3,value);}}});}return true;}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost;}},{key:"__functionFromPropertyValue",value:function __functionFromPropertyValue(functionOrMethodName){if(typeof functionOrMethodName==='string'){var methodName=functionOrMethodName;var obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments);};}return functionOrMethodName;}},{key:"__sortChanged",value:function __sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render);}}},{key:"__filterChanged",value:function __filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render);}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1000/rate);}},{key:"__initializeChunking",value:function __initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now();}}},{key:"__tryRenderChunk",value:function __tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk);}}},{key:"__requestRenderChunk",value:function __requestRenderChunk(){var _this24=this;requestAnimationFrame(function(){return _this24.__renderChunk();});}},{key:"__renderChunk",value:function __renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
var currChunkTime=performance.now();var ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render);}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace('.*','.').split(' ');}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn('dom-repeat expected array for `items`, found',this.items);}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__initializeChunking();this.__debounceRender(this.__render);}}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay);}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
var paths=this.__observePaths;for(var _i55=0;_i55<paths.length;_i55++){if(path.indexOf(paths[_i55])===0){this.__debounceRender(this.__render,this.delay);}}}}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn){var delay=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,delay>0?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer);}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1();}},{key:"__render",value:function __render(){if(!this.__ensureTemplatized()){// No template found yet
return;}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));// Check to see if we need to render more items
this.__tryRenderChunk();}},{key:"__applyFullRefresh",value:function __applyFullRefresh(){var _this25=this;var items=this.items||[];var isntIdxToItemsIdx=new Array(items.length);for(var _i56=0;_i56<items.length;_i56++){isntIdxToItemsIdx[_i56]=_i56;}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this25.__filterFn(items[i],idx,array);});}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this25.__sortFn(items[a],items[b]);});}// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};var instIdx=0;// Generate instances and assign items
var limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){var inst=this.__instances[instIdx];var itemIdx=isntIdxToItemsIdx[instIdx];var item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{this.__insertInstance(item,instIdx,itemIdx);}}// Remove any extra instances from previous state
for(var _i57=this.__instances.length-1;_i57>=instIdx;_i57--){this.__detachAndRemoveInstance(_i57);}}},{key:"__detachInstance",value:function __detachInstance(idx){var inst=this.__instances[idx];for(var _i58=0;_i58<inst.children.length;_i58++){var el=inst.children[_i58];inst.root.appendChild(el);}return inst;}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];parent.insertBefore(inst.root,this);}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){var inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst);}this.__instances.splice(idx,1);}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model);}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties();}else{inst=this.__stampInstance(item,instIdx,itemIdx);}var beforeRow=this.__instances[instIdx+1];var beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst;}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var _i59=0;_i59<this.__instances.length;_i59++){this.__instances[_i59]._showHideChildren(hidden);}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6);// 'items.'.length == 6
var dot=itemsPath.indexOf('.');var itemsIdx=dot<0?itemsPath:itemsPath.substring(0,dot);// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=dot<0?'':itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
var instIdx=this.__itemsIdxToInstIdx[itemsIdx];var inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?'.'+itemSubPath:'');// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,false,true);inst._flushProperties();}return true;}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as];}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs];}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return _modelForElement(this.template,el);}}]);return DomRepeat;}(domRepeatBase);_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;var DomIf=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(DomIf,_PolymerElement);babelHelpers.createClass(DomIf,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'dom-if';}},{key:"template",get:function get(){return null;}},{key:"properties",get:function get(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */ /**
           * A boolean indicating whether this template should stamp.
           */if:{type:Boolean,observer:'__debounceRender'},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:'__debounceRender'}};}}]);function DomIf(){var _this26;babelHelpers.classCallCheck(this,DomIf);_this26=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIf).call(this));_this26.__renderDebouncer=null;_this26.__invalidProps=null;_this26.__instance=null;_this26._lastIf=false;_this26.__ctor=null;_this26.__hideTemplateChildren__=false;return _this26;}babelHelpers.createClass(DomIf,[{key:"__debounceRender",value:function __debounceRender(){var _this27=this;// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,function(){return _this27.__render();});enqueueDebouncer(this.__renderDebouncer);}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"disconnectedCallback",this).call(this);if(!this.parentNode||this.parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!this.parentNode.host){this.__teardownInstance();}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"connectedCallback",this).call(this);this.style.display='none';if(this.if){this.__debounceRender();}}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){flush$1();}},{key:"__render",value:function __render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return;}this._showHideChildren();}else if(this.restamp){this.__teardownInstance();}if(!this.restamp&&this.__instance){this._showHideChildren();}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent('dom-change',{bubbles:true,composed:true}));this._lastIf=this.if;}}},{key:"__ensureInstance",value:function __ensureInstance(){var _this28=this;var parentNode=this.parentNode;// Guard against element being detached while render was queued
if(parentNode){if(!this.__ctor){var _template4=/** @type {HTMLTemplateElement} */this.querySelector('template');if(!_template4){// Wait until childList changes and template should be there by then
var _observer3=new MutationObserver(function(){if(_this28.querySelector('template')){_observer3.disconnect();_this28.__render();}else{throw new Error('dom-if requires a <template> child');}});_observer3.observe(this,{childList:true});return false;}this.__ctor=_templatize(_template4,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:true,/**
           * @param {string} prop Property to forward
           * @param {*} value Value of property
           * @this {DomIf}
           */forwardHostProp:function forwardHostProp(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value);}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=true;}}}});}if(!this.__instance){this.__instance=new this.__ctor();parentNode.insertBefore(this.__instance.root,this);}else{this.__syncHostProperties();var c$=this.__instance.children;if(c$&&c$.length){// Detect case where dom-if was re-attached in new position
var lastChild=this.previousSibling;if(lastChild!==c$[c$.length-1]){for(var _i60=0,n;_i60<c$.length&&(n=c$[_i60]);_i60++){parentNode.insertBefore(n,this);}}}}}return true;}},{key:"__syncHostProperties",value:function __syncHostProperties(){var props=this.__invalidProps;if(props){for(var prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop]);}this.__invalidProps=null;this.__instance._flushProperties();}}},{key:"__teardownInstance",value:function __teardownInstance(){if(this.__instance){var c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
var parent=c$[0].parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){for(var _i61=0,n;_i61<c$.length&&(n=c$[_i61]);_i61++){parent.removeChild(n);}}}this.__instance=null;this.__invalidProps=null;}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden);}}}]);return DomIf;}(PolymerElement);_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;var ArraySelectorMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_ElementMixin}
   * @private
   */var elementBase=ElementMixin(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_ArraySelectorMixin}
                                                  * @unrestricted
                                                  */var ArraySelectorMixin=/*#__PURE__*/function(_elementBase2){babelHelpers.inherits(ArraySelectorMixin,_elementBase2);babelHelpers.createClass(ArraySelectorMixin,null,[{key:"properties",get:function get(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:false},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?(Object|Array<!Object>)}
         */selected:{type:Object,notify:true},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:true},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:false}};}},{key:"observers",get:function get(){return['__updateSelection(multi, items.*)'];}}]);function ArraySelectorMixin(){var _this29;babelHelpers.classCallCheck(this,ArraySelectorMixin);_this29=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelectorMixin).call(this));_this29.__lastItems=null;_this29.__lastMulti=null;_this29.__selectedMap=null;return _this29;}babelHelpers.createClass(ArraySelectorMixin,[{key:"__updateSelection",value:function __updateSelection(multi,itemsInfo){var path=itemsInfo.path;if(path=='items'){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
var newItems=itemsInfo.base||[];var lastItems=this.__lastItems;var lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection();}if(lastItems){var splices=calculateSplices(newItems,lastItems);this.__applySplices(splices);}this.__lastItems=newItems;this.__lastMulti=multi;}else if(itemsInfo.path=='items.splices'){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices);}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
var _part5=path.slice('items.'.length);var idx=parseInt(_part5,10);if(_part5.indexOf('.')<0&&_part5==idx){this.__deselectChangedIdx(idx);}}}},{key:"__applySplices",value:function __applySplices(splices){var _this30=this;var selected=this.__selectedMap;// Adjust selected indices and mark removals
var _loop4=function _loop4(_i62){var s=splices[_i62];selected.forEach(function(idx,item){if(idx<s.index){// no change
}else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length);}else{// remove index
selected.set(item,-1);}});for(var j=0;j<s.addedCount;j++){var idx=s.index+j;if(selected.has(_this30.items[idx])){selected.set(_this30.items[idx],idx);}}};for(var _i62=0;_i62<splices.length;_i62++){_loop4(_i62);}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
var sidx=0;selected.forEach(function(idx,item){if(idx<0){if(_this30.multi){_this30.splice('selected',sidx,1);}else{_this30.selected=_this30.selectedItem=null;}selected.delete(item);}else{sidx++;}});}},{key:"__updateLinks",value:function __updateLinks(){var _this31=this;this.__dataLinkedPaths={};if(this.multi){var sidx=0;this.__selectedMap.forEach(function(idx){if(idx>=0){_this31.linkPaths('items.'+idx,'selected.'+sidx++);}});}else{this.__selectedMap.forEach(function(idx){_this31.linkPaths('selected','items.'+idx);_this31.linkPaths('selectedItem','items.'+idx);});}}/**
       * Clears the selection state.
       * @return {void}
       */},{key:"clearSelection",value:function clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map();// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null;}/**
       * Returns whether the item is currently selected.
       *
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isSelected",value:function isSelected(item){return this.__selectedMap.has(item);}/**
       * Returns whether the item is currently selected.
       *
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isIndexSelected",value:function isIndexSelected(idx){return this.isSelected(this.items[idx]);}},{key:"__deselectChangedIdx",value:function __deselectChangedIdx(idx){var _this32=this;var sidx=this.__selectedIndexForItemIndex(idx);if(sidx>=0){var _i63=0;this.__selectedMap.forEach(function(idx,item){if(sidx==_i63++){_this32.deselect(item);}});}}},{key:"__selectedIndexForItemIndex",value:function __selectedIndexForItemIndex(idx){var selected=this.__dataLinkedPaths['items.'+idx];if(selected){return parseInt(selected.slice('selected.'.length),10);}}/**
       * Deselects the given item if it is already selected.
       *
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */},{key:"deselect",value:function deselect(item){var idx=this.__selectedMap.get(item);if(idx>=0){this.__selectedMap.delete(item);var sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx);}this.__updateLinks();if(this.multi){this.splice('selected',sidx,1);}else{this.selected=this.selectedItem=null;}}}/**
       * Deselects the given index if it is already selected.
       *
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */},{key:"deselectIndex",value:function deselectIndex(idx){this.deselect(this.items[idx]);}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {*} item Item from `items` array to select
       * @return {void}
       */},{key:"select",value:function select(item){this.selectIndex(this.items.indexOf(item));}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */},{key:"selectIndex",value:function selectIndex(idx){var item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear();}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push('selected',item);}else{this.selected=this.selectedItem=item;}}else if(this.toggle){this.deselectIndex(idx);}}}]);return ArraySelectorMixin;}(elementBase);return ArraySelectorMixin;});// export mixin
_exports.ArraySelectorMixin=ArraySelectorMixin;var baseArraySelector=ArraySelectorMixin(PolymerElement);/**
                                                             * Element implementing the `ArraySelector` mixin, which records
                                                             * dynamic associations between item paths in a master `items` array and a
                                                             * `selected` array such that path changes to the master array (at the host)
                                                             * element or elsewhere via data-binding) are correctly propagated to items
                                                             * in the selected array and vice-versa.
                                                             *
                                                             * The `items` property accepts an array of user data, and via the
                                                             * `select(item)` and `deselect(item)` API, updates the `selected` property
                                                             * which may be bound to other parts of the application, and any changes to
                                                             * sub-fields of `selected` item(s) will be kept in sync with items in the
                                                             * `items` array.  When `multi` is false, `selected` is a property
                                                             * representing the last selected item.  When `multi` is true, `selected`
                                                             * is an array of multiply selected items.
                                                             *
                                                             * Example:
                                                             *
                                                             * ```js
                                                             * import {PolymerElement} from '@polymer/polymer';
                                                             * import '@polymer/polymer/lib/elements/array-selector.js';
                                                             *
                                                             * class EmployeeList extends PolymerElement {
                                                             *   static get _template() {
                                                             *     return html`
                                                             *         <div> Employee list: </div>
                                                             *         <dom-repeat id="employeeList" items="{{employees}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *               <div>Last name: <span>{{item.last}}</span></div>
                                                             *               <button on-click="toggleSelection">Select</button>
                                                             *           </template>
                                                             *         </dom-repeat>
                                                             *
                                                             *         <array-selector id="selector"
                                                             *                         items="{{employees}}"
                                                             *                         selected="{{selected}}"
                                                             *                         multi toggle></array-selector>
                                                             *
                                                             *         <div> Selected employees: </div>
                                                             *         <dom-repeat items="{{selected}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *             <div>Last name: <span>{{item.last}}</span></div>
                                                             *           </template>
                                                             *         </dom-repeat>`;
                                                             *   }
                                                             *   static get is() { return 'employee-list'; }
                                                             *   static get properties() {
                                                             *     return {
                                                             *       employees: {
                                                             *         value() {
                                                             *           return [
                                                             *             {first: 'Bob', last: 'Smith'},
                                                             *             {first: 'Sally', last: 'Johnson'},
                                                             *             ...
                                                             *           ];
                                                             *         }
                                                             *       }
                                                             *     };
                                                             *   }
                                                             *   toggleSelection(e) {
                                                             *     const item = this.$.employeeList.itemForElement(e.target);
                                                             *     this.$.selector.select(item);
                                                             *   }
                                                             * }
                                                             * ```
                                                             *
                                                             * @polymer
                                                             * @customElement
                                                             * @extends {baseArraySelector}
                                                             * @appliesMixin ArraySelectorMixin
                                                             * @summary Custom element that links paths between an input `items` array and
                                                             *   an output `selected` item or array based on calls to its selection API.
                                                             */var ArraySelector=/*#__PURE__*/function(_baseArraySelector){babelHelpers.inherits(ArraySelector,_baseArraySelector);function ArraySelector(){babelHelpers.classCallCheck(this,ArraySelector);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelector).apply(this,arguments));}babelHelpers.createClass(ArraySelector,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return'array-selector';}}]);return ArraySelector;}(baseArraySelector);_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$arraySelector=arraySelector;'use strict';var customStyleInterface$1=new CustomStyleInterface();if(!window.ShadyCSS){window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties);},/**
     * @param {Element} element
     */styleElement:function styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface$1.processStyles();},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties);},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property);},flushCustomStyles:function flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;var attr='include';var CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;/**
                                                                     * Custom element for defining styles in the main document that can take
                                                                     * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
                                                                     * for style encapsulation, custom properties, and custom mixins.
                                                                     *
                                                                     * - Document styles defined in a `<custom-style>` are shimmed to ensure they
                                                                     *   do not leak into local DOM when running on browsers without native
                                                                     *   Shadow DOM.
                                                                     * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
                                                                     *   to define custom properties that apply to all custom elements.
                                                                     * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
                                                                     *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
                                                                     *   (`shadycss/apply-shim.html`).
                                                                     *
                                                                     * To use:
                                                                     *
                                                                     * - Import `custom-style.html`.
                                                                     * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
                                                                     *   contains the CSS rules you want to shim.
                                                                     *
                                                                     * For example:
                                                                     *
                                                                     * ```html
                                                                     * <!-- import apply shim--only required if using mixins -->
                                                                     * <link rel="import" href="bower_components/shadycss/apply-shim.html">
                                                                     * <!-- import custom-style element -->
                                                                     * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
                                                                     *
                                                                     * <custom-style>
                                                                     *   <style>
                                                                     *     html {
                                                                     *       --custom-color: blue;
                                                                     *       --custom-mixin: {
                                                                     *         font-weight: bold;
                                                                     *         color: red;
                                                                     *       };
                                                                     *     }
                                                                     *   </style>
                                                                     * </custom-style>
                                                                     * ```
                                                                     *
                                                                     * @customElement
                                                                     * @extends HTMLElement
                                                                     * @summary Custom element for defining styles in the main document that can
                                                                     *   take advantage of Polymer's style scoping and custom properties shims.
                                                                     */var CustomStyle=/*#__PURE__*/function(_HTMLElement2){babelHelpers.inherits(CustomStyle,_HTMLElement2);function CustomStyle(){var _this33;babelHelpers.classCallCheck(this,CustomStyle);_this33=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CustomStyle).call(this));_this33._style=null;CustomStyleInterface$1.addCustomStyle(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this33)));return _this33;}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */babelHelpers.createClass(CustomStyle,[{key:"getStyle",value:function getStyle(){if(this._style){return this._style;}var style=/** @type {HTMLStyleElement} */this.querySelector('style');if(!style){return null;}this._style=style;var include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent;}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this);}return this._style;}}]);return CustomStyle;}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.CustomStyle=CustomStyle;window.customElements.define('custom-style',CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;var mutablePropertyChange$1;/** @suppress {missingProperties} */(function(){mutablePropertyChange$1=MutableData._mutablePropertyChange;})();/**
       * Legacy element behavior to skip strict dirty-checking for objects and arrays,
       * (always consider them to be "dirty") for use on legacy API Polymer elements.
       *
       * By default, `Polymer.PropertyEffects` performs strict dirty checking on
       * objects, which means that any deep modifications to an object or array will
       * not be propagated unless "immutable" data patterns are used (i.e. all object
       * references from the root to the mutation were changed).
       *
       * Polymer also provides a proprietary data mutation and path notification API
       * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
       * mutation and notification of deep changes in an object graph to all elements
       * bound to the same object graph.
       *
       * In cases where neither immutable patterns nor the data mutation API can be
       * used, applying this mixin will cause Polymer to skip dirty checking for
       * objects and arrays (always consider them to be "dirty").  This allows a
       * user to make a deep modification to a bound object graph, and then either
       * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
       * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
       * elements that wish to be updated based on deep mutations must apply this
       * mixin or otherwise skip strict dirty checking for objects/arrays.
       * Specifically, any elements in the binding tree between the source of a
       * mutation and the consumption of it must apply this behavior or enable the
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * In order to make the dirty check strategy configurable, see
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * Note, the performance characteristics of propagating large object graphs
       * will be worse as opposed to using strict dirty checking with immutable
       * patterns or Polymer's path notification API.
       *
       * @polymerBehavior
       * @summary Behavior to skip strict dirty-checking for objects and
       *   arrays
       */var MutableDataBehavior={/**
   * Overrides `Polymer.PropertyEffects` to provide option for skipping
   * strict equality checking for Objects and Arrays.
   *
   * This method pulls the value to dirty check against from the `__dataTemp`
   * cache (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,true);}};/**
    * Legacy element behavior to add the optional ability to skip strict
    * dirty-checking for objects and arrays (always consider them to be
    * "dirty") by setting a `mutable-data` attribute on an element instance.
    *
    * By default, `Polymer.PropertyEffects` performs strict dirty checking on
    * objects, which means that any deep modifications to an object or array will
    * not be propagated unless "immutable" data patterns are used (i.e. all object
    * references from the root to the mutation were changed).
    *
    * Polymer also provides a proprietary data mutation and path notification API
    * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
    * mutation and notification of deep changes in an object graph to all elements
    * bound to the same object graph.
    *
    * In cases where neither immutable patterns nor the data mutation API can be
    * used, applying this mixin will allow Polymer to skip dirty checking for
    * objects and arrays (always consider them to be "dirty").  This allows a
    * user to make a deep modification to a bound object graph, and then either
    * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
    * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
    * elements that wish to be updated based on deep mutations must apply this
    * mixin or otherwise skip strict dirty checking for objects/arrays.
    * Specifically, any elements in the binding tree between the source of a
    * mutation and the consumption of it must enable this behavior or apply the
    * `Polymer.OptionalMutableDataBehavior`.
    *
    * While this behavior adds the ability to forgo Object/Array dirty checking,
    * the `mutableData` flag defaults to false and must be set on the instance.
    *
    * Note, the performance characteristics of propagating large object graphs
    * will be worse by relying on `mutableData: true` as opposed to using
    * strict dirty checking with immutable patterns or Polymer's path notification
    * API.
    *
    * @polymerBehavior
    * @summary Behavior to optionally skip strict dirty-checking for objects and
    *   arrays
    */_exports.MutableDataBehavior=MutableDataBehavior;var OptionalMutableDataBehavior={properties:{/**
     * Instance-level flag for configuring the dirty-checking strategy
     * for this element.  When true, Objects and Arrays will skip dirty
     * checking, otherwise strict equality checking will be used.
     */mutableData:Boolean},/**
   * Overrides `Polymer.PropertyEffects` to skip strict equality checking
   * for Objects and Arrays.
   *
   * Pulls the value to dirty check against from the `__dataTemp` cache
   * (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @this {this}
   * @protected
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData);}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;var Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;var template=html(_templateObject_b2bf582034ff11e98da2ddcf125ddb9c());template.setAttribute('style','display: none;');document.head.appendChild(template.content);var style=document.createElement('style');style.textContent='[hidden] { display: none !important; }';document.head.appendChild(style);Polymer({_template:html(_templateObject2_b2bf582034ff11e98da2ddcf125ddb9c()),is:'app-drawer',properties:{/**
     * The opened state of the drawer.
     */opened:{type:Boolean,value:false,notify:true,reflectToAttribute:true},/**
     * The drawer does not have a scrim and cannot be swiped close.
     */persistent:{type:Boolean,value:false,reflectToAttribute:true},/**
     * The transition duration of the drawer in milliseconds.
     */transitionDuration:{type:Number,value:200},/**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */align:{type:String,value:'left'},/**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */position:{type:String,readOnly:true,reflectToAttribute:true},/**
     * Create an area at the edge of the screen to swipe open the drawer.
     */swipeOpen:{type:Boolean,value:false,reflectToAttribute:true},/**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */noFocusTrap:{type:Boolean,value:false},/**
     * Disables swiping on the drawer.
     */disableSwipe:{type:Boolean,value:false}},observers:['resetLayout(position, isAttached)','_resetPosition(align, isAttached)','_styleTransitionDuration(transitionDuration)','_openedPersistentChanged(opened, persistent)'],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function attached(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener('keydown',this._tabKeydownHandler.bind(this));// Only listen for horizontal track so you can vertically scroll
// inside the drawer.
this.listen(this,'track','_track');this.setScrollDirection('y');});this.fire('app-reset-layout');},detached:function detached(){document.removeEventListener('keydown',this._boundEscKeydownHandler);},/**
   * Opens the drawer.
   */open:function open(){this.opened=true;},/**
   * Closes the drawer.
   */close:function close(){this.opened=false;},/**
   * Toggles the drawer open and close.
   */toggle:function toggle(){this.opened=!this.opened;},/**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */getWidth:function getWidth(){return this._savedWidth||this.$.contentContainer.offsetWidth;},_isRTL:function _isRTL(){return window.getComputedStyle(this).direction==='rtl';},_resetPosition:function _resetPosition(){switch(this.align){case'start':this._setPosition(this._isRTL()?'right':'left');return;case'end':this._setPosition(this._isRTL()?'left':'right');return;}this._setPosition(this.align);},_escKeydownHandler:function _escKeydownHandler(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){// Prevent any side effects if app-drawer closes.
event.preventDefault();this.close();}},_track:function _track(event){if(this.persistent||this.disableSwipe){return;}// Disable user selection on desktop.
event.preventDefault();switch(event.detail.state){case'start':this._trackStart(event);break;case'track':this._trackMove(event);break;case'end':this._trackEnd(event);break;}},_trackStart:function _trackStart(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if(this.position==='left'){this._translateOffset=rect.left;}else{this._translateOffset=rect.right-window.innerWidth;}this._trackDetails=[];// Disable transitions since style attributes will reflect user track
// events.
this._styleTransitionDuration(0);this.style.visibility='visible';},_trackMove:function _trackMove(event){this._translateDrawer(event.detail.dx+this._translateOffset);// Use Date.now() since event.timeStamp is inconsistent across browsers
// (e.g. most browsers use milliseconds but FF 44 uses microseconds).
this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()});},_trackEnd:function _trackEnd(event){var x=event.detail.dx+this._translateOffset;var drawerWidth=this.getWidth();var isPositionLeft=this.position==='left';var isInEndState=isPositionLeft?x>=0||x<=-drawerWidth:x<=0||x>=drawerWidth;if(!isInEndState){// No longer need the track events after this method returns - allow them
// to be GC'd.
var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return;}}// If the drawer is not flinging, toggle the opened state based on the
// position of the drawer.
var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened=this.position==='right';}else if(event.detail.dx>halfWidth){this.opened=this.position==='left';}if(isInEndState){this.debounce('_resetDrawerState',this._resetDrawerState);}else{this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration);}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility='';},_calculateVelocity:function _calculateVelocity(event,trackDetails){// Find the oldest track event that is within 100ms using binary search.
var now=Date.now();var timeLowerBound=now-100;var trackDetail;var min=0;var max=trackDetails.length-1;while(min<=max){// Floor of average of min and max.
var mid=min+max>>1;var d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1;}else{min=mid+1;}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx;var dt=now-trackDetail.timeStamp||1;return dx/dt;}return 0;},_flingDrawer:function _flingDrawer(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);// Do not fling if velocity is not above a threshold.
if(Math.abs(velocity)<this._MIN_FLING_THRESHOLD){return;}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset;var drawerWidth=this.getWidth();var isPositionLeft=this.position==='left';var isVelocityPositive=velocity>0;var isClosingLeft=!isVelocityPositive&&isPositionLeft;var isClosingRight=isVelocityPositive&&!isPositionLeft;var dx;if(isClosingLeft){dx=-(x+drawerWidth);}else if(isClosingRight){dx=drawerWidth-x;}else{dx=-x;}// Enforce a minimum transition velocity to make the drawer feel snappy.
if(isVelocityPositive){velocity=Math.max(velocity,this._MIN_TRANSITION_VELOCITY);this.opened=this.position==='left';}else{velocity=Math.min(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened=this.position==='right';}// Calculate the amount of time needed to finish the transition based on the
// initial slope of the timing function.
var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce('_resetDrawerState',this._resetDrawerState,t);},_styleTransitionDuration:function _styleTransitionDuration(duration){this.style.transitionDuration=duration+'ms';this.$.contentContainer.style.transitionDuration=duration+'ms';this.$.scrim.style.transitionDuration=duration+'ms';},_styleTransitionTimingFunction:function _styleTransitionTimingFunction(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction;},_translateDrawer:function _translateDrawer(x){var drawerWidth=this.getWidth();if(this.position==='left'){x=Math.max(-drawerWidth,Math.min(x,0));this.$.scrim.style.opacity=1+x/drawerWidth;}else{x=Math.max(0,Math.min(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth;}this.translate3d(x+'px','0','0',this.$.contentContainer);},_resetDrawerTranslate:function _resetDrawerTranslate(){this.$.scrim.style.opacity='';this.transform('',this.$.contentContainer);},_resetDrawerState:function _resetDrawerState(){var oldState=this._drawerState;// If the drawer was flinging, we need to reset the style attributes.
if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction('');this.style.visibility='';}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED;}else{this._drawerState=this._DRAWER_STATE.CLOSED;}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener('keydown',this._boundEscKeydownHandler);document.body.style.overflow='hidden';}else{document.removeEventListener('keydown',this._boundEscKeydownHandler);document.body.style.overflow='';}// Don't fire the event on initial load.
if(oldState!==this._DRAWER_STATE.INIT){this.fire('app-drawer-transitioned');}}},/**
   * Resets the layout.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){this.fire('app-reset-layout');},_setKeyboardFocusTrap:function _setKeyboardFocusTrap(){if(this.noFocusTrap){return;}// NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
// this will not select focusable elements inside shadow roots.
var focusableElementsSelector=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(',');var focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(focusableElements.length>0){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1];}else{// Reset saved tab stops when there are no focusable elements in the
// drawer.
this._firstTabStop=null;this._lastTabStop=null;}// Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
// first focusable element in the drawer, if it exists. Use the tabindex
// attribute since the this.tabIndex property in IE/Edge returns 0 (instead
// of -1) when the attribute is not set.
var tabindex=this.getAttribute('tabindex');if(tabindex&&parseInt(tabindex,10)>-1){this.focus();}else if(this._firstTabStop){this._firstTabStop.focus();}},_tabKeydownHandler:function _tabKeydownHandler(event){if(this.noFocusTrap){return;}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus();}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus();}}}},_openedPersistentChanged:function _openedPersistentChanged(opened,persistent){this.toggleClass('visible',opened&&!persistent,this.$.scrim);// Use a debounce timer instead of transitionend since transitionend won't
// fire when app-drawer is display: none.
this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration);},_MIN_FLING_THRESHOLD:0.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:'cubic-bezier(0.667, 1, 0.667, 1)',_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5/**
                 * Fired when the layout of app-drawer has changed.
                 *
                 * @event app-reset-layout
                 */ /**
                     * Fired when app-drawer has finished transitioning.
                     *
                     * @event app-drawer-transitioned
                     */}});var ORPHANS=new Set();/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/var IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:'_parentResizableChanged'},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:false}},listeners:{'iron-request-resize-notifications':'_onIronRequestResizeNotifications'},created:function created(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this);},attached:function attached(){this._requestResizeNotifications();},detached:function detached(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}else{ORPHANS.delete(this);window.removeEventListener('resize',this._boundNotifyResize);}this._parentResizable=null;},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function notifyResize(){if(!this.isAttached){return;}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable);}},this);this._fireResize();},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function assignParentResizable(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this);}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function stopResizeNotificationsFor(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target);}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function _subscribeIronResize(target){target.addEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function _unsubscribeIronResize(target){target.removeEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function resizerShouldNotify(element){return true;},_onDescendantIronResize:function _onDescendantIronResize(event){if(this._notifyingDescendant){event.stopPropagation();return;}// no need to use this during shadow dom because of event retargeting
if(!useShadow){this._fireResize();}},_fireResize:function _fireResize(){this.fire('iron-resize',null,{node:this,bubbles:false});},_onIronRequestResizeNotifications:function _onIronRequestResizeNotifications(event){var target=/** @type {!EventTarget} */dom(event).rootTarget;if(target===this){return;}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation();},_parentResizableChanged:function _parentResizableChanged(parentResizable){if(parentResizable){window.removeEventListener('resize',this._boundNotifyResize);}},_notifyDescendant:function _notifyDescendant(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return;}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false;},_requestResizeNotifications:function _requestResizeNotifications(){if(!this.isAttached){return;}if(document.readyState==='loading'){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange',function readystatechanged(){document.removeEventListener('readystatechange',readystatechanged);_requestResizeNotifications();});}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent();}},this);window.addEventListener('resize',this._boundNotifyResize);this.notifyResize();}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent();}},this);}}},_findParent:function _findParent(){this.assignParentResizable(null);this.fire('iron-request-resize-notifications',null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this);}else{ORPHANS.delete(this);}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;var AppLayoutBehavior=[IronResizableBehavior,{listeners:{'app-reset-layout':'_appResetLayoutHandler','iron-resize':'resetLayout'},attached:function attached(){this.fire('app-reset-layout');},_appResetLayoutHandler:function _appResetLayoutHandler(e){if(dom(e).path[0]===this){return;}this.resetLayout();e.stopPropagation();},_updateLayoutStates:function _updateLayoutStates(){console.error('unimplemented');},/**
   * Resets the layout. If you changed the size of this element via CSS
   * you can notify the changes by either firing the `iron-resize` event
   * or calling `resetLayout` directly.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){var self=this;var cb=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer);this._notifyDescendantResize();},_notifyLayoutChanged:function _notifyLayoutChanged(){var self=this;// TODO: the event `app-reset-layout` can be fired synchronously
// as long as `_updateLayoutStates` waits for all the microtasks after
// rAF. E.g. requestAnimationFrame(setTimeOut())
requestAnimationFrame(function(){self.fire('app-reset-layout');});},_notifyDescendantResize:function _notifyDescendantResize(){if(!this.isAttached){return;}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable);}},this);}}];_exports.AppLayoutBehavior=AppLayoutBehavior;var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};_exports.$appLayoutBehavior=appLayoutBehavior;var IronScrollTargetBehavior={properties:{/**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */scrollTarget:{type:HTMLElement,value:function value(){return this._defaultScrollTarget;}}},observers:['_scrollTargetChanged(scrollTarget, isAttached)'],/**
   * True if the event listener should be installed.
   */_shouldHaveListener:true,_scrollTargetChanged:function _scrollTargetChanged(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null;}if(!isAttached){return;}// Support element id references
if(scrollTarget==='document'){this.scrollTarget=this._doc;}else if(typeof scrollTarget==='string'){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector('#'+scrollTarget);}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget);}},/**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */_scrollHandler:function scrollHandler(){},/**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */get _defaultScrollTarget(){return this._doc;},/**
   * Shortcut for the document element
   *
   * @type {Element}
   */get _doc(){return this.ownerDocument.documentElement;},/**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop;}return 0;},/**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft;}return 0;},/**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top;}},/**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;}},/**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */scroll:function scroll(leftOrOptions,top){var left;if(babelHelpers.typeof(leftOrOptions)==='object'){left=leftOrOptions.left;top=leftOrOptions.top;}else{left=leftOrOptions;}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top);}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top;}},/**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth;}return 0;},/**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight;}return 0;},/**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */_isValidScrollTarget:function _isValidScrollTarget(){return babelHelpers.instanceof(this.scrollTarget,HTMLElement);},_toggleScrollListener:function _toggleScrollListener(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener('scroll',this._boundScrollHandler);}}else{if(this._boundScrollHandler){eventTarget.removeEventListener('scroll',this._boundScrollHandler);this._boundScrollHandler=null;}}},/**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */toggleScrollListener:function toggleScrollListener(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget);}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;var _scrollEffects={};_exports._scrollEffects=_scrollEffects;var _scrollTimer=null;_exports._scrollTimer=_scrollTimer;var scrollTimingFunction=function easeOutQuad(t,b,c,d){t/=d;return-c*t*(t-2)+b;};/**
    * Registers a scroll effect to be used in elements that implement the
    * `Polymer.AppScrollEffectsBehavior` behavior.
    *
    * @param {string} effectName The effect name.
    * @param {Object} effectDef The effect definition.
    */_exports.scrollTimingFunction=scrollTimingFunction;var registerEffect=function registerEffect(effectName,effectDef){if(_scrollEffects[effectName]!=null){throw new Error('effect `'+effectName+'` is already registered.');}_scrollEffects[effectName]=effectDef;};_exports.registerEffect=registerEffect;var queryAllRoot=function queryAllRoot(selector,root){var queue=[root];var matches=[];while(queue.length>0){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot);}}}return matches;};/**
    * Scrolls to a particular set of coordinates in a scroll target.
    * If the scroll target is not defined, then it would use the main document as
    * the target.
    *
    * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
    * e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
    * ```
    *
    * To scroll in a silent mode, without notifying scroll changes to any
    * app-layout elements, you can set the option `behavior: 'silent'`. This is
    * particularly useful we you are using `app-header` and you desire to scroll to
    * the top of a scrolling region without running scroll effects. e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
    * ```
    *
    * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
    */_exports.queryAllRoot=queryAllRoot;var scroll=function scroll(options){options=options||{};var docEl=document.documentElement;var target=options.target||docEl;var hasNativeScrollBehavior='scrollBehavior'in target.style&&target.scroll;var scrollClassName='app-layout-silent-scroll';var scrollTop=options.top||0;var scrollLeft=options.left||0;var scrollTo=target===docEl?window.scrollTo:function scrollTo(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop;};if(options.behavior==='smooth'){if(hasNativeScrollBehavior){target.scroll(options);}else{var timingFn=scrollTimingFunction;var startTime=Date.now();var currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop;var currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft;var deltaScrollTop=scrollTop-currentScrollTop;var deltaScrollLeft=scrollLeft-currentScrollLeft;var duration=300;var updateFrame=function updateFrame(){var now=Date.now();var elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,deltaScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,deltaScrollTop,duration));requestAnimationFrame(updateFrame);}else{scrollTo(scrollLeft,scrollTop);}}.bind(this);updateFrame();}}else if(options.behavior==='silent'){var headers=queryAllRoot('app-header',document.body);headers.forEach(function(header){header.setAttribute('silent-scroll','');});// Browsers keep the scroll momentum even if the bottom of the scrolling
// content was reached. This means that calling scroll({top: 0, behavior:
// 'silent'}) when the momentum is still going will result in more scroll
// events and thus scroll effects. This seems to only apply when using
// document scrolling. Therefore, when should we remove the class from the
// document element?
if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer);}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute('silent-scroll');});_exports._scrollTimer=_scrollTimer=null;});scrollTo(scrollLeft,scrollTop);}else{scrollTo(scrollLeft,scrollTop);}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer;},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;var AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{/**
     * A space-separated list of the effects names that will be triggered when
     * the user scrolls. e.g. `waterfall parallax-background` installs the
     * `waterfall` and `parallax-background`.
     */effects:{type:String},/**
     * An object that configurates the effects installed via the `effects`
     * property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and
     * `endsAt`. These properties indicate when the event should start and end
     * respectively and relative to the overall element progress. So for
     * example, if `blend-background` starts at `0.5`, the effect will only
     * start once the current element reaches 0.5 of its progress. In this
     * context, the progress is a value in the range of `[0, 1]` that
     * indicates where this element is on the screen relative to the viewport.
     */effectsConfig:{type:Object,value:function value(){return{};}},/**
     * Disables CSS transitions and scroll effects on the element.
     */disabled:{type:Boolean,reflectToAttribute:true,value:false},/**
     * Allows to set a `scrollTop` threshold. When greater than 0,
     * `thresholdTriggered` is true only when the scroll target's `scrollTop`
     * has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when
     * the `scrollTop` is at least `100`.
     */threshold:{type:Number,value:0},/**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */thresholdTriggered:{type:Boolean,notify:true,readOnly:true,reflectToAttribute:true}},observers:['_effectsChanged(effects, effectsConfig, isAttached)'],/**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   * @param {number} scrollTop
   */_updateScrollState:function _updateScrollState(scrollTop){},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function isOnScreen(){return false;},/**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function isContentBelow(){return false;},/**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */_effectsRunFn:null,/**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */_effects:null,/**
   * The clamped value of `_scrollTop`.
   * @type number
   */get _clampedScrollTop(){return Math.max(0,this._scrollTop);},attached:function attached(){this._scrollStateChanged();},detached:function detached(){this._tearDownEffects();},/**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function
   * returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
   * used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */createEffect:function createEffect(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName));}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop;},/**
   * Called when `effects` or `effectsConfig` changes.
   */_effectsChanged:function _effectsChanged(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return;}effects.split(' ').forEach(function(effectName){var effectDef;if(effectName!==''){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]));}else{console.warn(this._getUndefinedMsg(effectName));}}},this);this._setUpEffect();},/**
   * Forces layout
   */_layoutIfDirty:function _layoutIfDirty(){return this.offsetWidth;},/**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */_boundEffect:function _boundEffect(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0);var endsAt=parseFloat(effectsConfig.endsAt||1);var deltaS=endsAt-startsAt;var noop=function noop(){};// fast path if possible
var runFn=startsAt===0&&endsAt===1?effectDef.run:function(progress,y){effectDef.run.call(this,Math.max(0,(progress-startsAt)/deltaS),y);};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop};},/**
   * Sets up the effects.
   */_setUpEffect:function _setUpEffect(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){// install the effect only if no error was reported
if(effectDef.setUp()!==false){this._effectsRunFn.push(effectDef.run);}},this);}},/**
   * Tears down the effects.
   */_tearDownEffects:function _tearDownEffects(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown();});}this._effectsRunFn=[];this._effects=[];},/**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */_runEffects:function _runEffects(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y);});}},/**
   * Overrides the `_scrollHandler`.
   */_scrollHandler:function _scrollHandler(){this._scrollStateChanged();},_scrollStateChanged:function _scrollStateChanged(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(this.threshold>0){this._setThresholdTriggered(scrollTop>=this.threshold);}}},/**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */_getDOMRef:function _getDOMRef(id){console.warn('_getDOMRef','`'+id+'` is undefined');},_getUndefinedMsg:function _getUndefinedMsg(effectName){return'Scroll effect `'+effectName+'` is undefined. '+'Did you forget to import app-layout/app-scroll-effects/effects/'+effectName+'.html ?';}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};_exports.$appScrollEffectsBehavior=appScrollEffectsBehavior;Polymer({_template:html(_templateObject3_b2bf582034ff11e98da2ddcf125ddb9c()),is:'app-header',behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{/**
     * If true, the header will automatically collapse when scrolling down.
     * That is, the `sticky` element remains visible when the header is fully
     *condensed whereas the rest of the elements will collapse below `sticky`
     *element.
     *
     * By default, the `sticky` element is the first toolbar in the light DOM:
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar>This toolbar remains on top</app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     * </app-header>
     * ```
     *
     * Additionally, you can specify which toolbar or element remains visible in
     *condensed mode by adding the `sticky` attribute to that element. For
     *example: if we want the last toolbar to remain visible, we can add the
     *`sticky` attribute to it.
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
     * </app-header>
     * ```
     *
     * Note the `sticky` element must be a direct child of `app-header`.
     */condenses:{type:Boolean,value:false},/**
     * Mantains the header fixed at the top so it never moves away.
     */fixed:{type:Boolean,value:false},/**
     * Slides back the header when scrolling back up.
     */reveals:{type:Boolean,value:false},/**
     * Displays a shadow below the header.
     */shadow:{type:Boolean,reflectToAttribute:true,value:false}},observers:['_configChanged(isAttached, condenses, fixed)'],/**
   * A cached offsetHeight of the current element.
   *
   * @type {number}
   */_height:0,/**
   * The distance in pixels the header will be translated to when scrolling.
   *
   * @type {number}
   */_dHeight:0,/**
   * The offsetTop of `_stickyEl`
   *
   * @type {number}
   */_stickyElTop:0,/**
   * A reference to the element that remains visible when the header condenses.
   *
   * @type {HTMLElement}
   */_stickyElRef:null,/**
   * The header's top value used for the `transformY`
   *
   * @type {number}
   */_top:0,/**
   * The current scroll progress.
   *
   * @type {number}
   */_progress:0,_wasScrollingDown:false,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,/**
   * The distance the header is allowed to move away.
   *
   * @type {number}
   */get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5;},/**
   * Returns a reference to the sticky element.
   *
   * @return {HTMLElement}?
   */get _stickyEl(){if(this._stickyElRef){return this._stickyElRef;}var nodes=dom(this.$.slot).getDistributedNodes();// Get the element with the sticky attribute on it or the first element in
// the light DOM.
for(var i=0,node;node=/** @type {!HTMLElement} */nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute('sticky')){this._stickyElRef=node;break;}else if(!this._stickyElRef){this._stickyElRef=node;}}}return this._stickyElRef;},_configChanged:function _configChanged(){this.resetLayout();this._notifyLayoutChanged();},_updateLayoutStates:function _updateLayoutStates(){if(this.offsetWidth===0&&this.offsetHeight===0){return;}var scrollTop=this._clampedScrollTop;var firstSetup=this._height===0||scrollTop===0;var currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=true;// prepare for measurement
if(!firstSetup){this._updateScrollState(0,true);}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0;}else{this._dHeight=0;}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,true);}else{this._updateScrollState(this._lastScrollTop,true);this._layoutIfDirty();}// restore no transition
this.disabled=currentDisabled;},/**
   * Updates the scroll state.
   *
   * @param {number} scrollTop
   * @param {boolean=} forceUpdate (default: false)
   */_updateScrollState:function _updateScrollState(scrollTop,forceUpdate){if(this._height===0){return;}var progress=0;var top=0;var lastTop=this._top;var lastScrollTop=this._lastScrollTop;var maxHeaderTop=this._maxHeaderTop;var dScrollTop=scrollTop-this._lastScrollTop;var absDScrollTop=Math.abs(dScrollTop);var isScrollingDown=scrollTop>this._lastScrollTop;var now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop);}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?Math.max(this._dHeight,top):top;this.style.transitionDuration='0ms';}if(this.reveals&&!this.disabled&&absDScrollTop<100){// set the initial scroll position
if(now-this._initTimestamp>300||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now;}if(scrollTop>=maxHeaderTop){// check if the header is allowed to snap
if(Math.abs(this._initScrollTop-scrollTop)>30||absDScrollTop>10){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop;}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0;}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+'ms';}else{top=this._top;}}}if(this._dHeight===0){progress=scrollTop>0?1:0;}else{progress=top/this._dHeight;}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now;}if(forceUpdate||progress!==this._progress||lastTop!==top||scrollTop===0){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top);}},/**
   * Returns true if the current header is allowed to move as the user scrolls.
   *
   * @return {boolean}
   */_mayMove:function _mayMove(){return this.condenses||!this.fixed;},/**
   * Returns true if the current header will condense based on the size of the
   * header and the `consenses` property.
   *
   * @return {boolean}
   */willCondense:function willCondense(){return this._dHeight>0&&this.condenses;},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function isOnScreen(){return this._height!==0&&this._top<this._height;},/**
   * Returns true if there's content below the current element.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function isContentBelow(){return this._top===0?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0;},/**
   * Transforms the header.
   *
   * @param {number} y
   */_transformHeader:function _transformHeader(y){this.translate3d(0,-y+'px',0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?Math.min(y,this._dHeight)-this._stickyElTop+'px':0,0,this._stickyEl);}},_clamp:function _clamp(v,min,max){return Math.min(max,Math.max(min,v));},_ensureBgContainers:function _ensureBgContainers(){if(!this._bgContainer){this._bgContainer=document.createElement('div');this._bgContainer.id='background';this._bgRear=document.createElement('div');this._bgRear.id='backgroundRearLayer';this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement('div');this._bgFront.id='backgroundFrontLayer';this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer);}},_getDOMRef:function _getDOMRef(id){switch(id){case'backgroundFrontLayer':this._ensureBgContainers();return this._bgFront;case'backgroundRearLayer':this._ensureBgContainers();return this._bgRear;case'background':this._ensureBgContainers();return this._bgContainer;case'mainTitle':return dom(this).querySelector('[main-title]');case'condensedTitle':return dom(this).querySelector('[condensed-title]');}return null;},/**
   * Returns an object containing the progress value of the scroll effects
   * and the top position of the header.
   *
   * @method getScrollState
   * @return {Object}
   */getScrollState:function getScrollState(){return{progress:this._progress,top:this._top};}});registerEffect('waterfall',{/**
   *  @this Polymer.AppLayout.ElementWithBackground
   */run:function run(){this.shadow=this.isOnScreen()&&this.isContentBelow();}});Polymer({_template:html(_templateObject4_b2bf582034ff11e98da2ddcf125ddb9c()),is:'app-toolbar'});/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */var supportsAdoptingStyleSheets='adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;var constructionToken=Symbol();var CSSResult=/*#__PURE__*/function(){function CSSResult(cssText,safeToken){babelHelpers.classCallCheck(this,CSSResult);if(safeToken!==constructionToken){throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');}this.cssText=cssText;}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
babelHelpers.createClass(CSSResult,[{key:"toString",value:function toString(){return this.cssText;}},{key:"styleSheet",get:function get(){if(this._styleSheet===undefined){// Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
// is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet();this._styleSheet.replaceSync(this.cssText);}else{this._styleSheet=null;}}return this._styleSheet;}}]);return CSSResult;}();/**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */_exports.CSSResult$1=_exports.CSSResult=CSSResult;var unsafeCSS=function unsafeCSS(value){return new CSSResult(String(value),constructionToken);};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;var textFromCSSResult=function textFromCSSResult(value){if(babelHelpers.instanceof(value,CSSResult)){return value.cssText;}else{throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));}};/**
    * Template tag which which can be used with LitElement's `style` property to
    * set element styles. For security reasons, only literal string values may be
    * used. To incorporate non-literal values `unsafeCSS` may be used inside a
    * template string part.
    */var css=function css(strings){for(var _len11=arguments.length,values=new Array(_len11>1?_len11-1:0),_key11=1;_key11<_len11;_key11++){values[_key11-1]=arguments[_key11];}var cssText=values.reduce(function(acc,v,idx){return acc+textFromCSSResult(v)+strings[idx+1];},strings[0]);return new CSSResult(cssText,constructionToken);};_exports.css=_exports.css$1=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$cssTag=cssTag;var legacyCustomElement=function legacyCustomElement(tagName,clazz){window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz;};var standardCustomElement=function standardCustomElement(tagName,descriptor){var kind=descriptor.kind,elements=descriptor.elements;return{kind:kind,elements:elements,// This callback is called once the class is otherwise fully defined
finisher:function finisher(clazz){window.customElements.define(tagName,clazz);}};};/**
    * Class decorator factory that defines the decorated class as a custom element.
    *
    * @param tagName the name of the custom element to define
    */var customElement=function customElement(tagName){return function(classOrDescriptor){return typeof classOrDescriptor==='function'?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor);};};_exports.customElement$1=_exports.customElement=customElement;var standardProperty=function standardProperty(options,element){// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if(element.kind==='method'&&element.descriptor&&!('value'in element.descriptor)){return Object.assign({},element,{finisher:function finisher(clazz){clazz.createProperty(element.key,options);}});}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:'field',key:Symbol(),placement:'own',descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
// tslint:disable-next-line:no-any decorator
initializer:function initializer(){if(typeof element.initializer==='function'){this[element.key]=element.initializer.call(this);}},finisher:function finisher(clazz){clazz.createProperty(element.key,options);}};}};var legacyProperty=function legacyProperty(options,proto,name){proto.constructor.createProperty(name,options);};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A `PropertyDeclaration` may optionally be
    * supplied to configure property features.
    *
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return function(protoOrDescriptor,name){return name!==undefined?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor);};}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   */var query=_query(function(target,selector){return target.querySelector(selector);});/**
                                                                                    * A property decorator that converts a class property into a getter
                                                                                    * that executes a querySelectorAll on the element's renderRoot.
                                                                                    */_exports.query$1=_exports.query=query;var queryAll=_query(function(target,selector){return target.querySelectorAll(selector);});_exports.queryAll$1=_exports.queryAll=queryAll;var legacyQuery=function legacyQuery(descriptor,proto,name){Object.defineProperty(proto,name,descriptor);};var standardQuery=function standardQuery(descriptor,element){return{kind:'method',placement:'prototype',key:element.key,descriptor:descriptor};};/**
     * Base-implementation of `@query` and `@queryAll` decorators.
     *
     * @param queryFn exectute a `selector` (ie, querySelector or querySelectorAll)
     * against `target`.
     * @suppress {visibility} The descriptor accesses an internal field on the
     * element.
     */function _query(queryFn){return function(selector){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){return queryFn(this.renderRoot,selector);},enumerable:true,configurable:true};return name!==undefined?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor);};};}var standardEventOptions=function standardEventOptions(options,element){return Object.assign({},element,{finisher:function finisher(clazz){Object.assign(clazz.prototype[element.key],options);}});};var legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options,proto,name){Object.assign(proto[name],options);};/**
    * Adds event listener options to a method used as an event listener in a
    * lit-html template.
    *
    * @param options An object that specifis event listener options as accepted by
    * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
    *
    * Current browsers support the `capture`, `passive`, and `once` options. See:
    * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
    *
    * @example
    *
    *     class MyElement {
    *
    *       clicked = false;
    *
    *       render() {
    *         return html`<div @click=${this._onClick}`><button></button></div>`;
    *       }
    *
    *       @eventOptions({capture: true})
    *       _onClick(e) {
    *         this.clicked = true;
    *       }
    *     }
    */var eventOptions=function eventOptions(options){return(// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
function(protoOrDescriptor,name){return name!==undefined?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor);});};_exports.eventOptions$1=_exports.eventOptions=eventOptions;var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
        * replaced at compile time by the munged name for object[property]. We cannot
        * alias this function, so we have to use a small shim that has the same
        * behavior when not compiling.
        */_exports.$decorators=decorators;window.JSCompiler_renameProperty=function(prop,_obj){return prop;};var defaultConverter={toAttribute:function toAttribute(value,type){switch(type){case Boolean:return value?'':null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return value==null?value:JSON.stringify(value);}return value;},fromAttribute:function fromAttribute(value,type){switch(type){case Boolean:return value!==null;case Number:return value===null?null:Number(value);case Object:case Array:return JSON.parse(value);}return value;}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;var notEqual=function notEqual(value,old){// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value);};_exports.notEqual$1=_exports.notEqual=notEqual;var defaultPropertyDeclaration={attribute:true,type:String,converter:defaultConverter,reflect:false,hasChanged:notEqual};var microtaskPromise=Promise.resolve(true);var STATE_HAS_UPDATED=1;var STATE_UPDATE_REQUESTED=1<<2;var STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3;var STATE_IS_REFLECTING_TO_PROPERTY=1<<4;var STATE_HAS_CONNECTED=1<<5;/**
                                     * Base element class which manages element properties and attributes. When
                                     * properties change, the `update` method is asynchronously called. This method
                                     * should be supplied by subclassers to render updates as desired.
                                     */var UpdatingElement=/*#__PURE__*/function(_HTMLElement3){babelHelpers.inherits(UpdatingElement,_HTMLElement3);function UpdatingElement(){var _this34;babelHelpers.classCallCheck(this,UpdatingElement);_this34=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(UpdatingElement).call(this));_this34._updateState=0;_this34._instanceProperties=undefined;_this34._updatePromise=microtaskPromise;_this34._hasConnectedResolver=undefined;/**
                                             * Map with keys for any properties that have changed since the last
                                             * update cycle with previous values.
                                             */_this34._changedProperties=new Map();/**
                                          * Map with keys of properties that should be reflected when updated.
                                          */_this34._reflectingProperties=undefined;_this34.initialize();return _this34;}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */babelHelpers.createClass(UpdatingElement,[{key:"initialize",/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */value:function initialize(){this._saveInstanceProperties();}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */},{key:"_saveInstanceProperties",value:function _saveInstanceProperties(){var _this35=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach(function(_v,p){if(_this35.hasOwnProperty(p)){var value=_this35[p];delete _this35[p];if(!_this35._instanceProperties){_this35._instanceProperties=new Map();}_this35._instanceProperties.set(p,value);}});}/**
     * Applies previously saved instance properties.
     */},{key:"_applyInstanceProperties",value:function _applyInstanceProperties(){var _this36=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach(function(v,p){return _this36[p]=v;});this._instanceProperties=undefined;}},{key:"connectedCallback",value:function connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED;// Ensure connection triggers an update. Updates cannot complete before
// connection and if one is pending connection the `_hasConnectionResolver`
// will exist. If so, resolve it to complete the update, otherwise
// requestUpdate.
if(this._hasConnectedResolver){this._hasConnectedResolver();this._hasConnectedResolver=undefined;}else{this.requestUpdate();}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value);}}},{key:"_propertyToAttribute",value:function _propertyToAttribute(name,value){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:defaultPropertyDeclaration;var ctor=this.constructor;var attr=ctor._attributeNameForProperty(name,options);if(attr!==undefined){var attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===undefined){return;}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(attrValue==null){this.removeAttribute(attr);}else{this.setAttribute(attr,attrValue);}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE;}}},{key:"_attributeToProperty",value:function _attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return;}var ctor=this.constructor;var propName=ctor._attributeToPropertyMap.get(name);if(propName!==undefined){var options=ctor._classProperties.get(propName)||defaultPropertyDeclaration;// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY;}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */},{key:"requestUpdate",value:function requestUpdate(name,oldValue){var shouldRequestUpdate=true;// if we have a property key, perform property update steps.
if(name!==undefined&&!this._changedProperties.has(name)){var ctor=this.constructor;var options=ctor._classProperties.get(name)||defaultPropertyDeclaration;if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){// track old value when changing.
this._changedProperties.set(name,oldValue);// add to reflecting properties set
if(options.reflect===true&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===undefined){this._reflectingProperties=new Map();}this._reflectingProperties.set(name,options);}// abort the request if the property should not be considered changed.
}else{shouldRequestUpdate=false;}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._enqueueUpdate();}return this.updateComplete;}/**
     * Sets up the element to asynchronously update.
     */},{key:"_enqueueUpdate",value:function(){var _enqueueUpdate2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this37=this;var resolve,previousUpdatePromise,result;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:// Mark state updating...
this._updateState=this._updateState|STATE_UPDATE_REQUESTED;previousUpdatePromise=this._updatePromise;this._updatePromise=new Promise(function(res){return resolve=res;});// Ensure any previous update has resolved before updating.
// This `await` also ensures that property changes are batched.
_context.next=5;return previousUpdatePromise;case 5:if(this._hasConnected){_context.next=8;break;}_context.next=8;return new Promise(function(res){return _this37._hasConnectedResolver=res;});case 8:// Allow `performUpdate` to be asynchronous to enable scheduling of updates.
result=this.performUpdate();// Note, this is to avoid delaying an additional microtask unless we need
// to.
if(!(result!=null&&typeof result.then==='function')){_context.next=12;break;}_context.next=12;return result;case 12:resolve(!this._hasRequestedUpdate);case 13:case"end":return _context.stop();}}},_callee,this);}));function _enqueueUpdate(){return _enqueueUpdate2.apply(this,arguments);}return _enqueueUpdate;}()},{key:"performUpdate",/**
     * Performs an element update.
     *
     * You can override this method to change the timing of updates. For instance,
     * to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */value:function performUpdate(){// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties();}if(this.shouldUpdate(this._changedProperties)){var changedProperties=this._changedProperties;this.update(changedProperties);this._markUpdated();if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties);}this.updated(changedProperties);}else{this._markUpdated();}}},{key:"_markUpdated",value:function _markUpdated(){this._changedProperties=new Map();this._updateState=this._updateState&~STATE_UPDATE_REQUESTED;}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */},{key:"shouldUpdate",/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */value:function shouldUpdate(_changedProperties){return true;}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(_changedProperties){var _this38=this;if(this._reflectingProperties!==undefined&&this._reflectingProperties.size>0){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach(function(v,k){return _this38._propertyToAttribute(k,_this38[k],v);});this._reflectingProperties=undefined;}}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"updated",value:function updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * * @param _changedProperties Map of changed properties with old values
                                  */},{key:"firstUpdated",value:function firstUpdated(_changedProperties){}},{key:"_hasConnected",get:function get(){return this._updateState&STATE_HAS_CONNECTED;}},{key:"_hasRequestedUpdate",get:function get(){return this._updateState&STATE_UPDATE_REQUESTED;}},{key:"hasUpdated",get:function get(){return this._updateState&STATE_HAS_UPDATED;}},{key:"updateComplete",get:function get(){return this._updatePromise;}}],[{key:"_ensureClassProperties",/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */value:function _ensureClassProperties(){var _this39=this;// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties',this))){this._classProperties=new Map();// NOTE: Workaround IE11 not supporting Map constructor argument.
var superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==undefined){superProperties.forEach(function(v,k){return _this39._classProperties.set(k,v);});}}}/**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */},{key:"createProperty",value:function createProperty(name){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:defaultPropertyDeclaration;// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return;}var key=babelHelpers.typeof(name)==='symbol'?Symbol():"__".concat(name);Object.defineProperty(this.prototype,name,{// tslint:disable-next-line:no-any no symbol in index
get:function get(){// tslint:disable-next-line:no-any no symbol in index
return this[key];},set:function set(value){// tslint:disable-next-line:no-any no symbol in index
var oldValue=this[name];// tslint:disable-next-line:no-any no symbol in index
this[key]=value;this.requestUpdate(name,oldValue);},configurable:true,enumerable:true});}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */},{key:"finalize",value:function finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty('finalized',this))&&this.finalized){return;}// finalize any superclasses
var superCtor=Object.getPrototypeOf(this);if(typeof superCtor.finalize==='function'){superCtor.finalize();}this.finalized=true;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map();// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty('properties',this))){var _props3=this.properties;// support symbols in properties (IE11 does not support this)
var propKeys=[].concat(babelHelpers.toConsumableArray(Object.getOwnPropertyNames(_props3)),babelHelpers.toConsumableArray(typeof Object.getOwnPropertySymbols==='function'?Object.getOwnPropertySymbols(_props3):[]));// This for/of is ok because propKeys is an array
var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=propKeys[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _p14=_step.value;// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(_p14,_props3[_p14]);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */},{key:"_attributeNameForProperty",value:function _attributeNameForProperty(name,options){var attribute=options.attribute;return attribute===false?undefined:typeof attribute==='string'?attribute:typeof name==='string'?name.toLowerCase():undefined;}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */},{key:"_valueHasChanged",value:function _valueHasChanged(value,old){var hasChanged=arguments.length>2&&arguments[2]!==undefined?arguments[2]:notEqual;return hasChanged(value,old);}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */},{key:"_propertyValueFromAttribute",value:function _propertyValueFromAttribute(value,options){var type=options.type;var converter=options.converter||defaultConverter;var fromAttribute=typeof converter==='function'?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value;}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */},{key:"_propertyValueToAttribute",value:function _propertyValueToAttribute(value,options){if(options.reflect===undefined){return;}var type=options.type;var converter=options.converter;var toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type);}},{key:"observedAttributes",get:function get(){var _this40=this;// note: piggy backing on this to ensure we're finalized.
this.finalize();var attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach(function(v,p){var attr=_this40._attributeNameForProperty(p,v);if(attr!==undefined){_this40._attributeToPropertyMap.set(attr,p);attributes.push(attr);}});return attributes;}}]);return UpdatingElement;}(babelHelpers.wrapNativeSuper(HTMLElement));/**
   * Marks class as having finished creating properties.
   */_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;UpdatingElement.finalized=true;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;var directives=new WeakMap();/**
                                   * Brands a function as a directive so that lit-html will call the function
                                   * during template rendering, rather than passing as a value.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object
                                   *
                                   * @example
                                   *
                                   * ```
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   * ```
                                   */ // tslint:disable-next-line:no-any
var directive=function directive(f){return function(){var d=f.apply(void 0,arguments);directives.set(d,true);return d;};};_exports.directive$1=_exports.directive=directive;var isDirective=function isDirective(o){return typeof o==='function'&&directives.has(o);};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$directive=directive$1;var isCEPolyfill=window.customElements!==undefined&&window.customElements.polyfillWrapFlushCallback!==undefined;/**
                                                                                                                                   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
                                                                                                                                   * (exclusive), into another container (could be the same container), before
                                                                                                                                   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
                                                                                                                                   * container.
                                                                                                                                   */_exports.isCEPolyfill=isCEPolyfill;var reparentNodes=function reparentNodes(container,start){var end=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var before=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var node=start;while(node!==end){var n=node.nextSibling;container.insertBefore(node,before);node=n;}};/**
    * Removes nodes, starting from `startNode` (inclusive) to `endNode`
    * (exclusive), from `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;var removeNodes=function removeNodes(container,startNode){var endNode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var node=startNode;while(node!==endNode){var n=node.nextSibling;container.removeChild(node);node=n;}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom$1={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$dom=dom$1;var noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;var nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$part=part;var marker="{{lit-".concat(String(Math.random()).slice(2),"}}");/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;var nodeMarker="<!--".concat(marker,"-->");_exports.nodeMarker=nodeMarker;var markerRegex=new RegExp("".concat(marker,"|").concat(nodeMarker));/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;var boundAttributeSuffix='$lit$';/**
                                              * An updateable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;var Template=function Template(result,element){var _this41=this;babelHelpers.classCallCheck(this,Template);this.parts=[];this.element=element;var index=-1;var partIndex=0;var nodesToRemove=[];var _prepareTemplate=function _prepareTemplate(template){var content=template.content;// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
// null
var walker=document.createTreeWalker(content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,false);// Keeps track of the last index associated with a part. We try to delete
// unnecessary nodes, but we never want to associate two different parts
// to the same index. They must have a constant node between.
var lastPartIndex=0;while(walker.nextNode()){index++;var node=walker.currentNode;if(node.nodeType===1/* Node.ELEMENT_NODE */){if(node.hasAttributes()){var attributes=node.attributes;// Per
// https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
// attributes are not guaranteed to be returned in document order.
// In particular, Edge/IE can return them out of order, so we cannot
// assume a correspondance between part index and attribute index.
var count=0;for(var _i64=0;_i64<attributes.length;_i64++){if(attributes[_i64].value.indexOf(marker)>=0){count++;}}while(count-->0){// Get the template literal section leading up to the first
// expression in this attribute
var stringForPart=result.strings[partIndex];// Find the attribute name
var name=lastAttributeNameRegex.exec(stringForPart)[2];// Find the corresponding attribute
// All bound attributes have had a suffix added in
// TemplateResult#getHTML to opt out of special attribute
// handling. To look up the attribute value we also need to add
// the suffix.
var attributeLookupName=name.toLowerCase()+boundAttributeSuffix;var attributeValue=node.getAttribute(attributeLookupName);var strings=attributeValue.split(markerRegex);_this41.parts.push({type:'attribute',index:index,name:name,strings:strings});node.removeAttribute(attributeLookupName);partIndex+=strings.length-1;}}if(node.tagName==='TEMPLATE'){_prepareTemplate(node);}}else if(node.nodeType===3/* Node.TEXT_NODE */){var data=node.data;if(data.indexOf(marker)>=0){var parent=node.parentNode;var _strings=data.split(markerRegex);var lastIndex=_strings.length-1;// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var _i65=0;_i65<lastIndex;_i65++){parent.insertBefore(_strings[_i65]===''?createMarker():document.createTextNode(_strings[_i65]),node);_this41.parts.push({type:'node',index:++index});}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(_strings[lastIndex]===''){parent.insertBefore(createMarker(),node);nodesToRemove.push(node);}else{node.data=_strings[lastIndex];}// We have a part for each match found
partIndex+=lastIndex;}}else if(node.nodeType===8/* Node.COMMENT_NODE */){if(node.data===marker){var _parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(node.previousSibling===null||index===lastPartIndex){index++;_parent.insertBefore(createMarker(),node);}lastPartIndex=index;_this41.parts.push({type:'node',index:index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(node.nextSibling===null){node.data='';}else{nodesToRemove.push(node);index--;}partIndex++;}else{var _i66=-1;while((_i66=node.data.indexOf(marker,_i66+1))!==-1){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
_this41.parts.push({type:'node',index:-1});}}}}};_prepareTemplate(element);// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var _i67=0;_i67<nodesToRemove.length;_i67++){var n=nodesToRemove[_i67];n.parentNode.removeChild(n);}};_exports.Template$1=_exports.Template=Template;var isTemplatePartActive=function isTemplatePartActive(part){return part.index!==-1;};// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;var createMarker=function createMarker(){return document.createComment('');};/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#attributes-0
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-character
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;var lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template$1={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template$1;var TemplateInstance=/*#__PURE__*/function(){function TemplateInstance(template,processor,options){babelHelpers.classCallCheck(this,TemplateInstance);this._parts=[];this.template=template;this.processor=processor;this.options=options;}babelHelpers.createClass(TemplateInstance,[{key:"update",value:function update(values){var i=0;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this._parts[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _part6=_step2.value;if(_part6!==undefined){_part6.setValue(values[i]);}i++;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this._parts[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _part7=_step3.value;if(_part7!==undefined){_part7.commit();}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}},{key:"_clone",value:function _clone(){var _this42=this;// When using the Custom Elements polyfill, clone the node, rather than
// importing it, to keep the fragment in the template's document. This
// leaves the fragment inert so custom elements won't upgrade and
// potentially modify their contents by creating a polyfilled ShadowRoot
// while we traverse the tree.
var fragment=isCEPolyfill?this.template.element.content.cloneNode(true):document.importNode(this.template.element.content,true);var parts=this.template.parts;var partIndex=0;var nodeIndex=0;var _prepareInstance=function _prepareInstance(fragment){// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
// null
var walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,false);var node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length&&node!==null){var _part8=parts[partIndex];// Consecutive Parts may have the same node index, in the case of
// multiple bound attributes on an element. So each iteration we either
// increment the nodeIndex, if we aren't on a node with a part, or the
// partIndex if we are. By not incrementing the nodeIndex when we find a
// part, we allow for the next part to be associated with the current
// node if neccessasry.
if(!isTemplatePartActive(_part8)){_this42._parts.push(undefined);partIndex++;}else if(nodeIndex===_part8.index){if(_part8.type==='node'){var _part9=_this42.processor.handleTextExpression(_this42.options);_part9.insertAfterNode(node.previousSibling);_this42._parts.push(_part9);}else{var _this42$_parts;(_this42$_parts=_this42._parts).push.apply(_this42$_parts,babelHelpers.toConsumableArray(_this42.processor.handleAttributeExpressions(node,_part8.name,_part8.strings,_this42.options)));}partIndex++;}else{nodeIndex++;if(node.nodeName==='TEMPLATE'){_prepareInstance(node.content);}node=walker.nextNode();}}};_prepareInstance(fragment);if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment);}return fragment;}}]);return TemplateInstance;}();_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;var TemplateResult=/*#__PURE__*/function(){function TemplateResult(strings,values,type,processor){babelHelpers.classCallCheck(this,TemplateResult);this.strings=strings;this.values=values;this.type=type;this.processor=processor;}/**
     * Returns a string of HTML used to create a `<template>` element.
     */babelHelpers.createClass(TemplateResult,[{key:"getHTML",value:function getHTML(){var endIndex=this.strings.length-1;var html='';for(var _i68=0;_i68<endIndex;_i68++){var s=this.strings[_i68];// This exec() call does two things:
// 1) Appends a suffix to the bound attribute name to opt out of special
// attribute value parsing that IE11 and Edge do, like for style and
// many SVG attributes. The Template class also appends the same suffix
// when looking up attributes to create Parts.
// 2) Adds an unquoted-attribute-safe marker for the first expression in
// an attribute. Subsequent attribute expressions will use node markers,
// and this is safe since attributes with multiple expressions are
// guaranteed to be quoted.
var match=lastAttributeNameRegex.exec(s);if(match){// We're starting a new bound attribute.
// Add the safe attribute suffix, and use unquoted-attribute-safe
// marker.
html+=s.substr(0,match.index)+match[1]+match[2]+boundAttributeSuffix+match[3]+marker;}else{// We're either in a bound node, or trailing bound attribute.
// Either way, nodeMarker is safe to use.
html+=s+nodeMarker;}}return html+this.strings[endIndex];}},{key:"getTemplateElement",value:function getTemplateElement(){var template=document.createElement('template');template.innerHTML=this.getHTML();return template;}}]);return TemplateResult;}();/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;var SVGTemplateResult=/*#__PURE__*/function(_TemplateResult){babelHelpers.inherits(SVGTemplateResult,_TemplateResult);function SVGTemplateResult(){babelHelpers.classCallCheck(this,SVGTemplateResult);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SVGTemplateResult).apply(this,arguments));}babelHelpers.createClass(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this),"</svg>");}},{key:"getTemplateElement",value:function getTemplateElement(){var template=babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this);var content=template.content;var svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template;}}]);return SVGTemplateResult;}(TemplateResult);_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;var isPrimitive=function isPrimitive(value){return value===null||!(babelHelpers.typeof(value)==='object'||typeof value==='function');};/**
    * Sets attribute values for AttributeParts, so that the value is only set once
    * even if there are multiple parts for an attribute.
    */_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;var AttributeCommitter=/*#__PURE__*/function(){function AttributeCommitter(element,name,strings){babelHelpers.classCallCheck(this,AttributeCommitter);this.dirty=true;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(var _i69=0;_i69<strings.length-1;_i69++){this.parts[_i69]=this._createPart();}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */babelHelpers.createClass(AttributeCommitter,[{key:"_createPart",value:function _createPart(){return new AttributePart(this);}},{key:"_getValue",value:function _getValue(){var strings=this.strings;var l=strings.length-1;var text='';for(var _i70=0;_i70<l;_i70++){text+=strings[_i70];var _part10=this.parts[_i70];if(_part10!==undefined){var v=_part10.value;if(v!=null&&(Array.isArray(v)||// tslint:disable-next-line:no-any
typeof v!=='string'&&v[Symbol.iterator])){var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=v[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var t=_step4.value;text+=typeof t==='string'?t:String(t);}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}}else{text+=typeof v==='string'?v:String(v);}}}text+=strings[l];return text;}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=false;this.element.setAttribute(this.name,this._getValue());}}}]);return AttributeCommitter;}();_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;var AttributePart=/*#__PURE__*/function(){function AttributePart(comitter){babelHelpers.classCallCheck(this,AttributePart);this.value=undefined;this.committer=comitter;}babelHelpers.createClass(AttributePart,[{key:"setValue",value:function setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=true;}}}},{key:"commit",value:function commit(){while(isDirective(this.value)){var directive$$1=this.value;this.value=noChange;directive$$1(this);}if(this.value===noChange){return;}this.committer.commit();}}]);return AttributePart;}();_exports.AttributePart$1=_exports.AttributePart=AttributePart;var NodePart=/*#__PURE__*/function(){function NodePart(options){babelHelpers.classCallCheck(this,NodePart);this.value=undefined;this._pendingValue=undefined;this.options=options;}/**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */babelHelpers.createClass(NodePart,[{key:"appendInto",value:function appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker());}/**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterNode",value:function insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling;}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"appendIntoPart",value:function appendIntoPart(part){part._insert(this.startNode=createMarker());part._insert(this.endNode=createMarker());}/**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterPart",value:function insertAfterPart(ref){ref._insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode;}},{key:"setValue",value:function setValue(value){this._pendingValue=value;}},{key:"commit",value:function commit(){while(isDirective(this._pendingValue)){var directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this);}var value=this._pendingValue;if(value===noChange){return;}if(isPrimitive(value)){if(value!==this.value){this._commitText(value);}}else if(babelHelpers.instanceof(value,TemplateResult)){this._commitTemplateResult(value);}else if(babelHelpers.instanceof(value,Node)){this._commitNode(value);}else if(Array.isArray(value)||// tslint:disable-next-line:no-any
value[Symbol.iterator]){this._commitIterable(value);}else if(value===nothing){this.value=nothing;this.clear();}else{// Fallback, will render the string representation
this._commitText(value);}}},{key:"_insert",value:function _insert(node){this.endNode.parentNode.insertBefore(node,this.endNode);}},{key:"_commitNode",value:function _commitNode(value){if(this.value===value){return;}this.clear();this._insert(value);this.value=value;}},{key:"_commitText",value:function _commitText(value){var node=this.startNode.nextSibling;value=value==null?'':value;if(node===this.endNode.previousSibling&&node.nodeType===3/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=value;}else{this._commitNode(document.createTextNode(typeof value==='string'?value:String(value)));}this.value=value;}},{key:"_commitTemplateResult",value:function _commitTemplateResult(value){var template=this.options.templateFactory(value);if(babelHelpers.instanceof(this.value,TemplateInstance)&&this.value.template===template){this.value.update(value.values);}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
var instance=new TemplateInstance(template,value.processor,this.options);var fragment=instance._clone();instance.update(value.values);this._commitNode(fragment);this.value=instance;}}},{key:"_commitIterable",value:function _commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear();}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var itemParts=this.value;var partIndex=0;var itemPart;var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=value[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var item=_step5.value;// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===undefined){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(partIndex===0){itemPart.appendIntoPart(this);}else{itemPart.insertAfterPart(itemParts[partIndex-1]);}}itemPart.setValue(item);itemPart.commit();partIndex++;}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode);}}},{key:"clear",value:function clear(){var startNode=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.startNode;removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode);}}]);return NodePart;}();/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;var BooleanAttributePart=/*#__PURE__*/function(){function BooleanAttributePart(element,name,strings){babelHelpers.classCallCheck(this,BooleanAttributePart);this.value=undefined;this._pendingValue=undefined;if(strings.length!==2||strings[0]!==''||strings[1]!==''){throw new Error('Boolean attributes can only contain a single expression');}this.element=element;this.name=name;this.strings=strings;}babelHelpers.createClass(BooleanAttributePart,[{key:"setValue",value:function setValue(value){this._pendingValue=value;}},{key:"commit",value:function commit(){while(isDirective(this._pendingValue)){var directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this);}if(this._pendingValue===noChange){return;}var value=!!this._pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,'');}else{this.element.removeAttribute(this.name);}}this.value=value;this._pendingValue=noChange;}}]);return BooleanAttributePart;}();/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;var PropertyCommitter=/*#__PURE__*/function(_AttributeCommitter){babelHelpers.inherits(PropertyCommitter,_AttributeCommitter);function PropertyCommitter(element,name,strings){var _this43;babelHelpers.classCallCheck(this,PropertyCommitter);_this43=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyCommitter).call(this,element,name,strings));_this43.single=strings.length===2&&strings[0]===''&&strings[1]==='';return _this43;}babelHelpers.createClass(PropertyCommitter,[{key:"_createPart",value:function _createPart(){return new PropertyPart(this);}},{key:"_getValue",value:function _getValue(){if(this.single){return this.parts[0].value;}return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyCommitter.prototype),"_getValue",this).call(this);}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=false;// tslint:disable-next-line:no-any
this.element[this.name]=this._getValue();}}}]);return PropertyCommitter;}(AttributeCommitter);_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;var PropertyPart=/*#__PURE__*/function(_AttributePart){babelHelpers.inherits(PropertyPart,_AttributePart);function PropertyPart(){babelHelpers.classCallCheck(this,PropertyPart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyPart).apply(this,arguments));}return PropertyPart;}(AttributePart);// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;var eventOptionsSupported=false;try{var options={get capture(){eventOptionsSupported=true;return false;}};// tslint:disable-next-line:no-any
window.addEventListener('test',options,options);// tslint:disable-next-line:no-any
window.removeEventListener('test',options,options);}catch(_e){}var EventPart=/*#__PURE__*/function(){function EventPart(element,eventName,eventContext){var _this44=this;babelHelpers.classCallCheck(this,EventPart);this.value=undefined;this._pendingValue=undefined;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this._boundHandleEvent=function(e){return _this44.handleEvent(e);};}babelHelpers.createClass(EventPart,[{key:"setValue",value:function setValue(value){this._pendingValue=value;}},{key:"commit",value:function commit(){while(isDirective(this._pendingValue)){var directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this);}if(this._pendingValue===noChange){return;}var newListener=this._pendingValue;var oldListener=this.value;var shouldRemoveListener=newListener==null||oldListener!=null&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive);var shouldAddListener=newListener!=null&&(oldListener==null||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options);}if(shouldAddListener){this._options=getOptions(newListener);this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options);}this.value=newListener;this._pendingValue=noChange;}},{key:"handleEvent",value:function handleEvent(event){if(typeof this.value==='function'){this.value.call(this.eventContext||this.element,event);}else{this.value.handleEvent(event);}}}]);return EventPart;}();// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;var getOptions=function getOptions(o){return o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);};var parts={isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;var DefaultTemplateProcessor=/*#__PURE__*/function(){function DefaultTemplateProcessor(){babelHelpers.classCallCheck(this,DefaultTemplateProcessor);}babelHelpers.createClass(DefaultTemplateProcessor,[{key:"handleAttributeExpressions",/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */value:function handleAttributeExpressions(element,name,strings,options){var prefix=name[0];if(prefix==='.'){var _comitter=new PropertyCommitter(element,name.slice(1),strings);return _comitter.parts;}if(prefix==='@'){return[new EventPart(element,name.slice(1),options.eventContext)];}if(prefix==='?'){return[new BooleanAttributePart(element,name.slice(1),strings)];}var comitter=new AttributeCommitter(element,name,strings);return comitter.parts;}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */},{key:"handleTextExpression",value:function handleTextExpression(options){return new NodePart(options);}}]);return DefaultTemplateProcessor;}();_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;var defaultTemplateProcessor=new DefaultTemplateProcessor();_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;function templateFactory(result){var templateCache=templateCaches.get(result.type);if(templateCache===undefined){templateCache={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(result.type,templateCache);}var template=templateCache.stringsArray.get(result.strings);if(template!==undefined){return template;}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
var key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===undefined){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template);}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template;}var templateCaches=new Map();_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;var parts$1=new WeakMap();/**
                                     * Renders a template to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result a TemplateResult created by evaluating a template tag like
                                     *     `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;var render=function render(result,container,options){var part=parts$1.get(container);if(part===undefined){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory:templateFactory},options)));part.appendInto(container);}part.setValue(result);part.commit();};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$render=render$1;(window['litHtmlVersions']||(window['litHtmlVersions']=[])).push('1.0.0');/**
                                                                                * Interprets a template literal as an HTML template that can efficiently
                                                                                * render to and update a container.
                                                                                */var html$1=function html$1(strings){for(var _len12=arguments.length,values=new Array(_len12>1?_len12-1:0),_key12=1;_key12<_len12;_key12++){values[_key12-1]=arguments[_key12];}return new TemplateResult(strings,values,'html',defaultTemplateProcessor);};/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$5=_exports.html$4=_exports.html=html$1;var svg=function svg(strings){for(var _len13=arguments.length,values=new Array(_len13>1?_len13-1:0),_key13=1;_key13<_len13;_key13++){values[_key13-1]=arguments[_key13];}return new SVGTemplateResult(strings,values,'svg',defaultTemplateProcessor);};_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html$1,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;var walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){var content=template.element.content,parts=template.parts;var walker=document.createTreeWalker(content,walkerNodeFilter,null,false);var partIndex=nextActiveIndexInTemplateParts(parts);var part=parts[partIndex];var nodeIndex=-1;var removeCount=0;var nodesToRemoveInTemplate=[];var currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;var node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null;}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(currentRemovingNode===null){currentRemovingNode=node;}}// When removing, increment count by which to adjust subsequent part indices
if(currentRemovingNode!==null){removeCount++;}while(part!==undefined&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=currentRemovingNode!==null?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex];}}nodesToRemoveInTemplate.forEach(function(n){return n.parentNode.removeChild(n);});}var countNodes=function countNodes(node){var count=node.nodeType===11/* Node.DOCUMENT_FRAGMENT_NODE */?0:1;var walker=document.createTreeWalker(node,walkerNodeFilter,null,false);while(walker.nextNode()){count++;}return count;};var nextActiveIndexInTemplateParts=function nextActiveIndexInTemplateParts(parts){var startIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;for(var _i71=startIndex+1;_i71<parts.length;_i71++){var _part11=parts[_i71];if(isTemplatePartActive(_part11)){return _i71;}}return-1;};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node){var refNode=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var content=template.element.content,parts=template.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(refNode===null||refNode===undefined){content.appendChild(node);return;}var walker=document.createTreeWalker(content,walkerNodeFilter,null,false);var partIndex=nextActiveIndexInTemplateParts(parts);var insertCount=0;var walkerIndex=-1;while(walker.nextNode()){walkerIndex++;var walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode);}while(partIndex!==-1&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(insertCount>0){while(partIndex!==-1){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}return;}partIndex=nextActiveIndexInTemplateParts(parts,partIndex);}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;var getTemplateCacheKey=function getTemplateCacheKey(type,scopeName){return"".concat(type,"--").concat(scopeName);};var compatibleShadyCSSVersion=true;if(typeof window.ShadyCSS==='undefined'){compatibleShadyCSSVersion=false;}else if(typeof window.ShadyCSS.prepareTemplateDom==='undefined'){console.warn("Incompatible ShadyCSS version detected."+"Please update to at least @webcomponents/webcomponentsjs@2.0.2 and"+"@webcomponents/shadycss@1.3.1.");compatibleShadyCSSVersion=false;}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */var shadyTemplateFactory=function shadyTemplateFactory(scopeName){return function(result){var cacheKey=getTemplateCacheKey(result.type,scopeName);var templateCache=templateCaches.get(cacheKey);if(templateCache===undefined){templateCache={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(cacheKey,templateCache);}var template=templateCache.stringsArray.get(result.strings);if(template!==undefined){return template;}var key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===undefined){var element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName);}template=new Template(result,element);templateCache.keyString.set(key,template);}templateCache.stringsArray.set(result.strings,template);return template;};};var TEMPLATE_TYPES=['html','svg'];/**
                                         * Removes all style elements from Templates for the given scopeName.
                                         */var removeStylesFromLitTemplates=function removeStylesFromLitTemplates(scopeName){TEMPLATE_TYPES.forEach(function(type){var templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==undefined){templates.keyString.forEach(function(template){var content=template.element.content;// IE 11 doesn't support the iterable param Set constructor
var styles=new Set();Array.from(content.querySelectorAll('style')).forEach(function(s){styles.add(s);});removeNodesFromTemplate(template,styles);});}});};var shadyRenderSet=new Set();/**
                                   * For the given scope name, ensures that ShadyCSS style scoping is performed.
                                   * This is done just once per scope name so the fragment and template cannot
                                   * be modified.
                                   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
                                   * to be scoped and appended to the document
                                   * (2) removes style elements from all lit-html Templates for this scope name.
                                   *
                                   * Note, <style> elements can only be placed into templates for the
                                   * initial rendering of the scope. If <style> elements are included in templates
                                   * dynamically rendered to the scope (after the first scope render), they will
                                   * not be scoped and the <style> will be left in the template and rendered
                                   * output.
                                   */var prepareTemplateStyles=function prepareTemplateStyles(renderedDOM,template,scopeName){shadyRenderSet.add(scopeName);// Move styles out of rendered DOM and store.
var styles=renderedDOM.querySelectorAll('style');// If there are no styles, skip unnecessary work
if(styles.length===0){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);return;}var condensedStyle=document.createElement('style');// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(var _i72=0;_i72<styles.length;_i72++){var _style7=styles[_i72];_style7.parentNode.removeChild(_style7);condensedStyle.textContent+=_style7.textContent;}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
insertNodeIntoTemplate(template,condensedStyle,template.element.content.firstChild);// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);if(window.ShadyCSS.nativeShadow){// When in native Shadow DOM, re-add styling to rendered content using
// the style ShadyCSS produced.
var _style8=template.element.content.querySelector('style');renderedDOM.insertBefore(_style8.cloneNode(true),renderedDOM.firstChild);}else{// When not in native Shadow DOM, at this point ShadyCSS will have
// removed the style from the lit template and parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
template.element.content.insertBefore(condensedStyle,template.element.content.firstChild);var removes=new Set();removes.add(condensedStyle);removeNodesFromTemplate(template,removes);}};/**
    * Extension to the standard `render` method which supports rendering
    * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
    * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
    * or when the webcomponentsjs
    * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
    *
    * Adds a `scopeName` option which is used to scope element DOM and stylesheets
    * when native ShadowDOM is unavailable. The `scopeName` will be added to
    * the class attribute of all rendered DOM. In addition, any style elements will
    * be automatically re-written with this `scopeName` selector and moved out
    * of the rendered DOM and into the document `<head>`.
    *
    * It is common to use this render method in conjunction with a custom element
    * which renders a shadowRoot. When this is done, typically the element's
    * `localName` should be used as the `scopeName`.
    *
    * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
    * custom properties (needed only on older browsers like IE11) and a shim for
    * a deprecated feature called `@apply` that supports applying a set of css
    * custom properties to a given location.
    *
    * Usage considerations:
    *
    * * Part values in `<style>` elements are only applied the first time a given
    * `scopeName` renders. Subsequent changes to parts in style elements will have
    * no effect. Because of this, parts in style elements should only be used for
    * values that will never change, for example parts that set scope-wide theme
    * values or parts which render shared style elements.
    *
    * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
    * custom element's `constructor` is not supported. Instead rendering should
    * either done asynchronously, for example at microtask timing (for example
    * `Promise.resolve()`), or be deferred until the first time the element's
    * `connectedCallback` runs.
    *
    * Usage considerations when using shimmed custom properties or `@apply`:
    *
    * * Whenever any dynamic changes are made which affect
    * css custom properties, `ShadyCSS.styleElement(element)` must be called
    * to update the element. There are two cases when this is needed:
    * (1) the element is connected to a new parent, (2) a class is added to the
    * element that causes it to match different custom properties.
    * To address the first case when rendering a custom element, `styleElement`
    * should be called in the element's `connectedCallback`.
    *
    * * Shimmed custom properties may only be defined either for an entire
    * shadowRoot (for example, in a `:host` rule) or via a rule that directly
    * matches an element with a shadowRoot. In other words, instead of flowing from
    * parent to child as do native css custom properties, shimmed custom properties
    * flow only from shadowRoots to nested shadowRoots.
    *
    * * When using `@apply` mixing css shorthand property names with
    * non-shorthand names (for example `border` and `border-width`) is not
    * supported.
    */var render$2=function render$2(result,container,options){var scopeName=options.scopeName;var hasRendered=parts$1.has(container);var needsScoping=babelHelpers.instanceof(container,ShadowRoot)&&compatibleShadyCSSVersion&&babelHelpers.instanceof(result,TemplateResult);// Handle first render to a scope specially...
var firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName);// On first scope render, render into a fragment; this cannot be a single
// fragment that is reused since nested renders can occur synchronously.
var renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){var _part12=parts$1.get(renderContainer);parts$1.delete(renderContainer);if(babelHelpers.instanceof(_part12.value,TemplateInstance)){prepareTemplateStyles(renderContainer,_part12.value.template,scopeName);}removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,_part12);}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host);}};_exports.render$1=render$2;var shadyRender={render:render$2,html:html$1,svg:svg,TemplateResult:TemplateResult};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$shadyRender=shadyRender;(window['litElementVersions']||(window['litElementVersions']=[])).push('2.0.1');/**
                                                                                      * Minimal implementation of Array.prototype.flat
                                                                                      * @param arr the array to flatten
                                                                                      * @param result the accumlated result
                                                                                      */function arrayFlat(styles){var result=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];for(var _i73=0,length=styles.length;_i73<length;_i73++){var value=styles[_i73];if(Array.isArray(value)){arrayFlat(value,result);}else{result.push(value);}}return result;}/** Deeply flattens styles array. Uses native flat if available. */var flattenStyles=function flattenStyles(styles){return styles.flat?styles.flat(Infinity):arrayFlat(styles);};var LitElement=/*#__PURE__*/function(_UpdatingElement){babelHelpers.inherits(LitElement,_UpdatingElement);function LitElement(){babelHelpers.classCallCheck(this,LitElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LitElement).apply(this,arguments));}babelHelpers.createClass(LitElement,[{key:"initialize",/**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */value:function initialize(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"initialize",this).call(this);this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&babelHelpers.instanceof(this.renderRoot,window.ShadowRoot)){this.adoptStyles();}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */},{key:"createRenderRoot",value:function createRenderRoot(){return this.attachShadow({mode:'open'});}/**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */},{key:"adoptStyles",value:function adoptStyles(){var styles=this.constructor._styles;if(styles.length===0){return;}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it.
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==undefined&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function(s){return s.cssText;}),this.localName);}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(function(s){return s.styleSheet;});}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=true;}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"connectedCallback",this).call(this);// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==undefined){window.ShadyCSS.styleElement(this);}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(changedProperties){var _this45=this;babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"update",this).call(this,changedProperties);var templateResult=this.render();if(babelHelpers.instanceof(templateResult,TemplateResult)){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this});}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=false;this.constructor._styles.forEach(function(s){var style=document.createElement('style');style.textContent=s.cssText;_this45.renderRoot.appendChild(style);});}}/**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */},{key:"render",value:function render(){}}],[{key:"finalize",/** @nocollapse */value:function finalize(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement),"finalize",this).call(this);// Prepare styling that is stamped at first render time. Styling
// is built from user provided `styles` or is inherited from the superclass.
this._styles=this.hasOwnProperty(JSCompiler_renameProperty('styles',this))?this._getUniqueStyles():this._styles||[];}/** @nocollapse */},{key:"_getUniqueStyles",value:function _getUniqueStyles(){// Take care not to call `this.styles` multiple times since this generates
// new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
var userStyles=this.styles;var styles=[];if(Array.isArray(userStyles)){var flatStyles=flattenStyles(userStyles);// As a performance optimization to avoid duplicated styling that can
// occur especially when composing via subclassing, de-duplicate styles
// preserving the last item in the list. The last item is kept to
// try to preserve cascade order with the assumption that it's most
// important that last added styles override previous styles.
var styleSet=flatStyles.reduceRight(function(set,s){set.add(s);// on IE set.add does not return the set.
return set;},new Set());// Array.from does not work on Set in IE
styleSet.forEach(function(v){return styles.unshift(v);});}else if(userStyles){styles.push(userStyles);}return styles;}}]);return LitElement;}(UpdatingElement);/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   */_exports.LitElement=LitElement;LitElement.finalized=true;/**
                              * Render method used to render the lit-html TemplateResult to the element's
                              * DOM.
                              * @param {TemplateResult} Template to render.
                              * @param {Element|DocumentFragment} Node into which to render.
                              * @param {String} Element name.
                              * @nocollapse
                              */LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html$1,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};// Since this is so minor, we just polyfill it.
_exports.$litElement=litElement;if(window.navigator.userAgent.match('Trident')){DOMTokenList.prototype.toggle=function(token,force){if(force===undefined||force){this.add(token);}else{this.remove(token);}return force===undefined?true:force;};}/**
   * Stores the ClassInfo object applied to a given AttributePart.
   * Used to unset existing values when a new ClassInfo object is applied.
   */var classMapCache=new WeakMap();/**
                                      * Stores AttributeParts that have had static classes applied (e.g. `foo` in
                                      * class="foo ${classMap()}"). Static classes are applied only the first time
                                      * the directive is run on a part.
                                      */ // Note, could be a WeakSet, but prefer not requiring this polyfill.
var classMapStatics=new WeakMap();/**
                                        * A directive that applies CSS classes. This must be used in the `class`
                                        * attribute and must be the only part used in the attribute. It takes each
                                        * property in the `classInfo` argument and adds the property name to the
                                        * element's `classList` if the property value is truthy; if the property value
                                        * is falsey, the property name is removed from the element's `classList`. For
                                        * example
                                        * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
                                        * @param classInfo {ClassInfo}
                                        */var classMap=directive(function(classInfo){return function(part){if(!babelHelpers.instanceof(part,AttributePart)||babelHelpers.instanceof(part,PropertyPart)||part.committer.name!=='class'||part.committer.parts.length>1){throw new Error('The `classMap` directive must be used in the `class` attribute '+'and must be the only part in the attribute.');}// handle static classes
if(!classMapStatics.has(part)){part.committer.element.className=part.committer.strings.join(' ');classMapStatics.set(part,true);}// remove old classes that no longer apply
var oldInfo=classMapCache.get(part);for(var name in oldInfo){if(!(name in classInfo)){part.committer.element.classList.remove(name);}}// add new classes
for(var _name in classInfo){if(!oldInfo||oldInfo[_name]!==classInfo[_name]){// We explicitly want a loose truthy check here because
// it seems more convenient that '' and 0 are skipped.
part.committer.element.classList.toggle(_name,Boolean(classInfo[_name]));}}classMapCache.set(part,classInfo);};});_exports.classMap=classMap;var classMap$1={classMap:classMap};// TODO(kschaaf): Refactor into Part API?
_exports.$classMap=classMap$1;var createAndInsertPart=function createAndInsertPart(containerPart,beforePart){var container=containerPart.startNode.parentNode;var beforeNode=beforePart===undefined?containerPart.endNode:beforePart.startNode;var startNode=container.insertBefore(createMarker(),beforeNode);container.insertBefore(createMarker(),beforeNode);var newPart=new NodePart(containerPart.options);newPart.insertAfterNode(startNode);return newPart;};var updatePart=function updatePart(part,value){part.setValue(value);part.commit();return part;};var insertPartBefore=function insertPartBefore(containerPart,part,ref){var container=containerPart.startNode.parentNode;var beforeNode=ref?ref.startNode:containerPart.endNode;var endNode=part.endNode.nextSibling;if(endNode!==beforeNode){reparentNodes(container,part.startNode,endNode,beforeNode);}};var removePart=function removePart(part){removeNodes(part.startNode.parentNode,part.startNode,part.endNode.nextSibling);};// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
var generateMap=function generateMap(list,start,end){var map=new Map();for(var _i74=start;_i74<=end;_i74++){map.set(list[_i74],_i74);}return map;};// Stores previous ordered list of parts and map of key to index
var partListCache=new WeakMap();var keyListCache=new WeakMap();/**
                                     * A directive that repeats a series of values (usually `TemplateResults`)
                                     * generated from an iterable, and updates those items efficiently when the
                                     * iterable changes based on user-provided `keys` associated with each item.
                                     *
                                     * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
                                     * meaning previous DOM for a given key is moved into the new position if
                                     * needed, and DOM will never be reused with values for different keys (new DOM
                                     * will always be created for new keys). This is generally the most efficient
                                     * way to use `repeat` since it performs minimum unnecessary work for insertions
                                     * amd removals.
                                     *
                                     * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
                                     * given call to `repeat`. The behavior when two or more items have the same key
                                     * is undefined.
                                     *
                                     * If no `keyFn` is provided, this directive will perform similar to mapping
                                     * items to values, and DOM will be reused against potentially different items.
                                     */var repeat=directive(function(items,keyFnOrTemplate,template){var keyFn;if(template===undefined){template=keyFnOrTemplate;}else if(keyFnOrTemplate!==undefined){keyFn=keyFnOrTemplate;}return function(containerPart){if(!babelHelpers.instanceof(containerPart,NodePart)){throw new Error('repeat can only be used in text bindings');}// Old part & key lists are retrieved from the last update
// (associated with the part for this instance of the directive)
var oldParts=partListCache.get(containerPart)||[];var oldKeys=keyListCache.get(containerPart)||[];// New part list will be built up as we go (either reused from
// old parts or created for new keys in this update). This is
// saved in the above cache at the end of the update.
var newParts=[];// New value list is eagerly generated from items along with a
// parallel array indicating its key.
var newValues=[];var newKeys=[];var index=0;var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=items[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var item=_step6.value;newKeys[index]=keyFn?keyFn(item,index):index;newValues[index]=template(item,index);index++;}// Maps from key to index for current and previous update; these
// are generated lazily only when needed as a performance
// optimization, since they are only required for multiple
// non-contiguous changes in the list, which are less common.
}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}var newKeyToIndexMap;var oldKeyToIndexMap;// Head and tail pointers to old parts and new values
var oldHead=0;var oldTail=oldParts.length-1;var newHead=0;var newTail=newValues.length-1;// Overview of O(n) reconciliation algorithm (general approach
// based on ideas found in ivi, vue, snabbdom, etc.):
//
// * We start with the list of old parts and new values (and
// arrays of
//   their respective keys), head/tail pointers into each, and
//   we build up the new list of parts by updating (and when
//   needed, moving) old parts or creating new ones. The initial
//   scenario might look like this (for brevity of the diagrams,
//   the numbers in the array reflect keys associated with the
//   old parts or new values, although keys and parts/values are
//   actually stored in parallel arrays indexed using the same
//   head/tail pointers):
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [ ,  ,  ,  ,  ,  ,  ]
//   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
//   item order
//      newHead ^                 ^ newTail
//
// * Iterate old & new lists from both sides, updating,
// swapping, or
//   removing parts at the head/tail locations until neither
//   head nor tail can move.
//
// * Example below: keys at head pointers match, so update old
// part 0 in-
//   place (no need to move it) and record part 0 in the
//   `newParts` list. The last thing we do is advance the
//   `oldHead` and `newHead` pointers (will be reflected in the
//   next diagram).
//
//      oldHead v                 v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
//   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldHead
//   & newHead
//      newHead ^                 ^ newTail
//
// * Example below: head pointers don't match, but tail pointers
// do, so
//   update part 6 in place (no need to move it), and record
//   part 6 in the `newParts` list. Last, advance the `oldTail`
//   and `oldHead` pointers.
//
//         oldHead v              v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
//   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldTail
//   & newTail
//         newHead ^              ^ newTail
//
// * If neither head nor tail match; next check if one of the
// old head/tail
//   items was removed. We first need to generate the reverse
//   map of new keys to index (`newKeyToIndexMap`), which is
//   done once lazily as a performance optimization, since we
//   only hit this case if multiple non-contiguous changes were
//   made. Note that for contiguous removal anywhere in the
//   list, the head and tails would advance from either end and
//   pass each other before we get to this case and removals
//   would be handled in the final while loop without needing to
//   generate the map.
//
// * Example below: The key at `oldTail` was removed (no longer
// in the
//   `newKeyToIndexMap`), so remove that part from the DOM and
//   advance just the `oldTail` pointer.
//
//         oldHead v           v oldTail
//   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
//   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map; remove
//   5 and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance oldTail
//         newHead ^           ^ newTail
//
// * Once head and tail cannot move, any mismatches are due to
// either new or
//   moved items; if a new key is in the previous "old key to
//   old index" map, move the old part to the new location,
//   otherwise create and insert a new part. Note that when
//   moving an old part we null its position in the oldParts
//   array if it lies between the head and tail so we know to
//   skip it when the pointers get there.
//
// * Example below: neither head nor tail match, and neither
// were removed;
//   so find the `newHead` key in the `oldKeyToIndexMap`, and
//   move that old part's DOM into the next head position
//   (before `oldParts[oldHead]`). Last, null the part in the
//   `oldPart` array since it was somewhere in the remaining
//   oldParts still to be scanned (between the head and tail
//   pointers) so that we know to skip that old part on future
//   iterations.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck; update & move 2
//   into place newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance
//   newHead
//         newHead ^           ^ newTail
//
// * Note that for moves/insertions like the one above, a part
// inserted at
//   the head pointer is inserted before the current
//   `oldParts[oldHead]`, and a part inserted at the tail
//   pointer is inserted before `newParts[newTail+1]`. The
//   seeming asymmetry lies in the fact that new parts are moved
//   into place outside in, so to the right of the head pointer
//   are old parts, and to the right of the tail pointer are new
//   parts.
//
// * We always restart back from the top of the algorithm,
// allowing matching
//   and simple updates in place to continue...
//
// * Example below: the head pointers once again match, so
// simply update
//   part 1 and record it in the `newParts` array.  Last,
//   advance both head pointers.
//
//         oldHead v        v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched; update 1
//   and newKeys:  [0, 2, 1, 4, 3, 7, 6]    advance both oldHead
//   & newHead
//            newHead ^        ^ newTail
//
// * As mentioned above, items that were moved as a result of
// being stuck
//   (the final else clause in the code below) are marked with
//   null, so we always advance old pointers over these so we're
//   comparing the next actual old value on either end.
//
// * Example below: `oldHead` is null (already placed in
// newParts), so
//   advance `oldHead`.
//
//            oldHead v     v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6] // old head already used;
//   advance newParts: [0, 2, 1,  ,  ,  , 6] // oldHead newKeys:
//   [0, 2, 1, 4, 3, 7, 6]
//               newHead ^     ^ newTail
//
// * Note it's not critical to mark old parts as null when they
// are moved
//   from head to tail or tail to head, since they will be
//   outside the pointer range and never visited again.
//
// * Example below: Here the old tail key matches the new head
// key, so
//   the part at the `oldTail` position and move its DOM to the
//   new head position (before `oldParts[oldHead]`). Last,
//   advance `oldTail` and `newHead` pointers.
//
//               oldHead v  v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
//   head: update newKeys:  [0, 2, 1, 4, 3, 7, 6]   & move 4,
//   advance oldTail & newHead
//               newHead ^     ^ newTail
//
// * Example below: Old and new head keys match, so update the
// old head
//   part in place, and advance the `oldHead` and `newHead`
//   pointers.
//
//               oldHead v oldTail
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
//   and advance newKeys:  [0, 2, 1, 4, 3, 7, 6]    oldHead &
//   newHead
//                  newHead ^  ^ newTail
//
// * Once the new or old pointers move past each other then all
// we have
//   left is additions (if old list exhausted) or removals (if
//   new list exhausted). Those are handled in the final while
//   loops at the end.
//
// * Example below: `oldHead` exceeded `oldTail`, so we're done
// with the
//   main loop.  Create the remaining part and insert it at the
//   new head position, and the update is complete.
//
//                   (oldHead > oldTail)
//   oldKeys:  [0, 1, -, 3, 4, 5, 6]
//   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
//   newKeys:  [0, 2, 1, 4, 3, 7, 6]
//                     newHead ^ newTail
//
// * Note that the order of the if/else clauses is not important
// to the
//   algorithm, as long as the null checks come first (to ensure
//   we're always working on valid old parts) and that the final
//   else clause comes last (since that's where the expensive
//   moves occur). The order of remaining clauses is is just a
//   simple guess at which cases will be most common.
//
// * TODO(kschaaf) Note, we could calculate the longest
// increasing
//   subsequence (LIS) of old items in new position, and only
//   move those not in the LIS set. However that costs O(nlogn)
//   time and adds a bit more code, and only helps make rare
//   types of mutations require fewer moves. The above handles
//   removes, adds, reversal, swaps, and single moves of
//   contiguous items in linear time, in the minimum number of
//   moves. As the number of multiple moves where LIS might help
//   approaches a random shuffle, the LIS optimization becomes
//   less helpful, so it seems not worth the code at this point.
//   Could reconsider if a compelling case arises.
while(oldHead<=oldTail&&newHead<=newTail){if(oldParts[oldHead]===null){// `null` means old part at head has already been used
// below; skip
oldHead++;}else if(oldParts[oldTail]===null){// `null` means old part at tail has already been used
// below; skip
oldTail--;}else if(oldKeys[oldHead]===newKeys[newHead]){// Old head matches new head; update in place
newParts[newHead]=updatePart(oldParts[oldHead],newValues[newHead]);oldHead++;newHead++;}else if(oldKeys[oldTail]===newKeys[newTail]){// Old tail matches new tail; update in place
newParts[newTail]=updatePart(oldParts[oldTail],newValues[newTail]);oldTail--;newTail--;}else if(oldKeys[oldHead]===newKeys[newTail]){// Old head matches new tail; update and move to new tail
newParts[newTail]=updatePart(oldParts[oldHead],newValues[newTail]);insertPartBefore(containerPart,oldParts[oldHead],newParts[newTail+1]);oldHead++;newTail--;}else if(oldKeys[oldTail]===newKeys[newHead]){// Old tail matches new head; update and move to new head
newParts[newHead]=updatePart(oldParts[oldTail],newValues[newHead]);insertPartBefore(containerPart,oldParts[oldTail],oldParts[oldHead]);oldTail--;newHead++;}else{if(newKeyToIndexMap===undefined){// Lazily generate key-to-index maps, used for removals &
// moves below
newKeyToIndexMap=generateMap(newKeys,newHead,newTail);oldKeyToIndexMap=generateMap(oldKeys,oldHead,oldTail);}if(!newKeyToIndexMap.has(oldKeys[oldHead])){// Old head is no longer in new list; remove
removePart(oldParts[oldHead]);oldHead++;}else if(!newKeyToIndexMap.has(oldKeys[oldTail])){// Old tail is no longer in new list; remove
removePart(oldParts[oldTail]);oldTail--;}else{// Any mismatches at this point are due to additions or
// moves; see if we have an old part we can reuse and move
// into place
var oldIndex=oldKeyToIndexMap.get(newKeys[newHead]);var oldPart=oldIndex!==undefined?oldParts[oldIndex]:null;if(oldPart===null){// No old part for this value; create a new one and
// insert it
var newPart=createAndInsertPart(containerPart,oldParts[oldHead]);updatePart(newPart,newValues[newHead]);newParts[newHead]=newPart;}else{// Reuse old part
newParts[newHead]=updatePart(oldPart,newValues[newHead]);insertPartBefore(containerPart,oldPart,oldParts[oldHead]);// This marks the old part as having been used, so that
// it will be skipped in the first two checks above
oldParts[oldIndex]=null;}newHead++;}}}// Add parts for any remaining new values
while(newHead<=newTail){// For all remaining additions, we insert before last new
// tail, since old pointers are no longer valid
var _newPart=createAndInsertPart(containerPart,newParts[newTail+1]);updatePart(_newPart,newValues[newHead]);newParts[newHead++]=_newPart;}// Remove any remaining unused old parts
while(oldHead<=oldTail){var _oldPart=oldParts[oldHead++];if(_oldPart!==null){removePart(_oldPart);}}// Save order of new parts for next round
partListCache.set(containerPart,newParts);keyListCache.set(containerPart,newKeys);};});_exports.repeat=repeat;var repeat$1={repeat:repeat};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        This is a JavaScript mixin that you can use to connect a Custom Element base
        class to a Redux store. The `stateChanged(state)` method will be called when
        the state is updated.
      
        Example:
      
            import { connect } from 'pwa-helpers/connect-mixin.js';
      
            class MyElement extends connect(store)(HTMLElement) {
              stateChanged(state) {
                this.textContent = state.data.count.toString();
              }
            }
      */_exports.$repeat=repeat$1;var connect=function connect(store){return function(baseElement){return(/*#__PURE__*/function(_baseElement){babelHelpers.inherits(_class3,_baseElement);function _class3(){babelHelpers.classCallCheck(this,_class3);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(_class3).apply(this,arguments));}babelHelpers.createClass(_class3,[{key:"connectedCallback",value:function connectedCallback(){var _this46=this;if(babelHelpers.get(babelHelpers.getPrototypeOf(_class3.prototype),"connectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(_class3.prototype),"connectedCallback",this).call(this);}this._storeUnsubscribe=store.subscribe(function(){return _this46.stateChanged(store.getState());});this.stateChanged(store.getState());}},{key:"disconnectedCallback",value:function disconnectedCallback(){this._storeUnsubscribe();if(babelHelpers.get(babelHelpers.getPrototypeOf(_class3.prototype),"disconnectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(_class3.prototype),"disconnectedCallback",this).call(this);}}/**
     * The `stateChanged(state)` method will be called when the state is updated.
     */},{key:"stateChanged",value:function stateChanged(_state){}}]);return _class3;}(baseElement));};};_exports.connect=connect;var connectMixin={connect:connect};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        A Redux store enhancer that lets you lazy-install reducers after the store
        has booted up. Use this if your application lazy-loads routes that are connected
        to a Redux store.
      
        Example:
      
            import { combineReducers } from 'redux';
            import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
            import someReducer from './reducers/someReducer.js';
      
            export const store = createStore(
              (state, action) => state,
              compose(lazyReducerEnhancer(combineReducers))
            );
      
        Then, in your page/element, you can lazy load a specific reducer with:
      
            store.addReducers({
              someReducer
            });
      */_exports.$connectMixin=connectMixin;var lazyReducerEnhancer=function lazyReducerEnhancer(combineReducers){var enhancer=function enhancer(nextCreator){return function(origReducer,preloadedState){var lazyReducers={};var nextStore=nextCreator(origReducer,preloadedState);return Object.assign({},nextStore,{addReducers:function addReducers(newReducers){var combinedReducerMap=Object.assign({},lazyReducers,newReducers);this.replaceReducer(combineReducers(lazyReducers=combinedReducerMap));}});};};return enhancer;};_exports.lazyReducerEnhancer=lazyReducerEnhancer;var lazyReducerEnhancer$1={lazyReducerEnhancer:lazyReducerEnhancer};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Utility method that calls a callback whenever a media-query matches in response
        to the viewport size changing. The callback should take a boolean parameter
        (with `true` meaning the media query is matched).
      
        Example:
      
            import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
      
            installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
              console.log(matches ? 'wide screen' : 'narrow sreen');
            });
      */_exports.$lazyReducerEnhancer=lazyReducerEnhancer$1;var installMediaQueryWatcher=function installMediaQueryWatcher(mediaQuery,layoutChangedCallback){var mql=window.matchMedia(mediaQuery);mql.addListener(function(e){return layoutChangedCallback(e.matches);});layoutChangedCallback(mql.matches);};_exports.installMediaQueryWatcher=installMediaQueryWatcher;var mediaQuery={installMediaQueryWatcher:installMediaQueryWatcher};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Utility method that updates the page's open graph and Twitter card metadata.
        It takes an object as a parameter with the following properties:
        title | description | url | image.
      
        If the `url` is not specified, `window.location.href` will be used; for
        all other properties, if they aren't specified, then that metadata field will not
        be set.
      
        Example (in your top level element or document, or in the router callback):
      
            import { updateMetadata } from 'pwa-helpers/metadata.js';
      
            updateMetadata({
              title: 'My App - view 1',
              description: 'This is my sample app',
              url: window.location.href,
              image: '/assets/view1-hero.png'
            });
      
      */_exports.$mediaQuery=mediaQuery;var updateMetadata=function updateMetadata(_ref3){var title=_ref3.title,description=_ref3.description,url=_ref3.url,image=_ref3.image;if(title){document.title=title;_setMeta('property','og:title',title);_setMeta('property','twitter:title',title);}if(description){_setMeta('name','description',description);_setMeta('property','og:description',description);_setMeta('property','twitter:description',description);}if(image){_setMeta('property','og:image',image);_setMeta('property','twitter:image:src',image);}url=url||window.location.href;_setMeta('property','og:url',url);_setMeta('property','twitter:url',url);};_exports.updateMetadata=updateMetadata;function _setMeta(attrName,attrValue,content){var element=document.head.querySelector("meta[".concat(attrName,"=\"").concat(attrValue,"\"]"));if(!element){element=document.createElement('meta');element.setAttribute(attrName,attrValue);document.head.appendChild(element);}element.setAttribute('content',content||'');}var metadata={updateMetadata:updateMetadata};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Utility method that calls a callback whenever the network connectivity of the app changes.
        The callback should take a boolean parameter (with `true` meaning
        the network is offline, and `false` meaning online)
      
        Example:
      
            import { installOfflineWatcher } from 'pwa-helpers/network.js';
      
            installOfflineWatcher((offline) => {
              console.log('You are ' + offline ? ' offline' : 'online');
            });
      */_exports.$metadata=metadata;var installOfflineWatcher=function installOfflineWatcher(offlineUpdatedCallback){window.addEventListener('online',function(){return offlineUpdatedCallback(false);});window.addEventListener('offline',function(){return offlineUpdatedCallback(true);});offlineUpdatedCallback(navigator.onLine===false);};_exports.installOfflineWatcher=installOfflineWatcher;var network={installOfflineWatcher:installOfflineWatcher};/**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
        Basic router that calls a callback whenever the location is updated.
      
        Example:
      
            import { installRouter } from 'pwa-helpers/router.js';
      
            installRouter((location) => handleNavigation(location));
      
        For example, if you're using this router in a Redux-connected component,
        you could dispatch an action in the callback:
      
            import { installRouter } from 'pwa-helpers/router.js';
            import { navigate } from '../actions/app.js';
      
            installRouter((location) => store.dispatch(navigate(location)))
      
        If you need to force a navigation to a new location programmatically, you can
        do so by pushing a new state using the History API, and then manually
        calling the callback with the new location:
      
            window.history.pushState({}, '', '/new-route');
            handleNavigation(window.location);
      
        Optionally, you can use the second argument to read the event that caused the
        navigation. For example, you may want to scroll to top only after a link click.
      
            installRouter((location, event) => {
              // Only scroll to top on link clicks, not popstate events.
              if (event && event.type === 'click') {
                window.scrollTo(0, 0);
              }
              handleNavigation(location);
            });
      */_exports.$network=network;var installRouter=function installRouter(locationUpdatedCallback){document.body.addEventListener('click',function(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;var anchor=e.composedPath().filter(function(n){return n.tagName==='A';})[0];if(!anchor||anchor.target||anchor.hasAttribute('download')||anchor.getAttribute('rel')==='external')return;var href=anchor.href;if(!href||href.indexOf('mailto:')!==-1)return;var location=window.location;var origin=location.origin||location.protocol+'//'+location.host;if(href.indexOf(origin)!==0)return;e.preventDefault();if(href!==location.href){window.history.pushState({},'',href);locationUpdatedCallback(location,e);}});window.addEventListener('popstate',function(e){return locationUpdatedCallback(window.location,e);});locationUpdatedCallback(window.location,null/* event */);};_exports.installRouter=installRouter;var router={installRouter:installRouter};_exports.$router=router;function createThunkMiddleware(extraArgument){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){if(typeof action==='function'){return action(dispatch,getState,extraArgument);}return next(action);};};};}var thunk=createThunkMiddleware();_exports.$indexDefault=thunk;thunk.withExtraArgument=createThunkMiddleware;var index={default:thunk};_exports.$index=index;function symbolObservablePonyfill(root){var result;var _Symbol=root.Symbol;if(typeof _Symbol==='function'){if(_Symbol.observable){result=_Symbol.observable;}else{result=_Symbol('observable');_Symbol.observable=result;}}else{result='@@observable';}return result;}var ponyfill={default:symbolObservablePonyfill};_exports.$ponyfill=ponyfill;var root$1;if(typeof self!=='undefined'){root$1=self;}else if(typeof window!=='undefined'){root$1=window;}else if(typeof global!=='undefined'){root$1=global;}else if(typeof module!=='undefined'){root$1=module;}else{root$1=Function('return this')();}var result=symbolObservablePonyfill(root$1);_exports.$indexDefault$1=result;var index$1={default:result};_exports.$index$1=index$1;var randomString=function randomString(){return Math.random().toString(36).substring(7).split('').join('.');};var ActionTypes={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString();}};/**
    * @param {any} obj The object to inspect.
    * @returns {boolean} True if the argument appears to be a plain object.
    */_exports.__DO_NOT_USE__ActionTypes=ActionTypes;function isPlainObject(obj){if(babelHelpers.typeof(obj)!=='object'||obj===null)return false;var proto=obj;while(Object.getPrototypeOf(proto)!==null){proto=Object.getPrototypeOf(proto);}return Object.getPrototypeOf(obj)===proto;}/**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */function createStore(reducer,preloadedState,enhancer){var _ref2;if(typeof preloadedState==='function'&&typeof enhancer==='function'||typeof enhancer==='function'&&typeof arguments[3]==='function'){throw new Error('It looks like you are passing several store enhancers to '+'createStore(). This is not supported. Instead, compose them '+'together to a single function');}if(typeof preloadedState==='function'&&typeof enhancer==='undefined'){enhancer=preloadedState;preloadedState=undefined;}if(typeof enhancer!=='undefined'){if(typeof enhancer!=='function'){throw new Error('Expected the enhancer to be a function.');}return enhancer(createStore)(reducer,preloadedState);}if(typeof reducer!=='function'){throw new Error('Expected the reducer to be a function.');}var currentReducer=reducer;var currentState=preloadedState;var currentListeners=[];var nextListeners=currentListeners;var isDispatching=false;function ensureCanMutateNextListeners(){if(nextListeners===currentListeners){nextListeners=currentListeners.slice();}}/**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */function getState(){if(isDispatching){throw new Error('You may not call store.getState() while the reducer is executing. '+'The reducer has already received the state as an argument. '+'Pass it down from the top reducer instead of reading it from the store.');}return currentState;}/**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */function subscribe(listener){if(typeof listener!=='function'){throw new Error('Expected the listener to be a function.');}if(isDispatching){throw new Error('You may not call store.subscribe() while the reducer is executing. '+'If you would like to be notified after the store has been updated, subscribe from a '+'component and invoke store.getState() in the callback to access the latest state. '+'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');}var isSubscribed=true;ensureCanMutateNextListeners();nextListeners.push(listener);return function unsubscribe(){if(!isSubscribed){return;}if(isDispatching){throw new Error('You may not unsubscribe from a store listener while the reducer is executing. '+'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');}isSubscribed=false;ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1);};}/**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */function dispatch(action){if(!isPlainObject(action)){throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');}if(typeof action.type==='undefined'){throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');}if(isDispatching){throw new Error('Reducers may not dispatch actions.');}try{isDispatching=true;currentState=currentReducer(currentState,action);}finally{isDispatching=false;}var listeners=currentListeners=nextListeners;for(var i=0;i<listeners.length;i++){var listener=listeners[i];listener();}return action;}/**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */function replaceReducer(nextReducer){if(typeof nextReducer!=='function'){throw new Error('Expected the nextReducer to be a function.');}currentReducer=nextReducer;dispatch({type:ActionTypes.REPLACE});}/**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */function observable(){var _ref;var outerSubscribe=subscribe;return _ref={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function subscribe(observer){if(babelHelpers.typeof(observer)!=='object'||observer===null){throw new TypeError('Expected the observer to be an object.');}function observeState(){if(observer.next){observer.next(getState());}}observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe};}},_ref[result]=function(){return this;},_ref;}// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
dispatch({type:ActionTypes.INIT});return _ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[result]=observable,_ref2;}/**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */function warning(message){/* eslint-disable no-console */if(typeof console!=='undefined'&&typeof console.error==='function'){console.error(message);}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
// "break on all exceptions" in your console,
// it would pause the execution at this line.
throw new Error(message);}catch(e){}// eslint-disable-line no-empty
}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;var actionDescription=actionType&&"action \""+String(actionType)+"\""||'an action';return"Given "+actionDescription+", reducer \""+key+"\" returned undefined. "+"To ignore an action, you must explicitly return the previous state. "+"If you want this reducer to hold no value, you can return null instead of undefined.";}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){var reducerKeys=Object.keys(reducers);var argumentName=action&&action.type===ActionTypes.INIT?'preloadedState argument passed to createStore':'previous state received by the reducer';if(reducerKeys.length===0){return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';}if(!isPlainObject(inputState)){return"The "+argumentName+" has unexpected type of \""+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+"\". Expected argument to be an object with the following "+("keys: \""+reducerKeys.join('", "')+"\"");}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key)&&!unexpectedKeyCache[key];});unexpectedKeys.forEach(function(key){unexpectedKeyCache[key]=true;});if(action&&action.type===ActionTypes.REPLACE)return;if(unexpectedKeys.length>0){return"Unexpected "+(unexpectedKeys.length>1?'keys':'key')+" "+("\""+unexpectedKeys.join('", "')+"\" found in "+argumentName+". ")+"Expected to find one of the known reducer keys instead: "+("\""+reducerKeys.join('", "')+"\". Unexpected keys will be ignored.");}}function assertReducerShape(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];var initialState=reducer(undefined,{type:ActionTypes.INIT});if(typeof initialState==='undefined'){throw new Error("Reducer \""+key+"\" returned undefined during initialization. "+"If the state passed to the reducer is undefined, you must "+"explicitly return the initial state. The initial state may "+"not be undefined. If you don't want to set a value for this reducer, "+"you can use null instead of undefined.");}if(typeof reducer(undefined,{type:ActionTypes.PROBE_UNKNOWN_ACTION()})==='undefined'){throw new Error("Reducer \""+key+"\" returned undefined when probed with a random type. "+("Don't try to handle "+ActionTypes.INIT+" or other actions in \"redux/*\" ")+"namespace. They are considered private. Instead, you must return the "+"current state for any unknown actions, unless it is undefined, "+"in which case you must return the initial state, regardless of the "+"action type. The initial state may not be undefined, but can be null.");}});}/**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */function combineReducers(reducers){var reducerKeys=Object.keys(reducers);var finalReducers={};for(var i=0;i<reducerKeys.length;i++){var key=reducerKeys[i];if(process.env.NODE_ENV!=='production'){if(typeof reducers[key]==='undefined'){warning("No reducer provided for key \""+key+"\"");}}if(typeof reducers[key]==='function'){finalReducers[key]=reducers[key];}}var finalReducerKeys=Object.keys(finalReducers);var unexpectedKeyCache;if(process.env.NODE_ENV!=='production'){unexpectedKeyCache={};}var shapeAssertionError;try{assertReducerShape(finalReducers);}catch(e){shapeAssertionError=e;}return function combination(state,action){if(state===void 0){state={};}if(shapeAssertionError){throw shapeAssertionError;}if(process.env.NODE_ENV!=='production'){var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action,unexpectedKeyCache);if(warningMessage){warning(warningMessage);}}var hasChanged=false;var nextState={};for(var _i=0;_i<finalReducerKeys.length;_i++){var _key=finalReducerKeys[_i];var reducer=finalReducers[_key];var previousStateForKey=state[_key];var nextStateForKey=reducer(previousStateForKey,action);if(typeof nextStateForKey==='undefined'){var errorMessage=getUndefinedStateErrorMessage(_key,action);throw new Error(errorMessage);}nextState[_key]=nextStateForKey;hasChanged=hasChanged||nextStateForKey!==previousStateForKey;}return hasChanged?nextState:state;};}function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(this,arguments));};}/**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass a single function as the first argument,
   * and get a function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */function bindActionCreators(actionCreators,dispatch){if(typeof actionCreators==='function'){return bindActionCreator(actionCreators,dispatch);}if(babelHelpers.typeof(actionCreators)!=='object'||actionCreators===null){throw new Error("bindActionCreators expected an object or a function, instead received "+(actionCreators===null?'null':babelHelpers.typeof(actionCreators))+". "+"Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");}var keys=Object.keys(actionCreators);var boundActionCreators={};for(var i=0;i<keys.length;i++){var key=keys[i];var actionCreator=actionCreators[key];if(typeof actionCreator==='function'){boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);}}return boundActionCreators;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}/**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */function compose(){for(var _len=arguments.length,funcs=new Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}if(funcs.length===0){return function(arg){return arg;};}if(funcs.length===1){return funcs[0];}return funcs.reduce(function(a,b){return function(){return a(b.apply(void 0,arguments));};});}/**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */function applyMiddleware(){for(var _len=arguments.length,middlewares=new Array(_len),_key=0;_key<_len;_key++){middlewares[_key]=arguments[_key];}return function(createStore){return function(){var store=createStore.apply(void 0,arguments);var _dispatch=function dispatch(){throw new Error("Dispatching while constructing your middleware is not allowed. "+"Other middleware would not be applied to this dispatch.");};var middlewareAPI={getState:store.getState,dispatch:function dispatch(){return _dispatch.apply(void 0,arguments);}};var chain=middlewares.map(function(middleware){return middleware(middlewareAPI);});_dispatch=compose.apply(void 0,chain)(store.dispatch);return _objectSpread({},store,{dispatch:_dispatch});};};}/*
   * This is a dummy function to check if the function name has been altered by minification.
   * If the function has been minified and NODE_ENV !== 'production', warn the user.
   */function isCrushed(){}if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){warning('You are currently using minified code outside of NODE_ENV === "production". '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) '+'to ensure you have the correct code for your production build.');}var redux={createStore:createStore,combineReducers:combineReducers,bindActionCreators:bindActionCreators,applyMiddleware:applyMiddleware,compose:compose,__DO_NOT_USE__ActionTypes:ActionTypes};_exports.$redux=redux;var SECONDS_IN_AN_MINUTE=60;_exports.SECONDS_IN_AN_MINUTE=SECONDS_IN_AN_MINUTE;var SECONDS_IN_AN_HOUR=SECONDS_IN_AN_MINUTE*60;/** @function weightedRandom
                                                              *  A random number between 0 and 1 weighted towards the middle.
                                                              *  @param bellFactor Increasing this number increases the weight towards the middle.
                                                              */_exports.SECONDS_IN_AN_HOUR=SECONDS_IN_AN_HOUR;function weightedRandom(bellFactor){var max=100;var num=0;for(var i=0;i<bellFactor;i++){num+=Math.random()*(max/bellFactor);}return num/max;}/** @function modVolume
   *  This function takes a volumne, a weapon range, and a current distance
   *  and then returns a modified volume. This returned value will be betwee 0
   *  and volume, the closer range gets to distance the quicker volume decreases.
   */function modVolume(volume,range,distance){return Math.max(Math.min(volume*(-Math.pow(distance/range,2)+1),volume),0);}// Each argument should either be a number or an object with a "value" and an optional "weight"
function weightedAverage(){var value=0;var weights=0;for(var i=0;i<arguments.length;i++){var param=arguments[i];if(babelHelpers.typeof(param)==='object'){var weight=typeof param.weight!=='undefined'?param.weight:1;value+=param.value*weight;weights+=weight;}else{value+=param;weights+=1;}}return value/weights;}/** @function randomMinutesBetween
   *  Returns a random amount of time given in seconds betwee x minutes and y minutes.
   */function randomMinutesBetween(x,y){return SECONDS_IN_AN_MINUTE*getRandomInt(x,y);}/** @function weightedRandomTowards
   *  @returns A random number between x and y weight towards z with a weight as given.
   */function weightedRandomTowards(x,y,z,weight){return(getRandomInt(x,y)+z*weight)/(weight+1);}function randomBellMod(){var weight=arguments.length>0&&arguments[0]!==undefined?arguments[0]:2;return weightedRandomTowards(0,1,0.5,weight);}/**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */function getRandomInt(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min+1))+min;}function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}function nearest100(x){return Math.floor(x/100)*100;}function msSinceMidnight(date){var previousMidnight=new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);return date.getTime()-previousMidnight.getTime();}function prettyDateTime(date){var strArray=['January','February','March','April','May','June','July','August','September','October','November','December'];var d=date.getDate();var m=strArray[date.getMonth()];var y=date.getFullYear();var suf;if(d===1){suf="st";}else if(d===2){suf="nd";}else if(d===3){suf="rd";}else{suf="th";}var hour;var hourSuf;if(date.getHours()>=13){hour=date.getHours()-12;hourSuf='pm';}else if(date.getHours()===12){hour=date.getHours();hourSuf='pm';}else{hour=date.getHours();hourSuf='am';}var minutes=date.getMinutes()>9?""+date.getMinutes():"0"+date.getMinutes();return"".concat(hour,":").concat(minutes," ").concat(hourSuf," on ").concat(m," ").concat(d).concat(suf,", ").concat(y);}var mathUtils={SECONDS_IN_AN_MINUTE:SECONDS_IN_AN_MINUTE,SECONDS_IN_AN_HOUR:SECONDS_IN_AN_HOUR,weightedRandom:weightedRandom,modVolume:modVolume,weightedAverage:weightedAverage,randomMinutesBetween:randomMinutesBetween,weightedRandomTowards:weightedRandomTowards,randomBellMod:randomBellMod,getRandomInt:getRandomInt,numberWithCommas:numberWithCommas,nearest100:nearest100,msSinceMidnight:msSinceMidnight,prettyDateTime:prettyDateTime};_exports.$mathUtils=mathUtils;var SECONDS_PER_TURN=SECONDS_IN_AN_HOUR*0.45;_exports.SECONDS_PER_TURN=SECONDS_PER_TURN;var MINUTES_PER_TURN=SECONDS_PER_TURN/60;_exports.MINUTES_PER_TURN=MINUTES_PER_TURN;var SECONDS_PER_PLAYER_TURN=1;_exports.SECONDS_PER_PLAYER_TURN=SECONDS_PER_PLAYER_TURN;var SECONDS_PER_ROUND=SECONDS_PER_TURN/30;_exports.SECONDS_PER_ROUND=SECONDS_PER_ROUND;var YARDS_PER_INCH=50;_exports.YARDS_PER_INCH=YARDS_PER_INCH;var MAX_STAT=100;_exports.MAX_STAT=MAX_STAT;var DEADLYNESS=1;_exports.DEADLYNESS=DEADLYNESS;var MAX_EQUIPMENT_WEIGHT=100;_exports.MAX_EQUIPMENT_WEIGHT=MAX_EQUIPMENT_WEIGHT;var YARDS_TO_FIGHT=100;_exports.YARDS_TO_FIGHT=YARDS_TO_FIGHT;function statModFor(stat){return weightedRandomTowards(20,80,stat,2)/100;}var game={SECONDS_PER_TURN:SECONDS_PER_TURN,MINUTES_PER_TURN:MINUTES_PER_TURN,SECONDS_PER_PLAYER_TURN:SECONDS_PER_PLAYER_TURN,SECONDS_PER_ROUND:SECONDS_PER_ROUND,YARDS_PER_INCH:YARDS_PER_INCH,MAX_STAT:MAX_STAT,DEADLYNESS:DEADLYNESS,MAX_EQUIPMENT_WEIGHT:MAX_EQUIPMENT_WEIGHT,YARDS_TO_FIGHT:YARDS_TO_FIGHT,statModFor:statModFor};_exports.$game=game;var FOOT_TROOP=0;_exports.FOOT_TROOP=FOOT_TROOP;var CAVALRY_TROOP=1;_exports.CAVALRY_TROOP=CAVALRY_TROOP;var ARTILLERY_TROOP=2;_exports.ARTILLERY_TROOP=ARTILLERY_TROOP;var MELEE_WEAPON='meleeWeapon';_exports.MELEE_WEAPON=MELEE_WEAPON;var RANGED_WEAPON='rangedWeapon';_exports.RANGED_WEAPON=RANGED_WEAPON;var units={FOOT_TROOP:FOOT_TROOP,CAVALRY_TROOP:CAVALRY_TROOP,ARTILLERY_TROOP:ARTILLERY_TROOP,MELEE_WEAPON:MELEE_WEAPON,RANGED_WEAPON:RANGED_WEAPON};_exports.$units=units;var NO_WEAPON='NO_WEAPON';_exports.NO_WEAPON=NO_WEAPON;var SWORD='SWORD';_exports.SWORD=SWORD;var SPEAR='SPEAR';_exports.SPEAR=SPEAR;var PIKE='PIKE';_exports.PIKE=PIKE;var LONGBOW='LONGBOW';_exports.LONGBOW=LONGBOW;var BAYONETE='BAYONETE';_exports.BAYONETE=BAYONETE;var BROWN_BESS_SMOOTH_BORE='BROWN_BESS_SMOOTH_BORE';_exports.BROWN_BESS_SMOOTH_BORE=BROWN_BESS_SMOOTH_BORE;var CONFEDERATE_SMOOTH_BORE='CONFEDERATE_SMOOTH_BORE';_exports.CONFEDERATE_SMOOTH_BORE=CONFEDERATE_SMOOTH_BORE;var SPRINGFIELD_RIFLED_MUSKET='SPRINGFIELD_RIFLED_MUSKET';_exports.SPRINGFIELD_RIFLED_MUSKET=SPRINGFIELD_RIFLED_MUSKET;var CANNON_6_POUNDER_CIVIL_WAR='CANNON_24_POUNDER_CIVIL_WAR';_exports.CANNON_6_POUNDER_CIVIL_WAR=CANNON_6_POUNDER_CIVIL_WAR;var CANNON_12_POUNDER_CIVIL_WAR='CANNON_24_POUNDER_CIVIL_WAR';_exports.CANNON_12_POUNDER_CIVIL_WAR=CANNON_12_POUNDER_CIVIL_WAR;var CANNON_24_POUNDER_CIVIL_WAR='CANNON_24_POUNDER_CIVIL_WAR';_exports.CANNON_24_POUNDER_CIVIL_WAR=CANNON_24_POUNDER_CIVIL_WAR;var LEE_ENFIELD_303='LEE_ENFIELD_303';_exports.LEE_ENFIELD_303=LEE_ENFIELD_303;var POWER_VS_FOOT='powerVsFoot';_exports.POWER_VS_FOOT=POWER_VS_FOOT;var POWER_VS_MOUNTED='powerVsMounted';_exports.POWER_VS_MOUNTED=POWER_VS_MOUNTED;var WEAPONS=(_WEAPONS={},babelHelpers.defineProperty(_WEAPONS,NO_WEAPON,(_NO_WEAPON={name:'None'},babelHelpers.defineProperty(_NO_WEAPON,POWER_VS_FOOT,10),babelHelpers.defineProperty(_NO_WEAPON,POWER_VS_MOUNTED,10),babelHelpers.defineProperty(_NO_WEAPON,"volume",1),babelHelpers.defineProperty(_NO_WEAPON,"weight",0),babelHelpers.defineProperty(_NO_WEAPON,"range",0),_NO_WEAPON)),babelHelpers.defineProperty(_WEAPONS,SWORD,(_SWORD={name:'Sword'},babelHelpers.defineProperty(_SWORD,POWER_VS_FOOT,50),babelHelpers.defineProperty(_SWORD,POWER_VS_MOUNTED,20),babelHelpers.defineProperty(_SWORD,"volume",2),babelHelpers.defineProperty(_SWORD,"weight",5),babelHelpers.defineProperty(_SWORD,"range",0),_SWORD)),babelHelpers.defineProperty(_WEAPONS,SPEAR,(_SPEAR={name:'Spear'},babelHelpers.defineProperty(_SPEAR,POWER_VS_FOOT,35),babelHelpers.defineProperty(_SPEAR,POWER_VS_MOUNTED,35),babelHelpers.defineProperty(_SPEAR,"volume",2),babelHelpers.defineProperty(_SPEAR,"weight",5),babelHelpers.defineProperty(_SPEAR,"range",0),_SPEAR)),babelHelpers.defineProperty(_WEAPONS,PIKE,(_PIKE={name:'Pike'},babelHelpers.defineProperty(_PIKE,POWER_VS_FOOT,40),babelHelpers.defineProperty(_PIKE,POWER_VS_MOUNTED,65),babelHelpers.defineProperty(_PIKE,"volume",2),babelHelpers.defineProperty(_PIKE,"weight",7),babelHelpers.defineProperty(_PIKE,"range",0),_PIKE)),babelHelpers.defineProperty(_WEAPONS,LONGBOW,(_LONGBOW={name:'Longbow'},babelHelpers.defineProperty(_LONGBOW,POWER_VS_FOOT,50),babelHelpers.defineProperty(_LONGBOW,POWER_VS_MOUNTED,50),babelHelpers.defineProperty(_LONGBOW,"volume",2),babelHelpers.defineProperty(_LONGBOW,"weight",3),babelHelpers.defineProperty(_LONGBOW,"range",200),_LONGBOW)),babelHelpers.defineProperty(_WEAPONS,BAYONETE,(_BAYONETE={name:'Bayonete'},babelHelpers.defineProperty(_BAYONETE,POWER_VS_FOOT,20),babelHelpers.defineProperty(_BAYONETE,POWER_VS_MOUNTED,20),babelHelpers.defineProperty(_BAYONETE,"volume",10),babelHelpers.defineProperty(_BAYONETE,"weight",1),babelHelpers.defineProperty(_BAYONETE,"range",0),_BAYONETE)),babelHelpers.defineProperty(_WEAPONS,BROWN_BESS_SMOOTH_BORE,(_BROWN_BESS_SMOOTH_BO={// Standard revolutionary war rifle
name:'Brown Bess Smooth Bore'},babelHelpers.defineProperty(_BROWN_BESS_SMOOTH_BO,POWER_VS_FOOT,120),babelHelpers.defineProperty(_BROWN_BESS_SMOOTH_BO,POWER_VS_MOUNTED,120),babelHelpers.defineProperty(_BROWN_BESS_SMOOTH_BO,"volume",5),babelHelpers.defineProperty(_BROWN_BESS_SMOOTH_BO,"weight",3),babelHelpers.defineProperty(_BROWN_BESS_SMOOTH_BO,"range",250),_BROWN_BESS_SMOOTH_BO)),babelHelpers.defineProperty(_WEAPONS,CONFEDERATE_SMOOTH_BORE,(_CONFEDERATE_SMOOTH_B={// Standard union civil war rifle
name:'Smoothbore Musket'},babelHelpers.defineProperty(_CONFEDERATE_SMOOTH_B,POWER_VS_FOOT,160),babelHelpers.defineProperty(_CONFEDERATE_SMOOTH_B,POWER_VS_MOUNTED,160),babelHelpers.defineProperty(_CONFEDERATE_SMOOTH_B,"volume",6),babelHelpers.defineProperty(_CONFEDERATE_SMOOTH_B,"weight",3),babelHelpers.defineProperty(_CONFEDERATE_SMOOTH_B,"range",500),_CONFEDERATE_SMOOTH_B)),babelHelpers.defineProperty(_WEAPONS,SPRINGFIELD_RIFLED_MUSKET,(_SPRINGFIELD_RIFLED_M={// Standard union civil war rifle
name:'Springfield Rifled Musket'},babelHelpers.defineProperty(_SPRINGFIELD_RIFLED_M,POWER_VS_FOOT,180),babelHelpers.defineProperty(_SPRINGFIELD_RIFLED_M,POWER_VS_MOUNTED,180),babelHelpers.defineProperty(_SPRINGFIELD_RIFLED_M,"volume",7),babelHelpers.defineProperty(_SPRINGFIELD_RIFLED_M,"weight",3),babelHelpers.defineProperty(_SPRINGFIELD_RIFLED_M,"range",600),_SPRINGFIELD_RIFLED_M)),babelHelpers.defineProperty(_WEAPONS,CANNON_6_POUNDER_CIVIL_WAR,(_CANNON_6_POUNDER_CIV={// Standard civil war cannon
name:'6 Pounder'},babelHelpers.defineProperty(_CANNON_6_POUNDER_CIV,POWER_VS_FOOT,400),babelHelpers.defineProperty(_CANNON_6_POUNDER_CIV,POWER_VS_MOUNTED,400),babelHelpers.defineProperty(_CANNON_6_POUNDER_CIV,"volume",40),babelHelpers.defineProperty(_CANNON_6_POUNDER_CIV,"weight",10),babelHelpers.defineProperty(_CANNON_6_POUNDER_CIV,"range",800),_CANNON_6_POUNDER_CIV)),babelHelpers.defineProperty(_WEAPONS,CANNON_12_POUNDER_CIVIL_WAR,(_CANNON_12_POUNDER_CI={// Standard civil war cannon
name:'12 Pounder'},babelHelpers.defineProperty(_CANNON_12_POUNDER_CI,POWER_VS_FOOT,600),babelHelpers.defineProperty(_CANNON_12_POUNDER_CI,POWER_VS_MOUNTED,600),babelHelpers.defineProperty(_CANNON_12_POUNDER_CI,"volume",60),babelHelpers.defineProperty(_CANNON_12_POUNDER_CI,"weight",15),babelHelpers.defineProperty(_CANNON_12_POUNDER_CI,"range",1000),_CANNON_12_POUNDER_CI)),babelHelpers.defineProperty(_WEAPONS,CANNON_24_POUNDER_CIVIL_WAR,(_CANNON_24_POUNDER_CI={// Standard civil war cannon
name:'24 Pounder'},babelHelpers.defineProperty(_CANNON_24_POUNDER_CI,POWER_VS_FOOT,800),babelHelpers.defineProperty(_CANNON_24_POUNDER_CI,POWER_VS_MOUNTED,800),babelHelpers.defineProperty(_CANNON_24_POUNDER_CI,"volume",85),babelHelpers.defineProperty(_CANNON_24_POUNDER_CI,"weight",20),babelHelpers.defineProperty(_CANNON_24_POUNDER_CI,"range",1200),_CANNON_24_POUNDER_CI)),babelHelpers.defineProperty(_WEAPONS,LEE_ENFIELD_303,(_LEE_ENFIELD_={// Standard ww1 rifle
name:'Lee Enfield 303'},babelHelpers.defineProperty(_LEE_ENFIELD_,POWER_VS_FOOT,200),babelHelpers.defineProperty(_LEE_ENFIELD_,POWER_VS_MOUNTED,200),babelHelpers.defineProperty(_LEE_ENFIELD_,"volume",12),babelHelpers.defineProperty(_LEE_ENFIELD_,"weight",3),babelHelpers.defineProperty(_LEE_ENFIELD_,"range",900),_LEE_ENFIELD_)),_WEAPONS);_exports.WEAPONS=WEAPONS;var weapons={NO_WEAPON:NO_WEAPON,SWORD:SWORD,SPEAR:SPEAR,PIKE:PIKE,LONGBOW:LONGBOW,BAYONETE:BAYONETE,BROWN_BESS_SMOOTH_BORE:BROWN_BESS_SMOOTH_BORE,CONFEDERATE_SMOOTH_BORE:CONFEDERATE_SMOOTH_BORE,SPRINGFIELD_RIFLED_MUSKET:SPRINGFIELD_RIFLED_MUSKET,CANNON_6_POUNDER_CIVIL_WAR:CANNON_6_POUNDER_CIVIL_WAR,CANNON_12_POUNDER_CIVIL_WAR:CANNON_12_POUNDER_CIVIL_WAR,CANNON_24_POUNDER_CIVIL_WAR:CANNON_24_POUNDER_CIVIL_WAR,LEE_ENFIELD_303:LEE_ENFIELD_303,POWER_VS_FOOT:POWER_VS_FOOT,POWER_VS_MOUNTED:POWER_VS_MOUNTED,WEAPONS:WEAPONS};_exports.$weapons=weapons;var Combatant=/*#__PURE__*/function(_ActingUnit){babelHelpers.inherits(Combatant,_ActingUnit);function Combatant(_ref4){var _this47;var unit=_ref4.unit,encounter=_ref4.encounter,target=_ref4.target,_ref4$armyLeadership=_ref4.armyLeadership,armyLeadership=_ref4$armyLeadership===void 0?0:_ref4$armyLeadership,_ref4$movementTerrain=_ref4.movementTerrain,movementTerrain=_ref4$movementTerrain===void 0?[]:_ref4$movementTerrain,_ref4$protectingTerra=_ref4.protectingTerrain,protectingTerrain=_ref4$protectingTerra===void 0?[]:_ref4$protectingTerra,_ref4$areaTerrain=_ref4.areaTerrain,areaTerrain=_ref4$areaTerrain===void 0?[]:_ref4$areaTerrain,_ref4$engagedStands=_ref4.engagedStands,engagedStands=_ref4$engagedStands===void 0?-1:_ref4$engagedStands,_ref4$slope=_ref4.slope,slope=_ref4$slope===void 0?SLOPE_NONE:_ref4$slope;babelHelpers.classCallCheck(this,Combatant);_this47=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Combatant).call(this,{unit:unit,environment:encounter,armyLeadership:armyLeadership}));_this47.unit=unit;_this47.encounter=encounter;_this47.target=target;_this47.armyLeadership=armyLeadership;_this47.movementTerrain=movementTerrain;_this47.protectingTerrain=protectingTerrain;_this47.areaTerrain=areaTerrain;_this47.engagedStands=engagedStands<=-1||engagedStands>unit.stands?unit.stands:engagedStands;_this47.slope=slope;_this47.casualties=0;_this47.ammunitionUsed=0;_this47.yardsFallenback=0;_this47.yardsPersued=0;_this47.leaderSurviveRoll=Math.random();_this47.energyModRoll=randomBellMod();_this47.moraleModRoll=randomBellMod();return _this47;}babelHelpers.createClass(Combatant,[{key:"skillRoll",value:function skillRoll(){return Math.random()*this.skill*statModFor(this.unit.energy);}},{key:"armorRoll",value:function armorRoll(){return Math.random()*this.armor;}},{key:"powerRoll",value:function powerRoll(){return Math.random()*this.modifiedPower;}},{key:"attacksForTime",value:function attacksForTime(duration){return this.unit.strength*this.engagedMod*this.modifiedVolume*(duration/SECONDS_IN_AN_HOUR);}},{key:"battleReport",value:function battleReport(){if(this.unit.strength-this.casualties<=0){return"".concat(this.unit.name," was destroyed.");}else if(this.unit.morale-this.moraleLoss<=0){return"".concat(this.unit.name," fled the battlefield.");}else{return"".concat(this.casualtyMessage," ").concat(this.leadershipMessage);}}},{key:"exactBattleReport",value:function exactBattleReport(){return"".concat(this.unit.name," -- ").concat(this.status," -- Casualties: ").concat(this.casualties," -- Energy Loss: ").concat(this.energyLoss," -- Morale Loss: ").concat(this.moraleLoss," -- Leadership Loss: ").concat(this.leadershipLoss);}},{key:"updates",value:function updates(delay){return{id:this.unit.id,changes:this.changes(delay)};}},{key:"changes",value:function changes(delay){return[{prop:"strength",value:this.unit.strength-this.casualties},{prop:"energy",value:this.unit.energy-this.energyLoss},{prop:"morale",value:this.unit.morale-this.moraleLoss},{prop:"leadership",value:this.unit.leadership-this.leadershipLoss},{prop:'nextAction',value:this.unit.nextAction+delay}];}},{key:"energyLoss",get:function get(){return weightedAverage({value:this.encounter.melee?0.2:0.1,weight:2},this.encounter.secondsSpentFighting/SECONDS_PER_TURN,this.energyModRoll,this.unit.carriedWeight/MAX_EQUIPMENT_WEIGHT)*50;}},{key:"moraleLoss",get:function get(){return weightedAverage(this.moraleModRoll,this.hardinessMod,this.casualties/this.unit.strength,this.unit.strength/this.unit.fullStrength)*50;}},{key:"attacksRequireAmmunition",get:function get(){return!this.encounter.melee;}},{key:"fallingback",get:function get(){return this.casualties>this.fallbackCasualtyCount;}},{key:"persueing",get:function get(){return!this.fallingback&&this.yardsPersued>0;}},{key:"fallbackCasualtyCount",get:function get(){return this.unit.strength*(this.unit.fallback/100);}},{key:"leadershipLoss",get:function get(){return this.casualties/this.unit.strength>this.leaderSurviveRoll?Math.min(30,this.unit.leadership):0;}},{key:"hardinessMod",get:function get(){return(MAX_STAT-this.unit.experience)/MAX_STAT;}},{key:"inchesPersued",get:function get(){return Math.ceil(this.yardsPersued/YARDS_PER_INCH);}},{key:"inchesFallenback",get:function get(){return Math.ceil(this.yardsFallenback/YARDS_PER_INCH);}},{key:"modifiedMeleeVolume",get:function get(){return this.unit.meleeWeapon.volume;}},{key:"modifiedRangedVolume",get:function get(){return modVolume(this.unit.rangedWeapon.volume,this.unit.rangedWeapon.range,this.encounter.yardsOfSeparation);}},{key:"volume",get:function get(){return this.encounter.melee?this.modifiedMeleeVolume:this.modifiedRangedVolume;}},{key:"modifiedVolume",get:function get(){return this.volume*this.volumeModifier;}},{key:"volumeModifier",get:function get(){return statModFor(this.unit.energy)*this.engagedMod*this.terrainMod;}},{key:"terrainMod",get:function get(){var _this48=this;return 1-Math.min(this.areaTerrain.reduce(function(sum,next){return sum+next[_this48.encounterType].volumeMod;},0),1);}},{key:"targetTroopType",get:function get(){return this.target.unitType===FOOT_TROOP?POWER_VS_FOOT:POWER_VS_MOUNTED;}},{key:"encounterType",get:function get(){return this.encounter.melee?MELEE:RANGED;}},{key:"weaponTypeForEncounter",get:function get(){return this.encounter.melee?MELEE_WEAPON:RANGED_WEAPON;}},{key:"power",get:function get(){return this.unit[this.weaponTypeForEncounter][this.targetTroopType];}},{key:"modifiedPower",get:function get(){return this.power*this.powerModifier;}},{key:"skill",get:function get(){return this.encounter.melee?this.unit.meleeSkill:this.unit.rangedSkill;}},{key:"engagedMod",get:function get(){return Math.min(this.engagedStands,this.unit.stands)/this.unit.stands;}},{key:"powerModifier",get:function get(){return this.slopeMod;}},{key:"secondsPerAttack",get:function get(){return this.unit.strength*this.modifiedVolume/SECONDS_IN_AN_HOUR;}},{key:"casualtyMessage",get:function get(){if(this.casualties>this.unit.strength){return"".concat(this.unit.name," was totally destroyed.");}else if(this.casualties>this.unit.strength*0.75){return"".concat(this.unit.name," sustained terrible casualties. Almost the whole unit was destroyed.");}else if(this.casualties>this.unit.strength*0.50){return"".concat(this.unit.name," sustained terrible casualties. Over half the unit is destroyed.");}else if(this.casualties>this.unit.strength*0.30){return"".concat(this.unit.name," sustained terrible casualties.");}else if(this.casualties>this.unit.strength*0.20){return"".concat(this.unit.name," sustained grave casualties.");}else if(this.casualties>this.unit.strength*0.15){return"".concat(this.unit.name," sustained massive casualties.");}else if(this.casualties>this.unit.strength*0.10){return"".concat(this.unit.name," sustained major casualties.");}else if(this.casualties>this.unit.strength*0.5){return"".concat(this.unit.name," sustained significant casualties.");}else if(this.casualties>this.unit.strength*0.03){return"".concat(this.unit.name," sustained noticable casualties.");}else if(this.casualties>this.unit.strength*0.02){return"".concat(this.unit.name," sustained minor casualties.");}else if(this.casualties>0){return"".concat(this.unit.name," sustained almost no casualties.");}else{return"".concat(this.unit.name," sustained no casualties.");}}},{key:"leadershipMessage",get:function get(){if(this.leadershipLoss>this.unit.leadership){return"".concat(this.unit.name," lost all of their leaders during the fight. They have no one to command them.");}else if(this.leadershipLoss>this.unit.leadership*0.5){return"".concat(this.unit.name," lost their captain during the fight.");}else if(this.leadershipLoss>this.unit.leadership*0.25){return"".concat(this.unit.name," lost a lieutenant during the fight.");}else if(this.leadershipLoss>0){return"".concat(this.unit.name," lost some of their sergeant's during the fight.");}else{return"";}}}]);return Combatant;}(ActingUnit);_exports.$combatantDefault=Combatant;var combatant={default:Combatant};_exports.$combatant=combatant;var NO_ARMOR='NO_ARMOR';_exports.NO_ARMOR=NO_ARMOR;var THIN_GAMBESON='THIN_GAMBESON';_exports.THIN_GAMBESON=THIN_GAMBESON;var STANDARD_GAMBESON='STANDARD_GAMBESON';_exports.STANDARD_GAMBESON=STANDARD_GAMBESON;var THICK_GAMBESON='THICK_GAMBESON';_exports.THICK_GAMBESON=THICK_GAMBESON;var BRONZE_PARTIAL_SCALEMAIL='BRONZE_PARTIAL_SCALEMAIL';_exports.BRONZE_PARTIAL_SCALEMAIL=BRONZE_PARTIAL_SCALEMAIL;var BRONZE_COMPLETE_SCALEMAIL='BRONZE_COMPLETE_SCALEMAIL';_exports.BRONZE_COMPLETE_SCALEMAIL=BRONZE_COMPLETE_SCALEMAIL;var BRONZE_PARTIAL_CHAINMAIL='BRONZE_PARTIAL_CHAINMAIL';_exports.BRONZE_PARTIAL_CHAINMAIL=BRONZE_PARTIAL_CHAINMAIL;var BRONZE_COMPLETE_CHAINMAIL='BRONZE_COMPLETE_CHAINMAIL';_exports.BRONZE_COMPLETE_CHAINMAIL=BRONZE_COMPLETE_CHAINMAIL;var BRONZE_PARTIAL_PLATEMAIL='BRONZE_COMPLETE_PLATEMAIL';_exports.BRONZE_PARTIAL_PLATEMAIL=BRONZE_PARTIAL_PLATEMAIL;var BRONZE_COMPLETE_PLATEMAIL='BRONZE_COMPLETE_PLATEMAIL';_exports.BRONZE_COMPLETE_PLATEMAIL=BRONZE_COMPLETE_PLATEMAIL;var IRON_PARTIAL_SCALEMAIL='IRON_PARTIAL_SCALEMAIL';_exports.IRON_PARTIAL_SCALEMAIL=IRON_PARTIAL_SCALEMAIL;var IRON_COMPLETE_SCALEMAIL='IRON_COMPLETE_SCALEMAIL';_exports.IRON_COMPLETE_SCALEMAIL=IRON_COMPLETE_SCALEMAIL;var IRON_PARTIAL_CHAINMAIL='IRON_PARTIAL_CHAINMAIL';_exports.IRON_PARTIAL_CHAINMAIL=IRON_PARTIAL_CHAINMAIL;var IRON_COMPLETE_CHAINMAIL='IRON_COMPLETE_CHAINMAIL';_exports.IRON_COMPLETE_CHAINMAIL=IRON_COMPLETE_CHAINMAIL;var IRON_PARTIAL_PLATEMAIL='IRON_COMPLETE_PLATEMAIL';_exports.IRON_PARTIAL_PLATEMAIL=IRON_PARTIAL_PLATEMAIL;var IRON_COMPLETE_PLATEMAIL='IRON_COMPLETE_PLATEMAIL';_exports.IRON_COMPLETE_PLATEMAIL=IRON_COMPLETE_PLATEMAIL;var STEEL_PARTIAL_SCALEMAIL='STEEL_PARTIAL_SCALEMAIL';_exports.STEEL_PARTIAL_SCALEMAIL=STEEL_PARTIAL_SCALEMAIL;var STEEL_COMPLETE_SCALEMAIL='STEEL_COMPLETE_SCALEMAIL';_exports.STEEL_COMPLETE_SCALEMAIL=STEEL_COMPLETE_SCALEMAIL;var STEEL_PARTIAL_CHAINMAIL='STEEL_PARTIAL_CHAINMAIL';_exports.STEEL_PARTIAL_CHAINMAIL=STEEL_PARTIAL_CHAINMAIL;var STEEL_COMPLETE_CHAINMAIL='STEEL_COMPLETE_CHAINMAIL';_exports.STEEL_COMPLETE_CHAINMAIL=STEEL_COMPLETE_CHAINMAIL;var STEEL_PARTIAL_PLATEMAIL='STEEL_COMPLETE_PLATEMAIL';_exports.STEEL_PARTIAL_PLATEMAIL=STEEL_PARTIAL_PLATEMAIL;var STEEL_COMPLETE_PLATEMAIL='STEEL_COMPLETE_PLATEMAIL';_exports.STEEL_COMPLETE_PLATEMAIL=STEEL_COMPLETE_PLATEMAIL;var ARMOR=(_ARMOR={},babelHelpers.defineProperty(_ARMOR,NO_ARMOR,{defense:0,weight:0}),babelHelpers.defineProperty(_ARMOR,THIN_GAMBESON,{defense:8,weight:5}),babelHelpers.defineProperty(_ARMOR,STANDARD_GAMBESON,{defense:13,weight:8}),babelHelpers.defineProperty(_ARMOR,THICK_GAMBESON,{defense:18,weight:11}),babelHelpers.defineProperty(_ARMOR,BRONZE_PARTIAL_SCALEMAIL,{defense:15,weight:28}),babelHelpers.defineProperty(_ARMOR,BRONZE_COMPLETE_SCALEMAIL,{defense:20,weight:50}),babelHelpers.defineProperty(_ARMOR,BRONZE_PARTIAL_CHAINMAIL,{defense:20,weight:25}),babelHelpers.defineProperty(_ARMOR,BRONZE_COMPLETE_CHAINMAIL,{defense:35,weight:30}),babelHelpers.defineProperty(_ARMOR,BRONZE_PARTIAL_PLATEMAIL,{defense:20,weight:25}),babelHelpers.defineProperty(_ARMOR,BRONZE_COMPLETE_PLATEMAIL,{defense:55,weight:50}),babelHelpers.defineProperty(_ARMOR,IRON_PARTIAL_SCALEMAIL,{defense:25,weight:28}),babelHelpers.defineProperty(_ARMOR,IRON_COMPLETE_SCALEMAIL,{defense:30,weight:50}),babelHelpers.defineProperty(_ARMOR,IRON_PARTIAL_CHAINMAIL,{defense:30,weight:25}),babelHelpers.defineProperty(_ARMOR,IRON_COMPLETE_CHAINMAIL,{defense:45,weight:30}),babelHelpers.defineProperty(_ARMOR,IRON_PARTIAL_PLATEMAIL,{defense:35,weight:40}),babelHelpers.defineProperty(_ARMOR,IRON_COMPLETE_PLATEMAIL,{defense:70,weight:50}),babelHelpers.defineProperty(_ARMOR,STEEL_PARTIAL_SCALEMAIL,{defense:30,weight:28}),babelHelpers.defineProperty(_ARMOR,STEEL_COMPLETE_SCALEMAIL,{defense:35,weight:50}),babelHelpers.defineProperty(_ARMOR,STEEL_PARTIAL_CHAINMAIL,{defense:35,weight:25}),babelHelpers.defineProperty(_ARMOR,STEEL_COMPLETE_CHAINMAIL,{defense:50,weight:30}),babelHelpers.defineProperty(_ARMOR,STEEL_PARTIAL_PLATEMAIL,{defense:40,weight:40}),babelHelpers.defineProperty(_ARMOR,STEEL_COMPLETE_PLATEMAIL,{defense:80,weight:50}),_ARMOR);_exports.ARMOR=ARMOR;var armor={NO_ARMOR:NO_ARMOR,THIN_GAMBESON:THIN_GAMBESON,STANDARD_GAMBESON:STANDARD_GAMBESON,THICK_GAMBESON:THICK_GAMBESON,BRONZE_PARTIAL_SCALEMAIL:BRONZE_PARTIAL_SCALEMAIL,BRONZE_COMPLETE_SCALEMAIL:BRONZE_COMPLETE_SCALEMAIL,BRONZE_PARTIAL_CHAINMAIL:BRONZE_PARTIAL_CHAINMAIL,BRONZE_COMPLETE_CHAINMAIL:BRONZE_COMPLETE_CHAINMAIL,BRONZE_PARTIAL_PLATEMAIL:BRONZE_PARTIAL_PLATEMAIL,BRONZE_COMPLETE_PLATEMAIL:BRONZE_COMPLETE_PLATEMAIL,IRON_PARTIAL_SCALEMAIL:IRON_PARTIAL_SCALEMAIL,IRON_COMPLETE_SCALEMAIL:IRON_COMPLETE_SCALEMAIL,IRON_PARTIAL_CHAINMAIL:IRON_PARTIAL_CHAINMAIL,IRON_COMPLETE_CHAINMAIL:IRON_COMPLETE_CHAINMAIL,IRON_PARTIAL_PLATEMAIL:IRON_PARTIAL_PLATEMAIL,IRON_COMPLETE_PLATEMAIL:IRON_COMPLETE_PLATEMAIL,STEEL_PARTIAL_SCALEMAIL:STEEL_PARTIAL_SCALEMAIL,STEEL_COMPLETE_SCALEMAIL:STEEL_COMPLETE_SCALEMAIL,STEEL_PARTIAL_CHAINMAIL:STEEL_PARTIAL_CHAINMAIL,STEEL_COMPLETE_CHAINMAIL:STEEL_COMPLETE_CHAINMAIL,STEEL_PARTIAL_PLATEMAIL:STEEL_PARTIAL_PLATEMAIL,STEEL_COMPLETE_PLATEMAIL:STEEL_COMPLETE_PLATEMAIL,ARMOR:ARMOR};_exports.$armor=armor;var UPDATE_PAGE='UPDATE_PAGE';_exports.UPDATE_PAGE=UPDATE_PAGE;var UPDATE_OFFLINE='UPDATE_OFFLINE';_exports.UPDATE_OFFLINE=UPDATE_OFFLINE;var UPDATE_DRAWER_STATE='UPDATE_DRAWER_STATE';_exports.UPDATE_DRAWER_STATE=UPDATE_DRAWER_STATE;var OPEN_SNACKBAR='OPEN_SNACKBAR';_exports.OPEN_SNACKBAR=OPEN_SNACKBAR;var CLOSE_SNACKBAR='CLOSE_SNACKBAR';_exports.CLOSE_SNACKBAR=CLOSE_SNACKBAR;var navigate=function navigate(path){return function(dispatch){var page=path==='/'?'war':path.slice(1);// Any other info you might want to extract from the path (like page type),
// you can do here
dispatch(loadPage(page));// Close the drawer - in case the *path* change came from a link in the drawer.
dispatch(updateDrawerState(false));};};_exports.navigate=navigate;var loadPage=function loadPage(page){return function(dispatch){switch(page){case'battle':new Promise(function(res,rej){return _require.default(['./battle-view.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$battleView||{};});break;case'fight':new Promise(function(res,rej){return _require.default(['./fight-view.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$fightView||{};});break;case'rules':new Promise(function(res,rej){return _require.default(['./rules-view.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$rulesView||{};});break;case'war':new Promise(function(res,rej){return _require.default(['./war-view.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$warView||{};});break;case'test':new Promise(function(res,rej){return _require.default(['./test-view.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$testView||{};});break;default:page='view-404';new Promise(function(res,rej){return _require.default(['./view-404.js'],res,rej);}).then(function(bundle){return bundle&&bundle.$view$404||{};});}dispatch(updatePage(page));};};var updatePage=function updatePage(page){return{type:UPDATE_PAGE,page:page};};var snackbarTimer;var showSnackbar=function showSnackbar(){return function(dispatch){dispatch({type:OPEN_SNACKBAR});window.clearTimeout(snackbarTimer);snackbarTimer=window.setTimeout(function(){return dispatch({type:CLOSE_SNACKBAR});},3000);};};_exports.showSnackbar=showSnackbar;var updateOffline=function updateOffline(offline){return function(dispatch,getState){// Show the snackbar only if offline status changes.
if(offline!==getState().app.offline){dispatch(showSnackbar());}dispatch({type:UPDATE_OFFLINE,offline:offline});};};_exports.updateOffline=updateOffline;var updateDrawerState=function updateDrawerState(opened){return{type:UPDATE_DRAWER_STATE,opened:opened};};_exports.updateDrawerState=updateDrawerState;var app={UPDATE_PAGE:UPDATE_PAGE,UPDATE_OFFLINE:UPDATE_OFFLINE,UPDATE_DRAWER_STATE:UPDATE_DRAWER_STATE,OPEN_SNACKBAR:OPEN_SNACKBAR,CLOSE_SNACKBAR:CLOSE_SNACKBAR,navigate:navigate,showSnackbar:showSnackbar,updateOffline:updateOffline,updateDrawerState:updateDrawerState};_exports.$app=app;var INITIAL_STATE={page:'',offline:false,drawerOpened:false,snackbarOpened:false};var app$1=function app$1(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:INITIAL_STATE;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case UPDATE_PAGE:return babelHelpers.objectSpread({},state,{page:action.page});case UPDATE_OFFLINE:return babelHelpers.objectSpread({},state,{offline:action.offline});case UPDATE_DRAWER_STATE:return babelHelpers.objectSpread({},state,{drawerOpened:action.opened});case OPEN_SNACKBAR:return babelHelpers.objectSpread({},state,{snackbarOpened:true});case CLOSE_SNACKBAR:return babelHelpers.objectSpread({},state,{snackbarOpened:false});default:return state;}};_exports.$appDefault=app$1;var app$2={default:app$1};_exports.$app$1=app$2;var UNION=0;var CONFEDERATE=1;var UNION_BRIGADE_SIZE=3000;var UNION_CAVALRY_REGIMENT_SIZE=1000;var CONFEDERATE_BRIGADE_SIZE=3000;var CONFEDERATE_CAVALRY_REGIMENT_SIZE=1000;var FRESH_UNION_BRIGADE=(_FRESH_UNION_BRIGADE={army:UNION,name:'Fresh Union Brigade',strength:UNION_BRIGADE_SIZE,morale:100,energy:100,stands:8,openness:20,minFallback:10,maxFallback:20,ammunition:UNION_BRIGADE_SIZE*20,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,MELEE_WEAPON,BAYONETE),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,RANGED_WEAPON,SPRINGFIELD_RIFLED_MUSKET),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"meleeSkill",40),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"rangedSkill",50),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"experience",50),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"leadership",50),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"troopType",FOOT_TROOP),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"fullStrength",UNION_BRIGADE_SIZE),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"baseSpeed",0.5),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"baseBackwardsSpeed",0.25),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"chargeSpeed",0.7),babelHelpers.defineProperty(_FRESH_UNION_BRIGADE,"maneuverTime",110),_FRESH_UNION_BRIGADE);_exports.FRESH_UNION_BRIGADE=FRESH_UNION_BRIGADE;var FRESH_UNION_CAVALRY_REGIMENT=(_FRESH_UNION_CAVALRY_={army:UNION,name:'Fresh Union Cavalry Regiment',strength:UNION_CAVALRY_REGIMENT_SIZE,morale:100,energy:100,stands:6,openness:20,minFallback:10,maxFallback:20,ammunition:UNION_CAVALRY_REGIMENT_SIZE*20,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,MELEE_WEAPON,BAYONETE),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,RANGED_WEAPON,SPRINGFIELD_RIFLED_MUSKET),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"meleeSkill",60),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"rangedSkill",50),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"experience",60),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"leadership",60),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"troopType",CAVALRY_TROOP),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"fullStrength",UNION_CAVALRY_REGIMENT_SIZE),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"isMounted",true),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"isCurrentlyMounted",true),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"canUnmount",true),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"mountedSpeed",{baseSpeed:1,baseBackwardsSpeed:0.5,chargeSpeed:1}),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"unmountedSpeed",{baseSpeed:0.5,chargeSpeed:0.7,backwardsSpeed:0.25}),babelHelpers.defineProperty(_FRESH_UNION_CAVALRY_,"maneuverTime",90),_FRESH_UNION_CAVALRY_);_exports.FRESH_UNION_CAVALRY_REGIMENT=FRESH_UNION_CAVALRY_REGIMENT;var FRESH_UNION_ARTILLERY=(_FRESH_UNION_ARTILLER={army:UNION,name:'Fresh Union Artillery (50 Cannons)',strength:50,morale:100,energy:100,stands:2,openness:0,minFallback:10,maxFallback:20,ammunition:50*100,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,MELEE_WEAPON,NO_WEAPON),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,RANGED_WEAPON,CANNON_24_POUNDER_CIVIL_WAR),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"meleeSkill",30),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"rangedSkill",60),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"experience",50),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"leadership",50),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"troopType",ARTILLERY_TROOP),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"fullStrength",50),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"baseSpeed",0.3),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"baseBackwardsSpeed",0.1),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"chargeSpeed",0.1),babelHelpers.defineProperty(_FRESH_UNION_ARTILLER,"maneuverTime",220),_FRESH_UNION_ARTILLER);_exports.FRESH_UNION_ARTILLERY=FRESH_UNION_ARTILLERY;var FRESH_CONFEDERATE_BRIGADE=(_FRESH_CONFEDERATE_BR={army:CONFEDERATE,name:'Fresh Confederate Brigade',strength:CONFEDERATE_BRIGADE_SIZE,morale:100,energy:100,stands:8,openness:20,minFallback:10,maxFallback:20,ammunition:CONFEDERATE_BRIGADE_SIZE*20,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,MELEE_WEAPON,BAYONETE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,RANGED_WEAPON,CONFEDERATE_SMOOTH_BORE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"meleeSkill",50),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"rangedSkill",50),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"experience",75),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"leadership",70),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"troopType",FOOT_TROOP),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"fullStrength",CONFEDERATE_BRIGADE_SIZE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"baseSpeed",0.5),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"baseBackwardsSpeed",0.25),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"chargeSpeed",0.7),babelHelpers.defineProperty(_FRESH_CONFEDERATE_BR,"maneuverTime",80),_FRESH_CONFEDERATE_BR);_exports.FRESH_CONFEDERATE_BRIGADE=FRESH_CONFEDERATE_BRIGADE;var FRESH_CONFEDERATE_CAVALRY_REGIMENT=(_FRESH_CONFEDERATE_CA={army:CONFEDERATE,name:'Fresh Confederate Cavalry Regiment',strength:CONFEDERATE_CAVALRY_REGIMENT_SIZE,morale:100,energy:100,stands:6,openness:20,minFallback:10,maxFallback:20,ammunition:CONFEDERATE_CAVALRY_REGIMENT_SIZE*20,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,MELEE_WEAPON,BAYONETE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,RANGED_WEAPON,CONFEDERATE_SMOOTH_BORE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"meleeSkill",60),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"rangedSkill",50),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"experience",80),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"leadership",75),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"troopType",CAVALRY_TROOP),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"fullStrength",CONFEDERATE_CAVALRY_REGIMENT_SIZE),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"isMounted",true),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"isCurrentlyMounted",true),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"canUnmount",true),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"mountedSpeed",{baseSpeed:1,baseBackwardsSpeed:0.5,chargeSpeed:1}),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"unmountedSpeed",{baseSpeed:0.5,chargeSpeed:0.7,backwardsSpeed:0.25}),babelHelpers.defineProperty(_FRESH_CONFEDERATE_CA,"maneuverTime",70),_FRESH_CONFEDERATE_CA);_exports.FRESH_CONFEDERATE_CAVALRY_REGIMENT=FRESH_CONFEDERATE_CAVALRY_REGIMENT;var FRESH_CONFEDERATE_ARTILLERY=(_FRESH_CONFEDERATE_AR={army:CONFEDERATE,name:'Fresh Confederate Artillery (50 Cannons)',strength:50,morale:100,energy:100,stands:2,openness:0,minFallback:10,maxFallback:20,ammunition:50*100,armor:NO_ARMOR},babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,MELEE_WEAPON,NO_WEAPON),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,RANGED_WEAPON,CANNON_24_POUNDER_CIVIL_WAR),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"meleeSkill",30),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"rangedSkill",55),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"experience",70),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"leadership",60),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"troopType",ARTILLERY_TROOP),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"fullStrength",50),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"baseSpeed",0.3),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"baseBackwardsSpeed",0.1),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"chargeSpeed",0.1),babelHelpers.defineProperty(_FRESH_CONFEDERATE_AR,"maneuverTime",200),_FRESH_CONFEDERATE_AR);_exports.FRESH_CONFEDERATE_ARTILLERY=FRESH_CONFEDERATE_ARTILLERY;var CIVIL_WAR_UNITS=[FRESH_UNION_BRIGADE,babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:'Tired Union Brigade',energy:50}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:'Battered Union Brigade',strength:UNION_BRIGADE_SIZE*0.7,energy:80}),FRESH_CONFEDERATE_BRIGADE,babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:'Tired Confederate Brigade',energy:50}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:'Battered Confederate Brigade',strength:CONFEDERATE_BRIGADE_SIZE*0.7,energy:80})];_exports.CIVIL_WAR_UNITS=CIVIL_WAR_UNITS;var civilWarUnits={FRESH_UNION_BRIGADE:FRESH_UNION_BRIGADE,FRESH_UNION_CAVALRY_REGIMENT:FRESH_UNION_CAVALRY_REGIMENT,FRESH_UNION_ARTILLERY:FRESH_UNION_ARTILLERY,FRESH_CONFEDERATE_BRIGADE:FRESH_CONFEDERATE_BRIGADE,FRESH_CONFEDERATE_CAVALRY_REGIMENT:FRESH_CONFEDERATE_CAVALRY_REGIMENT,FRESH_CONFEDERATE_ARTILLERY:FRESH_CONFEDERATE_ARTILLERY,CIVIL_WAR_UNITS:CIVIL_WAR_UNITS};_exports.$civilWarUnits=civilWarUnits;var BATTLE_TEMPLATES=[{name:"Bull Run",ruleset:0,second:0,startTime:Date.parse('11 May 1862 11:30:00 EST'),events:[// TODO Implement the events feature.
{time:msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),title:'Sun Set',descripton:'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',provideArmyOverview:true,proceedClock:10000// TODO this needs to be the seconds between sunset and sunrise.
}],terrain:[].concat(CIVIL_WAR_TERRAIN),deadliness:1,// TODO Use this in combat calculations.
turnDuration:SECONDS_IN_AN_HOUR,// TODO use this value here throughout instead of the constant.
roundStrength:100,// TODO Use this and round the number of reported strength based on this number
roundCasualties:10,// TODO Use this and round the number of reported casualties based on this number
activeArmy:0,activeUnit:0,turnStarted:0,armies:[{name:"Union",armyActionTitle:"Union Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[]},{name:"Confederate",armyActionTitle:"Confederate Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[]}],units:[babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 1st Brigade",strength:2563,fullStrength:2600,stands:8,experience:68,leadership:37,energy:84,morale:99}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 2nd Brigade",strength:3103,fullStrength:3103,stands:8,experience:34,leadership:68,energy:86,morale:85}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 3rd Brigade",strength:2891,fullStrength:3000,stands:8,experience:51,leadership:52,energy:86,morale:90}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Hunter's Brigade",strength:2364,fullStrength:2500,stands:6,experience:20,leadership:43,energy:80,morale:80}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Blenker's Skirmisher's",strength:1134,fullStrength:1200,stands:6,experience:66,leadership:53,energy:90,morale:98,rangedSkill:20,meleeSkill:20,openness:80}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Franklin's Brigade",strength:2203,fullStrength:2500,stands:6,experience:65,leadership:92,energy:85,morale:91}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Cadwalader's Brigade",strength:3003,fullStrength:3003,stands:8,experience:42,leadership:73,energy:90,morale:91}),babelHelpers.objectSpread({},FRESH_UNION_CAVALRY_REGIMENT,{name:"Porter's Cavalry",strength:256,fullStrength:300,stands:4,experience:75,leadership:62,energy:87,morale:85}),babelHelpers.objectSpread({},FRESH_UNION_ARTILLERY,{name:"Howard's Battery",strength:48,fullStrength:48,rangedWeapon:CANNON_12_POUNDER_CIVIL_WAR,stands:3,experience:61,leadership:52,energy:95,morale:95}),babelHelpers.objectSpread({},FRESH_UNION_ARTILLERY,{name:"Blenker's Battery",strength:63,fullStrength:63,rangedWeapon:CANNON_6_POUNDER_CIVIL_WAR,stands:4,experience:47,leadership:61,energy:87,morale:90}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"1st Potomac Brigade",strength:4070,fullStrength:4070,stands:8,experience:65,leadership:62,energy:97,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"2nd Potomac Brigade",strength:2307,fullStrength:2500,stands:6,experience:52,leadership:42,energy:97,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"3rd Potomac Brigade",strength:1989,fullStrength:2000,stands:6,experience:48,leadership:52,energy:73,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"4th Potomac Brigade",strength:2364,fullStrength:2500,stands:6,experience:63,leadership:62,energy:79,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"1st Shenandoah Brigade",strength:2043,fullStrength:2100,stands:6,experience:55,leadership:66,energy:91,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"2nd Shenandoah Brigade",strength:2391,fullStrength:2500,stands:6,experience:83,leadership:74,energy:89,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"3rd Shenandoah Brigade",strength:2629,fullStrength:2700,stands:6,experience:51,leadership:82,energy:87,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_CAVALRY_REGIMENT,{name:"Thirteenth Virginia (Cavalry)",strength:642,fullStrength:700,stands:4,experience:85,leadership:67,energy:87,morale:92}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_CAVALRY_REGIMENT,{name:"Harrison's Cavalry",strength:545,fullStrength:600,experience:65,leadership:82,energy:89,morale:99}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"Louisiana Artillery",strength:33,fullStrength:33,stands:2,rangedWeapon:CANNON_6_POUNDER_CIVIL_WAR,experience:65,leadership:52,energy:84,morale:99}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"Kemper's Artillery",strength:18,fullStrength:18,stands:2,rangedWeapon:CANNON_12_POUNDER_CIVIL_WAR,experience:41,leadership:52,energy:92,morale:99})],unitTemplates:CIVIL_WAR_UNITS,rules:[{heading:'The battle begins.',text:'The game clock starts at 9:03 am on 11th of May, 1862 '},{heading:'Setup',text:'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like or try to base it off of the actual battle.'},{heading:'Night time actions',text:'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'}]},{name:"Generic Civil War",ruleset:0,second:0,startTime:Date.parse('20 June 1862 9:03:00 EST'),events:[{time:msSinceMidnight(new Date(Date.parse('20 June 1862 21:04:00 EST'))),title:'Sun Set',descripton:'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',provideArmyOverview:true,proceedClock:10000}],terrain:[].concat(CIVIL_WAR_TERRAIN),deadliness:1,turnDuration:SECONDS_IN_AN_HOUR,roundStrength:100,// TODO Use this and round the number of reported
roundCasualties:10,// TODO Use this and round the number of reported casualties to this number
activeArmy:0,activeUnit:0,turnStarted:0,armies:[{name:"Union",armyActionTitle:"Union Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[]},{name:"Confederate",armyActionTitle:"Confederate Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[]}],units:[babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 3rd Brigade",energy:10,morale:10}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"1st Potomac Brigade",energy:10,morale:10})],unitTemplates:CIVIL_WAR_UNITS,rules:[{heading:'The battle begins.',text:'The game clock starts at 11:30 am on 11th of May, 1862 '},{heading:'Setup',text:'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like.'},{heading:'Night time actions',text:'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'}]},{name:"Example Civil War Battle",ruleset:0,second:0,startTime:Date.parse('11 May 1862 11:30:00 EST'),events:[// TODO Implement the events feature.
{time:msSinceMidnight(new Date(Date.parse('11 May 1862 20:36:00 EST'))),title:'Sun Set',descripton:'The sun has set. It might be clear as to which army won the battle. If it is not then you may proceed to the next morning and continue the engagment. Each unit withdraws at least 6 inches and at most 18 inches.',provideArmyOverview:true,proceedClock:10000// TODO this needs to be the seconds between sunset and sunrise.
}],terrain:[].concat(CIVIL_WAR_TERRAIN),deadliness:1,// TODO Use this in combat calculations.
turnDuration:SECONDS_IN_AN_HOUR,// TODO use this value here throughout instead of the constant.
roundStrength:100,// TODO Use this and round the number of reported strength based on this number
roundCasualties:10,// TODO Use this and round the number of reported casualties based on this number
activeArmy:0,activeUnit:0,turnStarted:0,armies:[{name:"Union",armyActionTitle:"Union Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[{shortname:"McDowell",name:"Brigadier General Irvin McDowell",leadership:80},{shortname:"Tyler",name:"Colonel Daniel Tyler",leadership:68},{shortname:"Hunter",name:"Colonel David Hunter",leadership:78}]},{name:"Confederate",armyActionTitle:"Confederate Army Actions.",armyActionDesc:"Generals and commanders can move 12 inches. Supply wagons can move 8 inches.",leaders:[{shortname:"Beauregard",name:"Brigadier General Beauregard",leadership:88},{shortname:"Longstreet",name:"Brigadier General Longstreet",leadership:95},{shortname:"Bartow",name:"Colonel Bartow",leadership:78}]}],units:[babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 1st Brigade",strength:4063,fullStrength:4100,stands:8,experience:68,leadership:37,energy:84,morale:99}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 2nd Brigade",strength:3091,fullStrength:3103,stands:6,experience:34,leadership:68,energy:86,morale:85}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Tyler's 3rd Brigade",strength:2891,fullStrength:3000,stands:6,experience:51,leadership:52,energy:86,morale:90}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Hunter's 1st Brigade",strength:3264,fullStrength:3300,stands:6,experience:20,leadership:43,energy:80,morale:80}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Hunter's 2nd Brigade",strength:2203,fullStrength:2500,stands:4,experience:65,leadership:92,energy:85,morale:91}),babelHelpers.objectSpread({},FRESH_UNION_BRIGADE,{name:"Hunter's 3rd Brigade",strength:3003,fullStrength:3050,stands:6,experience:42,leadership:73,energy:90,morale:91}),babelHelpers.objectSpread({},FRESH_UNION_ARTILLERY,{name:"Howard's Battery",strength:48,fullStrength:48,rangedWeapon:CANNON_12_POUNDER_CIVIL_WAR,stands:2,experience:61,leadership:52,energy:95,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"1st Potomac Brigade",strength:4070,fullStrength:4100,stands:8,experience:65,leadership:62,energy:97,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"2nd Potomac Brigade",strength:2907,fullStrength:3000,stands:6,experience:52,leadership:42,energy:97,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"3rd Potomac Brigade",strength:3089,fullStrength:3100,stands:6,experience:48,leadership:52,energy:73,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"1st Shenandoah Brigade",strength:2443,fullStrength:2500,stands:5,experience:55,leadership:66,energy:91,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"2nd Shenandoah Brigade",strength:3091,fullStrength:3100,stands:6,experience:83,leadership:74,energy:89,morale:85}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"3rd Shenandoah Brigade",strength:2829,fullStrength:2900,stands:6,experience:51,leadership:82,energy:87,morale:95}),babelHelpers.objectSpread({},FRESH_CONFEDERATE_BRIGADE,{name:"Louisiana Artillery",strength:33,fullStrength:33,stands:2,rangedWeapon:CANNON_6_POUNDER_CIVIL_WAR,experience:65,leadership:52,energy:84,morale:99})],unitTemplates:CIVIL_WAR_UNITS,rules:[{heading:'The battle begins.',text:'The game clock starts at 9:03 am on 11th of May, 1862 '},{heading:'Setup',text:'Currently there are no setup instructions for this battle. Setup the terrain and units however you would like or try to base it off of the actual battle.'},{heading:'Night time actions',text:'During night time each unit that is within 12 inches of an enemy unit must move toward their table edge. The distance they move is 12 - X where X is the distance to the closest enemy unit. They may chose to move further than this.'}]}];_exports.$battleTemplatesDefault=BATTLE_TEMPLATES;var battleTemplates={default:BATTLE_TEMPLATES};_exports.$battleTemplates=battleTemplates;var TAKE_ACTION='TAKE_ACTION';_exports.TAKE_ACTION=TAKE_ACTION;var ADD='ADD';_exports.ADD=ADD;var REMOVE='REMOVE';_exports.REMOVE=REMOVE;var CREATE_NEW_BATTLE='CREATE_NEW_BATTLE';_exports.CREATE_NEW_BATTLE=CREATE_NEW_BATTLE;var SET_ACTIVE_BATTLE='SET_ACTIVE_BATTLE';_exports.SET_ACTIVE_BATTLE=SET_ACTIVE_BATTLE;var REMOVE_BATTLE='REMOVE_BATTLE';_exports.REMOVE_BATTLE=REMOVE_BATTLE;var takeAction=function takeAction(updates){return{type:TAKE_ACTION,updates:updates};};_exports.takeAction=takeAction;var add$1=function add$1(unitTemplate,name){return{type:ADD,unitTemplate:unitTemplate,name:name};};_exports.add=add$1;var remove$1=function remove$1(index){return{type:REMOVE,index:index};};_exports.remove=remove$1;var createNewBattle=function createNewBattle(battleStats){return{type:CREATE_NEW_BATTLE,battleStats:battleStats};};_exports.createNewBattle=createNewBattle;var setActiveBattle=function setActiveBattle(index){return{type:SET_ACTIVE_BATTLE,index:index};};_exports.setActiveBattle=setActiveBattle;var removeBattle=function removeBattle(index){return{type:REMOVE_BATTLE,index:index};};_exports.removeBattle=removeBattle;var battle={TAKE_ACTION:TAKE_ACTION,ADD:ADD,REMOVE:REMOVE,CREATE_NEW_BATTLE:CREATE_NEW_BATTLE,SET_ACTIVE_BATTLE:SET_ACTIVE_BATTLE,REMOVE_BATTLE:REMOVE_BATTLE,takeAction:takeAction,add:add$1,remove:remove$1,createNewBattle:createNewBattle,setActiveBattle:setActiveBattle,removeBattle:removeBattle};_exports.$battle=battle;var INITIAL_STATE$1={activeBattle:0,battles:[]};var initialState=JSON.parse(localStorage.getItem("battle"));if(!initialState){initialState=INITIAL_STATE$1;}var battle$1=function battle$1(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;var newState=babelHelpers.objectSpread({},state);if(newState.battles.length-1<=newState.activeBattle){var activeBattle=newState.battles[newState.activeBattle];}if(activeBattle&&action.type===TAKE_ACTION){action.updates.forEach(function(update){var unit=activeBattle.units[update.id];update.changes.forEach(function(change){unit[change.prop]=change.value;});});updateTime(activeBattle);}else if(activeBattle&&action.type===ADD){var newUnit=activeBattle.unitTemplates[action.unitTemplate];newUnit.nextAction=activeBattle.second+1;if(action.name){newUnit.name=action.name;}activeBattle.units.push(newUnit);}else if(activeBattle&&action.type===REMOVE){activeBattle.units.splice(action.index,1);}else if(action.type===CREATE_NEW_BATTLE){var newBattle=babelHelpers.objectSpread({},BATTLE_TEMPLATES[action.battleStats.templateIndex],{createdAt:new Date().getTime()});if(action.battleStats.name){newBattle.name=action.battleStats.name;}newBattle.units.forEach(function(unit){unit.nextAction=Math.random()*SECONDS_PER_TURN;});updateTime(newBattle);newState.battles.push(newBattle);newState.activeBattle=newState.battles.length-1;}else if(action.type===REMOVE_BATTLE){newState.battles.splice(action.index,1);if(newState.activeBattle>=action.index){newState.activeBattle-=1;}if(newState.activeBattle<0){newState.activeBattle=0;}}else if(action.type===SET_ACTIVE_BATTLE){newState.activeBattle=action.index;}localStorage.setItem("battle",JSON.stringify(newState));return newState;};_exports.$battleDefault=battle$1;function updateTime(battle){var next=nextUnit(battle);if(battle.units[next].nextAction>battle.turnStarted+SECONDS_PER_PLAYER_TURN){if(battle.activeArmy===0){battle.activeArmy=1;}else{battle.activeArmy=0;}next=nextUnit(battle);battle.turnStarted=battle.units[next].nextAction;}battle.second=battle.units[next].nextAction;battle.activeUnit=next;}function nextUnit(battle){var minTime=Number.MAX_SAFE_INTEGER;var next;battle.units.forEach(function(unit,index){if(unit.army===battle.activeArmy&&unit.nextAction<minTime&&unit.strength>0&&unit.morale>0){minTime=unit.nextAction;next=index;}});return next;}var battle$2={default:battle$1};// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
_exports.$battle$1=battle$2;var devCompose=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
var store=createStore(function(state){return state;},devCompose(lazyReducerEnhancer(combineReducers),applyMiddleware(thunk)));// Initially loaded reducers.
_exports.store=store;store.addReducers({app:app$1,battle:battle$1});var store$1={store:store};_exports.$store=store$1;function combat(unit1,unit2){var duration=arguments.length>2&&arguments[2]!==undefined?arguments[2]:SECONDS_PER_TURN;var secondsOfCombat=0;var secondsOfAction=0;while(secondsOfAction<duration){if(unit1.encounter.closeEnoughToFight){if(unit1.fallingback||unit1.status===MORALE_FAILURE){unit1.yardsFallenback+=unit1.yardsMovedPer(SECONDS_PER_ROUND);if(!unit2.fallingback&&unit2.encounter.melee){unit2.yardsPersued+=unit2.yardsMovedPer(SECONDS_PER_ROUND);}}else{makeAttacks(unit1,unit2,SECONDS_PER_ROUND);}if(unit2.fallingback||unit2.status===MORALE_FAILURE){unit2.yardsFallenback+=unit2.yardsMovedPer(SECONDS_PER_ROUND);if(!unit1.fallingback&&unit1.encounter.melee){unit1.yardsPersued+=unit1.yardsMovedPer(SECONDS_PER_ROUND);}}else{makeAttacks(unit2,unit1,SECONDS_PER_ROUND);}secondsOfCombat+=SECONDS_PER_ROUND;}secondsOfAction+=SECONDS_PER_ROUND;}return secondsOfCombat;}function makeAttacks(attacker,defender,duration){var _loop5=function _loop5(_i75){if(attacker.attacksRequireAmmunition){attacker.ammunitionUsed+=1;}var attackHits=true;if(attacker.skillRoll()*DEADLYNESS<defender.skillRoll()){attackHits=false;}var powerRoll=attacker.powerRoll();if(powerRoll*DEADLYNESS<defender.armorRoll()){attackHits=false;}defender.protectingTerrain.forEach(function(terrainConfig){var terrain=new Terrain(terrainConfig,defender.encounterType);if(powerRoll*DEADLYNESS<terrain.armorRoll()){attackHits=false;}});if(attackHits){defender.casualties+=1;}};for(var _i75=0;_i75<attacker.attacksForTime(duration);_i75++){_loop5(_i75);}}var battleUtils={combat:combat};_exports.$battleUtils=battleUtils;var MELEE='melee';_exports.MELEE=MELEE;var RANGED='ranged';/** @class Situation
                                 *  This represents the encounter of two units on the battle field. */_exports.RANGED=RANGED;var Encounter=/*#__PURE__*/function(){function Encounter(_ref5){var attacker=_ref5.attacker,_ref5$attackerArmyLea=_ref5.attackerArmyLeadership,attackerArmyLeadership=_ref5$attackerArmyLea===void 0?0:_ref5$attackerArmyLea,_ref5$attackerEngaged=_ref5.attackerEngagedStands,attackerEngagedStands=_ref5$attackerEngaged===void 0?-1:_ref5$attackerEngaged,defender=_ref5.defender,_ref5$defenderArmyLea=_ref5.defenderArmyLeadership,defenderArmyLeadership=_ref5$defenderArmyLea===void 0?0:_ref5$defenderArmyLea,_ref5$defenderEngaged=_ref5.defenderEngagedStands,defenderEngagedStands=_ref5$defenderEngaged===void 0?-1:_ref5$defenderEngaged,_ref5$melee=_ref5.melee,melee=_ref5$melee===void 0?true:_ref5$melee,_ref5$separation=_ref5.separation,separation=_ref5$separation===void 0?0:_ref5$separation,_ref5$slope=_ref5.slope,slope=_ref5$slope===void 0?SLOPE_NONE:_ref5$slope,_ref5$attackerChargeT=_ref5.attackerChargeTerrain,attackerChargeTerrain=_ref5$attackerChargeT===void 0?[]:_ref5$attackerChargeT,_ref5$defenderTerrain=_ref5.defenderTerrain,defenderTerrain=_ref5$defenderTerrain===void 0?[]:_ref5$defenderTerrain,_ref5$meleeCombatTerr=_ref5.meleeCombatTerrain,meleeCombatTerrain=_ref5$meleeCombatTerr===void 0?[]:_ref5$meleeCombatTerr;babelHelpers.classCallCheck(this,Encounter);this.melee=melee;this.separation=separation;this.slope=slope;this.movementTerrain=attackerChargeTerrain;this.attacker=new Combatant({unit:attacker,encounter:this,target:defender,engagedStands:attackerEngagedStands,movementTerrain:attackerChargeTerrain,protectingTerrain:[],areaTerrain:this.melee?meleeCombatTerrain:[],armyLeadership:attackerArmyLeadership,slope:this.attackerSlope});this.defender=new Combatant({unit:defender,encounter:this,target:attacker,engagedStands:defenderEngagedStands,movementTerrain:[],protectingTerrain:defenderTerrain,areaTerrain:this.melee?meleeCombatTerrain:[],armyLeadership:defenderArmyLeadership,slope:this.defenderSlope});}babelHelpers.createClass(Encounter,[{key:"inchesWord",value:function inchesWord(number){return number===1?'inch':'inches';}},{key:"attackerEngages",value:function attackerEngages(){var secondsOfCombat=combat(this.attacker,this.defender,SECONDS_PER_TURN);var actionMessage="";if(this.attacker.fallingback&&this.attacker.inchesFallenback>=1){actionMessage+="".concat(this.attacker.unit.name," fell back ").concat(this.attacker.inchesFallenback," ").concat(this.inchesWord(this.attacker.inchesFallenback),". ");if(this.defender.persueing&&this.defender.inchesPersued>=2){actionMessage+="".concat(this.defender.unit.name," persued ").concat(this.defender.inchesPersued," ").concat(this.inchesWord(this.defender.inchesPersued),". ");}}if(this.defender.fallingback&&this.defender.inchesFallenback>=1){actionMessage+="".concat(this.defender.unit.name," fell back ").concat(this.defender.inchesFallenback," ").concat(this.inchesWord(this.defender.inchesFallenback),".");if(this.attacker.persueing&&this.attacker.inchesPersued>=2){actionMessage+="".concat(this.attacker.unit.name," persued ").concat(this.attacker.inchesPersued," ").concat(this.inchesWord(this.attacker.inchesPersued),".");}}if(this.inchesDefenderFled>1){return"".concat(actionMessage," ").concat(attackerMessage," ").concat(this.defender.unit.name," fled ").concat(this.inchesDefenderFled," inches but was then caught by ").concat(this.attacker.unit.name,". ").concat(this.timeEngagedMessage(secondsOfCombat));}else if(this.defenderFled){return"".concat(actionMessage," ").concat(this.defender.unit.name," attempted to fall back but was quickly caught by ").concat(this.attacker.unit.name,". ").concat(this.timeEngagedMessage(secondsOfCombat));}else{return"".concat(actionMessage," ").concat(this.timeEngagedMessage(secondsOfCombat));}}},{key:"fight",value:function fight(){var actionMessage=this.attackerReachedDefender?this.attackerEngages():"";var fullMessage=this.melee?"".concat(actionMessage," ").concat(this.defender.battleReport()," ").concat(this.attacker.battleReport()):"".concat(actionMessage," ").concat(this.defender.battleReport());return{messages:[//`Attacker casualties: ${this.attacker.casualties}. Attacker energy loss: ${this.attacker.energyLoss}. Attacker morale loss: ${this.attacker.moraleLoss}. Attacker leadership loss: ${this.attacker.leadershipLoss}. Defender casualties: ${this.defender.casualties}. Defender energy loss: ${this.defender.energyLoss}. Defender morale loss: ${this.defender.moraleLoss}. Defender leadership loss: ${this.defender.leadershipLoss}.`,
fullMessage],updates:[this.defender.updates(0),this.attacker.updates(SECONDS_PER_TURN+randomMinutesBetween(5,10))]};}},{key:"timeEngagedMessage",value:function timeEngagedMessage(seconds){return"They were engaged for ".concat(seconds/SECONDS_IN_AN_MINUTE," minutes.");}},{key:"couldNotReachTargetMessage",get:function get(){if(this.defenderFled){return"".concat(this.defender.unit.name," fled ").concat(this.inchesDefenderFled," inches and ").concat(this.attacker.unit.name," could not reach it's target but may persue up to ").concat(this.inchesOfSeparationAfter," inches.");}else if(this.attacker.status===MORALE_FAILURE){return"".concat(this.attacker.unit.name," refused to make the attack.");}else{return"".concat(this.attacker.unit.name," could not reach ").concat(this.defender.unit.name," but moved ").concat(this.inchesAttackerTravelled," inches towards it's target.");}}},{key:"chargeMovementMessage",get:function get(){return"".concat(this.attacker.unit.name," may move his stands ").concat(this.attackerMovementInches," inches in order to make it into combat. Then the defender may follow this by moving his unengaged stands ").concat(this.defenderMovementInches," inches.");}},{key:"attackerMovementInches",get:function get(){return Math.ceil((this.attacker.yardsMovedPer(this.graceWindow)+this.yardsAttackerTravelled)/YARDS_PER_INCH);}},{key:"defenderMovementInches",get:function get(){return Math.ceil(this.defender.yardsMovedPer(this.graceWindow)/YARDS_PER_INCH);}},{key:"chargeMessage",get:function get(){return this.attackerReachedDefender?this.chargeMovementMessage:this.couldNotReachTargetMessage;}},{key:"graceWindow",get:function get(){return this.secondsSpentFighting*0.5;// Stands that could have made it in time to partake in half of the combat are allowed to be counted.
}},{key:"attackerSlope",get:function get(){return this.slope;}},{key:"defenderSlope",get:function get(){if(this.slope===SLOPE_UP){return SLOPE_DOWN;}else if(this.slope===SLOPE_DOWN){return SLOPE_UP;}else{return SLOPE_NONE;}}},{key:"closeEnoughToFight",get:function get(){if(this.attacker.fallingback&&this.defender.fallingback){return false;}else if(this.attacker.fallingback){return this.attacker.fallBackDistance-this.defender.persuitDistance>YARDS_TO_FIGHT;}else if(this.defender.fallingback){return this.defender.fallBackDistance-this.attacker.persuitDistance>YARDS_TO_FIGHT;}else{return true;}}},{key:"yardsOfSeparation",get:function get(){return this.separation*YARDS_PER_INCH;}},{key:"yardsOfSeparationAfter",get:function get(){if(this.secondsToReachDefender>0){return 0;}else{return this.separation+this.defender.backwardsSpeed*this.secondsAvailableAfterOrder-this.attacker.speed*this.secondsAvailableAfterOrder;}}},{key:"inchesOfSeparationAfter",get:function get(){return Math.ceil(this.yardsOfSeparationAfter/YARDS_PER_INCH);}},{key:"yardsDefenderFled",get:function get(){if(this.defender.status===MORALE_FAILURE){var timeAvailableToFlee=this.secondsAvailableAfterOrder-0.5*this.separation/this.attacker.speed;return timeAvailableToFlee*this.backwardsSpeed;}else{return 0;}}},{key:"inchesDefenderFled",get:function get(){return Math.ceil(this.yardsDefenderFled/YARDS_PER_INCH);}},{key:"yardsAttackerTravelled",get:function get(){if(this.melee){return this.attacker.speed*this.secondsToReachDefenderOrMax;}else{return 0;}}},{key:"inchesAttackerTravelled",get:function get(){return Math.floor(this.yardsAttackerTravelled/YARDS_PER_INCH);}},{key:"secondsAvailableAfterOrder",get:function get(){return SECONDS_PER_TURN-this.attacker.unit.secondsToIssueOrder;}},{key:"secondsToReachDefender",get:function get(){if(this.defender.status===MORALE_FAILURE){return this.yardsOfSeparation/(this.attacker.speed-this.defender.backwardsSpeed);}else{return this.yardsOfSeparation/this.attacker.speed;}}},{key:"secondsToReachDefenderOrMax",get:function get(){return Math.min(this.secondsToReachDefender,this.secondsAvailableAfterOrder);}},{key:"attackerReachedDefender",get:function get(){return this.secondsSpentFighting>0;}},{key:"defenderFled",get:function get(){return this.yardsDefenderFled>0;}// Warning: this could be negative in which case that means the defender outran the attacker.
},{key:"secondsSpentFighting",get:function get(){if(this.attacker.status===MORALE_SUCCESS){if(this.melee){return this.secondsAvailableAfterOrder-this.secondsToReachDefender;}else{return this.secondsAvailableAfterOrder;}}else{return 0;}}},{key:"minutesSpentFighting",get:function get(){return Math.ceil(this.secondsSpentFighting/SECONDS_IN_AN_MINUTE);}}]);return Encounter;}();_exports.$encounterDefault=Encounter;var encounter={MELEE:MELEE,RANGED:RANGED,default:Encounter};_exports.$encounter=encounter;var SLOPE_UP="SLOPE_UP";_exports.SLOPE_UP=SLOPE_UP;var SLOPE_DOWN="SLOPE_DOWN";_exports.SLOPE_DOWN=SLOPE_DOWN;var SLOPE_NONE="SLOPE_NONE";_exports.SLOPE_NONE=SLOPE_NONE;var MAX_TERRAIN=100;_exports.MAX_TERRAIN=MAX_TERRAIN;var Terrain=/*#__PURE__*/function(){function Terrain(config,combatType){babelHelpers.classCallCheck(this,Terrain);this.config=config;this.combatType=combatType;}babelHelpers.createClass(Terrain,[{key:"armorRoll",value:function armorRoll(){return Math.random()*(this.combatType===MELEE?this.config.melee.armor:this.config.ranged.armor);}}]);return Terrain;}();_exports.Terrain=Terrain;var CIVIL_WAR_TERRAIN=[{name:"Cornfield",descripton:"A high cornfield that only provide slight cover from enemy fire but also signicantly impedes movement.",movePenalty:20,areaTerrain:true,defendable:false,melee:{armor:0,volumeMod:0.2},ranged:{armor:20,volumeMod:0}},{name:"Wooden fence",descripton:"A wooden fence which provides some cover and is also fairly easy to cross over.",movePenalty:10,areaTerrain:false,defendable:true,melee:{armor:10,volumeMod:0.1},ranged:{armor:150,volumeMod:0}},{name:"Stone wall",descripton:"A thick stone wall which provide amazing cover from enemy fire and is not very difficult to climb over.",movePenalty:10,areaTerrain:false,defendable:true,melee:{armor:20,volumeMod:0.3},ranged:{armor:300,volumeMod:0}},{name:"Forest",descripton:"A thick grove of tree's that provide excelent cover but also are quite difficult to march through.",movePenalty:30,areaTerrain:true,defendable:false,melee:{armor:0,volumeMod:0.6},ranged:{armor:0,volumeMod:0.7}}];_exports.CIVIL_WAR_TERRAIN=CIVIL_WAR_TERRAIN;var terrain={SLOPE_UP:SLOPE_UP,SLOPE_DOWN:SLOPE_DOWN,SLOPE_NONE:SLOPE_NONE,MAX_TERRAIN:MAX_TERRAIN,Terrain:Terrain,CIVIL_WAR_TERRAIN:CIVIL_WAR_TERRAIN};_exports.$terrain=terrain;var MORALE_SUCCESS='MORALE_SUCCESS';_exports.MORALE_SUCCESS=MORALE_SUCCESS;var MORALE_FAILURE='MORALE_FAILURE';/** @class Situation
                                                 *  This represents a single unit taking an order. */_exports.MORALE_FAILURE=MORALE_FAILURE;var ActingUnit=/*#__PURE__*/function(){function ActingUnit(_ref6){var unit=_ref6.unit,_ref6$pace=_ref6.pace,pace=_ref6$pace===void 0?1:_ref6$pace,environment=_ref6.environment,_ref6$armyLeadership=_ref6.armyLeadership,armyLeadership=_ref6$armyLeadership===void 0?0:_ref6$armyLeadership,_ref6$slope=_ref6.slope,slope=_ref6$slope===void 0?SLOPE_NONE:_ref6$slope,_ref6$status=_ref6.status,status=_ref6$status===void 0?MORALE_SUCCESS:_ref6$status;babelHelpers.classCallCheck(this,ActingUnit);this.unit=unit;this.pace=pace;this.environment=environment;this.armyLeadership=armyLeadership;this.slope=slope;this.status=this.moraleRoll()>this.unit.morale?MORALE_FAILURE:this.status=MORALE_SUCCESS;}babelHelpers.createClass(ActingUnit,[{key:"yardsMovedPer",value:function yardsMovedPer(seconds){return this.speed*seconds;}},{key:"moraleRoll",value:function moraleRoll(){return weightedRandom(2)*100;}},{key:"terrainMovePenalty",get:function get(){// This should be based upon this.unit.openness and this.unit.isMounted
return Math.min(this.environment.movementTerrain.reduce(function(sum,terrain){return sum+=terrain.movePenalty;},0),100);}},{key:"terrainSpeedMod",get:function get(){return(MAX_TERRAIN-this.terrainMovePenalty)/MAX_TERRAIN;}},{key:"equipmentMod",get:function get(){return(MAX_EQUIPMENT_WEIGHT-this.unit.carriedWeight)/MAX_EQUIPMENT_WEIGHT;}},{key:"speed",get:function get(){if(this.unit.canMounted){if(this.unit.isMounted){return this.unit.mountedSpeed.baseSpeed*this.terrainSpeedMod*statModFor(this.unit.energy)*this.equipmentMod*this.pace;}else{return this.unit.unmountedSpeed.baseSpeed*this.terrainSpeedMod*statModFor(this.unit.energy)*this.equipmentMod*this.pace;}}else{return this.unit.baseSpeed*this.terrainSpeedMod*statModFor(this.unit.energy)*this.equipmentMod*this.pace;}}},{key:"backwardsSpeed",get:function get(){return this.unit.baseBackwardSpeed*this.terrainSpeedMod*statModFor(this.unit.energy)*this.equipmentMod*this.pace;}},{key:"armor",get:function get(){return this.unit.armor.defense;}},{key:"unitTypeTerrainMod",get:function get(){var _FOOT_TROOP$CAVALRY_T;return(_FOOT_TROOP$CAVALRY_T={},babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T,FOOT_TROOP,1),babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T,CAVALRY_TROOP,0.5),babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T,ARTILLERY_TROOP,0.25),_FOOT_TROOP$CAVALRY_T)[this.unit.unitType];}},{key:"terrainMod",get:function get(){return(MAX_TERRAIN-this.terrainMovePenalty)/MAX_TERRAIN*statModFor(this.unit.openness)*this.unitTypeTerrainMod;}},{key:"slopeMod",get:function get(){var _SLOPE_UP$SLOPE_DOWN$;return(_SLOPE_UP$SLOPE_DOWN$={},babelHelpers.defineProperty(_SLOPE_UP$SLOPE_DOWN$,SLOPE_UP,0.75),babelHelpers.defineProperty(_SLOPE_UP$SLOPE_DOWN$,SLOPE_DOWN,1.25),babelHelpers.defineProperty(_SLOPE_UP$SLOPE_DOWN$,SLOPE_NONE,1),_SLOPE_UP$SLOPE_DOWN$)[this.slope];}}]);return ActingUnit;}();_exports.ActingUnit=ActingUnit;var actingUnit={MORALE_SUCCESS:MORALE_SUCCESS,MORALE_FAILURE:MORALE_FAILURE,ActingUnit:ActingUnit};_exports.$actingUnit=actingUnit;var menuIcon=html$1(_templateObject5_b2bf582034ff11e98da2ddcf125ddb9c());_exports.menuIcon=menuIcon;var addToCartIcon=html$1(_templateObject6_b2bf582034ff11e98da2ddcf125ddb9c());_exports.addToCartIcon=addToCartIcon;var removeFromCartIcon=html$1(_templateObject7_b2bf582034ff11e98da2ddcf125ddb9c());_exports.removeFromCartIcon=removeFromCartIcon;var minusIcon=html$1(_templateObject8_b2bf582034ff11e98da2ddcf125ddb9c());_exports.minusIcon=minusIcon;var plusIcon=html$1(_templateObject9_b2bf582034ff11e98da2ddcf125ddb9c());_exports.plusIcon=plusIcon;var myIcons={menuIcon:menuIcon,addToCartIcon:addToCartIcon,removeFromCartIcon:removeFromCartIcon,minusIcon:minusIcon,plusIcon:plusIcon};_exports.$myIcons=myIcons;var SnackBar=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(SnackBar,_LitElement);function SnackBar(){babelHelpers.classCallCheck(this,SnackBar);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SnackBar).apply(this,arguments));}babelHelpers.createClass(SnackBar,[{key:"render",value:function render(){return html$1(_templateObject10_b2bf582034ff11e98da2ddcf125ddb9c());}}],[{key:"properties",get:function get(){return{active:{type:Boolean}};}},{key:"styles",get:function get(){return[css(_templateObject11_b2bf582034ff11e98da2ddcf125ddb9c())];}}]);return SnackBar;}(LitElement);window.customElements.define('snack-bar',SnackBar);var BattleSim=/*#__PURE__*/function(_connect){babelHelpers.inherits(BattleSim,_connect);babelHelpers.createClass(BattleSim,[{key:"render",value:function render(){return html$1(_templateObject12_b2bf582034ff11e98da2ddcf125ddb9c(),this._menuButtonClicked,menuIcon,this._title,this._page==='war',this._page==='battle',this._page==='fight',this._page==='rules',this._drawerOpened,this._drawerOpenedChanged,this._page==='war',this._page==='battle',this._page==='fight',this._page==='rules',this._page==='war',this._page==='battle',this._page==='fight',this._page==='rules',this._page==='view-404',this.appTitle,this._snackbarOpened,this._offline?'offline':'online');}}],[{key:"properties",get:function get(){return{appTitle:{type:String},_title:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean}};}},{key:"styles",get:function get(){return[css(_templateObject13_b2bf582034ff11e98da2ddcf125ddb9c())];}}]);function BattleSim(){var _this49;babelHelpers.classCallCheck(this,BattleSim);_this49=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BattleSim).call(this));// To force all event listeners for gestures to be passive.
// See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
setPassiveTouchGestures(true);return _this49;}babelHelpers.createClass(BattleSim,[{key:"firstUpdated",value:function firstUpdated(){installRouter(function(location){return store.dispatch(navigate(decodeURIComponent(location.pathname)));});installOfflineWatcher(function(offline){return store.dispatch(updateOffline(offline));});installMediaQueryWatcher("(min-width: 460px)",function(){return store.dispatch(updateDrawerState(false));});}},{key:"updated",value:function updated(changedProps){if(changedProps.has('_page')){var pageTitle=this.appTitle+' - '+this._page;updateMetadata({title:pageTitle,description:pageTitle// This object also takes an image property, that points to an img src.
});}}},{key:"_menuButtonClicked",value:function _menuButtonClicked(){store.dispatch(updateDrawerState(true));}},{key:"_drawerOpenedChanged",value:function _drawerOpenedChanged(e){store.dispatch(updateDrawerState(e.target.opened));}},{key:"stateChanged",value:function stateChanged(state){if(state.battle.battles.length>state.battle.activeBattle){this._title=state.battle.battles[state.battle.activeBattle].name;}else{this._title=this.appTitle;}this._page=state.app.page;this._offline=state.app.offline;this._snackbarOpened=state.app.snackbarOpened;this._drawerOpened=state.app.drawerOpened;}}]);return BattleSim;}(connect(store)(LitElement));window.customElements.define('battle-sim',BattleSim);var ButtonSharedStyles=css(_templateObject14_b2bf582034ff11e98da2ddcf125ddb9c());_exports.ButtonSharedStyles=ButtonSharedStyles;var buttonSharedStyles={ButtonSharedStyles:ButtonSharedStyles};_exports.$buttonSharedStyles=buttonSharedStyles;var PageViewElement=/*#__PURE__*/function(_LitElement2){babelHelpers.inherits(PageViewElement,_LitElement2);function PageViewElement(){babelHelpers.classCallCheck(this,PageViewElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PageViewElement).apply(this,arguments));}babelHelpers.createClass(PageViewElement,[{key:"shouldUpdate",value:function shouldUpdate(){return this.active;}}],[{key:"properties",get:function get(){return{active:{type:Boolean}};}}]);return PageViewElement;}(LitElement);_exports.PageViewElement=PageViewElement;var pageViewElement={PageViewElement:PageViewElement};_exports.$pageViewElement=pageViewElement;var SharedStyles=css(_templateObject15_b2bf582034ff11e98da2ddcf125ddb9c());_exports.SharedStyles=SharedStyles;var sharedStyles={SharedStyles:SharedStyles};_exports.$sharedStyles=sharedStyles;function upperCaseFirst(string){return string.charAt(0).toUpperCase()+string.slice(1);}var stringUtils={upperCaseFirst:upperCaseFirst};_exports.$stringUtils=stringUtils;var Unit=/*#__PURE__*/function(){function Unit(_ref7,id){var _ref7$army=_ref7.army,army=_ref7$army===void 0?0:_ref7$army,name=_ref7.name,_ref7$unitType=_ref7.unitType,unitType=_ref7$unitType===void 0?FOOT_TROOP:_ref7$unitType,_ref7$openness=_ref7.openness,openness=_ref7$openness===void 0?20:_ref7$openness,_ref7$minFallback=_ref7.minFallback,minFallback=_ref7$minFallback===void 0?10:_ref7$minFallback,_ref7$maxFallback=_ref7.maxFallback,maxFallback=_ref7$maxFallback===void 0?20:_ref7$maxFallback,_ref7$ammunition=_ref7.ammunition,ammunition=_ref7$ammunition===void 0?0:_ref7$ammunition,_ref7$stands=_ref7.stands,stands=_ref7$stands===void 0?8:_ref7$stands,strength=_ref7.strength,_ref7$morale=_ref7.morale,morale=_ref7$morale===void 0?90:_ref7$morale,_ref7$energy=_ref7.energy,energy=_ref7$energy===void 0?100:_ref7$energy,_ref7$nextAction=_ref7.nextAction,nextAction=_ref7$nextAction===void 0?0:_ref7$nextAction,armor=_ref7.armor,meleeWeapon=_ref7.meleeWeapon,rangedWeapon=_ref7.rangedWeapon,_ref7$meleeSkill=_ref7.meleeSkill,meleeSkill=_ref7$meleeSkill===void 0?50:_ref7$meleeSkill,_ref7$rangedSkill=_ref7.rangedSkill,rangedSkill=_ref7$rangedSkill===void 0?50:_ref7$rangedSkill,_ref7$experience=_ref7.experience,experience=_ref7$experience===void 0?50:_ref7$experience,_ref7$leadership=_ref7.leadership,leadership=_ref7$leadership===void 0?50:_ref7$leadership,_ref7$troopType=_ref7.troopType,troopType=_ref7$troopType===void 0?0:_ref7$troopType,fullStrength=_ref7.fullStrength,_ref7$baseSpeed=_ref7.baseSpeed,baseSpeed=_ref7$baseSpeed===void 0?1:_ref7$baseSpeed,_ref7$baseBackwardSpe=_ref7.baseBackwardSpeed,baseBackwardSpeed=_ref7$baseBackwardSpe===void 0?0.5:_ref7$baseBackwardSpe,_ref7$isMounted=_ref7.isMounted,isMounted=_ref7$isMounted===void 0?false:_ref7$isMounted,_ref7$canUnmount=_ref7.canUnmount,canUnmount=_ref7$canUnmount===void 0?false:_ref7$canUnmount,isCurrentlyMounted=_ref7.isCurrentlyMounted,mountedSpeed=_ref7.mountedSpeed,unmountedSpeed=_ref7.unmountedSpeed,_ref7$maneuverTime=_ref7.maneuverTime,maneuverTime=_ref7$maneuverTime===void 0?100:_ref7$maneuverTime;babelHelpers.classCallCheck(this,Unit);this.armyIndex=army;this.id=id;this.name=name;this.unitType=unitType;this.openness=openness;this.minFallback=minFallback;this.maxFallback=maxFallback;this.ammunition=ammunition;this.stands=stands;this.strength=strength||fullStrength;this.morale=morale;this.energy=energy;this.meleeSkill=meleeSkill;this.rangedSkill=rangedSkill;this.nextAction=nextAction;this.armor=ARMOR[armor];this.meleeWeapon=WEAPONS[meleeWeapon];this.rangedWeapon=WEAPONS[rangedWeapon];this.experience=experience;this.leadership=leadership;this.troopType=troopType;this.fullStrength=fullStrength;this.baseSpeed=baseSpeed;this.baseBackwardSpeed=baseBackwardSpeed;this.isMounted=isMounted;this.canUnmount=canUnmount;this.isCurrentlyMounted=isCurrentlyMounted;this.mountedSpeed=mountedSpeed;this.unmountedSpeed=unmountedSpeed;this.maneuverTime=maneuverTime;this.fallback=getRandomInt(this.minFallback,this.maxFallback);}babelHelpers.createClass(Unit,[{key:"secondsToIssueOrder",get:function get(){return this.leadership*3+this.experience*2;}},{key:"carriedWeight",get:function get(){return this.meleeWeapon.weight+this.rangedWeapon.weight+this.armor.weight;}},{key:"targets",get:function get(){var _this50=this;var state=store.getState();var activeBattle=state.battle.battles[state.battle.activeBattle];return activeBattle.units.map(function(unit,index){return{id:index,unit:unit};}).filter(function(target){return target.unit.army!==_this50.armyIndex;});}},{key:"army",get:function get(){var state=store.getState();var activeBattle=state.battle.battles[state.battle.activeBattle];return activeBattle.armies[this.armyIndex];}},{key:"troopTypeName",get:function get(){var _FOOT_TROOP$CAVALRY_T2;return(_FOOT_TROOP$CAVALRY_T2={},babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T2,FOOT_TROOP,'Foot troops'),babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T2,CAVALRY_TROOP,'Cavalry'),babelHelpers.defineProperty(_FOOT_TROOP$CAVALRY_T2,ARTILLERY_TROOP,'Artillery'),_FOOT_TROOP$CAVALRY_T2)[this.troopType];}},{key:"strengthPercentage",get:function get(){return this.strength/this.fullStrength*100;}},{key:"perfectStatus",get:function get(){return"".concat(this.strength," soldiers remaining of the original ").concat(this.fullStrength,". Morale is at ").concat(this.morale,"% of their maximum. There energy level is at ").concat(this.energy,"% of their maximum.");}},{key:"detailedStatus",get:function get(){if(this.strength<=0){return"".concat(this.name," has been destroyed.");}else if(this.morale<=0){return"".concat(this.name," has fled the battlefield.");}else{return"".concat(this.detailedStrengthDesc," ").concat(this.detailedMoraleDesc," ").concat(this.detailedEnergyDesc," ").concat(this.mountedStatus);}}},{key:"mountedStatus",get:function get(){if(this.isMounted){if(this.canUnmount&&this.isCurrentlyMounted){return"They are currently mounted.";}else if(this.canUnmount&&!this.isCurrentlyMounted){return"They are currently unmounted.";}else{return"";}}else{return"";}}},{key:"desc",get:function get(){return"".concat(upperCaseFirst(this.experienceDesc)," ").concat(this.troopTypeName.toLowerCase()," weilding ").concat(this.rangedWeapon.name.toLowerCase()," and ").concat(this.meleeWeapon.name.toLowerCase()," with ").concat(this.leaderDesc.toLowerCase()," leaders consisting of ").concat(this.stands," stands fighting in ").concat(this.openness>50?'open':'closed'," order.");}},{key:"experienceDesc",get:function get(){if(this.experience>90){return'Elite';}else if(this.experience>80){return'Veteran';}else if(this.experience>70){return'Experienced';}else if(this.experience>60){return'Well trained';}else if(this.experience>50){return'Trained';}else if(this.experience>40){return'Poorly trained';}else if(this.experience>30){return'Untrained';}else if(this.experience>20){return'Somewhat inexperienced';}else if(this.experience>10){return'Inexperienced';}else{return'Totally inexperienced';}}},{key:"leaderDesc",get:function get(){if(this.leadership>90){return'outstanding';}else if(this.leadership>80){return'amazing';}else if(this.leadership>70){return'great';}else if(this.leadership>60){return'very good';}else if(this.leadership>50){return'average';}else if(this.leadership>40){return'below average';}else if(this.leadership>30){return'poor';}else if(this.leadership>20){return'very poor';}else if(this.leadership>10){return'terrible';}else{return'horrendous';}}},{key:"detailedMoraleDesc",get:function get(){if(this.morale>90){return'Morale is great.';}else if(this.morale>80){return'They have been shaken up but are ready for their orders.';}else if(this.morale>70){return'They have been shaken up quite a bit.';}else if(this.morale>60){return'They are nervous to engage in combat but are still in the fight.';}else if(this.morale>50){return'They are timid.';}else if(this.morale>40){return'They are afraid to fight any further.';}else if(this.morale>30){return'They are afraid to fight any further.';}else if(this.morale>20){return'They will likely not take any further orders.';}else if(this.morale>10){return'They could flee at any time.';}else{return'They are refusing to fight or take orders and could flee at any time.';}}},{key:"detailedStrengthDesc",get:function get(){if(this.strengthPercentage>97){return'They are at full strength and have taken no casualties.';}else if(this.strengthPercentage>93){return'They are close to full strength but have take some casualties.';}else if(this.strengthPercentage>90){return'They have taken some casualties.';}else if(this.strengthPercentage>85){return'They have taken noticable casualties.';}else if(this.strengthPercentage>80){return'They have taken significant casualties.';}else if(this.strengthPercentage>75){return'They have taken a lot of casualties.';}else if(this.strengthPercentage>60){return'They have taken severe casualties.';}else if(this.strengthPercentage>50){return'They have taken terrible casualties.';}else if(this.strengthPercentage>40){return'They have lost at least half their men.';}else if(this.strengthPercentage>20){return'There are not many of the men left.';}else{return'Very few men remain alive.';}}},{key:"detailedEnergyDesc",get:function get(){if(this.energy>90){return'They have lots of energy.';}else if(this.energy>80){return'They are well rested.';}else if(this.energy>70){return'They have put in some work but are still fresh.';}else if(this.energy>60){return'They are beginning to slow down.';}else if(this.energy>50){return'They are showing signs of exhaustion.';}else if(this.energy>40){return'They are exhausted.';}else if(this.energy>30){return'They are completely exhausted.';}else if(this.energy>20){return'They are utterly spent.';}else if(this.energy>10){return'They have no energy left.';}else{return'They have given it all that they have. They are totally spent.';}}}]);return Unit;}();_exports.$unitDefault=Unit;var unit={default:Unit};_exports.$unit=unit;});