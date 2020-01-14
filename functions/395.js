const function395 = function (t, e, i) {
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
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._activated = !1, o._selected = !1, o._onMouseOver = function () {
                    o._update(!0)
                }, o._onMouseOut = function () {
                    o._update(!1)
                }, o._onClick = function () {
                    null != o._cb_onChange && o._cb_onChange(o._mode, o._no)
                }, o._mode = e, o._no = i, o._cb_onChange = n, o.interactive = !0, o
            }
            return n(e, t), Object.defineProperty(e.prototype, "mode", {
                get: function () {
                    return this._mode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "no", {
                get: function () {
                    return this._no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this._selected
                },
                set: function (t) {
                    this._selected != t && (this._selected = t, 1 == this._selected ? this._deactivate() : 1 == this._activated && this._activate(), this._update(!1))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._texture_cache = t, this._texture_on_cache = e, this._update(!1)
            }, e.prototype.activate = function () {
                1 != this._activated && (this._activated = !0, this._activate())
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._texture_cache = null, this._texture_on_cache = null, this._cb_onChange = null
            }, e.prototype._update = function (t) {
                1 == this._selected || 1 == t ? this.texture = this._texture_on_cache : this.texture = this._texture_cache
            }, e.prototype._activate = function () {
                1 != this._selected && (this.buttonMode = !0, this.on(o.EventType.MOUSEOVER, this._onMouseOver), this.on(o.EventType.MOUSEOUT, this._onMouseOut), this.on(o.EventType.CLICK, this._onClick))
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this.off(o.EventType.CLICK, this._onClick)
            }, e
        }(PIXI.Sprite);
    e.TabBtn = r
}