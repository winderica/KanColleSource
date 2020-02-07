const function340 = function (t, e, i) {
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
    var o = i(1),
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onMouseOver = function () {
                    n.texture = n._textureOn
                }, n._onMouseOut = function () {
                    n.texture = n._textureOff
                }, n._onClick = function () {
                    null != n._cb_onClick && n._cb_onClick()
                }, n._textureOff = e, n._textureOn = i, n.texture = n._textureOff, n.interactive = n.buttonMode = !0, n.on(o.EventType.CLICK, n._onClick), n.on(o.EventType.MOUSEOVER, n._onMouseOver), n.on(o.EventType.MOUSEOUT, n._onMouseOut), n
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._cb_onClick = t
            }, e.prototype.dispose = function () {
                this._textureOff = null, this._textureOn = null, this.off(o.EventType.CLICK, this._onClick), this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this._cb_onClick = null, this.removeChildren()
            }, e
        }(PIXI.Sprite);
    e.CancelButton = r
}