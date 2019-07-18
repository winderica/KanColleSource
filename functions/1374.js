const function1374 = function (t, e, i) {
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
        s = i(2),
        a = i(12),
        _ = i(6),
        u = i(16),
        l = i(13),
        c = i(1375),
        h = i(8),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._preAnim = function () {
                    r.default.sound.voice.play(i._attackers[0].mst_id.toString(), 900), i._mainShip.texture = r.default.resources.getShip(i._attackers[0].mst_id, !1, "special"), i._mainShip.position.set(680, 450), i._mainShip.anchor.set(.5), i._mainShip.alpha = 0;
                    for (var t = 0; t < i._attackers.length; t++) {
                        var e = i._attackers[t].mst_id,
                            n = r.default.model.ship_graph.get(e).getFaceRect(!1);
                        i._ships[t].texture = r.default.resources.getShip(e, !1, "full");
                        var o = i._ships[t].texture.baseTexture.width / 2,
                            s = i._ships[t].texture.baseTexture.height / 2;
                        i._ships[t].position.set(600 - (n.x + n.width / 2) + o, 100 - n.y + s), i._ships[t].scale.set(2), i._ships[t].anchor.set(.5), i._ships[t].alpha = 0
                    }
                    i._ships[0].position.set(590, 497), i._canvas.chara[0].addChild(i._ships[1]), i._canvas.chara[1].addChild(i._ships[2]), i._canvas.chara[2].addChild(i._ships[0]), i._canvas.chara[2].addChild(i._mainShip), i._anim1()
                }, i._anim2 = function () {
                    createjs.Tween.get(i._ships[2]).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 400).call(function () {
                        createjs.Tween.get(i._canvas.chara[1]).call(function () {
                            _.SE.play("103"), i._setPaSmokePos(i._attackers[2].mst_id, i._ships[2]), i._paSmoke.createTweens()
                        }).to({
                            x: -50
                        }, 50).to({
                            x: 0
                        }, 50).wait(200).call(function () {
                            createjs.Tween.get(i._ships[2]).to({
                                scaleX: .85,
                                scaleY: .85
                            }, 300), createjs.Tween.get(i._canvas.chara[1]).to({
                                x: 350,
                                y: -50
                            }, 300).call(function () {
                                i._anim3()
                            })
                        })
                    })
                }, i._anim3 = function () {
                    createjs.Tween.get(i._ships[0]).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 400).call(function () {
                        createjs.Tween.get(i._canvas.chara[0]).to({
                            alpha: 0
                        }, 300), createjs.Tween.get(i._canvas.chara[1]).to({
                            alpha: 0
                        }, 300), _.SE.play("209"), createjs.Tween.get(i._ships[0]).to({
                            alpha: 0
                        }, 500), createjs.Tween.get(i._mainShip).to({
                            alpha: 1
                        }, 500).wait(500).call(function () {
                            i._anim4()
                        })
                    })
                }, i._anim4 = function () {
                    createjs.Tween.get(i._mainShip).call(function () {
                        _.SE.play("103"), i._coloradoSmokes[1].createTweens(), i._coloradoSmokes[2].createTweens()
                    }).to({
                        x: 427,
                        y: 506,
                        scaleX: .8,
                        scaleY: .8
                    }, 50).to({
                        x: 457,
                        y: 476
                    }, 50).wait(100).call(function () {
                        _.SE.play("103"), i._coloradoSmokes[0].createTweens(), i._coloradoSmokes[3].createTweens()
                    }).to({
                        x: 427,
                        y: 506
                    }, 50).to({
                        x: 457,
                        y: 476
                    }, 50).call(function () {
                        _.SE.play("104")
                    }).wait(200).call(function () {
                        createjs.Tween.get(i._white).to({
                            alpha: 1
                        }, 200).to({
                            alpha: 0
                        }, 200)
                    }).wait(500).to({
                        alpha: 0
                    }, 600).call(function () {
                        i._endTask()
                    })
                }, i._attackers = e, i._canvas = new c.CutinColoradoAttackCanvas, i._view = new PIXI.Container, i.view.addChild(i._canvas), i._mainShip = new a.Sprite, i._ships = [];
                for (var n = 0; n < i._attackers.length; n++) i._ships.push(new a.Sprite);
                i._coloradoSmokes = [], i._coloradoSmokes[0] = i._createSmoke(78, 10, 248), i._coloradoSmokes[1] = i._createSmoke(76, 972, 250), i._coloradoSmokes[2] = i._createSmoke(77, 77, 680), i._coloradoSmokes[3] = i._createSmoke(76, 980, 600), i._paSmoke = i._createSmoke(76, 600, 360);
                for (var n = 0; n < 4; n++) i._canvas.explosion.addChild(i._coloradoSmokes[n]);
                return i._canvas.explosion.addChild(i._paSmoke), i._white = new h.AreaBox(1, 16777215), i._white.alpha = 0, i._canvas.addChild(i._white), i._preload_task = new d(e), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreloadTask = function () {
                return this._preload_task
            }, e.prototype._start = function () {
                var t = this;
                this._preload_task.start(function () {
                    t._preAnim()
                })
            }, e.prototype._anim1 = function () {
                var t = this;
                createjs.Tween.get(this._ships[1]).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 400).call(function () {
                    createjs.Tween.get(t._canvas.chara[0]).call(function () {
                        _.SE.play("103"), t._setPaSmokePos(t._attackers[1].mst_id, t._ships[1]), t._paSmoke.createTweens()
                    }).to({
                        x: -50
                    }, 50).to({
                        x: 0
                    }, 50).wait(200).call(function () {
                        createjs.Tween.get(t._ships[1]).to({
                            scaleX: .85,
                            scaleY: .85
                        }, 300), createjs.Tween.get(t._canvas.chara[0]).to({
                            x: -350,
                            y: -50
                        }, 300).call(function () {
                            t._anim2()
                        })
                    })
                })
            }, e.prototype._createSmoke = function (t, e, i) {
                var n = new f;
                return n.initialize(t), n.x = e, n.y = i, n
            }, e.prototype._setPaSmokePos = function (t, e) {
                var i = r.default.model.ship_graph.get(t).getPaOffset(),
                    n = r.default.model.ship_graph.get(t).getFaceRect();
                this._paSmoke.position.x = e.position.x - e.width / 2 + n.x + n.width / 2 + i.x, this._paSmoke.position.y = e.position.y - e.height / 2 + n.y + n.height / 2 + i.y, this._paSmoke.position.x > o.default.width / 2 ? this._paSmoke.initialize(76) : this._paSmoke.position.y > o.default.height / 2 && this._paSmoke.initialize(77), this._paSmoke.initialize(78)
            }, e.prototype._endTask = function () {
                this._canvas.dispose(), this._view.removeChildren(), null != this._view.parent && this._view.parent.removeChild(this._view), this._attackers = null, this._view = null, this._canvas = null, this._ships = null, this._mainShip = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.CutinColoradoAttack = p;
    var d = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._attackers = e, i
        }
        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this,
                e = new l.ShipLoader;
            e.add(this._attackers[0].mst_id, !1, "full"), e.add(this._attackers[0].mst_id, !1, "special");
            for (var i = 1; i < this._attackers.length; i++) e.add(this._attackers[i].mst_id, !1, "full");
            e.load(function () {
                t._endTask()
            })
        }, e
    }(s.TaskBase);
    e.PreloadCutin = d;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new a.Sprite, e._img.anchor.set(.35, .8), e._img.scale.set(0), e.addChild(e._img), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._img.texture = u.BATTLE_MAIN.getTexture(t)
        }, e.prototype.createTweens = function () {
            this._img.scale.set(0), this._img.alpha = 1;
            createjs.Tween.get(this._img).to({
                scaleX: 2,
                scaleY: 2
            }, 300).to({
                scaleX: 2.2,
                scaleY: 2.2,
                alpha: 0
            }, 400)
        }, e
    }(PIXI.Container)
}