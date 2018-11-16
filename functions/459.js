const function459 = function (t, e, i) {
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
    var o = i(2), r = i(27), s = i(6), a = i(16), _ = i(62), u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o.DELAYS = [0, 250, 33, 366, 133, 200], o._scene = e, o._data = i, o._ships_e = n, o._damage_cutin = new _.PhaseDamageCutin(e), o
        }

        return n(e, t), e.prototype._start = function () {
            for (var t = this, e = this._scene.view.layer_content, i = new r.ParallelTask, n = [], o = this._ships_e, a = 0; a < o.length; a++) {
                var _ = o[a];
                if (null != _ && !(_.hp_now <= 0)) {
                    var u = this._scene.view.bannerGroupLayer.getBanner(_);
                    if (null != u) {
                        var d = new l;
                        d.initialize(), d.x = 180 - 24 * a, d.y = -90;
                        var f = u.getGlobalPos(), y = new c(e, d, f, this.DELAYS[a]);
                        i.add(y);
                        var m = new h(this._scene, this._data, this._damage_cutin, _, 1500);
                        if (i.add(m), 1 == this._data.isShield(a)) {
                            var v = this._scene.view.bannerGroupLayer.getShieldTargetBanner(u);
                            -1 == n.indexOf(v) && n.push(v)
                        }
                    }
                }
            }
            for (var g = 0, b = n; g < b.length; g++) {
                var w = b[g];
                i.add(new p(this._scene, w, 1500))
            }
            s.SE.play("112"), i.start(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, this._data = null, this._ships_e = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.PhaseSupportRai = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.x = 1, e.anchor.y = .5, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = a.BATTLE_MAIN.getTexture(50)
        }, e
    }(PIXI.Sprite), c = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._layer = e, r._torpedo = i, r._target = n, r._delay = o, r
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._target.x - this._torpedo.x, i = this._target.y - this._torpedo.y;
            this._torpedo.rotation = Math.atan2(i, e), createjs.Tween.get(this._torpedo).wait(this._delay).call(function () {
                t._layer.addChild(t._torpedo)
            }).to({ x: this._target.x, y: this._target.y }, 1400).call(function () {
                t._layer.removeChild(t._torpedo), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._torpedo = null, this._target = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase), h = function (t) {
        function e(e, i, n, o, r) {
            void 0 === r && (r = 0);
            var s = t.call(this) || this;
            return s.__start = function () {
                var t = s._scene.view.bannerGroupLayer.getBanner(s._defender), e = s._defender.index,
                    i = s._data.getDamage(e), n = s._data.getHitType(e), o = s._data.isShield(e);
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
    }(o.TaskBase), p = function (t) {
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
    }(o.TaskBase)
}