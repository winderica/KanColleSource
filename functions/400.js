const function400 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._icon && this._icon.dispose(), this._btn_yes.dispose(), this._btn_no.dispose()
            }, e.prototype._initialize = function (t, e) {
                this._icon.initialize(t, e), this._btn_yes.initialize(o.ITEM_ILIST_MEDAL.getTexture(6)), this._btn_no.initialize(o.ITEM_ILIST_MEDAL.getTexture(0)), this._btn_yes.activate(), this._btn_no.activate()
            }, e
        }(PIXI.Sprite);
    e.ConfirmViewBase = r
}