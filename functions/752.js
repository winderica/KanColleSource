const function752 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        r = i(9),
        s = i(1),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClickDeck = function (t) {
                    e.onClickDeck(t)
                }, e._onClickOther = function () {
                    e.onClickOther()
                }, e.deck1 = new PIXI.Sprite, e.deck2 = new PIXI.Sprite, e.deck3 = new PIXI.Sprite, e.deck4 = new PIXI.Sprite, e.deckOther = new PIXI.Sprite, e.deck1.position.set(0, 0), e.deck2.position.set(45, 0), e.deck3.position.set(90, 0), e.deck4.position.set(135, 0), e.deckOther.position.set(180, 0), e.deck1.on(s.EventType.CLICK, function () {
                    e._onClickDeck(1)
                }), e.deck2.on(s.EventType.CLICK, function () {
                    e._onClickDeck(2)
                }), e.deck3.on(s.EventType.CLICK, function () {
                    e._onClickDeck(3)
                }), e.deck4.on(s.EventType.CLICK, function () {
                    e._onClickDeck(4)
                }), e.deckOther.on(s.EventType.CLICK, function () {
                    e._onClickOther()
                }), e.addChild(e.deck1, e.deck2, e.deck3, e.deck4, e.deckOther), o.default.model.deck.exist3rdUnit && (e.icon3rdUnit = new PIXI.Sprite(r.COMMON_MISC.getTexture(182)), e.icon3rdUnit.position.set(75, -21), e.addChild(e.icon3rdUnit)), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.deck1.off(s.EventType.CLICK), this.deck2.off(s.EventType.CLICK), this.deck3.off(s.EventType.CLICK), this.deck4.off(s.EventType.CLICK), this.deckOther.off(s.EventType.CLICK), this.onClickDeck = null, this.onClickOther = null, this.deckCount = null, this.otherShipCount = null, this.deck1 = null, this.deck2 = null, this.deck3 = null, this.deck4 = null, this.deckOther = null, this.icon3rdUnit = null
            }, e.prototype.initDeckCount = function (t) {
                this._updateDeckCount(t)
            }, e.prototype.initOtherShipCount = function (t) {
                this._updateOtherShipCount(t)
            }, e.prototype.focusDeck = function (t) {
                switch (this._initializeDeckTexture(this.deckCount), this._initializeOtherDeckTextre(this.otherShipCount), t) {
                    case 1:
                        this.deck1.texture = r.COMMON_MISC.getTexture(74);
                        break;
                    case 2:
                        this.deck2.texture = r.COMMON_MISC.getTexture(77);
                        break;
                    case 3:
                        this.deck3.texture = r.COMMON_MISC.getTexture(80);
                        break;
                    case 4:
                        this.deck4.texture = r.COMMON_MISC.getTexture(83)
                }
            }, e.prototype.focusOther = function () {
                this._initializeDeckTexture(this.deckCount), this._initializeOtherDeckTextre(this.otherShipCount), this.deckOther.texture = r.COMMON_MISC.getTexture(85)
            }, e.prototype._updateDeckCount = function (t) {
                this.deckCount = t, this._initializeDeckTexture(t), this._initializeDeckInteractive(t)
            }, e.prototype._updateOtherShipCount = function (t) {
                this._initializeOtherDeckTextre(t), this._initializeOtherDeckInteractive(t), this.otherShipCount = t
            }, e.prototype._initializeDeckTexture = function (t) {
                switch (t) {
                    case 1:
                        this.deck1.texture = r.COMMON_MISC.getTexture(73), this.deck2.texture = r.COMMON_MISC.getTexture(75), this.deck3.texture = r.COMMON_MISC.getTexture(78), this.deck4.texture = r.COMMON_MISC.getTexture(81);
                        break;
                    case 2:
                        this.deck1.texture = r.COMMON_MISC.getTexture(73), this.deck2.texture = r.COMMON_MISC.getTexture(76), this.deck3.texture = r.COMMON_MISC.getTexture(78), this.deck4.texture = r.COMMON_MISC.getTexture(81);
                        break;
                    case 3:
                        this.deck1.texture = r.COMMON_MISC.getTexture(73), this.deck2.texture = r.COMMON_MISC.getTexture(76), this.deck3.texture = r.COMMON_MISC.getTexture(79), this.deck4.texture = r.COMMON_MISC.getTexture(81);
                        break;
                    case 4:
                        this.deck1.texture = r.COMMON_MISC.getTexture(73), this.deck2.texture = r.COMMON_MISC.getTexture(76), this.deck3.texture = r.COMMON_MISC.getTexture(79), this.deck4.texture = r.COMMON_MISC.getTexture(82);
                        break;
                    default:
                        this.deck1.texture = r.COMMON_MISC.getTexture(72), this.deck2.texture = r.COMMON_MISC.getTexture(75), this.deck3.texture = r.COMMON_MISC.getTexture(78), this.deck4.texture = r.COMMON_MISC.getTexture(81)
                }
            }, e.prototype._initializeDeckInteractive = function (t) {
                switch (this.deck1.interactive = this.deck1.buttonMode = !1, this.deck2.interactive = this.deck2.buttonMode = !1, this.deck3.interactive = this.deck3.buttonMode = !1, this.deck4.interactive = this.deck4.buttonMode = !1, t) {
                    case 1:
                        this.deck1.interactive = this.deck1.buttonMode = !0;
                        break;
                    case 2:
                        this.deck1.interactive = this.deck1.buttonMode = !0, this.deck2.interactive = this.deck2.buttonMode = !0;
                        break;
                    case 3:
                        this.deck1.interactive = this.deck1.buttonMode = !0, this.deck2.interactive = this.deck2.buttonMode = !0, this.deck3.interactive = this.deck3.buttonMode = !0;
                        break;
                    case 4:
                        this.deck1.interactive = this.deck1.buttonMode = !0, this.deck2.interactive = this.deck2.buttonMode = !0, this.deck3.interactive = this.deck3.buttonMode = !0, this.deck4.interactive = this.deck4.buttonMode = !0
                }
            }, e.prototype._initializeOtherDeckTextre = function (t) {
                0 < t ? (this.deckOther.texture = r.COMMON_MISC.getTexture(84), this.deckOther.visible = !0) : this.deckOther.visible = !1
            }, e.prototype._initializeOtherDeckInteractive = function (t) {
                0 < t ? (this.deckOther.interactive = !0, this.deckOther.buttonMode = !0) : (this.deckOther.interactive = !1, this.deckOther.buttonMode = !1)
            }, e
        }(PIXI.Container);
    e.DeckSelectView = a
}