const function1032 = function (t, e, i) {
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
    var o = i(41), r = i(374), s = function (t) {
        function e(e, i) {
            var n = t.call(this, e, i) || this;
            return n._light = new PIXI.Sprite, n.addChild(n._light), n
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.SALLY_EVENT.getTexture(2), this._light.texture = o.SALLY_EVENT.getTexture(3), this._update(!1)
        }, e.prototype.dispose = function () {
            this._stopTween(), t.prototype.dispose.call(this)
        }, e.prototype._update = function (t) {
            this.selected || t ? (this._light.visible = !0, this._stopTween()) : this._startTween()
        }, e.prototype._startTween = function () {
            null == this._t && (this._light.alpha = 1, this._t = createjs.Tween.get(this._light, { loop: !0 }).to({ alpha: 0 }, 700).to({ alpha: 1 }, 700))
        }, e.prototype._stopTween = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(r.ExpeditionAreaIconBtnBase);
    e.ExpeditionEventAreaIconBtn = s
}