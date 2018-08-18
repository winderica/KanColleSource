const function1010 = function (t, e, i) {
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
    var o = i(53), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick()
            }, i._cb_onClick = e, i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._update(!1)
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onClick = null
        }, e.prototype._update = function (t) {
            this.texture = 1 == t ? o.SALLY_PRACTICE.getTexture(2) : o.SALLY_PRACTICE.getTexture(1)
        }, e
    }(PIXI.Sprite);
    e.BackBtn = s
}