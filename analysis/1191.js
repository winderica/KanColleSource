const function1191 = function (t, e, i) {
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
    var o = i(3), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.alpha = 0, e.visible = !1, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.DUTY_COMMON.getTexture(56)
        }, e.prototype.show = function () {
            var t = this;
            this.hide(), this.visible = !0, this._t = createjs.Tween.get(this).to({ alpha: 1 }, 300).wait(2e3).to({ alpha: 0 }, 300).call(function () {
                t.visible = !1
            })
        }, e.prototype.hide = function () {
            this._stopTween(), this.alpha = 0, this.visible = !1
        }, e.prototype._stopTween = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite);
    e.RewardSelectDialogFurnitureAlert = r
}