const function1016 = function (t, e, i) {
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
    var o = i(26),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.SALLY_AIRUNIT.getTexture(5)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Sprite);
    e.AirUnitBtn = s
}