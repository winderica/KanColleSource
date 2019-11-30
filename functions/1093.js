const function1093 = function (t, e, i) {
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
        r = i(133),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._activated = !1, n._onMouseOver = function () {
                    n._update(!0)
                }, n._onMouseOut = function () {
                    n._update(!1)
                }, n._onClick = function () {
                    null != n._cb_onClick && null != n._cb_onChange && (n._cb_onClick(), n._cb_onChange(n._mode, 0))
                }, n._mode = 1, n._cb_onChange = i, n._cb_onClick = e, n.interactive = !0, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "mode", {
                get: function () {
                    return this._mode
                },
                set: function (t) {
                    this._mode = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._ship_texture_cache = r.ALBUM_MAIN.getTexture(24), this._ship_texture_on_cache = r.ALBUM_MAIN.getTexture(25), this._slot_texture_cache = r.ALBUM_MAIN.getTexture(22), this._slot_texture_on_cache = r.ALBUM_MAIN.getTexture(23), this._update(!1)
            }, e.prototype.update = function (t) {
                this._update(t)
            }, e.prototype.activate = function () {
                1 != this._activated && (this._activated = !0, this._activate())
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._slot_texture_cache = null, this._slot_texture_on_cache = null, this._ship_texture_cache = null, this._ship_texture_on_cache = null, this._cb_onChange = null, this._cb_onClick = null
            }, e.prototype.addOnceClickEvent = function () {
                this.once(o.EventType.CLICK, this._onClick)
            }, e.prototype._update = function (t) {
                1 == t ? 1 == this._mode ? this.texture = this._slot_texture_on_cache : this.texture = this._ship_texture_on_cache : 1 == this._mode ? this.texture = this._slot_texture_cache : this.texture = this._ship_texture_cache
            }, e.prototype._activate = function () {
                this.buttonMode = !0, this.on(o.EventType.MOUSEOVER, this._onMouseOver), this.on(o.EventType.MOUSEOUT, this._onMouseOut), this.once(o.EventType.CLICK, this._onClick)
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this.off(o.EventType.CLICK, this._onClick)
            }, e
        }(PIXI.Sprite);
    e.AlbumModeSwitchBtn = s
}