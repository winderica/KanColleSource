const function330 = function (t, e, i) {
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
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (t) {
                    case 1:
                        this.texture = o.SUPPLY_MAIN.getTexture(20);
                        break;
                    case 2:
                        this.texture = o.SUPPLY_MAIN.getTexture(21);
                        break;
                    case 3:
                        this.texture = o.SUPPLY_MAIN.getTexture(22);
                        break;
                    case 0:
                        this.texture = PIXI.Texture.EMPTY
                }
            }, e.prototype.dispose = function () {
                this.memShipId = null
            }, e
        }(PIXI.Sprite);
    e.SupplyCheckBox = r
}