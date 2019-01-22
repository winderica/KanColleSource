const function865 = function (t, e, i) {
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
                e.STAR = 5, e.SHOOTING_STAR_DISTANCE = 45;
                var i = Math.random();
                e.stars = [], e.starTables = new Array;
                for (var n = 0; n < e.STAR; n++) {
                    var r = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(143));
                    r.anchor.set(.5, .5), r.alpha = 0, r.position.set(0, 0);
                    var s = Math.sin(Math.PI / 180 * (360 * i)),
                        a = Math.cos(Math.PI / 180 * (360 * i)),
                        _ = {
                            x: 0,
                            y: 0
                        };
                    _.x = s, _.y = a, e.stars.push(r), e.starTables.push(_), e.addChild(r)
                }
                return e
            }
            return n(e, t), e.prototype.updateStarPosition = function () {
                for (var t = 0; t < this.stars.length; t++) {
                    var e = Math.PI / 180 * (360 * Math.random()),
                        i = Math.sin(e),
                        n = Math.cos(e);
                    this.starTables[t].x = i, this.starTables[t].y = n
                }
            }, e.prototype.updateAlpha = function (t) {
                void 0 === t && (t = 0);
                for (var e = 0; e < this.stars.length; e++) {
                    this.stars[e].alpha = t
                }
            }, e.prototype.updateAnimation = function (t) {
                for (var e = Math.PI / 180 * (180 * t), i = 0; i < this.stars.length; i++) {
                    var n = this.stars[i],
                        o = this.starTables[i];
                    n.rotation = e, n.position.set(o.x * this.SHOOTING_STAR_DISTANCE * t, o.y * this.SHOOTING_STAR_DISTANCE * t)
                }
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this.stars.length; t++) this.stars[t] = null;
                this.starTables = null, this.stars = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.GreenStarParticle = r
}