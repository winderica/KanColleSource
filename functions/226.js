const function226 = function (t, e, i) {
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
    var o = i(140),
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.textureRemodelCategory1 = r.REMODEL_POWERUP.getTexture(28), e.textureRemodelCategory2 = r.REMODEL_POWERUP.getTexture(29), e.textureRemodelCategory3 = r.REMODEL_POWERUP.getTexture(30), e.textureRemodelCategory4 = r.REMODEL_POWERUP.getTexture(31), e
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (this.texture = PIXI.Texture.EMPTY, t) {
                    case o.PowerUpCategory.Karyoku:
                        this.texture = this.textureRemodelCategory1;
                        break;
                    case o.PowerUpCategory.Raisou:
                        this.texture = this.textureRemodelCategory2;
                        break;
                    case o.PowerUpCategory.Taiku:
                        this.texture = this.textureRemodelCategory3;
                        break;
                    case o.PowerUpCategory.Soukou:
                        this.texture = this.textureRemodelCategory4
                }
            }, e.prototype.dispose = function () {
                this.textureRemodelCategory1 = null, this.textureRemodelCategory2 = null, this.textureRemodelCategory3 = null, this.textureRemodelCategory4 = null
            }, e
        }(PIXI.Sprite);
    e.IconCategory = s
}