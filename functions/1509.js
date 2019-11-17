const function1509 = function (t, e, i) {
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
        s = i(59),
        a = i(8),
        _ = i(38),
        l = i(60),
        u = i(1510),
        c = i(444),
        h = i(161),
        p = i(1),
        d = function (t) {
            function e(e, i, n, l) {
                var u = t.call(this) || this;
                return u._waveAnim = function () {
                    u._insert.waves.map(function (t) {
                        return t.scale.set(.5)
                    }), u._insert.waves[0].position.set(1340, 990), u._insert.waves[1].position.set(-200, 990);
                    var t = u._insert.waves[0],
                        e = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }),
                        i = u._insert.waves[1],
                        n = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        });
                    e.addTween(createjs.Tween.get(t).to({
                        x: 868,
                        y: 411
                    }, 800, createjs.Ease.getElasticOut(2, 5)), createjs.Tween.get(t).to({
                        alpha: 1
                    }, 100).wait(700).to({
                        alpha: 0
                    }, 200), createjs.Tween.get(t).to({
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 400).wait(400).to({
                        scaleX: .7,
                        scaleY: .7
                    }, 200)), n.addTween(createjs.Tween.get(i).to({
                        x: 321,
                        y: 467
                    }, 800, createjs.Ease.getElasticOut(2, 5)), createjs.Tween.get(i).to({
                        alpha: 1
                    }, 100).wait(700).to({
                        alpha: 0
                    }, 200), createjs.Tween.get(i).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 400).wait(400).to({
                        scaleX: .7,
                        scaleY: .7
                    }, 200)), createjs.Tween.get(null).call(function () {
                        e.gotoAndPlay("start")
                    }).wait(300).call(function () {
                        n.gotoAndPlay("start")
                    })
                }, u._fishAnim = function () {
                    u._insert.fish[0].position.set(1365, 420), u._insert.fish[1].scale.set(-1, 1), u._insert.fish[1].position.set(344, 500), u._insert.fish[2].position.set(o.default.width / 2 - 228, o.default.height / 2 + 521);
                    var t = u._insert.fish[0],
                        e = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        });
                    e.addTween(createjs.Tween.get(t).to({
                        x: 500,
                        y: -220
                    }, 700), createjs.Tween.get(t).to({
                        alpha: 1
                    }, 100).wait(600).to({
                        alpha: 0
                    }, 100));
                    var i = u._insert.fish[1],
                        n = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        });
                    n.addTween(createjs.Tween.get(i).to({
                        x: -10,
                        y: -220
                    }, 500), createjs.Tween.get(i).to({
                        alpha: 1
                    }, 100).wait(500).to({
                        alpha: 0
                    }, 100));
                    var r = u._insert.fish[2],
                        a = new createjs.Timeline([], {
                            start: 0
                        }, {
                            paused: !0
                        }),
                        _ = 68 == u._mst_id ? new PIXI.Point(626, 258) : new PIXI.Point(611, 246),
                        l = 68 == u._mst_id ? .8 : .75,
                        c = 68 == u._mst_id ? 0 : -28.8,
                        h = createjs.Tween.get(r, {
                            paused: !0,
                            loop: !0
                        }).to({
                            rotation: (c + 20) * Math.PI / 180
                        }, 100).to({
                            rotation: (c - 20) * Math.PI / 180
                        }, 100);
                    a.addTween(createjs.Tween.get(r).to({
                        alpha: 1
                    }, 0).call(function () {
                        var t = new PIXI.Point(r.x, r.y),
                            e = new PIXI.Point(_.x, o.default.height / 2 - 300),
                            i = new PIXI.Point(t.x + 200, t.y),
                            n = new PIXI.Point(e.x + 100, e.y + 150),
                            a = s.TweenUtil.create3BezierTween(r, t, i, n, e, 700);
                        a.to({
                            y: _.y
                        }, 400), a.wait(300), a.call(function () {
                            u._fadeOutInsert(), h.setPaused(!0), createjs.Tween.get(r).to({
                                rotation: c * Math.PI / 180
                            }, 100)
                        })
                    }), createjs.Tween.get(r).wait(500).to({
                        rotation: c * Math.PI / 180
                    }, 200).play(h), createjs.Tween.get(r).wait(1300).to({
                        scaleX: l,
                        scaleY: l
                    }, 200)), createjs.Tween.get(null).call(function () {
                        e.gotoAndPlay("start")
                    }).wait(300).call(function () {
                        n.gotoAndPlay("start")
                    }).wait(300).call(function () {
                        a.gotoAndPlay("start")
                    })
                }, u._fadeOutInsert = function () {
                    var t = u._mst_id,
                        e = u._count,
                        i = r.default.model.useItem.get(t),
                        n = null == i ? "" : i.name;
                    u._bonus.alpha = 1, u._bonus.initialize(t, e, n), createjs.Tween.get(u._insert).to({
                        alpha: 0
                    }, 100).call(function () {
                        u._layer.removeChild(u._insert), u._insert.dispose(), u._insert = null, u._showBonus()
                    })
                }, u._showMessageBox = function () {
                    createjs.Tween.get(u._bonus.message_box).to({
                        y: 480
                    }, 300).call(u._waitClick)
                }, u._waitClick = function () {
                    u._bonus.message_box.activate();
                    var t = new _.GearBtnHome;
                    t.position.set(1140, 660), t.initialize(), t.activate(), u._bonus.addChild(t);
                    var e = new a.AreaBox(0);
                    e.interactive = !0, e.buttonMode = !0, u._bonus.addChild(e), e.once(p.EventType.CLICK, function () {
                        u._bonus.removeChild(e), u._finalize(t)
                    })
                }, u._layer = e, u._mst_id = i, u._count = n, u._play_bgm = l, u
            }
            return n(e, t), e.prototype._start = function () {
                this._bonus = new c.BonusUseItem, this._bonus.alpha = 0, this._layer.addChild(this._bonus), this._insert = new u.BonusInsertWave(this._mst_id), this._loadBG()
            }, e.prototype._loadBG = function () {
                var t = this;
                this._bonus.bg.initiailzeForUseitem(function () {
                    t._loadImage()
                })
            }, e.prototype._loadImage = function () {
                var t = this,
                    e = new l.UseitemLoader;
                e.add(this._mst_id, 1), e.load(function () {
                    t._whiteIn()
                })
            }, e.prototype._whiteIn = function () {
                var t = this;
                this._insert.initialize(), this._insert.flash.position.set(o.default.width / 2, o.default.height / 2), this._layer.addChild(this._insert), createjs.Tween.get(this._insert.flash).to({
                    alpha: 1
                }, 100), createjs.Tween.get(this._insert.flash.scale).to({
                    x: 3.5,
                    y: 3.5
                }, 800).wait(300).call(function () {
                    t._play_bgm && r.default.sound.bgm.play(132, !0, 1e3), t._waveAnim(), t._fishAnim()
                }), createjs.Tween.get(this._insert.white).wait(800).set({
                    visible: !0
                }).to({
                    alpha: 1
                }, 300)
            }, e.prototype._showBonus = function () {
                this._bonus.particle.activate(), createjs.Tween.get(this._bonus.white).to({
                    alpha: 0
                }, 500).call(this._showMessageBox)
            }, e.prototype._finalize = function (t) {
                var e = this;
                this._play_bgm && r.default.sound.bgm.fadeOut(1200), createjs.Tween.get(t).to({
                    alpha: 0
                }, 300).call(function () {
                    t.deactivate(), e._bonus.removeChild(t), e._endTask()
                })
            }, e.prototype.dispose = function () {
                this._bonus.dispose(), this._layer.removeChild(this._bonus), this._layer = null, this._bonus = null
            }, e
        }(h.TaskBonusBase);
    e.TaskBonusFish = d
}