const function389 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function (t) {
                null != i._cb_onClick && i._cb_onClick(t)
            }, i._cb_onClick = e, i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._update(!1)
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e
    }(PIXI.Sprite), a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._update = function (t) {
            this.texture = 0 == t ? o.ALBUM_MAIN.getTexture(5) : o.ALBUM_MAIN.getTexture(6)
        }, e
    }(s);
    e.NextBtn = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._update = function (t) {
            this.texture = 0 == t ? o.ALBUM_MAIN.getTexture(7) : o.ALBUM_MAIN.getTexture(8)
        }, e
    }(s);
    e.PrevBtn = _
}