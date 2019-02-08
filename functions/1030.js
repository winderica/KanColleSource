const function1030 = function (t, e, i) {
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
    var o = i(38),
        r = i(367),
        s = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n(e, t), e.prototype._updateTexture = function () {
                0 == this._enabled ? this._btn.texture = o.SALLY_EXPEDITION.getTexture(19) : 1 == this._overed ? this._btn.texture = o.SALLY_EXPEDITION.getTexture(20) : this._btn.texture = o.SALLY_EXPEDITION.getTexture(18)
            }, e
        }(r.BtnGoBase);
    e.BtnGo = s
}