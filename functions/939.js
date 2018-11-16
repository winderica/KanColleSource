const function939 = function (t, e, i) {
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
    var o = i(26), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._txt = new PIXI.Sprite, e._txt.position.set(23, 23), e.addChild(e._txt), e._txt_on = new PIXI.Sprite, e._txt_on.position.set(11, 9), e._txt_on.alpha = 0, e.addChild(e._txt_on), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.SALLY_AIRUNIT.getTexture(65), this._txt.texture = o.SALLY_AIRUNIT.getTexture(128), this._txt_on.texture = o.SALLY_AIRUNIT.getTexture(129)
        }, e.prototype.update = function (t) {
            this.visible = t, 1 == t ? this._activate() : this._deactivate()
        }, e.prototype.dispose = function () {
            this._deactivate()
        }, e.prototype._activate = function () {
            null == this._t && (this._txt_on.alpha = 0, this._t = createjs.Tween.get(this._txt_on, { loop: !0 }).to({ alpha: 1 }, 800).to({ alpha: 0 }, 400))
        }, e.prototype._deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this._txt_on.alpha = 0)
        }, e
    }(PIXI.Sprite);
    e.AirUnitPanelItemRelocationLayer = r
}