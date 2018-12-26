const function227 = function (t, e, i) {
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
    var o = i(201),
        r = i(29),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._cb_onChange = n, o._btn_sortie = new a(0), o._btn_practice = new a(1), o._btn_expedition = new a(2), o._btn_expedition.enabled = i, 0 == e ? o._btn_sortie.selected = !0 : 1 == e ? o._btn_practice.selected = !0 : 2 == e && (o._btn_expedition.selected = !0), o._btn_practice.x = 129, o._btn_expedition.x = 255, o.addChild(o._btn_sortie), o.addChild(o._btn_practice), o.addChild(o._btn_expedition), o
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = this;
                this._btn_sortie.initialize(function () {
                    null != t._cb_onChange && t._cb_onChange(0)
                }), this._btn_practice.initialize(function () {
                    null != t._cb_onChange && t._cb_onChange(1)
                }), this._btn_expedition.initialize(function () {
                    null != t._cb_onChange && t._cb_onChange(2)
                })
            }, e.prototype.activate = function () {
                this._btn_sortie.activate(), this._btn_practice.activate(), this._btn_expedition.activate()
            }, e.prototype.deactivate = function () {
                this._btn_sortie.deactivate(), this._btn_practice.deactivate(), this._btn_expedition.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_sortie.dispose(), this._btn_practice.dispose(), this._btn_expedition.dispose(), this._cb_onChange = null
            }, e
        }(PIXI.Container);
    e.CompSwitchBtns = s;
    var a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._selected = !1, i._type = e, i
        }
        return n(e, t), Object.defineProperty(e.prototype, "type", {
            get: function () {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            },
            set: function (t) {
                this._selected = t, this.enabled = 0 == this._selected
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._update = function (t) {
            switch (this._type) {
                case 0:
                    return void(1 == t || 1 == this._selected ? this.texture = r.SALLY_COMMON.getTexture(57) : this.texture = r.SALLY_COMMON.getTexture(56));
                case 1:
                    return void(1 == t || 1 == this._selected ? this.texture = r.SALLY_COMMON.getTexture(52) : this.texture = r.SALLY_COMMON.getTexture(51));
                case 2:
                    return void(0 == this.enabled && 0 == this._selected ? this.texture = r.SALLY_COMMON.getTexture(54) : 1 == t || 1 == this._selected ? this.texture = r.SALLY_COMMON.getTexture(55) : this.texture = r.SALLY_COMMON.getTexture(53))
            }
            this.texture = PIXI.Texture.EMPTY
        }, e
    }(o.BtnBase)
}