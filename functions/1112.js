const function1112 = function (t, e, i) {
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
        function e(e, i) {
            var n = t.call(this) || this;
            return n._activated = !1, n._enabled = !0, n._onClick = function () {
                null != n._cb_onClick && n._cb_onClick(n._target)
            }, n._target = e, n._cb_onClick = i, n.interactive = !0, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "enabled", {
            get: function () {
                return this._enabled
            }, set: function (t) {
                this._enabled != t && (this._enabled = t, 1 == this._enabled ? 1 == this._activated && this._activate() : 1 == this._activated && this._deactivate(), this._update())
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e) {
            void 0 === e && (e = null), this._t = t, this._t_off = null == e ? t : e, this._update()
        }, e.prototype.activate = function () {
            1 != this._activated && (this._activated = !0, 0 != this._enabled && this._activate())
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onClick = null, this._t = null, this._t_off = null
        }, e.prototype._update = function () {
            0 == this._enabled ? this.texture = this._t_off : this.texture = this._t
        }, e.prototype._activate = function () {
            this.buttonMode = !0, this.once(o.EventType.CLICK, this._onClick)
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(o.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Sprite);
    e.BtnBase = r
}