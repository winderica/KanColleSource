const function1469 = function (t, e, i) {
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
        a = i(8),
        _ = i(59),
        l = i(12),
        u = i(9),
        c = i(36),
        h = i(476),
        p = i(1),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._parfect = !0, i._scene = e;
                var n = i._scene.data.battle_model;
                if (i._rank = i._scene.data.battle_result_rank, "S" != i._rank) i._parfect = !1;
                else
                    for (var r = n.deck_f.ships, s = 0, a = r; s < a.length; s++) {
                        var _ = a[s];
                        if (null != _) {
                            var l = n.ship_info.getFirstData(!0).get(_.mem_id).hp;
                            if (_.hp_now < l) {
                                i._parfect = !1;
                                break
                            }
                        }
                    }
                return 1 == i._parfect ? i._view = new m : i._view = new y, i._view.position.set(o.default.width / 2, o.default.height / 2), i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (this._view.initialize(this._rank), this._view.bg.alpha = 0, this._view.congratulations.x = o.default.width, this._view.congratulations_text.x = o.default.width / 4 * 3, this._view.congratulations_text.alpha = 0, this._view.relief.alpha = 0, this._view.relief.scale.set(1.72), 0 == this._parfect) {
                    var e = this._view;
                    e.text.alpha = 0, e.text.scale.set(1.6)
                } else {
                    var e = this._view;
                    e.text_kan.alpha = 0, e.text_kan.scale.set(2), e.text_zen.alpha = 0, e.text_zen.scale.set(2), e.text_sho.alpha = 0, e.text_sho.scale.set(2), e.text_ri.alpha = 0, e.text_ri.scale.set(2), e.text_ex.alpha = 0, e.text_ex.scale.set(2)
                }
                this._view.rank.visible = !1;
                var i = new PIXI.Sprite(c.BATTLE_RESULT_MAIN.getTexture(24));
                i.anchor.set(.5), this._view.bg.addChild(i), this._scene.view.addChild(this._view), createjs.Tween.get(this._view.bg).to({
                    alpha: 1
                }, 233), createjs.Tween.get(i).wait(233).to({
                    alpha: 0
                }, 266).call(function () {
                    t._view.bg.removeChild(i), t._showTextAndRelief()
                })
            }, e.prototype._showTextAndRelief = function () {
                var t = this;
                if (0 == this._parfect) {
                    var e = this._view;
                    createjs.Tween.get(e.text).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200)
                } else {
                    var e = this._view;
                    createjs.Tween.get(e.text_kan).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).call(function () {
                        var e = new PIXI.Rectangle(-540, -60, 120, 120);
                        t._view.particle.startBigParticle(2, e)
                    }), createjs.Tween.get(e.text_zen).wait(66).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).call(function () {
                        var e = new PIXI.Rectangle(-368, -60, 120, 120);
                        t._view.particle.startBigParticle(2, e)
                    }), createjs.Tween.get(e.text_sho).wait(133).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).call(function () {
                        var e = new PIXI.Rectangle(-195, -60, 120, 120);
                        t._view.particle.startBigParticle(2, e)
                    }), createjs.Tween.get(e.text_ri).wait(200).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).call(function () {
                        var e = new PIXI.Rectangle(-30, -60, 120, 120);
                        t._view.particle.startBigParticle(2, e)
                    }), createjs.Tween.get(e.text_ex).wait(266).to({
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).call(function () {
                        var e = new PIXI.Rectangle(128, -60, 90, 120);
                        t._view.particle.startBigParticle(2, e)
                    })
                }
                createjs.Tween.get(this._view.relief).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 200).call(function () {
                    t._showBlueParticle()
                })
            }, e.prototype._showBlueParticle = function () {
                var t = this;
                if (0 == this._parfect && "S" == this._rank || "A" == this._rank) {
                    var e = new PIXI.Rectangle(-420, -75, 405, 150);
                    this._view.particle.startBlueParticle(5, e)
                } else if ("B" == this._rank) {
                    var e = new PIXI.Rectangle(-570, -60, 690, 120);
                    this._view.particle.startBlueParticle(4, e)
                }
                createjs.Tween.get(this).wait(566).call(function () {
                    t._showRank()
                })
            }, e.prototype._showRank = function () {
                var t = this,
                    e = .58;
                "S" == this._rank ? (this._view.particle.startKamihubuki(60), e = 1, r.default.sound.bgm.play(1, !1, 0, "fanfare")) : "A" == this._rank ? (this._view.particle.startKamihubuki(30), r.default.sound.bgm.play(2, !1, 0, "fanfare")) : "B" == this._rank ? (this._view.particle.startKamihubuki(15), r.default.sound.bgm.play(3, !1, 0, "fanfare")) : r.default.sound.bgm.play(4, !1, 0, "fanfare"), this._view.rank.visible = !0, createjs.Tween.get(this._view.rank).to({
                    scaleX: e,
                    scaleY: e
                }, 233).call(function () {
                    t._showParticle2()
                }), "S" == this._rank && (this._view.congratulations.visible = !0, this._view.congratulations_text.visible = !0, createjs.Tween.get(this._view.congratulations).to({
                    x: 0
                }, 233), createjs.Tween.get(this._view.congratulations_text).wait(100).to({
                    x: 0,
                    alpha: 1
                }, 200))
            }, e.prototype._showParticle2 = function () {
                var t = this;
                if (1 == this._parfect) {
                    var e = new PIXI.Rectangle(300, -135, 150, 240);
                    this._view.particle.startBigParticle(6, e)
                } else if ("S" == this._rank) {
                    var e = new PIXI.Rectangle(210, -135, 150, 240);
                    this._view.particle.startYellowParticle(4, e)
                }
                if ("S" == this._rank) {
                    var e = new PIXI.Rectangle(-300, 213, 600, 54);
                    this._view.particle.startGoldParticle(5, e)
                }
                createjs.Tween.get(this).wait(1233).call(function () {
                    t._showNextGearButton()
                })
            }, e.prototype._showNextGearButton = function () {
                var t = this,
                    e = new _.GearBtnNext;
                e.position.set(530, 288), e.initialize(), e.activate(), this._view.addChild(e);
                var i = new a.AreaBox(0);
                i.buttonMode = !0, i.position.set(-600, -360), this._view.addChild(i), i.once(p.EventType.CLICK, function () {
                    t._hideRankCutin(e, i)
                })
            }, e.prototype._hideRankCutin = function (t, e) {
                var i = this;
                createjs.Tween.get(this._view).to({
                    alpha: 0
                }, 200).call(function () {
                    t.deactivate(), i._view.removeChild(t), i._view.removeChild(e), i._scene.view.removeChild(i._view), i._view.dispose(), i._endTask()
                })
            }, e
        }(s.TaskBase);
    e.TaskRank = d;
    var f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e._bg.anchor.set(.5), e._congratulations = new PIXI.Sprite, e._congratulations.anchor.set(.5), e._congratulations.position.set(0, 240), e._congratulations_text = new PIXI.Sprite, e._congratulations_text.anchor.set(.5), e._congratulations_text.position.set(0, 240), e._relief = new l.Sprite, e._relief.anchor.set(.5), e._relief.position.set(288, 0), e._texts_canvas = new l.Sprite, e._texts_canvas.position.set(-219, 0), e._rank = new l.Sprite, e._rank.anchor.set(.5), e._rank.position.set(288, 0), e._particle = new v, e.addChild(e._bg), e.addChild(e._congratulations), e.addChild(e._congratulations_text), e.addChild(e._relief), e.addChild(e._texts_canvas), e.addChild(e._rank), e.addChild(e._particle), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "congratulations", {
                get: function () {
                    return this._congratulations
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "congratulations_text", {
                get: function () {
                    return this._congratulations_text
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "relief", {
                get: function () {
                    return this._relief
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "texts_canvas", {
                get: function () {
                    return this._texts_canvas
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "rank", {
                get: function () {
                    return this._rank
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "particle", {
                get: function () {
                    return this._particle
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {}, e.prototype.dispose = function () {
                this.removeChildren(), this._particle.dispose()
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._text = new l.Sprite, e._text.anchor.set(.5), e.texts_canvas.addChild(e._text), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "text", {
                get: function () {
                    return this._text
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this.bg.texture = u.COMMON_MISC.getTexture(120), "S" == t ? (this.congratulations.texture = c.BATTLE_RESULT_MAIN.getTexture(22), this.congratulations_text.texture = c.BATTLE_RESULT_MAIN.getTexture(23)) : (this.congratulations.texture = PIXI.Texture.EMPTY, this.congratulations_text.texture = PIXI.Texture.EMPTY, this.congratulations.visible = !1, this.congratulations_text.visible = !1), this.relief.texture = "D" == t || "E" == t ? PIXI.Texture.EMPTY : c.BATTLE_RESULT_MAIN.getTexture(38);
                var e;
                this._text.position.x = 0, "S" == t || "A" == t ? e = 35 : "B" == t ? (this._text.position.x = 40, e = 33) : "C" == t ? (this._text.position.x = 60, e = 34) : e = 32, this._text.texture = c.BATTLE_RESULT_MAIN.getTexture(e), "S" == t ? (e = 42, this.rank.scale.set(1.72)) : e = "A" == t ? 36 : "B" == t ? 37 : "C" == t ? 39 : "D" == t ? 40 : 41, this.rank.texture = c.BATTLE_RESULT_MAIN.getTexture(e)
            }, e
        }(f),
        m = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.relief.position.set(375, 0), e.rank.position.set(363, 0), e._text_kan = new l.Sprite, e._text_kan.anchor.set(.5), e._text_kan.position.set(-269, 0), e._text_zen = new l.Sprite, e._text_zen.anchor.set(.5), e._text_zen.position.set(-96, 0), e._text_sho = new l.Sprite, e._text_sho.anchor.set(.5), e._text_sho.position.set(77, 0), e._text_ri = new l.Sprite, e._text_ri.anchor.set(.5), e._text_ri.position.set(249, 0), e._text_ex = new l.Sprite, e._text_ex.anchor.set(.5), e._text_ex.position.set(392, 0), e.texts_canvas.addChild(e._text_kan), e.texts_canvas.addChild(e._text_zen), e.texts_canvas.addChild(e._text_sho), e.texts_canvas.addChild(e._text_ri), e.texts_canvas.addChild(e._text_ex), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "text_kan", {
                get: function () {
                    return this._text_kan
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_zen", {
                get: function () {
                    return this._text_zen
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_sho", {
                get: function () {
                    return this._text_sho
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_ri", {
                get: function () {
                    return this._text_ri
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text_ex", {
                get: function () {
                    return this._text_ex
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this.bg.texture = u.COMMON_MISC.getTexture(120), "S" == t ? (this.congratulations.texture = c.BATTLE_RESULT_MAIN.getTexture(22), this.congratulations_text.texture = c.BATTLE_RESULT_MAIN.getTexture(23)) : (this.congratulations.texture = PIXI.Texture.EMPTY, this.congratulations_text.texture = PIXI.Texture.EMPTY, this.congratulations.visible = !1, this.congratulations_text.visible = !1), this.relief.texture = "D" == t || "E" == t ? PIXI.Texture.EMPTY : c.BATTLE_RESULT_MAIN.getTexture(38);
                var e;
                e = "S" == t || "A" == t ? 35 : "B" == t ? 33 : "C" == t ? 34 : 32, this._text_kan.texture = c.BATTLE_RESULT_MAIN.getTexture(81), this._text_zen.texture = c.BATTLE_RESULT_MAIN.getTexture(82), this._text_sho.texture = c.BATTLE_RESULT_MAIN.getTexture(83), this._text_ri.texture = c.BATTLE_RESULT_MAIN.getTexture(84), this._text_ex.texture = c.BATTLE_RESULT_MAIN.getTexture(85), "S" == t ? (e = 42, this.rank.scale.set(1.72)) : e = "A" == t ? 36 : "B" == t ? 37 : "C" == t ? 39 : "D" == t ? 40 : 41, this.rank.texture = c.BATTLE_RESULT_MAIN.getTexture(e)
            }, e
        }(f),
        v = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._blue = new PIXI.Container, e._yellow = new PIXI.Container, e._gold = new PIXI.Container, e._big = new PIXI.Container, e._kamihubuki = new h.KamihubukiLayer, e._kamihubuki.position.set(-600, -360), e.addChild(e._blue), e.addChild(e._yellow), e.addChild(e._gold), e.addChild(e._big), e.addChild(e._kamihubuki), e
            }
            return n(e, t), e.prototype.startBlueParticle = function (t, e) {
                for (var i = 0; i < t; i++) {
                    var n = new g(.2 * Math.random() + .8);
                    n.x = e.x + Math.random() * e.width, n.y = e.y + Math.random() * e.height, n.initialize(), n.activate(), this._blue.addChild(n)
                }
            }, e.prototype.startYellowParticle = function (t, e) {
                for (var i = 0; i < t; i++) {
                    var n = new b(.1 * Math.random() + .9);
                    n.x = e.x + Math.random() * e.width, n.y = e.y + Math.random() * e.height, n.initialize(), n.activate(), this._blue.addChild(n)
                }
            }, e.prototype.startGoldParticle = function (t, e) {
                for (var i = 0; i < t; i++) {
                    var n = new w(.2 * Math.random() + .8);
                    n.x = e.x + Math.random() * e.width, n.y = e.y + Math.random() * e.height, n.initialize(), n.activate(), this._gold.addChild(n)
                }
            }, e.prototype.startBigParticle = function (t, e) {
                for (var i = 0; i < t; i++) {
                    var n = new x(.2 * Math.random() + .6);
                    n.x = e.x + Math.random() * e.width, n.y = e.y + Math.random() * e.height, n.initialize(), n.activate(), this._big.addChild(n)
                }
            }, e.prototype.startKamihubuki = function (t) {
                this._kamihubuki.startKamihubuki(t)
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._blue.children; t < e.length; t++) {
                    var i = e[t];
                    i.deactivate()
                }
                this._blue.removeChildren();
                for (var n = 0, o = this._yellow.children; n < o.length; n++) {
                    var i = o[n];
                    i.deactivate()
                }
                this._yellow.removeChildren();
                for (var r = 0, s = this._gold.children; r < s.length; r++) {
                    var i = s[r];
                    i.deactivate()
                }
                this._gold.removeChildren();
                for (var a = 0, _ = this._big.children; a < _.length; a++) {
                    var i = _[a];
                    i.deactivate()
                }
                this._big.removeChildren(), this._kamihubuki.dispose()
            }, e
        }(PIXI.Container),
        g = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._base_scale = e, i.anchor.set(.5), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = u.COMMON_MISC.getTexture(115), this._init()
            }, e.prototype.activate = function () {
                this._startAnim()
            }, e.prototype.deactivate = function () {
                this._stopAnim()
            }, e.prototype._init = function () {
                this.alpha = 0, this.scale.set(0)
            }, e.prototype._startAnim = function () {
                var t = this;
                this._stopAnim(), this._init();
                var e = 2500 * Math.random();
                this._t1 = createjs.Tween.get(this).wait(e).to({
                    alpha: 1,
                    scaleX: this._base_scale,
                    scaleY: this._base_scale
                }, 133).to({
                    scaleX: 0,
                    scaleY: 0
                }, 200).call(function () {
                    t._startAnim()
                }), this._t2 = createjs.Tween.get(this).wait(e).to({
                    rotation: (100 * Math.random() - 50) / 180 * Math.PI
                }, 333)
            }, e.prototype._stopAnim = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null)
            }, e
        }(l.Sprite),
        b = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._base_scale = e, i.anchor.set(.5), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = c.BATTLE_RESULT_MAIN.getTexture(12), this._init()
            }, e.prototype.activate = function () {
                this._startAnim()
            }, e.prototype.deactivate = function () {
                this._stopAnim()
            }, e.prototype._init = function () {
                this.alpha = 0, this.scale.set(0)
            }, e.prototype._startAnim = function () {
                var t = this;
                this._stopAnim(), this._init();
                var e = 2500 * Math.random(),
                    i = Math.random() < .5 ? 1 : -1;
                this._t1 = createjs.Tween.get(this).wait(e).to({
                    alpha: 1,
                    scaleX: this._base_scale,
                    scaleY: i * this._base_scale
                }, 133).to({
                    scaleX: 0,
                    scaleY: 0
                }, 200).call(function () {
                    t._startAnim()
                }), this._t2 = createjs.Tween.get(this).wait(e).to({
                    rotation: (100 * Math.random() - 50) / 180 * Math.PI
                }, 333)
            }, e.prototype._stopAnim = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null)
            }, e
        }(l.Sprite),
        w = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._base_scale = e, i.anchor.set(.5), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = c.BATTLE_RESULT_MAIN.getTexture(11), this._init()
            }, e.prototype.activate = function () {
                this._startAnim()
            }, e.prototype.deactivate = function () {
                this._stopAnim()
            }, e.prototype._init = function () {
                this.alpha = 0, this.scale.set(0)
            }, e.prototype._startAnim = function () {
                var t = this;
                this._stopAnim(), this._init();
                var e = 2500 * Math.random();
                this._t1 = createjs.Tween.get(this).wait(e).to({
                    alpha: 1,
                    scaleX: .42 * this._base_scale,
                    scaleY: .42 * this._base_scale
                }, 133).to({
                    scaleX: 0,
                    scaleY: 0
                }, 200).call(function () {
                    t._startAnim()
                }), this._t2 = createjs.Tween.get(this).wait(e).to({
                    rotation: (100 * Math.random() - 50) / 180 * Math.PI
                }, 333)
            }, e.prototype._stopAnim = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null)
            }, e
        }(l.Sprite),
        x = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._base_scale = e, i.anchor.set(.5), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = c.BATTLE_RESULT_MAIN.getTexture(10), this._init()
            }, e.prototype.activate = function () {
                this._startAnim()
            }, e.prototype.deactivate = function () {
                this._stopAnim()
            }, e.prototype._init = function () {
                this.alpha = 0, this.scale.set(0)
            }, e.prototype._startAnim = function () {
                var t = this;
                this._stopAnim(), this._init();
                var e = 2500 * Math.random();
                this._t1 = createjs.Tween.get(this).wait(e).to({
                    alpha: 1,
                    scaleX: this._base_scale,
                    scaleY: this._base_scale
                }, 133).to({
                    scaleX: 0,
                    scaleY: 0
                }, 200).call(function () {
                    t._startAnim()
                }), this._t2 = createjs.Tween.get(this).wait(e).to({
                    rotation: (100 * Math.random() - 50) / 180 * Math.PI
                }, 333)
            }, e.prototype._stopAnim = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null)
            }, e
        }(l.Sprite)
}