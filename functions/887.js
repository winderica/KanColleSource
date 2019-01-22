const function887 = function (t, e, i) {
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
                e.animation = {};
                var i = o.ARSENAL_ANIMATION.getTexture(2);
                e.scatterCircles = new Array;
                for (var n = 0; n < 40; n++) {
                    var r = new s(i);
                    e.scatterCircles.push(r), e.addChild(r)
                }
                return e
            }
            return n(e, t), e.prototype.play = function () {
                var t = this;
                createjs.Tween.removeTweens(this.animation);
                for (var e = createjs.Tween.get(this.animation), i = 0; i < this.scatterCircles.length; i++) {
                    this.scatterCircles[i].reset()
                }
                e.call(function () {
                    e.removeAllEventListeners("change"), e.addEventListener("change", function () {
                        for (var e = 0; e < t.scatterCircles.length; e++) {
                            t.scatterCircles[e].update()
                        }
                    })
                }).to({}, 5e3).call(function () {
                    e.removeAllEventListeners("change")
                }), e.play(null)
            }, e
        }(PIXI.Container);
    e.ScatterCircleParticle = r;
    var s = function (t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.updateCount = 0, i
        }
        return n(e, t), e.prototype.reset = function () {
            var t = 1.999 * Math.random() * Math.PI,
                e = .2 * Math.random() + .8,
                i = 30 * e * Math.cos(t),
                n = 30 * e * Math.sin(t),
                o = 15 * (.2 * Math.random() + .8),
                r = -1 * (.2 * Math.random() + .8);
            this.updateCount = 0, this.vx = i, this.vy = n, this.x = 0, this.y = 0, this.scale.x = 1, this.scale.y = 1, this.alpha = 1, this.vScale = o, this.vAlpha = r
        }, e.prototype.update = function () {
            this.updateCount++;
            this.x += this.vx * Math.exp(-.05 * this.updateCount) * 1, this.y += 1 * (2 + this.vy * Math.exp(-.05 * this.updateCount)), this.scale.x += this.vScale * Math.exp(-.05 * this.updateCount) / 100 * 1, this.scale.y += this.vScale * Math.exp(-.05 * this.updateCount) / 100 * 1, this.alpha += this.vAlpha * (1 - Math.exp(-.05 * this.updateCount)) / 100 * 1
        }, e
    }(PIXI.Sprite)
}