const function1038 = function (t, e, i) {
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
    var o = i(38), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
        }, e.prototype.update = function (t) {
            0 == t ? (this._setTexture(38), this.visible = !0) : 2 == t ? (this._setTexture(32), this.visible = !0) : this.visible = !1
        }, e.prototype.dispose = function () {
        }, e.prototype._setTexture = function (t) {
            this.texture = o.SALLY_EXPEDITION.getTexture(t)
        }, e
    }(PIXI.Sprite);
    e.ExpeditionStateIcon = r
}