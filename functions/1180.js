const function1180 = function (t, e, i) {
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
            return e._num = new PIXI.Sprite, e._num.position.set(29, 15), e.addChild(e._num), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.DUTY_COMMON.getTexture(0)
        }, e.prototype.update = function (t) {
            this._num.texture = this._getNumImage(t), this.visible = this._num.texture != PIXI.Texture.EMPTY
        }, e.prototype._getNumImage = function (t) {
            switch (t) {
                case 1:
                    return o.DUTY_COMMON.getTexture(74);
                case 2:
                    return o.DUTY_COMMON.getTexture(75);
                case 3:
                    return o.DUTY_COMMON.getTexture(76);
                case 4:
                    return o.DUTY_COMMON.getTexture(77);
                case 5:
                    return o.DUTY_COMMON.getTexture(78);
                case 6:
                    return o.DUTY_COMMON.getTexture(79);
                case 7:
                    return o.DUTY_COMMON.getTexture(80);
                case 8:
                    return o.DUTY_COMMON.getTexture(81);
                case 9:
                    return o.DUTY_COMMON.getTexture(82)
            }
            return PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.RewardSelectDialogCount = r
}