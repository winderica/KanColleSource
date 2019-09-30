const function347 = function (t, e, i) {
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
        s = i(208),
        a = i(24),
        _ = i(12),
        l = i(3),
        u = i(906),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._clickGuard = new r.AreaBox(0), i.addChild(i._clickGuard), i._bg = new s.GetBG, i._card = new a.Container;
                var n = new PIXI.Sprite(l.ARSENAL_ANIMATION.getTexture(4));
                return n.width = 393, n.height = e, n.x = -n.width / 2, n.y = -n.height / 2, i._card.addChild(n), i._bigflash = new _.Sprite(l.ARSENAL_ANIMATION.getTexture(0)), i._particles = new u.ScatterCircleParticle, i._white = new r.AreaBox(1, 16777215), i
            }
            return n(e, t), e.prototype.preload = function (t) {
                this._bg.initiailzeGetBG1(function () {
                    null != t && t()
                })
            }, e.prototype.play = function (t) {
                var e = this;
                this._cb_onComplete = t, this._bg.alpha = 0, this.addChild(this._bg), createjs.Tween.get(this._bg).to({
                    alpha: 1
                }, 100).call(function () {
                    e._01_flyCard()
                })
            }, e.prototype._01_flyCard = function () {
                var t = this;
                this._card.position.set(o.default.width / 2, o.default.height / 2 + 540), this._card.alpha = 0, this._card.scale.set(0), this.addChild(this._card), createjs.Tween.get(this._card).to({
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
                })
            }, e.prototype._01_light = function () {
                var t = this;
                this._bigflash.x = o.default.width / 2, this._bigflash.y = o.default.height / 2, this._bigflash.scale.set(0), this._bigflash.anchor.set(.5, .5), this.addChild(this._bigflash), createjs.Tween.get(this._bigflash).to({
                    scaleX: 3.3,
                    scaleY: 3.3
                }, 300).to({
                    scaleX: 2,
                    scaleY: 2
                }, 1700), createjs.Tween.get(null).wait(1500).call(function () {
                    t._particles.x = o.default.width / 2, t._particles.y = o.default.height / 2, t.addChild(t._particles), t._particles.play()
                }).wait(2e3).call(function () {
                    t._02_whiteIn()
                })
            }, e.prototype._02_whiteIn = function () {
                var t = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 500).call(function () {
                    null != t._cb_onComplete && t._cb_onComplete()
                })
            }, e.prototype.dispose = function () {
                this._cb_onComplete = null, this.removeChildren(), this._clickGuard = null, this._bg = null, this._card = null, this._bigflash = null, this._particles = null, this._white = null
            }, e
        }(PIXI.Container);
    e.ReceiveAnimation = c
}