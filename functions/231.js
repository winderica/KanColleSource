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
    var o = i(0),
        r = i(9),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._now = -1, e._max = 100, e._tp_visible = !0, e._bar = new a, e._img = new PIXI.Sprite, e._light = new PIXI.Sprite, e._tp = new _, e.addChild(e._bar), e.addChild(e._img), e.addChild(e._light), e.addChild(e._tp), e.visible = !1, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "tp_visible", {
                get: function () {
                    return this._tp_visible
                },
                set: function (t) {
                    this._tp_visible = t, this._tp.visible = this._tp.enabled && this._tp_visible
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                if (null == t) return this._stopTween(), this._tp.enabled = !1, void(this.visible = !1);
                this._img.texture = o.default.resources.gauge.getTexture(t.image_path), this._light.texture = o.default.resources.gauge.getTexture(t.image_light_path), this._light.x = t.lightX, this._light.y = t.lightY, this._bar.x = t.barX, this._bar.y = t.barY, this._bar.initialize(t.barColor, t.barW, t.barH), this._tp.visible = !1, 1 == t.isTransport() ? (this._tp.initialize(), this._tp.x = t.transportX, this._tp.y = t.transportY, this._tp.enabled = !0) : this._tp.enabled = !1, this.visible = !0, this._startTween()
            }, e.prototype.update = function (t, e, i) {
                void 0 === i && (i = null), this._now = t, this._max = e;
                var n = this._now / this._max;
                n = Math.max(n, 0), n = Math.min(n, 1), this._bar.update(n, i), 1 == this._tp.enabled ? (this._tp.update(t, e), this._tp.visible = this._tp_visible) : this._tp.visible = !1
            }, e.prototype.dispose = function () {
                this._stopTween(), this._bar.dispose()
            }, e.prototype._startTween = function () {
                null == this._t && (this._light.alpha = 0, this._t = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 500).to({
                    alpha: 0
                }, 500))
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null), this._light.alpha = 0
            }, e
        }(PIXI.Container);
    e.GaugeHorizontal = s;
    var a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this.clear(), this.beginFill(t), this.drawRect(0, 0, e, i), this.endFill()
            }, e.prototype.update = function (t, e) {
                if (void 0 === e && (e = null), this._stopAnimation(), null == e) this.scale.x = t;
                else {
                    var i = this.width - this.width * t,
                        n = i / 2 / 30 * 1e3;
                    this._t = createjs.Tween.get(this.scale).to({
                        x: t
                    }, n).call(function () {
                        null != e && e()
                    })
                }
            }, e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Graphics),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._enabled = !1, e._title = new PIXI.Sprite, e._slash = new PIXI.Sprite, e._slash.x = 62, e._now = new l, e._now.x = 30, e._max = new l, e._max.x = 68, e.addChild(e._title), e.addChild(e._slash), e.addChild(e._now), e.addChild(e._max), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                set: function (t) {
                    this._enabled = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._title.texture = r.COMMON_MISC.getTexture(66), this._slash.texture = r.COMMON_MISC.getTexture(65)
            }, e.prototype.update = function (t, e) {
                this._now.update(t), this._max.update(e)
            }, e
        }(PIXI.Container),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._nums = [];
                for (var i = 0; i < 4; i++) {
                    var n = new u;
                    n.x = 8 * i, e.addChild(n), e._nums.push(n)
                }
                return e
            }
            return n(e, t), e.prototype.update = function (t) {
                if (t = Math.floor(t), t = Math.max(0, t), 0 != (t = Math.min(9999, t)))
                    for (var e = !1, i = 0; i < this._nums.length; i++) {
                        var n = Math.pow(10, this._nums.length - i - 1),
                            o = Math.floor(t / n);
                        o > 0 || 1 == e ? (this._nums[i].update(o), e = !0) : this._nums[i].update(-1), t %= n
                    } else
                        for (var i = 0; i < this._nums.length; i++) i == this._nums.length - 1 ? this._nums[i].update(0) : this._nums[i].update(-1)
            }, e
        }(PIXI.Container),
        u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                t >= 0 && t <= 9 ? (this.texture = r.COMMON_MISC.getTexture(e._TEXTURES[t]), this.visible = !0) : this.visible = !1
            }, e._TEXTURES = [55, 56, 57, 58, 59, 60, 61, 62, 63, 64], e
        }(PIXI.Sprite)
}