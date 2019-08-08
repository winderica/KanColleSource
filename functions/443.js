const function443 = function (t, e, i) {
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
    var o = i(12),
        r = i(20),
        s = i(1),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onMouseOver = function () {
                    n._setTexture(!0), n._wave.start()
                }, n._onMouseOut = function () {
                    n._setTexture(!1), n._wave.stop()
                }, n._onClick = function () {
                    0 != n.buttonMode && null != n._cb_onClick && n._cb_onClick(n._value)
                }, n._value = e, n._cb_onClick = i, n._wave = new _, n._btn = new PIXI.Sprite, n.interactive = !0, n.addChild(n._wave), n.addChild(n._btn), n
            }
            return n(e, t), e.prototype._initialize = function (t, e) {
                void 0 === e && (e = !1);
                for (var i = [new PIXI.Point(-17, -72), new PIXI.Point(83, -62), new PIXI.Point(101, 12), new PIXI.Point(21, 75), new PIXI.Point(-77, 63), new PIXI.Point(-95, -9)], n = 0, o = i; n < o.length; n++) {
                    o[n].x += t
                }
                1 == e && this._drawHitArea(i), this.hitArea = new PIXI.Polygon(i), this._wave.initialize(), this._setTexture(!1)
            }, e.prototype._drawHitArea = function (t) {
                if (null != t) {
                    var e = new PIXI.Graphics;
                    e.beginFill(65280, .3), e.moveTo(t[0].x, t[0].y);
                    for (var i = 1; i < t.length; i++) e.lineTo(t[i].x, t[i].y);
                    e.endFill(), this.addChildAt(e, 0)
                }
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut), this.off(s.EventType.CLICK, this._onClick), this.buttonMode = !1
            }, e.prototype.dispose = function () {
                this._wave.dispose(), this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Container);
    e.WaveBtnBase = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._wave1 = new o.Sprite, e._wave1.anchor.set(.5), e._initWave(e._wave1), e._wave2 = new o.Sprite, e._wave2.anchor.set(.5), e._initWave(e._wave2), e._wave_tweens = new Array(2), e.addChild(e._wave1), e.addChild(e._wave2), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this._wave1.texture = r.MAP_COMMON.getTexture(0), this._wave2.texture = r.MAP_COMMON.getTexture(0)
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
    }(PIXI.Container)
}