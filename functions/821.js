const function821 = function (t, e, i) {
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
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(o.REMODEL_ANIMATION.getTexture(0));
                e.addChild(i);
                var n = new PIXI.Sprite(o.REMODEL_ANIMATION.getTexture(1));
                e.addChild(n);
                var r = new PIXI.Graphics;
                return r.beginFill(16711935, .5), r.drawRect(-i.width / 2, -i.height / 2, i.width, i.height), r.endFill(), r.position.set(i.width / 2, i.height / 2), e.addChild(r), e.mask = r, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.mask = null
            }, e
        }(PIXI.Container);
    e.CutinBar = r
}