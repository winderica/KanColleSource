const function1102 = function (t, e, i) {
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
                return i._owned = new a(0, e), i.addChild(i._owned), i._purchased = new a(1, e), i._purchased.x = 192, i.addChild(i._purchased), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._owned.initialize(), this._purchased.initialize()
            }, e.prototype.activate = function () {
                this._owned.activate(), this._purchased.activate()
            }, e.prototype.update = function (t) {
                this._owned.selected = t == this._owned.state, this._purchased.selected = t == this._purchased.state
            }, e.prototype.deactivate = function () {
                this._owned.deactivate(), this._purchased.deactivate()
            }, e.prototype.dispose = function () {
                this._owned.dispose(), this._purchased.dispose()
            }, e
        }(PIXI.Container);
    e.TabContainer = s;
    var a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._activated = !1, n._selected = !1, n._onMouseOver = function () {
                n._update(!0)
            }, n._onMouseOut = function () {
                n._update(!1)
            }, n._onClick = function () {
                null != n._cb_onClick && n._cb_onClick(n._state)
            }, n._state = e, n._cb_onClick = i, n.interactive = !0, n
        }
        return n(e, t), Object.defineProperty(e.prototype, "state", {
            get: function () {
                return this._state
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            },
            set: function (t) {
                this._selected != t && (this._selected = t, 0 == this._selected && 1 == this._activated ? this.activate() : 1 == this._selected && 1 == this._activated && this._deactivate(), this._update(!1))
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this._update(!1)
        }, e.prototype.activate = function () {
            this._activated = !0, 1 != this.buttonMode && 1 != this.selected && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._update = function (t) {
            0 == t && 0 == this._selected ? this.texture = this._getTexture() : this.texture = this._getTextureOn()
        }, e.prototype._getTexture = function () {
            var t;
            switch (this._state) {
                case 0:
                    t = 30;
                    break;
                case 1:
                    t = 32;
                    break;
                default:
                    return PIXI.Texture.EMPTY
            }
            return o.ITEM_ILIST.getTexture(t)
        }, e.prototype._getTextureOn = function () {
            var t;
            switch (this._state) {
                case 0:
                    t = 31;
                    break;
                case 1:
                    t = 33;
                    break;
                default:
                    return PIXI.Texture.EMPTY
            }
            return o.ITEM_ILIST.getTexture(t)
        }, e
    }(PIXI.Sprite)
}