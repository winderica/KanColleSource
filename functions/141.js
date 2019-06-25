const function141 = function (t, e, i) {
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
        s = i(44),
        a = i(23),
        _ = i(46),
        u = i(66),
        l = i(6),
        c = i(16),
        h = i(181),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._damaged = !1, e._crashed = !1, e.power = 1, e._img = new d, e._img.position.set(1, 1), e.addChild(e._img), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "friend", {
                get: function () {
                    return this._friend
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "damaged", {
                get: function () {
                    return this._damaged
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "crashed", {
                get: function () {
                    return this._crashed
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._mst_id = t, this._friend = e, this.x = i.x + n.x, this.y = i.y + n.y, this._offset = n.clone(), this._img.initialize(t, e)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._offset = null, this._end = null, null != this._img && (this._img.dispose(), this._img = null), null != this._tween && (this._tween.setPaused(!0), this._tween = null), this._state = null
            }, e.prototype.startFluctuations = function () {
                this._img.startFluctuations()
            }, e.prototype.stopFluctuations = function () {
                this._img.stopFluctuations()
            }, e.prototype.fire = function () {
                this._img.fire.play()
            }, e.prototype.damage = function () {
                var t = this;
                if (1 != this._damaged) {
                    this._damaged = !0;
                    var e = new h.Explosion;
                    this.addChild(e), l.SE.play("102"), e.play(function () {
                        t.removeChild(e)
                    }), createjs.Tween.get(null).wait(200).call(function () {
                        if (null != t._img && (t._img.smoke.activate(), null != t._tween)) {
                            t._tween.setPaused(!0);
                            var e = createjs.Ticker.framerate,
                                i = Math.pow(.95, 1 / e);
                            Math.abs(t._state.diff_x) > 5 && (i = Math.pow(.5, 1 / e));
                            var n = Math.pow(5.3, 1 / e);
                            t._tween = createjs.Tween.get(null, {
                                loop: !0,
                                onChange: function () {
                                    t._state.diff_x *= i, t._state.diff_y *= n, t.x += t._state.diff_x, t.y += t._state.diff_y, (t.x < -150 || t.x > o.default.width + 150 || t.y > o.default.height + 150) && (t._tween.setPaused(!0), t.emit("complete"))
                                }
                            })
                        }
                    })
                }
            }, e.prototype.crash = function () {
                var t = this;
                if (1 != this._crashed) {
                    this._crashed = !0;
                    var e = new h.Explosion;
                    this.addChild(e), l.SE.play("102"), e.play(function () {
                        t.removeChild(e)
                    }), createjs.Tween.get(null).wait(200).call(function () {
                        null != t._img && (t._img.visible = !1), null != t._tween && (t._tween.setPaused(!0), t._tween = null), t.emit("complete")
                    })
                }
            }, e.prototype.play = function (t, e) {
                var i, n, o = this,
                    r = new PIXI.Point(this.x, this.y),
                    s = new PIXI.Point(t.x + this._offset.x, t.y + this._offset.y),
                    a = r.x <= s.x,
                    _ = s.x - r.x,
                    l = Math.max(s.y, r.y) + 150;
                1 == a ? (i = new PIXI.Point(Math.min(r.x, s.x) + _ / 3, l), n = new PIXI.Point(Math.min(r.x, s.x) + _ / 3 * 2, l)) : (i = new PIXI.Point(Math.max(r.x, s.x) + _ / 3, l), n = new PIXI.Point(Math.max(r.x, s.x) + _ / 3 * 2, l));
                var c = {
                    onChange: function (t) {
                        null != o._state && (o._state.diff_x = o.x - o._state.pre_x, o._state.diff_y = Math.abs(o.y - o._state.pre_y) + .01, o._state.diff_t = t.timeStamp - o._state.pre_t, o._state.pre_x = o.x, o._state.pre_y = o.y, o._state.pre_t = t.timeStamp)
                    }
                };
                return this._state = {
                    pre_x: this.x,
                    pre_y: this.y,
                    pre_t: Date.now(),
                    diff_x: 0,
                    diff_y: 0,
                    diff_t: 0
                }, this._tween = u.TweenUtil.create3BezierTween(this, r, i, n, s, e, c), this._tween.call(function () {
                    o.emit("complete")
                }), this._end = s, {
                    s: r,
                    c1: i,
                    c2: n,
                    e: s
                }
            }, e.prototype.playForJet = function (t, e) {
                var i, n, o = this,
                    r = new PIXI.Point(this.x, this.y),
                    s = new PIXI.Point(t.x + this._offset.x, t.y + this._offset.y),
                    a = (r.x, s.x, Math.min(r.x, s.x)),
                    _ = s.x - r.x,
                    l = Math.max(s.y, r.y) + 75;
                i = new PIXI.Point(a + _ / 3, l), n = new PIXI.Point(a + _ / 3 * 2, l);
                var c = {
                    onChange: function (t) {
                        null != o._state && (o._state.diff_x = o.x - o._state.pre_x, o._state.diff_y = Math.abs(o.y - o._state.pre_y) + .01, o._state.diff_t = t.timeStamp - o._state.pre_t, o._state.pre_x = o.x, o._state.pre_y = o.y, o._state.pre_t = t.timeStamp)
                    }
                };
                return this._state = {
                    pre_x: this.x,
                    pre_y: this.y,
                    pre_t: Date.now(),
                    diff_x: 0,
                    diff_y: 0,
                    diff_t: 0
                }, this._tween = u.TweenUtil.create3BezierTween(this, r, i, n, s, e, c), this._tween.call(function () {
                    o.emit("complete")
                }), this._end = s, {
                    s: r,
                    c1: i,
                    c2: n,
                    e: s
                }
            }, e.prototype.play2 = function (t, e, i) {
                var n = this;
                void 0 === e && (e = NaN);
                var o, r, s = new PIXI.Point(this.x, this.y),
                    a = new PIXI.Point(t.x + this._offset.x, t.y + this._offset.y),
                    _ = s.x <= a.x;
                1 == _ ? (o = new PIXI.Point(Math.min(s.x, a.x) + (a.x - s.x) / 3, Math.max(a.y, s.y) + 150), r = new PIXI.Point(Math.min(s.x, a.x) + (a.x - s.x) / 3 * 2, Math.max(a.y, s.y) + 150)) : (o = new PIXI.Point(Math.max(s.x, a.x) + (a.x - s.x) / 3, Math.max(a.y, s.y) + 150), r = new PIXI.Point(Math.max(s.x, a.x) + (a.x - s.x) / 3 * 2, Math.max(a.y, s.y) + 150));
                var c;
                if (0 == isNaN(e)) {
                    var h = .99,
                        p = 1 - h,
                        d = Math.pow(p, 3) * s.x + 3 * Math.pow(p, 2) * h * o.x + 3 * p * h * h * r.x + h * h * h * a.x,
                        f = Math.pow(p, 3) * s.y + 3 * Math.pow(p, 2) * h * o.y + 3 * p * h * h * r.y + h * h * h * a.y,
                        y = a.y + (e - a.x) * (a.y - f) / (a.x - d),
                        m = a.x - d,
                        g = (e - a.x) / m,
                        v = i / (100 + g) * 100,
                        b = i / (100 + g) * g;
                    this._tween = u.TweenUtil.create3BezierTween(this, s, o, r, a, v), this._tween.call(function () {
                        n.emit("attacked")
                    }), this._tween.to({
                        x: e,
                        y: y
                    }, b), c = new PIXI.Point(e, y)
                } else this._tween = u.TweenUtil.create3BezierTween(this, s, o, r, a, i), this._tween.call(function () {
                    n.emit("attacked")
                }), c = new PIXI.Point(a.x, a.y);
                return this._tween.call(function () {
                    n.emit("complete")
                }), createjs.Tween.get(null).wait(.7 * i).call(function () {
                    l.SE.play("116"), n.fire()
                }), this._end = a, {
                    s: s,
                    c1: o,
                    c2: r,
                    e: a,
                    ex: c
                }
            }, e
        }(PIXI.Container);
    e.Plane = p;
    var d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.anchor.set(.5), e.scale.set(.75), e._fire = new f, e._smoke = new y, e.addChild(e._fire), e.addChild(e._smoke), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "fire", {
                get: function () {
                    return this._fire
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "smoke", {
                get: function () {
                    return this._smoke
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                var i;
                if (1 == _.SlotUtil.isEnemyItem(t)) {
                    var n = s.PlaneConst.getEnemyPlaneGraphicsType(t);
                    i = "e" + a.MathUtil.zeroPadding(n, 3), this.scale.x *= e ? -1 : 1
                } else {
                    var o = r.default.model.slot.getMst(t),
                        u = o.planeIconType;
                    u = Math.max(1, u), i = a.MathUtil.zeroPadding(u, 3), i = (e ? "" : "r") + i, this.scale.x *= e ? 1 : -1
                }
                this.texture = PIXI.Texture.fromImage(r.default.settings.path_root + "resources/plane/" + i + ".png"), this._fire.initialize(), this._smoke.initialize()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._fire = null, this._smoke.dispose(), this._smoke = null, this.stopFluctuations()
            }, e.prototype.startFluctuations = function () {
                null == this._t && this._tween()
            }, e.prototype.stopFluctuations = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype._tween = function () {
                var t = this,
                    e = Math.round(46 * Math.random() - 23),
                    i = Math.round(46 * Math.random() - 23),
                    n = 100 * Math.sqrt(Math.pow(e - this.x, 2) + Math.pow(i - this.y, 2));
                this._t = createjs.Tween.get(this).to({
                    y: i,
                    x: e
                }, n).call(function () {
                    t._tween()
                })
            }, e
        }(PIXI.Sprite),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.visible = !1, e._fire1 = new PIXI.Sprite, e._fire2 = new PIXI.Sprite, e._fire1.position.set(-17, -27), e._fire2.position.set(0, -54), e._fire2.scale.set(.8), e.addChild(e._fire1), e.addChild(e._fire2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._fire1.texture = c.BATTLE_MAIN.getTexture(79), this._fire2.texture = c.BATTLE_MAIN.getTexture(79)
            }, e.prototype.play = function () {
                var t = this;
                createjs.Tween.get(this).wait(200 * Math.random()).call(function () {
                    t.visible = !0
                }).wait(100).call(function () {
                    t.visible = !1
                }).wait(100).call(function () {
                    t.visible = !0
                }).wait(100).call(function () {
                    t.visible = !1
                })
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._reverseImage = function () {
                    e._content.scale.x = -1 * e._content.scale.x, e._content.scale.y = -1 * e._content.scale.y, -1 == e._content.scale.x ? e._content.position.y = -65 : e._content.position.y = -54
                }, e.visible = !1, e._content = new PIXI.Sprite, e._content.anchor.set(.5), e._content.position.set(-57, -54), e.addChild(e._content), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._content.texture = c.BATTLE_MAIN.getTexture(80)
            }, e.prototype.activate = function () {
                null == this._t && (this.scale.set(0), this.visible = !0, createjs.Tween.get(this.scale).to({
                    x: 1,
                    y: 1
                }, 300), this._t = createjs.Tween.get(this._content, {
                    loop: !0
                }).wait(100).call(this._reverseImage))
            }, e.prototype.deactivate = function () {
                null != this._t && (this.visible = !1, this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container)
}