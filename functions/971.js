const function971 = function (t, e, i) {
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
    var o = i(18),
        r = i(41),
        s = i(1),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._fade = new o.FadeBox(.3), e._bg = new PIXI.Sprite, e._bg.position.set(219, 207), e.addChild(e._fade), e.addChild(e._bg), e._btn_no = new _(!1), e._btn_no.position.set(168, 216), e._btn_yes = new _(!0), e._btn_yes.position.set(417, 216), e.bg.addChild(e._btn_no), e.bg.addChild(e._btn_yes), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "fade", {
                get: function () {
                    return this._fade
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_no", {
                get: function () {
                    return this._btn_no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_yes", {
                get: function () {
                    return this._btn_yes
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.texture = r.SALLY_EVENT.getTexture(23), this._btn_no.initialize(), this._btn_yes.initialize()
            }, e
        }(PIXI.Container);
    e.OperationSelectConfirmDialog = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick()
            }, i._is_yes = e, i
        }
        return n(e, t), e.prototype.initialize = function () {
            this._update(!1)
        }, e.prototype.activate = function (t) {
            this._cb_onClick = t, 1 != this.interactive && (this.interactive = !0, this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._cb_onClick = null, this.interactive = !1, this.buttonMode = !1, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick)
        }, e.prototype._update = function (t) {
            var e;
            e = 1 == t ? this._is_yes ? 16 : 13 : this._is_yes ? 15 : 12, this.texture = r.SALLY_EVENT.getTexture(e)
        }, e
    }(PIXI.Sprite)
}