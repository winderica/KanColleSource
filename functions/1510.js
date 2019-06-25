const function1510 = function (t, e, i) {
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
    var o = i(36),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (t) {
                    case 0:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(43);
                        break;
                    case 1:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(45);
                        break;
                    case 2:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(47);
                        break;
                    case 3:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(49);
                        break;
                    case 4:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(51);
                        break;
                    case 5:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(53);
                        break;
                    case 6:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(55);
                        break;
                    case 7:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(57);
                        break;
                    case 8:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(59);
                        break;
                    case 9:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(61);
                        break;
                    default:
                        this.texture = PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Sprite);
    e.ResultDialogNum = r
}