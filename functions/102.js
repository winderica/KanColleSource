const function102 = function (t, e, i) {
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
        r = i(25),
        s = i(2),
        a = i(12),
        _ = i(14),
        u = i(6),
        l = i(1411),
        c = i(65),
        h = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n._layer = new p, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (null != this._scene.data.model.gekimetsu_data) this._endTask();
                else if (this._scene.data.model.map_info.isAirRaid()) this._endTask();
                else if (this._scene.data.model.map_info.isLongRangeFires()) this._endTask();
                else {
                    var e = new c.PhaseEnemyEnter(this._scene, this._record);
                    e.start(function () {
                        var e = t._record.common.formation_id_f,
                            i = t._record.common.formation_id_e,
                            n = t._record.common.formation_id_c;
                        t._layer.preInitialize(e, i, function () {
                            t._layer.initialize(n), t._scene.view.layer_info.addChild(t._layer), t._anim1()
                        })
                    })
                }
            }, e.prototype._anim1 = function () {
                var t = this,
                    e = this._scene.view.raderLayer,
                    i = e.rader_f,
                    n = e.rader_e;
                this._scene.view.layer_cutin.addChild(i), this._scene.view.layer_cutin.addChild(n), createjs.Tween.get(this._layer.barTop.scale).to({
                    y: 1
                }, 300), createjs.Tween.get(this._layer.barBottom.scale).to({
                    y: 1
                }, 300).call(function () {
                    t._anim2()
                })
            }, e.prototype._anim2 = function () {
                var t = this,
                    e = o.default.width / 2 - 399 + this._layer.formation_name_f.width / 2;
                createjs.Tween.get(this._layer.formation_name_f).to({
                    x: e
                }, 400, createjs.Ease.sineOut), e = o.default.width / 2 + 399 - this._layer.formation_name_e.width / 2, createjs.Tween.get(this._layer.formation_name_e).to({
                    x: e
                }, 400, createjs.Ease.sineOut).call(function () {
                    t._anim3()
                })
            }, e.prototype._anim3 = function () {
                var t = this;
                this._layer.cross.play(), this._layer.cross.once("complete", function () {
                    t._anim4()
                })
            }, e.prototype._anim4 = function () {
                var t = this;
                createjs.Tween.get(this._layer.advantageous).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 250).wait(250).call(function () {
                    t._anim5()
                })
            }, e.prototype._anim5 = function () {
                var t = this;
                createjs.Tween.get(this._layer.barTop.scale).wait(200).to({
                    y: 0
                }, 200), createjs.Tween.get(this._layer.barBottom.scale).wait(200).to({
                    y: 0
                }, 200);
                var e = 0 - this._layer.formation_name_f.width / 2;
                createjs.Tween.get(this._layer.formation_name_f).to({
                    x: e
                }, 400, createjs.Ease.sineIn), e = o.default.width + this._layer.formation_name_e.width / 2, createjs.Tween.get(this._layer.formation_name_e).to({
                    x: e
                }, 400, createjs.Ease.sineIn), createjs.Tween.get(this._layer.cross).to({
                    x: -o.default.width / 2
                }, 400), createjs.Tween.get(this._layer.advantageous).to({
                    x: -o.default.width / 2
                }, 400).call(function () {
                    t._preEnd()
                })
            }, e.prototype._preEnd = function () {
                this._scene.view.layer_info.removeChild(this._layer), this._layer.dispose(), this._scene.view.raderLayer.resetChildren(), this._endTask()
            }, e
        }(s.TaskBase);
    e.PhaseFormation = h;
    var p = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "barTop", {
                get: function () {
                    return this._barTop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "barBottom", {
                get: function () {
                    return this._barBottom
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "formation_name_f", {
                get: function () {
                    return this._formation_name_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "formation_name_e", {
                get: function () {
                    return this._formation_name_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cross", {
                get: function () {
                    return this._cross
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "advantageous", {
                get: function () {
                    return this._advantageous
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preInitialize = function (t, e, i) {
                var n = this;
                this._initializeBars(), this._formation_name_f = new PIXI.Sprite, this._formation_name_f.anchor.set(.5), this.addChild(this._formation_name_f), this._formation_name_e = new PIXI.Sprite, this._formation_name_e.anchor.set(.5), this.addChild(this._formation_name_e);
                var s = new _.UIImageLoader("battle"),
                    a = "battle_jin/" + r.MathUtil.zeroPadding(t, 3) + "_f.png";
                s.add(a, "battle_jin_f");
                var u = "battle_jin/" + r.MathUtil.zeroPadding(e, 3) + "_e.png";
                s.add(u, "battle_jin_e"), s.load(function () {
                    n._formation_name_f.texture = PIXI.Texture.fromFrame("battle_jin_f"), n._formation_name_f.x = o.default.width + n._formation_name_f.width / 2, n._formation_name_f.y = o.default.height / 2 + 243, n._formation_name_e.texture = PIXI.Texture.fromFrame("battle_jin_e"), n._formation_name_e.x = 0 - n._formation_name_e.width / 2, n._formation_name_e.y = o.default.height / 2 - 243, i()
                })
            }, e.prototype.initialize = function (t) {
                if (this._cross = new d, this._cross.position.set(o.default.width / 2, o.default.height / 2), this.addChild(this._cross), this._cross.initialize(t), 3 == t) {
                    this._cross.y -= 38;
                    var e = l.BATTLE_JIN.getTexture(6);
                    this._advantageous = new a.Sprite(e)
                } else if (4 == t) {
                    this._cross.y -= 38;
                    var e = l.BATTLE_JIN.getTexture(5);
                    this._advantageous = new a.Sprite(e)
                } else this._advantageous = new a.Sprite(PIXI.Texture.EMPTY);
                this._advantageous.anchor.set(.5), this._advantageous.position.set(o.default.width / 2, 458), this._advantageous.scale.set(2), this._advantageous.alpha = 0, this.addChild(this._advantageous)
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e.prototype._createBar = function () {
                var t = new PIXI.Graphics;
                return t.beginFill(0, .8), t.drawRect(-o.default.width / 2, -83, o.default.width, 165), t.endFill(), t
            }, e.prototype._initializeBars = function () {
                this._barTop = this._createBar(), this._barBottom = this._createBar(), this._barTop.position.set(o.default.width / 2, o.default.height / 2 - 243), this._barBottom.position.set(o.default.width / 2, o.default.height / 2 + 243), this._barTop.scale.y = 0, this._barBottom.scale.y = 0, this.addChild(this._barTop), this.addChild(this._barBottom)
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._playSE = function () {
                    u.SE.play("109")
                }, e._c1 = new a.Sprite, e._c2 = new a.Sprite, e._c3 = new a.Sprite, e._c1.anchor.set(.5), e._c2.anchor.set(.5), e._c3.anchor.set(.5), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._c1.position.x = -278, this._c3.position.x = 278, this._c1.scale.set(2), this._c2.scale.set(2), this._c3.scale.set(2), 1 == t ? (this._c1.texture = l.BATTLE_JIN.getTexture(0), this._c2.texture = l.BATTLE_JIN.getTexture(2), this._c3.texture = l.BATTLE_JIN.getTexture(3)) : 2 == t ? (this._c1.texture = l.BATTLE_JIN.getTexture(1), this._c2.texture = l.BATTLE_JIN.getTexture(2), this._c3.texture = l.BATTLE_JIN.getTexture(3)) : (this._c1.texture = l.BATTLE_JIN.getTexture(4), this._c2.texture = l.BATTLE_JIN.getTexture(7), this._c3.texture = l.BATTLE_JIN.getTexture(3))
            }, e.prototype.play = function () {
                var t = this;
                createjs.Tween.get(this._c1).call(function () {
                    t.addChild(t._c1)
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300).call(this._playSE), createjs.Tween.get(this._c2).wait(200).call(function () {
                    t.addChild(t._c2)
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300).call(this._playSE), createjs.Tween.get(this._c3).wait(400).call(function () {
                    t.addChild(t._c3)
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 300).call(function () {
                    t._playSE(), t.emit("complete")
                })
            }, e
        }(PIXI.Container)
}