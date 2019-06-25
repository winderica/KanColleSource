const function1460 = function (t, e, i) {
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
    var o = i(12),
        r = i(433),
        s = i(1461),
        a = i(1462),
        _ = i(16),
        u = i(1463),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._friend = e, i._wave1 = new o.Sprite, i._wave1.anchor.set(.5), i._wave1.scale.set(0), i._wave2 = new o.Sprite, i._wave2.anchor.set(.5), i._wave2.scale.set(0), i._bg = new o.Sprite, i._bg.anchor.set(.5), i._bg.scale.set(0), i._points = new PIXI.Sprite, i._longRange = new PIXI.Container, i._longRange.position.set(-100, -85), i._touch_plane = new u.TouchPlane(e), i.addChild(i._wave1), i.addChild(i._wave2), i.addChild(i._bg), i.addChild(i._points), i.addChild(i._longRange), i.addChild(i._touch_plane), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "touch_plane", {
                get: function () {
                    return this._touch_plane
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._wave1.texture = _.BATTLE_MAIN.getTexture(84), this._wave2.texture = _.BATTLE_MAIN.getTexture(84), this._bg.texture = _.BATTLE_MAIN.getTexture(83)
            }, e.prototype.show = function (t, e, i, n, o) {
                null != this._lader_tweens && (this._lader_tweens.setPaused(!0), this._lader_tweens.removeAllEventListeners(), this._lader_tweens = null, this._longRange.removeChildren()), 0 == e ? this._show(t, i, o) : this._showCombined(t, e, i, n, o)
            }, e.prototype.wave = function () {
                var t = this;
                null == this._wave_tweens && 0 != this._bg.scale.x && (this._wave_tweens = new Array(2), this._wave_tweens[0] = createjs.Tween.get(this._wave1).to({
                    scaleX: 1,
                    scaleY: 1
                }, 800).to({
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                }, 200).call(function () {
                    t._wave1.scale.set(0), t._wave1.alpha = 1
                }), this._wave_tweens[1] = createjs.Tween.get(this._wave2).wait(400).to({
                    scaleX: 1,
                    scaleY: 1
                }, 800).to({
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                }, 200).call(function () {
                    t._wave2.scale.set(0), t._wave2.alpha = 1, t._wave_tweens = null
                }))
            }, e.prototype._show = function (t, e, i) {
                var n = this,
                    o = createjs.Tween.get(this._bg);
                o.to({
                    scaleX: 1,
                    scaleY: 1
                }, 800), i && o.call(function () {
                    n.showLongRangeRader()
                }), e <= 0 || o.call(function () {
                    var i = new r.FormationPoints(n._friend);
                    i.scale.set(.65), i.initialize(t, e), n._points.addChild(i), 1 == n._friend && (i.rotation = Math.PI), i.show()
                })
            }, e.prototype._showCombined = function (t, e, i, n, o) {
                var r = this,
                    _ = createjs.Tween.get(this._bg);
                _.to({
                    scaleX: 1,
                    scaleY: 1
                }, 800), o && _.call(function () {
                    r.showLongRangeRader()
                }), i <= 0 || _.call(function () {
                    var o = new s.FormationPointsCombinedMain(r._friend);
                    o.initialize(t, i, e), r._points.addChild(o);
                    var _ = new a.FormationPointsCombinedSub(r._friend);
                    _.initialize(t, n), r._points.addChild(_), 0 == r._friend && (o.rotation = Math.PI, _.rotation = Math.PI), o.show(), _.show()
                })
            }, e.prototype.showLongRangeRader = function () {
                var t = new o.Sprite;
                t.texture = _.BATTLE_MAIN.getTexture(81);
                var e = new o.Sprite;
                e.texture = _.BATTLE_MAIN.getTexture(82), e.alpha = 0, this._longRange.addChild(e, t), this._longRange.alpha = 0, createjs.Tween.get(this._longRange).to({
                    alpha: 1
                }, 800), this._lader_tweens = createjs.Tween.get(e), this._lader_tweens.loop = !0, this._lader_tweens.to({
                    alpha: 1
                }, 500).to({
                    alpha: 0
                }, 500)
            }, e
        }(PIXI.Container);
    e.Rader = l
}