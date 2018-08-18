const function369 = function (t, e, i) {
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
    var o = i(1), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._enabled = !0, i._overed = !1, i._onMouseOver = function () {
                i._overed = !0, i._updateTexture()
            }, i._onMouseOut = function () {
                i._overed = !1, i._updateTexture()
            }, i._onClick = function () {
                null != i._cb && 1 == i._btn.buttonMode && i._cb()
            }, i._cb = e, i._btn = new PIXI.Sprite, i.addChild(i._btn), i._btn.interactive = !0, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "enabled", {
            set: function (t) {
                this._enabled != t && (this._enabled = t, 1 == this._enabled ? this.activate() : this.deactivate(), this._updateTexture())
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._updateTexture()
        }, e.prototype.activate = function () {
            1 != this._btn.buttonMode && 0 != this._enabled && (this._btn.buttonMode = !0, this._btn.on(o.EventType.MOUSEOVER, this._onMouseOver), this._btn.on(o.EventType.MOUSEOUT, this._onMouseOut), this._btn.on(o.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._btn.buttonMode = !1, this._btn.off(o.EventType.MOUSEOVER, this._onMouseOver), this._btn.off(o.EventType.MOUSEOUT, this._onMouseOut), this._btn.off(o.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb = null
        }, e.prototype._updateTexture = function () {
        }, e
    }(PIXI.Container);
    e.BtnGoBase = r
}