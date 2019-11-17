const function640 = function (t, e, i) {
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
    var o = i(48),
        r = i(9),
        s = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._createContent = function () {
                var t = r.COMMON_MISC.getTexture(148);
                this._card = new PIXI.Sprite(t), this._card.x = -135, this._card.y = -135, this._dialog.container.addChild(this._card), this._showDialog()
            }, e.prototype._removeContent = function () {
                this._dialog.container.removeChild(this._card), this._card = null
            }, e
        }(o.TaskRewardDialogBase);
    e.TaskRewardDialogExtraSupply = s
}