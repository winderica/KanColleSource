const function981 = function (t, e, i) {
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
    var o = i(53), r = i(41), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._light = new PIXI.Sprite, e._content = new PIXI.Sprite, e.addChild(e._light), e.addChild(e._content), e.interactive = !0, e.buttonMode = !0, e
        }

        return n(e, t), e.prototype.update = function (t) {
            0 == t ? (this._light.visible = !1, this._content.position.set(141, 341), this._content.texture = o.SALLY_SORTIE.getTexture(14)) : (this._content.position.set(488, 353), this._content.texture = r.SALLY_EVENT.getTexture(7), this._light.texture = r.SALLY_EVENT.getTexture(8), this._light.position.set(this._content.x - 23, this._content.y - 20), this._light.visible = !0)
        }, e.prototype.show = function () {
            this._activate(), this.visible = !0
        }, e.prototype.hide = function () {
            this._deactivate(), this.visible = !1
        }, e.prototype.dispose = function () {
            this._deactivate()
        }, e.prototype._activate = function () {
            null == this._t && 0 != this._light.visible && (this._light.alpha = 0, this._t = createjs.Tween.get(this._light, { loop: !0 }).to({ alpha: 1 }, 800).to({ alpha: 0 }, 800))
        }, e.prototype._deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this._light.alpha = 0)
        }, e
    }(PIXI.Container);
    e.BtnBack = s
}