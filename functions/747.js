const function747 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(9), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickDeck = function (t) {
                e.onClickDeck(t)
            }, e._onClickOther = function () {
                e.onClickOther()
            };
            var i = new PIXI.Sprite, n = new PIXI.Sprite, a = new PIXI.Sprite, _ = new PIXI.Sprite,
                u = new PIXI.Sprite;
            return i.position.set(0, 0), n.position.set(45, 0), a.position.set(90, 0), _.position.set(135, 0), u.position.set(180, 0), i.addListener(s.EventType.CLICK, function () {
                e._onClickDeck(1)
            }), n.addListener(s.EventType.CLICK, function () {
                e._onClickDeck(2)
            }), a.addListener(s.EventType.CLICK, function () {
                e._onClickDeck(3)
            }), _.addListener(s.EventType.CLICK, function () {
                e._onClickDeck(4)
            }), u.addListener(s.EventType.CLICK, function () {
                e._onClickOther()
            }), e.addChild(i, n, a, _, u), o.default.model.deck.exist3rdUnit && (e.icon3rdUnit = new PIXI.Sprite(r.COMMON_MISC.getTexture(181)), e.icon3rdUnit.position.set(75, -21), e.addChild(e.icon3rdUnit)), e.deck1 = i, e.deck2 = n, e.deck3 = a, e.deck4 = _, e.deckOther = u, e
        }

        return n(e, t), e.prototype.initDeckCount = function (t) {
            this._updateDeckCount(t)
        }, e.prototype.initOtherShipCount = function (t) {
            this._updateOtherShipCount(t)
        }, e.prototype.focusDeck = function (t) {
            this._focusDeck(t)
        }, e.prototype.focusOther = function () {
            this._focusOther()
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
        }, e.prototype._focusDeck = function (t) {
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
        }, e.prototype._focusOther = function () {
            this._initializeDeckTexture(this.deckCount), this._initializeOtherDeckTextre(this.otherShipCount), this.deckOther.texture = r.COMMON_MISC.getTexture(85)
        }, e.prototype.dispose = function () {
            this.onClickDeck = null, this.onClickOther = null, this.deckCount = null, this.otherShipCount = null, this.deck1.removeAllListeners(s.EventType.CLICK), this.deck2.removeAllListeners(s.EventType.CLICK), this.deck3.removeAllListeners(s.EventType.CLICK), this.deck4.removeAllListeners(s.EventType.CLICK), this.deckOther.removeAllListeners(s.EventType.CLICK), this.removeChild(this.deck1), this.removeChild(this.deck2), this.removeChild(this.deck3), this.removeChild(this.deck4), this.removeChild(this.deckOther), this.deck1 = null, this.deck2 = null, this.deck3 = null, this.deck4 = null, this.deckOther = null, this.icon3rdUnit = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.DeckSelectView = a
}