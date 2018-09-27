const function1268 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(19), r = i(61), s = i(20), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new r.CenteringSprite, e._bg.y = -45, e.addChild(e._bg), e._txt1 = new r.CenteringSprite, e._txt1.y = -45, e.addChild(e._txt1), e._txt2 = new r.CenteringSprite, e._txt2.y = 90, e.addChild(e._txt2), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._bg.alpha = 0, this._bg.scale.y = 0, this._bg.texture = s.MAP_COMMON.getTexture(104), this._txt1.alpha = 0, this._txt1.x = 150, this._txt1.texture = s.MAP_COMMON.getTexture(109), this._txt2.alpha = 0, this._txt2.texture = 1 == t ? s.MAP_COMMON.getTexture(111) : s.MAP_COMMON.getTexture(110)
        }, e.prototype.playAnimation = function (t) {
            this._animation1(t)
        }, e.prototype._animation1 = function (t) {
            var e = this, i = new o.TweenTask;
            i.addTween(createjs.Tween.get(this._bg).to({
                alpha: 1,
                scaleY: 1
            }, 500)), i.addTween(createjs.Tween.get(this._txt1).wait(300).to({
                x: 30,
                alpha: 1
            }, 700)), i.addTween(createjs.Tween.get(this._txt2).wait(300).to({ alpha: 1 }, 700)), i.start(function () {
                e._animation2(t)
            })
        }, e.prototype._animation2 = function (t) {
            var e = new o.TweenTask;
            e.addTween(createjs.Tween.get(this._bg).wait(1200).to({ scaleY: 0 }, 200)), e.addTween(createjs.Tween.get(this._txt1).wait(800).to({
                x: -40,
                alpha: 0
            }, 300)), e.addTween(createjs.Tween.get(this._txt2).wait(1100).to({ alpha: 0 }, 100)), e.start(function () {
                null != t && t()
            })
        }, e
    }(PIXI.Container);
    e.AirRaidTelop = a
}