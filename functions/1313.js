const function1313 = function (t, e, i) {
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
        r = i(20),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._now = -1, e._max = 100, e._bar = new PIXI.Graphics, e._img = new PIXI.Sprite, e._light = new PIXI.Sprite, e._tp = new a, e.addChild(e._bar), e.addChild(e._img), e.addChild(e._light), e.addChild(e._tp), e.visible = !1, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "now", {
                get: function () {
                    return this._now
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "max", {
                get: function () {
                    return this._max
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                if (null == t) return this._stopLoopTween(), this._tp.enabled = !1, void(this.visible = !1);
                this._img.texture = o.default.resources.gauge.getTexture(t.image_path), this._light.texture = o.default.resources.gauge.getTexture(t.image_light_path), this._light.x = t.lightX, this._light.y = t.lightY, this._bar.x = t.barX, this._bar.y = t.barY, this._bar.clear(), this._bar.beginFill(t.barColor), this._bar.drawRect(0, 0, t.barW, t.barH), this._bar.endFill(), this._tp.visible = !1, 1 == t.isTransport() ? (this._tp.initialize(), this._tp.x = t.transportX, this._tp.y = t.transportY, this._tp.enabled = !0) : this._tp.enabled = !1, this.visible = !0, this._startLoopTween()
            }, e.prototype.update = function (t, e) {
                this._now = t, this._max = e;
                var i = this._now / this._max;
                i = Math.max(i, 0), i = Math.min(i, 1), this._bar.scale.y = i, 1 == this._tp.enabled ? (this._tp.update(t, e), this._tp.visible = !0) : this._tp.visible = !1
            }, e.prototype.dispose = function () {
                this._stopLoopTween()
            }, e.prototype._startLoopTween = function () {
                null == this._t && (this._light.alpha = 0, this._t = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 500).to({
                    alpha: 0
                }, 500))
            }, e.prototype._stopLoopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null), this._light.alpha = 0
            }, e
        }(PIXI.Container);
    e.GaugeVertical = s;
    var a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._enabled = !1, e._title = new PIXI.Sprite, e._slash = new PIXI.Sprite, e._slash.x = 62, e._now = new _, e._now.x = 30, e._max = new _, e._max.x = 68, e.addChild(e._title), e.addChild(e._slash), e.addChild(e._now), e.addChild(e._max), e
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
                this._title.texture = r.MAP_COMMON.getTexture(44), this._slash.texture = r.MAP_COMMON.getTexture(43)
            }, e.prototype.update = function (t, e) {
                this._now.update(t), this._max.update(e)
            }, e
        }(PIXI.Container),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._nums = [];
                for (var i = 0; i < 4; i++) {
                    var n = new l;
                    n.x = 8 * i, e.addChild(n), e._nums.push(n)
                }
                return e
            }
            return n(e, t), e.prototype.update = function (t) {
                t = Math.max(0, t), t = Math.min(9999, t);
                for (var e = !1, i = 0; i < this._nums.length; i++) {
                    var n = Math.pow(10, this._nums.length - i - 1),
                        o = Math.floor(t / n);
                    o > 0 || 1 == e ? (this._nums[i].update(o), e = !0) : this._nums[i].update(-1), t %= n
                }
            }, e
        }(PIXI.Container),
        l = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                t >= 0 && t <= 9 ? (this.texture = r.MAP_COMMON.getTexture(e._TEXTURES[t]), this.visible = !0) : this.visible = !1
            }, e._TEXTURES = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], e
        }(PIXI.Sprite)
}