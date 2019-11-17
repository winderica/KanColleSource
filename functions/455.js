const function455 = function (t, e, i) {
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
    var o = i(5),
        r = i(17),
        s = i(12),
        a = i(16),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.FadeBox(.8), e._bg.hide(0), e._content = new PIXI.Container, e._overlay = new c, e.addChild(e._bg), e.addChild(e._content), e.addChild(e._overlay), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "content", {
                get: function () {
                    return this._content
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "overlay", {
                get: function () {
                    return this._overlay
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._overlay.initialize()
            }, e
        }(PIXI.Container);
    e.CutinCanvasFunnel = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._telop_bg = new PIXI.Sprite, e._telop_bg.anchor.set(.5), e._laser_effect = new u, e._laser_effect.visible = !1, e._ship = new PIXI.Sprite, e._ship.alpha = 0, e._ship_mask = new PIXI.Graphics, e._plane1 = new s.Sprite, e._plane2 = new s.Sprite, e._plane3 = new s.Sprite, e.addChild(e._telop_bg), e.addChild(e._plane3), e.addChild(e._laser_effect), e.addChild(e._ship), e.addChild(e._ship_mask), e.addChild(e._plane2), e.addChild(e._plane1), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "telop_bg", {
            get: function () {
                return this._telop_bg
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "laser_effect", {
            get: function () {
                return this._laser_effect
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ship", {
            get: function () {
                return this._ship
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ship_mask", {
            get: function () {
                return this._ship_mask
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "plane1", {
            get: function () {
                return this._plane1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "plane2", {
            get: function () {
                return this._plane2
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "plane3", {
            get: function () {
                return this._plane3
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function (t) {
            this._ship_mask.beginFill(16711680, .3), 1 == t ? (this._telop_bg.texture = PIXI.Texture.fromFrame("battle_telop_kkcutin_f"), this._ship_mask.drawPolygon([new PIXI.Point(0, 0), new PIXI.Point(o.default.width, 0), new PIXI.Point(o.default.width, o.default.height), new PIXI.Point(o.default.width / 4 * 3, o.default.height), new PIXI.Point(0, o.default.height / 3 * 2)])) : (this._telop_bg.texture = PIXI.Texture.fromFrame("battle_telop_kkcutin_e"), this._ship_mask.drawPolygon([new PIXI.Point(0, 0), new PIXI.Point(o.default.width, 0), new PIXI.Point(o.default.width, o.default.height / 3 * 2), new PIXI.Point(o.default.width / 4, o.default.height), new PIXI.Point(0, o.default.height)])), this._ship_mask.endFill()
        }, e
    }(PIXI.Container);
    e.CutinCanvasFunnelOnce = l;
    var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.lineStyle(2.6, 65535), e.moveTo(24, 198), e.lineTo(-420, -105), e.moveTo(90, 174), e.lineTo(-90, -200), e.moveTo(177, 177), e.lineTo(420, -195), e
            }
            return n(e, t), e
        }(PIXI.Graphics),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._content = new PIXI.Graphics, e._content.visible = !1, e._gradient = new PIXI.Sprite, e._gradient.visible = !1, e.addChild(e._content), e._content.addChild(e._gradient), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "showed", {
                get: function () {
                    return this._content.visible
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._gradient.texture = a.BATTLE_MAIN.getTexture(42), this._gradient.height = o.default.height, this._content.beginFill(0), this._content.drawRect(0, 0, o.default.width, o.default.height), this._content.endFill()
            }, e.prototype.showFromRight = function (t) {
                void 0 === t && (t = null), 1 != this._content.visible && (this._content.x = this._gradient.width + o.default.width, this._gradient.scale.x = 1, this._gradient.x = -this._gradient.width, this._show(t))
            }, e.prototype.showFromLeft = function (t) {
                void 0 === t && (t = null), 1 != this._content.visible && (this._content.x = -this._gradient.width - o.default.width, this._gradient.scale.x = -1, this._gradient.x = o.default.width + this._gradient.width, this._show(t))
            }, e.prototype.hideToRight = function (t) {
                void 0 === t && (t = null), 0 != this._content.visible && (this._gradient.scale.x = 1, this._gradient.x = -this._gradient.width, this._hide(o.default.width + this._gradient.width, t))
            }, e.prototype.hideToLeft = function (t) {
                void 0 === t && (t = null), 0 != this._content.visible && (this._gradient.scale.x = -1, this._gradient.x = o.default.width + this._gradient.width, this._hide(-o.default.width - this._gradient.width, t))
            }, e.prototype._show = function (t) {
                var e = this;
                void 0 === t && (t = null), this._stopAnimation(), this._gradient.visible = !0, this._content.visible = !0, this._t = createjs.Tween.get(this._content).to({
                    x: 0
                }, 250).call(function () {
                    e._gradient.visible = !1, null != t && t()
                })
            }, e.prototype._hide = function (t, e) {
                var i = this;
                void 0 === e && (e = null), this._stopAnimation(), this._gradient.visible = !0, this._t = createjs.Tween.get(this._content).to({
                    x: t
                }, 250).call(function () {
                    i._gradient.visible = !1, i._content.visible = !1, null != e && e()
                })
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container)
}