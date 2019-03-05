import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { store } from '../store.js';
import { navigate, updateOffline, updateDrawerState } from '../actions/app.js';
import { addSharedBattle } from '../actions/battle.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './snack-bar.js';
import './battle-sim-alert.js';
import './battle-sim-selector.js';
import './battle-sim-option.js';
import './button-tray.js';
import './fight-selectors.js';
import './army-action.js';
import './battle-event.js';

class BattleSim extends connect(store)(LitElement) {
  static get properties() {
    return {
      appTitle: { type: String },
      _title: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean },
      _showMobileNav: { type: Boolean },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;

          --app-drawer-width: 256px;

          --app-primary-color: #E91E63;
          --app-secondary-color: #293237;
          --app-grey-color: #c1c1c1;
          --app-dark-text-color: var(--app-secondary-color);
          --app-muted-text-color: #919191;
          --app-light-text-color: white;
          --app-section-even-color: #f7f7f7;
          --app-section-odd-color: white;

          --app-header-background-color: white;
          --app-header-text-color: var(--app-dark-text-color);
          --app-header-selected-color: var(--app-primary-color);

          --app-drawer-background-color: var(--app-secondary-color);
          --app-drawer-text-color: var(--app-light-text-color);
          --app-drawer-selected-color: #78909C;
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          background-color: var(--app-header-background-color);
          color: var(--app-header-text-color);
          border-bottom: 1px solid #eee;
          z-index: 1;
        }

        .toolbar-top {
          background-color: var(--app-header-background-color);
        }

        [main-title] {
          font-size: 1.5rem;
          text-overflow: wrap;
          white-space: nowrap;
        }

        h1 {
          font-size: 1.25rem;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 4px 24px;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        .menu-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-drawer-background-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 24px;
        }

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }

        .main-content {
          padding-top: 64px;
          min-height: 100vh;
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        footer {
          padding: 24px;
          background: var(--app-drawer-background-color);
          color: var(--app-drawer-text-color);
          text-align: center;
        }

        .mobile-nav {
          position: fixed;
          bottom: -4rem;
          transition: bottom 250ms ease-in-out;
          left: 0;
          background: rgba(255,255,255,0.75);
          border-top: 1px solid #eee;
          z-index: 1;
          width: 100%;
          font-size: 0;
        }

        .mobile-nav > a {
          display: inline-block;
          box-sizing: border-box;
          padding: 1rem;
          width: 25%;
          background: rgba(255,255,255,0.65);
          font-size: 1rem;
          text-align: center;
          text-decoration: none;
          color: var(--app-dark-text-color);
        }

        .mobile-nav > a[selected] {
          color: var(--app-primary-color);
        }

        .mobile-nav.open-mobile-nav {
          bottom: 0;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          .menu-btn {
            display: none;
          }

          .main-content {
            padding-top: 107px;
          }

          /* The drawer button isn't shown in the wide layout, so we don't
          need to offset the title */
          [main-title] {
            padding-right: 0px;
          }

          .mobile-nav {
            display: none;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <app-header condenses reveals effects="waterfall">
        <app-toolbar class="toolbar-top">
          <div main-title>${this._title}</div>
        </app-toolbar>

        <nav class="toolbar-list">
          <a ?selected="${this._page === 'war'}" href="/war">War</a>
          <a ?selected="${this._page === 'battle'}" href="/battle">Battle</a>
          <a ?selected="${this._page === 'fight'}" href="/fight">Fight</a>
          <a ?selected="${this._page === 'rules'}" href="/rules">Rules</a>
        </nav>
      </app-header>

      <nav class="${classMap({'mobile-nav': true, 'open-mobile-nav': this._showMobileNav})}">
        <a ?selected="${this._page === 'war'}" href="/war">War</a>
        <a ?selected="${this._page === 'battle'}" href="/battle">Battle</a>
        <a ?selected="${this._page === 'fight'}" href="/fight">Fight</a>
        <a ?selected="${this._page === 'rules'}" href="/rules">Rules</a>
      </nav>

      <main role="main" class="main-content">
        <war-view class="page" ?active="${this._page === 'war'}"></war-view>
        <battle-view class="page" ?active="${this._page === 'battle'}"></battle-view>
        <fight-view class="page" ?active="${this._page === 'fight'}"></fight-view>
        <rules-view class="page" ?active="${this._page === 'rules'}"></rules-view>
        <shared-view class="page" ?active="${this._page.indexOf('shared') === 0}"></shared-view>
        <view-404 class="page" ?active="${this._page === 'view-404'}"></view-404>
      </main>

      <footer>
        <h1>${this.appTitle}</h1>
        <p>Mass combat simulation for tabletop gaming.</p>
      </footer>

      <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.
      </snack-bar>
    `;
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
    this._showMobileNav = true;

    let state = store.getState();
    let sharedBattleIds = JSON.parse(localStorage.getItem("sharedBattles")) || [];
    let activeBattleId = state.battle.activeBattle.id;

    sharedBattleIds.forEach(sharedBattleId => {
      firebase.firestore().collection('apps/battlesim/battles')
      .doc(sharedBattleId)
      .onSnapshot(doc => {
        if (doc.exists) {
          store.dispatch(addSharedBattle(doc.id, doc.data().battle));
        }
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    let lastScrollPos = 0;
    this._lastChangePosition = 0;
    window.addEventListener('scroll', e => {
      if (this._scrollDistance > 20 && this._scrollDirection === 'down') {
        this._scrollDistance = 0;
        this._lastChangePosition = window.scrollY;
        this._showMobileNav = true;
      } else if (this._scrollDistance > 60 && this._scrollDirection === 'up') {
        this._scrollDistance = 0;
        this._lastChangePosition = window.scrollY;
        this._showMobileNav = false;
      } else if (lastScrollPos > window.scrollY && this._scrollDirection === 'up') {
        this._scrollDistance = 0;
        this._lastChangePosition = window.scrollY;
      } else if (lastScrollPos < window.scrollY && this._scrollDirection === 'down') {
        this._scrollDistance = 0;
        this._lastChangePosition = window.scrollY;
      } else {
        this._scrollDistance = Math.abs(window.scrollY - this._lastChangePosition);
      }
      this._scrollDirection = lastScrollPos > window.scrollY ? 'down' : 'up';
      lastScrollPos = window.scrollY;
    });
  }

  firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
      if (! isNaN(this._savedScrollY)) {
        window.scrollTo(0, this._savedScrollY);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  _drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.opened));
  }

  stateChanged(state) {
    if (state.battle.battles.length > state.battle.activeBattle.id && state.app.page !== 'war') {
      this._title = state.battle.battles[state.battle.activeBattle.id].name;
    } else if (Object.keys(state.battle.sharedBattles).indexOf(state.battle.activeBattle.id) >= 0 && state.app.page !== 'war') {
      this._title = state.battle.sharedBattles[state.battle.activeBattle.id].name;
    } else {
      this._title = this.appTitle;
    }
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
    if (! isNaN(state.app.scrollPositions[state.app.page])) {
      this._savedScrollY = state.app.scrollPositions[state.app.page];
    }
  }
}

window.customElements.define('battle-sim', BattleSim);
