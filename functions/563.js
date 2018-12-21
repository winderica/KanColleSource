const function563 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(9), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.removeChildren();
            var e;
            switch (t.type) {
                case 1:
                    e = o.COMMON_MISC.getTexture(117);
                    break;
                case 2:
                    e = o.COMMON_MISC.getTexture(118);
                    break;
                case 3:
                    e = o.COMMON_MISC.getTexture(119);
                    break;
                default:
                    e = PIXI.Texture.EMPTY
            }
            var i = new PIXI.Sprite(e);
            i.x = t.pos.x, i.y = t.pos.y, this.addChild(i)
        }, e.prototype.finalize = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.Kaikyo = r
}