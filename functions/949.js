const function949 = function (t, e, i) {
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
    var o = i(26),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._activated = !1, i._enabled = !0, i._onMouseOver = function () {
                    i._update(!0), null != i._t && (i._t.setPaused(!0), i._t = null, i._under.visible = !1)
                }, i._onMouseOut = function () {
                    i._update(!1), null == i._t && (i._under.visible = !1, i._t = createjs.Tween.get(null, {
                        loop: !0
                    }).wait(2e3).call(function () {
                        i._under.visible = !0
                    }).wait(2e3).call(function () {
                        i._under.visible = !1
                    }))
                }, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._under = new PIXI.Sprite, i._under.position.set(-12, -12), i.addChild(i._under), i._bg = new PIXI.Sprite, i._bg.position.set(-12, -12), i.addChild(i._bg), i._txt = new PIXI.Sprite, i._txt.position.set(-12, -12), i.addChild(i._txt), i._over = new PIXI.Sprite, i._over.position.set(-12, -12), i.addChild(i._over), i.interactive = !0, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (this._enabled = t, 1 == this._activated && (1 == this._enabled ? this.activate() : this._deactivate()), this._update(!1))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._under.texture = o.SALLY_AIRUNIT.getTexture(26), this._bg.texture = o.SALLY_AIRUNIT.getTexture(24), this._txt.texture = o.SALLY_AIRUNIT.getTexture(27), this._over.texture = o.SALLY_AIRUNIT.getTexture(26), null != this._t && (this._t.setPaused(!0), this._t = null), this._update(!1)
            }, e.prototype.activate = function () {
                this._activated = !0, 0 != this._enabled && 1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.MOUSEOVER, this._onMouseOver), this.on(r.EventType.MOUSEOUT, this._onMouseOut), this.on(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), null != this._t && (this._t.setPaused(!0), this._t = null, this._cb_onClick = null)
            }, e.prototype._deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.MOUSEOVER, this._onMouseOver), this.off(r.EventType.MOUSEOUT, this._onMouseOut), this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype._update = function (t) {
                0 == this._enabled ? (this._under.visible = !1, this._bg.texture = o.SALLY_AIRUNIT.getTexture(25), this._txt.visible = !1, this._over.visible = !1) : 1 == t ? (this._under.visible = !1, this._bg.texture = o.SALLY_AIRUNIT.getTexture(24), this._txt.visible = !0, this._over.visible = !0) : (this._bg.texture = o.SALLY_AIRUNIT.getTexture(24), this._txt.visible = !0, this._over.visible = !1)
            }, e
        }(PIXI.Container);
    e.AirUnitExtendBtn = s
}