const function990 = function (t, e, i) {
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
    var o = i(26),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.update = function (t) {
                var e;
                switch (t) {
                    case 1:
                        e = 98;
                        break;
                    case 2:
                        e = 99;
                        break;
                    case 3:
                        e = 100;
                        break;
                    case 4:
                        e = 101;
                        break;
                    case 5:
                        e = 102;
                        break;
                    case 6:
                        e = 103;
                        break;
                    case 7:
                        e = 104;
                        break;
                    default:
                        return void(this.visible = !1)
                }
                this._img.texture = o.SALLY_AIRUNIT.getTexture(e), this._img.x = 23 - Math.floor(this._img.width / 2), this.visible = !0
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItemSkillLevelIcon = r
}