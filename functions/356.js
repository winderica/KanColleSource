const function356 = function (t, e, i) {
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
    var o = i(29), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._selected = !1, i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i)
            }, i._area_id = e, i.interactive = !0, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "area_id", {
            get: function () {
                return this._area_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            }, set: function (t) {
                this._selected != t && (this._selected = t, this._update(!1))
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._cb_onClick = t, this._update(!1)
        }, e.prototype.activate = function () {
            0 == this.buttonMode && 0 == this._selected && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.interactive = !1, this.deactivate(), this._cb_onClick = null
        }, e.prototype._update = function (t) {
            if (1 == t || 1 == this._selected) {
                var e = [-1, 2, 4, 6, 10, 12, 14, 8];
                this._area_id > 0 && this._area_id < e.length ? this.texture = o.SALLY_COMMON.getTexture(e[this._area_id]) : this.texture = PIXI.Texture.EMPTY
            } else {
                var e = [-1, 1, 3, 5, 9, 11, 13, 7];
                this._area_id > 0 && this._area_id < e.length ? this.texture = o.SALLY_COMMON.getTexture(e[this._area_id]) : this.texture = PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Sprite);
    e.AreaIconBtn = s
}