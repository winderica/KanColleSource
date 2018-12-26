const function201 = function (t, e, i) {
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
            function e() {
                var e = t.call(this) || this;
                return e._activated = !1, e._enabled = !0, e.__onMouseOver = function () {
                    e._update(!0)
                }, e.__onMouseOut = function () {
                    e._update(!1)
                }, e.__onClick = function () {
                    null != e._cb_onClick && e._cb_onClick()
                }, e.interactive = !0, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (this._enabled = t, 1 == this._enabled && 1 == this._activated ? this._activate() : this._deactivate(), this._update(!1))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                void 0 === t && (t = null), this._deactivate(), this._cb_onClick = t, 1 == this._enabled && 1 == this._activated && this.activate(), this._update(!1)
            }, e.prototype.activate = function () {
                this._activated = !0, 1 != this.buttonMode && 0 != this.enabled && this._activate()
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e.prototype._activate = function () {
                this.buttonMode = !0, this.on(o.EventType.MOUSEOVER, this._onMouseOver), this.on(o.EventType.MOUSEOUT, this._onMouseOut), this.on(o.EventType.CLICK, this._onClick)
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this.off(o.EventType.CLICK, this._onClick)
            }, e.prototype._onMouseOver = function () {
                this.__onMouseOver()
            }, e.prototype._onMouseOut = function () {
                this.__onMouseOut()
            }, e.prototype._onClick = function () {
                this.__onClick()
            }, e
        }(PIXI.Sprite);
    e.BtnBase = r
}