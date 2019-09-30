const function1381 = function (t, e, i) {
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
        r = i(17),
        s = i(16),
        a = i(143),
        _ = i(184),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.FadeBox(.7, 8900331), e._bg.hide(0), e.addChild(e._bg), e._chara = new PIXI.Container, e.addChild(e._chara), e._bar1 = new u, e._bar1.position.set(600, 183), e.addChild(e._bar1), e._bar2 = new u, e._bar2.position.set(600, 392), e.addChild(e._bar2), e._bar3 = new u, e._bar3.position.set(600, 600), e.addChild(e._bar3), e._plane1 = new a.Plane(.88), e.addChild(e._plane1), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bar1", {
                get: function () {
                    return this._bar1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bar2", {
                get: function () {
                    return this._bar2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bar3", {
                get: function () {
                    return this._bar3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "plane1", {
                get: function () {
                    return this._plane1
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container);
    e.CutinKuboDayCanvas = l;
    var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._mst_id = 0, e._bg = new _.TelopBG, e.addChild(e._bg), e._plane_canvas = new PIXI.Sprite, e.addChild(e._plane_canvas);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawRect(-600, -71, 1200, 141), i.endFill(), e._plane_canvas.addChild(i), e._plane_canvas.mask = i, e._plane = new a.Plane(.85), e._plane.alpha = 0, e._plane_canvas.addChild(e._plane), e._icon = new c, e._icon.y = 72, e._icon.alpha = 0, e.addChild(e._icon), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._mst_id = t, this._friend = e, this._bg.initialize(e, !0), 1 == e ? (this._bg.x = 1500, this._plane.x = -600, this._icon.x = 677) : (this._bg.x = -1500, this._plane.x = 600, this._icon.x = -677), this._plane.initialize(t, e), this._icon.initialize(t)
            }, e.prototype.createTween = function (t) {
                var e = [];
                return this._mst_id <= 0 ? e : (e.push(createjs.Tween.get(this._bg).wait(t).to({
                    x: this._friend ? 780 : -780
                }, 300), createjs.Tween.get(this._plane).wait(t).to({
                    x: this._friend ? 386 : -386,
                    alpha: 1
                }, 250), createjs.Tween.get(this._icon).wait(t).to({
                    x: this._friend ? 96 : -96,
                    alpha: 1
                }, 200)), e)
            }, e.prototype.createTween2 = function (t) {
                var e = [];
                return e.push(createjs.Tween.get(this._plane).wait(t).to({
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 500)), e
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._img.scale.set(.75), e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._img.texture = this._getTexture(t), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height)
            }, e.prototype._getTexture = function (t) {
                var e = o.default.model.slot.getMst(t);
                if (null == e) return PIXI.Texture.EMPTY;
                switch (e.equipType) {
                    case 6:
                        return s.BATTLE_MAIN.getTexture(69);
                    case 7:
                        return s.BATTLE_MAIN.getTexture(70);
                    case 8:
                        return s.BATTLE_MAIN.getTexture(71);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Container)
}