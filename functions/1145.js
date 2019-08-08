const function1145 = function (t, e, i) {
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
    var o = i(74),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._num = new PIXI.Sprite, e.addChild(e._num), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = o.COMMON_SELECTABLE_REWARD.getTexture(0)
            }, e.prototype.update = function (t) {
                88 == t ? this._num.position.set(25, 19) : this._num.position.set(29, 15), this._num.texture = this._getNumImage(t), this.visible = this._num.texture != PIXI.Texture.EMPTY
            }, e.prototype._getNumImage = function (t) {
                switch (t) {
                    case 1:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(24);
                    case 2:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(25);
                    case 3:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(26);
                    case 4:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(27);
                    case 5:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(28);
                    case 6:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(29);
                    case 7:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(30);
                    case 8:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(31);
                    case 9:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(33);
                    case 88:
                        return o.COMMON_SELECTABLE_REWARD.getTexture(32)
                }
                return PIXI.Texture.EMPTY
            }, e
        }(PIXI.Sprite);
    e.RewardSelectDialogCount = r
}