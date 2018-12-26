const function1015 = function (t, e, i) {
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
    var o = i(54),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.SALLY_PRACTICE.getTexture(28);
                var t = new PIXI.Sprite(o.SALLY_PRACTICE.getTexture(29));
                t.position.set(40, 57), this.addChild(t);
                var e = new PIXI.Sprite(o.SALLY_PRACTICE.getTexture(30));
                e.position.set(102, 64), this.addChild(e);
                var i = new PIXI.Sprite(o.SALLY_PRACTICE.getTexture(32));
                i.position.set(132, 64), this.addChild(i)
            }, e
        }(PIXI.Sprite);
    e.UserinfoPanelBG = r
}