const function1035 = function (t, e, i) {
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
    var o = i(39),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !0, i._activated = !1, i._mouseover = !1, i._onMouseOver = function () {
                    i._mouseover = !0, i._updateTexture()
                }, i._onMouseOut = function () {
                    i._mouseover = !1, i._updateTexture()
                }, i._cb_onClick = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (this._enabled = t, this._enabled ? this._activated && this._activate() : this.deactivate(), this._updateTexture())
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this.interactive = !0, this._updateTexture()
            }, e.prototype.activate = function () {
                1 != this._activated && this._activate()
            }, e.prototype.deactivate = function () {
                this._activated = !1, this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._cb_onClick)
            }, e.prototype._activate = function () {
                this._activated = !0, 0 != this._enabled && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._cb_onClick))
            }, e.prototype._updateTexture = function () {
                0 == this._enabled ? this.texture = o.SALLY_EXPEDITION.getTexture(22) : this._mouseover ? this.texture = o.SALLY_EXPEDITION.getTexture(23) : this.texture = o.SALLY_EXPEDITION.getTexture(21)
            }, e
        }(PIXI.Sprite);
    e.BtnCancel = s
}