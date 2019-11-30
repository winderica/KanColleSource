const function350 = function (t, e, i) {
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
        r = i(8),
        s = i(209),
        a = i(24),
        _ = i(12),
        l = i(3),
        u = i(907),
        c = i(1),
        h = function (t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this) || this;
                n._clickGuard = new r.AreaBox(0), n.addChild(n._clickGuard), n._bg = new s.GetBG, n._card = new a.Container;
                var o = new PIXI.Sprite(l.ARSENAL_ANIMATION.getTexture(4));
                return o.width = 393, o.height = e, o.x = -o.width / 2, o.y = -o.height / 2, n._card.addChild(o), n._bigflash = new _.Sprite(l.ARSENAL_ANIMATION.getTexture(0)), n._particles = new u.ScatterCircleParticle, n._white = new r.AreaBox(1, 16777215), n._skip = i, n
            }
            return n(e, t), e.prototype.preload = function (t) {
                this._bg.initiailzeGetBG1(function () {
                    null != t && t()
                })
            }, e.prototype.play = function (t) {
                var e = this;
                if (this._cb_onComplete = t, this._skip) {
                    var i = new r.AreaBox(0);
                    i.buttonMode = !0, this.addChild(i), i.once(c.EventType.CLICK, function () {
                        null != e._cb_onComplete && e._cb_onComplete()
                    })
                }
                this._bg.alpha = 0, this.addChild(this._bg), createjs.Tween.get(this._bg).to({
                    alpha: 1
                }, 100).call(function () {
                    e._01_flyCard()
                })
            }, e.prototype._01_flyCard = function () {
                var t = this;
                null != this._card && (this._card.position.set(o.default.width / 2, o.default.height / 2 + 540), this._card.alpha = 0, this._card.scale.set(0), this.addChild(this._card), createjs.Tween.get(this._card).to({
                    y: o.default.height / 2 - 660,
                    scaleX: .57,
                    scaleY: .57,
                    alpha: 1
                }, 700).to({
                    y: o.default.height / 2,
                    scaleX: 1,
                    scaleY: 1
                }, 500).call(function () {
                    t._01_light()
                }))
            }, e.prototype._01_light = function () {
                var t = this;
                null != this._bigflash && (this._bigflash.x = o.default.width / 2, this._bigflash.y = o.default.height / 2, this._bigflash.scale.set(0), this._bigflash.anchor.set(.5, .5), this.addChild(this._bigflash), createjs.Tween.get(this._bigflash).to({
                    scaleX: 3.3,
                    scaleY: 3.3
                }, 300).to({
                    scaleX: 2,
                    scaleY: 2
                }, 1700), createjs.Tween.get(null).wait(1500).call(function () {
                    null != t._particles && (t._particles.x = o.default.width / 2, t._particles.y = o.default.height / 2, t.addChild(t._particles), t._particles.play())
                }).wait(2e3).call(function () {
                    t._02_whiteIn()
                }))
            }, e.prototype._02_whiteIn = function () {
                var t = this;
                null != this._white && (this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 500).call(function () {
                    null != t._cb_onComplete && t._cb_onComplete()
                }))
            }, e.prototype.dispose = function () {
                this._cb_onComplete = null, this.removeChildren(), this._clickGuard = null, this._bg = null, this._card = null, this._bigflash = null, this._particles = null, this._white = null
            }, e
        }(PIXI.Container);
    e.ReceiveAnimation = h
}