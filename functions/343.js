const function343 = function (t, e, i) {
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
            var e = t.call(this) || this;
            e.WIDTH = 150;
            var i = new PIXI.Graphics;
            i.beginFill(16777215, 1), i.drawRect(0, 0, e.WIDTH, 3), i.endFill();
            var n = new PIXI.Graphics;
            n.beginFill(0, 1), n.drawRect(0, 0, e.WIDTH, 1), n.endFill();
            var o = n.clone();
            return n.position.y = 3, o.position.y = 0, e.addChild(i, n, o), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.Wire = o
}