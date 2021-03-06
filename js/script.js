document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._observers = [];
    this._init();
  }

  _init() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }
  _textAnimation(el, inview) {
    if(inview) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  }

  _scrollInit() {
    this.observers = new ScrollObserver('.picture__slide', this._inviewAnimation);
    this.observers = new ScrollObserver('.title', this._textAnimation, {rootMargin: "-200px 0px"});
  }

}


// header__nav
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.header__toggle');
    this.DOM.nav = document.querySelector('.header__nav');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }
  _toggle() {
    this.DOM.nav.classList.toggle('is-open');
    this.DOM.btn .classList.toggle('is-btn');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();


