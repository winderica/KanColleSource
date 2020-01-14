const function485 = function (t, e, i) {
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
    var o = i(22),
        r = i(6),
        s = i(180),
        a = i(1488),
        _ = i(1489),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._under_layer = new PIXI.Sprite, e._over_layer = new PIXI.Sprite, e.addChild(e._under_layer), e.addChild(e._over_layer), e
            }
            return n(e, t), e.prototype.playDamageExplosion = function (t, e, i, n) {
                void 0 === n && (n = null), i < 0 ? null != n && n() : i < 16 ? this.playExplosionSmall(t, e, n) : i < 40 ? this.playExplosionMiddle(t, e, n) : this.playExplosionLarge(t, e, n)
            }, e.prototype.playExplosionSmall = function (t, e, i) {
                void 0 === i && (i = null), r.SE.play("102"), this._explode(t, e, i)
            }, e.prototype.playExplosionMiddle = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null), createjs.Tween.get(this).call(function () {
                    r.SE.play("103"), n._explode(t - 26, e + 35)
                }).wait(100).call(function () {
                    n._explode(t + 27, e - 23, i)
                })
            }, e.prototype.playExplosionLarge = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null), createjs.Tween.get(this).call(function () {
                    r.SE.play("104"), n._explode(t - 5, e + 33)
                }).wait(100).call(function () {
                    n._explode(t + 48, e - 24)
                }).wait(100).call(function () {
                    n._explode(t - 50, e - 8, i)
                })
            }, e.prototype.playExplosions = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null), createjs.Tween.get(null).wait(166).call(function () {
                    n._explode(t - 98, e + 135)
                }).wait(33).call(function () {
                    n._explode(t - 47, e + 84)
                }).wait(33).call(function () {
                    n._explode(t, e + 30)
                }).wait(33).call(function () {
                    n._explode(t + 21, e - 27)
                }).wait(33).call(function () {
                    n._explode(t + 56, e - 95)
                }).wait(33).call(function () {
                    n._explode(t - 92, e - 42)
                }).wait(33).call(function () {
                    n._explode(t + 50, e + 134)
                }).wait(33).call(function () {
                    n._explode(t - 27, e - 80)
                }).wait(33).call(function () {
                    n._explode(t + 36, e - 161)
                }).wait(33).call(function () {
                    n._explode(t - 66, e - 150)
                }).wait(33).call(function () {
                    n._explode(t + 81, e + 44), n._explode(t - 89, e - 53)
                }).wait(33).call(function () {
                    n._explode(t - 68, e + 146, i)
                })
            }, e.prototype._explode = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null);
                var o = new s.Explosion;
                o.position.set(t, e), this.addChild(o), o.play(function () {
                    n.removeChild(o), null != i && i()
                })
            }, e.prototype.playTorpedoWaterColumn = function (t, e) {
                void 0 === e && (e = null);
                var i = t.getGlobalPos(!0);
                i.y += o.BannerSize.H / 2, 1 == t.friend ? (i.x += o.BannerSize.W / 2 + 45, this.playTorpedoWaterColumnToFriend(i.x, i.y, e)) : (i.x -= o.BannerSize.W / 2 + 45, this.playTorpedoWaterColumnToEnemy(i.x, i.y, e))
            }, e.prototype.playTorpedoWaterColumnToFriend = function (t, e, i) {
                void 0 === i && (i = null), this._playTorpedoWaterColumn(!0, t, e, i)
            }, e.prototype.playTorpedoWaterColumnToEnemy = function (t, e, i) {
                void 0 === i && (i = null), this._playTorpedoWaterColumn(!1, t, e, i)
            }, e.prototype._playTorpedoWaterColumn = function (t, e, i, n) {
                var o = this;
                void 0 === n && (n = null);
                var r = new a.TorpedoWaterColumn;
                r.initialize(), t && (r.scale.x = -1), r.position.set(e, i), this.addChild(r), r.play(), r.once("complete", function () {
                    o.removeChild(r), null != n && n()
                })
            }, e.prototype.playWaterColumnToFriend = function (t, e, i) {
                void 0 === i && (i = null), this._playWaterColumn(!0, t, e, i)
            }, e.prototype.playWaterColumnToEnemy = function (t, e, i) {
                void 0 === i && (i = null), this._playWaterColumn(!1, t, e, i)
            }, e.prototype._playWaterColumn = function (t, e, i, n) {
                var o = this;
                void 0 === n && (n = null);
                var r = new _.WaterColumn;
                r.initialize(), t && (r.scale.x = -1), r.position.set(e, i), this.addChild(r), r.play(), r.once("complete", function () {
                    o.removeChild(r), null != n && n()
                })
            }, e
        }(PIXI.Container);
    e.LayerExplosion = u
}