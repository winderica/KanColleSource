const function289 = function (t, e, i) {
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
    var o = i(290),
        r = i(21),
        s = function (t) {
            function e() {
                for (var e = t.call(this) || this, i = e.__getPositions__(), n = r.COMMON_MAIN.getTexture(33), s = r.COMMON_MAIN.getTexture(34), a = new Array, _ = 0; _ < i.length; _++) {
                    var l = new PIXI.Sprite,
                        u = i[_];
                    l.position.x = u[0], l.position.y = u[1], l.alpha = 1;
                    var c = new o.KiraAnimation(l, n, s);
                    a.push(c), e.addChild(l)
                }
                return e.kiraAnimations = a, e.visible = !1, e
            }
            return n(e, t), e.prototype.play = function () {
                this.visible = !0;
                for (var t = 0; t < this.kiraAnimations.length; t++) {
                    var e = Math.floor(3 * Math.random());
                    this.kiraAnimations[t].play(e)
                }
            }, e.prototype.stop = function () {
                this.visible = !1;
                for (var t = 0; t < this.kiraAnimations.length; t++) this.kiraAnimations[t].stop()
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this.kiraAnimations.length; t++) this.kiraAnimations[t].dispose(), this.kiraAnimations[t] = null;
                this.kiraAnimations = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.BaseKirakira = s
}