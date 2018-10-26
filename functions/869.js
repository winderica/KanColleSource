const function869 = function (t, e, i) {
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
    var o = i(3), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.build_ship_00 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(52)), e.build_ship_01 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(53)), e.build_ship_02 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(54)), e.build_ship_03 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(55)), e.build_ship_04 = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(56)), e.build_ship_00.alpha = 0, e.build_ship_01.alpha = 0, e.build_ship_02.alpha = 0, e.build_ship_03.alpha = 0, e.build_ship_04.alpha = 0, e.addChild(e.build_ship_00, e.build_ship_01, e.build_ship_02, e.build_ship_03, e.build_ship_04), e
        }

        return n(e, t), e.prototype.update = function (t) {
            switch (this.build_ship_00.alpha = 0, this.build_ship_01.alpha = 0, this.build_ship_02.alpha = 0, this.build_ship_03.alpha = 0, this.build_ship_04.alpha = 0, t) {
                case 1:
                    this.build_ship_00.alpha = 1, this.build_ship_01.alpha = 0, this.build_ship_02.alpha = 0, this.build_ship_03.alpha = 0, this.build_ship_04.alpha = 0;
                    break;
                case 2:
                    this.build_ship_00.alpha = 1, this.build_ship_01.alpha = 1, this.build_ship_02.alpha = 0, this.build_ship_03.alpha = 0, this.build_ship_04.alpha = 0;
                    break;
                case 3:
                    this.build_ship_00.alpha = 1, this.build_ship_01.alpha = 1, this.build_ship_02.alpha = 1, this.build_ship_03.alpha = 0, this.build_ship_04.alpha = 0;
                    break;
                case 4:
                    this.build_ship_00.alpha = 1, this.build_ship_01.alpha = 1, this.build_ship_02.alpha = 1, this.build_ship_03.alpha = 1, this.build_ship_04.alpha = 0;
                    break;
                case 5:
                    this.build_ship_00.alpha = 1, this.build_ship_01.alpha = 1, this.build_ship_02.alpha = 1, this.build_ship_03.alpha = 1, this.build_ship_04.alpha = 1
            }
        }, e.prototype.dispose = function () {
            this.build_ship_00 = null, this.build_ship_01 = null, this.build_ship_02 = null, this.build_ship_03 = null, this.build_ship_04 = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.NormalBuildShip = r
}