const function1161 = function (t, e, i) {
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
    var o = i(32),
        r = i(3),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._update = function (t) {
                0 == this._enabled ? this.texture = r.ITEM_FSHOP.getTexture(17) : this.texture = 0 == t ? r.ITEM_FSHOP.getTexture(16) : r.ITEM_FSHOP.getTexture(18)
            }, e
        }(o.BtnBase);
    e.ExchangeBtn = s
}