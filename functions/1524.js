const function1524 = function (t, e, i) {
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
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(44);
                        break;
                    case 1:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(46);
                        break;
                    case 2:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(48);
                        break;
                    case 3:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(50);
                        break;
                    case 4:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(52);
                        break;
                    case 5:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(54);
                        break;
                    case 6:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(56);
                        break;
                    case 7:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(58);
                        break;
                    case 8:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(60);
                        break;
                    case 9:
                        this.texture = o.BATTLE_RESULT_MAIN.getTexture(62);
                        break;
                    default:
                        this.texture = PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Sprite);
    e.ResultDialogNumLight = r
}