const function461 = function (t, e, i) {
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
    var o = i(2),
        r = i(27),
        s = i(6),
        a = i(16),
        _ = i(62),
        l = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o.DELAYS = [0, 266, 33, 366, 133, 200], o._scene = e, o._data = i, o._ships_e = n, o._damage_cutin = new _.PhaseDamageCutin(e), o
            }
            return n(e, t), e.prototype._start = function () {
                for (var t = this, e = this._scene.view.layer_content, i = new r.ParallelTask, n = 0; n < 6; n++) {
                    var o = new PIXI.Point(180 - 24 * n, -60),
                        a = (18 + 3 * n) / 180 * Math.PI,
                        _ = new h(e, o, a, this.DELAYS[n]);
                    i.add(_)
                }
                for (var l = [], p = this._ships_e, n = 0; n < p.length; n++) {
                    var d = p[n];
                    if (null != d && !(d.hp_now <= 0)) {
                        var f = new u(this._scene, this._data, this._damage_cutin, d, 1e3);
                        if (i.add(f), 1 == this._data.isShield(n)) {
                            var y = this._scene.view.bannerGroupLayer.getBanner(d),
                                m = this._scene.view.bannerGroupLayer.getShieldTargetBanner(y); - 1 == l.indexOf(m) && l.push(m)
                        }
                    }
                }
                for (var v = 0, g = l; v < g.length; v++) {
                    var b = g[v];
                    i.add(new c(this._scene, b, 1e3))
                }
                s.SE.play("101"), i.start(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._data = null, this._ships_e = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.PhaseSupportHou = l;
    var u = function (t) {
            function e(e, i, n, o, r) {
                void 0 === r && (r = 0);
                var s = t.call(this) || this;
                return s.__start = function () {
                    var t = s._scene.view.bannerGroupLayer.getBanner(s._defender),
                        e = s._defender.index,
                        i = s._data.getDamage(e),
                        n = s._data.getHitType(e),
                        o = s._data.isShield(e);
                    t.moveAtDamage(o);
                    var r = t.getGlobalPos();
                    s._scene.view.layer_explosion.playExplosionLarge(r.x, r.y), s._scene.view.layer_damage.showAtBanner(t, i, n), createjs.Tween.get(null).wait(200).call(function () {
                        s._damage_cutin.causeDamage(s._defender, i), t.updateHp(s._defender.hp_now)
                    }).wait(600).call(function () {
                        s._endTask()
                    })
                }, s._scene = e, s._data = i, s._damage_cutin = n, s._defender = o, s._delay = r, s
            }
            return n(e, t), e.prototype._start = function () {
                this._delay > 0 ? createjs.Tween.get(null).wait(this._delay).call(this.__start) : this.__start()
            }, e.prototype._endTask = function () {
                this._scene = null, this._data = null, this._damage_cutin = null, this._defender = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase),
        c = function (t) {
            function e(e, i, n) {
                void 0 === n && (n = 0);
                var o = t.call(this) || this;
                return o.__start = function () {
                    o._scene.view.layer_damage.showShieldAtBanner(o._target), o._endTask()
                }, o._scene = e, o._target = i, o._delay = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._delay > 0 ? createjs.Tween.get(null).wait(this._delay).call(this.__start) : this.__start()
            }, e.prototype._endTask = function () {
                this._scene = null, this._target = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase),
        h = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r.__start = function () {
                    r._layer.addChild(r._canvas), r._canvas.rotation = r._rotate, r._createBulletTween(0, 0, 0, 318, -2, 441, -2), r._createBulletTween(0, -3, 100, 318, -6, 441, -8), r._createBulletTween(0, 2, 200, 326, 0, 452, -2), r._createBulletTween(0, -6, 233, 333, 0, 462, 3), r._createBulletTween(0, 0, 300, 333, -5, 500, -6), r._createBulletTween(0, 3, 400, 302, -5, 452, -8), r._createBulletTween(0, 2, 433, 327, 5, 491, 6).call(function () {
                        r._layer.removeChild(r._canvas), r._endTask()
                    })
                }, r._canvas = new PIXI.Container, r._layer = e, r._pos = i, r._rotate = n, r._delay = o, r
            }
            return n(e, t), e.prototype._start = function () {
                this._delay > 0 ? createjs.Tween.get(null).wait(this._delay).call(this.__start) : this.__start()
            }, e.prototype._createBulletTween = function (t, e, i, n, o, r, s) {
                var a = new p;
                return a.position.set(this._pos.x + t, this._pos.y + e), a.scale.set(.36), a.initialize(), this._canvas.addChild(a), createjs.Tween.get(a).wait(i).to({
                    x: this._pos.x + n,
                    y: this._pos.y + o
                }, 500).to({
                    x: this._pos.x + r,
                    y: this._pos.y + s,
                    alpha: 0
                }, 200)
            }, e
        }(o.TaskBase),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._img.x = -27, e._img.y = -15, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = a.BATTLE_MAIN.getTexture(41)
            }, e
        }(PIXI.Container)
}