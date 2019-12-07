const function1389 = function (t, e, i) {
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
        a = i(16),
        _ = i(13),
        l = i(1390),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._preAnim = function () {
                    for (var t = 0; t < i._canvas.chara.length; t++) i._canvas.chara[t].alpha = 0;
                    i._nelson.texture = o.default.resources.getShip(i._attackers[0].mst_id, !1, "special"), i._nelson.position.set(-117, 208), i._nelson.alpha = 0;
                    for (var t = 0; t < i._attackers.length; t++) {
                        var e = i._attackers[t].mst_id,
                            n = 0 != t && i._attackers[t].isDamaged(),
                            r = o.default.model.ship_graph.get(e).getBattleOffset(n);
                        i._ships[t].texture = o.default.resources.getShip(e, n, "full"), i._ships[t].position.set(r.x, r.y), i._canvas.chara[t].addChild(i._ships[t]), i._canvas.chara[t].position.set(0 - i._ships[t].width, 720 + i._ships[t].height)
                    }
                    i._canvas.chara[0].addChild(i._nelson), i._anim1()
                }, i._anim2 = function () {
                    createjs.Tween.get(null).wait(500).call(function () {
                        createjs.Tween.get(i._ships[0]).to({
                            alpha: 0
                        }, 400), createjs.Tween.get(i._nelson).to({
                            alpha: 1
                        }, 400);
                        var t = i._createSmoke(76, 981, 240);
                        i._canvas.explosion.addChild(t), t.createTweens(700, null);
                        var e = i._createSmoke(77, 752, 192);
                        i._canvas.explosion.addChild(e), e.createTweens(800, null);
                        var n = i._createSmoke(78, 480, 321);
                        i._canvas.explosion.addChild(n), n.createTweens(900, i._anim3)
                    })
                }, i._anim3 = function () {
                    createjs.Tween.get(i._canvas.chara[0]).wait(400).to({
                        x: 307,
                        y: -240,
                        alpha: 1
                    }, 300), createjs.Tween.get(i._canvas.chara[1]).wait(450).to({
                        x: 65,
                        y: -65,
                        alpha: 1
                    }, 500), createjs.Tween.get(i._canvas.chara[2]).wait(500).to({
                        x: -323,
                        y: 34,
                        alpha: 1
                    }, 500).call(function () {
                        i._anim4()
                    })
                }, i._anim4 = function () {
                    createjs.Tween.get(i._canvas.chara[0]).wait(500).call(function () {
                        createjs.Tween.get(i._canvas.chara[0]).to({
                            alpha: 0
                        }, 500), createjs.Tween.get(i._canvas.chara[1]).to({
                            alpha: 0
                        }, 500), createjs.Tween.get(i._canvas.chara[2]).to({
                            alpha: 0
                        }, 500)
                    }).wait(600).call(function () {
                        i._endTask()
                    })
                }, i._attackers = e, i._canvas = new l.CutinNelsonTouchCanvas, i._view = new PIXI.Container, i.view.addChild(i._canvas), i._nelson = new PIXI.Sprite, i._ships = [];
                for (var n = 0; n < i._attackers.length; n++) i._ships.push(new PIXI.Sprite);
                return i._preload_task = new c(e), i
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
                for (var t = 0; t < this._canvas.chara.length; t++) this._canvas.chara[t].alpha = 0;
                o.default.sound.voice.play(this._attackers[0].mst_id.toString(), 900), createjs.Tween.get(this._canvas.chara[0]).to({
                    x: -140,
                    y: -142,
                    alpha: 1
                }, 600).call(this._anim2)
            }, e.prototype._createSmoke = function (t, e, i) {
                var n = new h;
                return n.initialize(t), n.x = e, n.y = i, n
            }, e.prototype._endTask = function () {
                this._canvas.dispose(), this._view.removeChildren(), null != this._view.parent && this._view.parent.removeChild(this._view), this._attackers = null, this._view = null, this._canvas = null, this._ships = null, this._nelson = null, this._preload_task = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.CutinNelsonTouch = u;
    var c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._attackers = e, i
        }
        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this,
                e = new _.ShipLoader;
            e.add(this._attackers[0].mst_id, !1, "full"), e.add(this._attackers[0].mst_id, !1, "special");
            for (var i = 1; i < this._attackers.length; i++) e.add(this._attackers[i].mst_id, this._attackers[i].isDamaged(), "full");
            e.load(function () {
                t._endTask()
            })
        }, e
    }(r.TaskBase);
    e.PreloadCutinNelsonTouch = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new s.Sprite, e._img.anchor.set(.35, .8), e._img.scale.set(0), e.addChild(e._img), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._img.texture = a.BATTLE_MAIN.getTexture(t)
        }, e.prototype.createTweens = function (t, e) {
            createjs.Tween.get(this._img).wait(t).to({
                scaleX: 1.2,
                scaleY: 1.2
            }, 300).to({
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: 0
            }, 600).call(function () {
                e && e()
            })
        }, e
    }(PIXI.Container)
}