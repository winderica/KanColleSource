const function375 = function (t, e, i) {
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
    var o = i(38),
        r = i(1),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._activated = !1, n._selected = !1, n._onMouseOver = function () {
                    n._update(!0)
                }, n._onMouseOut = function () {
                    n._update(!1)
                }, n._onClick = function () {
                    null != n._cb_onClick && n._cb_onClick(n._area_id)
                }, n._area_id = e, n._cb_onClick = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "selected", {
                get: function () {
                    return this._selected
                },
                set: function (t) {
                    this._selected = t, 1 == this._selected ? this.deactivate() : this.activate(), this._update(!1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._update(!1)
            }, e.prototype.activate = function () {
                1 != this._activated && (this._activated = !0, this.interactive = this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._activated = !1, this.interactive = this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Sprite);
    e.ExpeditionAreaIconBtnBase = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype._update = function (t) {
            if (this.selected || t) {
                var e = [-1, 1, 3, 5, 9, 11, 13, 7],
                    i = e[this.area_id];
                this.texture = o.SALLY_EXPEDITION.getTexture(i)
            } else {
                var e = [-1, 0, 2, 4, 8, 10, 12, 6],
                    i = e[this.area_id];
                this.texture = o.SALLY_EXPEDITION.getTexture(i)
            }
        }, e
    }(s);
    e.ExpeditionAreaIconBtn = a
}