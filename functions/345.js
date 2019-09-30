const function345 = function (t, e, i) {
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
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = this.getMaterialIconTextResourceid(t);
                this.texture = o.ARSENAL_MAIN.getTexture(e)
            }, e.prototype.getMaterialIconTextResourceid = function (t) {
                switch (t) {
                    case 31:
                        return 161;
                    case 32:
                        return 163;
                    case 33:
                        return 165;
                    case 34:
                        return 167
                }
                throw new Error("unsupported param")
            }, e
        }(PIXI.Sprite);
    e.MaterialIconText = r
}