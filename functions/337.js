const function337 = function (t, e, i) {
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
    var o = i(3),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onMouseOver = function () {
                    e.texture = e._textureOn
                }, e._onMouseOut = function () {
                    e.texture = e._textureOff
                }, e._onClick = function () {
                    null != e._cb_onClick && e._cb_onClick()
                }, e._textureOff = o.REMODEL_MAIN.getTexture(1), e._textureOn = o.REMODEL_MAIN.getTexture(2), e.texture = e._textureOff, e.interactive = e.buttonMode = !0, e.on(r.EventType.CLICK, e._onClick), e.on(r.EventType.MOUSEOVER, e._onMouseOver), e.on(r.EventType.MOUSEOUT, e._onMouseOut), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._cb_onClick = t
            }, e.prototype.dispose = function () {
                this._textureOff = null, this._textureOn = null, this.off(r.EventType.CLICK, this._onClick), this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this._cb_onClick = null, this.removeChildren()
            }, e
        }(PIXI.Sprite);
    e.CancelButton = s
}