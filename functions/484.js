const function484 = function (t, e, i) {
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
        r = i(20),
        s = i(8),
        a = i(12),
        _ = i(59),
        l = i(483),
        u = i(485),
        c = i(1),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._showBG()
            }, e.prototype._showBG = function () {
                var t = this;
                this._bg = new p, this._bg.initialize(), this._bg.alpha = 0, this._layer.addChild(this._bg), createjs.Tween.get(this._bg).to({
                    alpha: 1
                }, 500).call(function () {
                    t._initializeMapImages(), t._initializeStampImages(), t._showMaps()
                })
            }, e.prototype.__createMapShowTweens = function (t) {
                for (var e = [], i = 0; i < this._maps.length; i++) {
                    var n = this._maps[i],
                        o = n.x;
                    n.x += 645;
                    var r = createjs.Tween.get(n).wait(i * t).to({
                        x: o - 12,
                        alpha: 1
                    }, 400).to({
                        x: o
                    }, 100);
                    e.push(r)
                }
                return e
            }, e.prototype.__createStampShowTweens = function (t) {
                for (var e = [], i = 0; i < this._stamps.length; i++) {
                    var n = this._stamps[i],
                        o = createjs.Tween.get(n).wait(350 + i * t).to({
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 400);
                    e.push(o)
                }
                return e
            }, e.prototype._showMaps = function () {
                var t = this,
                    e = new r.TweenTask;
                e.addTweens(this._createMapShowTweens()), e.addTweens(this._createStampShowTweens()), e.start(function () {
                    t._showText()
                })
            }, e.prototype.__showText = function (t) {
                var e = this;
                this._texts = t, this._texts.initialize(), this._texts.text1.alpha = 0, this._texts.text2.alpha = 0, this._texts.text3.alpha = 0, this._layer.addChild(this._texts), createjs.Tween.get(this._texts.text1).wait(200).to({
                    alpha: 1
                }, 400), createjs.Tween.get(this._texts.text2).wait(700).to({
                    alpha: 1
                }, 450), createjs.Tween.get(this._texts.text3).wait(1300).to({
                    alpha: 1
                }, 500).wait(500).call(function () {
                    e._showLastStamp()
                }), this._createParticle()
            }, e.prototype._createParticle = function () {
                this._particles = new u.ParticleLayer, this._particles.addParticle(1050, 440), this._particles.addParticle(1121, 392), this._particles.addParticle(1068, 263), this._particles.addParticle(230, 429), this._particles.addParticle(902, 399), this._particles.addParticle(951, 453), this._particles.addParticle(1089, 323), this._particles.addParticle(128, 383), this._particles.addParticle(207, 278), this._particles.addParticle(68, 320), this._particles.addParticle(296, 471), this._particles.addParticle(122, 272), this._particles.addParticle(93, 467), this._particles.addParticle(53, 425), this._layer.addChild(this._particles), this._particles.startAnimation()
            }, e.prototype._showLastStamp = function () {
                var t = this;
                this._stamp_last = this._createStampLast();
                var e = this._layer.getChildIndex(this._texts);
                this._layer.addChildAt(this._stamp_last, e), createjs.Tween.get(this._stamp_last).wait(800).to({
                    alpha: 1
                }, 200);
                var i = new a.Sprite(this._stamp_last.texture);
                i.anchor.set(.5), i.position.set(this._stamp_last.x, this._stamp_last.y), i.scale.set(2), i.alpha = 0, e = this._layer.getChildIndex(this._texts), this._layer.addChildAt(i, e + 1), createjs.Tween.get(i).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 800).to({
                    alpha: 0
                }, 200).call(function () {
                    t._layer.removeChild(i), t._waitClick()
                })
            }, e.prototype._waitClick = function () {
                var t = this,
                    e = new s.AreaBox(0);
                e.buttonMode = !0, this._layer.addChild(e);
                var i = new _.GearBtnNext;
                i.position.set(1139, 561), i.initialize(), i.activate(), this._layer.addChild(i), e.once(c.EventType.CLICK, function () {
                    i.dispose(), t._layer.removeChild(e), t._hide(i)
                })
            }, e.prototype._hide = function (t) {
                for (var e = this, i = new r.TweenTask, n = 0; n < this._maps.length; n++) {
                    var o = this._maps[n],
                        s = createjs.Tween.get(o).wait(50 * n).to({
                            x: o.x - 75,
                            alpha: 0
                        }, 200);
                    i.addTween(s)
                }
                for (var n = 0; n < this._stamps.length; n++) {
                    var a = this._stamps[n],
                        _ = createjs.Tween.get(a).wait(50 * n).to({
                            x: a.x - 75,
                            alpha: 0
                        }, 200);
                    i.addTween(_)
                }
                var l = createjs.Tween.get(this._texts.text1).wait(100).to({
                    x: this._texts.text1.x - 47,
                    alpha: 0
                }, 200);
                i.addTween(l), l = createjs.Tween.get(this._texts.text2).wait(200).to({
                    x: this._texts.text2.x - 47,
                    alpha: 0
                }, 200), i.addTween(l), l = createjs.Tween.get(this._texts.text3).wait(150).to({
                    x: this._texts.text3.x - 47,
                    alpha: 0
                }, 200), i.addTween(l), l = createjs.Tween.get(this._stamp_last).wait(200).to({
                    x: this._stamp_last.x - 75,
                    alpha: 0
                }, 200), i.addTween(l), l = createjs.Tween.get(this._particles).wait(200).to({
                    alpha: 0
                }, 200).call(function () {
                    e._particles.stopAnimation(), e._layer.removeChild(e._particles)
                }), i.addTween(l), l = createjs.Tween.get(t).to({
                    alpha: 0
                }, 500).call(function () {
                    t.dispose(), e._layer.removeChild(t)
                }), i.addTween(l), l = createjs.Tween.get(this._bg).wait(200).to({
                    alpha: 0
                }, 300), i.addTween(l), i.start(function () {
                    for (var t = 0, i = e._maps; t < i.length; t++) {
                        var n = i[t];
                        e._layer.removeChild(n)
                    }
                    for (var o = 0, r = e._stamps; o < r.length; o++) {
                        var s = r[o];
                        e._layer.removeChild(s)
                    }
                    e._layer.removeChild(e._texts), e._layer.removeChild(e._stamp_last), e._layer.removeChild(e._bg), e._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskEventEndingBase = h;
    var p = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite;
                t.texture = l.BATTLE_RESULT_EVENT_BASE.getTexture(5), t.position.set(0, 65), t.alpha = .9, this.addChild(t);
                var e = l.BATTLE_RESULT_EVENT_BASE.getTexture(6),
                    i = new PIXI.Sprite(e);
                i.position.set(270, 8), this.addChild(i);
                var n = l.BATTLE_RESULT_EVENT_BASE.getTexture(3),
                    o = new PIXI.Sprite(n);
                o.rotation = Math.PI, o.position.set(984, 713), this.addChild(o)
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._text1 = new PIXI.Sprite, e.addChild(e._text1), e._text2 = new PIXI.Sprite, e.addChild(e._text2), e._text3 = new PIXI.Sprite, e.addChild(e._text3), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "text1", {
                get: function () {
                    return this._text1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text2", {
                get: function () {
                    return this._text2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "text3", {
                get: function () {
                    return this._text3
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(PIXI.Container);
    e.TextsBase = d
}