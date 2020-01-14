const function1305 = function (t, e, i) {
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
        r = i(6),
        s = i(5),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._repairLayer = e, n._comepleteLayer = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._preLoad()
            }, e.prototype._preLoad = function () {
                this._repairLayer.initilize(), this._comepleteLayer.initilize(), this._whiteInOut()
            }, e.prototype._whiteInOut = function () {
                var t = this;
                createjs.Tween.get(this._repairLayer.white).to({
                    alpha: 1
                }, 300).call(function () {
                    t._repairLayer.bg.alpha = 1
                }).wait(200).to({
                    alpha: 0
                }, 200).call(function () {
                    t._introAnim()
                })
            }, e.prototype._introAnim = function () {
                var t = this,
                    e = new createjs.Timeline([], {
                        start: 0
                    }, {
                        paused: !0
                    }),
                    i = createjs.Tween.get(this._repairLayer.ship_layer).wait(300).to({
                        x: 900,
                        y: 230,
                        alpha: 1
                    }, 500);
                e.addTween(i);
                for (var n = 0; n < 3; n++) {
                    var o = this._repairLayer.cranes.getChildAt(n),
                        r = createjs.Tween.get(o).wait(600 - 300 * n).to({
                            x: -68
                        }, 300);
                    e.addTween(r)
                }
                var s = createjs.Tween.get(this._repairLayer.fariy_worker).wait(400).to({
                    y: 570,
                    alpha: 1
                }, 300);
                e.addTween(s), createjs.Tween.get(null).call(function () {
                    t._repairLayer.playTxtReparing(), e.gotoAndPlay("start")
                }).wait(1200).call(function () {
                    t._repairCnt = 1, t._repairAnim(0)
                })
            }, e.prototype._repairAnim = function (t) {
                var e = this;
                createjs.Tween.get(null).call(function () {
                    if (t <= 4) {
                        var i = 3 * t,
                            n = e._repairLayer.getBannerGroup([i, i + 1, i + 2]);
                        if (!n.some(function (t) {
                                return null != t
                            })) return t++, void e._repairAnim(t);
                        3 == e._repairCnt ? (createjs.Tween.get(e._repairLayer.fairy_cutin).set({
                            visible: !0,
                            alpha: 1
                        }).to({
                            x: 590
                        }, 500).wait(300).to({
                            alpha: 0
                        }, 300), createjs.Tween.get(e._repairLayer.fairy_cutin.scale).wait(700).to({
                            x: 1.1,
                            y: 1.1
                        }, 300), e._repairLayer.bg.setNight(function () {
                            e._repairShipsAnim(t, n)
                        })) : e._repairShipsAnim(t, n)
                    } else e._repairFinish()
                })
            }, e.prototype._repairShipsAnim = function (t, e) {
                var i = this,
                    n = this._repair(e),
                    o = this._FairiesAnim();
                createjs.Tween.get(null).call(function () {
                    n.gotoAndPlay("start"), o.gotoAndPlay("start")
                }).wait(4e3).call(function () {
                    i._repairCnt++, t++, i._repairAnim(t)
                })
            }, e.prototype._repairFinish = function () {
                var t = this,
                    e = new createjs.Timeline([], {
                        start: 0
                    }, {
                        paused: !0
                    });
                e.addTween.apply(e, this._fadeOutReparingAnim().concat(this._fadeInRepairFinish())), createjs.Tween.get(null).wait(300).call(function () {
                    t._repairLayer.stopTxtReparing(), e.gotoAndPlay("start")
                }).wait(2e3).call(function () {
                    createjs.Tween.get(t._comepleteLayer).to({
                        alpha: 0
                    }, 400).call(function () {
                        t._endTask()
                    })
                })
            }, e.prototype._repair = function (t) {
                for (var e = new createjs.Timeline([], {
                        start: 0
                    }, {
                        paused: !0
                    }), i = 0; i < t.length; i++) ! function (i) {
                    if (null == t[i]) return "continue";
                    var n = t[i],
                        o = 110 + 230 * i,
                        r = 300 - 150 * i;
                    n.position.set(100, o + 35);
                    var s = createjs.Tween.get(n).wait(300).to({
                        y: o,
                        alpha: 1
                    }, 400, createjs.Ease.getBackOut(1.2)).wait(200).to({
                        x: 0
                    }, 300, createjs.Ease.quintInOut).wait(200).call(function () {
                        n.content.kira.play(), n.updateHp(n.hp_repaired, function () {
                            n.content.kira.stop()
                        })
                    }).wait(1500 + r).to({
                        x: 100,
                        alpha: 0
                    }, 200, createjs.Ease.cubicIn);
                    e.addTween(s)
                }(i);
                var n = this._repairLayer.cranes.position.y,
                    o = createjs.Tween.get(this._repairLayer.cranes).to({
                        y: n + 10
                    }, 100, createjs.Ease.cubicOut).to({
                        y: n
                    }, 300, createjs.Ease.cubicIn).wait(1e3).to({
                        y: n + 10
                    }, 500, createjs.Ease.cubicOut).to({
                        y: n
                    }, 400, createjs.Ease.cubicIn);
                e.addTween(o);
                var r = createjs.Tween.get(this._repairLayer.ship_layer).to({
                    y: 240
                }, 100, createjs.Ease.cubicOut).to({
                    y: 230
                }, 300, createjs.Ease.cubicIn).wait(1e3).to({
                    y: 240
                }, 500, createjs.Ease.cubicOut).to({
                    y: 230
                }, 400, createjs.Ease.cubicIn);
                return e.addTween(r), e
            }, e.prototype._FairiesAnim = function () {
                var t = new createjs.Timeline([], {
                    start: 0
                }, {
                    paused: !0
                });
                if (this._repairCnt <= 2) {
                    var e = createjs.Tween.get(this._repairLayer.fariy_worker).call(function () {
                        r.SE.play("230")
                    }).to({
                        y: 570
                    }, 250).to({
                        y: 585
                    }, 150, createjs.Ease.cubicOut).to({
                        y: 570
                    }, 150, createjs.Ease.cubicIn).to({
                        y: 585
                    }, 150, createjs.Ease.cubicOut).to({
                        y: 700
                    }, 250, createjs.Ease.cubicIn);
                    t.addTween(e)
                } else {
                    this._repairLayer.getLeftFairy();
                    var i = s.default.height - this._repairLayer.fairy_left.height / 2 - 10,
                        n = createjs.Tween.get(this._repairLayer.fairy_left).set({
                            visible: !0
                        }).to({
                            alpha: 1
                        }, 0).to({
                            y: i
                        }, 500, createjs.Ease.cubicOut).call(function () {
                            return r.SE.play("264")
                        }).wait(500).to({
                            alpha: 0
                        }, 300).to({
                            y: s.default.height + this._repairLayer.fairy_left.height
                        }),
                        o = createjs.Tween.get(this._repairLayer.fairy_left.scale).wait(1e3).to({
                            x: 1,
                            y: 1
                        }, 300).wait(100).to({
                            x: .5,
                            y: .5
                        }, 0);
                    t.addTween(n, o), this._repairLayer.getRightFairy();
                    var a = s.default.width - this._repairLayer.fairy_right.width / 2 - 20,
                        _ = createjs.Tween.get(this._repairLayer.fairy_right).wait(600).to({
                            alpha: 1
                        }, 0).to({
                            x: a
                        }, 500).wait(500).to({
                            alpha: 0
                        }, 300).to({
                            x: s.default.width + this._repairLayer.fairy_right.width
                        }),
                        u = createjs.Tween.get(this._repairLayer.fairy_right.scale).wait(1600).to({
                            x: 1,
                            y: 1
                        }, 500).wait(100).to({
                            x: .5,
                            y: .5
                        }, 0);
                    t.addTween(_, u)
                }
                return t
            }, e.prototype._fadeOutReparingAnim = function () {
                var t = [],
                    e = createjs.Tween.get(this._repairLayer.ship_layer).to({
                        x: 1200,
                        y: 600,
                        alpha: 0
                    }, 500);
                t.push(e);
                var i = createjs.Tween.get(this._repairLayer.cranes).to({
                    x: -350,
                    alpha: 0
                }, 500);
                t.push(i);
                var n = createjs.Tween.get(this._repairLayer).wait(400).to({
                    alpha: 0
                }, 400);
                return t.push(n), t
            }, e.prototype._fadeInRepairFinish = function () {
                var t = [],
                    e = createjs.Tween.get(this._comepleteLayer).set({
                        visible: !0
                    }).wait(200).to({
                        alpha: 1
                    }, 300);
                if (t.push(e), 0 == this._comepleteLayer.pattern) {
                    this._comepleteLayer.fairy_complete.pivot.set(this._comepleteLayer.fairy_complete.width - 40, this._comepleteLayer.fairy_complete.height - 10);
                    var i = createjs.Tween.get(this._comepleteLayer.fairy_complete).to({
                            alpha: 0
                        }, 0).to({
                            rotation: 90 * Math.PI / 180
                        }, 0).wait(150).to({
                            alpha: 1
                        }, 200).to({
                            rotation: 0 * Math.PI / 180
                        }, 1200, createjs.Ease.quintOut),
                        n = createjs.Tween.get(this._comepleteLayer.fairy_complete).wait(300).to({
                            x: 900
                        }, 1250, createjs.Ease.quadInOut);
                    t.push(i, n)
                }
                if (1 == this._comepleteLayer.pattern) {
                    var o = createjs.Tween.get(this._comepleteLayer.fairy_complete).to({
                        y: 168
                    }, 1200, createjs.Ease.bounceOut);
                    t.push(o)
                }
                return t
            }, e
        }(o.TaskBase);
    e.TaskAnchorageRepairAnimation = a
}