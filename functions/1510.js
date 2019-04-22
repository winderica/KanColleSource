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
    var o = i(4),
        r = i(36),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name = new o.TextBox(18, 16774898), e._name_mask = new PIXI.Graphics, e._name.addChild(e._name_mask), e._name.mask = e._name_mask, e._enemy_type = new PIXI.Sprite, e._enemy_type.position.set(2, 29), e.addChild(e._name), e.addChild(e._enemy_type), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._name.text = t, this._name_mask.clear(), this._name_mask.beginFill(0), this._name_mask.drawRect(0, 0, 246, this._name.height), this._name_mask.endFill(), this._enemy_type.texture = 1 == e ? r.BATTLE_RESULT_MAIN.getTexture(7) : 2 == e ? r.BATTLE_RESULT_MAIN.getTexture(8) : PIXI.Texture.EMPTY
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._name.destroy(), this._name = null, this._name_mask = null, this._enemy_type = null
            }, e
        }(PIXI.Container);
    e.BannerInfoEnemy = s
}