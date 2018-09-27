const function1281 = function (t, e, i) {
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
    var o = i(20), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._stopTween()
            }, i._onMouseOut = function () {
                i._startTween()
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick()
            }, i._cb_onClick = e, i._img = new PIXI.Sprite, i._img.position.set(11, 11), i.addChild(i._img), i._over = new PIXI.Sprite, i.addChild(i._over), i.visible = !1, i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._img.texture = o.MAP_COMMON.getTexture(1), this._over.texture = o.MAP_COMMON.getTexture(2), this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick), this._startTween()
        }, e.prototype.dispose = function () {
            this._stopTween(), this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._startTween = function () {
            null == this._t && (this._over.alpha = 1, this._t = createjs.Tween.get(this._over, { loop: !0 }).to({ alpha: .1 }, 1e3).to({ alpha: 1 }, 400))
        }, e.prototype._stopTween = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this._over.alpha = 1)
        }, e
    }(PIXI.Container);
    e.PanelCancelBtn = s
}