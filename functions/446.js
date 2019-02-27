const function446 = function (t, e, i) {
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
        r = i(2),
        s = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._scene = e, r._data = i, r._from_planes = n, r._to_ships = o, r._tasks = new Array, r
            }
            return n(e, t), e.prototype._start = function () {
                for (var t = this, e = this, i = 0, n = this._to_ships; i < n.length; i++) {
                    var o = n[i];
                    ! function (i) {
                        if (null == i) return "continue";
                        if (1 == (1 == i.friend ? e._data.stage3_f.getRai(i.index) : e._data.stage3_e.getRai(i.index)) && e._from_planes.length > 0) {
                            var n = Math.floor(Math.random() * e._from_planes.length),
                                o = e._from_planes[n],
                                r = e._scene.view.bannerGroupLayer.getBanner(i),
                                s = 1 == i.friend ? e._data.stage3_f : e._data.stage3_e,
                                _ = s.getDamage(i.index),
                                l = s.isShield(i.index),
                                u = new a(e._scene, o, r, _, l);
                            e._tasks.push(u), u.start(function () {
                                t._taskComplete(i, u)
                            })
                        }
                    }(o)
                }
                0 == this._tasks.length && this._endTask()
            }, e.prototype._taskComplete = function (t, e) {
                var i = this._tasks.indexOf(e);
                this._tasks.splice(i, 1), 0 == this._tasks.length && this._endTask()
            }, e.prototype._endTask = function () {
                this._scene = null, this._data = null, this._from_planes = null, this._to_ships = null, this._tasks = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskAerialTorpedoJet = s;
    var a = function (t) {
        function e(e, i, n, o, r) {
            var s = t.call(this) || this;
            return s._explosion = function () {
                var t = s._shield;
                if (1 == t) {
                    var e = s._scene.view.bannerGroupLayer.getShieldTargetBanner(s._to_banner);
                    s._scene.view.layer_damage.showShieldAtBanner(e)
                }
                s._to_banner.moveAtDamage(t);
                var i = s._to_banner.getGlobalPos(!0),
                    n = s._scene.view;
                n.layer_explosion.playDamageExplosion(i.x, i.y, s._damage), n.layer_explosion.playTorpedoWaterColumn(s._to_banner, function () {
                    s._endTask()
                })
            }, s._scene = e, s._from_plane = i, s._to_banner = n, s._damage = o, s._shield = r, s
        }
        return n(e, t), e.prototype._start = function () {
            this._torpedo()
        }, e.prototype._torpedo = function () {
            var t = new PIXI.Point(this._from_plane.x, this._from_plane.y),
                e = this._to_banner.getGlobalPos();
            1 == this._to_banner.friend ? e.x += o.BannerSize.W / 2 : e.x -= o.BannerSize.W / 2, this._scene.view.layer_torpedo.playAerialTorpedoJet(t, e, this._explosion)
        }, e.prototype._endTask = function () {
            this._scene = null, this._from_plane = null, this._to_banner = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase)
}