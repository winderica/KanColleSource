const function1378 = function (t, e, i) {
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
        r = i(72),
        s = i(28),
        a = i(29),
        _ = i(19),
        l = i(2),
        u = i(8),
        c = i(15),
        h = i(1),
        p = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._model = e, o._list = e.getDisplayList(), o._bannerGroupLayer = i, o._cutinLayer = n, o
            }
            return n(e, t), e.prototype.preload = function (t) {
                for (var e = new c.ShipLoader, i = 0, n = this._list; i < n.length; i++) {
                    var o = n[i],
                        r = o.ship,
                        s = r.mst_id,
                        a = r.isDamaged();
                    e.add(s, a, "full")
                }
                for (var _ = 0, l = this._model.ships; _ < l.length; _++) {
                    var r = l[_];
                    if (null != r) {
                        var u = r.mst_id,
                            a = r.isDamaged();
                        e.add(u, a, "banner"), 0 == a && e.add(u, !0, "banner")
                    }
                }
                null == t ? e.load() : e.load(t)
            }, e.prototype._start = function () {
                this._charaLayer = new PIXI.Container, this._cutinLayer.addChild(this._charaLayer), this._clickLayer = new PIXI.Container, this._cutinLayer.addChild(this._clickLayer), this._showShip1()
            }, e.prototype._showShip1 = function () {
                var t = this,
                    e = this._list[0].ship,
                    i = e.mst_id,
                    n = e.isDamaged(),
                    r = o.default.resources.getShip(i, n, "full"),
                    s = new PIXI.Sprite(r),
                    a = o.default.model.ship_graph.get(i).getBattleOffset(n);
                s.x = -285 + a.x, s.y = -87 + a.y, s.alpha = 0, this._charaLayer.addChild(s), createjs.Tween.get(s).to({
                    x: 165 + a.x,
                    alpha: 1
                }, 700, createjs.Ease.cubicOut).call(function () {
                    t._playVoice1(s)
                })
            }, e.prototype._playVoice1 = function (t) {
                var e = this,
                    i = this._list[0].ship.mst_id,
                    n = this._list[0].voiceID,
                    o = new d(i.toString(), n, this._clickLayer, !0),
                    l = new _.TweenTask;
                l.addTweens(this._bannerGroupLayer.friends_combined.createExitTweensUpDown());
                var u = new _.TweenTask;
                u.addTweens(this._bannerGroupLayer.friends.createExitTweens());
                var c = new _.TweenTask;
                c.addTweens(this._bannerGroupLayer.ally.createEnterTweens());
                var h = new a.SerialTask;
                h.add(l), h.add(u), h.add(c), h.add(new r.FuncTask(function () {
                    o.clickable = !0
                }));
                var p = new s.ParallelTask;
                p.add(o), p.add(h), p.start(function () {
                    e._list.length > 1 ? e._showShip2(t) : createjs.Tween.get(t).to({
                        alpha: 0
                    }, 300).call(function () {
                        e._charaLayer.removeChild(t), e._endTask()
                    })
                })
            }, e.prototype._showShip2 = function (t) {
                var e = this,
                    i = this._list[1].ship,
                    n = i.mst_id,
                    r = i.isDamaged(),
                    s = o.default.resources.getShip(n, r, "full"),
                    a = new PIXI.Sprite(s),
                    _ = o.default.model.ship_graph.get(n).getBattleOffset(r);
                a.x = -360 + _.x, a.y = -87 + _.y, a.alpha = 0, this._charaLayer.addChild(a), createjs.Tween.get(a).to({
                    x: 15 + _.x,
                    alpha: 1
                }, 600, createjs.Ease.cubicOut).call(function () {
                    e._playVoice2(a)
                }), createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    e._charaLayer.removeChild(t)
                })
            }, e.prototype._playVoice2 = function (t) {
                var e = this,
                    i = this._list[1].ship.mst_id,
                    n = this._list[1].voiceID,
                    o = this._list.length > 2,
                    r = new d(i.toString(), n, this._clickLayer, o);
                r.clickable = !0, r.start(function () {
                    o ? e._showShip3(t) : createjs.Tween.get(t).to({
                        alpha: 0
                    }, 300).call(function () {
                        e._charaLayer.removeChild(t), e._endTask()
                    })
                })
            }, e.prototype._showShip3 = function (t) {
                var e = this,
                    i = this._list[2].ship,
                    n = i.mst_id,
                    r = i.isDamaged(),
                    s = o.default.resources.getShip(n, r, "full"),
                    a = new PIXI.Sprite(s),
                    _ = o.default.model.ship_graph.get(n).getBattleOffset(r);
                a.x = -435 + _.x, a.y = -87 + _.y, a.alpha = 0, this._charaLayer.addChild(a), createjs.Tween.get(a).to({
                    x: -135 + _.x,
                    alpha: 1
                }, 600, createjs.Ease.cubicOut).call(function () {
                    e._playVoice3(t)
                }), createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    e._charaLayer.removeChild(t)
                })
            }, e.prototype._playVoice3 = function (t) {
                var e = this,
                    i = this._list[2].ship.mst_id,
                    n = this._list[2].voiceID,
                    o = new d(i.toString(), n, this._clickLayer, !1);
                o.clickable = !0, o.start(function () {
                    createjs.Tween.get(t).to({
                        alpha: 0
                    }, 300).call(function () {
                        e._charaLayer.removeChild(t), e._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._model = null, this._list = null, this._bannerGroupLayer = null, this._cutinLayer = null, null != this._charaLayer.parent && this._charaLayer.parent.removeChild(this._charaLayer), this._charaLayer = null, null != this._clickLayer.parent && this._clickLayer.parent.removeChild(this._clickLayer), this._clickLayer = null, t.prototype._endTask.call(this)
            }, e
        }(l.TaskBase);
    e.PhaseAllyOpening = p;
    var d = function (t) {
        function e(e, i, n, r) {
            var s = t.call(this) || this;
            return s._clickArea = null, s._voice = null, s._onClick = function () {
                s._stop_onClick && null != s._voice && o.default.sound.voice.stop(s._voice), s._endTask()
            }, s._mstID = e, s._voiceID = i, s._clickLayer = n, s._stop_onClick = r, s
        }
        return n(e, t), Object.defineProperty(e.prototype, "clickable", {
            get: function () {
                return null != this._clickArea
            },
            set: function (t) {
                if (t) {
                    if (null != this._clickArea) return;
                    this._clickArea = new u.AreaBox(0), this._clickArea.buttonMode = !0, this._clickArea.once(h.EventType.CLICK, this._onClick), null != this._clickLayer && this._clickLayer.addChild(this._clickArea)
                } else {
                    if (null == this._clickArea) return;
                    null != this._clickArea.parent && this._clickArea.parent.removeChild(this._clickArea), this._clickArea.off(h.EventType.CLICK, this._onClick), this._clickArea = null
                }
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._start = function () {
            var t = this;
            this._voice = o.default.sound.voice.play(this._mstID, this._voiceID, function () {
                t._onEnd()
            })
        }, e.prototype._onEnd = function () {
            this._endTask()
        }, e.prototype._endTask = function () {
            this.clickable = !1, this._clickLayer = null, this._voice = null, t.prototype._endTask.call(this)
        }, e
    }(l.TaskBase)
}