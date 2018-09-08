const function355 = function (t, e, i) {
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
    var o = i(22), r = i(6), s = i(25), a = i(1), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._activated = !1, e._enabled = !0, e._state = -1, e._onMouseOver = function () {
                e.scale.set(1.1)
            }, e._onMouseOut = function () {
                e.scale.set(1)
            }, e._onClick = function () {
                var t;
                t = 4 == e._state ? 0 : e._state + 1, r.SE.play("223"), e.update(t, !0)
            }, e._content = new u, e.addChild(e._content), e.interactive = !0, e.hitArea = new PIXI.Rectangle(-21, -12, 42, 74), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "enabled", {
            get: function () {
                return this._enabled
            }, set: function (t) {
                this._enabled != t && (this._enabled = t, 1 == this._enabled ? 1 == this._activated && this.activate() : 1 == this._activated && this._deactivate())
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "state", {
            get: function () {
                return this._state
            }, enumerable: !0, configurable: !0
        }), e.prototype.update = function (t, e) {
            var i = this;
            this._state != t && null == this._t && (this._state = t, 0 == e ? this._content.update(t) : this._t = createjs.Tween.get(this._content).to({ scaleX: 0 }, 200, createjs.Ease.quadIn).call(function () {
                i._content.update(t)
            }).to({ scaleX: 1 }, 200, createjs.Ease.quadOut).call(function () {
                i._t = null
            }))
        }, e.prototype.activate = function () {
            this._activated = !0, 1 != this.buttonMode && 0 != this._enabled && (this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut), this.on(a.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate(), this._content.dispose(), null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut), this.off(a.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Container);
    e.AirUnitPanelWoodenTag = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e._img.position.set(-21, -12), e.addChild(e._img), e._light = new PIXI.Sprite, e._light.position.set(-24, -12), e.addChild(e._light), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._stopAnimation(), 0 == t ? (this._img.texture = s.SALLY_AIRUNIT.getTexture(116), this._light.visible = !1) : 1 == t ? (this._img.texture = s.SALLY_AIRUNIT.getTexture(117), this._light.texture = s.SALLY_AIRUNIT.getTexture(118), this._light.visible = !0, this._startAnimation()) : 2 == t ? (this._img.texture = s.SALLY_AIRUNIT.getTexture(119), this._light.texture = s.SALLY_AIRUNIT.getTexture(120), this._light.visible = !0, this._startAnimation()) : 3 == t ? (this._img.texture = s.SALLY_AIRUNIT.getTexture(121), this._light.texture = s.SALLY_AIRUNIT.getTexture(122), this._light.visible = !0, this._startAnimation()) : 4 == t ? (this._img.texture = s.SALLY_AIRUNIT.getTexture(123), this._light.texture = s.SALLY_AIRUNIT.getTexture(124), this._light.visible = !0, this._startAnimation()) : (this._img.texture = PIXI.Texture.EMPTY, this._light.visible = !1)
        }, e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            null == this._t && (this._light.alpha = 0, this._t = createjs.Tween.get(this._light, { loop: !0 }).to({ alpha: 1 }, 1e3).to({ alpha: 0 }, 300))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(o.Container)
}