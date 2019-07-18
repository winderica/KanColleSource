const function363 = function (t, e, i) {
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
    var o = i(30),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._enabled = !0, e._enabled_btn = new a, e.addChild(e._enabled_btn), e._disabled_btn = new _, e._disabled_btn.visible = !1, e.addChild(e._disabled_btn), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (this._enabled = t, 1 == this._enabled ? (this._enabled_btn.visible = !0, this._disabled_btn.visible = !1) : (this._enabled_btn.visible = !1, this._disabled_btn.visible = !0))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                void 0 === t && (t = null), this._enabled_btn.initialize(t), this._disabled_btn.initialize()
            }, e.prototype.activate = function () {
                this._enabled_btn.activate()
            }, e.prototype.deactivate = function () {
                this._enabled_btn.deactivate()
            }, e.prototype.dispose = function () {
                this._enabled_btn.dispose()
            }, e
        }(PIXI.Container);
    e.TempSupplyBtn = s;
    var a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onMouseOver = function () {
                    e._stopAnimation(), e._img.texture = o.SALLY_COMMON.getTexture(39), e._over.visible = !0
                }, e._onMouseOut = function () {
                    e._startAnimation(), e._over.visible = !1
                }, e._onClick = function () {
                    null != e._cb_onClick && e._cb_onClick()
                }, e._img = new PIXI.Sprite, e.addChild(e._img), e._over = new PIXI.Sprite, e._over.x = 63, e._over.y = -18, e._over.visible = !1, e.addChild(e._over), e._img.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._cb_onClick = t, this._img.texture = o.SALLY_COMMON.getTexture(37), this._over.texture = o.SALLY_COMMON.getTexture(46)
            }, e.prototype.activate = function () {
                1 != this._img.buttonMode && (this._img.buttonMode = !0, this._over.visible = !1, this._startAnimation(), this._img.on(r.EventType.MOUSEOVER, this._onMouseOver), this._img.on(r.EventType.MOUSEOUT, this._onMouseOut), this._img.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this._over.visible = !1, this._stopAnimation(), this._img.off(r.EventType.MOUSEOVER, this._onMouseOver), this._img.off(r.EventType.MOUSEOUT, this._onMouseOut), this._img.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e.prototype._startAnimation = function () {
                var t = this;
                null == this._t && (this._t = createjs.Tween.get(this), this._t.loop = !0, this._t.call(function () {
                    t._img.texture = o.SALLY_COMMON.getTexture(37)
                }), this._t.wait(300), this._t.call(function () {
                    t._img.texture = o.SALLY_COMMON.getTexture(38)
                }), this._t.wait(300))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container),
        _ = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.SALLY_COMMON.getTexture(40)
            }, e
        }(PIXI.Sprite)
}