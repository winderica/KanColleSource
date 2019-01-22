const function645 = function (t, e, i) {
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
    var o = i(8),
        r = i(153),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    0 != i._btn.buttonMode && null != i._cb && i._cb()
                }, i._cb = e, i._layer = new o.AreaBox(.2), i._bg = new PIXI.Sprite, i._btn = new PIXI.Sprite, i.addChild(i._layer), i.addChild(i._bg), i.addChild(i._btn), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "layer", {
                get: function () {
                    return this._layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn", {
                get: function () {
                    return this._btn
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.texture = r.PORT_MAIN.getTexture(18), this._bg.position.set(340, 273), this._btn.texture = r.PORT_MAIN.getTexture(1), this._btn.position.set(517, 450), this._btn.interactive = !0
            }, e.prototype.activate = function () {
                0 == this._btn.buttonMode && (this._btn.buttonMode = !0, this._btn.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._btn.buttonMode = !1, this._btn.off(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb = null
            }, e
        }(PIXI.Container);
    e.CompCombinedAlert = a
}