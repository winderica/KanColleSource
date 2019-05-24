const function1373 = function (t, e, i) {
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
        r = i(2),
        s = i(12),
        a = i(6),
        _ = i(16),
        l = i(13),
        u = i(1374),
        c = i(8),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._preAnim = function () {
                    o.default.sound.voice.play(i._attackers[0].mst_id.toString(), 900), i._mainShip.texture = o.default.resources.getShip(i._attackers[0].mst_id, !1, "special"), i._mainShip.position.set(680, 450), i._mainShip.anchor.set(.5), i._mainShip.alpha = 0;
                    for (var t = 0; t < i._attackers.length; t++) {
                        var e = i._attackers[t].mst_id,
                            n = o.default.model.ship_graph.get(e).getFaceRect(!1);
                        i._ships[t].texture = o.default.resources.getShip(e, !1, "full");
                        var r = i._ships[t].texture.baseTexture.width / 2,
                            s = i._ships[t].texture.baseTexture.height / 2;
                        i._ships[t].position.set(600 - (n.x + n.width / 2) + r, 100 - n.y + s), i._ships[t].scale.set(2), i._ships[t].anchor.set(.5), i._ships[t].alpha = 0
                    }
                    i._ships[0].position.set(590, 497), i._canvas.chara[0].addChild(i._ships[1]), i._canvas.chara[1].addChild(i._ships[2]), i._canvas.chara[2].addChild(i._ships[0]), i._canvas.chara[2].addChild(i._mainShip), i._anim1()
                }, i._anim2 = function () {
                    createjs.Tween.get(i._ships[2]).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 400).call(function () {
                        createjs.Tween.get(i._canvas.chara[1]).call(function () {
                            a.SE.play("103"), i._getSmoke(i._attackers[2].mst_id).createTweens(0, null)
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
                        }, 300), a.SE.play("209"), createjs.Tween.get(i._ships[0]).to({
                            alpha: 0
                        }, 500), createjs.Tween.get(i._mainShip).to({
                            alpha: 1
                        }, 500).wait(500).call(function () {
                            i._anim4()
                        })
                    })
                }, i._anim4 = function () {
                    createjs.Tween.get(i._mainShip).call(function () {
                        a.SE.play("103"), i._smokes[1].createTweens(0, null), i._smokes[2].createTweens(0, null)
                    }).to({
                        x: 427,
                        y: 506,
                        scaleX: .8,
                        scaleY: .8
                    }, 50).to({
                        x: 457,
                        y: 476
                    }, 50).wait(100).call(function () {
                        a.SE.play("103"), i._smokes[0].createTweens(0, null), i._smokes[3].createTweens(0, null)
                    }).to({
                        x: 427,
                        y: 506
                    }, 50).to({
                        x: 457,
                        y: 476
                    }, 50).call(function () {
                        a.SE.play("104")
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
                }, i._attackers = e, i._canvas = new u.CutinColoradoAttackCanvas, i._view = new PIXI.Container, i.view.addChild(i._canvas), i._mainShip = new s.Sprite, i._ships = [];
                for (var n = 0; n < i._attackers.length; n++) i._ships.push(new s.Sprite);
                i._smokes = [i._createSmoke(78, 10, 248), i._createSmoke(76, 972, 250), i._createSmoke(77, 77, 680), i._createSmoke(76, 980, 600)];
                for (var n = 0; n < 4; n++) i._canvas.explosion.addChild(i._smokes[n]);
                return i._white = new c.AreaBox(1, 16777215), i._white.alpha = 0, i._canvas.addChild(i._white), i._preload_task = new p(e), i
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
                        a.SE.play("103"), t._getSmoke(t._attackers[1].mst_id).createTweens(0, null)
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
                var n = new d;
                return n.initialize(t), n.x = e, n.y = i, n
            }, e.prototype._getSmoke = function (t) {
                switch (t) {
                    case 27:
                    case 86:
                    case 143:
                    case 148:
                    case 411:
                    case 442:
                    case 447:
                    case 553:
                        return this._smokes[0];
                    case 26:
                    case 87:
                    case 88:
                    case 171:
                    case 172:
                    case 173:
                    case 441:
                    case 446:
                    case 554:
                    case 85:
                    case 78:
                        return this._smokes[1];
                    case 77:
                    case 80:
                    case 82:
                    case 131:
                    case 136:
                    case 151:
                    case 152:
                    case 178:
                    case 439:
                    case 440:
                    case 492:
                    case 511:
                    case 512:
                    case 571:
                    case 573:
                    case 576:
                    case 591:
                    case 150:
                        return this._smokes[2];
                    case 149:
                    case 412:
                    case 513:
                    case 541:
                    case 546:
                    case 79:
                    case 81:
                        return this._smokes[3];
                    default:
                        return this._smokes[1]
                }
            }, e.prototype._endTask = function () {
                this._canvas.dispose(), this._view.removeChildren(), null != this._view.parent && this._view.parent.removeChild(this._view), this._attackers = null, this._view = null, this._canvas = null, this._ships = null, this._mainShip = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.CutinColoradoAttack = h;
    var p = function (t) {
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
    }(r.TaskBase);
    e.PreloadCutin = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new s.Sprite, e._img.anchor.set(.35, .8), e._img.scale.set(0), e.addChild(e._img), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._img.texture = _.BATTLE_MAIN.getTexture(t)
        }, e.prototype.createTweens = function (t, e) {
            this._img.scale.set(0), this._img.alpha = 1;
            createjs.Tween.get(this._img).wait(t).to({
                scaleX: 2,
                scaleY: 2
            }, 300).to({
                scaleX: 2.2,
                scaleY: 2.2,
                alpha: 0
            }, 400).call(function () {
                e && e()
            })
        }, e
    }(PIXI.Container)
}