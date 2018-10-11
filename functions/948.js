const function948 = function (t, e, i) {
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
    var o = i(26), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._activated = !1, i._selected = !1, i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i._category)
            }, i._cb_onClick = e, i._bg = new PIXI.Sprite, i.addChild(i._bg), i._label = new PIXI.Sprite, i.addChild(i._label), i.interactive = !0, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "category", {
            get: function () {
                return this._category
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            }, set: function (t) {
                this._selected != t && (this._selected = t, 1 == this._activated && 0 == this._selected ? this.activate() : this._deactivate(), this._update(!1))
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._category = t, this._update(!1), 0 == t ? (this._label.texture = o.SALLY_AIRUNIT.getTexture(86), this._label.position.set(11, 12)) : 1 == t ? (this._label.texture = o.SALLY_AIRUNIT.getTexture(87), this._label.position.set(15, 9)) : 2 == t ? (this._label.texture = o.SALLY_AIRUNIT.getTexture(88), this._label.position.set(15, 15)) : 3 == t ? (this._label.texture = o.SALLY_AIRUNIT.getTexture(89), this._label.position.set(15, 15)) : 4 == t ? (this._label.texture = o.SALLY_AIRUNIT.getTexture(90), this._label.position.set(15, 14)) : this._label.texture = PIXI.Texture.EMPTY
        }, e.prototype.activate = function () {
            this._activated = !0, 1 != this._selected && 1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this._deactivate(), this._cb_onClick = null
        }, e.prototype._update = function (t) {
            0 == t && 0 == this._selected ? this._bg.texture = o.SALLY_AIRUNIT.getTexture(92) : this._bg.texture = o.SALLY_AIRUNIT.getTexture(91)
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Container);
    e.AirUnitListTab = s
}