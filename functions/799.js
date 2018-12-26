const function799 = function (t, e, i) {
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
                e.MAX = 5, e.stars = new Array;
                for (var i = o.REMODEL_POWERUP.getTexture(29), n = 0; n < e.MAX; n++) {
                    var r = new PIXI.Sprite(i);
                    r.position.set(45 * n, 0), e.stars.push(r), e.addChild(r)
                }
                return e
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = 0; e < this.MAX; e++) this.stars[e].visible = !1, e < t && (this.stars[e].visible = !0)
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this.MAX; t++) this.removeChild(this.stars[t]), this.stars[t] = null;
                this.stars = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.StarRate = r
}