const function445 = function (t, e, i) {
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
        r = i(0),
        s = i(42),
        a = i(2),
        _ = i(29),
        u = i(6),
        l = i(142),
        c = i(446),
        h = i(446),
        p = i(1350),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._current = -1, e._next = function (t) {
                    var i = t.view;
                    e.view.content.addChild(i), t.start(function () {
                        1 == t.friend ? e.view.overlay.showFromRight(function () {
                            e.view.content.removeChild(i), e._cutin()
                        }) : e.view.overlay.showFromLeft(function () {
                            e.view.content.removeChild(i), e._cutin()
                        })
                    })
                }, e._tasks = new Array, e._view = new c.CutinCanvasFunnel, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "preload_task", {
                get: function () {
                    for (var t = new _.SerialTask, e = 0, i = this._tasks; e < i.length; e++) {
                        var n = i[e];
                        t.add(n.preload_task)
                    }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.addCutin = function (t, e, i, n, o, r) {
                void 0 === o && (o = -1), void 0 === r && (r = -1);
                var s = new f(t, e, i, n, o, r);
                this._tasks.push(s)
            }, e.prototype.addCutinFromModel = function (t, e) {
                if (null != t) {
                    var i, n = t.friend,
                        o = t.mst_id,
                        r = t.isDamaged();
                    i = 0 == e ? s.PlaneConst.getPlaneType(!0) : s.PlaneConst.getJetPlaneType();
                    for (var a = t.slots, _ = new Array, u = 0; u < a.length; u++) {
                        var l = a[u];
                        null != l && (i.indexOf(l.equipTypeSp) >= 0 && _.push(l.mst_id))
                    }
                    _.length >= 3 ? this.addCutin(n, o, r, _[0], _[1], _[2]) : 2 == _.length ? this.addCutin(n, o, r, _[0], _[1]) : 1 == _.length ? this.addCutin(n, o, r, _[0]) : this.addCutin(n, o, r, -1)
                }
            }, e.prototype._start = function () {
                this._view.initialize(), this._view.bg.show(500), this._cutin()
            }, e.prototype._cutin = function () {
                var t = this;
                if (++this._current < this._tasks.length) {
                    var e = this._tasks[this._current];
                    0 == this._current ? this._next(e) : this.view.overlay.hideToLeft(function () {
                        t._next(e)
                    })
                } else this._preEnd()
            }, e.prototype._preEnd = function () {
                var t = this;
                this._view.bg.hide(250), this.view.overlay.hideToRight(function () {
                    t._endTask()
                })
            }, e
        }(a.TaskBase);
    e.CutinFunnel = d;
    var f = function (t) {
        function e(e, i, n, s, a, _) {
            var l = t.call(this) || this;
            return l._anim2 = function () {
                var t = function (t, e, i) {
                        l._view.laser_effect.position.set(t, e), l._view.laser_effect.rotation = i / 180 * Math.PI
                    },
                    e = l._friend ? 1 : -1;
                l._view.laser_effect.scale.x = e, t(o.default.width / 2 - 330 * e, 150, 9), l._view.laser_effect.visible = !0, u.SE.play("111"), createjs.Tween.get(null).wait(33).call(t, [o.default.width / 2 - 315 * e, 144, 2 * e]).wait(33).call(t, [o.default.width / 2 - 330 * e, 150, 0]).wait(33).call(t, [o.default.width / 2 - 315 * e, 144, 2 * e]).wait(33).call(t, [o.default.width / 2 - 330 * e, 150, 0]).wait(33).call(function () {
                    l._view.laser_effect.visible = !1
                }).wait(100).call(l._anim3)
            }, l._anim3 = function () {
                1 == l._friend && r.default.sound.voice.playAtRandom(l._ship_mstid.toString(), [15, 17], [50, 50]), l._tweens = new Array;
                var t;
                l._plane1 > 0 && (t = l._createTweenPlane1(), l._tweens.push(t), t.call(l._onComplete, [t])), l._plane2 > 0 && (t = l._createTweenPlane2(), l._tweens.push(t), t.call(l._onComplete, [t])), l._plane3 > 0 && (t = l._createTweenPlane3(), l._tweens.push(t), t.call(l._onComplete, [t]));
                var e;
                e = l._friend ? {
                    x: -606,
                    y: -252,
                    alpha: 0
                } : {
                    x: 1049,
                    y: -251,
                    alpha: 0
                }, t = createjs.Tween.get(l.view.ship).wait(900).to(e, 200), l._tweens.push(t), t.call(l._onComplete, [t])
            }, l._onComplete = function (t) {
                var e = l._tweens.indexOf(t);
                e >= 0 && l._tweens.splice(e, 1), 0 == l._tweens.length && l._endTask()
            }, l._friend = e, l._ship_mstid = i, l._ship_damaged = n, l._plane1 = s, l._plane2 = a, l._plane3 = _, l._view = new h.CutinCanvasFunnelOnce, l._preload_task = new p.PreloadCutinFunnel(i, n, s, a, _), l
        }
        return n(e, t), Object.defineProperty(e.prototype, "friend", {
            get: function () {
                return this._friend
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this._view
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "preload_task", {
            get: function () {
                return this._preload_task
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._start = function () {
            this._ready()
        }, e.prototype._ready = function () {
            this._view.initialize(this._friend), this._view.telop_bg.x = o.default.width / 2 + 918 * (this._friend ? 1 : -1), this._view.telop_bg.y = 683;
            var t = r.default.resources.getShip(this._ship_mstid, this._ship_damaged, "full");
            this._ship_sprite = new PIXI.Sprite(t);
            var e = r.default.model.ship_graph.get(this._ship_mstid);
            if (null != e) {
                var i = e.getBattleOffset(this._ship_damaged);
                null != i && (this._ship_sprite.x = i.x, this._ship_sprite.y = i.y)
            }
            this._view.ship.alpha = 0, this._friend ? this._view.ship.position.set(1010, 165) : this._view.ship.position.set(1049, -251), this._view.ship.addChild(this._ship_sprite), this._ship_sprite.mask = this._view.ship_mask, this._anim1()
        }, e.prototype._anim1 = function () {
            createjs.Tween.get(this._view.telop_bg).to({
                x: o.default.width / 2,
                y: 435
            }, 300);
            var t, e = this._friend;
            t = e ? {
                x: 17,
                y: -44,
                alpha: 1
            } : {
                x: 447,
                y: -15,
                alpha: 1
            }, createjs.Tween.get(this._view.ship).wait(200).to(t, 200).call(this._anim2)
        }, e.prototype._createTweenPlane1 = function () {
            var t = this._friend ? 1 : -1,
                e = new l.Plane;
            e.initialize(this._plane1, this._friend);
            var i = this._view.plane1;
            return i.addChild(e), i.position.set(o.default.width / 2 - 926 * t, 411), i.scale.set(1.52), i.visible = !1, createjs.Tween.get(this._view.plane1).wait(200).call(function () {
                e.activate(), i.visible = !0, u.SE.play("107")
            }).to({
                x: o.default.width / 2 - 563 * t,
                y: 666,
                scaleX: 1.24,
                scaleY: 1.24
            }, 300).to({
                x: o.default.width / 2 - 458 * t,
                y: 630,
                scaleX: 1,
                scaleY: 1
            }, 200).wait(500).call(function () {
                u.SE.play("115")
            }).to({
                x: o.default.width / 2 + 809 * t,
                y: 525
            }, 600, createjs.Ease.quadIn).call(function () {
                e.deactivate(), i.visible = !1
            })
        }, e.prototype._createTweenPlane2 = function () {
            var t = this._friend ? 1 : -1,
                e = new l.Plane;
            e.initialize(this._plane2, this._friend);
            var i = this._view.plane2;
            return i.addChild(e), i.position.set(o.default.width / 2 - 780 * t, 459), i.scale.set(1.16), e.activate(), u.SE.play("107"), createjs.Tween.get(this._view.plane2).to({
                x: o.default.width / 2 - 453 * t,
                y: 626,
                scaleX: .93,
                scaleY: .93
            }, 200).to({
                x: o.default.width / 2 - 255 * t,
                y: 495,
                scaleX: .88,
                scaleY: .88
            }, 200).wait(1e3).call(function () {
                u.SE.play("115")
            }).to({
                x: o.default.width / 2 + 840 * t,
                y: 405
            }, 400, createjs.Ease.quadIn).call(function () {
                e.deactivate(), i.visible = !1
            })
        }, e.prototype._createTweenPlane3 = function () {
            var t = this._friend ? 1 : -1,
                e = new l.Plane;
            e.initialize(this._plane3, this._friend);
            var i = this._view.plane3;
            return i.addChild(e), i.position.set(o.default.width / 2 - 618 * t, -221), i.scale.set(.87), i.visible = !1, createjs.Tween.get(this._view.plane3).wait(100).call(function () {
                e.activate(), i.visible = !0, u.SE.play("107")
            }).to({
                x: o.default.width / 2 - 30 * t,
                y: 98,
                scaleX: .6,
                scaleY: .6
            }, 400).wait(500).call(function () {
                u.SE.play("115")
            }).to({
                x: o.default.width / 2 + 900 * t,
                y: 23
            }, 800, createjs.Ease.quadIn).call(function () {
                e.deactivate(), i.visible = !1
            })
        }, e.prototype._endTask = function () {
            this._view = null, this._ship_sprite = null, this._preload_task = null, t.prototype._endTask.call(this)
        }, e
    }(a.TaskBase);
    e.CutinFunnelOnce = f
}