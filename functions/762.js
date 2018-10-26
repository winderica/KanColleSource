const function762 = function (t, e, i) {
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
            return e._onClick = function () {
                e.onClick()
            }, e.textureFocus = o.COMMON_MISC.getTexture(85), e.textureDeFocus = o.COMMON_MISC.getTexture(84), e.textureLocked = PIXI.Texture.EMPTY, e.interactive = e.buttonMode = !1, e.on(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.onClick = null, this.textureFocus = null, this.textureDeFocus = null, this.textureLocked = null, this.off(r.EventType.CLICK)
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
            return a._onClick = function () {
                a.onClick(a.deckId)
            }, a.deckId = e, a.textureFocus = o.COMMON_MISC.getTexture(i), a.textureDeFocus = o.COMMON_MISC.getTexture(n), a.textureLocked = o.COMMON_MISC.getTexture(s), a.interactive = a.buttonMode = !1, a.on(r.EventType.CLICK, a._onClick), a
        }

        return n(e, t), e.prototype.dispose = function () {
            this.onClick = null, this.deckId = null, this.textureFocus = null, this.textureDeFocus = null, this.textureLocked = null, this.off(r.EventType.CLICK)
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
            return e._onClickDeck_1 = function () {
                e._onClickDeck(1)
            }, e._onClickDeck_2 = function () {
                e._onClickDeck(2)
            }, e._onClickDeck_3 = function () {
                e._onClickDeck(3)
            }, e._onClickDeck_4 = function () {
                e._onClickDeck(4)
            }, e._onClickOther = function () {
                e.onClickOther()
            }, e.deck1 = new a(1, 74, 73, 72), e.deck2 = new a(2, 77, 76, 75), e.deck3 = new a(3, 80, 79, 78), e.deck4 = new a(4, 83, 82, 81), e.other = new s, e.deck1.position.set(0, 0), e.deck2.position.set(45, 0), e.deck3.position.set(90, 0), e.deck4.position.set(135, 0), e.other.position.set(180, 0), e.deck1.onClick = e._onClickDeck_1, e.deck2.onClick = e._onClickDeck_2, e.deck3.onClick = e._onClickDeck_3, e.deck4.onClick = e._onClickDeck_4, e.other.onClick = e._onClickOther, e.addChild(e.deck1, e.deck2, e.deck3, e.deck4, e.other), e
        }

        return n(e, t), e.prototype.focusDeck = function (t) {
            switch (this._reset(this.deckIds, this.otherShipCount), t) {
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
            this._reset(this.deckIds, this.otherShipCount), this.other.focus()
        }, e.prototype.dispose = function () {
            this.deck1.dispose(), this.deck2.dispose(), this.deck3.dispose(), this.deck4.dispose(), this.other.dispose(), this.deck1 = null, this.deck2 = null, this.deck3 = null, this.deck4 = null, this.other = null, this.deckIds = null, this.otherShipCount = null, this.removeChildren()
        }, e.prototype._onClickDeck = function (t) {
            this.onClickDeck(t)
        }, e.prototype.update = function (t, e) {
            this._reset(t, e), this.deckIds = t, this.otherShipCount = e
        }, e.prototype._reset = function (t, e) {
            this.deck1.locked(), this.deck2.locked(), this.deck3.locked(), this.deck4.locked(), this.other.locked(), -1 != t.indexOf(1) && this.deck1.deFocus(), -1 != t.indexOf(2) && this.deck2.deFocus(), -1 != t.indexOf(3) && this.deck3.deFocus(), -1 != t.indexOf(4) && this.deck4.deFocus(), 0 < e && this.other.deFocus()
        }, e
    }(PIXI.Container);
    e.DeckSelectView = _
}