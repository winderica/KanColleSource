const function1428 = function (t, e, i) {
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
    var o = i(16),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                switch (i.sprite = new PIXI.Sprite, i.type = e, e) {
                    case 1:
                        i.sprite.texture = o.BATTLE_MAIN.getTexture(58), i.sprite.anchor.set(.04, .5);
                        break;
                    case 2:
                        i.sprite.texture = o.BATTLE_MAIN.getTexture(50), i.sprite.anchor.set(.04, .5);
                        break;
                    case 3:
                    case 4:
                        i.sprite.texture = o.BATTLE_MAIN.getTexture(49), i.sprite.anchor.set(.5)
                }
                return i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.sprite = null, this.from = null, this.to = null, this.type = null, this.friend = null
            }, e.prototype.initialize = function () {
                var t = Math.atan2(this.to.y - this.from.y, this.to.x - this.from.x);
                this.sprite.position.set(this.from.x, this.from.y), this.sprite.rotation = t, this.sprite.alpha = 0, this.setMask(), this.addChild(this.sprite)
            }, e.prototype.setMask = function () {
                var t = Math.min(this.sprite.width, this.sprite.height);
                t = Math.pow(t, 2), t = Math.sqrt(t + t);
                var e = new PIXI.Graphics;
                e.beginFill(6710886, .5);
                var i = Math.min(this.from.x, this.to.x),
                    n = Math.min(this.from.y, this.to.y) - t,
                    o = Math.abs(this.to.x - this.from.x),
                    r = Math.abs(this.to.y - this.from.y) + 2 * t;
                e.drawRect(i, n, o, r), e.endFill(), this.sprite.mask = e, this.addChild(e)
            }, e.prototype.play = function (t, e, i, n) {
                switch (void 0 === i && (i = 1800), void 0 === n && (n = null), this.from = new PIXI.Point(t.x, t.y), this.to = new PIXI.Point(e.x, e.y), this.friend = this.from.x <= this.to.x, this.type) {
                    case 1:
                    case 2:
                        this.initialize(), this.move(i, n);
                        break;
                    case 3:
                        this.position.set(this.from.x, this.from.y), this.sprite.scale.x = this.friend ? -1 : 1, this.addChild(this.sprite), this._aerial1();
                        break;
                    case 4:
                        this.position.set(this.from.x, this.from.y), this._aerial1();
                        break;
                    case 5:
                        this.position.set(this.from.x, this.from.y), this.addChild(this.sprite), this.sprite.scale.x = this.friend ? -1 : 1, this._aerial1()
                }
            }, e.prototype.move = function (t, e) {
                var i = this;
                void 0 === t && (t = 1800), void 0 === e && (e = null), createjs.Tween.get(this.sprite).to({
                    alpha: 1
                }, 200).wait(Math.max(t - 400, 0)).to({
                    alpha: 0
                }, 200).call(function () {
                    i.removeChildren(), null != e && e()
                }), createjs.Tween.get(this.sprite).to({
                    x: this.to.x,
                    y: this.to.y
                }, t)
            }, e.prototype._aerial1 = function (t) {
                var e = this;
                switch (void 0 === t && (t = null), this.type) {
                    case 3:
                        createjs.Tween.get(this).to({
                            y: this.from.y + 90
                        }, 800, createjs.Ease.sineIn).call(function () {
                            e.removeChildren(), e._aerial2(t)
                        });
                        break;
                    case 5:
                        var i = new s;
                        i.initialize(), i.activate(), i.scale.x = this.friend ? -1 : 1, this.addChild(i), createjs.Tween.get(this).to({
                            y: this.from.y + 90
                        }, 500, createjs.Ease.sineIn).call(function () {
                            e.removeChildren(), i.deactivate(), e._aerial2(t)
                        });
                        break;
                    case 4:
                        var n = this.from.x + (this.to.x - this.from.x) / 5;
                        createjs.Tween.get(this).to({
                            x: n,
                            y: this.from.y + 90
                        }, 400, createjs.Ease.sineIn).call(function () {
                            e.removeChildren(), e._aerial2(t)
                        })
                }
            }, e.prototype._aerial2 = function (t) {
                var e = this;
                void 0 === t && (t = null);
                var i = 0,
                    n = new _(this.friend);
                switch (this.addChild(n), this.type) {
                    case 3:
                    case 5:
                        i = 100;
                        break;
                    case 4:
                        i = 50
                }
                n.play(i, function () {
                    e.removeChild(n), e._aerial3(t)
                })
            }, e.prototype._aerial3 = function (t) {
                var e = this;
                void 0 === t && (t = null);
                var i = Math.atan2(this.to.y - this.y, this.to.x - this.x);
                switch (this.type) {
                    case 3:
                        var n = new PIXI.Sprite(o.BATTLE_MAIN.getTexture(59));
                        n.anchor.set(1, .5), n.scale.set(0, 1), n.rotation = i, this.addChild(n), createjs.Tween.get(n.scale).to({
                            x: 1
                        }, 100), createjs.Tween.get(this).to({
                            x: this.to.x,
                            y: this.to.y
                        }, 700).to({
                            alpha: 0
                        }, 50).call(function () {
                            e.removeChildren(), e.emit("complete")
                        });
                        break;
                    case 5:
                        var r = new a;
                        r.scale.set(0, 1), r.initialize(), r.activate(), r.rotation = i, this.addChild(r), createjs.Tween.get(r.scale).to({
                            x: 1
                        }, 100), createjs.Tween.get(this).to({
                            x: this.to.x,
                            y: this.to.y
                        }, 700).to({
                            alpha: 0
                        }, 50).call(function () {
                            e.removeChildren(), r.deactivate(), e.emit("complete")
                        });
                        break;
                    case 4:
                        new PIXI.Sprite(o.BATTLE_MAIN.getTexture(59));
                        n.anchor.set(1, .5), n.scale.set(0, 1), n.rotation = i, this.addChild(n), createjs.Tween.get(n.scale).to({
                            x: 1
                        }, 50), createjs.Tween.get(this).to({
                            x: this.to.x,
                            y: this.to.y
                        }, 560).to({
                            alpha: 0
                        }, 50).call(function () {
                            e.removeChildren(), null != t && t()
                        })
                }
            }, e
        }(PIXI.Container);
    e.Torpedo = r;
    var s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bullet1 = new PIXI.Sprite, e._bullet1.anchor.set(.5), e._bullet1.scale.set(.75), e.addChild(e._bullet1), e._bullet2 = new PIXI.Sprite, e._bullet2.anchor.set(.5), e._bullet2.scale.set(.58), e.addChild(e._bullet2), e._bullet3 = new PIXI.Sprite, e._bullet3.anchor.set(.5), e._bullet3.scale.set(.58), e.addChild(e._bullet3), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._bullet1.texture = o.BATTLE_MAIN.getTexture(49), this._bullet1.position.set(6, 6), this._bullet2.texture = o.BATTLE_MAIN.getTexture(49), this._bullet2.position.set(5, 17), this._bullet3.texture = o.BATTLE_MAIN.getTexture(49), this._bullet3.position.set(-8, -3)
            }, e.prototype.activate = function () {
                if (null == this._tweens) {
                    this._tweens = [], this._bullet1.position.set(6, 6);
                    var t = createjs.Tween.get(this._bullet1, {
                        loop: !0
                    }).to({
                        x: 3,
                        y: 9
                    }, 300).to({
                        x: 2,
                        y: 8
                    }, 300).to({
                        x: 6,
                        y: 6
                    }, 200);
                    this._tweens.push(t), this._bullet2.position.set(5, 17), t = createjs.Tween.get(this._bullet2, {
                        loop: !0
                    }).to({
                        x: 6,
                        y: 18
                    }, 200).to({
                        x: 3,
                        y: 20
                    }, 300).to({
                        x: 53,
                        y: 17
                    }, 300), this._tweens.push(t), this._bullet3.position.set(-8, -3), t = createjs.Tween.get(this._bullet3, {
                        loop: !0
                    }).to({
                        x: -6,
                        y: -5
                    }, 250).to({
                        x: -5,
                        y: 0
                    }, 300).to({
                        x: -8,
                        y: -3
                    }, 250), this._tweens.push(t)
                }
            }, e.prototype.deactivate = function () {
                if (null != this._tweens) {
                    for (var t = 0, e = this._tweens; t < e.length; t++) {
                        e[t].setPaused(!0)
                    }
                    this._tweens = null
                }
            }, e
        }(PIXI.Container),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bullet1 = new PIXI.Sprite, e._bullet1.anchor.set(1, .6), e._bullet1.scale.set(.5), e.addChild(e._bullet1), e._bullet2 = new PIXI.Sprite, e._bullet2.anchor.set(1, .6), e._bullet2.scale.set(.75), e.addChild(e._bullet2), e._bullet3 = new PIXI.Sprite, e._bullet3.anchor.set(1, .6), e._bullet3.scale.set(.5), e.addChild(e._bullet3), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._bullet1.texture = o.BATTLE_MAIN.getTexture(51), this._bullet1.position.set(-3, 11), this._bullet2.texture = o.BATTLE_MAIN.getTexture(51), this._bullet2.position.set(5, -2), this._bullet3.texture = o.BATTLE_MAIN.getTexture(51), this._bullet3.position.set(-14, -8)
            }, e.prototype.activate = function () {
                if (null == this._tweens) {
                    this._tweens = [], this._bullet1.position.set(-3, 11);
                    var t = createjs.Tween.get(this._bullet1, {
                        loop: !0
                    }).to({
                        x: -8,
                        y: 0
                    }, 250).to({
                        x: -2,
                        y: -12
                    }, 250).to({
                        x: 6,
                        y: 0
                    }, 250).to({
                        x: -3,
                        y: 11
                    }, 250);
                    this._tweens.push(t), this._bullet3.position.set(-14, -8), t = createjs.Tween.get(this._bullet3, {
                        loop: !0
                    }).to({
                        x: 3,
                        y: 0
                    }, 250).to({
                        x: -14,
                        y: 8
                    }, 250).to({
                        x: -21,
                        y: 0
                    }, 250).to({
                        x: -14,
                        y: -8
                    }, 250), this._tweens.push(t)
                }
            }, e.prototype.deactivate = function () {
                if (null != this._tweens) {
                    for (var t = 0, e = this._tweens; t < e.length; t++) {
                        e[t].setPaused(!0)
                    }
                    this._tweens = null
                }
            }, e
        }(PIXI.Container),
        _ = function (t) {
            function e(e) {
                var i = this,
                    n = o.BATTLE_MAIN.getTexture(115);
                return i = t.call(this, n) || this, i.anchor.set(.5, 1), i.scale.set(.18 * (e ? 1 : -1), .18), i
            }
            return n(e, t), e.prototype.play = function (t, e) {
                void 0 === t && (t = 100), void 0 === e && (e = null), createjs.Tween.get(this.scale).to({
                    x: 0,
                    y: 0
                }, t).call(function () {
                    null != e && e()
                })
            }, e
        }(PIXI.Sprite);
    e.Splash = _
}