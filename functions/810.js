const function810 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.rollR = [0, 0, 0, 0], e.rot = [0, 0, 0, 0], e.spd = 2, e.balls = [], e.RESIDS = [4, 5, 6, 7];
                for (var i = 0; i < e.RESIDS.length; i++) {
                    var n = new PIXI.Sprite(o.REMODEL_ANIMATION.getTexture(e.RESIDS[i]));
                    n.anchor.set(.5, .5), e.addChild(n), e.balls.push(n)
                }
                return createjs.Tween.get(e, {
                    loop: !0
                }).wait(1 / 60).call(function () {
                    e.__ENTERFRAME__()
                }).play(null), e
            }
            return n(e, t), e.prototype.updateRotationTable = function () {
                for (var t = 0; t < this.RESIDS.length; t++) this.rollR[t] = Math.floor(121 * Math.random()) - 60, this.rot[t] = Math.floor(360 * Math.random())
            }, e.prototype.__ENTERFRAME__ = function () {
                for (var t = 0; t < 4; t++) {
                    var e = this.balls[t];
                    e.x = this.rollR[t] * Math.cos(this.rot[t] / 180 * Math.PI), e.y = this.rollR[t] * Math.sin(this.rot[t] / 180 * Math.PI), this.rot[t] += this.spd
                }
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this), this.rollR = null, this.rot = null, this.spd = null, this.balls = null, this.RESIDS = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.PowerElement = r
}