const function1177 = function (t, e, i) {
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
    var o = i(210), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            if (null == this._star && (this._star = new PIXI.Sprite(o.DUTY_COMMON.getTexture(57)), this.addChild(this._star)), null == this._plus && (this._plus = new PIXI.Sprite(o.DUTY_COMMON.getTexture(67)), this._plus.position.set(21, 5), this.addChild(this._plus)), null == this._level && (this._level = new PIXI.Sprite, this._level.position.set(39, 2), this.addChild(this._level)), t < 1 || 9 < t) this._star.visible = !1, this._plus.visible = !1, this._level.visible = !1; else {
                switch (t) {
                    case 1:
                        this._level.texture = o.DUTY_COMMON.getTexture(58);
                        break;
                    case 2:
                        this._level.texture = o.DUTY_COMMON.getTexture(59);
                        break;
                    case 3:
                        this._level.texture = o.DUTY_COMMON.getTexture(60);
                        break;
                    case 4:
                        this._level.texture = o.DUTY_COMMON.getTexture(61);
                        break;
                    case 5:
                        this._level.texture = o.DUTY_COMMON.getTexture(62);
                        break;
                    case 6:
                        this._level.texture = o.DUTY_COMMON.getTexture(63);
                        break;
                    case 7:
                        this._level.texture = o.DUTY_COMMON.getTexture(64);
                        break;
                    case 8:
                        this._level.texture = o.DUTY_COMMON.getTexture(65);
                        break;
                    case 9:
                        this._level.texture = o.DUTY_COMMON.getTexture(66)
                }
                this._star.visible = !0, this._plus.visible = !0, this._level.visible = !0
            }
        }, e
    }(PIXI.Container);
    e.LevelStar = r
}