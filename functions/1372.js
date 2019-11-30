const function1372 = function (t, e, i) {
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
        r = i(2),
        s = i(448),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._telop = new _, this._telop.x = o.default.width / 2, this._telop.y = o.default.height / 2, this._telop.bg.scale.y = 0, this._telop.text.x = 150, this._telop.text.alpha = 0, this._layer.addChild(this._telop), createjs.Tween.get(this._telop.text).wait(300).to({
                    x: 90,
                    alpha: 1
                }, 300).to({
                    x: -90
                }, 350).to({
                    x: -150,
                    alpha: 0
                }, 500), createjs.Tween.get(this._telop.bg.scale).to({
                    y: 1
                }, 300).wait(1150).to({
                    y: 0
                }, 300).call(function () {
                    t._layer.removeChild(t._telop), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskAirUnitAttackStartTelop = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._bg = new PIXI.Container;
            var i = PIXI.Sprite.fromFrame("battle_telop_mes_bg_f");
            return i.x = -Math.round(i.width / 2), i.y = -Math.round(i.height / 2), e._bg.addChild(i), e.addChild(e._bg), e._text = new PIXI.Sprite(s.BATTLE_AIRUNIT.getTexture(0)), e._text.anchor.set(.5), e.addChild(e._text), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "text", {
            get: function () {
                return this._text
            },
            enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Container)
}