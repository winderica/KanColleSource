const function945 = function (t, e, i) {
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
    var o = i(25), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = PIXI.Texture.EMPTY, e
        }

        return n(e, t), e.prototype.update = function (t) {
            switch (t) {
                case 1:
                    this.texture = o.SALLY_AIRUNIT.getTexture(67);
                    break;
                case 2:
                    this.texture = o.SALLY_AIRUNIT.getTexture(68);
                    break;
                case 3:
                    this.texture = o.SALLY_AIRUNIT.getTexture(69);
                    break;
                case 4:
                    this.texture = o.SALLY_AIRUNIT.getTexture(70);
                    break;
                case 5:
                    this.texture = o.SALLY_AIRUNIT.getTexture(71);
                    break;
                case 6:
                    this.texture = o.SALLY_AIRUNIT.getTexture(72);
                    break;
                case 7:
                    this.texture = o.SALLY_AIRUNIT.getTexture(73);
                    break;
                default:
                    this.texture = PIXI.Texture.EMPTY
            }
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.AirPlaneSkillLevel = r
}