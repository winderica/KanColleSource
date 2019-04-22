const function1182 = function (t, e, i) {
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
    var o = i(117),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._tabs = [], i._createTab(0, e), i._createTab(9, e), i._createTab(1, e), i._createTab(2, e), i._createTab(3, e), i._createTab(4, e), i._createTab(5, e), i
            }
            return n(e, t), e.prototype._createTab = function (t, e) {
                var i = new a(t, e);
                i.y = 43 * this._tabs.length, this.addChild(i), this._tabs.push(i)
            }, e.prototype.initialize = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.update = function (t) {
                for (var e = 0, i = this._tabs; e < i.length; e++) {
                    var n = i[e];
                    n.selected = n.type == t
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container);
    e.TabContainer = s;
    var a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._activated = !1, n._selected = !1, n._onClick = function () {
                null != n._cb_onChange && n._cb_onChange(n._type)
            }, n._type = e, n._cb_onChange = i, n.interactive = !0, n
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
                this._selected != t && (this._selected = t, 1 == this._selected && 1 == this._activated ? this._deactivate() : 0 == this._selected && 1 == this._activated && this._activate(), this._update())
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this._update()
        }, e.prototype.activate = function () {
            this._activated = !0, 1 != this._selected && this._activate()
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this._deactivate(), this._cb_onChange = null
        }, e.prototype._activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
        }, e.prototype._update = function () {
            0 == this._selected ? this.texture = this._getTexture() : this.texture = this._getTextureOn()
        }, e.prototype._getTexture = function () {
            var t;
            if (0 == this._type) t = 20;
            else if (1 == this._type) t = 24;
            else if (2 == this._type) t = 26;
            else if (3 == this._type) t = 28;
            else if (4 == this._type) t = 30;
            else if (5 == this._type) t = 32;
            else {
                if (9 != this._type) return PIXI.Texture.EMPTY;
                t = 22
            }
            return o.DUTY_COMMON.getTexture(t)
        }, e.prototype._getTextureOn = function () {
            var t;
            if (0 == this._type) t = 21;
            else if (1 == this._type) t = 25;
            else if (2 == this._type) t = 27;
            else if (3 == this._type) t = 29;
            else if (4 == this._type) t = 31;
            else if (5 == this._type) t = 33;
            else {
                if (9 != this._type) return PIXI.Texture.EMPTY;
                t = 23
            }
            return o.DUTY_COMMON.getTexture(t)
        }, e
    }(PIXI.Sprite)
}