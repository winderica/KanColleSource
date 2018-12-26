const function44 = function (t, e, i) {
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
    var o = i(12),
        r = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                if (PIXI.utils.isWebGLSupported()) {
                    var n = new PIXI.filters.ColorMatrixFilter;
                    n.matrix = [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, .7, 0, 0, 0, 1, 0], i.filters = [n], i.tint = 0, i.alpha = 0
                } else i.visible = !1;
                return i
            }
            return n(e, t), e.prototype.play = function () {
                this.alpha = 0, createjs.Tween.get(this).to({
                    alpha: .4
                }, 135).to({
                    alpha: 0
                }, 1)
            }, e
        }(o.Sprite);
    e.ShipFlash = r
}