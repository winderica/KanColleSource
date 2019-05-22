const function444 = function (t, e, i) {
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
        r = i(16),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._seiku = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = -1;
                if (1 == this._seiku ? t = 136 : 2 == this._seiku ? t = 140 : 4 == this._seiku && (t = 138), t < 0) this._endTask();
                else {
                    var e = r.BATTLE_MAIN.getTexture(t);
                    this._content = new PIXI.Sprite(e), this._anim()
                }
            }, e.prototype._anim = function () {
                var t = this;
                this._content.position.set(600, 600), this._content.anchor.set(.5), this._content.alpha = 0, this._layer.addChild(this._content), createjs.Tween.get(this._content).to({
                    alpha: 1
                }, 400).wait(1800).to({
                    alpha: 0
                }, 300).call(function () {
                    t._layer.removeChild(t._content), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._content = null
            }, e
        }(o.TaskBase);
    e.TaskAirWarShowSeiku = s
}