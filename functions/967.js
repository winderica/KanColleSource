const function967 = function (t, e, i) {
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
    var o = i(27),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._img_light = new PIXI.Sprite, i._img_light.alpha = 0, i.addChild(i._img_light), i._img = new PIXI.Sprite, i._img.position.set(12, 12), i.addChild(i._img), i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = o.SALLY_AIRUNIT.getTexture(20), this._img_light.texture = o.SALLY_AIRUNIT.getTexture(23), this.update(!1)
            }, e.prototype.update = function (t) {
                this.visible = t, 1 == t ? this._activate() : this._deactivate()
            }, e.prototype.dispose = function () {
                this._deactivate(), this._cb_onClick = null
            }, e.prototype._activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick), null == this._t && (this._img_light.alpha = 0, this._t = createjs.Tween.get(this._img_light, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 1e3).to({
                    alpha: 0
                }, 1e3)))
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick), null != this._t && (this._t.setPaused(!0), this._t = null, this._img_light.alpha = 0)
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItemSupplyButton = s
}