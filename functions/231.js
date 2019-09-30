const function231 = function (t, e, i) {
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
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._activated = !1, e._enabled = !0, e._supply_max = !1, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled != t && (this._enabled = t, 1 == this._activated && (1 == this._enabled ? this.activate() : (this._on1.visible = !1, this._on2.visible = !1, this._on3.visible = !1, this._deactivate())))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(o.SALLY_COMMON.getTexture(25));
                this._on1 = new PIXI.Sprite, this._on2 = new PIXI.Sprite, this._on3 = new PIXI.Sprite, this._on1.position.set(4, 16), this._on2.position.set(33, 16), this._on3.position.set(61, 4), this.addChild(t), this.addChild(this._on1), this.addChild(this._on2), this.addChild(this._on3), this.update(!0)
            }, e.prototype.update = function (t) {
                this._supply_max != t && (this._supply_max = t, 1 == t ? (this._on1.texture = o.SALLY_COMMON.getTexture(22), this._on2.texture = o.SALLY_COMMON.getTexture(22), this._on3.texture = o.SALLY_COMMON.getTexture(21)) : (this._on1.texture = o.SALLY_COMMON.getTexture(24), this._on2.texture = o.SALLY_COMMON.getTexture(24), this._on3.texture = o.SALLY_COMMON.getTexture(23)))
            }, e.prototype.activate = function () {
                var t = this;
                this._activated = !0, null == this._t && (this._on1.visible = !1, this._on2.visible = !1, this._on3.visible = !1, 0 != this._enabled && (this._t = createjs.Tween.get(this, {
                    loop: !0
                }).wait(300).call(function () {
                    t._on1.visible = !0
                }).wait(300).call(function () {
                    t._on1.visible = !1, t._on2.visible = !0
                }).wait(300).call(function () {
                    t._on2.visible = !1, t._on3.visible = !0
                }).wait(300).call(function () {
                    t._on3.visible = !1
                })))
            }, e.prototype.deactivate = function () {
                this._activated = !1, this._deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren()
            }, e.prototype._deactivate = function () {
                this._stopAnimation(), this._on1.visible = !1, this._on2.visible = !1, this._on3.visible = !1
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container);
    e.CompArrow2 = r
}