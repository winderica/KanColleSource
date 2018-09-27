const function1438 = function (t, e, i) {
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
    var o = i(12), r = i(431), s = i(1439), a = i(1440), _ = i(15), u = i(1441), l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._friend = e, i._wave1 = new o.Sprite, i._wave1.anchor.set(.5), i._wave1.scale.set(0), i._wave2 = new o.Sprite, i._wave2.anchor.set(.5), i._wave2.scale.set(0), i._bg = new o.Sprite, i._bg.anchor.set(.5), i._bg.scale.set(0), i._points = new PIXI.Sprite, i._touch_plane = new u.TouchPlane(e), i.addChild(i._wave1), i.addChild(i._wave2), i.addChild(i._bg), i.addChild(i._points), i.addChild(i._touch_plane), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "touch_plane", {
            get: function () {
                return this._touch_plane
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._wave1.texture = _.BATTLE_MAIN.getTexture(88), this._wave2.texture = _.BATTLE_MAIN.getTexture(88), this._bg.texture = _.BATTLE_MAIN.getTexture(87)
        }, e.prototype.show = function (t, e, i, n) {
            0 == e ? this._show(t, i) : this._showCombined(t, e, i, n)
        }, e.prototype.wave = function () {
            var t = this;
            null == this._wave_tweens && 0 != this._bg.scale.x && (this._wave_tweens = new Array(2), this._wave_tweens[0] = createjs.Tween.get(this._wave1).to({
                scaleX: 1,
                scaleY: 1
            }, 800).to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 200).call(function () {
                t._wave1.scale.set(0), t._wave1.alpha = 1
            }), this._wave_tweens[1] = createjs.Tween.get(this._wave2).wait(400).to({
                scaleX: 1,
                scaleY: 1
            }, 800).to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 200).call(function () {
                t._wave2.scale.set(0), t._wave2.alpha = 1, t._wave_tweens = null
            }))
        }, e.prototype._show = function (t, e) {
            var i = this, n = createjs.Tween.get(this._bg);
            n.to({ scaleX: 1, scaleY: 1 }, 800), e <= 0 || n.call(function () {
                var n = new r.FormationPoints(i._friend);
                n.scale.set(.65), n.initialize(t, e), i._points.addChild(n), 1 == i._friend && (n.rotation = Math.PI), n.show()
            })
        }, e.prototype._showCombined = function (t, e, i, n) {
            var o = this, r = createjs.Tween.get(this._bg);
            r.to({ scaleX: 1, scaleY: 1 }, 800), i <= 0 || r.call(function () {
                var r = new s.FormationPointsCombinedMain(o._friend);
                r.initialize(t, i, e), o._points.addChild(r);
                var _ = new a.FormationPointsCombinedSub(o._friend);
                _.initialize(t, n), o._points.addChild(_), 0 == o._friend && (r.rotation = Math.PI, _.rotation = Math.PI), r.show(), _.show()
            })
        }, e
    }(PIXI.Container);
    e.Rader = l
}