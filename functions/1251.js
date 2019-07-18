const function1251 = function (t, e, i) {
    "use strict";

    function n(t) {
        return t * Math.PI / 180
    }
    var o = this && this.__extends || function () {
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
    var r = i(5),
        s = i(1),
        a = i(4),
        _ = i(6),
        u = i(137),
        l = i(1252);
    e.COMPASS_FADEIN = 500, e.PIN_SWING_VOL = n(2), e.getRad = n;
    var c = function (t) {
        function i() {
            var i = t.call(this) || this;
            return i.Dispose = function () {
                i.removeChildren(), i._callBack = null, i._runTween = null, i._bg = null, i._clickLayer = null, i._girl = null, i._compass = null, i._txtBox = null, i._light = null, i._pin = null, i._text.destroy(), i._text = null, i._type = null, i._isPin = null, i._isSwing = null, i._vibrateR = null, i._vibrateWidth = null, i._pini = null, i._span = null, i._targetR = null, i._step = null, i._message1 = null, i._message2 = null, i._message3 = null
            }, i.Play = function (t, e, n) {
                i._callBack = n;
                var o = -Math.atan2(e.y - t.y, e.x - t.x) / Math.PI * 180 + 270;
                i._targetR = o, i.startAnimation()
            }, i.startAnimation = function () {
                var t;
                switch (i._type) {
                    case 1:
                        t = function () {
                            createjs.Tween.get(i._girl).to({
                                y: 368,
                                alpha: 1
                            }, e.COMPASS_FADEIN)
                        };
                        break;
                    case 2:
                    case 3:
                        t = function () {
                            createjs.Tween.get(i._girl).to({
                                y: 353,
                                alpha: 1
                            }, e.COMPASS_FADEIN)
                        };
                        break;
                    case 4:
                        t = function () {
                            createjs.Tween.get(i._girl).to({
                                x: 960,
                                y: 353,
                                alpha: 1
                            }, e.COMPASS_FADEIN)
                        }
                }
                createjs.Tween.get(null).call(function () {
                    createjs.Tween.get(i._compass).to({
                        alpha: 1
                    }, 300), createjs.Tween.get(i._compass.scale).to({
                        x: 1,
                        y: 1
                    }, 300), createjs.Tween.get(i._pin).to({
                        alpha: 1
                    }, 300), createjs.Tween.get(i._pin.scale).to({
                        x: 1,
                        y: 1
                    }, 300), createjs.Tween.get(i._light).to({
                        alpha: .8
                    }, 300), createjs.Tween.get(i._light.scale).to({
                        x: 1,
                        y: 1
                    }, 300), createjs.Tween.get(i._bg).to({
                        alpha: .3
                    }, 300)
                }).wait(300).call(function () {
                    t()
                }).wait(e.COMPASS_FADEIN).call(function () {
                    i.phase1End()
                })
            }, i.run = function () {
                i._isPin && i.updatePinMove(), i._isSwing && i.updateGirlSwing()
            }, i.phase1End = function () {
                switch (i._clickLayer.interactive = !0, i._clickLayer.buttonMode = !0, i._clickLayer.on(s.EventType.CLICK, i.clickCompass), i._runTween = createjs.Tween.get({}), i._runTween.wait(500).loop = !0, i._runTween.play(null), i._runTween.addEventListener("change", i.run), i._isPin = !0, i._txtBox.alpha = 1, i._text.alpha = 1, i._type) {
                    case 4:
                        i._isSwing = !0
                }
            }, i.clickCompass = function () {
                i._clickLayer.interactive = !1, i._clickLayer.buttonMode = !1;
                var t = function (t) {
                    i._girl.texture = l.MAP_COMPASS.getTexture(t), i._text.text = i._message2, i.playRashinbanSE(), i.updateRotate()
                };
                switch (i._type) {
                    case 1:
                        i._girl.texture = l.MAP_COMPASS.getTexture(1), createjs.Tween.get(null).wait(500).call(function () {
                            t(0)
                        });
                        break;
                    case 2:
                        i._girl.texture = l.MAP_COMPASS.getTexture(3), createjs.Tween.get(null).wait(500).call(function () {
                            t(2)
                        });
                        break;
                    case 3:
                        i._girl.texture = l.MAP_COMPASS.getTexture(5), createjs.Tween.get(null).wait(500).call(function () {
                            t(4)
                        });
                        break;
                    case 4:
                        i._step = 0, i._isSwing = !1, i._text.text = i._message2;
                        var e = function () {
                            i.playRashinbanSE(), i._isSwing = !0, i.updateRotate()
                        };
                        createjs.Tween.get(i._girl).to({
                            y: 363
                        }, 33).to({
                            y: 321
                        }, 133).to({
                            y: 384
                        }, 133).to({
                            y: 351
                        }, 33).wait(100).call(function () {
                            e()
                        })
                }
            }, i
        }
        return o(i, t), i.prototype.initialize = function (t) {
            switch (this._type = t, this._vibrateR = 4, this._vibrateWidth = 6, this._pini = 0, this._isPin = !1, this._isSwing = !1, this._clickLayer = new PIXI.Graphics, this._clickLayer.beginFill(0, 0), this._clickLayer.drawRect(0, 0, r.default.width, r.default.height), this._clickLayer.endFill(), this._bg = new PIXI.Graphics, this._bg.beginFill(0, 1), this._bg.drawRect(0, 0, r.default.width, r.default.height), this._bg.endFill(), this._bg.alpha = 0, this._compass = new PIXI.Sprite(u.SALLY_MAP_PARTS.getTexture(15)), this._compass.anchor.set(.5), this._compass.position.set(600, 360), this._compass.alpha = 0, this._compass.scale.set(1.36, 1.36), this._light = new PIXI.Sprite(u.SALLY_MAP_PARTS.getTexture(16)), this._light.anchor.set(.5), this._light.position.set(600, 360), this._light.alpha = 0, this._light.scale.set(1.36, 1.36), this._pin = new PIXI.Sprite(u.SALLY_MAP_PARTS.getTexture(17)), this._pin.anchor.set(.5), this._pin.position.set(600, 360), this._pin.alpha = 0, this._pin.scale.set(1.36, 1.36), this._txtBox = this.createSprite(7, .5, .5, 915, 585, 0), this._text = new a.TextBox(27, "black"), this._text.position.set(705, 573), this._text.alpha = 0, this.addChild(this._bg), this.addChild(this._compass), this.addChild(this._pin), this.addChild(this._light), this.addChild(this._txtBox), this.addChild(this._text), this._type) {
                case 1:
                    this._step = 16, this._message1 = "\u3048\u30fc\uff1f\u3089\u3057\u3093\u3070\u3093\u3001\u307e\u308f\u3059\u306e\u30fc\uff1f", this._message2 = "\u2026\u2026\u3093", this._message3 = "\u2026\u2026\u3042\u3044", this._girl = this.createSprite(0, .5, .5, 915, 450, 0);
                    break;
                case 2:
                    this._step = 15, this._message1 = "\u3088\u30fc\u3057\u3001\u3089\u3057\u3093\u3070\u3093\u307e\u308f\u3059\u3088\u30fc\uff01", this._message2 = "\u3048\u3044\u3063", this._message3 = "\u3053\u3053\u3063", this._girl = this.createSprite(2, .5, .5, 915, 450, 0);
                    break;
                case 3:
                    this._step = 0, this._message1 = "\u306f\u3084\u304f\u306f\u3084\u304f\u30fc\uff01", this._message2 = "\u3048\u3044\u3048\u3044\u3048\u30fc\u3044\u3063", this._message3 = "\u3068\u307e\u308c\u30fc\u3063", this._girl = this.createSprite(4, .5, .5, 915, 450, 0);
                    break;
                case 4:
                    this._step = 0, this._message1 = "\u3089\u3057\u3093\u3070\u3093\u3092\u307e\u308f\u3057\u3066\u306d\uff01", this._message2 = "\u3048\u3044\u3063", this._message3 = "\u305d\u308c\u3063", this._girl = this.createSprite(6, .5, .5, 1185, 315, 0)
            }
            this._text.text = this._message1, this.addChild(this._girl), this.addChild(this._clickLayer)
        }, i.prototype.playRashinbanSE = function () {
            _.SE.play("250")
        }, i.prototype.updateGirlSwing = function () {
            this._step += .5, this._girl.position.y = 353 + 10 * Math.sin(this._step / 6)
        }, i.prototype.updateRotate = function () {
            var t = this;
            switch (this._type) {
                case 1:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(360)
                    }, 700).call(function () {
                        t._text.text = t._message3, t.speedDown()
                    });
                    break;
                case 2:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(720 + this._targetR)
                    }, 1e3).call(function () {
                        t._text.text = t._message3, t.vibrateCompass()
                    });
                    break;
                case 3:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(1080)
                    }, 700).call(function () {
                        t._text.text = t._message3, t.speedDown()
                    }), createjs.Tween.get(null).wait(700).addEventListener("change", function () {
                        t._step % 12 < 6 ? t._girl.texture = l.MAP_COMPASS.getTexture(5) : t._girl.texture = l.MAP_COMPASS.getTexture(4), t._step++
                    });
                    break;
                case 4:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(2160)
                    }, 900).call(function () {
                        t._text.text = t._message3, t.speedDown()
                    })
            }
        }, i.prototype.speedDown = function () {
            var t = this;
            this._compass.rotation, Math.PI;
            switch (this._type) {
                case 1:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(360 + this._targetR)
                    }, 600, createjs.Ease.quadOut).call(function () {
                        t.outAnimation()
                    });
                    break;
                case 3:
                    this._span = 0, createjs.Tween.get(this._compass).to({
                        rotation: n(1440 + this._targetR)
                    }, 1300, createjs.Ease.quadOut).call(function () {
                        t.outAnimation()
                    }), createjs.Tween.get(null).wait(1300).addEventListener("change", function () {
                        2 == ++t._span && (t._girl.position.y += t._vibrateWidth, t._vibrateWidth *= -.98, t._span = 0)
                    });
                    break;
                case 4:
                    createjs.Tween.get(this._compass).to({
                        rotation: n(2520 + this._targetR)
                    }, 700, createjs.Ease.quadOut).call(function () {
                        t.outAnimation()
                    })
            }
        }, i.prototype.vibrateCompass = function () {
            var t = this;
            this._span = 0, this._girl.texture = l.MAP_COMPASS.getTexture(3), createjs.Tween.get(null).wait(400).addEventListener("change", function () {
                2 == ++t._span && (t._compass.rotation += n(t._vibrateR), t._vibrateR *= -1, t._span = 0)
            }), createjs.Tween.get(null).wait(400).call(function () {
                t._compass.rotation = n(t._targetR), t.outAnimation()
            })
        }, i.prototype.updatePinMove = function () {
            if (6 == ++this._pini) {
                var t = 41 * Math.random() / 10 - 2;
                this._pin.rotation += n(t), this._pin.rotation > e.PIN_SWING_VOL ? this._pin.rotation = e.PIN_SWING_VOL : this._pin.rotation < -e.PIN_SWING_VOL && (this._pin.rotation = -e.PIN_SWING_VOL), this._pini = 0
            }
        }, i.prototype.outAnimation = function () {
            var t = this,
                e = function () {
                    switch (t._type) {
                        case 1:
                            t._girl.texture = l.MAP_COMPASS.getTexture(0);
                            break;
                        case 2:
                            t._girl.texture = l.MAP_COMPASS.getTexture(2);
                            break;
                        case 3:
                            t._girl.texture = l.MAP_COMPASS.getTexture(4);
                            break;
                        case 4:
                            t._girl.texture = l.MAP_COMPASS.getTexture(6)
                    }
                },
                i = null;
            switch (this._type) {
                case 1:
                case 2:
                case 3:
                    i = function () {
                        createjs.Tween.get(t._girl).to({
                            alpha: 0
                        }, 433)
                    };
                    break;
                case 4:
                    i = function () {
                        createjs.Tween.get(t._girl).to({
                            x: 1185,
                            y: t._girl.y - 53,
                            alpha: 0
                        }, 433)
                    }
            }
            createjs.Tween.get(null).wait(800).call(function () {
                t._isSwing = !1, e(), createjs.Tween.get(t._compass).to({
                    alpha: 0
                }, 300), createjs.Tween.get(t._compass.scale).to({
                    x: 1.36,
                    y: 1.36
                }, 300), createjs.Tween.get(t._pin).to({
                    alpha: 0
                }, 300), createjs.Tween.get(t._pin.scale).to({
                    x: 1.36,
                    y: 1.36
                }, 300), createjs.Tween.get(t._light).to({
                    alpha: 0
                }, 300), createjs.Tween.get(t._light.scale).to({
                    x: 1.36,
                    y: 1.36
                }, 300), createjs.Tween.get(t._text).to({
                    alpha: 0
                }, 300), createjs.Tween.get(t._txtBox).to({
                    alpha: 0
                }, 300), createjs.Tween.get(t._bg).to({
                    alpha: 0
                }, 300), i()
            }).wait(433).call(function () {
                t.animateEnd()
            })
        }, i.prototype.animateEnd = function () {
            this._isPin = !1, this._runTween.removeAllEventListeners("change"), this._runTween.setPaused(!0), createjs.Tween.removeTweens(this._runTween.target), null != this._callBack && this._callBack()
        }, i.prototype.createSprite = function (t, e, i, n, o, r) {
            var s = new PIXI.Sprite(l.MAP_COMPASS.getTexture(t));
            return s.anchor.x = e, s.anchor.y = i, s.position.x = n, s.position.y = o, s.alpha = r, s
        }, i
    }(PIXI.Container);
    e.AnimCompass = c
}