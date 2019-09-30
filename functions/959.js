const function959 = function (t, e, i) {
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
                return e._star = new PIXI.Sprite, e.addChild(e._star), e._plus = new PIXI.Sprite, e._plus.position.set(20, 3), e.addChild(e._plus), e._num = new PIXI.Sprite, e._num.position.set(33, 0), e.addChild(e._num), e._max = new PIXI.Sprite, e._max.position.set(8, -3), e.addChild(e._max), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._star.visible = !1, this._plus.visible = !1, this._max.visible = !1, this._star.texture = o.SALLY_AIRUNIT.getTexture(59), this._plus.texture = o.SALLY_AIRUNIT.getTexture(58), this._max.texture = o.SALLY_AIRUNIT.getTexture(57)
            }, e.prototype.update = function (t) {
                var e;
                switch (t) {
                    case 1:
                        e = 48;
                        break;
                    case 2:
                        e = 49;
                        break;
                    case 3:
                        e = 50;
                        break;
                    case 4:
                        e = 51;
                        break;
                    case 5:
                        e = 52;
                        break;
                    case 6:
                        e = 53;
                        break;
                    case 7:
                        e = 54;
                        break;
                    case 8:
                        e = 55;
                        break;
                    case 9:
                        e = 56;
                        break;
                    case 10:
                        return this._star.visible = !1, this._plus.visible = !1, this._num.visible = !1, void(this._max.visible = !0);
                    default:
                        return this._star.visible = !1, this._plus.visible = !1, this._num.visible = !1, void(this._max.visible = !1)
                }
                this._star.visible = !0, this._plus.visible = !0, this._num.texture = o.SALLY_AIRUNIT.getTexture(e), this._num.visible = !0, this._max.visible = !1
            }, e
        }(PIXI.Container);
    e.AirUnitPanelItemLevelIcon = r
}