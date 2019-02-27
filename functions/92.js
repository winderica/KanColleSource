const function92 = function (t, e, i) {
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
        r = i(22),
        s = i(2),
        a = i(24),
        _ = i(27),
        l = i(16),
        u = i(1321),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._voice_ship = null, n._scene = e, n._record = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._record.getRation().length > 0 ? this._ration() : this._ration_combined()
            }, e.prototype._ration = function () {
                for (var t = this, e = this._scene.data.model.deck_f.ships, i = this._record.getRation(), n = this._createDic(e, i), o = new _.ParallelTask, r = 0, s = e; r < s.length; r++) {
                    var a = s[r];
                    if (null != a && 0 != n.hasOwnProperty(a.mem_id.toString())) {
                        var l = n[a.mem_id];
                        if (1 == l.length) o.add(new h(this._scene, a, l[0]));
                        else if (2 == l.length) {
                            var u = this._voice_ship == a;
                            o.add(new p(this._scene, a, l[0], l[1], u))
                        }
                    }
                }
                o.start(function () {
                    createjs.Tween.get(null).wait(500).call(function () {
                        t._ration_combined()
                    })
                })
            }, e.prototype._ration_combined = function () {
                var t = this,
                    e = this._record.getRationCombined();
                if (e.length > 0) {
                    for (var i = this._scene.data.model.deck_f.ships, n = this._createDic(i, e), o = new _.ParallelTask, r = 0, s = i; r < s.length; r++) {
                        var a = s[r];
                        if (null != a && 0 != n.hasOwnProperty(a.mem_id.toString())) {
                            var l = n[a.mem_id];
                            if (1 == l.length) o.add(new h(this._scene, a, l[0]));
                            else if (2 == l.length) {
                                var u = this._voice_ship == a;
                                o.add(new p(this._scene, a, l[0], l[1], u))
                            }
                        }
                    }
                    o.start(function () {
                        createjs.Tween.get(null).wait(500).call(function () {
                            t._endTask()
                        })
                    })
                } else this._endTask()
            }, e.prototype._endTask = function () {
                this._scene = null, this._record = null, this._voice_ship = null, t.prototype._endTask.call(this)
            }, e.prototype._createDic = function (t, e) {
                for (var i = {}, n = 0, o = t; n < o.length; n++) {
                    var r = o[n];
                    if (null != r) {
                        var s = r.mem_id;
                        if (e.indexOf(s) >= 0) {
                            var a = r.useRation();
                            null == this._voice_ship && a.length > 1 && (this._voice_ship = r), i[r.mem_id] = a
                        }
                    }
                }
                return i
            }, e
        }(s.TaskBase);
    e.PhaseRation = c;
    var h = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._ship = i, o._ration_mst_id = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer.getBanner(this._ship),
                    i = e.getGlobalPos(),
                    n = new d;
                n.initialize(this._ration_mst_id), n.x = i.x + r.BannerSize.W / 2 + 20 - 75, n.y = i.y, n.alpha = 0;
                var o = this._scene.view.bannerGroupLayer.effect_layer;
                o.addChild(n), createjs.Tween.get(n).to({
                    x: i.x + r.BannerSize.W / 2 + 20,
                    alpha: 1
                }, 200, createjs.Ease.sineOut).wait(250).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300, createjs.Ease.sineOut).call(function () {
                    new u.TaskBannerParticle(o, i).start()
                }).wait(1e3).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 0,
                    scaleY: 0
                }, 100).call(function () {
                    t._endTask()
                })
            }, e
        }(s.TaskBase),
        p = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._scene = e, s._ship = i, s._ration_mst_id_1 = n, s._ration_mst_id_2 = o, s._voice = r, s
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._scene.view.bannerGroupLayer.getBanner(this._ship),
                    i = e.getGlobalPos(),
                    n = new d;
                n.initialize(this._ration_mst_id_1), n.x = i.x + r.BannerSize.W / 2 + 20 - 75, n.y = i.y, n.alpha = 0;
                var s = this._scene.view.bannerGroupLayer.effect_layer;
                s.addChild(n), createjs.Tween.get(n).to({
                    x: i.x + r.BannerSize.W / 2 + 20,
                    alpha: 1
                }, 200, createjs.Ease.sineOut).wait(250).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300, createjs.Ease.sineOut).wait(1e3).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 0,
                    scaleY: 0
                }, 100);
                var a = new d;
                a.initialize(this._ration_mst_id_2), a.x = i.x + r.BannerSize.W / 2 + 20 + 75 - 75, a.y = i.y, a.alpha = 0, s.addChild(a), createjs.Tween.get(a).wait(100).to({
                    x: i.x + r.BannerSize.W / 2 + 20 + 75,
                    alpha: 1
                }, 200, createjs.Ease.sineOut).wait(250).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300, createjs.Ease.sineOut).call(function () {
                    new u.TaskBannerParticle(s, i).start(), 1 == t._voice && o.default.sound.voice.play(t._ship.mst_id.toString(), 26)
                }).wait(1e3).to({
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 150, createjs.Ease.sineOut).to({
                    scaleX: 0,
                    scaleY: 0
                }, 100).call(function () {
                    t._endTask()
                }), this._endTask()
            }, e
        }(s.TaskBase),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._img.y = -22, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._img.texture = this._getTexture(t)
            }, e.prototype._getTexture = function (t) {
                switch (t) {
                    case 145:
                        return l.BATTLE_MAIN.getTexture(53);
                    case 150:
                        return l.BATTLE_MAIN.getTexture(57);
                    case 241:
                        return l.BATTLE_MAIN.getTexture(54);
                    default:
                        return PIXI.Texture.EMPTY
                }
            }, e
        }(a.Container)
}