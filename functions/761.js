const function761 = function (t, e, i) {
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
    var o = i(9), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick_ = function () {
                e.onClick()
            };
            var i = o.COMMON_MISC.getTexture(85), n = o.COMMON_MISC.getTexture(84), s = PIXI.Texture.EMPTY;
            return e.textureFocus = i, e.textureDeFocus = n, e.textureLocked = s, e.interactive = e.buttonMode = !1, e.addListener(r.EventType.CLICK, e._onClick_), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.onClick = this._onClick_ = null, this.textureFocus = null, this.textureDeFocus = null, this.textureLocked = null, this.texture = PIXI.Texture.EMPTY, this.removeAllListeners(r.EventType.CLICK)
        }, e.prototype.focus = function () {
            this.interactive = this.buttonMode = !1, this.texture = this.textureFocus
        }, e.prototype.deFocus = function () {
            this.interactive = this.buttonMode = !0, this.texture = this.textureDeFocus
        }, e.prototype.locked = function () {
            this.interactive = this.buttonMode = !1, this.texture = this.textureLocked
        }, e
    }(PIXI.Sprite), a = function (t) {
        function e(e, i, n, s) {
            var a = t.call(this) || this;
            a._onClick_ = function () {
                a.onClick(a.deckId)
            };
            var _ = o.COMMON_MISC.getTexture(i), u = o.COMMON_MISC.getTexture(n), l = o.COMMON_MISC.getTexture(s);
            return a.textureFocus = _, a.textureDeFocus = u, a.textureLocked = l, a.interactive = a.buttonMode = !1, a.deckId = e, a.addListener(r.EventType.CLICK, a._onClick_), a
        }

        return n(e, t), e.prototype.dispose = function () {
            this.onClick = this._onClick_ = null, this.deckId = null, this.textureFocus = null, this.textureDeFocus = null, this.textureLocked = null, this.texture = PIXI.Texture.EMPTY, this.removeAllListeners(r.EventType.CLICK)
        }, e.prototype.focus = function () {
            this.interactive = this.buttonMode = !1, this.texture = this.textureFocus
        }, e.prototype.deFocus = function () {
            this.interactive = this.buttonMode = !0, this.texture = this.textureDeFocus
        }, e.prototype.locked = function () {
            this.interactive = this.buttonMode = !1, this.texture = this.textureLocked
        }, e
    }(PIXI.Sprite), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickDeck_1 = function () {
                e._onClickDeck_(1)
            }, e._onClickDeck_2 = function () {
                e._onClickDeck_(2)
            }, e._onClickDeck_3 = function () {
                e._onClickDeck_(3)
            }, e._onClickDeck_4 = function () {
                e._onClickDeck_(4)
            }, e._onClickOther = function () {
                e.onClickOther()
            };
            var i = new a(1, 74, 73, 72), n = new a(2, 77, 76, 75), o = new a(3, 80, 79, 78),
                r = new a(4, 83, 82, 81), _ = new s;
            return i.position.set(0, 0), n.position.set(45, 0), o.position.set(90, 0), r.position.set(135, 0), _.position.set(180, 0), i.onClick = e._onClickDeck_1, n.onClick = e._onClickDeck_2, o.onClick = e._onClickDeck_3, r.onClick = e._onClickDeck_4, _.onClick = e._onClickOther, e.addChild(i, n, o, r, _), e.deck1 = i, e.deck2 = n, e.deck3 = o, e.deck4 = r, e.other = _, e
        }

        return n(e, t), e.prototype.focusDeck = function (t) {
            switch (this._reset_(this.deckIds, this.otherShipCount), t) {
                case 1:
                    this.deck1.focus();
                    break;
                case 2:
                    this.deck2.focus();
                    break;
                case 3:
                    this.deck3.focus();
                    break;
                case 4:
                    this.deck4.focus()
            }
        }, e.prototype.focusOther = function () {
            this._reset_(this.deckIds, this.otherShipCount), this.other.focus()
        }, e.prototype.dispose = function () {
            this.deck1.dispose(), this.deck2.dispose(), this.deck3.dispose(), this.deck4.dispose(), this.other.dispose(), this.deck1.onClick = this._onClickDeck_1 = null, this.deck2.onClick = this._onClickDeck_2 = null, this.deck3.onClick = this._onClickDeck_3 = null, this.deck4.onClick = this._onClickDeck_4 = null, this.other.onClick = this._onClickOther = null, this.deck1 = null, this.deck2 = null, this.deck3 = null, this.deck4 = null, this.other = null, this.deckIds = null, this.otherShipCount = null, this.removeChildren()
        }, e.prototype._onClickDeck_ = function (t) {
            this.onClickDeck(t)
        }, e.prototype.update = function (t, e) {
            this._reset_(t, e), this.deckIds = t, this.otherShipCount = e
        }, e.prototype._reset_ = function (t, e) {
            this.deck1.locked(), this.deck2.locked(), this.deck3.locked(), this.deck4.locked(), this.other.locked(), -1 != t.indexOf(1) && this.deck1.deFocus(), -1 != t.indexOf(2) && this.deck2.deFocus(), -1 != t.indexOf(3) && this.deck3.deFocus(), -1 != t.indexOf(4) && this.deck4.deFocus(), 0 < e && this.other.deFocus()
        }, e
    }(PIXI.Container);
    e.DeckSelectView = _
}