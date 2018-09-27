const function353 = function (t, e, i) {
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
    var o = i(26), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                null == i._t && (i._light.alpha = 0, i._t = createjs.Tween.get(i._light, { loop: !0 }).to({ alpha: 1 }, 500).to({ alpha: 0 }, 500))
            }, i._onMouseOut = function () {
                null != i._t && (i._t.setPaused(!0), i._t = null, i._light.alpha = 0)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick()
            }, i._light = new PIXI.Sprite, i._light.position.set(-12, -12), i.addChild(i._light), i._light.alpha = 0, i._img = new PIXI.Sprite, i.addChild(i._img), i._img.interactive = !0, i._cb_onClick = e, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._img.texture = o.SALLY_AIRUNIT.getTexture(20), this._light.texture = o.SALLY_AIRUNIT.getTexture(21)
        }, e.prototype.update = function (t) {
            this.visible = t, 1 == t ? this._activate() : this._deactivate()
        }, e.prototype.dispose = function () {
            this._deactivate(), this._onMouseOut()
        }, e.prototype._activate = function () {
            1 != this._img.buttonMode && (this._img.buttonMode = !0, this._img.on(r.EventType.MOUSEOVER, this._onMouseOver), this._img.on(r.EventType.MOUSEOUT, this._onMouseOut), this._img.on(r.EventType.CLICK, this._onClick))
        }, e.prototype._deactivate = function () {
            this._img.buttonMode = !1, this._img.off(r.EventType.MOUSEOVER, this._onMouseOver), this._img.off(r.EventType.MOUSEOUT, this._onMouseOut), this._img.off(r.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Container);
    e.AirUnitPanelSupplyAllBtn = s
}