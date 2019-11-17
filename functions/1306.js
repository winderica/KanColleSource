const function1306 = function (t, e, i) {
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
        r = i(126),
        s = i(2),
        a = i(12),
        _ = i(6),
        l = i(19),
        u = i(1),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._result = !1, i._onSelect = function (t) {
                    _.SE.play("106"), i._result = t, i._hide()
                }, i._view = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._layer = new h(this._onSelect), this._layer.position.set(o.default.width / 2, o.default.height / 2), this._layer.alpha = 0, this._view.addChild(this._layer), this._showBtns()
            }, e.prototype._showBtns = function () {
                var t = this;
                this._layer.initialize(), createjs.Tween.get(this._layer).to({
                    alpha: 1
                }, 300).call(function () {
                    t._layer.activate()
                })
            }, e.prototype._hide = function () {
                var t = this;
                this._layer.deactivate(), createjs.Tween.get(this._layer.btn_march).to({
                    x: -o.default.width / 2
                }, 500), createjs.Tween.get(this._layer.btn_retreat).to({
                    x: o.default.width / 2
                }, 500).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._view.removeChild(this._layer), this._layer.dispose(), this._view = null, this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskMarchRetreatSelect = c;
    var h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._btn_march = new y(e), i._btn_march.position.set(-162, 0), i._btn_retreat = new f(e), i._btn_retreat.position.set(162, 0), i.addChild(i._btn_march), i.addChild(i._btn_retreat), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "btn_march", {
                get: function () {
                    return this._btn_march
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_retreat", {
                get: function () {
                    return this._btn_retreat
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._btn_march.initialize(), this._btn_retreat.initialize()
            }, e.prototype.activate = function () {
                this._btn_march.activate(), this._btn_retreat.activate()
            }, e.prototype.deactivate = function () {
                this._btn_march.deactivate(), this._btn_retreat.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_march.dispose(), this._btn_retreat.dispose()
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onMouseOver = function () {
                    n._setTexture(!0), n._wave.start()
                }, n._onMouseOut = function () {
                    n._setTexture(!1), n._wave.stop()
                }, n._onClick = function () {
                    0 != n.buttonMode && null != n._cb_onClick && n._cb_onClick(n._value)
                }, n._value = e, n._cb_onClick = i, n._wave = new d, n._btn = new PIXI.Sprite, n.interactive = !0, n.addChild(n._wave), n.addChild(n._btn), n
            }
            return n(e, t), e.prototype._initialize = function (t) {
                for (var e = [new PIXI.Point(-17, -72), new PIXI.Point(83, -62), new PIXI.Point(101, 12), new PIXI.Point(21, 75), new PIXI.Point(-77, 63), new PIXI.Point(-95, -9)], i = 0, n = e; i < n.length; i++) {
                    n[i].x += t
                }
                this.hitArea = new PIXI.Polygon(e), this._wave.initialize(), this._setTexture(!1)
            }, e.prototype._drawHitArea = function (t) {
                if (null != t) {
                    var e = new PIXI.Graphics;
                    e.beginFill(65280, .3), e.moveTo(t[0].x, t[0].y);
                    for (var i = 1; i < t.length; i++) e.lineTo(t[i].x, t[i].y);
                    e.endFill(), this.addChildAt(e, 0)
                }
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(u.EventType.MOUSEOVER, this._onMouseOver), this.on(u.EventType.MOUSEOUT, this._onMouseOut), this.on(u.EventType.CLICK, this._onClick), 1 == r.InteractiveUtil.isOnMouse(this) && this._onMouseOver())
            }, e.prototype.deactivate = function () {
                this.off(u.EventType.MOUSEOVER, this._onMouseOver), this.off(u.EventType.MOUSEOUT, this._onMouseOut), this.off(u.EventType.CLICK, this._onClick), this.buttonMode = !1
            }, e.prototype.dispose = function () {
                this._wave.dispose(), this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._wave1 = new a.Sprite, e._wave1.anchor.set(.5), e._initWave(e._wave1), e._wave2 = new a.Sprite, e._wave2.anchor.set(.5), e._initWave(e._wave2), e._wave_tweens = new Array(2), e.addChild(e._wave1), e.addChild(e._wave2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._wave1.texture = l.MAP_COMMON.getTexture(0), this._wave2.texture = l.MAP_COMMON.getTexture(0)
            }, e.prototype.dispose = function () {
                this.stop()
            }, e.prototype._initWave = function (t) {
                t.scale.set(0), t.alpha = 0
            }, e.prototype.start = function () {
                this.stop(), this._wave_tweens[0] = createjs.Tween.get(this._wave1, {
                    loop: !0
                }).to({
                    alpha: 1,
                    scaleX: .4,
                    scaleY: .4
                }, 400).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 400).to({
                    scaleX: 0,
                    scaleY: 0
                }, 0).wait(200), this._wave_tweens[1] = createjs.Tween.get(this._wave2, {
                    loop: !0
                }).wait(200).to({
                    alpha: 1,
                    scaleX: .4,
                    scaleY: .4
                }, 400).to({
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 400).to({
                    scaleX: 0,
                    scaleY: 0
                }, 0)
            }, e.prototype.stop = function () {
                for (var t = 0; t < this._wave_tweens.length; t++) null != this._wave_tweens[t] && (this._wave_tweens[t].setPaused(!0), this._wave_tweens[t] = null);
                this._initWave(this._wave1), this._initWave(this._wave2)
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e(e) {
                return t.call(this, !1, e) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initialize(0)
            }, e.prototype._setTexture = function (t) {
                this._btn.texture = 1 == t ? l.MAP_COMMON.getTexture(16) : l.MAP_COMMON.getTexture(15), this._btn.x = -Math.round(this._btn.width / 2), this._btn.y = -Math.round(this._btn.height / 2)
            }, e
        }(p),
        y = function (t) {
            function e(e) {
                return t.call(this, !0, e) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initialize(-8)
            }, e.prototype._setTexture = function (t) {
                this._btn.texture = 1 == t ? l.MAP_COMMON.getTexture(10) : l.MAP_COMMON.getTexture(3), this._btn.x = -Math.round(this._btn.width / 2), this._btn.y = -Math.round(this._btn.height / 2)
            }, e
        }(p)
}