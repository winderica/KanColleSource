const function1173 = function (t, e, i) {
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
    var o = i(3),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOver = function () {
                    i._update(!0), null != i._cb_onMouseOver && i._cb_onMouseOver(i._type)
                }, i._onMouseOut = function () {
                    i._update(!1), null != i._cb_onMouseOut && i._cb_onMouseOut(i._type)
                }, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick(i._type)
                }, i._type = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._cb_onMouseOver = t, this._cb_onMouseOut = e, this._cb_onClick = i, this._update(!1)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick), this._update(!1))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._update = function (t) {
                this.texture = 0 == t ? this._getTexture() : this._getTextureOn()
            }, e.prototype._getTexture = function () {
                var t;
                switch (this._type) {
                    case 0:
                        t = 25;
                        break;
                    case 1:
                        t = 27;
                        break;
                    case 2:
                        t = 29;
                        break;
                    case 3:
                        t = 31;
                        break;
                    case 4:
                        t = 33;
                        break;
                    case 5:
                        t = 35;
                        break;
                    default:
                        return PIXI.Texture.EMPTY
                }
                return o.ITEM_FSHOP.getTexture(t)
            }, e.prototype._getTextureOn = function () {
                var t;
                switch (this._type) {
                    case 0:
                        t = 26;
                        break;
                    case 1:
                        t = 28;
                        break;
                    case 2:
                        t = 30;
                        break;
                    case 3:
                        t = 32;
                        break;
                    case 4:
                        t = 34;
                        break;
                    case 5:
                        t = 36;
                        break;
                    default:
                        return PIXI.Texture.EMPTY
                }
                return o.ITEM_FSHOP.getTexture(t)
            }, e
        }(PIXI.Sprite);
    e.FurnitureTypeBtn = s
}