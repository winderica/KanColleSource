const function1316 = function (t, e, i) {
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
    var o = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.isDisplaying = function () {
            return null != this._enemy
        }, e.prototype.show = function (t, e) {
            void 0 === e && (e = null), null != this._enemy && this.hide(), this._enemy = t;
            var i = t.y;
            t.y += 30, t.alpha = 0, this.addChild(t), t.startAnimation();
            var n = createjs.Tween.get(t);
            n.to({
                y: i,
                alpha: 1
            }, 500), n.wait(600), null != e && n.call(e)
        }, e.prototype.hide = function (t) {
            var e = this;
            if (void 0 === t && (t = null), null == this._enemy) null != t && t();
            else {
                var i = this._enemy;
                this._enemy = null;
                var n = createjs.Tween.get(i);
                n.to({
                    y: i.y + 30,
                    alpha: 0
                }, 1e3), n.call(function () {
                    e.removeChild(i), i.stopAnimation(), null != t && t()
                })
            }
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._enemy && this._enemy.dispose(), this._enemy = null
        }, e
    }(PIXI.Container);
    e.MapEnemyLayer = o
}